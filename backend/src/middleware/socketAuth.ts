import jwt from 'jsonwebtoken';
import { Socket } from 'socket.io';

const JWT_SECRET = process.env.JWT_SECRET || 'naija-play-secret-key-change-in-production';

/**
 * Socket.io middleware for JWT authentication
 * Verifies token and attaches userId to socket instance
 */
export const socketAuthMiddleware = (socket: Socket, next: (err?: Error) => void) => {
    try {
        const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.replace('Bearer ', '');

        if (!token) {
            // Allow connection but mark as guest
            (socket as any).userId = null;
            (socket as any).isGuest = true;
            return next();
        }

        // Verify JWT token
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        if (!decoded.userId) {
            return next(new Error('Invalid token payload'));
        }

        // Attach userId to socket instance
        (socket as any).userId = decoded.userId;
        (socket as any).isGuest = false;

        console.log(`✅ Socket authenticated: ${socket.id} (User: ${decoded.userId})`);
        next();

    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            return next(new Error('Token expired'));
        } else if (error.name === 'JsonWebTokenError') {
            return next(new Error('Invalid token'));
        }
        return next(new Error('Authentication failed'));
    }
};
