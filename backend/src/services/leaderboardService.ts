import { prisma } from '../db.js';

export const getGlobalUserLeaderboard = async (limit = 50) => {
    return await prisma.user.findMany({
        orderBy: { xp: 'desc' },
        take: limit,
        select: {
            id: true,
            username: true,
            avatar: true,
            title: true,
            level: true,
            xp: true,
            village: true
        }
    });
};

export const getRegionalUserLeaderboard = async (region: string, limit = 50) => {
    return await prisma.user.findMany({
        where: {
            village: {
                region: region
            }
        },
        orderBy: { xp: 'desc' },
        take: limit,
        select: {
            id: true,
            username: true,
            avatar: true,
            title: true,
            level: true,
            xp: true,
            village: true
        }
    });
};

export const getVillageLeaderboard = async (limit = 20) => {
    return await prisma.village.findMany({
        orderBy: { totalXP: 'desc' },
        take: limit,
        include: {
            _count: {
                select: { members: true }
            }
        }
    });
};

export const getRegionalVillageLeaderboard = async (region: string, limit = 20) => {
    return await prisma.village.findMany({
        where: { region },
        orderBy: { totalXP: 'desc' },
        take: limit,
        include: {
            _count: {
                select: { members: true }
            }
        }
    });
};

