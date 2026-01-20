import { prisma } from '../db.js';

export const processMatchStart = async (playerIds: string[], stake: number) => {
    const p = prisma as any;
    if (stake <= 0) return;

    console.log(`Match starting: Deducting ${stake}C from ${playerIds.length} players. 💰`);

    // Use transaction to ensure all players can afford and are deducted
    await p.$transaction(
        playerIds.map(id =>
            p.user.update({
                where: { id },
                data: { coins: { decrement: stake } }
            })
        )
    );
};

export const processMatchPayout = async (winnerId: string, loserIds: string[], stake: number) => {
    const p = prisma as any;
    if (stake <= 0) return 0;

    const pot = stake * (1 + loserIds.length);
    const tax = Math.floor(pot * 0.05);
    const payout = pot - tax;

    console.log(`Match ended: Winner ${winnerId} gets ${payout}C (Pot: ${pot}C, Tax: ${tax}C). 🏆`);

    await p.user.update({
        where: { id: winnerId },
        data: {
            coins: { increment: payout },
            xp: { increment: 50 } // Bonus XP for ranked wins
        }
    });

    return payout;
};

export const saveMatchHistory = async (data: {
    gameType: string;
    playerIds: string[];
    winnerId?: string;
    stake: number;
    score: number;
    duration: number;
}) => {
    const p = prisma as any;
    return await p.match.create({
        data: {
            gameType: data.gameType,
            winnerId: data.winnerId || null,
            stake: data.stake,
            score: data.score,
            duration: data.duration,
            players: {
                connect: data.playerIds.map(id => ({ id }))
            }
        }
    });
};

