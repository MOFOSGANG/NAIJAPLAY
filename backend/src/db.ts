import { PrismaClient } from '@prisma/client';
import { createClient } from 'redis';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Initialize PostgreSQL connection pool and Prisma adapter
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// Create Prisma client instance
export const prisma = new PrismaClient({ adapter });

// Initialize Redis client
const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
    console.warn("⚠️ REDIS_URL no dey! Real-time features fit burst.");
}

export const redisClient = createClient({
    url: redisUrl || 'redis://localhost:6379'
});

// Export pool for potential direct access
export { pool };
