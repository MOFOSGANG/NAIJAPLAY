import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../middleware/errorHandler.js';

const JWT_SECRET = process.env.JWT_SECRET || 'naija-play-secret-key-change-in-production';

export interface CreateUserDTO {
    username: string;
    email: string;
    password: string;
    avatar?: string;
}

export interface UpdateUserDTO {
    username?: string;
    bio?: string;
    avatar?: string;
    activeTheme?: string;
}

export interface UserWithStats extends User {
    // Extended user object with computed fields
}

/**
 * User Service - Handles all user-related business logic
 */
export class UserService {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    /**
     * Create a new user (registration)
     */
    async createUser(data: CreateUserDTO): Promise<{ user: User; token: string }> {
        // Validate username length
        if (data.username.length < 3 || data.username.length > 20) {
            throw new AppError('Username must be between 3-20 characters', 400);
        }

        // Check if username exists
        const existingUser = await this.prisma.user.findUnique({
            where: { username: data.username }
        });

        if (existingUser) {
            throw new AppError('Username already taken, abeg pick another one!', 400);
        }

        // Check if email exists
        const existingEmail = await this.prisma.user.findUnique({
            where: { email: data.email }
        });

        if (existingEmail) {
            throw new AppError('Email already registered!', 400);
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create user
        const user = await this.prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
                avatar: data.avatar || '🎮',
                bio: 'New to the streets',
                coins: 1000, // Starting bonus
                xp: 0,
                level: 1,
                title: 'Street Trainee',
                role: 'PLAYER'
            }
        });

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

        return { user, token };
    }

    /**
     * Authenticate user (login)
     */
    async authenticateUser(username: string, password: string): Promise<{ user: User; token: string }> {
        const user = await this.prisma.user.findUnique({
            where: { username }
        });

        if (!user) {
            throw new AppError('Oga, no user with that username!', 401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new AppError('Password no correct!', 401);
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

        return { user, token };
    }

    /**
     * Get user by ID
     */
    async getUserById(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                inventory: true,
                achievements: true,
                dailyQuests: {
                    where: {
                        questDate: {
                            gte: new Date(new Date().setHours(0, 0, 0, 0))
                        }
                    }
                }
            }
        }) as Promise<User | null>;
    }

    /**
     * Get user by username
     */
    async getUserByUsername(username: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { username }
        });
    }

    /**
     * Update user profile
     */
    async updateUser(id: string, data: UpdateUserDTO): Promise<User> {
        // Validate username if being changed
        if (data.username) {
            if (data.username.length < 3 || data.username.length > 20) {
                throw new AppError('Username must be between 3-20 characters', 400);
            }

            const existing = await this.prisma.user.findUnique({
                where: { username: data.username }
            });

            if (existing && existing.id !== id) {
                throw new AppError('Username already taken!', 400);
            }
        }

        return this.prisma.user.update({
            where: { id },
            data
        });
    }

    /**
     * Add coins to user
     */
    async addCoins(userId: string, amount: number): Promise<User> {
        if (amount < 0) {
            throw new AppError('Cannot add negative coins', 400);
        }

        return this.prisma.user.update({
            where: { id: userId },
            data: {
                coins: { increment: amount }
            }
        });
    }

    /**
     * Deduct coins from user
     */
    async deductCoins(userId: string, amount: number): Promise<User> {
        const user = await this.getUserById(userId);
        if (!user) {
            throw new AppError('User not found', 404);
        }

        if (user.coins < amount) {
            throw new AppError('Insufficient coins!', 400);
        }

        return this.prisma.user.update({
            where: { id: userId },
            data: {
                coins: { decrement: amount }
            }
        });
    }

    /**
     * Add XP and handle level ups
     */
    async addXP(userId: string, amount: number): Promise<User> {
        const user = await this.getUserById(userId);
        if (!user) {
            throw new AppError('User not found', 404);
        }

        const newXP = user.xp + amount;
        const XP_PER_LEVEL = 1000;
        const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;

        // Update level titles
        const titles = [
            "Street Trainee", "Street Pikin", "Senior Man", "Island Big Boy",
            "Compound Chief", "Naija Legend", "Street Legend", "Agba Gamer",
            "I Too Know", "Compound Boss", "Street King", "Area Master"
        ];

        const titleIndex = Math.min(newLevel - 1, titles.length - 1);
        const newTitle = titles[titleIndex];

        return this.prisma.user.update({
            where: { id: userId },
            data: {
                xp: newXP,
                level: newLevel,
                title: newTitle
            }
        });
    }

    /**
     * Search users by username
     */
    async searchUsers(query: string, limit: number = 10): Promise<User[]> {
        return this.prisma.user.findMany({
            where: {
                username: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            take: limit,
            select: {
                id: true,
                username: true,
                avatar: true,
                title: true,
                level: true,
                // Exclude sensitive fields
                password: false
            }
        }) as Promise<User[]>;
    }

    /**
     * Join or switch village
     */
    async joinVillage(userId: string, villageId: string): Promise<User> {
        return this.prisma.user.update({
            where: { id: userId },
            data: { villageId }
        });
    }

    /**
     * Soft delete user
     * Note: Requires deletedAt column in User schema
     */
    async deleteUser(userId: string): Promise<User> {
        // TODO: Add deletedAt column to Prisma schema for soft deletes
        // For now, just mark user as inactive
        return this.prisma.user.update({
            where: { id: userId },
            data: {
                bio: '[DELETED USER]'
            }
        });
    }
}

// Singleton instance
export const createUserService = (prisma: PrismaClient) => new UserService(prisma);

