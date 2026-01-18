import { Server, Socket } from 'socket.io';
import * as matchService from '../services/matchService.js';
import * as achievementService from '../services/achievementService.js';

interface GameState {
    letter: string;
    timer: number;
    isActive: boolean;
    stake: number;
    players: {
        socketId: string;
        userId?: string;
        score: number;
        hasSubmitted: boolean;
    }[];
    startTime: number;
}

const gameRooms: Record<string, GameState> = {};
const userToRoom: Map<string, string> = new Map();

export const setupGameEngine = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        const userId = (socket as any).userId;

        if (userId) {
            const activeRoomId = userToRoom.get(userId);
            if (activeRoomId && gameRooms[activeRoomId]) {
                const room = gameRooms[activeRoomId];
                // Update socket ID in room
                const player = room.players.find(p => p.userId === userId);
                if (player) player.socketId = socket.id;

                socket.join(activeRoomId);
                socket.emit('rejoin_game', {
                    roomId: activeRoomId,
                    letter: room.letter,
                    timer: room.timer,
                    stake: room.stake
                });
            }
        }
        socket.on('start_game', async (data: { roomId: string; stake?: number }) => {
            const { roomId, stake = 0 } = data;
            if (!roomId) return;

            console.log(`Starting game in room: ${roomId} with ${stake}C stake. 🚀`);

            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const secretLetter = letters[Math.floor(Math.random() * letters.length)] || 'A';

            // Get all sockets in the room to identify players
            const socketsInRoom = await io.in(roomId).fetchSockets();
            const players = socketsInRoom.map(s => ({
                socketId: s.id,
                userId: (s as any).userId,
                score: 0,
                hasSubmitted: false
            }));

            gameRooms[roomId] = {
                letter: secretLetter,
                timer: 60,
                isActive: true,
                stake: stake,
                players,
                startTime: Date.now()
            };

            const playerIds = players.map(p => p.userId).filter(Boolean) as string[];

            // Mapping users for reconnection
            playerIds.forEach(id => userToRoom.set(id, roomId));

            // Deduct stakes from players
            if (stake > 0 && playerIds.length > 0) {
                try {
                    await matchService.processMatchStart(playerIds, stake);
                } catch (error) {
                    console.error("Failed to deduct stakes:", error);
                    io.to(roomId).emit('game_error', { message: "Something went wrong with the street bet. Try again." });
                    delete gameRooms[roomId];
                    return;
                }
            }

            io.to(roomId).emit('game_started', {
                letter: secretLetter,
                timer: 60,
                stake
            });

            // Countdown
            const interval = setInterval(() => {
                if (!gameRooms[roomId]) {
                    clearInterval(interval);
                    return;
                }

                gameRooms[roomId].timer -= 1;
                io.to(roomId).emit('timer_update', gameRooms[roomId].timer);

                if (gameRooms[roomId].timer <= 0) {
                    handleGameOver(io, roomId, "Time up! Bring your papers! 📝");
                    clearInterval(interval);
                }
            }, 1000);
        });

        socket.on('submit_answers', (data: { roomId: string; answers: any }) => {
            const room = gameRooms[data.roomId];
            if (!room || !room.isActive) return;

            const player = room.players.find(p => p.socketId === socket.id);
            if (!player || player.hasSubmitted) return;

            console.log(`Answers received from ${socket.id} for room ${data.roomId}`);

            // Server-side validation
            const validate = (str: string) => str && str.trim().toUpperCase().startsWith(room.letter);

            let score = 0;
            if (validate(data.answers.name)) score += 10;
            if (validate(data.answers.place)) score += 10;
            if (validate(data.answers.animal)) score += 10;
            if (validate(data.answers.thing)) score += 10;

            player.score = score;
            player.hasSubmitted = true;

            socket.emit('submission_received', { status: "Correct! You sharp! 🔥", score });

            // If all players submitted, end game early
            if (room.players.every(p => p.hasSubmitted)) {
                handleGameOver(io, data.roomId, "All players don submit! 🏁");
            }
        });
    });
};

const handleGameOver = async (io: Server, roomId: string, message: string) => {
    const room = gameRooms[roomId];
    if (!room) return;

    room.isActive = false;

    // Calculate winners
    let winner: any = null;
    let maxScore = -1;

    room.players.forEach(p => {
        if (p.score > maxScore) {
            maxScore = p.score;
            winner = p;
        }
    });

    const results = {
        message,
        winner: winner ? { socketId: winner.socketId, userId: winner.userId, score: winner.score } : null,
        scores: room.players.map(p => ({ socketId: p.socketId, score: p.score }))
    };

    io.to(roomId).emit('game_over', results);

    // Process Payouts if it was a stake game
    if (room.stake > 0 && winner && winner.userId) {
        const losers = room.players.filter(p => p.userId !== winner.userId && p.userId).map(p => p.userId!);
        try {
            const payout = await matchService.processMatchPayout(winner.userId, losers, room.stake);
            io.to(winner.socketId).emit('payout_received', { amount: payout });
        } catch (error) {
            console.error("Payout failed:", error);
        }
    }

    // Save to match history and check achievements
    try {
        await matchService.saveMatchHistory({
            gameType: 'NPAT',
            playerIds: room.players.map(p => p.userId).filter(Boolean) as string[],
            winnerId: winner?.userId,
            stake: room.stake,
            score: maxScore,
            duration: Math.floor((Date.now() - room.startTime) / 1000)
        });

        // Achievement Check
        const allPlayerIds = room.players.map(p => p.userId).filter(Boolean) as string[];
        for (const id of allPlayerIds) {
            userToRoom.delete(id);
            achievementService.updateAchievements(id).then(newUnlocks => {
                if (newUnlocks && newUnlocks.length > 0) {
                    const playerSocket = room.players.find(p => p.userId === id)?.socketId;
                    if (playerSocket) {
                        io.to(playerSocket).emit('achievements_unlocked', newUnlocks);
                    }
                }
            }).catch(e => console.error("Achievement update error:", e));
        }
    } catch (e) {
        console.error("Failed to save match history:", e);
    }

    // Cleanup room after a delay
    setTimeout(() => {
        delete gameRooms[roomId];
    }, 5000);
};
