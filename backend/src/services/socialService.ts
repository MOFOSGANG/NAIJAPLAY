import { prisma } from '../server.js';

export const sendFriendRequest = async (userId: string, targetUsername: string) => {
    const target = await prisma.user.findUnique({ where: { username: targetUsername } });
    if (!target) throw new Error("User not found");
    if (target.id === userId) throw new Error("You cannot add yourself");

    // Check existing
    const existing = await prisma.friendship.findFirst({
        where: {
            OR: [
                { userId, friendId: target.id },
                { userId: target.id, friendId: userId }
            ]
        }
    });

    if (existing) {
        if (existing.status === 'ACCEPTED') throw new Error("Already friends");
        if (existing.userId === userId) throw new Error("Request already sent");
        throw new Error("They already sent you a request. Check your inbox!");
    }

    return await prisma.friendship.create({
        data: {
            userId,
            friendId: target.id,
            status: 'PENDING'
        }
    });
};

export const respondToRequest = async (userId: string, requestId: string, accept: boolean) => {
    const request = await prisma.friendship.findUnique({ where: { id: requestId } });
    if (!request || request.friendId !== userId) throw new Error("Request not found");

    if (accept) {
        return await prisma.friendship.update({
            where: { id: requestId },
            data: { status: 'ACCEPTED' }
        });
    } else {
        return await prisma.friendship.delete({ where: { id: requestId } });
    }
};

export const getFriends = async (userId: string) => {
    const friends = await prisma.friendship.findMany({
        where: {
            OR: [
                { userId, status: 'ACCEPTED' },
                { friendId: userId, status: 'ACCEPTED' }
            ]
        },
        include: { user: true, friend: true }
    });

    return friends.map(f => f.userId === userId ? f.friend : f.user);
};

export const getPendingRequests = async (userId: string) => {
    return await prisma.friendship.findMany({
        where: { friendId: userId, status: 'PENDING' },
        include: { user: true }
    });
};

export const sendMessage = async (senderId: string, receiverId: string, text: string) => {
    // Verify friendship
    const isFriend = await prisma.friendship.findFirst({
        where: {
            OR: [
                { userId: senderId, friendId: receiverId, status: 'ACCEPTED' },
                { userId: receiverId, friendId: senderId, status: 'ACCEPTED' }
            ]
        }
    });

    if (!isFriend) throw new Error("You must be friends to DM");

    return await prisma.directMessage.create({
        data: { senderId, receiverId, text }
    });
};

export const getMessages = async (userId: string, friendId: string) => {
    return await prisma.directMessage.findMany({
        where: {
            OR: [
                { senderId: userId, receiverId: friendId },
                { senderId: friendId, receiverId: userId }
            ]
        },
        orderBy: { createdAt: 'asc' },
        take: 50
    });
};
