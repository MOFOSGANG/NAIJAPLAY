import { Router } from 'express';
import * as leaderboardService from '../services/leaderboardService.js';

const router = Router();

// --- User Leaderboards ---

router.get('/users/global', async (req, res) => {
    try {
        const users = await leaderboardService.getGlobalUserLeaderboard();
        res.json(users);
    } catch (e: any) {
        res.status(500).json({ error: "Failed to load global rankings" });
    }
});

router.get('/users/regional/:region', async (req, res) => {
    try {
        const users = await leaderboardService.getRegionalUserLeaderboard(req.params.region);
        res.json(users);
    } catch (e: any) {
        res.status(500).json({ error: `Failed to load rankings for ${req.params.region}` });
    }
});

// --- Village Leaderboards ---

router.get('/villages/global', async (req, res) => {
    try {
        const villages = await leaderboardService.getVillageLeaderboard();
        res.json(villages);
    } catch (e: any) {
        res.status(500).json({ error: "Failed to load global village rankings" });
    }
});

router.get('/villages/regional/:region', async (req, res) => {
    try {
        const villages = await leaderboardService.getRegionalVillageLeaderboard(req.params.region);
        res.json(villages);
    } catch (e: any) {
        res.status(500).json({ error: `Failed to load village rankings for ${req.params.region}` });
    }
});

export default router;
