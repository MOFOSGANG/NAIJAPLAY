import type { Request, Response, NextFunction } from 'express';

/**
 * Custom error class with status code
 */
export class AppError extends Error {
    statusCode: number;
    isOperational: boolean;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Centralized error handling middleware
 * Handles all errors thrown in Express routes
 */
export const errorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Default status code and message
    let statusCode = 500;
    let message = 'Omo, something burst for server! 💥';
    let isOperational = false;

    // Handle custom AppError
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
        isOperational = err.isOperational;
    }

    // Handle specific error types
    else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'Validation error: ' + err.message;
    }
    else if (err.name === 'UnauthorizedError' || err.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = 'Authentication failed! Check your token. 🚫';
    }
    else if (err.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Your session don expire! Login again. ⏰';
    }
    else if (err.name === 'PrismaClientKnownRequestError') {
        statusCode = 400;
        message = 'Database operation failed. Check your data. 🗃️';
    }

    // Log error for debugging (in production, use proper logger)
    const errorLog = {
        timestamp: new Date().toISOString(),
        method: req.method,
        path: req.path,
        statusCode,
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        isOperational
    };

    if (statusCode >= 500) {
        console.error('🔴 SERVER ERROR:', errorLog);
    } else {
        console.warn('⚠️ CLIENT ERROR:', errorLog);
    }

    // Send error response
    res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV === 'development' && {
            details: err.message,
            stack: err.stack
        })
    });
};

/**
 * 404 Not Found handler
 */
export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({
        error: `Route ${req.method} ${req.path} no dey exist! Check your URL. 🔍`
    });
};

/**
 * Async route wrapper to catch errors
 * Usage: app.get('/route', asyncHandler(async (req, res) => { ... }))
 */
export const asyncHandler = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
