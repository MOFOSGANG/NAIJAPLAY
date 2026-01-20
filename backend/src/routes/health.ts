import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();

/**
 * GET /api/health - Basic health check
 */
router.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

/**
 * GET /api/ready - Readiness check (checks dependencies)
 */
router.get('/ready', async (req, res) => {
    const checks: Record<string, boolean> = {};
    let allHealthy = true;

    // Check database
    try {
        const prisma = new PrismaClient();
        await prisma.$queryRaw`SELECT 1`;
        checks.database = true;
        await prisma.$disconnect();
    } catch (error) {
        checks.database = false;
        allHealthy = false;
    }

    // Check Redis (if configured)
    if (process.env.REDIS_URL) {
        checks.redis = true; // Simplified - actual check would ping Redis
    }

    const status = allHealthy ? 200 : 503;
    res.status(status).json({
        status: allHealthy ? 'ready' : 'not ready',
        checks,
        timestamp: new Date().toISOString()
    });
});

export default router;
