import { prisma } from '../server.js';

export const checkDailyReward = async (userId: string) => {
    const p = prisma as any;
    const user = await p.user.findUnique({
        where: { id: userId },
        select: { lastLoginAt: true, loginStreak: true, coins: true }
    });

    if (!user) throw new Error("User not found");

    const now = new Date();
    const lastLogin = new Date(user.lastLoginAt);

    // Check if it's a new day
    const isNewDay = now.toDateString() !== lastLogin.toDateString();

    if (!isNewDay) {
        return { claimed: false, message: "Already claimed today, oga! Come back tomorrow. ✋" };
    }

    // Check if streak is broken (more than 48 hours)
    const hoursSinceLastLogin = (now.getTime() - lastLogin.getTime()) / (1000 * 60 * 60);
    let newStreak = (user.loginStreak as number) || 1;

    if (hoursSinceLastLogin > 48) {
        newStreak = 1; // Reset streak
    } else {
        newStreak += 1; // Increment streak
    }

    // Calculate reward (100 per day of streak, max 500)
    const rewardCoins = Math.min(newStreak * 100, 500);
    const rewardXP = 50 * newStreak;

    await p.user.update({
        where: { id: userId },
        data: {
            coins: { increment: rewardCoins },
            xp: { increment: rewardXP },
            loginStreak: newStreak,
            lastLoginAt: now
        }
    });

    return {
        claimed: true,
        rewardCoins,
        rewardXP,
        newStreak,
        message: `Oshey! Day ${newStreak} login. You get ${rewardCoins} coins and ${rewardXP} XP! 🥖🔥`
    };
};
