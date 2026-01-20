-- Add indexes for frequently queried fields to improve performance

-- User table indexes
CREATE INDEX IF NOT EXISTS idx_user_username ON "User"(username);
CREATE INDEX IF NOT EXISTS idx_user_email ON "User"(email);
CREATE INDEX IF NOT EXISTS idx_user_village_id ON "User"("villageId");
CREATE INDEX IF NOT EXISTS idx_user_created_at ON "User"("createdAt");
CREATE INDEX IF NOT EXISTS idx_user_level ON "User"(level DESC);  -- For leaderboards
CREATE INDEX IF NOT EXISTS idx_user_xp ON "User"(xp DESC);  -- For rankings

-- Match History indexes
CREATE INDEX IF NOT EXISTS idx_match_history_user_id ON "MatchHistory"("userId");
CREATE INDEX IF NOT EXISTS idx_match_history_game_type ON "MatchHistory"("gameType");
CREATE INDEX IF NOT EXISTS idx_match_history_created_at ON "MatchHistory"("createdAt" DESC);
CREATE INDEX IF NOT EXISTS idx_match_history_result ON "MatchHistory"(result);

-- Composite index for user's recent matches by game type
CREATE INDEX IF NOT EXISTS idx_match_user_game_created ON "MatchHistory"("userId", "gameType", "createdAt" DESC);

-- Friend Request indexes
CREATE INDEX IF NOT EXISTS idx_friend_request_sender ON "FriendRequest"("senderId");
CREATE INDEX IF NOT EXISTS idx_friend_request_receiver ON "FriendRequest"("receiverId");
CREATE INDEX IF NOT EXISTS idx_friend_request_status ON "FriendRequest"(status);

-- Friendship indexes
CREATE INDEX IF NOT EXISTS idx_friendship_user1 ON "Friendship"("user1Id");
CREATE INDEX IF NOT EXISTS idx_friendship_user2 ON "Friendship"("user2Id");

-- Message indexes
CREATE INDEX IF NOT EXISTS idx_message_sender ON "Message"("senderId");
CREATE INDEX IF NOT EXISTS idx_message_receiver ON "Message"("receiverId");
CREATE INDEX IF NOT EXISTS idx_message_created_at ON "Message"("createdAt" DESC);

-- Composite index for conversations
CREATE INDEX IF NOT EXISTS idx_message_conversation ON "Message"("senderId", "receiverId", "createdAt" DESC);

-- Achievement Progress indexes
CREATE INDEX IF NOT EXISTS idx_achievement_progress_user ON "AchievementProgress"("userId");
CREATE INDEX IF NOT EXISTS idx_achievement_progress_unlocked ON "AchievementProgress"(unlocked);

-- Daily Quest Progress indexes
CREATE INDEX IF NOT EXISTS idx_quest_progress_user ON "DailyQuestProgress"("userId");
CREATE INDEX IF NOT EXISTS idx_quest_progress_claimed ON "DailyQuestProgress"(claimed);
CREATE INDEX IF NOT EXISTS idx_quest_progress_date ON "DailyQuestProgress"("questDate" DESC);

-- Inventory indexes
CREATE INDEX IF NOT EXISTS idx_inventory_user ON "Inventory"("userId");
CREATE INDEX IF NOT EXISTS idx_inventory_item ON "Inventory"("itemId");

-- Village indexes
CREATE INDEX IF NOT EXISTS idx_village_total_xp ON "Village"("totalXP" DESC);  -- For leaderboards
CREATE INDEX IF NOT EXISTS idx_village_region ON "Village"(region);
