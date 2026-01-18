import { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

interface QueuePlayer {
    socketId: string;
    userId?: string;
    gameType: string;
    stake: number;
    joinedAt: number;
}

// Queues grouped by gameType and then by stake
// queues[gameType][stake] = QueuePlayer[]
const queues: Record<string, Record<number, QueuePlayer[]>> = {};

const GAME_TYPES = ['NPAT', 'AFTER', 'TINKO', 'CATCHER', 'GARDEN', 'SUWE'];

// Initialize queues
GAME_TYPES.forEach(gt => {
    queues[gt] = {};
});

export const setupMatchmaking = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        // userId from auth middleware (to be implemented)
        const userId = socket.handshake.auth?.userId;

        socket.on('join_queue', (data: { gameType: string; stake: number }) => {
            const { gameType, stake = 0 } = data;

            if (!queues[gameType]) {
                queues[gameType] = {};
            }
            if (!queues[gameType][stake]) {
                queues[gameType][stake] = [];
            }

            // Prevent double queuing
            if (isPlayerInAnyQueue(socket.id)) return;

            console.log(`Player ${socket.id} (User: ${userId}) joined ${gameType} queue with ${stake} stake. 💰`);

            queues[gameType][stake].push({
                socketId: socket.id,
                userId,
                gameType,
                stake,
                joinedAt: Date.now()
            });

            // Trigger match check
            checkMatches(io, gameType, stake);
        });

        socket.on('leave_queue', () => {
            removePlayerFromAllQueues(socket.id);
            console.log(`Player ${socket.id} left all queues. 👋`);
        });

        socket.on('disconnect', () => {
            removePlayerFromAllQueues(socket.id);
        });
    });
};

const checkMatches = (io: Server, gameType: string, stake: number) => {
    const queue = queues[gameType]?.[stake];
    if (!queue) return;

    // Simple 1v1 match for now
    while (queue.length >= 2) {
        const player1 = queue.shift();
        const player2 = queue.shift();
        if (!player1 || !player2) break;

        const roomId = `room_${uuidv4().substring(0, 8)}`;

        console.log(`Match found for ${gameType} (${stake}C)! Creating room ${roomId} 🎮`);

        const roomData = {
            id: roomId,
            name: `${gameType} Battle`,
            gameType,
            status: 'WAITING',
            playerCount: 2,
            maxPlayers: 2, // Changed to 2 for 1v1
            stake
        };

        io.to(player1.socketId).emit('match_found', { roomId, room: roomData });
        io.to(player2.socketId).emit('match_found', { roomId, room: roomData });
    }
};

const isPlayerInAnyQueue = (socketId: string) => {
    for (const gt in queues) {
        const subQueues = queues[gt];
        for (const stake in subQueues) {
            const q = subQueues[stake as any];
            if (q && q.find((p: QueuePlayer) => p.socketId === socketId)) return true;
        }
    }
    return false;
};

const removePlayerFromAllQueues = (socketId: string) => {
    for (const gt in queues) {
        const subQueues = queues[gt];
        for (const stake in subQueues) {
            const q = subQueues[stake as any];
            if (q) {
                subQueues[stake as any] = q.filter((p: QueuePlayer) => p.socketId !== socketId);
            }
        }
    }
};
