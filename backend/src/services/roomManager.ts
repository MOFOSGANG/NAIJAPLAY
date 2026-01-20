import { Server, Socket } from 'socket.io';
import type { RedisClientType } from 'redis';
import { v4 as uuidv4 } from 'uuid';

interface QueuePlayer {
    socketId: string;
    userId?: string;
    gameType: string;
    stake: number;
    joinedAt: number;
}

interface RoomData {
    id: string;
    name: string;
    gameType: string;
    status: 'WAITING' | 'IN_PROGRESS' | 'FINISHED';
    playerCount: number;
    maxPlayers: number;
    stake: number;
    hostName: string;
    hostAvatar: string;
    isPrivate: boolean;
    createdAt: string;
    players: string[]; // socket IDs
}

/**
 * Room Manager with Redis persistence
 * Falls back to in-memory storage if Redis is unavailable
 */
export class RoomManager {
    private redis: RedisClientType | null;
    private memoryRooms: Map<string, RoomData> = new Map();
    private useRedis: boolean = false;

    constructor(redisClient: RedisClientType | null) {
        this.redis = redisClient;
        this.useRedis = !!redisClient;

        if (this.useRedis) {
            console.log('✅ Room Manager using Redis for persistence');
        } else {
            console.warn('⚠️ Room Manager using in-memory storage (will lose data on restart)');
        }
    }

    /**
     * Create a new room
     */
    async createRoom(roomData: RoomData): Promise<void> {
        if (this.useRedis && this.redis) {
            try {
                await this.redis.set(
                    `room:${roomData.id}`,
                    JSON.stringify(roomData),
                    { EX: 3600 } // Expire after 1 hour of inactivity
                );
                console.log(`📦 Room ${roomData.id} saved to Redis`);
            } catch (error) {
                console.error('Failed to save room to Redis, using memory fallback:', error);
                this.memoryRooms.set(roomData.id, roomData);
            }
        } else {
            this.memoryRooms.set(roomData.id, roomData);
        }
    }

    /**
     * Get a room by ID
     */
    async getRoom(roomId: string): Promise<RoomData | null> {
        if (this.useRedis && this.redis) {
            try {
                const data = await this.redis.get(`room:${roomId}`);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('Failed to get room from Redis:', error);
                return this.memoryRooms.get(roomId) || null;
            }
        }
        return this.memoryRooms.get(roomId) || null;
    }

    /**
     * Update room data
     */
    async updateRoom(roomId: string, updates: Partial<RoomData>): Promise<void> {
        const room = await this.getRoom(roomId);
        if (!room) return;

        const updatedRoom = { ...room, ...updates };

        if (this.useRedis && this.redis) {
            try {
                await this.redis.set(
                    `room:${roomId}`,
                    JSON.stringify(updatedRoom),
                    { EX: 3600 }
                );
            } catch (error) {
                console.error('Failed to update room in Redis:', error);
                this.memoryRooms.set(roomId, updatedRoom);
            }
        } else {
            this.memoryRooms.set(roomId, updatedRoom);
        }
    }

    /**
     * Delete a room
     */
    async deleteRoom(roomId: string): Promise<void> {
        if (this.useRedis && this.redis) {
            try {
                await this.redis.del(`room:${roomId}`);
            } catch (error) {
                console.error('Failed to delete room from Redis:', error);
            }
        }
        this.memoryRooms.delete(roomId);
    }

    /**
     * Get all active rooms
     */
    async getAllRooms(): Promise<RoomData[]> {
        if (this.useRedis && this.redis) {
            try {
                const keys = await this.redis.keys('room:*');
                const rooms: RoomData[] = [];

                for (const key of keys) {
                    const data = await this.redis.get(key);
                    if (data) rooms.push(JSON.parse(data));
                }

                return rooms;
            } catch (error) {
                console.error('Failed to get rooms from Redis:', error);
                return Array.from(this.memoryRooms.values());
            }
        }
        return Array.from(this.memoryRooms.values());
    }

    /**
     * Add player to room
     */
    async addPlayer(roomId: string, socketId: string): Promise<void> {
        const room = await this.getRoom(roomId);
        if (!room) return;

        if (!room.players.includes(socketId)) {
            room.players.push(socketId);
            room.playerCount = room.players.length;
            await this.updateRoom(roomId, room);
        }
    }

    /**
     * Remove player from room
     */
    async removePlayer(roomId: string, socketId: string): Promise<void> {
        const room = await this.getRoom(roomId);
        if (!room) return;

        room.players = room.players.filter(id => id !== socketId);
        room.playerCount = room.players.length;

        if (room.playerCount === 0) {
            await this.deleteRoom(roomId);
        } else {
            await this.updateRoom(roomId, room);
        }
    }
}

