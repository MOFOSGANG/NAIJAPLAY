import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
    if (typeof input !== 'string') return input;
    return DOMPurify.sanitize(input, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    });
}

/**
 * Sanitize object recursively
 */
export function sanitizeObject<T extends Record<string, any>>(obj: T): T {
    const sanitized = {} as T;

    for (const key in obj) {
        const value = obj[key];

        if (typeof value === 'string') {
            sanitized[key] = sanitizeInput(value) as T[Extract<keyof T, string>];
        } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            sanitized[key] = sanitizeObject(value);
        } else if (Array.isArray(value)) {
            sanitized[key] = value.map((item: unknown) =>
                typeof item === 'string' ? sanitizeInput(item) :
                    typeof item === 'object' && item !== null ? sanitizeObject(item as Record<string, any>) : item
            ) as T[Extract<keyof T, string>];
        } else {
            sanitized[key] = value;
        }
    }

    return sanitized;
}

/**
 * Express middleware to sanitize request body
 */
export function sanitizeBody(req: any, res: any, next: any) {
    if (req.body) {
        req.body = sanitizeObject(req.body);
    }
    next();
}

/**
 * Express middleware to sanitize query params
 */
export function sanitizeQuery(req: any, res: any, next: any) {
    if (req.query) {
        req.query = sanitizeObject(req.query);
    }
    next();
}
