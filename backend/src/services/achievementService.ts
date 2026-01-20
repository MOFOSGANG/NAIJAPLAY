import { prisma } from '../db.js';

interface Achievement {
    id: string;
    title: string;
    description: string;
    rewardCoins: number;
    rewardXP: number;
    check: (user: any) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: 'FIRST_BATTLE',
        title: 'STREET BEGINNER',
        description: 'Participate in your first match.',
        rewardCoins: 50,
        rewardXP: 100,
        check: (user) => (user._count?.matchHistory || 0) >= 1
    },
    {
        id: 'LOCAL_CHAMPION',
        title: 'STREET KING',
        description: 'Win 10 matches.',
        rewardCoins: 500,
        rewardXP: 1000,
        check: (user) => {
            return (user._count?.matchHistory || 0) >= 10;
        }
    },
    {
        id: 'LOADED_GEE',
        title: 'MONEY BAGS',
        description: 'Hold 5000+ coins.',
        rewardCoins: 200,
        rewardXP: 500,
        check: (user) => user.coins >= 5000
    },
    {
        id: 'SQUAD_GOALS',
        title: 'SOCIAL VIBE',
        description: 'Have 1+ friends.',
        rewardCoins: 100,
        rewardXP: 200,
        check: (user) => (user._count?.friends || 0) >= 1
    }
];

export const updateAchievements = async (userId: string) => {
    const p = prisma as any;
    const user = await p.user.findUnique({
        where: { id: userId },
        include: {
            _count: {
                select: { matchHistory: true, friends: true, friendOf: true }
            }
        }
    });

    if (!user) return;

    // Combine friend counts
    const friendCount = (user._count?.friends || 0) + (user._count?.friendOf || 0);
    const userWithFriends = { ...user, _count: { ...user._count, friends: friendCount } };

    const currentAchievements = (user.achievements as Record<string, any>) || {};
    let updated = false;
    const newUnlocks: Achievement[] = [];

    for (const achievement of ACHIEVEMENTS) {
        if (!currentAchievements[achievement.id] && achievement.check(userWithFriends)) {
            currentAchievements[achievement.id] = {
                unlocked: true,
                date: new Date().toISOString()
            };

            // Apply rewards
            await p.user.update({
                where: { id: userId },
                data: {
                    coins: { increment: achievement.rewardCoins },
                    xp: { increment: achievement.rewardXP }
                }
            });

            newUnlocks.push(achievement);
            updated = true;
        }
    }

    if (updated) {
        await p.user.update({
            where: { id: userId },
            data: { achievements: currentAchievements }
        });
    }

    return newUnlocks;
};

