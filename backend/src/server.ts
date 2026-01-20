import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { setupGameEngine } from './sockets/gameEngine.js';
import { setupMatchmaking } from './sockets/matchmaking.js';
import { translateToPidgin } from './services/aiService.js';
import bcrypt from 'bcryptjs';
import { socketAuthMiddleware } from './middleware/socketAuth.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { prisma, redisClient } from './db.js';
import { sanitizeBody, sanitizeQuery } from './utils/sanitizer.js';

import { validateEnv } from './utils/envValidator.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// --- CRASH LOGGING ---
process.on('uncaughtException', (err) => {
    console.error('💥 FATAL ERROR (Uncaught):', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 UNHANDLED REJECTION:', reason);
});

validateEnv();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*', methods: ['GET', 'POST'] }
});

// Database clients imported from ./db.js

// CORS MUST come before helmet to handle preflight requests properly
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Helmet after CORS, with relaxed settings for API access
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: "Omo, you dey press too much! Chill small. ✋"
});

app.use('/api/', limiter);
app.use(express.json());

// Global input sanitization (body only - query is read-only in newer Node)
app.use(sanitizeBody);
// app.use(sanitizeQuery); // Disabled: req.query is read-only in Node 24+

// --- NIGERIAN LOGS ---
console.log("Setting up the Compound... 🏗️");

// --- MIDDLEWARE ---
// TODO: JWT Auth Middleware

// --- API ROUTES ---
// Temporarily disabled - fix import issues:
// app.use('/api/v1/auth', authRoutes);
// app.use('/api', healthRoutes);

// --- SOCKET LOGIC ---
// Use dedicated JWT authentication middleware
io.use(socketAuthMiddleware);

setupGameEngine(io);
setupMatchmaking(io, redisClient);

io.on('connection', (socket) => {
    const userId = (socket as any).userId;
    console.log(`New player don enter street! 🏃 ID: ${socket.id}, User: ${userId || 'Guest'}`);

    socket.on('join_room', (roomId) => {
        socket.join(roomId);
        console.log(`Player join ${roomId}. Oya!`);
    });

    socket.on('send_message', (data) => {
        io.emit('new_message', data);
    });

    socket.on('translate_message', async (data) => {
        console.log("AI translation requested for:", data.text);
        const pidgin = await translateToPidgin(data.text);
        socket.emit('message_translated', { msgId: data.id, translatedText: pidgin });
    });

    socket.on('game_action', (data) => {
        // Sync status across room
        io.to(data.roomId).emit('game_update', data);
    });

    socket.on('disconnect', () => {
        console.log("Player don go house. 👋");
    });
});

// --- ROUTES ---
import authRoutes from './routes/auth.js';
import marketRoutes from './routes/market.js';
import villageRoutes from './routes/villages.js';
import userRoutes from './routes/user.js';
import recoveryRoutes from './routes/recovery.js';
import questRoutes from './routes/quests.js';
import socialRoutes from './routes/social.js';
import leaderboardRoutes from './routes/leaderboard.js';

app.use('/api/auth', authRoutes);
app.use('/api/auth', recoveryRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/villages', villageRoutes);
app.use('/api/user', userRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/social', socialRoutes);
app.use('/api/leaderboards', leaderboardRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: "Steady vibing! 🇳🇬", time: new Date() });
});

// Database connection diagnostic endpoint
app.get('/api/db-health', async (req, res) => {
    try {
        // Test database connection with a simple query
        const result = await prisma.$queryRaw`SELECT 1 as connected`;
        const userCount = await prisma.user.count();
        res.json({
            database: "Connected ✅",
            userCount,
            time: new Date(),
            env: {
                hasDbUrl: !!process.env.DATABASE_URL,
                hasJwtSecret: !!process.env.JWT_SECRET,
                nodeEnv: process.env.NODE_ENV
            }
        });
    } catch (error: any) {
        console.error("DATABASE HEALTH CHECK FAILED:", error);
        res.status(500).json({
            database: "Disconnected ❌",
            error: error.message,
            code: error.code,
            time: new Date()
        });
    }
});

// Serve Static Files in Production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
    const frontendPath = path.resolve(__dirname, '../../dist');
    app.use(express.static(frontendPath));

    // Catch-all route for SPA - Safe for Express 5 (No path parser used)
    app.use((req, res, next) => {
        if (req.method === 'GET' && !req.path.startsWith('/api')) {
            return res.sendFile(path.join(frontendPath, 'index.html'));
        }
        next();
    });
}

// POST /api/auth/register
// GET /api/user/profile
// POST /api/market/buy (Atomic transaction)

// 404 handler - must be after all routes
app.use(notFoundHandler);

// Error handler - must be last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // --- 1. Bind Port Immediately (Crucial for Render Health Check) ---
        let currentPort = Number(PORT);

        server.on('error', (err: any) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`⚠️ Port ${currentPort} occupied. Trying ${currentPort + 1}...`);
                currentPort++;
                server.listen(currentPort);
            } else {
                console.error("Server error:", err);
                process.exit(1);
            }
        });

        server.on('listening', () => {
            console.log(`========================================`);
            console.log(`🔥 NAIJA PLAY SERVER READY!`);
            console.log(`Compound dey live for port: ${currentPort}`);
            console.log(`========================================`);
        });

        server.listen(currentPort);

        // --- 2. Background Connections (Non-blocking) ---
        redisClient.connect()
            .then(() => console.log("✅ Redis connected - Real-time features ready."))
            .catch(() => console.warn("⚠️ Redis connection failed. Real-time features fit burst."));

        const initAdmin = async () => {
            const adminEmail = 'Mofosgang123@gmail.com';
            const adminUsername = 'MOFOSGANG';
            const p = prisma as any;

            console.log("Syncing the Street Boss... 🕴️");
            const hashedPassword = await bcrypt.hash('MOFOSGANG12$', 10);

            await p.user.upsert({
                where: { username: adminUsername },
                update: {
                    coins: 30000,
                    level: 30,
                    title: 'Compound Boss',
                    role: 'ADMIN',
                    email: adminEmail // Ensure email is in sync
                },
                create: {
                    username: adminUsername,
                    email: adminEmail,
                    password: hashedPassword,
                    role: 'ADMIN',
                    title: 'Compound Boss',
                    coins: 30000,
                    level: 30,
                    xp: 0
                }
            });
            console.log("Admin account MOFOSGANG (Level 30 | 30k Coins) is READY! ✅");
        };

        await initAdmin();
    } catch (error) {
        console.error("Omo, something burst for server start:", error);
    }
};

startServer();

// --- GRACEFUL SHUTDOWN ---
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing server');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

export { prisma, redisClient, io };
