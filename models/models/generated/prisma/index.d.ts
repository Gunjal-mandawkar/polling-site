
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model poll
 * 
 */
export type poll = $Result.DefaultSelection<Prisma.$pollPayload>
/**
 * Model option
 * 
 */
export type option = $Result.DefaultSelection<Prisma.$optionPayload>
/**
 * Model vote
 * 
 */
export type vote = $Result.DefaultSelection<Prisma.$votePayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poll`: Exposes CRUD operations for the **poll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polls
    * const polls = await prisma.poll.findMany()
    * ```
    */
  get poll(): Prisma.pollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.optionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.voteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    user: 'user',
    poll: 'poll',
    option: 'option',
    vote: 'vote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "poll" | "option" | "vote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      poll: {
        payload: Prisma.$pollPayload<ExtArgs>
        fields: Prisma.pollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          findFirst: {
            args: Prisma.pollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          findMany: {
            args: Prisma.pollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>[]
          }
          create: {
            args: Prisma.pollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          createMany: {
            args: Prisma.pollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>[]
          }
          delete: {
            args: Prisma.pollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          update: {
            args: Prisma.pollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          deleteMany: {
            args: Prisma.pollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>[]
          }
          upsert: {
            args: Prisma.pollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          aggregate: {
            args: Prisma.PollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoll>
          }
          groupBy: {
            args: Prisma.pollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollGroupByOutputType>[]
          }
          count: {
            args: Prisma.pollCountArgs<ExtArgs>
            result: $Utils.Optional<PollCountAggregateOutputType> | number
          }
        }
      }
      option: {
        payload: Prisma.$optionPayload<ExtArgs>
        fields: Prisma.optionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.optionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.optionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>
          }
          findFirst: {
            args: Prisma.optionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.optionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>
          }
          findMany: {
            args: Prisma.optionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>[]
          }
          create: {
            args: Prisma.optionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>
          }
          createMany: {
            args: Prisma.optionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.optionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>[]
          }
          delete: {
            args: Prisma.optionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>
          }
          update: {
            args: Prisma.optionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>
          }
          deleteMany: {
            args: Prisma.optionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.optionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.optionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>[]
          }
          upsert: {
            args: Prisma.optionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.optionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.optionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      vote: {
        payload: Prisma.$votePayload<ExtArgs>
        fields: Prisma.voteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          findFirst: {
            args: Prisma.voteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          findMany: {
            args: Prisma.voteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>[]
          }
          create: {
            args: Prisma.voteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          createMany: {
            args: Prisma.voteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>[]
          }
          delete: {
            args: Prisma.voteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          update: {
            args: Prisma.voteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          deleteMany: {
            args: Prisma.voteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>[]
          }
          upsert: {
            args: Prisma.voteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.voteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.voteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    poll?: pollOmit
    option?: optionOmit
    vote?: voteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    polles: number
    votes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polles?: boolean | UserCountOutputTypeCountPollesArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
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
  export type UserCountOutputTypeCountPollesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput
  }


  /**
   * Count Type PollCountOutputType
   */

  export type PollCountOutputType = {
    options: number
  }

  export type PollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | PollCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCountOutputType
     */
    select?: PollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    votes: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | OptionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userid: number | null
  }

  export type UserSumAggregateOutputType = {
    userid: number | null
  }

  export type UserMinAggregateOutputType = {
    userid: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
  }

  export type UserMaxAggregateOutputType = {
    userid: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
  }

  export type UserCountAggregateOutputType = {
    userid: number
    email: number
    username: number
    passwordHash: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userid?: true
  }

  export type UserSumAggregateInputType = {
    userid?: true
  }

  export type UserMinAggregateInputType = {
    userid?: true
    email?: true
    username?: true
    passwordHash?: true
  }

  export type UserMaxAggregateInputType = {
    userid?: true
    email?: true
    username?: true
    passwordHash?: true
  }

  export type UserCountAggregateInputType = {
    userid?: true
    email?: true
    username?: true
    passwordHash?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userid: number
    email: string
    username: string
    passwordHash: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    polles?: boolean | user$pollesArgs<ExtArgs>
    votes?: boolean | user$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    userid?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "email" | "username" | "passwordHash", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polles?: boolean | user$pollesArgs<ExtArgs>
    votes?: boolean | user$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      polles: Prisma.$pollPayload<ExtArgs>[]
      votes: Prisma.$votePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      email: string
      username: string
      passwordHash: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const userWithUseridOnly = await prisma.user.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userid`
     * const userWithUseridOnly = await prisma.user.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userid`
     * const userWithUseridOnly = await prisma.user.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    polles<T extends user$pollesArgs<ExtArgs> = {}>(args?: Subset<T, user$pollesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends user$votesArgs<ExtArgs> = {}>(args?: Subset<T, user$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly userid: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly passwordHash: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.polles
   */
  export type user$pollesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    where?: pollWhereInput
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    cursor?: pollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * user.votes
   */
  export type user$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    where?: voteWhereInput
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    cursor?: voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model poll
   */

  export type AggregatePoll = {
    _count: PollCountAggregateOutputType | null
    _avg: PollAvgAggregateOutputType | null
    _sum: PollSumAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  export type PollAvgAggregateOutputType = {
    pollid: number | null
    userid: number | null
  }

  export type PollSumAggregateOutputType = {
    pollid: number | null
    userid: number | null
  }

  export type PollMinAggregateOutputType = {
    pollid: number | null
    userid: number | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    lastVoteAt: Date | null
    finalized: boolean | null
    type: string | null
    code: string | null
    multiselect: boolean | null
    showResult: boolean | null
  }

  export type PollMaxAggregateOutputType = {
    pollid: number | null
    userid: number | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    lastVoteAt: Date | null
    finalized: boolean | null
    type: string | null
    code: string | null
    multiselect: boolean | null
    showResult: boolean | null
  }

  export type PollCountAggregateOutputType = {
    pollid: number
    userid: number
    title: number
    startTime: number
    endTime: number
    lastVoteAt: number
    finalized: number
    type: number
    code: number
    multiselect: number
    showResult: number
    _all: number
  }


  export type PollAvgAggregateInputType = {
    pollid?: true
    userid?: true
  }

  export type PollSumAggregateInputType = {
    pollid?: true
    userid?: true
  }

  export type PollMinAggregateInputType = {
    pollid?: true
    userid?: true
    title?: true
    startTime?: true
    endTime?: true
    lastVoteAt?: true
    finalized?: true
    type?: true
    code?: true
    multiselect?: true
    showResult?: true
  }

  export type PollMaxAggregateInputType = {
    pollid?: true
    userid?: true
    title?: true
    startTime?: true
    endTime?: true
    lastVoteAt?: true
    finalized?: true
    type?: true
    code?: true
    multiselect?: true
    showResult?: true
  }

  export type PollCountAggregateInputType = {
    pollid?: true
    userid?: true
    title?: true
    startTime?: true
    endTime?: true
    lastVoteAt?: true
    finalized?: true
    type?: true
    code?: true
    multiselect?: true
    showResult?: true
    _all?: true
  }

  export type PollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which poll to aggregate.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned polls
    **/
    _count?: true | PollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollMaxAggregateInputType
  }

  export type GetPollAggregateType<T extends PollAggregateArgs> = {
        [P in keyof T & keyof AggregatePoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoll[P]>
      : GetScalarType<T[P], AggregatePoll[P]>
  }




  export type pollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollWhereInput
    orderBy?: pollOrderByWithAggregationInput | pollOrderByWithAggregationInput[]
    by: PollScalarFieldEnum[] | PollScalarFieldEnum
    having?: pollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollCountAggregateInputType | true
    _avg?: PollAvgAggregateInputType
    _sum?: PollSumAggregateInputType
    _min?: PollMinAggregateInputType
    _max?: PollMaxAggregateInputType
  }

  export type PollGroupByOutputType = {
    pollid: number
    userid: number
    title: string
    startTime: Date
    endTime: Date
    lastVoteAt: Date
    finalized: boolean
    type: string
    code: string | null
    multiselect: boolean
    showResult: boolean
    _count: PollCountAggregateOutputType | null
    _avg: PollAvgAggregateOutputType | null
    _sum: PollSumAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  type GetPollGroupByPayload<T extends pollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollGroupByOutputType[P]>
            : GetScalarType<T[P], PollGroupByOutputType[P]>
        }
      >
    >


  export type pollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pollid?: boolean
    userid?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    lastVoteAt?: boolean
    finalized?: boolean
    type?: boolean
    code?: boolean
    multiselect?: boolean
    showResult?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    options?: boolean | poll$optionsArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type pollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pollid?: boolean
    userid?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    lastVoteAt?: boolean
    finalized?: boolean
    type?: boolean
    code?: boolean
    multiselect?: boolean
    showResult?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type pollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pollid?: boolean
    userid?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    lastVoteAt?: boolean
    finalized?: boolean
    type?: boolean
    code?: boolean
    multiselect?: boolean
    showResult?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type pollSelectScalar = {
    pollid?: boolean
    userid?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    lastVoteAt?: boolean
    finalized?: boolean
    type?: boolean
    code?: boolean
    multiselect?: boolean
    showResult?: boolean
  }

  export type pollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pollid" | "userid" | "title" | "startTime" | "endTime" | "lastVoteAt" | "finalized" | "type" | "code" | "multiselect" | "showResult", ExtArgs["result"]["poll"]>
  export type pollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    options?: boolean | poll$optionsArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type pollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $pollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "poll"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      options: Prisma.$optionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pollid: number
      userid: number
      title: string
      startTime: Date
      endTime: Date
      lastVoteAt: Date
      finalized: boolean
      type: string
      code: string | null
      multiselect: boolean
      showResult: boolean
    }, ExtArgs["result"]["poll"]>
    composites: {}
  }

  type pollGetPayload<S extends boolean | null | undefined | pollDefaultArgs> = $Result.GetResult<Prisma.$pollPayload, S>

  type pollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollCountAggregateInputType | true
    }

  export interface pollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['poll'], meta: { name: 'poll' } }
    /**
     * Find zero or one Poll that matches the filter.
     * @param {pollFindUniqueArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pollFindUniqueArgs>(args: SelectSubset<T, pollFindUniqueArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pollFindUniqueOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pollFindUniqueOrThrowArgs>(args: SelectSubset<T, pollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollFindFirstArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pollFindFirstArgs>(args?: SelectSubset<T, pollFindFirstArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollFindFirstOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pollFindFirstOrThrowArgs>(args?: SelectSubset<T, pollFindFirstOrThrowArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polls
     * const polls = await prisma.poll.findMany()
     * 
     * // Get first 10 Polls
     * const polls = await prisma.poll.findMany({ take: 10 })
     * 
     * // Only select the `pollid`
     * const pollWithPollidOnly = await prisma.poll.findMany({ select: { pollid: true } })
     * 
     */
    findMany<T extends pollFindManyArgs>(args?: SelectSubset<T, pollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poll.
     * @param {pollCreateArgs} args - Arguments to create a Poll.
     * @example
     * // Create one Poll
     * const Poll = await prisma.poll.create({
     *   data: {
     *     // ... data to create a Poll
     *   }
     * })
     * 
     */
    create<T extends pollCreateArgs>(args: SelectSubset<T, pollCreateArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polls.
     * @param {pollCreateManyArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pollCreateManyArgs>(args?: SelectSubset<T, pollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polls and returns the data saved in the database.
     * @param {pollCreateManyAndReturnArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polls and only return the `pollid`
     * const pollWithPollidOnly = await prisma.poll.createManyAndReturn({
     *   select: { pollid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pollCreateManyAndReturnArgs>(args?: SelectSubset<T, pollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poll.
     * @param {pollDeleteArgs} args - Arguments to delete one Poll.
     * @example
     * // Delete one Poll
     * const Poll = await prisma.poll.delete({
     *   where: {
     *     // ... filter to delete one Poll
     *   }
     * })
     * 
     */
    delete<T extends pollDeleteArgs>(args: SelectSubset<T, pollDeleteArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poll.
     * @param {pollUpdateArgs} args - Arguments to update one Poll.
     * @example
     * // Update one Poll
     * const poll = await prisma.poll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pollUpdateArgs>(args: SelectSubset<T, pollUpdateArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polls.
     * @param {pollDeleteManyArgs} args - Arguments to filter Polls to delete.
     * @example
     * // Delete a few Polls
     * const { count } = await prisma.poll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pollDeleteManyArgs>(args?: SelectSubset<T, pollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pollUpdateManyArgs>(args: SelectSubset<T, pollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls and returns the data updated in the database.
     * @param {pollUpdateManyAndReturnArgs} args - Arguments to update many Polls.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polls and only return the `pollid`
     * const pollWithPollidOnly = await prisma.poll.updateManyAndReturn({
     *   select: { pollid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pollUpdateManyAndReturnArgs>(args: SelectSubset<T, pollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poll.
     * @param {pollUpsertArgs} args - Arguments to update or create a Poll.
     * @example
     * // Update or create a Poll
     * const poll = await prisma.poll.upsert({
     *   create: {
     *     // ... data to create a Poll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poll we want to update
     *   }
     * })
     */
    upsert<T extends pollUpsertArgs>(args: SelectSubset<T, pollUpsertArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollCountArgs} args - Arguments to filter Polls to count.
     * @example
     * // Count the number of Polls
     * const count = await prisma.poll.count({
     *   where: {
     *     // ... the filter for the Polls we want to count
     *   }
     * })
    **/
    count<T extends pollCountArgs>(
      args?: Subset<T, pollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollAggregateArgs>(args: Subset<T, PollAggregateArgs>): Prisma.PrismaPromise<GetPollAggregateType<T>>

    /**
     * Group by Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollGroupByArgs} args - Group by arguments.
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
      T extends pollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pollGroupByArgs['orderBy'] }
        : { orderBy?: pollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the poll model
   */
  readonly fields: pollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for poll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends poll$optionsArgs<ExtArgs> = {}>(args?: Subset<T, poll$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the poll model
   */
  interface pollFieldRefs {
    readonly pollid: FieldRef<"poll", 'Int'>
    readonly userid: FieldRef<"poll", 'Int'>
    readonly title: FieldRef<"poll", 'String'>
    readonly startTime: FieldRef<"poll", 'DateTime'>
    readonly endTime: FieldRef<"poll", 'DateTime'>
    readonly lastVoteAt: FieldRef<"poll", 'DateTime'>
    readonly finalized: FieldRef<"poll", 'Boolean'>
    readonly type: FieldRef<"poll", 'String'>
    readonly code: FieldRef<"poll", 'String'>
    readonly multiselect: FieldRef<"poll", 'Boolean'>
    readonly showResult: FieldRef<"poll", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * poll findUnique
   */
  export type pollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll findUniqueOrThrow
   */
  export type pollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll findFirst
   */
  export type pollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for polls.
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * poll findFirstOrThrow
   */
  export type pollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for polls.
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * poll findMany
   */
  export type pollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which polls to fetch.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing polls.
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * poll create
   */
  export type pollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * The data needed to create a poll.
     */
    data: XOR<pollCreateInput, pollUncheckedCreateInput>
  }

  /**
   * poll createMany
   */
  export type pollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many polls.
     */
    data: pollCreateManyInput | pollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * poll createManyAndReturn
   */
  export type pollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * The data used to create many polls.
     */
    data: pollCreateManyInput | pollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * poll update
   */
  export type pollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * The data needed to update a poll.
     */
    data: XOR<pollUpdateInput, pollUncheckedUpdateInput>
    /**
     * Choose, which poll to update.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll updateMany
   */
  export type pollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update polls.
     */
    data: XOR<pollUpdateManyMutationInput, pollUncheckedUpdateManyInput>
    /**
     * Filter which polls to update
     */
    where?: pollWhereInput
    /**
     * Limit how many polls to update.
     */
    limit?: number
  }

  /**
   * poll updateManyAndReturn
   */
  export type pollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * The data used to update polls.
     */
    data: XOR<pollUpdateManyMutationInput, pollUncheckedUpdateManyInput>
    /**
     * Filter which polls to update
     */
    where?: pollWhereInput
    /**
     * Limit how many polls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * poll upsert
   */
  export type pollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * The filter to search for the poll to update in case it exists.
     */
    where: pollWhereUniqueInput
    /**
     * In case the poll found by the `where` argument doesn't exist, create a new poll with this data.
     */
    create: XOR<pollCreateInput, pollUncheckedCreateInput>
    /**
     * In case the poll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pollUpdateInput, pollUncheckedUpdateInput>
  }

  /**
   * poll delete
   */
  export type pollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter which poll to delete.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll deleteMany
   */
  export type pollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which polls to delete
     */
    where?: pollWhereInput
    /**
     * Limit how many polls to delete.
     */
    limit?: number
  }

  /**
   * poll.options
   */
  export type poll$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    where?: optionWhereInput
    orderBy?: optionOrderByWithRelationInput | optionOrderByWithRelationInput[]
    cursor?: optionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * poll without action
   */
  export type pollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
  }


  /**
   * Model option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    optionid: number | null
    pollid: number | null
    finalVoteCount: number | null
  }

  export type OptionSumAggregateOutputType = {
    optionid: number | null
    pollid: number | null
    finalVoteCount: number | null
  }

  export type OptionMinAggregateOutputType = {
    optionid: number | null
    pollid: number | null
    desc: string | null
    finalVoteCount: number | null
  }

  export type OptionMaxAggregateOutputType = {
    optionid: number | null
    pollid: number | null
    desc: string | null
    finalVoteCount: number | null
  }

  export type OptionCountAggregateOutputType = {
    optionid: number
    pollid: number
    desc: number
    finalVoteCount: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    optionid?: true
    pollid?: true
    finalVoteCount?: true
  }

  export type OptionSumAggregateInputType = {
    optionid?: true
    pollid?: true
    finalVoteCount?: true
  }

  export type OptionMinAggregateInputType = {
    optionid?: true
    pollid?: true
    desc?: true
    finalVoteCount?: true
  }

  export type OptionMaxAggregateInputType = {
    optionid?: true
    pollid?: true
    desc?: true
    finalVoteCount?: true
  }

  export type OptionCountAggregateInputType = {
    optionid?: true
    pollid?: true
    desc?: true
    finalVoteCount?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which option to aggregate.
     */
    where?: optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionOrderByWithRelationInput | optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type optionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionWhereInput
    orderBy?: optionOrderByWithAggregationInput | optionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: optionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    optionid: number
    pollid: number
    desc: string
    finalVoteCount: number | null
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends optionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type optionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    optionid?: boolean
    pollid?: boolean
    desc?: boolean
    finalVoteCount?: boolean
    poll?: boolean | pollDefaultArgs<ExtArgs>
    votes?: boolean | option$votesArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type optionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    optionid?: boolean
    pollid?: boolean
    desc?: boolean
    finalVoteCount?: boolean
    poll?: boolean | pollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type optionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    optionid?: boolean
    pollid?: boolean
    desc?: boolean
    finalVoteCount?: boolean
    poll?: boolean | pollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type optionSelectScalar = {
    optionid?: boolean
    pollid?: boolean
    desc?: boolean
    finalVoteCount?: boolean
  }

  export type optionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"optionid" | "pollid" | "desc" | "finalVoteCount", ExtArgs["result"]["option"]>
  export type optionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | pollDefaultArgs<ExtArgs>
    votes?: boolean | option$votesArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type optionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | pollDefaultArgs<ExtArgs>
  }
  export type optionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | pollDefaultArgs<ExtArgs>
  }

  export type $optionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "option"
    objects: {
      poll: Prisma.$pollPayload<ExtArgs>
      votes: Prisma.$votePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      optionid: number
      pollid: number
      desc: string
      finalVoteCount: number | null
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type optionGetPayload<S extends boolean | null | undefined | optionDefaultArgs> = $Result.GetResult<Prisma.$optionPayload, S>

  type optionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<optionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface optionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['option'], meta: { name: 'option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {optionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends optionFindUniqueArgs>(args: SelectSubset<T, optionFindUniqueArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {optionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends optionFindUniqueOrThrowArgs>(args: SelectSubset<T, optionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends optionFindFirstArgs>(args?: SelectSubset<T, optionFindFirstArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends optionFindFirstOrThrowArgs>(args?: SelectSubset<T, optionFindFirstOrThrowArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `optionid`
     * const optionWithOptionidOnly = await prisma.option.findMany({ select: { optionid: true } })
     * 
     */
    findMany<T extends optionFindManyArgs>(args?: SelectSubset<T, optionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {optionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends optionCreateArgs>(args: SelectSubset<T, optionCreateArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {optionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends optionCreateManyArgs>(args?: SelectSubset<T, optionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {optionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `optionid`
     * const optionWithOptionidOnly = await prisma.option.createManyAndReturn({
     *   select: { optionid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends optionCreateManyAndReturnArgs>(args?: SelectSubset<T, optionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {optionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends optionDeleteArgs>(args: SelectSubset<T, optionDeleteArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {optionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends optionUpdateArgs>(args: SelectSubset<T, optionUpdateArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {optionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends optionDeleteManyArgs>(args?: SelectSubset<T, optionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends optionUpdateManyArgs>(args: SelectSubset<T, optionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {optionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `optionid`
     * const optionWithOptionidOnly = await prisma.option.updateManyAndReturn({
     *   select: { optionid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends optionUpdateManyAndReturnArgs>(args: SelectSubset<T, optionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {optionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends optionUpsertArgs>(args: SelectSubset<T, optionUpsertArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends optionCountArgs>(
      args?: Subset<T, optionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionGroupByArgs} args - Group by arguments.
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
      T extends optionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: optionGroupByArgs['orderBy'] }
        : { orderBy?: optionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, optionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the option model
   */
  readonly fields: optionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__optionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends pollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pollDefaultArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends option$votesArgs<ExtArgs> = {}>(args?: Subset<T, option$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the option model
   */
  interface optionFieldRefs {
    readonly optionid: FieldRef<"option", 'Int'>
    readonly pollid: FieldRef<"option", 'Int'>
    readonly desc: FieldRef<"option", 'String'>
    readonly finalVoteCount: FieldRef<"option", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * option findUnique
   */
  export type optionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * Filter, which option to fetch.
     */
    where: optionWhereUniqueInput
  }

  /**
   * option findUniqueOrThrow
   */
  export type optionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * Filter, which option to fetch.
     */
    where: optionWhereUniqueInput
  }

  /**
   * option findFirst
   */
  export type optionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * Filter, which option to fetch.
     */
    where?: optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionOrderByWithRelationInput | optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for options.
     */
    cursor?: optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * option findFirstOrThrow
   */
  export type optionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * Filter, which option to fetch.
     */
    where?: optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionOrderByWithRelationInput | optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for options.
     */
    cursor?: optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * option findMany
   */
  export type optionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * Filter, which options to fetch.
     */
    where?: optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionOrderByWithRelationInput | optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing options.
     */
    cursor?: optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * option create
   */
  export type optionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * The data needed to create a option.
     */
    data: XOR<optionCreateInput, optionUncheckedCreateInput>
  }

  /**
   * option createMany
   */
  export type optionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many options.
     */
    data: optionCreateManyInput | optionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * option createManyAndReturn
   */
  export type optionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * The data used to create many options.
     */
    data: optionCreateManyInput | optionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * option update
   */
  export type optionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * The data needed to update a option.
     */
    data: XOR<optionUpdateInput, optionUncheckedUpdateInput>
    /**
     * Choose, which option to update.
     */
    where: optionWhereUniqueInput
  }

  /**
   * option updateMany
   */
  export type optionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update options.
     */
    data: XOR<optionUpdateManyMutationInput, optionUncheckedUpdateManyInput>
    /**
     * Filter which options to update
     */
    where?: optionWhereInput
    /**
     * Limit how many options to update.
     */
    limit?: number
  }

  /**
   * option updateManyAndReturn
   */
  export type optionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * The data used to update options.
     */
    data: XOR<optionUpdateManyMutationInput, optionUncheckedUpdateManyInput>
    /**
     * Filter which options to update
     */
    where?: optionWhereInput
    /**
     * Limit how many options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * option upsert
   */
  export type optionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * The filter to search for the option to update in case it exists.
     */
    where: optionWhereUniqueInput
    /**
     * In case the option found by the `where` argument doesn't exist, create a new option with this data.
     */
    create: XOR<optionCreateInput, optionUncheckedCreateInput>
    /**
     * In case the option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<optionUpdateInput, optionUncheckedUpdateInput>
  }

  /**
   * option delete
   */
  export type optionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
    /**
     * Filter which option to delete.
     */
    where: optionWhereUniqueInput
  }

  /**
   * option deleteMany
   */
  export type optionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which options to delete
     */
    where?: optionWhereInput
    /**
     * Limit how many options to delete.
     */
    limit?: number
  }

  /**
   * option.votes
   */
  export type option$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    where?: voteWhereInput
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    cursor?: voteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * option without action
   */
  export type optionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the option
     */
    select?: optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the option
     */
    omit?: optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionInclude<ExtArgs> | null
  }


  /**
   * Model vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteAvgAggregateOutputType = {
    voteid: number | null
    optionid: number | null
    userid: number | null
  }

  export type VoteSumAggregateOutputType = {
    voteid: number | null
    optionid: number | null
    userid: number | null
  }

  export type VoteMinAggregateOutputType = {
    voteid: number | null
    optionid: number | null
    userid: number | null
  }

  export type VoteMaxAggregateOutputType = {
    voteid: number | null
    optionid: number | null
    userid: number | null
  }

  export type VoteCountAggregateOutputType = {
    voteid: number
    optionid: number
    userid: number
    _all: number
  }


  export type VoteAvgAggregateInputType = {
    voteid?: true
    optionid?: true
    userid?: true
  }

  export type VoteSumAggregateInputType = {
    voteid?: true
    optionid?: true
    userid?: true
  }

  export type VoteMinAggregateInputType = {
    voteid?: true
    optionid?: true
    userid?: true
  }

  export type VoteMaxAggregateInputType = {
    voteid?: true
    optionid?: true
    userid?: true
  }

  export type VoteCountAggregateInputType = {
    voteid?: true
    optionid?: true
    userid?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vote to aggregate.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type voteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput
    orderBy?: voteOrderByWithAggregationInput | voteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: voteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _avg?: VoteAvgAggregateInputType
    _sum?: VoteSumAggregateInputType
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    voteid: number
    optionid: number
    userid: number
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends voteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type voteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voteid?: boolean
    optionid?: boolean
    userid?: boolean
    option?: boolean | optionDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type voteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voteid?: boolean
    optionid?: boolean
    userid?: boolean
    option?: boolean | optionDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type voteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voteid?: boolean
    optionid?: boolean
    userid?: boolean
    option?: boolean | optionDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type voteSelectScalar = {
    voteid?: boolean
    optionid?: boolean
    userid?: boolean
  }

  export type voteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"voteid" | "optionid" | "userid", ExtArgs["result"]["vote"]>
  export type voteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | optionDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type voteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | optionDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type voteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | optionDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $votePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vote"
    objects: {
      option: Prisma.$optionPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      voteid: number
      optionid: number
      userid: number
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type voteGetPayload<S extends boolean | null | undefined | voteDefaultArgs> = $Result.GetResult<Prisma.$votePayload, S>

  type voteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface voteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vote'], meta: { name: 'vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {voteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voteFindUniqueArgs>(args: SelectSubset<T, voteFindUniqueArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voteFindUniqueOrThrowArgs>(args: SelectSubset<T, voteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voteFindFirstArgs>(args?: SelectSubset<T, voteFindFirstArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voteFindFirstOrThrowArgs>(args?: SelectSubset<T, voteFindFirstOrThrowArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `voteid`
     * const voteWithVoteidOnly = await prisma.vote.findMany({ select: { voteid: true } })
     * 
     */
    findMany<T extends voteFindManyArgs>(args?: SelectSubset<T, voteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {voteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends voteCreateArgs>(args: SelectSubset<T, voteCreateArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {voteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voteCreateManyArgs>(args?: SelectSubset<T, voteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {voteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `voteid`
     * const voteWithVoteidOnly = await prisma.vote.createManyAndReturn({
     *   select: { voteid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voteCreateManyAndReturnArgs>(args?: SelectSubset<T, voteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {voteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends voteDeleteArgs>(args: SelectSubset<T, voteDeleteArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {voteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voteUpdateArgs>(args: SelectSubset<T, voteUpdateArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {voteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voteDeleteManyArgs>(args?: SelectSubset<T, voteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voteUpdateManyArgs>(args: SelectSubset<T, voteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {voteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `voteid`
     * const voteWithVoteidOnly = await prisma.vote.updateManyAndReturn({
     *   select: { voteid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voteUpdateManyAndReturnArgs>(args: SelectSubset<T, voteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {voteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends voteUpsertArgs>(args: SelectSubset<T, voteUpsertArgs<ExtArgs>>): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends voteCountArgs>(
      args?: Subset<T, voteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteGroupByArgs} args - Group by arguments.
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
      T extends voteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voteGroupByArgs['orderBy'] }
        : { orderBy?: voteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, voteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vote model
   */
  readonly fields: voteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    option<T extends optionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, optionDefaultArgs<ExtArgs>>): Prisma__optionClient<$Result.GetResult<Prisma.$optionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vote model
   */
  interface voteFieldRefs {
    readonly voteid: FieldRef<"vote", 'Int'>
    readonly optionid: FieldRef<"vote", 'Int'>
    readonly userid: FieldRef<"vote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * vote findUnique
   */
  export type voteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote findUniqueOrThrow
   */
  export type voteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote findFirst
   */
  export type voteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * vote findFirstOrThrow
   */
  export type voteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which vote to fetch.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * vote findMany
   */
  export type voteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: voteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing votes.
     */
    cursor?: voteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * vote create
   */
  export type voteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * The data needed to create a vote.
     */
    data: XOR<voteCreateInput, voteUncheckedCreateInput>
  }

  /**
   * vote createMany
   */
  export type voteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many votes.
     */
    data: voteCreateManyInput | voteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vote createManyAndReturn
   */
  export type voteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * The data used to create many votes.
     */
    data: voteCreateManyInput | voteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vote update
   */
  export type voteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * The data needed to update a vote.
     */
    data: XOR<voteUpdateInput, voteUncheckedUpdateInput>
    /**
     * Choose, which vote to update.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote updateMany
   */
  export type voteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update votes.
     */
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: voteWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
  }

  /**
   * vote updateManyAndReturn
   */
  export type voteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * The data used to update votes.
     */
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: voteWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vote upsert
   */
  export type voteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * The filter to search for the vote to update in case it exists.
     */
    where: voteWhereUniqueInput
    /**
     * In case the vote found by the `where` argument doesn't exist, create a new vote with this data.
     */
    create: XOR<voteCreateInput, voteUncheckedCreateInput>
    /**
     * In case the vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voteUpdateInput, voteUncheckedUpdateInput>
  }

  /**
   * vote delete
   */
  export type voteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
    /**
     * Filter which vote to delete.
     */
    where: voteWhereUniqueInput
  }

  /**
   * vote deleteMany
   */
  export type voteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to delete
     */
    where?: voteWhereInput
    /**
     * Limit how many votes to delete.
     */
    limit?: number
  }

  /**
   * vote without action
   */
  export type voteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vote
     */
    omit?: voteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voteInclude<ExtArgs> | null
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
    userid: 'userid',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PollScalarFieldEnum: {
    pollid: 'pollid',
    userid: 'userid',
    title: 'title',
    startTime: 'startTime',
    endTime: 'endTime',
    lastVoteAt: 'lastVoteAt',
    finalized: 'finalized',
    type: 'type',
    code: 'code',
    multiselect: 'multiselect',
    showResult: 'showResult'
  };

  export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    optionid: 'optionid',
    pollid: 'pollid',
    desc: 'desc',
    finalVoteCount: 'finalVoteCount'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    voteid: 'voteid',
    optionid: 'optionid',
    userid: 'userid'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userid?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    polles?: PollListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    userid?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    polles?: pollOrderByRelationAggregateInput
    votes?: voteOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    email?: string
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    passwordHash?: StringFilter<"user"> | string
    polles?: PollListRelationFilter
    votes?: VoteListRelationFilter
  }, "userid" | "email" | "username">

  export type userOrderByWithAggregationInput = {
    userid?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    passwordHash?: StringWithAggregatesFilter<"user"> | string
  }

  export type pollWhereInput = {
    AND?: pollWhereInput | pollWhereInput[]
    OR?: pollWhereInput[]
    NOT?: pollWhereInput | pollWhereInput[]
    pollid?: IntFilter<"poll"> | number
    userid?: IntFilter<"poll"> | number
    title?: StringFilter<"poll"> | string
    startTime?: DateTimeFilter<"poll"> | Date | string
    endTime?: DateTimeFilter<"poll"> | Date | string
    lastVoteAt?: DateTimeFilter<"poll"> | Date | string
    finalized?: BoolFilter<"poll"> | boolean
    type?: StringFilter<"poll"> | string
    code?: StringNullableFilter<"poll"> | string | null
    multiselect?: BoolFilter<"poll"> | boolean
    showResult?: BoolFilter<"poll"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    options?: OptionListRelationFilter
  }

  export type pollOrderByWithRelationInput = {
    pollid?: SortOrder
    userid?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lastVoteAt?: SortOrder
    finalized?: SortOrder
    type?: SortOrder
    code?: SortOrderInput | SortOrder
    multiselect?: SortOrder
    showResult?: SortOrder
    user?: userOrderByWithRelationInput
    options?: optionOrderByRelationAggregateInput
  }

  export type pollWhereUniqueInput = Prisma.AtLeast<{
    pollid?: number
    AND?: pollWhereInput | pollWhereInput[]
    OR?: pollWhereInput[]
    NOT?: pollWhereInput | pollWhereInput[]
    userid?: IntFilter<"poll"> | number
    title?: StringFilter<"poll"> | string
    startTime?: DateTimeFilter<"poll"> | Date | string
    endTime?: DateTimeFilter<"poll"> | Date | string
    lastVoteAt?: DateTimeFilter<"poll"> | Date | string
    finalized?: BoolFilter<"poll"> | boolean
    type?: StringFilter<"poll"> | string
    code?: StringNullableFilter<"poll"> | string | null
    multiselect?: BoolFilter<"poll"> | boolean
    showResult?: BoolFilter<"poll"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    options?: OptionListRelationFilter
  }, "pollid">

  export type pollOrderByWithAggregationInput = {
    pollid?: SortOrder
    userid?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lastVoteAt?: SortOrder
    finalized?: SortOrder
    type?: SortOrder
    code?: SortOrderInput | SortOrder
    multiselect?: SortOrder
    showResult?: SortOrder
    _count?: pollCountOrderByAggregateInput
    _avg?: pollAvgOrderByAggregateInput
    _max?: pollMaxOrderByAggregateInput
    _min?: pollMinOrderByAggregateInput
    _sum?: pollSumOrderByAggregateInput
  }

  export type pollScalarWhereWithAggregatesInput = {
    AND?: pollScalarWhereWithAggregatesInput | pollScalarWhereWithAggregatesInput[]
    OR?: pollScalarWhereWithAggregatesInput[]
    NOT?: pollScalarWhereWithAggregatesInput | pollScalarWhereWithAggregatesInput[]
    pollid?: IntWithAggregatesFilter<"poll"> | number
    userid?: IntWithAggregatesFilter<"poll"> | number
    title?: StringWithAggregatesFilter<"poll"> | string
    startTime?: DateTimeWithAggregatesFilter<"poll"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"poll"> | Date | string
    lastVoteAt?: DateTimeWithAggregatesFilter<"poll"> | Date | string
    finalized?: BoolWithAggregatesFilter<"poll"> | boolean
    type?: StringWithAggregatesFilter<"poll"> | string
    code?: StringNullableWithAggregatesFilter<"poll"> | string | null
    multiselect?: BoolWithAggregatesFilter<"poll"> | boolean
    showResult?: BoolWithAggregatesFilter<"poll"> | boolean
  }

  export type optionWhereInput = {
    AND?: optionWhereInput | optionWhereInput[]
    OR?: optionWhereInput[]
    NOT?: optionWhereInput | optionWhereInput[]
    optionid?: IntFilter<"option"> | number
    pollid?: IntFilter<"option"> | number
    desc?: StringFilter<"option"> | string
    finalVoteCount?: IntNullableFilter<"option"> | number | null
    poll?: XOR<PollScalarRelationFilter, pollWhereInput>
    votes?: VoteListRelationFilter
  }

  export type optionOrderByWithRelationInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    desc?: SortOrder
    finalVoteCount?: SortOrderInput | SortOrder
    poll?: pollOrderByWithRelationInput
    votes?: voteOrderByRelationAggregateInput
  }

  export type optionWhereUniqueInput = Prisma.AtLeast<{
    optionid?: number
    AND?: optionWhereInput | optionWhereInput[]
    OR?: optionWhereInput[]
    NOT?: optionWhereInput | optionWhereInput[]
    pollid?: IntFilter<"option"> | number
    desc?: StringFilter<"option"> | string
    finalVoteCount?: IntNullableFilter<"option"> | number | null
    poll?: XOR<PollScalarRelationFilter, pollWhereInput>
    votes?: VoteListRelationFilter
  }, "optionid">

  export type optionOrderByWithAggregationInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    desc?: SortOrder
    finalVoteCount?: SortOrderInput | SortOrder
    _count?: optionCountOrderByAggregateInput
    _avg?: optionAvgOrderByAggregateInput
    _max?: optionMaxOrderByAggregateInput
    _min?: optionMinOrderByAggregateInput
    _sum?: optionSumOrderByAggregateInput
  }

  export type optionScalarWhereWithAggregatesInput = {
    AND?: optionScalarWhereWithAggregatesInput | optionScalarWhereWithAggregatesInput[]
    OR?: optionScalarWhereWithAggregatesInput[]
    NOT?: optionScalarWhereWithAggregatesInput | optionScalarWhereWithAggregatesInput[]
    optionid?: IntWithAggregatesFilter<"option"> | number
    pollid?: IntWithAggregatesFilter<"option"> | number
    desc?: StringWithAggregatesFilter<"option"> | string
    finalVoteCount?: IntNullableWithAggregatesFilter<"option"> | number | null
  }

  export type voteWhereInput = {
    AND?: voteWhereInput | voteWhereInput[]
    OR?: voteWhereInput[]
    NOT?: voteWhereInput | voteWhereInput[]
    voteid?: IntFilter<"vote"> | number
    optionid?: IntFilter<"vote"> | number
    userid?: IntFilter<"vote"> | number
    option?: XOR<OptionScalarRelationFilter, optionWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type voteOrderByWithRelationInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
    option?: optionOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type voteWhereUniqueInput = Prisma.AtLeast<{
    voteid?: number
    composite_key?: voteComposite_keyCompoundUniqueInput
    AND?: voteWhereInput | voteWhereInput[]
    OR?: voteWhereInput[]
    NOT?: voteWhereInput | voteWhereInput[]
    optionid?: IntFilter<"vote"> | number
    userid?: IntFilter<"vote"> | number
    option?: XOR<OptionScalarRelationFilter, optionWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "voteid" | "composite_key">

  export type voteOrderByWithAggregationInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
    _count?: voteCountOrderByAggregateInput
    _avg?: voteAvgOrderByAggregateInput
    _max?: voteMaxOrderByAggregateInput
    _min?: voteMinOrderByAggregateInput
    _sum?: voteSumOrderByAggregateInput
  }

  export type voteScalarWhereWithAggregatesInput = {
    AND?: voteScalarWhereWithAggregatesInput | voteScalarWhereWithAggregatesInput[]
    OR?: voteScalarWhereWithAggregatesInput[]
    NOT?: voteScalarWhereWithAggregatesInput | voteScalarWhereWithAggregatesInput[]
    voteid?: IntWithAggregatesFilter<"vote"> | number
    optionid?: IntWithAggregatesFilter<"vote"> | number
    userid?: IntWithAggregatesFilter<"vote"> | number
  }

  export type userCreateInput = {
    email: string
    username: string
    passwordHash: string
    polles?: pollCreateNestedManyWithoutUserInput
    votes?: voteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    userid?: number
    email: string
    username: string
    passwordHash: string
    polles?: pollUncheckedCreateNestedManyWithoutUserInput
    votes?: voteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    polles?: pollUpdateManyWithoutUserNestedInput
    votes?: voteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    polles?: pollUncheckedUpdateManyWithoutUserNestedInput
    votes?: voteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    userid?: number
    email: string
    username: string
    passwordHash: string
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type pollCreateInput = {
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
    user: userCreateNestedOneWithoutPollesInput
    options?: optionCreateNestedManyWithoutPollInput
  }

  export type pollUncheckedCreateInput = {
    pollid?: number
    userid: number
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
    options?: optionUncheckedCreateNestedManyWithoutPollInput
  }

  export type pollUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutPollesNestedInput
    options?: optionUpdateManyWithoutPollNestedInput
  }

  export type pollUncheckedUpdateInput = {
    pollid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
    options?: optionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type pollCreateManyInput = {
    pollid?: number
    userid: number
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
  }

  export type pollUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pollUncheckedUpdateManyInput = {
    pollid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type optionCreateInput = {
    desc: string
    finalVoteCount?: number | null
    poll: pollCreateNestedOneWithoutOptionsInput
    votes?: voteCreateNestedManyWithoutOptionInput
  }

  export type optionUncheckedCreateInput = {
    optionid?: number
    pollid: number
    desc: string
    finalVoteCount?: number | null
    votes?: voteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type optionUpdateInput = {
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
    poll?: pollUpdateOneRequiredWithoutOptionsNestedInput
    votes?: voteUpdateManyWithoutOptionNestedInput
  }

  export type optionUncheckedUpdateInput = {
    optionid?: IntFieldUpdateOperationsInput | number
    pollid?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
    votes?: voteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type optionCreateManyInput = {
    optionid?: number
    pollid: number
    desc: string
    finalVoteCount?: number | null
  }

  export type optionUpdateManyMutationInput = {
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type optionUncheckedUpdateManyInput = {
    optionid?: IntFieldUpdateOperationsInput | number
    pollid?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type voteCreateInput = {
    option: optionCreateNestedOneWithoutVotesInput
    user: userCreateNestedOneWithoutVotesInput
  }

  export type voteUncheckedCreateInput = {
    voteid?: number
    optionid: number
    userid: number
  }

  export type voteUpdateInput = {
    option?: optionUpdateOneRequiredWithoutVotesNestedInput
    user?: userUpdateOneRequiredWithoutVotesNestedInput
  }

  export type voteUncheckedUpdateInput = {
    voteid?: IntFieldUpdateOperationsInput | number
    optionid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type voteCreateManyInput = {
    voteid?: number
    optionid: number
    userid: number
  }

  export type voteUpdateManyMutationInput = {

  }

  export type voteUncheckedUpdateManyInput = {
    voteid?: IntFieldUpdateOperationsInput | number
    optionid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
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

  export type PollListRelationFilter = {
    every?: pollWhereInput
    some?: pollWhereInput
    none?: pollWhereInput
  }

  export type VoteListRelationFilter = {
    every?: voteWhereInput
    some?: voteWhereInput
    none?: voteWhereInput
  }

  export type pollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type voteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    userid?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type OptionListRelationFilter = {
    every?: optionWhereInput
    some?: optionWhereInput
    none?: optionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type optionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pollCountOrderByAggregateInput = {
    pollid?: SortOrder
    userid?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lastVoteAt?: SortOrder
    finalized?: SortOrder
    type?: SortOrder
    code?: SortOrder
    multiselect?: SortOrder
    showResult?: SortOrder
  }

  export type pollAvgOrderByAggregateInput = {
    pollid?: SortOrder
    userid?: SortOrder
  }

  export type pollMaxOrderByAggregateInput = {
    pollid?: SortOrder
    userid?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lastVoteAt?: SortOrder
    finalized?: SortOrder
    type?: SortOrder
    code?: SortOrder
    multiselect?: SortOrder
    showResult?: SortOrder
  }

  export type pollMinOrderByAggregateInput = {
    pollid?: SortOrder
    userid?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lastVoteAt?: SortOrder
    finalized?: SortOrder
    type?: SortOrder
    code?: SortOrder
    multiselect?: SortOrder
    showResult?: SortOrder
  }

  export type pollSumOrderByAggregateInput = {
    pollid?: SortOrder
    userid?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PollScalarRelationFilter = {
    is?: pollWhereInput
    isNot?: pollWhereInput
  }

  export type optionCountOrderByAggregateInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    desc?: SortOrder
    finalVoteCount?: SortOrder
  }

  export type optionAvgOrderByAggregateInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    finalVoteCount?: SortOrder
  }

  export type optionMaxOrderByAggregateInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    desc?: SortOrder
    finalVoteCount?: SortOrder
  }

  export type optionMinOrderByAggregateInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    desc?: SortOrder
    finalVoteCount?: SortOrder
  }

  export type optionSumOrderByAggregateInput = {
    optionid?: SortOrder
    pollid?: SortOrder
    finalVoteCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OptionScalarRelationFilter = {
    is?: optionWhereInput
    isNot?: optionWhereInput
  }

  export type voteComposite_keyCompoundUniqueInput = {
    userid: number
    optionid: number
  }

  export type voteCountOrderByAggregateInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
  }

  export type voteAvgOrderByAggregateInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
  }

  export type voteMaxOrderByAggregateInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
  }

  export type voteMinOrderByAggregateInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
  }

  export type voteSumOrderByAggregateInput = {
    voteid?: SortOrder
    optionid?: SortOrder
    userid?: SortOrder
  }

  export type pollCreateNestedManyWithoutUserInput = {
    create?: XOR<pollCreateWithoutUserInput, pollUncheckedCreateWithoutUserInput> | pollCreateWithoutUserInput[] | pollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pollCreateOrConnectWithoutUserInput | pollCreateOrConnectWithoutUserInput[]
    createMany?: pollCreateManyUserInputEnvelope
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
  }

  export type voteCreateNestedManyWithoutUserInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type pollUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<pollCreateWithoutUserInput, pollUncheckedCreateWithoutUserInput> | pollCreateWithoutUserInput[] | pollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pollCreateOrConnectWithoutUserInput | pollCreateOrConnectWithoutUserInput[]
    createMany?: pollCreateManyUserInputEnvelope
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
  }

  export type voteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type pollUpdateManyWithoutUserNestedInput = {
    create?: XOR<pollCreateWithoutUserInput, pollUncheckedCreateWithoutUserInput> | pollCreateWithoutUserInput[] | pollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pollCreateOrConnectWithoutUserInput | pollCreateOrConnectWithoutUserInput[]
    upsert?: pollUpsertWithWhereUniqueWithoutUserInput | pollUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pollCreateManyUserInputEnvelope
    set?: pollWhereUniqueInput | pollWhereUniqueInput[]
    disconnect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    delete?: pollWhereUniqueInput | pollWhereUniqueInput[]
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    update?: pollUpdateWithWhereUniqueWithoutUserInput | pollUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pollUpdateManyWithWhereWithoutUserInput | pollUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pollScalarWhereInput | pollScalarWhereInput[]
  }

  export type voteUpdateManyWithoutUserNestedInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutUserInput | voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutUserInput | voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: voteUpdateManyWithWhereWithoutUserInput | voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pollUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<pollCreateWithoutUserInput, pollUncheckedCreateWithoutUserInput> | pollCreateWithoutUserInput[] | pollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: pollCreateOrConnectWithoutUserInput | pollCreateOrConnectWithoutUserInput[]
    upsert?: pollUpsertWithWhereUniqueWithoutUserInput | pollUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: pollCreateManyUserInputEnvelope
    set?: pollWhereUniqueInput | pollWhereUniqueInput[]
    disconnect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    delete?: pollWhereUniqueInput | pollWhereUniqueInput[]
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    update?: pollUpdateWithWhereUniqueWithoutUserInput | pollUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: pollUpdateManyWithWhereWithoutUserInput | pollUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: pollScalarWhereInput | pollScalarWhereInput[]
  }

  export type voteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput> | voteCreateWithoutUserInput[] | voteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutUserInput | voteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: voteCreateManyUserInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutUserInput | voteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: voteUpdateManyWithWhereWithoutUserInput | voteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutPollesInput = {
    create?: XOR<userCreateWithoutPollesInput, userUncheckedCreateWithoutPollesInput>
    connectOrCreate?: userCreateOrConnectWithoutPollesInput
    connect?: userWhereUniqueInput
  }

  export type optionCreateNestedManyWithoutPollInput = {
    create?: XOR<optionCreateWithoutPollInput, optionUncheckedCreateWithoutPollInput> | optionCreateWithoutPollInput[] | optionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: optionCreateOrConnectWithoutPollInput | optionCreateOrConnectWithoutPollInput[]
    createMany?: optionCreateManyPollInputEnvelope
    connect?: optionWhereUniqueInput | optionWhereUniqueInput[]
  }

  export type optionUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<optionCreateWithoutPollInput, optionUncheckedCreateWithoutPollInput> | optionCreateWithoutPollInput[] | optionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: optionCreateOrConnectWithoutPollInput | optionCreateOrConnectWithoutPollInput[]
    createMany?: optionCreateManyPollInputEnvelope
    connect?: optionWhereUniqueInput | optionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutPollesNestedInput = {
    create?: XOR<userCreateWithoutPollesInput, userUncheckedCreateWithoutPollesInput>
    connectOrCreate?: userCreateOrConnectWithoutPollesInput
    upsert?: userUpsertWithoutPollesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPollesInput, userUpdateWithoutPollesInput>, userUncheckedUpdateWithoutPollesInput>
  }

  export type optionUpdateManyWithoutPollNestedInput = {
    create?: XOR<optionCreateWithoutPollInput, optionUncheckedCreateWithoutPollInput> | optionCreateWithoutPollInput[] | optionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: optionCreateOrConnectWithoutPollInput | optionCreateOrConnectWithoutPollInput[]
    upsert?: optionUpsertWithWhereUniqueWithoutPollInput | optionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: optionCreateManyPollInputEnvelope
    set?: optionWhereUniqueInput | optionWhereUniqueInput[]
    disconnect?: optionWhereUniqueInput | optionWhereUniqueInput[]
    delete?: optionWhereUniqueInput | optionWhereUniqueInput[]
    connect?: optionWhereUniqueInput | optionWhereUniqueInput[]
    update?: optionUpdateWithWhereUniqueWithoutPollInput | optionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: optionUpdateManyWithWhereWithoutPollInput | optionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: optionScalarWhereInput | optionScalarWhereInput[]
  }

  export type optionUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<optionCreateWithoutPollInput, optionUncheckedCreateWithoutPollInput> | optionCreateWithoutPollInput[] | optionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: optionCreateOrConnectWithoutPollInput | optionCreateOrConnectWithoutPollInput[]
    upsert?: optionUpsertWithWhereUniqueWithoutPollInput | optionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: optionCreateManyPollInputEnvelope
    set?: optionWhereUniqueInput | optionWhereUniqueInput[]
    disconnect?: optionWhereUniqueInput | optionWhereUniqueInput[]
    delete?: optionWhereUniqueInput | optionWhereUniqueInput[]
    connect?: optionWhereUniqueInput | optionWhereUniqueInput[]
    update?: optionUpdateWithWhereUniqueWithoutPollInput | optionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: optionUpdateManyWithWhereWithoutPollInput | optionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: optionScalarWhereInput | optionScalarWhereInput[]
  }

  export type pollCreateNestedOneWithoutOptionsInput = {
    create?: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: pollCreateOrConnectWithoutOptionsInput
    connect?: pollWhereUniqueInput
  }

  export type voteCreateNestedManyWithoutOptionInput = {
    create?: XOR<voteCreateWithoutOptionInput, voteUncheckedCreateWithoutOptionInput> | voteCreateWithoutOptionInput[] | voteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: voteCreateOrConnectWithoutOptionInput | voteCreateOrConnectWithoutOptionInput[]
    createMany?: voteCreateManyOptionInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type voteUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<voteCreateWithoutOptionInput, voteUncheckedCreateWithoutOptionInput> | voteCreateWithoutOptionInput[] | voteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: voteCreateOrConnectWithoutOptionInput | voteCreateOrConnectWithoutOptionInput[]
    createMany?: voteCreateManyOptionInputEnvelope
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pollUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: pollCreateOrConnectWithoutOptionsInput
    upsert?: pollUpsertWithoutOptionsInput
    connect?: pollWhereUniqueInput
    update?: XOR<XOR<pollUpdateToOneWithWhereWithoutOptionsInput, pollUpdateWithoutOptionsInput>, pollUncheckedUpdateWithoutOptionsInput>
  }

  export type voteUpdateManyWithoutOptionNestedInput = {
    create?: XOR<voteCreateWithoutOptionInput, voteUncheckedCreateWithoutOptionInput> | voteCreateWithoutOptionInput[] | voteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: voteCreateOrConnectWithoutOptionInput | voteCreateOrConnectWithoutOptionInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutOptionInput | voteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: voteCreateManyOptionInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutOptionInput | voteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: voteUpdateManyWithWhereWithoutOptionInput | voteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type voteUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<voteCreateWithoutOptionInput, voteUncheckedCreateWithoutOptionInput> | voteCreateWithoutOptionInput[] | voteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: voteCreateOrConnectWithoutOptionInput | voteCreateOrConnectWithoutOptionInput[]
    upsert?: voteUpsertWithWhereUniqueWithoutOptionInput | voteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: voteCreateManyOptionInputEnvelope
    set?: voteWhereUniqueInput | voteWhereUniqueInput[]
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[]
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[]
    update?: voteUpdateWithWhereUniqueWithoutOptionInput | voteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: voteUpdateManyWithWhereWithoutOptionInput | voteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[]
  }

  export type optionCreateNestedOneWithoutVotesInput = {
    create?: XOR<optionCreateWithoutVotesInput, optionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: optionCreateOrConnectWithoutVotesInput
    connect?: optionWhereUniqueInput
  }

  export type userCreateNestedOneWithoutVotesInput = {
    create?: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
    connectOrCreate?: userCreateOrConnectWithoutVotesInput
    connect?: userWhereUniqueInput
  }

  export type optionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<optionCreateWithoutVotesInput, optionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: optionCreateOrConnectWithoutVotesInput
    upsert?: optionUpsertWithoutVotesInput
    connect?: optionWhereUniqueInput
    update?: XOR<XOR<optionUpdateToOneWithWhereWithoutVotesInput, optionUpdateWithoutVotesInput>, optionUncheckedUpdateWithoutVotesInput>
  }

  export type userUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
    connectOrCreate?: userCreateOrConnectWithoutVotesInput
    upsert?: userUpsertWithoutVotesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutVotesInput, userUpdateWithoutVotesInput>, userUncheckedUpdateWithoutVotesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type pollCreateWithoutUserInput = {
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
    options?: optionCreateNestedManyWithoutPollInput
  }

  export type pollUncheckedCreateWithoutUserInput = {
    pollid?: number
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
    options?: optionUncheckedCreateNestedManyWithoutPollInput
  }

  export type pollCreateOrConnectWithoutUserInput = {
    where: pollWhereUniqueInput
    create: XOR<pollCreateWithoutUserInput, pollUncheckedCreateWithoutUserInput>
  }

  export type pollCreateManyUserInputEnvelope = {
    data: pollCreateManyUserInput | pollCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type voteCreateWithoutUserInput = {
    option: optionCreateNestedOneWithoutVotesInput
  }

  export type voteUncheckedCreateWithoutUserInput = {
    voteid?: number
    optionid: number
  }

  export type voteCreateOrConnectWithoutUserInput = {
    where: voteWhereUniqueInput
    create: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
  }

  export type voteCreateManyUserInputEnvelope = {
    data: voteCreateManyUserInput | voteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type pollUpsertWithWhereUniqueWithoutUserInput = {
    where: pollWhereUniqueInput
    update: XOR<pollUpdateWithoutUserInput, pollUncheckedUpdateWithoutUserInput>
    create: XOR<pollCreateWithoutUserInput, pollUncheckedCreateWithoutUserInput>
  }

  export type pollUpdateWithWhereUniqueWithoutUserInput = {
    where: pollWhereUniqueInput
    data: XOR<pollUpdateWithoutUserInput, pollUncheckedUpdateWithoutUserInput>
  }

  export type pollUpdateManyWithWhereWithoutUserInput = {
    where: pollScalarWhereInput
    data: XOR<pollUpdateManyMutationInput, pollUncheckedUpdateManyWithoutUserInput>
  }

  export type pollScalarWhereInput = {
    AND?: pollScalarWhereInput | pollScalarWhereInput[]
    OR?: pollScalarWhereInput[]
    NOT?: pollScalarWhereInput | pollScalarWhereInput[]
    pollid?: IntFilter<"poll"> | number
    userid?: IntFilter<"poll"> | number
    title?: StringFilter<"poll"> | string
    startTime?: DateTimeFilter<"poll"> | Date | string
    endTime?: DateTimeFilter<"poll"> | Date | string
    lastVoteAt?: DateTimeFilter<"poll"> | Date | string
    finalized?: BoolFilter<"poll"> | boolean
    type?: StringFilter<"poll"> | string
    code?: StringNullableFilter<"poll"> | string | null
    multiselect?: BoolFilter<"poll"> | boolean
    showResult?: BoolFilter<"poll"> | boolean
  }

  export type voteUpsertWithWhereUniqueWithoutUserInput = {
    where: voteWhereUniqueInput
    update: XOR<voteUpdateWithoutUserInput, voteUncheckedUpdateWithoutUserInput>
    create: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
  }

  export type voteUpdateWithWhereUniqueWithoutUserInput = {
    where: voteWhereUniqueInput
    data: XOR<voteUpdateWithoutUserInput, voteUncheckedUpdateWithoutUserInput>
  }

  export type voteUpdateManyWithWhereWithoutUserInput = {
    where: voteScalarWhereInput
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutUserInput>
  }

  export type voteScalarWhereInput = {
    AND?: voteScalarWhereInput | voteScalarWhereInput[]
    OR?: voteScalarWhereInput[]
    NOT?: voteScalarWhereInput | voteScalarWhereInput[]
    voteid?: IntFilter<"vote"> | number
    optionid?: IntFilter<"vote"> | number
    userid?: IntFilter<"vote"> | number
  }

  export type userCreateWithoutPollesInput = {
    email: string
    username: string
    passwordHash: string
    votes?: voteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPollesInput = {
    userid?: number
    email: string
    username: string
    passwordHash: string
    votes?: voteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPollesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPollesInput, userUncheckedCreateWithoutPollesInput>
  }

  export type optionCreateWithoutPollInput = {
    desc: string
    finalVoteCount?: number | null
    votes?: voteCreateNestedManyWithoutOptionInput
  }

  export type optionUncheckedCreateWithoutPollInput = {
    optionid?: number
    desc: string
    finalVoteCount?: number | null
    votes?: voteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type optionCreateOrConnectWithoutPollInput = {
    where: optionWhereUniqueInput
    create: XOR<optionCreateWithoutPollInput, optionUncheckedCreateWithoutPollInput>
  }

  export type optionCreateManyPollInputEnvelope = {
    data: optionCreateManyPollInput | optionCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutPollesInput = {
    update: XOR<userUpdateWithoutPollesInput, userUncheckedUpdateWithoutPollesInput>
    create: XOR<userCreateWithoutPollesInput, userUncheckedCreateWithoutPollesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPollesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPollesInput, userUncheckedUpdateWithoutPollesInput>
  }

  export type userUpdateWithoutPollesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    votes?: voteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPollesInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    votes?: voteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type optionUpsertWithWhereUniqueWithoutPollInput = {
    where: optionWhereUniqueInput
    update: XOR<optionUpdateWithoutPollInput, optionUncheckedUpdateWithoutPollInput>
    create: XOR<optionCreateWithoutPollInput, optionUncheckedCreateWithoutPollInput>
  }

  export type optionUpdateWithWhereUniqueWithoutPollInput = {
    where: optionWhereUniqueInput
    data: XOR<optionUpdateWithoutPollInput, optionUncheckedUpdateWithoutPollInput>
  }

  export type optionUpdateManyWithWhereWithoutPollInput = {
    where: optionScalarWhereInput
    data: XOR<optionUpdateManyMutationInput, optionUncheckedUpdateManyWithoutPollInput>
  }

  export type optionScalarWhereInput = {
    AND?: optionScalarWhereInput | optionScalarWhereInput[]
    OR?: optionScalarWhereInput[]
    NOT?: optionScalarWhereInput | optionScalarWhereInput[]
    optionid?: IntFilter<"option"> | number
    pollid?: IntFilter<"option"> | number
    desc?: StringFilter<"option"> | string
    finalVoteCount?: IntNullableFilter<"option"> | number | null
  }

  export type pollCreateWithoutOptionsInput = {
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
    user: userCreateNestedOneWithoutPollesInput
  }

  export type pollUncheckedCreateWithoutOptionsInput = {
    pollid?: number
    userid: number
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
  }

  export type pollCreateOrConnectWithoutOptionsInput = {
    where: pollWhereUniqueInput
    create: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
  }

  export type voteCreateWithoutOptionInput = {
    user: userCreateNestedOneWithoutVotesInput
  }

  export type voteUncheckedCreateWithoutOptionInput = {
    voteid?: number
    userid: number
  }

  export type voteCreateOrConnectWithoutOptionInput = {
    where: voteWhereUniqueInput
    create: XOR<voteCreateWithoutOptionInput, voteUncheckedCreateWithoutOptionInput>
  }

  export type voteCreateManyOptionInputEnvelope = {
    data: voteCreateManyOptionInput | voteCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type pollUpsertWithoutOptionsInput = {
    update: XOR<pollUpdateWithoutOptionsInput, pollUncheckedUpdateWithoutOptionsInput>
    create: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
    where?: pollWhereInput
  }

  export type pollUpdateToOneWithWhereWithoutOptionsInput = {
    where?: pollWhereInput
    data: XOR<pollUpdateWithoutOptionsInput, pollUncheckedUpdateWithoutOptionsInput>
  }

  export type pollUpdateWithoutOptionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutPollesNestedInput
  }

  export type pollUncheckedUpdateWithoutOptionsInput = {
    pollid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type voteUpsertWithWhereUniqueWithoutOptionInput = {
    where: voteWhereUniqueInput
    update: XOR<voteUpdateWithoutOptionInput, voteUncheckedUpdateWithoutOptionInput>
    create: XOR<voteCreateWithoutOptionInput, voteUncheckedCreateWithoutOptionInput>
  }

  export type voteUpdateWithWhereUniqueWithoutOptionInput = {
    where: voteWhereUniqueInput
    data: XOR<voteUpdateWithoutOptionInput, voteUncheckedUpdateWithoutOptionInput>
  }

  export type voteUpdateManyWithWhereWithoutOptionInput = {
    where: voteScalarWhereInput
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutOptionInput>
  }

  export type optionCreateWithoutVotesInput = {
    desc: string
    finalVoteCount?: number | null
    poll: pollCreateNestedOneWithoutOptionsInput
  }

  export type optionUncheckedCreateWithoutVotesInput = {
    optionid?: number
    pollid: number
    desc: string
    finalVoteCount?: number | null
  }

  export type optionCreateOrConnectWithoutVotesInput = {
    where: optionWhereUniqueInput
    create: XOR<optionCreateWithoutVotesInput, optionUncheckedCreateWithoutVotesInput>
  }

  export type userCreateWithoutVotesInput = {
    email: string
    username: string
    passwordHash: string
    polles?: pollCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutVotesInput = {
    userid?: number
    email: string
    username: string
    passwordHash: string
    polles?: pollUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutVotesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
  }

  export type optionUpsertWithoutVotesInput = {
    update: XOR<optionUpdateWithoutVotesInput, optionUncheckedUpdateWithoutVotesInput>
    create: XOR<optionCreateWithoutVotesInput, optionUncheckedCreateWithoutVotesInput>
    where?: optionWhereInput
  }

  export type optionUpdateToOneWithWhereWithoutVotesInput = {
    where?: optionWhereInput
    data: XOR<optionUpdateWithoutVotesInput, optionUncheckedUpdateWithoutVotesInput>
  }

  export type optionUpdateWithoutVotesInput = {
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
    poll?: pollUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type optionUncheckedUpdateWithoutVotesInput = {
    optionid?: IntFieldUpdateOperationsInput | number
    pollid?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUpsertWithoutVotesInput = {
    update: XOR<userUpdateWithoutVotesInput, userUncheckedUpdateWithoutVotesInput>
    create: XOR<userCreateWithoutVotesInput, userUncheckedCreateWithoutVotesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutVotesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutVotesInput, userUncheckedUpdateWithoutVotesInput>
  }

  export type userUpdateWithoutVotesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    polles?: pollUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutVotesInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    polles?: pollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type pollCreateManyUserInput = {
    pollid?: number
    title: string
    startTime: Date | string
    endTime: Date | string
    lastVoteAt?: Date | string
    finalized?: boolean
    type: string
    code?: string | null
    multiselect?: boolean
    showResult?: boolean
  }

  export type voteCreateManyUserInput = {
    voteid?: number
    optionid: number
  }

  export type pollUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
    options?: optionUpdateManyWithoutPollNestedInput
  }

  export type pollUncheckedUpdateWithoutUserInput = {
    pollid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
    options?: optionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type pollUncheckedUpdateManyWithoutUserInput = {
    pollid?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVoteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finalized?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    multiselect?: BoolFieldUpdateOperationsInput | boolean
    showResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type voteUpdateWithoutUserInput = {
    option?: optionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type voteUncheckedUpdateWithoutUserInput = {
    voteid?: IntFieldUpdateOperationsInput | number
    optionid?: IntFieldUpdateOperationsInput | number
  }

  export type voteUncheckedUpdateManyWithoutUserInput = {
    voteid?: IntFieldUpdateOperationsInput | number
    optionid?: IntFieldUpdateOperationsInput | number
  }

  export type optionCreateManyPollInput = {
    optionid?: number
    desc: string
    finalVoteCount?: number | null
  }

  export type optionUpdateWithoutPollInput = {
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
    votes?: voteUpdateManyWithoutOptionNestedInput
  }

  export type optionUncheckedUpdateWithoutPollInput = {
    optionid?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
    votes?: voteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type optionUncheckedUpdateManyWithoutPollInput = {
    optionid?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    finalVoteCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type voteCreateManyOptionInput = {
    voteid?: number
    userid: number
  }

  export type voteUpdateWithoutOptionInput = {
    user?: userUpdateOneRequiredWithoutVotesNestedInput
  }

  export type voteUncheckedUpdateWithoutOptionInput = {
    voteid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type voteUncheckedUpdateManyWithoutOptionInput = {
    voteid?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }



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