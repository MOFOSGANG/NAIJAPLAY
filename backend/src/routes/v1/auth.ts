import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createUserService } from '../../services/userService.js';
import { validateBody } from '../../validation/schemas.js';
import { createUserSchema, loginSchema } from '../../validation/schemas.js';
import { asyncHandler } from '../../middleware/errorHandler.js';

const router = express.Router();
const prisma = new PrismaClient();
const userService = createUserService(prisma);

// POST /api/v1/auth/register
router.post('/register',
    validateBody(createUserSchema),
    asyncHandler(async (req: Request, res: Response) => {
        const { user, token } = await userService.createUser(req.body);
        res.status(201).json({ user, token });
    })
);

// POST /api/v1/auth/login
router.post('/login',
    validateBody(loginSchema),
    asyncHandler(async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const { user, token } = await userService.authenticateUser(username, password);
        res.json({ user, token });
    })
);

export default router;
