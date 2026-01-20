import { describe, it, expect, beforeEach, vi } from 'vitest';
import { UserService } from '../src/services/userService';
import { PrismaClient } from '@prisma/client';

// Mock Prisma
vi.mock('@prisma/client', () => ({
    PrismaClient: vi.fn(() => ({
        user: {
            findUnique: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            findMany: vi.fn()
        },
        $disconnect: vi.fn()
    }))
}));

// Mock bcrypt
vi.mock('bcryptjs', () => ({
    default: {
        hash: vi.fn((password: string) => Promise.resolve('hashed_' + password)),
        compare: vi.fn((password: string, hash: string) => Promise.resolve(hash === 'hashed_' + password))
    }
}));

describe('UserService', () => {
    let userService: UserService;
    let mockPrisma: any;

    beforeEach(() => {
        mockPrisma = new PrismaClient();
        userService = new UserService(mockPrisma);
        vi.clearAllMocks();
    });

    describe('createUser', () => {
        it('should create a new user with valid data', async () => {
            mockPrisma.user.findUnique.mockResolvedValue(null);
            mockPrisma.user.create.mockResolvedValue({
                id: 'user-123',
                username: 'testuser',
                email: 'test@example.com',
                coins: 1000,
                xp: 0,
                level: 1
            });

            const result = await userService.createUser({
                username: 'testuser',
                email: 'test@example.com',
                password: 'Password123'
            });

            expect(result.user.username).toBe('testuser');
            expect(result.token).toBeDefined();
            expect(mockPrisma.user.create).toHaveBeenCalled();
        });

        it('should throw error for short username', async () => {
            await expect(userService.createUser({
                username: 'ab',
                email: 'test@example.com',
                password: 'Password123'
            })).rejects.toThrow('Username must be between 3-20 characters');
        });

        it('should throw error for duplicate username', async () => {
            mockPrisma.user.findUnique.mockResolvedValueOnce({ id: 'existing' });

            await expect(userService.createUser({
                username: 'existinguser',
                email: 'new@example.com',
                password: 'Password123'
            })).rejects.toThrow('Username already taken');
        });
    });

    describe('authenticateUser', () => {
        it('should authenticate valid user', async () => {
            mockPrisma.user.findUnique.mockResolvedValue({
                id: 'user-123',
                username: 'testuser',
                password: 'hashed_Password123'
            });

            const result = await userService.authenticateUser('testuser', 'Password123');

            expect(result.user.username).toBe('testuser');
            expect(result.token).toBeDefined();
        });

        it('should throw error for non-existent user', async () => {
            mockPrisma.user.findUnique.mockResolvedValue(null);

            await expect(userService.authenticateUser('nouser', 'Password123'))
                .rejects.toThrow('Oga, no user with that username!');
        });
    });

    describe('addCoins', () => {
        it('should add coins to user', async () => {
            mockPrisma.user.update.mockResolvedValue({
                id: 'user-123',
                coins: 1500
            });

            const result = await userService.addCoins('user-123', 500);

            expect(mockPrisma.user.update).toHaveBeenCalledWith({
                where: { id: 'user-123' },
                data: { coins: { increment: 500 } }
            });
        });

        it('should throw error for negative amount', async () => {
            await expect(userService.addCoins('user-123', -100))
                .rejects.toThrow('Cannot add negative coins');
        });
    });

    describe('addXP', () => {
        it('should add XP and update level/title correctly', async () => {
            mockPrisma.user.findUnique.mockResolvedValue({
                id: 'user-123',
                xp: 900,
                level: 1
            });
            mockPrisma.user.update.mockResolvedValue({
                id: 'user-123',
                xp: 1100,
                level: 2,
                title: 'Street Pikin'
            });

            const result = await userService.addXP('user-123', 200);

            expect(mockPrisma.user.update).toHaveBeenCalled();
        });
    });

    describe('searchUsers', () => {
        it('should search users by username', async () => {
            mockPrisma.user.findMany.mockResolvedValue([
                { id: '1', username: 'testuser1' },
                { id: '2', username: 'testuser2' }
            ]);

            const results = await userService.searchUsers('test', 10);

            expect(results.length).toBe(2);
            expect(mockPrisma.user.findMany).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: { username: { contains: 'test', mode: 'insensitive' } },
                    take: 10
                })
            );
        });
    });
});
