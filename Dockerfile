# Build Stage for Frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Build Stage for Backend
FROM node:18-alpine AS backend-builder
WORKDIR /app
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install
COPY backend/ .
RUN npx prisma generate
RUN npm run build

# Final Production Stage
FROM node:18-alpine
WORKDIR /app

# Copy built frontend
COPY --from=frontend-builder /app/dist ./dist

# Copy backend build and dependencies
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules
COPY --from=backend-builder /app/backend/package*.json ./backend/
COPY --from=backend-builder /app/backend/src/generated ./backend/src/generated

EXPOSE 5000

ENV NODE_ENV=production
WORKDIR /app/backend
CMD ["npm", "run", "start"]
