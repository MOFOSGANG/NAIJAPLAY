import { z } from 'zod';

/**
 * Validation schemas using Zod for type-safe request validation
 */

// User validation schemas
export const createUserSchema = z.object({
    username: z.string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be at most 20 characters')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    email: z.string().email('Invalid email format'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    avatar: z.string().emoji().optional()
});

export const loginSchema = z.object({
    username: z.string().min(1, 'Username required'),
    password: z.string().min(1, 'Password required')
});

export const updateUserSchema = z.object({
    username: z.string().min(3).max(20).optional(),
    bio: z.string().max(200).optional(),
    avatar: z.string().emoji().optional(),
    activeTheme: z.enum(['classic', 'indigo', 'royal']).optional()
});

// Game validation schemas
export const createMatchSchema = z.object({
    gameType: z.enum(['NPAT', 'AFTER', 'SUWE', 'GARDEN', 'TINKO', 'CATCHER']),
    score: z.number().int().min(0),
    result: z.enum(['WIN', 'LOSS', 'DRAW']),
    stake: z.number().int().min(0).optional()
});

// Social validation schemas
export const sendFriendRequestSchema = z.object({
    receiverUsername: z.string().min(1)
});

export const respondToRequestSchema = z.object({
    requestId: z.string().uuid(),
    accept: z.boolean()
});

export const sendMessageSchema = z.object({
    receiverId: z.string().uuid(),
    content: z.string().min(1).max(500)
});

// Room validation schemas
export const createRoomSchema = z.object({
    name: z.string().min(1).max(50),
    gameType: z.enum(['NPAT', 'AFTER', 'SUWE', 'GARDEN', 'TINKO', 'CATCHER']),
    isPrivate: z.boolean(),
    stake: z.number().int().min(0).max(10000).optional(),
    maxPlayers: z.number().int().min(2).max(8).optional()
});

// Market validation schemas
export const buyItemSchema = z.object({
    itemId: z.string().min(1)
});

// Village validation schemas
export const joinVillageSchema = z.object({
    villageId: z.string().uuid()
});

// Helper function to validate data against schema
export function validateSchema<T>(schema: z.ZodSchema<T>, data: unknown): T {
    return schema.parse(data);
}

// Middleware factory for Express route validation
export function validateBody<T>(schema: z.ZodSchema<T>) {
    return (req: any, res: any, next: any) => {
        try {
            req.validatedBody = schema.parse(req.body);
            next();
        } catch (error: unknown) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    error: 'Validation failed',
                    details: error.issues.map((e) => ({
                        field: e.path.join('.'),
                        message: e.message
                    }))
                });
            }
            next(error);
        }
    };
}
