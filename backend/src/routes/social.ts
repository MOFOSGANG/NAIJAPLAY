import { Router } from 'express';
import type { Request } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import type { AuthenticatedRequest } from '../middleware/auth.js';
import * as socialService from '../services/socialService.js';

const router = Router();

// --- Friend Requests ---

router.post('/request', authMiddleware, async (req: AuthenticatedRequest, res) => {
    try {
        const { username } = req.body;
        if (!username) return res.status(400).json({ error: "Username required" });
        if (!req.userId) return res.status(401).json({ error: "Unauthorized" });
        await socialService.sendFriendRequest(req.userId, username);
        res.json({ message: "Request sent! Waiting for response." });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/request/:id/respond', authMiddleware, async (req: AuthenticatedRequest, res) => {
    try {
        const { accept } = req.body;
        const { id } = req.params;
        if (!id || typeof id !== 'string') throw new Error("Invalid request ID");
        if (!req.userId) return res.status(401).json({ error: "Unauthorized" });
        await socialService.respondToRequest(req.userId, id, accept);
        res.json({ message: accept ? "Oshey! New friend added." : "Request rejected." });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/friends', authMiddleware, async (req: AuthenticatedRequest, res) => {
    try {
        if (!req.userId) return res.status(401).json({ error: "Unauthorized" });
        const friends = await socialService.getFriends(req.userId);
        res.json(friends);
    } catch (error: any) {
        res.status(500).json({ error: "Failed to load friends" });
    }
});

router.get('/requests', authMiddleware, async (req: AuthenticatedRequest, res) => {
    try {
        if (!req.userId) return res.status(401).json({ error: "Unauthorized" });
        const requests = await socialService.getPendingRequests(req.userId);
        res.json(requests);
    } catch (error: any) {
        res.status(500).json({ error: "Failed to load requests" });
    }
});

// --- Direct Messages ---

router.post('/messages', authMiddleware, async (req: AuthenticatedRequest, res) => {
    try {
        const { receiverId, text } = req.body;
        if (!req.userId) return res.status(401).json({ error: "Unauthorized" });
        const msg = await socialService.sendMessage(req.userId, receiverId, text);
        res.json(msg);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/messages/:friendId', authMiddleware, async (req: AuthenticatedRequest, res) => {
    try {
        const { friendId } = req.params;
        if (!friendId || typeof friendId !== 'string') throw new Error("Invalid friend ID");
        if (!req.userId) return res.status(401).json({ error: "Unauthorized" });
        const messages = await socialService.getMessages(req.userId, friendId);
        res.json(messages);
    } catch (error: any) {
        res.status(500).json({ error: "Failed to load chats" });
    }
});

export default router;
