
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model DirectMessage
 * 
 */
export type DirectMessage = $Result.DefaultSelection<Prisma.$DirectMessagePayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model Village
 * 
 */
export type Village = $Result.DefaultSelection<Prisma.$VillagePayload>
/**
 * Model ShopItem
 * 
 */
export type ShopItem = $Result.DefaultSelection<Prisma.$ShopItemPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  IN_GAME: 'IN_GAME'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs>;

  /**
   * `prisma.directMessage`: Exposes CRUD operations for the **DirectMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectMessages
    * const directMessages = await prisma.directMessage.findMany()
    * ```
    */
  get directMessage(): Prisma.DirectMessageDelegate<ExtArgs>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs>;

  /**
   * `prisma.village`: Exposes CRUD operations for the **Village** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villages
    * const villages = await prisma.village.findMany()
    * ```
    */
  get village(): Prisma.VillageDelegate<ExtArgs>;

  /**
   * `prisma.shopItem`: Exposes CRUD operations for the **ShopItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopItems
    * const shopItems = await prisma.shopItem.findMany()
    * ```
    */
  get shopItem(): Prisma.ShopItemDelegate<ExtArgs>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Friendship: 'Friendship',
    DirectMessage: 'DirectMessage',
    Quest: 'Quest',
    Village: 'Village',
    ShopItem: 'ShopItem',
    InventoryItem: 'InventoryItem',
    Match: 'Match'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "friendship" | "directMessage" | "quest" | "village" | "shopItem" | "inventoryItem" | "match"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      DirectMessage: {
        payload: Prisma.$DirectMessagePayload<ExtArgs>
        fields: Prisma.DirectMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          findFirst: {
            args: Prisma.DirectMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          findMany: {
            args: Prisma.DirectMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>[]
          }
          create: {
            args: Prisma.DirectMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          createMany: {
            args: Prisma.DirectMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>[]
          }
          delete: {
            args: Prisma.DirectMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          update: {
            args: Prisma.DirectMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          deleteMany: {
            args: Prisma.DirectMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DirectMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          aggregate: {
            args: Prisma.DirectMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectMessage>
          }
          groupBy: {
            args: Prisma.DirectMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectMessageCountArgs<ExtArgs>
            result: $Utils.Optional<DirectMessageCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      Village: {
        payload: Prisma.$VillagePayload<ExtArgs>
        fields: Prisma.VillageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          findFirst: {
            args: Prisma.VillageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          findMany: {
            args: Prisma.VillageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>[]
          }
          create: {
            args: Prisma.VillageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          createMany: {
            args: Prisma.VillageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>[]
          }
          delete: {
            args: Prisma.VillageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          update: {
            args: Prisma.VillageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          deleteMany: {
            args: Prisma.VillageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VillageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          aggregate: {
            args: Prisma.VillageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillage>
          }
          groupBy: {
            args: Prisma.VillageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillageCountArgs<ExtArgs>
            result: $Utils.Optional<VillageCountAggregateOutputType> | number
          }
        }
      }
      ShopItem: {
        payload: Prisma.$ShopItemPayload<ExtArgs>
        fields: Prisma.ShopItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          findFirst: {
            args: Prisma.ShopItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          findMany: {
            args: Prisma.ShopItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>[]
          }
          create: {
            args: Prisma.ShopItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          createMany: {
            args: Prisma.ShopItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>[]
          }
          delete: {
            args: Prisma.ShopItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          update: {
            args: Prisma.ShopItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          deleteMany: {
            args: Prisma.ShopItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          aggregate: {
            args: Prisma.ShopItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopItem>
          }
          groupBy: {
            args: Prisma.ShopItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShopItemCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    inventory: number
    matchHistory: number
    quests: number
    sentMessages: number
    receivedMessages: number
    friends: number
    friendOf: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | UserCountOutputTypeCountInventoryArgs
    matchHistory?: boolean | UserCountOutputTypeCountMatchHistoryArgs
    quests?: boolean | UserCountOutputTypeCountQuestsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }


  /**
   * Count Type VillageCountOutputType
   */

  export type VillageCountOutputType = {
    members: number
  }

  export type VillageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | VillageCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageCountOutputType
     */
    select?: VillageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ShopItemCountOutputType
   */

  export type ShopItemCountOutputType = {
    owners: number
  }

  export type ShopItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | ShopItemCountOutputTypeCountOwnersArgs
  }

  // Custom InputTypes
  /**
   * ShopItemCountOutputType without action
   */
  export type ShopItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItemCountOutputType
     */
    select?: ShopItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopItemCountOutputType without action
   */
  export type ShopItemCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    players: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | MatchCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    level: number | null
    xp: number | null
    coins: number | null
    loginStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
    xp: number | null
    coins: number | null
    loginStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    title: string | null
    level: number | null
    xp: number | null
    coins: number | null
    bio: string | null
    villageId: string | null
    status: $Enums.UserStatus | null
    recoveryToken: string | null
    recoveryExpires: Date | null
    lastLoginAt: Date | null
    loginStreak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    title: string | null
    level: number | null
    xp: number | null
    coins: number | null
    bio: string | null
    villageId: string | null
    status: $Enums.UserStatus | null
    recoveryToken: string | null
    recoveryExpires: Date | null
    lastLoginAt: Date | null
    loginStreak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatar: number
    title: number
    level: number
    xp: number
    coins: number
    bio: number
    villageId: number
    status: number
    recoveryToken: number
    recoveryExpires: number
    lastLoginAt: number
    loginStreak: number
    achievements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
    xp?: true
    coins?: true
    loginStreak?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
    xp?: true
    coins?: true
    loginStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    title?: true
    level?: true
    xp?: true
    coins?: true
    bio?: true
    villageId?: true
    status?: true
    recoveryToken?: true
    recoveryExpires?: true
    lastLoginAt?: true
    loginStreak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    title?: true
    level?: true
    xp?: true
    coins?: true
    bio?: true
    villageId?: true
    status?: true
    recoveryToken?: true
    recoveryExpires?: true
    lastLoginAt?: true
    loginStreak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    title?: true
    level?: true
    xp?: true
    coins?: true
    bio?: true
    villageId?: true
    status?: true
    recoveryToken?: true
    recoveryExpires?: true
    lastLoginAt?: true
    loginStreak?: true
    achievements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    avatar: string
    title: string
    level: number
    xp: number
    coins: number
    bio: string | null
    villageId: string | null
    status: $Enums.UserStatus
    recoveryToken: string | null
    recoveryExpires: Date | null
    lastLoginAt: Date
    loginStreak: number
    achievements: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    title?: boolean
    level?: boolean
    xp?: boolean
    coins?: boolean
    bio?: boolean
    villageId?: boolean
    status?: boolean
    recoveryToken?: boolean
    recoveryExpires?: boolean
    lastLoginAt?: boolean
    loginStreak?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    village?: boolean | User$villageArgs<ExtArgs>
    inventory?: boolean | User$inventoryArgs<ExtArgs>
    matchHistory?: boolean | User$matchHistoryArgs<ExtArgs>
    quests?: boolean | User$questsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    title?: boolean
    level?: boolean
    xp?: boolean
    coins?: boolean
    bio?: boolean
    villageId?: boolean
    status?: boolean
    recoveryToken?: boolean
    recoveryExpires?: boolean
    lastLoginAt?: boolean
    loginStreak?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    village?: boolean | User$villageArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    title?: boolean
    level?: boolean
    xp?: boolean
    coins?: boolean
    bio?: boolean
    villageId?: boolean
    status?: boolean
    recoveryToken?: boolean
    recoveryExpires?: boolean
    lastLoginAt?: boolean
    loginStreak?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    village?: boolean | User$villageArgs<ExtArgs>
    inventory?: boolean | User$inventoryArgs<ExtArgs>
    matchHistory?: boolean | User$matchHistoryArgs<ExtArgs>
    quests?: boolean | User$questsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    village?: boolean | User$villageArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      village: Prisma.$VillagePayload<ExtArgs> | null
      inventory: Prisma.$InventoryItemPayload<ExtArgs>[]
      matchHistory: Prisma.$MatchPayload<ExtArgs>[]
      quests: Prisma.$QuestPayload<ExtArgs>[]
      sentMessages: Prisma.$DirectMessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$DirectMessagePayload<ExtArgs>[]
      friends: Prisma.$FriendshipPayload<ExtArgs>[]
      friendOf: Prisma.$FriendshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      avatar: string
      title: string
      level: number
      xp: number
      coins: number
      bio: string | null
      villageId: string | null
      status: $Enums.UserStatus
      recoveryToken: string | null
      recoveryExpires: Date | null
      lastLoginAt: Date
      loginStreak: number
      achievements: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    village<T extends User$villageArgs<ExtArgs> = {}>(args?: Subset<T, User$villageArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    inventory<T extends User$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany"> | Null>
    matchHistory<T extends User$matchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$matchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany"> | Null>
    quests<T extends User$questsArgs<ExtArgs> = {}>(args?: Subset<T, User$questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany"> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findMany"> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findMany"> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany"> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly title: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly bio: FieldRef<"User", 'String'>
    readonly villageId: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly recoveryToken: FieldRef<"User", 'String'>
    readonly recoveryExpires: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly loginStreak: FieldRef<"User", 'Int'>
    readonly achievements: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.village
   */
  export type User$villageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    where?: VillageWhereInput
  }

  /**
   * User.inventory
   */
  export type User$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * User.matchHistory
   */
  export type User$matchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.quests
   */
  export type User$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    cursor?: QuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    where?: DirectMessageWhereInput
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    cursor?: DirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    where?: DirectMessageWhereInput
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    cursor?: DirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    status: number
    createdAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    createdAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    createdAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    status: string
    createdAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      friendId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */ 
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'String'>
    readonly userId: FieldRef<"Friendship", 'String'>
    readonly friendId: FieldRef<"Friendship", 'String'>
    readonly status: FieldRef<"Friendship", 'String'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model DirectMessage
   */

  export type AggregateDirectMessage = {
    _count: DirectMessageCountAggregateOutputType | null
    _min: DirectMessageMinAggregateOutputType | null
    _max: DirectMessageMaxAggregateOutputType | null
  }

  export type DirectMessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    senderId: string | null
    receiverId: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type DirectMessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    senderId: string | null
    receiverId: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type DirectMessageCountAggregateOutputType = {
    id: number
    text: number
    senderId: number
    receiverId: number
    read: number
    createdAt: number
    _all: number
  }


  export type DirectMessageMinAggregateInputType = {
    id?: true
    text?: true
    senderId?: true
    receiverId?: true
    read?: true
    createdAt?: true
  }

  export type DirectMessageMaxAggregateInputType = {
    id?: true
    text?: true
    senderId?: true
    receiverId?: true
    read?: true
    createdAt?: true
  }

  export type DirectMessageCountAggregateInputType = {
    id?: true
    text?: true
    senderId?: true
    receiverId?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type DirectMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessage to aggregate.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectMessages
    **/
    _count?: true | DirectMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectMessageMaxAggregateInputType
  }

  export type GetDirectMessageAggregateType<T extends DirectMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectMessage[P]>
      : GetScalarType<T[P], AggregateDirectMessage[P]>
  }




  export type DirectMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageWhereInput
    orderBy?: DirectMessageOrderByWithAggregationInput | DirectMessageOrderByWithAggregationInput[]
    by: DirectMessageScalarFieldEnum[] | DirectMessageScalarFieldEnum
    having?: DirectMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectMessageCountAggregateInputType | true
    _min?: DirectMessageMinAggregateInputType
    _max?: DirectMessageMaxAggregateInputType
  }

  export type DirectMessageGroupByOutputType = {
    id: string
    text: string
    senderId: string
    receiverId: string
    read: boolean
    createdAt: Date
    _count: DirectMessageCountAggregateOutputType | null
    _min: DirectMessageMinAggregateOutputType | null
    _max: DirectMessageMaxAggregateOutputType | null
  }

  type GetDirectMessageGroupByPayload<T extends DirectMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DirectMessageGroupByOutputType[P]>
        }
      >
    >


  export type DirectMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    senderId?: boolean
    receiverId?: boolean
    read?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directMessage"]>

  export type DirectMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    senderId?: boolean
    receiverId?: boolean
    read?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directMessage"]>

  export type DirectMessageSelectScalar = {
    id?: boolean
    text?: boolean
    senderId?: boolean
    receiverId?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type DirectMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DirectMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DirectMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      senderId: string
      receiverId: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["directMessage"]>
    composites: {}
  }

  type DirectMessageGetPayload<S extends boolean | null | undefined | DirectMessageDefaultArgs> = $Result.GetResult<Prisma.$DirectMessagePayload, S>

  type DirectMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DirectMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DirectMessageCountAggregateInputType | true
    }

  export interface DirectMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectMessage'], meta: { name: 'DirectMessage' } }
    /**
     * Find zero or one DirectMessage that matches the filter.
     * @param {DirectMessageFindUniqueArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectMessageFindUniqueArgs>(args: SelectSubset<T, DirectMessageFindUniqueArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DirectMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DirectMessageFindUniqueOrThrowArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DirectMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindFirstArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectMessageFindFirstArgs>(args?: SelectSubset<T, DirectMessageFindFirstArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DirectMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindFirstOrThrowArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DirectMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectMessages
     * const directMessages = await prisma.directMessage.findMany()
     * 
     * // Get first 10 DirectMessages
     * const directMessages = await prisma.directMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directMessageWithIdOnly = await prisma.directMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectMessageFindManyArgs>(args?: SelectSubset<T, DirectMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DirectMessage.
     * @param {DirectMessageCreateArgs} args - Arguments to create a DirectMessage.
     * @example
     * // Create one DirectMessage
     * const DirectMessage = await prisma.directMessage.create({
     *   data: {
     *     // ... data to create a DirectMessage
     *   }
     * })
     * 
     */
    create<T extends DirectMessageCreateArgs>(args: SelectSubset<T, DirectMessageCreateArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DirectMessages.
     * @param {DirectMessageCreateManyArgs} args - Arguments to create many DirectMessages.
     * @example
     * // Create many DirectMessages
     * const directMessage = await prisma.directMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectMessageCreateManyArgs>(args?: SelectSubset<T, DirectMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectMessages and returns the data saved in the database.
     * @param {DirectMessageCreateManyAndReturnArgs} args - Arguments to create many DirectMessages.
     * @example
     * // Create many DirectMessages
     * const directMessage = await prisma.directMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectMessages and only return the `id`
     * const directMessageWithIdOnly = await prisma.directMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DirectMessage.
     * @param {DirectMessageDeleteArgs} args - Arguments to delete one DirectMessage.
     * @example
     * // Delete one DirectMessage
     * const DirectMessage = await prisma.directMessage.delete({
     *   where: {
     *     // ... filter to delete one DirectMessage
     *   }
     * })
     * 
     */
    delete<T extends DirectMessageDeleteArgs>(args: SelectSubset<T, DirectMessageDeleteArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DirectMessage.
     * @param {DirectMessageUpdateArgs} args - Arguments to update one DirectMessage.
     * @example
     * // Update one DirectMessage
     * const directMessage = await prisma.directMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectMessageUpdateArgs>(args: SelectSubset<T, DirectMessageUpdateArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DirectMessages.
     * @param {DirectMessageDeleteManyArgs} args - Arguments to filter DirectMessages to delete.
     * @example
     * // Delete a few DirectMessages
     * const { count } = await prisma.directMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectMessageDeleteManyArgs>(args?: SelectSubset<T, DirectMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectMessages
     * const directMessage = await prisma.directMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectMessageUpdateManyArgs>(args: SelectSubset<T, DirectMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirectMessage.
     * @param {DirectMessageUpsertArgs} args - Arguments to update or create a DirectMessage.
     * @example
     * // Update or create a DirectMessage
     * const directMessage = await prisma.directMessage.upsert({
     *   create: {
     *     // ... data to create a DirectMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectMessage we want to update
     *   }
     * })
     */
    upsert<T extends DirectMessageUpsertArgs>(args: SelectSubset<T, DirectMessageUpsertArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageCountArgs} args - Arguments to filter DirectMessages to count.
     * @example
     * // Count the number of DirectMessages
     * const count = await prisma.directMessage.count({
     *   where: {
     *     // ... the filter for the DirectMessages we want to count
     *   }
     * })
    **/
    count<T extends DirectMessageCountArgs>(
      args?: Subset<T, DirectMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectMessageAggregateArgs>(args: Subset<T, DirectMessageAggregateArgs>): Prisma.PrismaPromise<GetDirectMessageAggregateType<T>>

    /**
     * Group by DirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectMessageGroupByArgs['orderBy'] }
        : { orderBy?: DirectMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectMessage model
   */
  readonly fields: DirectMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectMessage model
   */ 
  interface DirectMessageFieldRefs {
    readonly id: FieldRef<"DirectMessage", 'String'>
    readonly text: FieldRef<"DirectMessage", 'String'>
    readonly senderId: FieldRef<"DirectMessage", 'String'>
    readonly receiverId: FieldRef<"DirectMessage", 'String'>
    readonly read: FieldRef<"DirectMessage", 'Boolean'>
    readonly createdAt: FieldRef<"DirectMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DirectMessage findUnique
   */
  export type DirectMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage findUniqueOrThrow
   */
  export type DirectMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage findFirst
   */
  export type DirectMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessages.
     */
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * DirectMessage findFirstOrThrow
   */
  export type DirectMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessages.
     */
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * DirectMessage findMany
   */
  export type DirectMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessages to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * DirectMessage create
   */
  export type DirectMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectMessage.
     */
    data: XOR<DirectMessageCreateInput, DirectMessageUncheckedCreateInput>
  }

  /**
   * DirectMessage createMany
   */
  export type DirectMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectMessages.
     */
    data: DirectMessageCreateManyInput | DirectMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectMessage createManyAndReturn
   */
  export type DirectMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DirectMessages.
     */
    data: DirectMessageCreateManyInput | DirectMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectMessage update
   */
  export type DirectMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectMessage.
     */
    data: XOR<DirectMessageUpdateInput, DirectMessageUncheckedUpdateInput>
    /**
     * Choose, which DirectMessage to update.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage updateMany
   */
  export type DirectMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectMessages.
     */
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyInput>
    /**
     * Filter which DirectMessages to update
     */
    where?: DirectMessageWhereInput
  }

  /**
   * DirectMessage upsert
   */
  export type DirectMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectMessage to update in case it exists.
     */
    where: DirectMessageWhereUniqueInput
    /**
     * In case the DirectMessage found by the `where` argument doesn't exist, create a new DirectMessage with this data.
     */
    create: XOR<DirectMessageCreateInput, DirectMessageUncheckedCreateInput>
    /**
     * In case the DirectMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectMessageUpdateInput, DirectMessageUncheckedUpdateInput>
  }

  /**
   * DirectMessage delete
   */
  export type DirectMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter which DirectMessage to delete.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage deleteMany
   */
  export type DirectMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessages to delete
     */
    where?: DirectMessageWhereInput
  }

  /**
   * DirectMessage without action
   */
  export type DirectMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
  }


  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestAvgAggregateOutputType = {
    rewardXP: number | null
    rewardCoins: number | null
    target: number | null
    progress: number | null
  }

  export type QuestSumAggregateOutputType = {
    rewardXP: number | null
    rewardCoins: number | null
    target: number | null
    progress: number | null
  }

  export type QuestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    rewardXP: number | null
    rewardCoins: number | null
    target: number | null
    progress: number | null
    completed: boolean | null
    claimed: boolean | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type QuestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    rewardXP: number | null
    rewardCoins: number | null
    target: number | null
    progress: number | null
    completed: boolean | null
    claimed: boolean | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    rewardXP: number
    rewardCoins: number
    target: number
    progress: number
    completed: number
    claimed: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type QuestAvgAggregateInputType = {
    rewardXP?: true
    rewardCoins?: true
    target?: true
    progress?: true
  }

  export type QuestSumAggregateInputType = {
    rewardXP?: true
    rewardCoins?: true
    target?: true
    progress?: true
  }

  export type QuestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    rewardXP?: true
    rewardCoins?: true
    target?: true
    progress?: true
    completed?: true
    claimed?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    rewardXP?: true
    rewardCoins?: true
    target?: true
    progress?: true
    completed?: true
    claimed?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    rewardXP?: true
    rewardCoins?: true
    target?: true
    progress?: true
    completed?: true
    claimed?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _avg?: QuestAvgAggregateInputType
    _sum?: QuestSumAggregateInputType
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress: number
    completed: boolean
    claimed: boolean
    userId: string
    expiresAt: Date | null
    createdAt: Date
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    rewardXP?: boolean
    rewardCoins?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    rewardXP?: boolean
    rewardCoins?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    rewardXP?: boolean
    rewardCoins?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      type: string
      rewardXP: number
      rewardCoins: number
      target: number
      progress: number
      completed: boolean
      claimed: boolean
      userId: string
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }

  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestFindUniqueArgs>(args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestFindFirstArgs>(args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestFindManyArgs>(args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
     */
    create<T extends QuestCreateArgs>(args: SelectSubset<T, QuestCreateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quests.
     * @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCreateManyArgs>(args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quests and returns the data saved in the database.
     * @param {QuestCreateManyAndReturnArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
     */
    delete<T extends QuestDeleteArgs>(args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestUpdateArgs>(args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDeleteManyArgs>(args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestUpdateManyArgs>(args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
     */
    upsert<T extends QuestUpsertArgs>(args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quest model
   */ 
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'String'>
    readonly title: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly type: FieldRef<"Quest", 'String'>
    readonly rewardXP: FieldRef<"Quest", 'Int'>
    readonly rewardCoins: FieldRef<"Quest", 'Int'>
    readonly target: FieldRef<"Quest", 'Int'>
    readonly progress: FieldRef<"Quest", 'Int'>
    readonly completed: FieldRef<"Quest", 'Boolean'>
    readonly claimed: FieldRef<"Quest", 'Boolean'>
    readonly userId: FieldRef<"Quest", 'String'>
    readonly expiresAt: FieldRef<"Quest", 'DateTime'>
    readonly createdAt: FieldRef<"Quest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest createManyAndReturn
   */
  export type QuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model Village
   */

  export type AggregateVillage = {
    _count: VillageCountAggregateOutputType | null
    _avg: VillageAvgAggregateOutputType | null
    _sum: VillageSumAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  export type VillageAvgAggregateOutputType = {
    totalXP: number | null
  }

  export type VillageSumAggregateOutputType = {
    totalXP: number | null
  }

  export type VillageMinAggregateOutputType = {
    id: string | null
    name: string | null
    region: string | null
    icon: string | null
    totalXP: number | null
    createdAt: Date | null
  }

  export type VillageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    region: string | null
    icon: string | null
    totalXP: number | null
    createdAt: Date | null
  }

  export type VillageCountAggregateOutputType = {
    id: number
    name: number
    region: number
    icon: number
    totalXP: number
    createdAt: number
    _all: number
  }


  export type VillageAvgAggregateInputType = {
    totalXP?: true
  }

  export type VillageSumAggregateInputType = {
    totalXP?: true
  }

  export type VillageMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    icon?: true
    totalXP?: true
    createdAt?: true
  }

  export type VillageMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    icon?: true
    totalXP?: true
    createdAt?: true
  }

  export type VillageCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    icon?: true
    totalXP?: true
    createdAt?: true
    _all?: true
  }

  export type VillageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Village to aggregate.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Villages
    **/
    _count?: true | VillageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillageMaxAggregateInputType
  }

  export type GetVillageAggregateType<T extends VillageAggregateArgs> = {
        [P in keyof T & keyof AggregateVillage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillage[P]>
      : GetScalarType<T[P], AggregateVillage[P]>
  }




  export type VillageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillageWhereInput
    orderBy?: VillageOrderByWithAggregationInput | VillageOrderByWithAggregationInput[]
    by: VillageScalarFieldEnum[] | VillageScalarFieldEnum
    having?: VillageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillageCountAggregateInputType | true
    _avg?: VillageAvgAggregateInputType
    _sum?: VillageSumAggregateInputType
    _min?: VillageMinAggregateInputType
    _max?: VillageMaxAggregateInputType
  }

  export type VillageGroupByOutputType = {
    id: string
    name: string
    region: string
    icon: string
    totalXP: number
    createdAt: Date
    _count: VillageCountAggregateOutputType | null
    _avg: VillageAvgAggregateOutputType | null
    _sum: VillageSumAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  type GetVillageGroupByPayload<T extends VillageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillageGroupByOutputType[P]>
            : GetScalarType<T[P], VillageGroupByOutputType[P]>
        }
      >
    >


  export type VillageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    icon?: boolean
    totalXP?: boolean
    createdAt?: boolean
    members?: boolean | Village$membersArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["village"]>

  export type VillageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    icon?: boolean
    totalXP?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["village"]>

  export type VillageSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    icon?: boolean
    totalXP?: boolean
    createdAt?: boolean
  }

  export type VillageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Village$membersArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VillageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VillagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Village"
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      region: string
      icon: string
      totalXP: number
      createdAt: Date
    }, ExtArgs["result"]["village"]>
    composites: {}
  }

  type VillageGetPayload<S extends boolean | null | undefined | VillageDefaultArgs> = $Result.GetResult<Prisma.$VillagePayload, S>

  type VillageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VillageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VillageCountAggregateInputType | true
    }

  export interface VillageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Village'], meta: { name: 'Village' } }
    /**
     * Find zero or one Village that matches the filter.
     * @param {VillageFindUniqueArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillageFindUniqueArgs>(args: SelectSubset<T, VillageFindUniqueArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Village that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VillageFindUniqueOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillageFindUniqueOrThrowArgs>(args: SelectSubset<T, VillageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Village that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindFirstArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillageFindFirstArgs>(args?: SelectSubset<T, VillageFindFirstArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Village that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindFirstOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillageFindFirstOrThrowArgs>(args?: SelectSubset<T, VillageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Villages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villages
     * const villages = await prisma.village.findMany()
     * 
     * // Get first 10 Villages
     * const villages = await prisma.village.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villageWithIdOnly = await prisma.village.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillageFindManyArgs>(args?: SelectSubset<T, VillageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Village.
     * @param {VillageCreateArgs} args - Arguments to create a Village.
     * @example
     * // Create one Village
     * const Village = await prisma.village.create({
     *   data: {
     *     // ... data to create a Village
     *   }
     * })
     * 
     */
    create<T extends VillageCreateArgs>(args: SelectSubset<T, VillageCreateArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Villages.
     * @param {VillageCreateManyArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const village = await prisma.village.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillageCreateManyArgs>(args?: SelectSubset<T, VillageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Villages and returns the data saved in the database.
     * @param {VillageCreateManyAndReturnArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const village = await prisma.village.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Villages and only return the `id`
     * const villageWithIdOnly = await prisma.village.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillageCreateManyAndReturnArgs>(args?: SelectSubset<T, VillageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Village.
     * @param {VillageDeleteArgs} args - Arguments to delete one Village.
     * @example
     * // Delete one Village
     * const Village = await prisma.village.delete({
     *   where: {
     *     // ... filter to delete one Village
     *   }
     * })
     * 
     */
    delete<T extends VillageDeleteArgs>(args: SelectSubset<T, VillageDeleteArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Village.
     * @param {VillageUpdateArgs} args - Arguments to update one Village.
     * @example
     * // Update one Village
     * const village = await prisma.village.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillageUpdateArgs>(args: SelectSubset<T, VillageUpdateArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Villages.
     * @param {VillageDeleteManyArgs} args - Arguments to filter Villages to delete.
     * @example
     * // Delete a few Villages
     * const { count } = await prisma.village.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillageDeleteManyArgs>(args?: SelectSubset<T, VillageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villages
     * const village = await prisma.village.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillageUpdateManyArgs>(args: SelectSubset<T, VillageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Village.
     * @param {VillageUpsertArgs} args - Arguments to update or create a Village.
     * @example
     * // Update or create a Village
     * const village = await prisma.village.upsert({
     *   create: {
     *     // ... data to create a Village
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Village we want to update
     *   }
     * })
     */
    upsert<T extends VillageUpsertArgs>(args: SelectSubset<T, VillageUpsertArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageCountArgs} args - Arguments to filter Villages to count.
     * @example
     * // Count the number of Villages
     * const count = await prisma.village.count({
     *   where: {
     *     // ... the filter for the Villages we want to count
     *   }
     * })
    **/
    count<T extends VillageCountArgs>(
      args?: Subset<T, VillageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VillageAggregateArgs>(args: Subset<T, VillageAggregateArgs>): Prisma.PrismaPromise<GetVillageAggregateType<T>>

    /**
     * Group by Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VillageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillageGroupByArgs['orderBy'] }
        : { orderBy?: VillageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VillageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Village model
   */
  readonly fields: VillageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Village.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Village$membersArgs<ExtArgs> = {}>(args?: Subset<T, Village$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Village model
   */ 
  interface VillageFieldRefs {
    readonly id: FieldRef<"Village", 'String'>
    readonly name: FieldRef<"Village", 'String'>
    readonly region: FieldRef<"Village", 'String'>
    readonly icon: FieldRef<"Village", 'String'>
    readonly totalXP: FieldRef<"Village", 'Int'>
    readonly createdAt: FieldRef<"Village", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Village findUnique
   */
  export type VillageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village findUniqueOrThrow
   */
  export type VillageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village findFirst
   */
  export type VillageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village findFirstOrThrow
   */
  export type VillageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village findMany
   */
  export type VillageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Villages to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village create
   */
  export type VillageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The data needed to create a Village.
     */
    data: XOR<VillageCreateInput, VillageUncheckedCreateInput>
  }

  /**
   * Village createMany
   */
  export type VillageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villages.
     */
    data: VillageCreateManyInput | VillageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Village createManyAndReturn
   */
  export type VillageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Villages.
     */
    data: VillageCreateManyInput | VillageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Village update
   */
  export type VillageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The data needed to update a Village.
     */
    data: XOR<VillageUpdateInput, VillageUncheckedUpdateInput>
    /**
     * Choose, which Village to update.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village updateMany
   */
  export type VillageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Villages.
     */
    data: XOR<VillageUpdateManyMutationInput, VillageUncheckedUpdateManyInput>
    /**
     * Filter which Villages to update
     */
    where?: VillageWhereInput
  }

  /**
   * Village upsert
   */
  export type VillageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The filter to search for the Village to update in case it exists.
     */
    where: VillageWhereUniqueInput
    /**
     * In case the Village found by the `where` argument doesn't exist, create a new Village with this data.
     */
    create: XOR<VillageCreateInput, VillageUncheckedCreateInput>
    /**
     * In case the Village was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillageUpdateInput, VillageUncheckedUpdateInput>
  }

  /**
   * Village delete
   */
  export type VillageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter which Village to delete.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village deleteMany
   */
  export type VillageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villages to delete
     */
    where?: VillageWhereInput
  }

  /**
   * Village.members
   */
  export type Village$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Village without action
   */
  export type VillageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
  }


  /**
   * Model ShopItem
   */

  export type AggregateShopItem = {
    _count: ShopItemCountAggregateOutputType | null
    _avg: ShopItemAvgAggregateOutputType | null
    _sum: ShopItemSumAggregateOutputType | null
    _min: ShopItemMinAggregateOutputType | null
    _max: ShopItemMaxAggregateOutputType | null
  }

  export type ShopItemAvgAggregateOutputType = {
    price: number | null
  }

  export type ShopItemSumAggregateOutputType = {
    price: number | null
  }

  export type ShopItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    price: number | null
    icon: string | null
    rarity: string | null
    value: string | null
  }

  export type ShopItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    price: number | null
    icon: string | null
    rarity: string | null
    value: string | null
  }

  export type ShopItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    price: number
    icon: number
    rarity: number
    value: number
    _all: number
  }


  export type ShopItemAvgAggregateInputType = {
    price?: true
  }

  export type ShopItemSumAggregateInputType = {
    price?: true
  }

  export type ShopItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    icon?: true
    rarity?: true
    value?: true
  }

  export type ShopItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    icon?: true
    rarity?: true
    value?: true
  }

  export type ShopItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    icon?: true
    rarity?: true
    value?: true
    _all?: true
  }

  export type ShopItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopItem to aggregate.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopItems
    **/
    _count?: true | ShopItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopItemMaxAggregateInputType
  }

  export type GetShopItemAggregateType<T extends ShopItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShopItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopItem[P]>
      : GetScalarType<T[P], AggregateShopItem[P]>
  }




  export type ShopItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopItemWhereInput
    orderBy?: ShopItemOrderByWithAggregationInput | ShopItemOrderByWithAggregationInput[]
    by: ShopItemScalarFieldEnum[] | ShopItemScalarFieldEnum
    having?: ShopItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopItemCountAggregateInputType | true
    _avg?: ShopItemAvgAggregateInputType
    _sum?: ShopItemSumAggregateInputType
    _min?: ShopItemMinAggregateInputType
    _max?: ShopItemMaxAggregateInputType
  }

  export type ShopItemGroupByOutputType = {
    id: string
    name: string
    category: string
    price: number
    icon: string
    rarity: string
    value: string | null
    _count: ShopItemCountAggregateOutputType | null
    _avg: ShopItemAvgAggregateOutputType | null
    _sum: ShopItemSumAggregateOutputType | null
    _min: ShopItemMinAggregateOutputType | null
    _max: ShopItemMaxAggregateOutputType | null
  }

  type GetShopItemGroupByPayload<T extends ShopItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShopItemGroupByOutputType[P]>
        }
      >
    >


  export type ShopItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    icon?: boolean
    rarity?: boolean
    value?: boolean
    owners?: boolean | ShopItem$ownersArgs<ExtArgs>
    _count?: boolean | ShopItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopItem"]>

  export type ShopItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    icon?: boolean
    rarity?: boolean
    value?: boolean
  }, ExtArgs["result"]["shopItem"]>

  export type ShopItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    icon?: boolean
    rarity?: boolean
    value?: boolean
  }

  export type ShopItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | ShopItem$ownersArgs<ExtArgs>
    _count?: boolean | ShopItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopItem"
    objects: {
      owners: Prisma.$InventoryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      price: number
      icon: string
      rarity: string
      value: string | null
    }, ExtArgs["result"]["shopItem"]>
    composites: {}
  }

  type ShopItemGetPayload<S extends boolean | null | undefined | ShopItemDefaultArgs> = $Result.GetResult<Prisma.$ShopItemPayload, S>

  type ShopItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopItemCountAggregateInputType | true
    }

  export interface ShopItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopItem'], meta: { name: 'ShopItem' } }
    /**
     * Find zero or one ShopItem that matches the filter.
     * @param {ShopItemFindUniqueArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopItemFindUniqueArgs>(args: SelectSubset<T, ShopItemFindUniqueArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShopItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShopItemFindUniqueOrThrowArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShopItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindFirstArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopItemFindFirstArgs>(args?: SelectSubset<T, ShopItemFindFirstArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShopItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindFirstOrThrowArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShopItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopItems
     * const shopItems = await prisma.shopItem.findMany()
     * 
     * // Get first 10 ShopItems
     * const shopItems = await prisma.shopItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopItemWithIdOnly = await prisma.shopItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopItemFindManyArgs>(args?: SelectSubset<T, ShopItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShopItem.
     * @param {ShopItemCreateArgs} args - Arguments to create a ShopItem.
     * @example
     * // Create one ShopItem
     * const ShopItem = await prisma.shopItem.create({
     *   data: {
     *     // ... data to create a ShopItem
     *   }
     * })
     * 
     */
    create<T extends ShopItemCreateArgs>(args: SelectSubset<T, ShopItemCreateArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShopItems.
     * @param {ShopItemCreateManyArgs} args - Arguments to create many ShopItems.
     * @example
     * // Create many ShopItems
     * const shopItem = await prisma.shopItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopItemCreateManyArgs>(args?: SelectSubset<T, ShopItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopItems and returns the data saved in the database.
     * @param {ShopItemCreateManyAndReturnArgs} args - Arguments to create many ShopItems.
     * @example
     * // Create many ShopItems
     * const shopItem = await prisma.shopItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopItems and only return the `id`
     * const shopItemWithIdOnly = await prisma.shopItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShopItem.
     * @param {ShopItemDeleteArgs} args - Arguments to delete one ShopItem.
     * @example
     * // Delete one ShopItem
     * const ShopItem = await prisma.shopItem.delete({
     *   where: {
     *     // ... filter to delete one ShopItem
     *   }
     * })
     * 
     */
    delete<T extends ShopItemDeleteArgs>(args: SelectSubset<T, ShopItemDeleteArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShopItem.
     * @param {ShopItemUpdateArgs} args - Arguments to update one ShopItem.
     * @example
     * // Update one ShopItem
     * const shopItem = await prisma.shopItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopItemUpdateArgs>(args: SelectSubset<T, ShopItemUpdateArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShopItems.
     * @param {ShopItemDeleteManyArgs} args - Arguments to filter ShopItems to delete.
     * @example
     * // Delete a few ShopItems
     * const { count } = await prisma.shopItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopItemDeleteManyArgs>(args?: SelectSubset<T, ShopItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopItems
     * const shopItem = await prisma.shopItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopItemUpdateManyArgs>(args: SelectSubset<T, ShopItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopItem.
     * @param {ShopItemUpsertArgs} args - Arguments to update or create a ShopItem.
     * @example
     * // Update or create a ShopItem
     * const shopItem = await prisma.shopItem.upsert({
     *   create: {
     *     // ... data to create a ShopItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopItem we want to update
     *   }
     * })
     */
    upsert<T extends ShopItemUpsertArgs>(args: SelectSubset<T, ShopItemUpsertArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShopItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemCountArgs} args - Arguments to filter ShopItems to count.
     * @example
     * // Count the number of ShopItems
     * const count = await prisma.shopItem.count({
     *   where: {
     *     // ... the filter for the ShopItems we want to count
     *   }
     * })
    **/
    count<T extends ShopItemCountArgs>(
      args?: Subset<T, ShopItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopItemAggregateArgs>(args: Subset<T, ShopItemAggregateArgs>): Prisma.PrismaPromise<GetShopItemAggregateType<T>>

    /**
     * Group by ShopItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopItemGroupByArgs['orderBy'] }
        : { orderBy?: ShopItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopItem model
   */
  readonly fields: ShopItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends ShopItem$ownersArgs<ExtArgs> = {}>(args?: Subset<T, ShopItem$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopItem model
   */ 
  interface ShopItemFieldRefs {
    readonly id: FieldRef<"ShopItem", 'String'>
    readonly name: FieldRef<"ShopItem", 'String'>
    readonly category: FieldRef<"ShopItem", 'String'>
    readonly price: FieldRef<"ShopItem", 'Int'>
    readonly icon: FieldRef<"ShopItem", 'String'>
    readonly rarity: FieldRef<"ShopItem", 'String'>
    readonly value: FieldRef<"ShopItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShopItem findUnique
   */
  export type ShopItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem findUniqueOrThrow
   */
  export type ShopItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem findFirst
   */
  export type ShopItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopItems.
     */
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem findFirstOrThrow
   */
  export type ShopItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopItems.
     */
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem findMany
   */
  export type ShopItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItems to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem create
   */
  export type ShopItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopItem.
     */
    data: XOR<ShopItemCreateInput, ShopItemUncheckedCreateInput>
  }

  /**
   * ShopItem createMany
   */
  export type ShopItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopItems.
     */
    data: ShopItemCreateManyInput | ShopItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopItem createManyAndReturn
   */
  export type ShopItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShopItems.
     */
    data: ShopItemCreateManyInput | ShopItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopItem update
   */
  export type ShopItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopItem.
     */
    data: XOR<ShopItemUpdateInput, ShopItemUncheckedUpdateInput>
    /**
     * Choose, which ShopItem to update.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem updateMany
   */
  export type ShopItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopItems.
     */
    data: XOR<ShopItemUpdateManyMutationInput, ShopItemUncheckedUpdateManyInput>
    /**
     * Filter which ShopItems to update
     */
    where?: ShopItemWhereInput
  }

  /**
   * ShopItem upsert
   */
  export type ShopItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopItem to update in case it exists.
     */
    where: ShopItemWhereUniqueInput
    /**
     * In case the ShopItem found by the `where` argument doesn't exist, create a new ShopItem with this data.
     */
    create: XOR<ShopItemCreateInput, ShopItemUncheckedCreateInput>
    /**
     * In case the ShopItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopItemUpdateInput, ShopItemUncheckedUpdateInput>
  }

  /**
   * ShopItem delete
   */
  export type ShopItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter which ShopItem to delete.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem deleteMany
   */
  export type ShopItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopItems to delete
     */
    where?: ShopItemWhereInput
  }

  /**
   * ShopItem.owners
   */
  export type ShopItem$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * ShopItem without action
   */
  export type ShopItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    acquiredAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    acquiredAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    userId: number
    itemId: number
    acquiredAt: number
    _all: number
  }


  export type InventoryItemMinAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    acquiredAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    acquiredAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    acquiredAt?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    userId: string
    itemId: string
    acquiredAt: Date
    _count: InventoryItemCountAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    acquiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ShopItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    acquiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ShopItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    userId?: boolean
    itemId?: boolean
    acquiredAt?: boolean
  }

  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ShopItemDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ShopItemDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ShopItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemId: string
      acquiredAt: Date
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    item<T extends ShopItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopItemDefaultArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */ 
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly userId: FieldRef<"InventoryItem", 'String'>
    readonly itemId: FieldRef<"InventoryItem", 'String'>
    readonly acquiredAt: FieldRef<"InventoryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    stake: number | null
    score: number | null
    duration: number | null
  }

  export type MatchSumAggregateOutputType = {
    stake: number | null
    score: number | null
    duration: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    gameType: string | null
    winnerId: string | null
    stake: number | null
    isRanked: boolean | null
    score: number | null
    duration: number | null
    createdAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    gameType: string | null
    winnerId: string | null
    stake: number | null
    isRanked: boolean | null
    score: number | null
    duration: number | null
    createdAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    gameType: number
    winnerId: number
    stake: number
    isRanked: number
    score: number
    duration: number
    createdAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    stake?: true
    score?: true
    duration?: true
  }

  export type MatchSumAggregateInputType = {
    stake?: true
    score?: true
    duration?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    gameType?: true
    winnerId?: true
    stake?: true
    isRanked?: true
    score?: true
    duration?: true
    createdAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    gameType?: true
    winnerId?: true
    stake?: true
    isRanked?: true
    score?: true
    duration?: true
    createdAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    gameType?: true
    winnerId?: true
    stake?: true
    isRanked?: true
    score?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    gameType: string
    winnerId: string | null
    stake: number
    isRanked: boolean
    score: number
    duration: number
    createdAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    stake?: boolean
    isRanked?: boolean
    score?: boolean
    duration?: boolean
    createdAt?: boolean
    players?: boolean | Match$playersArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    stake?: boolean
    isRanked?: boolean
    score?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    gameType?: boolean
    winnerId?: boolean
    stake?: boolean
    isRanked?: boolean
    score?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Match$playersArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      players: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameType: string
      winnerId: string | null
      stake: number
      isRanked: boolean
      score: number
      duration: number
      createdAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Match$playersArgs<ExtArgs> = {}>(args?: Subset<T, Match$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */ 
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly gameType: FieldRef<"Match", 'String'>
    readonly winnerId: FieldRef<"Match", 'String'>
    readonly stake: FieldRef<"Match", 'Int'>
    readonly isRanked: FieldRef<"Match", 'Boolean'>
    readonly score: FieldRef<"Match", 'Int'>
    readonly duration: FieldRef<"Match", 'Int'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
  }

  /**
   * Match.players
   */
  export type Match$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const DirectMessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    senderId: 'senderId',
    receiverId: 'receiverId',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type DirectMessageScalarFieldEnum = (typeof DirectMessageScalarFieldEnum)[keyof typeof DirectMessageScalarFieldEnum]


  export const QuestScalarFieldEnum: {
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

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const VillageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    icon: 'icon',
    totalXP: 'totalXP',
    createdAt: 'createdAt'
  };

  export type VillageScalarFieldEnum = (typeof VillageScalarFieldEnum)[keyof typeof VillageScalarFieldEnum]


  export const ShopItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    price: 'price',
    icon: 'icon',
    rarity: 'rarity',
    value: 'value'
  };

  export type ShopItemScalarFieldEnum = (typeof ShopItemScalarFieldEnum)[keyof typeof ShopItemScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemId: 'itemId',
    acquiredAt: 'acquiredAt'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    gameType: 'gameType',
    winnerId: 'winnerId',
    stake: 'stake',
    isRanked: 'isRanked',
    score: 'score',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    title?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    bio?: StringNullableFilter<"User"> | string | null
    villageId?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    recoveryToken?: StringNullableFilter<"User"> | string | null
    recoveryExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    loginStreak?: IntFilter<"User"> | number
    achievements?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    village?: XOR<VillageNullableRelationFilter, VillageWhereInput> | null
    inventory?: InventoryItemListRelationFilter
    matchHistory?: MatchListRelationFilter
    quests?: QuestListRelationFilter
    sentMessages?: DirectMessageListRelationFilter
    receivedMessages?: DirectMessageListRelationFilter
    friends?: FriendshipListRelationFilter
    friendOf?: FriendshipListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    bio?: SortOrderInput | SortOrder
    villageId?: SortOrderInput | SortOrder
    status?: SortOrder
    recoveryToken?: SortOrderInput | SortOrder
    recoveryExpires?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrder
    loginStreak?: SortOrder
    achievements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    village?: VillageOrderByWithRelationInput
    inventory?: InventoryItemOrderByRelationAggregateInput
    matchHistory?: MatchOrderByRelationAggregateInput
    quests?: QuestOrderByRelationAggregateInput
    sentMessages?: DirectMessageOrderByRelationAggregateInput
    receivedMessages?: DirectMessageOrderByRelationAggregateInput
    friends?: FriendshipOrderByRelationAggregateInput
    friendOf?: FriendshipOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    title?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    bio?: StringNullableFilter<"User"> | string | null
    villageId?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    recoveryToken?: StringNullableFilter<"User"> | string | null
    recoveryExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    loginStreak?: IntFilter<"User"> | number
    achievements?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    village?: XOR<VillageNullableRelationFilter, VillageWhereInput> | null
    inventory?: InventoryItemListRelationFilter
    matchHistory?: MatchListRelationFilter
    quests?: QuestListRelationFilter
    sentMessages?: DirectMessageListRelationFilter
    receivedMessages?: DirectMessageListRelationFilter
    friends?: FriendshipListRelationFilter
    friendOf?: FriendshipListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    bio?: SortOrderInput | SortOrder
    villageId?: SortOrderInput | SortOrder
    status?: SortOrder
    recoveryToken?: SortOrderInput | SortOrder
    recoveryExpires?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrder
    loginStreak?: SortOrder
    achievements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    title?: StringWithAggregatesFilter<"User"> | string
    level?: IntWithAggregatesFilter<"User"> | number
    xp?: IntWithAggregatesFilter<"User"> | number
    coins?: IntWithAggregatesFilter<"User"> | number
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    villageId?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    recoveryToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    recoveryExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    loginStreak?: IntWithAggregatesFilter<"User"> | number
    achievements?: JsonWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: StringFilter<"Friendship"> | string
    userId?: StringFilter<"Friendship"> | string
    friendId?: StringFilter<"Friendship"> | string
    status?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    friend?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_friendId?: FriendshipUserIdFriendIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    userId?: StringFilter<"Friendship"> | string
    friendId?: StringFilter<"Friendship"> | string
    status?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    friend?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_friendId">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendship"> | string
    userId?: StringWithAggregatesFilter<"Friendship"> | string
    friendId?: StringWithAggregatesFilter<"Friendship"> | string
    status?: StringWithAggregatesFilter<"Friendship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type DirectMessageWhereInput = {
    AND?: DirectMessageWhereInput | DirectMessageWhereInput[]
    OR?: DirectMessageWhereInput[]
    NOT?: DirectMessageWhereInput | DirectMessageWhereInput[]
    id?: StringFilter<"DirectMessage"> | string
    text?: StringFilter<"DirectMessage"> | string
    senderId?: StringFilter<"DirectMessage"> | string
    receiverId?: StringFilter<"DirectMessage"> | string
    read?: BoolFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeFilter<"DirectMessage"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DirectMessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type DirectMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectMessageWhereInput | DirectMessageWhereInput[]
    OR?: DirectMessageWhereInput[]
    NOT?: DirectMessageWhereInput | DirectMessageWhereInput[]
    text?: StringFilter<"DirectMessage"> | string
    senderId?: StringFilter<"DirectMessage"> | string
    receiverId?: StringFilter<"DirectMessage"> | string
    read?: BoolFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeFilter<"DirectMessage"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DirectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: DirectMessageCountOrderByAggregateInput
    _max?: DirectMessageMaxOrderByAggregateInput
    _min?: DirectMessageMinOrderByAggregateInput
  }

  export type DirectMessageScalarWhereWithAggregatesInput = {
    AND?: DirectMessageScalarWhereWithAggregatesInput | DirectMessageScalarWhereWithAggregatesInput[]
    OR?: DirectMessageScalarWhereWithAggregatesInput[]
    NOT?: DirectMessageScalarWhereWithAggregatesInput | DirectMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectMessage"> | string
    text?: StringWithAggregatesFilter<"DirectMessage"> | string
    senderId?: StringWithAggregatesFilter<"DirectMessage"> | string
    receiverId?: StringWithAggregatesFilter<"DirectMessage"> | string
    read?: BoolWithAggregatesFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DirectMessage"> | Date | string
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    type?: StringFilter<"Quest"> | string
    rewardXP?: IntFilter<"Quest"> | number
    rewardCoins?: IntFilter<"Quest"> | number
    target?: IntFilter<"Quest"> | number
    progress?: IntFilter<"Quest"> | number
    completed?: BoolFilter<"Quest"> | boolean
    claimed?: BoolFilter<"Quest"> | boolean
    userId?: StringFilter<"Quest"> | string
    expiresAt?: DateTimeNullableFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    type?: StringFilter<"Quest"> | string
    rewardXP?: IntFilter<"Quest"> | number
    rewardCoins?: IntFilter<"Quest"> | number
    target?: IntFilter<"Quest"> | number
    progress?: IntFilter<"Quest"> | number
    completed?: BoolFilter<"Quest"> | boolean
    claimed?: BoolFilter<"Quest"> | boolean
    userId?: StringFilter<"Quest"> | string
    expiresAt?: DateTimeNullableFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _avg?: QuestAvgOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
    _sum?: QuestSumOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quest"> | string
    title?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringWithAggregatesFilter<"Quest"> | string
    type?: StringWithAggregatesFilter<"Quest"> | string
    rewardXP?: IntWithAggregatesFilter<"Quest"> | number
    rewardCoins?: IntWithAggregatesFilter<"Quest"> | number
    target?: IntWithAggregatesFilter<"Quest"> | number
    progress?: IntWithAggregatesFilter<"Quest"> | number
    completed?: BoolWithAggregatesFilter<"Quest"> | boolean
    claimed?: BoolWithAggregatesFilter<"Quest"> | boolean
    userId?: StringWithAggregatesFilter<"Quest"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
  }

  export type VillageWhereInput = {
    AND?: VillageWhereInput | VillageWhereInput[]
    OR?: VillageWhereInput[]
    NOT?: VillageWhereInput | VillageWhereInput[]
    id?: StringFilter<"Village"> | string
    name?: StringFilter<"Village"> | string
    region?: StringFilter<"Village"> | string
    icon?: StringFilter<"Village"> | string
    totalXP?: IntFilter<"Village"> | number
    createdAt?: DateTimeFilter<"Village"> | Date | string
    members?: UserListRelationFilter
  }

  export type VillageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    icon?: SortOrder
    totalXP?: SortOrder
    createdAt?: SortOrder
    members?: UserOrderByRelationAggregateInput
  }

  export type VillageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: VillageWhereInput | VillageWhereInput[]
    OR?: VillageWhereInput[]
    NOT?: VillageWhereInput | VillageWhereInput[]
    region?: StringFilter<"Village"> | string
    icon?: StringFilter<"Village"> | string
    totalXP?: IntFilter<"Village"> | number
    createdAt?: DateTimeFilter<"Village"> | Date | string
    members?: UserListRelationFilter
  }, "id" | "name">

  export type VillageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    icon?: SortOrder
    totalXP?: SortOrder
    createdAt?: SortOrder
    _count?: VillageCountOrderByAggregateInput
    _avg?: VillageAvgOrderByAggregateInput
    _max?: VillageMaxOrderByAggregateInput
    _min?: VillageMinOrderByAggregateInput
    _sum?: VillageSumOrderByAggregateInput
  }

  export type VillageScalarWhereWithAggregatesInput = {
    AND?: VillageScalarWhereWithAggregatesInput | VillageScalarWhereWithAggregatesInput[]
    OR?: VillageScalarWhereWithAggregatesInput[]
    NOT?: VillageScalarWhereWithAggregatesInput | VillageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Village"> | string
    name?: StringWithAggregatesFilter<"Village"> | string
    region?: StringWithAggregatesFilter<"Village"> | string
    icon?: StringWithAggregatesFilter<"Village"> | string
    totalXP?: IntWithAggregatesFilter<"Village"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Village"> | Date | string
  }

  export type ShopItemWhereInput = {
    AND?: ShopItemWhereInput | ShopItemWhereInput[]
    OR?: ShopItemWhereInput[]
    NOT?: ShopItemWhereInput | ShopItemWhereInput[]
    id?: StringFilter<"ShopItem"> | string
    name?: StringFilter<"ShopItem"> | string
    category?: StringFilter<"ShopItem"> | string
    price?: IntFilter<"ShopItem"> | number
    icon?: StringFilter<"ShopItem"> | string
    rarity?: StringFilter<"ShopItem"> | string
    value?: StringNullableFilter<"ShopItem"> | string | null
    owners?: InventoryItemListRelationFilter
  }

  export type ShopItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    value?: SortOrderInput | SortOrder
    owners?: InventoryItemOrderByRelationAggregateInput
  }

  export type ShopItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopItemWhereInput | ShopItemWhereInput[]
    OR?: ShopItemWhereInput[]
    NOT?: ShopItemWhereInput | ShopItemWhereInput[]
    name?: StringFilter<"ShopItem"> | string
    category?: StringFilter<"ShopItem"> | string
    price?: IntFilter<"ShopItem"> | number
    icon?: StringFilter<"ShopItem"> | string
    rarity?: StringFilter<"ShopItem"> | string
    value?: StringNullableFilter<"ShopItem"> | string | null
    owners?: InventoryItemListRelationFilter
  }, "id">

  export type ShopItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: ShopItemCountOrderByAggregateInput
    _avg?: ShopItemAvgOrderByAggregateInput
    _max?: ShopItemMaxOrderByAggregateInput
    _min?: ShopItemMinOrderByAggregateInput
    _sum?: ShopItemSumOrderByAggregateInput
  }

  export type ShopItemScalarWhereWithAggregatesInput = {
    AND?: ShopItemScalarWhereWithAggregatesInput | ShopItemScalarWhereWithAggregatesInput[]
    OR?: ShopItemScalarWhereWithAggregatesInput[]
    NOT?: ShopItemScalarWhereWithAggregatesInput | ShopItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopItem"> | string
    name?: StringWithAggregatesFilter<"ShopItem"> | string
    category?: StringWithAggregatesFilter<"ShopItem"> | string
    price?: IntWithAggregatesFilter<"ShopItem"> | number
    icon?: StringWithAggregatesFilter<"ShopItem"> | string
    rarity?: StringWithAggregatesFilter<"ShopItem"> | string
    value?: StringNullableWithAggregatesFilter<"ShopItem"> | string | null
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    userId?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    acquiredAt?: DateTimeFilter<"InventoryItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    item?: XOR<ShopItemRelationFilter, ShopItemWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    user?: UserOrderByWithRelationInput
    item?: ShopItemOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_itemId?: InventoryItemUserIdItemIdCompoundUniqueInput
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    userId?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    acquiredAt?: DateTimeFilter<"InventoryItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    item?: XOR<ShopItemRelationFilter, ShopItemWhereInput>
  }, "id" | "userId_itemId">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    userId?: StringWithAggregatesFilter<"InventoryItem"> | string
    itemId?: StringWithAggregatesFilter<"InventoryItem"> | string
    acquiredAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    gameType?: StringFilter<"Match"> | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    stake?: IntFilter<"Match"> | number
    isRanked?: BoolFilter<"Match"> | boolean
    score?: IntFilter<"Match"> | number
    duration?: IntFilter<"Match"> | number
    createdAt?: DateTimeFilter<"Match"> | Date | string
    players?: UserListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    stake?: SortOrder
    isRanked?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    players?: UserOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    gameType?: StringFilter<"Match"> | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    stake?: IntFilter<"Match"> | number
    isRanked?: BoolFilter<"Match"> | boolean
    score?: IntFilter<"Match"> | number
    duration?: IntFilter<"Match"> | number
    createdAt?: DateTimeFilter<"Match"> | Date | string
    players?: UserListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    stake?: SortOrder
    isRanked?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    gameType?: StringWithAggregatesFilter<"Match"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    stake?: IntWithAggregatesFilter<"Match"> | number
    isRanked?: BoolWithAggregatesFilter<"Match"> | boolean
    score?: IntWithAggregatesFilter<"Match"> | number
    duration?: IntWithAggregatesFilter<"Match"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateInput = {
    id?: string
    text: string
    read?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type DirectMessageUncheckedCreateInput = {
    id?: string
    text: string
    senderId: string
    receiverId: string
    read?: boolean
    createdAt?: Date | string
  }

  export type DirectMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type DirectMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateManyInput = {
    id?: string
    text: string
    senderId: string
    receiverId: string
    read?: boolean
    createdAt?: Date | string
  }

  export type DirectMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCreateInput = {
    id?: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress?: number
    completed?: boolean
    claimed?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQuestsInput
  }

  export type QuestUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress?: number
    completed?: boolean
    claimed?: boolean
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestsNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCreateManyInput = {
    id?: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress?: number
    completed?: boolean
    claimed?: boolean
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageCreateInput = {
    id?: string
    name: string
    region: string
    icon?: string
    totalXP?: number
    createdAt?: Date | string
    members?: UserCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateInput = {
    id?: string
    name: string
    region: string
    icon?: string
    totalXP?: number
    createdAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    totalXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    totalXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type VillageCreateManyInput = {
    id?: string
    name: string
    region: string
    icon?: string
    totalXP?: number
    createdAt?: Date | string
  }

  export type VillageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    totalXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    totalXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemCreateInput = {
    id?: string
    name: string
    category: string
    price: number
    icon: string
    rarity: string
    value?: string | null
    owners?: InventoryItemCreateNestedManyWithoutItemInput
  }

  export type ShopItemUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    price: number
    icon: string
    rarity: string
    value?: string | null
    owners?: InventoryItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ShopItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    owners?: InventoryItemUpdateManyWithoutItemNestedInput
  }

  export type ShopItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    owners?: InventoryItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ShopItemCreateManyInput = {
    id?: string
    name: string
    category: string
    price: number
    icon: string
    rarity: string
    value?: string | null
  }

  export type ShopItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryItemCreateInput = {
    id?: string
    acquiredAt?: Date | string
    user: UserCreateNestedOneWithoutInventoryInput
    item: ShopItemCreateNestedOneWithoutOwnersInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    userId: string
    itemId: string
    acquiredAt?: Date | string
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
    item?: ShopItemUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    userId: string
    itemId: string
    acquiredAt?: Date | string
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    gameType: string
    winnerId?: string | null
    stake?: number
    isRanked?: boolean
    score?: number
    duration: number
    createdAt?: Date | string
    players?: UserCreateNestedManyWithoutMatchHistoryInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    gameType: string
    winnerId?: string | null
    stake?: number
    isRanked?: boolean
    score?: number
    duration: number
    createdAt?: Date | string
    players?: UserUncheckedCreateNestedManyWithoutMatchHistoryInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserUpdateManyWithoutMatchHistoryNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserUncheckedUpdateManyWithoutMatchHistoryNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    gameType: string
    winnerId?: string | null
    stake?: number
    isRanked?: boolean
    score?: number
    duration: number
    createdAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VillageNullableRelationFilter = {
    is?: VillageWhereInput | null
    isNot?: VillageWhereInput | null
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type QuestListRelationFilter = {
    every?: QuestWhereInput
    some?: QuestWhereInput
    none?: QuestWhereInput
  }

  export type DirectMessageListRelationFilter = {
    every?: DirectMessageWhereInput
    some?: DirectMessageWhereInput
    none?: DirectMessageWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    bio?: SortOrder
    villageId?: SortOrder
    status?: SortOrder
    recoveryToken?: SortOrder
    recoveryExpires?: SortOrder
    lastLoginAt?: SortOrder
    loginStreak?: SortOrder
    achievements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    loginStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    bio?: SortOrder
    villageId?: SortOrder
    status?: SortOrder
    recoveryToken?: SortOrder
    recoveryExpires?: SortOrder
    lastLoginAt?: SortOrder
    loginStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    bio?: SortOrder
    villageId?: SortOrder
    status?: SortOrder
    recoveryToken?: SortOrder
    recoveryExpires?: SortOrder
    lastLoginAt?: SortOrder
    loginStreak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    loginStreak?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendshipUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DirectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type DirectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type DirectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestAvgOrderByAggregateInput = {
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestSumOrderByAggregateInput = {
    rewardXP?: SortOrder
    rewardCoins?: SortOrder
    target?: SortOrder
    progress?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    icon?: SortOrder
    totalXP?: SortOrder
    createdAt?: SortOrder
  }

  export type VillageAvgOrderByAggregateInput = {
    totalXP?: SortOrder
  }

  export type VillageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    icon?: SortOrder
    totalXP?: SortOrder
    createdAt?: SortOrder
  }

  export type VillageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    icon?: SortOrder
    totalXP?: SortOrder
    createdAt?: SortOrder
  }

  export type VillageSumOrderByAggregateInput = {
    totalXP?: SortOrder
  }

  export type ShopItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
  }

  export type ShopItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ShopItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
  }

  export type ShopItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    value?: SortOrder
  }

  export type ShopItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ShopItemRelationFilter = {
    is?: ShopItemWhereInput
    isNot?: ShopItemWhereInput
  }

  export type InventoryItemUserIdItemIdCompoundUniqueInput = {
    userId: string
    itemId: string
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    stake?: SortOrder
    isRanked?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    stake?: SortOrder
    score?: SortOrder
    duration?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    stake?: SortOrder
    isRanked?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    gameType?: SortOrder
    winnerId?: SortOrder
    stake?: SortOrder
    isRanked?: SortOrder
    score?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    stake?: SortOrder
    score?: SortOrder
    duration?: SortOrder
  }

  export type VillageCreateNestedOneWithoutMembersInput = {
    create?: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VillageCreateOrConnectWithoutMembersInput
    connect?: VillageWhereUniqueInput
  }

  export type InventoryItemCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayersInput = {
    create?: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput> | MatchCreateWithoutPlayersInput[] | MatchUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayersInput | MatchCreateOrConnectWithoutPlayersInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type QuestCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestCreateWithoutUserInput, QuestUncheckedCreateWithoutUserInput> | QuestCreateWithoutUserInput[] | QuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutUserInput | QuestCreateOrConnectWithoutUserInput[]
    createMany?: QuestCreateManyUserInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type DirectMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<DirectMessageCreateWithoutSenderInput, DirectMessageUncheckedCreateWithoutSenderInput> | DirectMessageCreateWithoutSenderInput[] | DirectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutSenderInput | DirectMessageCreateOrConnectWithoutSenderInput[]
    createMany?: DirectMessageCreateManySenderInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type DirectMessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<DirectMessageCreateWithoutReceiverInput, DirectMessageUncheckedCreateWithoutReceiverInput> | DirectMessageCreateWithoutReceiverInput[] | DirectMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutReceiverInput | DirectMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: DirectMessageCreateManyReceiverInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput> | MatchCreateWithoutPlayersInput[] | MatchUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayersInput | MatchCreateOrConnectWithoutPlayersInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type QuestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestCreateWithoutUserInput, QuestUncheckedCreateWithoutUserInput> | QuestCreateWithoutUserInput[] | QuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutUserInput | QuestCreateOrConnectWithoutUserInput[]
    createMany?: QuestCreateManyUserInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<DirectMessageCreateWithoutSenderInput, DirectMessageUncheckedCreateWithoutSenderInput> | DirectMessageCreateWithoutSenderInput[] | DirectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutSenderInput | DirectMessageCreateOrConnectWithoutSenderInput[]
    createMany?: DirectMessageCreateManySenderInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<DirectMessageCreateWithoutReceiverInput, DirectMessageUncheckedCreateWithoutReceiverInput> | DirectMessageCreateWithoutReceiverInput[] | DirectMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutReceiverInput | DirectMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: DirectMessageCreateManyReceiverInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VillageUpdateOneWithoutMembersNestedInput = {
    create?: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VillageCreateOrConnectWithoutMembersInput
    upsert?: VillageUpsertWithoutMembersInput
    disconnect?: VillageWhereInput | boolean
    delete?: VillageWhereInput | boolean
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutMembersInput, VillageUpdateWithoutMembersInput>, VillageUncheckedUpdateWithoutMembersInput>
  }

  export type InventoryItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutUserInput | InventoryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutUserInput | InventoryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutUserInput | InventoryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput> | MatchCreateWithoutPlayersInput[] | MatchUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayersInput | MatchCreateOrConnectWithoutPlayersInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayersInput | MatchUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayersInput | MatchUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayersInput | MatchUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type QuestUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestCreateWithoutUserInput, QuestUncheckedCreateWithoutUserInput> | QuestCreateWithoutUserInput[] | QuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutUserInput | QuestCreateOrConnectWithoutUserInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutUserInput | QuestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestCreateManyUserInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutUserInput | QuestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutUserInput | QuestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type DirectMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<DirectMessageCreateWithoutSenderInput, DirectMessageUncheckedCreateWithoutSenderInput> | DirectMessageCreateWithoutSenderInput[] | DirectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutSenderInput | DirectMessageCreateOrConnectWithoutSenderInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutSenderInput | DirectMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: DirectMessageCreateManySenderInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutSenderInput | DirectMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutSenderInput | DirectMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type DirectMessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<DirectMessageCreateWithoutReceiverInput, DirectMessageUncheckedCreateWithoutReceiverInput> | DirectMessageCreateWithoutReceiverInput[] | DirectMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutReceiverInput | DirectMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutReceiverInput | DirectMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: DirectMessageCreateManyReceiverInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutReceiverInput | DirectMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutReceiverInput | DirectMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput | FriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUserInput | FriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput | FriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput | FriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput | FriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput | FriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutUserInput | InventoryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutUserInput | InventoryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutUserInput | InventoryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput> | MatchCreateWithoutPlayersInput[] | MatchUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayersInput | MatchCreateOrConnectWithoutPlayersInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayersInput | MatchUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayersInput | MatchUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayersInput | MatchUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type QuestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestCreateWithoutUserInput, QuestUncheckedCreateWithoutUserInput> | QuestCreateWithoutUserInput[] | QuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutUserInput | QuestCreateOrConnectWithoutUserInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutUserInput | QuestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestCreateManyUserInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutUserInput | QuestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutUserInput | QuestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type DirectMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<DirectMessageCreateWithoutSenderInput, DirectMessageUncheckedCreateWithoutSenderInput> | DirectMessageCreateWithoutSenderInput[] | DirectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutSenderInput | DirectMessageCreateOrConnectWithoutSenderInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutSenderInput | DirectMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: DirectMessageCreateManySenderInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutSenderInput | DirectMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutSenderInput | DirectMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<DirectMessageCreateWithoutReceiverInput, DirectMessageUncheckedCreateWithoutReceiverInput> | DirectMessageCreateWithoutReceiverInput[] | DirectMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutReceiverInput | DirectMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutReceiverInput | DirectMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: DirectMessageCreateManyReceiverInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutReceiverInput | DirectMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutReceiverInput | DirectMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput | FriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUserInput | FriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput | FriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput | FriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput | FriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput | FriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutQuestsInput = {
    create?: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQuestsNestedInput = {
    create?: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestsInput
    upsert?: UserUpsertWithoutQuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestsInput, UserUpdateWithoutQuestsInput>, UserUncheckedUpdateWithoutQuestsInput>
  }

  export type UserCreateNestedManyWithoutVillageInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutVillageNestedInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVillageInput | UserUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVillageInput | UserUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVillageInput | UserUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVillageInput | UserUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVillageInput | UserUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVillageInput | UserUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InventoryItemCreateNestedManyWithoutItemInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutItemInput | InventoryItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutItemInput | InventoryItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutItemInput | InventoryItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput> | InventoryItemCreateWithoutItemInput[] | InventoryItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutItemInput | InventoryItemCreateOrConnectWithoutItemInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutItemInput | InventoryItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: InventoryItemCreateManyItemInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutItemInput | InventoryItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutItemInput | InventoryItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    connect?: UserWhereUniqueInput
  }

  export type ShopItemCreateNestedOneWithoutOwnersInput = {
    create?: XOR<ShopItemCreateWithoutOwnersInput, ShopItemUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: ShopItemCreateOrConnectWithoutOwnersInput
    connect?: ShopItemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    upsert?: UserUpsertWithoutInventoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryInput, UserUpdateWithoutInventoryInput>, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type ShopItemUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<ShopItemCreateWithoutOwnersInput, ShopItemUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: ShopItemCreateOrConnectWithoutOwnersInput
    upsert?: ShopItemUpsertWithoutOwnersInput
    connect?: ShopItemWhereUniqueInput
    update?: XOR<XOR<ShopItemUpdateToOneWithWhereWithoutOwnersInput, ShopItemUpdateWithoutOwnersInput>, ShopItemUncheckedUpdateWithoutOwnersInput>
  }

  export type UserCreateNestedManyWithoutMatchHistoryInput = {
    create?: XOR<UserCreateWithoutMatchHistoryInput, UserUncheckedCreateWithoutMatchHistoryInput> | UserCreateWithoutMatchHistoryInput[] | UserUncheckedCreateWithoutMatchHistoryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryInput | UserCreateOrConnectWithoutMatchHistoryInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMatchHistoryInput = {
    create?: XOR<UserCreateWithoutMatchHistoryInput, UserUncheckedCreateWithoutMatchHistoryInput> | UserCreateWithoutMatchHistoryInput[] | UserUncheckedCreateWithoutMatchHistoryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryInput | UserCreateOrConnectWithoutMatchHistoryInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutMatchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutMatchHistoryInput, UserUncheckedCreateWithoutMatchHistoryInput> | UserCreateWithoutMatchHistoryInput[] | UserUncheckedCreateWithoutMatchHistoryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryInput | UserCreateOrConnectWithoutMatchHistoryInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMatchHistoryInput | UserUpsertWithWhereUniqueWithoutMatchHistoryInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMatchHistoryInput | UserUpdateWithWhereUniqueWithoutMatchHistoryInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMatchHistoryInput | UserUpdateManyWithWhereWithoutMatchHistoryInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMatchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutMatchHistoryInput, UserUncheckedCreateWithoutMatchHistoryInput> | UserCreateWithoutMatchHistoryInput[] | UserUncheckedCreateWithoutMatchHistoryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMatchHistoryInput | UserCreateOrConnectWithoutMatchHistoryInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMatchHistoryInput | UserUpsertWithWhereUniqueWithoutMatchHistoryInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMatchHistoryInput | UserUpdateWithWhereUniqueWithoutMatchHistoryInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMatchHistoryInput | UserUpdateManyWithWhereWithoutMatchHistoryInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VillageCreateWithoutMembersInput = {
    id?: string
    name: string
    region: string
    icon?: string
    totalXP?: number
    createdAt?: Date | string
  }

  export type VillageUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    region: string
    icon?: string
    totalXP?: number
    createdAt?: Date | string
  }

  export type VillageCreateOrConnectWithoutMembersInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
  }

  export type InventoryItemCreateWithoutUserInput = {
    id?: string
    acquiredAt?: Date | string
    item: ShopItemCreateNestedOneWithoutOwnersInput
  }

  export type InventoryItemUncheckedCreateWithoutUserInput = {
    id?: string
    itemId: string
    acquiredAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutUserInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput>
  }

  export type InventoryItemCreateManyUserInputEnvelope = {
    data: InventoryItemCreateManyUserInput | InventoryItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayersInput = {
    id?: string
    gameType: string
    winnerId?: string | null
    stake?: number
    isRanked?: boolean
    score?: number
    duration: number
    createdAt?: Date | string
  }

  export type MatchUncheckedCreateWithoutPlayersInput = {
    id?: string
    gameType: string
    winnerId?: string | null
    stake?: number
    isRanked?: boolean
    score?: number
    duration: number
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutPlayersInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput>
  }

  export type QuestCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress?: number
    completed?: boolean
    claimed?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress?: number
    completed?: boolean
    claimed?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestCreateOrConnectWithoutUserInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutUserInput, QuestUncheckedCreateWithoutUserInput>
  }

  export type QuestCreateManyUserInputEnvelope = {
    data: QuestCreateManyUserInput | QuestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DirectMessageCreateWithoutSenderInput = {
    id?: string
    text: string
    read?: boolean
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type DirectMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    text: string
    receiverId: string
    read?: boolean
    createdAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutSenderInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutSenderInput, DirectMessageUncheckedCreateWithoutSenderInput>
  }

  export type DirectMessageCreateManySenderInputEnvelope = {
    data: DirectMessageCreateManySenderInput | DirectMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type DirectMessageCreateWithoutReceiverInput = {
    id?: string
    text: string
    read?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type DirectMessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    text: string
    senderId: string
    read?: boolean
    createdAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutReceiverInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutReceiverInput, DirectMessageUncheckedCreateWithoutReceiverInput>
  }

  export type DirectMessageCreateManyReceiverInputEnvelope = {
    data: DirectMessageCreateManyReceiverInput | DirectMessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUserInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendshipUncheckedCreateWithoutUserInput = {
    id?: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput>
  }

  export type FriendshipCreateManyUserInputEnvelope = {
    data: FriendshipCreateManyUserInput | FriendshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutFriendInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendshipUncheckedCreateWithoutFriendInput = {
    id?: string
    userId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput>
  }

  export type FriendshipCreateManyFriendInputEnvelope = {
    data: FriendshipCreateManyFriendInput | FriendshipCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type VillageUpsertWithoutMembersInput = {
    update: XOR<VillageUpdateWithoutMembersInput, VillageUncheckedUpdateWithoutMembersInput>
    create: XOR<VillageCreateWithoutMembersInput, VillageUncheckedCreateWithoutMembersInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutMembersInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutMembersInput, VillageUncheckedUpdateWithoutMembersInput>
  }

  export type VillageUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    totalXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    totalXP?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutUserInput, InventoryItemUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutUserInput, InventoryItemUncheckedUpdateWithoutUserInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutUserInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutUserInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    userId?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    acquiredAt?: DateTimeFilter<"InventoryItem"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayersInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayersInput, MatchUncheckedUpdateWithoutPlayersInput>
    create: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayersInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayersInput, MatchUncheckedUpdateWithoutPlayersInput>
  }

  export type MatchUpdateManyWithWhereWithoutPlayersInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayersInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    gameType?: StringFilter<"Match"> | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    stake?: IntFilter<"Match"> | number
    isRanked?: BoolFilter<"Match"> | boolean
    score?: IntFilter<"Match"> | number
    duration?: IntFilter<"Match"> | number
    createdAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type QuestUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestWhereUniqueInput
    update: XOR<QuestUpdateWithoutUserInput, QuestUncheckedUpdateWithoutUserInput>
    create: XOR<QuestCreateWithoutUserInput, QuestUncheckedCreateWithoutUserInput>
  }

  export type QuestUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestWhereUniqueInput
    data: XOR<QuestUpdateWithoutUserInput, QuestUncheckedUpdateWithoutUserInput>
  }

  export type QuestUpdateManyWithWhereWithoutUserInput = {
    where: QuestScalarWhereInput
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestScalarWhereInput = {
    AND?: QuestScalarWhereInput | QuestScalarWhereInput[]
    OR?: QuestScalarWhereInput[]
    NOT?: QuestScalarWhereInput | QuestScalarWhereInput[]
    id?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    type?: StringFilter<"Quest"> | string
    rewardXP?: IntFilter<"Quest"> | number
    rewardCoins?: IntFilter<"Quest"> | number
    target?: IntFilter<"Quest"> | number
    progress?: IntFilter<"Quest"> | number
    completed?: BoolFilter<"Quest"> | boolean
    claimed?: BoolFilter<"Quest"> | boolean
    userId?: StringFilter<"Quest"> | string
    expiresAt?: DateTimeNullableFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutSenderInput, DirectMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<DirectMessageCreateWithoutSenderInput, DirectMessageUncheckedCreateWithoutSenderInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutSenderInput, DirectMessageUncheckedUpdateWithoutSenderInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutSenderInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type DirectMessageScalarWhereInput = {
    AND?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
    OR?: DirectMessageScalarWhereInput[]
    NOT?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
    id?: StringFilter<"DirectMessage"> | string
    text?: StringFilter<"DirectMessage"> | string
    senderId?: StringFilter<"DirectMessage"> | string
    receiverId?: StringFilter<"DirectMessage"> | string
    read?: BoolFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeFilter<"DirectMessage"> | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutReceiverInput, DirectMessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<DirectMessageCreateWithoutReceiverInput, DirectMessageUncheckedCreateWithoutReceiverInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutReceiverInput, DirectMessageUncheckedUpdateWithoutReceiverInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutReceiverInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUserInput, FriendshipUncheckedUpdateWithoutUserInput>
    create: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUserInput, FriendshipUncheckedUpdateWithoutUserInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutUserInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: StringFilter<"Friendship"> | string
    userId?: StringFilter<"Friendship"> | string
    friendId?: StringFilter<"Friendship"> | string
    status?: StringFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutFriendInput, FriendshipUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutFriendInput, FriendshipUncheckedUpdateWithoutFriendInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutFriendInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutFriendInput>
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutQuestsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutQuestsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutQuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
  }

  export type UserUpsertWithoutQuestsInput = {
    update: XOR<UserUpdateWithoutQuestsInput, UserUncheckedUpdateWithoutQuestsInput>
    create: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestsInput, UserUncheckedUpdateWithoutQuestsInput>
  }

  export type UserUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateWithoutVillageInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutVillageInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutVillageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput>
  }

  export type UserCreateManyVillageInputEnvelope = {
    data: UserCreateManyVillageInput | UserCreateManyVillageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutVillageInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutVillageInput, UserUncheckedUpdateWithoutVillageInput>
    create: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput>
  }

  export type UserUpdateWithWhereUniqueWithoutVillageInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutVillageInput, UserUncheckedUpdateWithoutVillageInput>
  }

  export type UserUpdateManyWithWhereWithoutVillageInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutVillageInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    title?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    bio?: StringNullableFilter<"User"> | string | null
    villageId?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    recoveryToken?: StringNullableFilter<"User"> | string | null
    recoveryExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    loginStreak?: IntFilter<"User"> | number
    achievements?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type InventoryItemCreateWithoutItemInput = {
    id?: string
    acquiredAt?: Date | string
    user: UserCreateNestedOneWithoutInventoryInput
  }

  export type InventoryItemUncheckedCreateWithoutItemInput = {
    id?: string
    userId: string
    acquiredAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutItemInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput>
  }

  export type InventoryItemCreateManyItemInputEnvelope = {
    data: InventoryItemCreateManyItemInput | InventoryItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutItemInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutItemInput, InventoryItemUncheckedUpdateWithoutItemInput>
    create: XOR<InventoryItemCreateWithoutItemInput, InventoryItemUncheckedCreateWithoutItemInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutItemInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutItemInput, InventoryItemUncheckedUpdateWithoutItemInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutItemInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutItemInput>
  }

  export type UserCreateWithoutInventoryInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    matchHistory?: MatchCreateNestedManyWithoutPlayersInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutInventoryInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    matchHistory?: MatchUncheckedCreateNestedManyWithoutPlayersInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutInventoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type ShopItemCreateWithoutOwnersInput = {
    id?: string
    name: string
    category: string
    price: number
    icon: string
    rarity: string
    value?: string | null
  }

  export type ShopItemUncheckedCreateWithoutOwnersInput = {
    id?: string
    name: string
    category: string
    price: number
    icon: string
    rarity: string
    value?: string | null
  }

  export type ShopItemCreateOrConnectWithoutOwnersInput = {
    where: ShopItemWhereUniqueInput
    create: XOR<ShopItemCreateWithoutOwnersInput, ShopItemUncheckedCreateWithoutOwnersInput>
  }

  export type UserUpsertWithoutInventoryInput = {
    update: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ShopItemUpsertWithoutOwnersInput = {
    update: XOR<ShopItemUpdateWithoutOwnersInput, ShopItemUncheckedUpdateWithoutOwnersInput>
    create: XOR<ShopItemCreateWithoutOwnersInput, ShopItemUncheckedCreateWithoutOwnersInput>
    where?: ShopItemWhereInput
  }

  export type ShopItemUpdateToOneWithWhereWithoutOwnersInput = {
    where?: ShopItemWhereInput
    data: XOR<ShopItemUpdateWithoutOwnersInput, ShopItemUncheckedUpdateWithoutOwnersInput>
  }

  export type ShopItemUpdateWithoutOwnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopItemUncheckedUpdateWithoutOwnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutMatchHistoryInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutMembersInput
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    quests?: QuestCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageCreateNestedManyWithoutReceiverInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    friendOf?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutMatchHistoryInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    villageId?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    quests?: QuestUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: DirectMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: DirectMessageUncheckedCreateNestedManyWithoutReceiverInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutMatchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchHistoryInput, UserUncheckedCreateWithoutMatchHistoryInput>
  }

  export type UserUpsertWithWhereUniqueWithoutMatchHistoryInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMatchHistoryInput, UserUncheckedUpdateWithoutMatchHistoryInput>
    create: XOR<UserCreateWithoutMatchHistoryInput, UserUncheckedCreateWithoutMatchHistoryInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMatchHistoryInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMatchHistoryInput, UserUncheckedUpdateWithoutMatchHistoryInput>
  }

  export type UserUpdateManyWithWhereWithoutMatchHistoryInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMatchHistoryInput>
  }

  export type InventoryItemCreateManyUserInput = {
    id?: string
    itemId: string
    acquiredAt?: Date | string
  }

  export type QuestCreateManyUserInput = {
    id?: string
    title: string
    description: string
    type: string
    rewardXP: number
    rewardCoins: number
    target: number
    progress?: number
    completed?: boolean
    claimed?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DirectMessageCreateManySenderInput = {
    id?: string
    text: string
    receiverId: string
    read?: boolean
    createdAt?: Date | string
  }

  export type DirectMessageCreateManyReceiverInput = {
    id?: string
    text: string
    senderId: string
    read?: boolean
    createdAt?: Date | string
  }

  export type FriendshipCreateManyUserInput = {
    id?: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendshipCreateManyFriendInput = {
    id?: string
    userId: string
    status?: string
    createdAt?: Date | string
  }

  export type InventoryItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ShopItemUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    stake?: IntFieldUpdateOperationsInput | number
    isRanked?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rewardXP?: IntFieldUpdateOperationsInput | number
    rewardCoins?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type DirectMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type DirectMessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyVillageInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string
    title?: string
    level?: number
    xp?: number
    coins?: number
    bio?: string | null
    status?: $Enums.UserStatus
    recoveryToken?: string | null
    recoveryExpires?: Date | string | null
    lastLoginAt?: Date | string
    loginStreak?: number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUpdateManyWithoutPlayersNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    matchHistory?: MatchUncheckedUpdateManyWithoutPlayersNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateManyWithoutVillageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateManyItemInput = {
    id?: string
    userId: string
    acquiredAt?: Date | string
  }

  export type InventoryItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutMatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutMembersNestedInput
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    quests?: QuestUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    quests?: QuestUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: DirectMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: DirectMessageUncheckedUpdateManyWithoutReceiverNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    recoveryToken?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginStreak?: IntFieldUpdateOperationsInput | number
    achievements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VillageCountOutputTypeDefaultArgs instead
     */
    export type VillageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VillageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopItemCountOutputTypeDefaultArgs instead
     */
    export type ShopItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchCountOutputTypeDefaultArgs instead
     */
    export type MatchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendshipDefaultArgs instead
     */
    export type FriendshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FriendshipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DirectMessageDefaultArgs instead
     */
    export type DirectMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestDefaultArgs instead
     */
    export type QuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VillageDefaultArgs instead
     */
    export type VillageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VillageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopItemDefaultArgs instead
     */
    export type ShopItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryItemDefaultArgs instead
     */
    export type InventoryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchDefaultArgs instead
     */
    export type MatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}