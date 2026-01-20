import { prisma } from '../db.js';

interface QuestTemplate {
    title: string;
    description: string;
    target: number;
    rewardXP: number;
    rewardCoins: number;
}

const QUEST_TEMPLATES: QuestTemplate[] = [
    { title: "Win 3 Matches", description: "Show dem say you be boss.", target: 3, rewardXP: 100, rewardCoins: 50 },
    { title: "Play 5 Games", description: "Keep the hustle going.", target: 5, rewardXP: 50, rewardCoins: 100 },
    { title: "Earn 500 Coins", description: "Secure the bag!", target: 500, rewardXP: 50, rewardCoins: 100 },
    { title: "Spend 200 Coins", description: "Money must circulate.", target: 200, rewardXP: 25, rewardCoins: 25 },
    { title: "Win a Game", description: "Just one win for the road.", target: 1, rewardXP: 30, rewardCoins: 20 },
];

export const refreshDailyQuests = async (userId: string) => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Check if quests exist for today
    const existing = await prisma.quest.findFirst({
        where: {
            userId,
            createdAt: { gte: startOfDay }
        }
    });

    if (existing) return;

    // Generate 3 new quests
    const shuffled = [...QUEST_TEMPLATES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    for (const q of selected) {
        await prisma.quest.create({
            data: {
                userId,
                title: q.title,
                description: q.description,
                type: 'DAILY',
                target: q.target,
                rewardXP: q.rewardXP,
                rewardCoins: q.rewardCoins,
                progress: 0,
                completed: false,
                claimed: false
            }
        });
    }
};

export const updateQuestProgress = async (userId: string, type: string, amount: number = 1) => {
    // This is a simplified progress updater. 
    // Ideally, we'd check the quest 'type' or title to match the action.
    // For now, let's assume specific hook calls this.

    // Fetch active incomplete quests
    const activeQuests = await prisma.quest.findMany({
        where: {
            userId,
            completed: false,
            // For simplicity, we match string patterns in titles
            // In a real app, 'type' field would be more specific like 'WIN_GAME'
        }
    });

    for (const quest of activeQuests) {
        let shouldUpdate = false;

        // Very basic matching logic
        if (type === 'WIN' && quest.title.includes('Win')) shouldUpdate = true;
        if (type === 'PLAY' && (quest.title.includes('Play') || quest.title.includes('Game'))) shouldUpdate = true;
        if (type === 'EARN_COINS' && quest.title.includes('Earn')) shouldUpdate = true;
        if (type === 'SPEND_COINS' && quest.title.includes('Spend')) shouldUpdate = true;

        if (shouldUpdate) {
            const newProgress = quest.progress + amount;
            const completed = newProgress >= quest.target;

            await prisma.quest.update({
                where: { id: quest.id },
                data: {
                    progress: newProgress,
                    completed: completed
                }
            });
        }
    }
};

export const claimQuestReward = async (userId: string, questId: string) => {
    const quest = await prisma.quest.findUnique({ where: { id: questId } });
    if (!quest || !quest.completed || quest.claimed) {
        throw new Error("Quest not eligible for claim.");
    }

    // Update Quest
    await prisma.quest.update({
        where: { id: questId },
        data: { claimed: true }
    });

    // Grant Rewards
    await prisma.user.update({
        where: { id: userId },
        data: {
            xp: { increment: quest.rewardXP },
            coins: { increment: quest.rewardCoins }
        }
    });

    return quest;
};

