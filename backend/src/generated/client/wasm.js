
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
  title: 'title',
  level: 'level',
  xp: 'xp',
  coins: 'coins',
  bio: 'bio',
  villageId: 'villageId',
  status: 'status',
  recoveryToken: 'recoveryToken',
  recoveryExpires: 'recoveryExpires',
  lastLoginAt: 'lastLoginAt',
  loginStreak: 'loginStreak',
  achievements: 'achievements',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role'
};

exports.Prisma.FriendshipScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  friendId: 'friendId',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.DirectMessageScalarFieldEnum = {
  id: 'id',
  text: 'text',
  senderId: 'senderId',
  receiverId: 'receiverId',
  read: 'read',
  createdAt: 'createdAt'
};

exports.Prisma.QuestScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  type: 'type',
  rewardXP: 'rewardXP',
  rewardCoins: 'rewardCoins',
  target: 'target',
  progress: 'progress',
  completed: 'completed',
  claimed: 'claimed',
  userId: 'userId',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.VillageScalarFieldEnum = {
  id: 'id',
  name: 'name',
  region: 'region',
  icon: 'icon',
  totalXP: 'totalXP',
  createdAt: 'createdAt'
};

exports.Prisma.ShopItemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  price: 'price',
  icon: 'icon',
  rarity: 'rarity',
  value: 'value'
};

exports.Prisma.InventoryItemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  itemId: 'itemId',
  acquiredAt: 'acquiredAt'
};

exports.Prisma.MatchScalarFieldEnum = {
  id: 'id',
  gameType: 'gameType',
  winnerId: 'winnerId',
  stake: 'stake',
  isRanked: 'isRanked',
  score: 'score',
  duration: 'duration',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserStatus = exports.$Enums.UserStatus = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  IN_GAME: 'IN_GAME'
};

exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  User: 'User',
  Friendship: 'Friendship',
  DirectMessage: 'DirectMessage',
  Quest: 'Quest',
  Village: 'Village',
  ShopItem: 'ShopItem',
  InventoryItem: 'InventoryItem',
  Match: 'Match'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\OLAOLUWANIMOFE\\Desktop\\NP\\backend\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\OLAOLUWANIMOFE\\Desktop\\NP\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/client\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id       String  @id @default(uuid())\n  username String  @unique\n  email    String  @unique\n  password String\n  avatar   String  @default(\"👤\")\n  title    String  @default(\"Street Pikin\")\n  level    Int     @default(1)\n  xp       Int     @default(0)\n  coins    Int     @default(500)\n  bio      String? @default(\"Compounding heritage one game at a time! 🔥\")\n\n  village   Village? @relation(fields: [villageId], references: [id])\n  villageId String?\n\n  inventory    InventoryItem[]\n  matchHistory Match[]         @relation(\"UserMatches\")\n\n  status          UserStatus @default(OFFLINE)\n  recoveryToken   String?\n  recoveryExpires DateTime?\n  lastLoginAt     DateTime   @default(now())\n  loginStreak     Int        @default(1)\n  achievements    Json       @default(\"{}\")\n  createdAt       DateTime   @default(now())\n  updatedAt       DateTime   @updatedAt\n\n  quests Quest[]\n\n  // Social\n  sentMessages     DirectMessage[] @relation(\"SentMessages\")\n  receivedMessages DirectMessage[] @relation(\"ReceivedMessages\")\n\n  friends  Friendship[] @relation(\"UserFriends\")\n  friendOf Friendship[] @relation(\"FriendUsers\")\n  role     UserRole     @default(USER)\n}\n\nenum UserRole {\n  USER\n  ADMIN\n}\n\nmodel Friendship {\n  id        String   @id @default(uuid())\n  user      User     @relation(\"UserFriends\", fields: [userId], references: [id])\n  userId    String\n  friend    User     @relation(\"FriendUsers\", fields: [friendId], references: [id])\n  friendId  String\n  status    String   @default(\"PENDING\") // PENDING, ACCEPTED\n  createdAt DateTime @default(now())\n\n  @@unique([userId, friendId])\n}\n\nmodel DirectMessage {\n  id         String   @id @default(uuid())\n  text       String\n  sender     User     @relation(\"SentMessages\", fields: [senderId], references: [id])\n  senderId   String\n  receiver   User     @relation(\"ReceivedMessages\", fields: [receiverId], references: [id])\n  receiverId String\n  read       Boolean  @default(false)\n  createdAt  DateTime @default(now())\n}\n\nmodel Quest {\n  id          String  @id @default(uuid())\n  title       String\n  description String\n  type        String // DAILY, WEEKLY\n  rewardXP    Int\n  rewardCoins Int\n  target      Int // Requirement count (e.g. 5)\n  progress    Int     @default(0)\n  completed   Boolean @default(false)\n  claimed     Boolean @default(false)\n\n  user   User   @relation(fields: [userId], references: [id])\n  userId String\n\n  expiresAt DateTime?\n  createdAt DateTime  @default(now())\n}\n\nenum UserStatus {\n  ONLINE\n  OFFLINE\n  IN_GAME\n}\n\nmodel Village {\n  id        String   @id @default(uuid())\n  name      String   @unique\n  region    String // Lagos, Abuja, etc.\n  icon      String   @default(\"🏡\")\n  totalXP   Int      @default(0)\n  members   User[]\n  createdAt DateTime @default(now())\n}\n\nmodel ShopItem {\n  id       String          @id @default(uuid())\n  name     String\n  category String // SKIN, OUTFIT, EMOTE, THEME\n  price    Int\n  icon     String\n  rarity   String // COMMON, RARE, LEGENDARY\n  value    String? // For themes (slug)\n  owners   InventoryItem[]\n}\n\nmodel InventoryItem {\n  id         String   @id @default(uuid())\n  user       User     @relation(fields: [userId], references: [id])\n  userId     String\n  item       ShopItem @relation(fields: [itemId], references: [id])\n  itemId     String\n  acquiredAt DateTime @default(now())\n\n  @@unique([userId, itemId])\n}\n\nmodel Match {\n  id        String   @id @default(uuid())\n  gameType  String // NPAT, AFTER, etc.\n  players   User[]   @relation(\"UserMatches\")\n  winnerId  String?\n  stake     Int      @default(0)\n  isRanked  Boolean  @default(false)\n  score     Int      @default(0)\n  duration  Int // in seconds\n  createdAt DateTime @default(now())\n}\n",
  "inlineSchemaHash": "88fb8110cc9a6348f3e8ff4c139b72407c8373be7009942701f17555a5b24c8b",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatar\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"level\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"xp\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"coins\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"bio\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"village\",\"kind\":\"object\",\"type\":\"Village\",\"relationName\":\"UserToVillage\"},{\"name\":\"villageId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"inventory\",\"kind\":\"object\",\"type\":\"InventoryItem\",\"relationName\":\"InventoryItemToUser\"},{\"name\":\"matchHistory\",\"kind\":\"object\",\"type\":\"Match\",\"relationName\":\"UserMatches\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"UserStatus\"},{\"name\":\"recoveryToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"recoveryExpires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastLoginAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"loginStreak\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"achievements\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"quests\",\"kind\":\"object\",\"type\":\"Quest\",\"relationName\":\"QuestToUser\"},{\"name\":\"sentMessages\",\"kind\":\"object\",\"type\":\"DirectMessage\",\"relationName\":\"SentMessages\"},{\"name\":\"receivedMessages\",\"kind\":\"object\",\"type\":\"DirectMessage\",\"relationName\":\"ReceivedMessages\"},{\"name\":\"friends\",\"kind\":\"object\",\"type\":\"Friendship\",\"relationName\":\"UserFriends\"},{\"name\":\"friendOf\",\"kind\":\"object\",\"type\":\"Friendship\",\"relationName\":\"FriendUsers\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\"}],\"dbName\":null},\"Friendship\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserFriends\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"friend\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FriendUsers\"},{\"name\":\"friendId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"DirectMessage\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sender\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SentMessages\"},{\"name\":\"senderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"receiver\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ReceivedMessages\"},{\"name\":\"receiverId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"read\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Quest\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rewardXP\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"rewardCoins\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"target\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"progress\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"completed\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"claimed\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"QuestToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Village\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"region\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"icon\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"totalXP\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"members\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToVillage\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"ShopItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"icon\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rarity\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"value\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"owners\",\"kind\":\"object\",\"type\":\"InventoryItem\",\"relationName\":\"InventoryItemToShopItem\"}],\"dbName\":null},\"InventoryItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"InventoryItemToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"item\",\"kind\":\"object\",\"type\":\"ShopItem\",\"relationName\":\"InventoryItemToShopItem\"},{\"name\":\"itemId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"acquiredAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Match\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gameType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"players\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserMatches\"},{\"name\":\"winnerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stake\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"isRanked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"score\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"duration\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

