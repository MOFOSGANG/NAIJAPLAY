const REQUIRED_ENV = [
    'DATABASE_URL',
    'JWT_SECRET',
    'GEMINI_API_KEY'
];

const RECOMMENDED_ENV = [
    'REDIS_URL',
    'CORS_ORIGIN',
    'PORT'
];

export const validateEnv = () => {
    const missing = REQUIRED_ENV.filter(key => !process.env[key]);
    const missingRecommended = RECOMMENDED_ENV.filter(key => !process.env[key]);

    if (missing.length > 0) {
        console.error("========================================");
        console.error("❌ MISSING REQUIRED ENVIRONMENT VARIABLES:");
        missing.forEach(m => {
            console.error(`   - ${m}`);
            // Provide specific guidance for each  variable
            if (m === 'DATABASE_URL') {
                console.error(`     → Get from Supabase: Project Settings → Database`);
            } else if (m === 'JWT_SECRET') {
                console.error(`     → Generate with: openssl rand -base64 32`);
            } else if (m === 'GEMINI_API_KEY') {
                console.error(`     → Get from: https://ai.google.dev/`);
            }
        });
        console.error("========================================");

        if (process.env.NODE_ENV === 'production') {
            console.error("🔴 Cannot start server without required env vars in production!");
            process.exit(1);
        } else {
            console.warn("⚠️ Starting in development mode without required env vars");
        }
    } else {
        console.log("✅ All required environment variables are set.");
    }

    // Warn about missing recommended vars
    if (missingRecommended.length > 0) {
        console.warn("⚠️ Recommended environment variables not set:");
        missingRecommended.forEach(m => {
            console.warn(`   - ${m}`);
            if (m === 'REDIS_URL') {
                console.warn(`     → Real-time features will use in-memory fallback`);
            } else if (m === 'CORS_ORIGIN') {
                console.warn(`     → Using permissive CORS (*) - not recommended for production`);
            }
        });
    }

    // Validate JWT_SECRET strength
    if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
        console.warn("⚠️ JWT_SECRET is too short! Use at least 32 characters for security.");
    }

    // Validate DATABASE_URL format
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.startsWith('postgres')) {
        console.error("❌ DATABASE_URL must be a PostgreSQL connection string!");
        if (process.env.NODE_ENV === 'production') {
            process.exit(1);
        }
    }
};
