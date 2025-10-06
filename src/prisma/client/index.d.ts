
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Urls
 * 
 */
export type Urls = $Result.DefaultSelection<Prisma.$UrlsPayload>
/**
 * Model Clicks
 * 
 */
export type Clicks = $Result.DefaultSelection<Prisma.$ClicksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.urls`: Exposes CRUD operations for the **Urls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.urls.findMany()
    * ```
    */
  get urls(): Prisma.UrlsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clicks`: Exposes CRUD operations for the **Clicks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clicks
    * const clicks = await prisma.clicks.findMany()
    * ```
    */
  get clicks(): Prisma.ClicksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Users: 'Users',
    Urls: 'Urls',
    Clicks: 'Clicks'
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
      modelProps: "users" | "urls" | "clicks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Urls: {
        payload: Prisma.$UrlsPayload<ExtArgs>
        fields: Prisma.UrlsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          findFirst: {
            args: Prisma.UrlsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          findMany: {
            args: Prisma.UrlsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>[]
          }
          create: {
            args: Prisma.UrlsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          createMany: {
            args: Prisma.UrlsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>[]
          }
          delete: {
            args: Prisma.UrlsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          update: {
            args: Prisma.UrlsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          deleteMany: {
            args: Prisma.UrlsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrlsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>[]
          }
          upsert: {
            args: Prisma.UrlsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlsPayload>
          }
          aggregate: {
            args: Prisma.UrlsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrls>
          }
          groupBy: {
            args: Prisma.UrlsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlsCountArgs<ExtArgs>
            result: $Utils.Optional<UrlsCountAggregateOutputType> | number
          }
        }
      }
      Clicks: {
        payload: Prisma.$ClicksPayload<ExtArgs>
        fields: Prisma.ClicksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClicksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClicksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>
          }
          findFirst: {
            args: Prisma.ClicksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClicksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>
          }
          findMany: {
            args: Prisma.ClicksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>[]
          }
          create: {
            args: Prisma.ClicksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>
          }
          createMany: {
            args: Prisma.ClicksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClicksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>[]
          }
          delete: {
            args: Prisma.ClicksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>
          }
          update: {
            args: Prisma.ClicksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>
          }
          deleteMany: {
            args: Prisma.ClicksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClicksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClicksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>[]
          }
          upsert: {
            args: Prisma.ClicksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClicksPayload>
          }
          aggregate: {
            args: Prisma.ClicksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClicks>
          }
          groupBy: {
            args: Prisma.ClicksGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClicksGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClicksCountArgs<ExtArgs>
            result: $Utils.Optional<ClicksCountAggregateOutputType> | number
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
    users?: UsersOmit
    urls?: UrlsOmit
    clicks?: ClicksOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    urls: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urls?: boolean | UsersCountOutputTypeCountUrlsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlsWhereInput
  }


  /**
   * Count Type UrlsCountOutputType
   */

  export type UrlsCountOutputType = {
    clicks: number
  }

  export type UrlsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clicks?: boolean | UrlsCountOutputTypeCountClicksArgs
  }

  // Custom InputTypes
  /**
   * UrlsCountOutputType without action
   */
  export type UrlsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlsCountOutputType
     */
    select?: UrlsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UrlsCountOutputType without action
   */
  export type UrlsCountOutputTypeCountClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClicksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    google_sub: string | null
    created_at: Date | null
    access_token: string | null
    refresh_token: string | null
    token_expiry: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    google_sub: string | null
    created_at: Date | null
    access_token: string | null
    refresh_token: string | null
    token_expiry: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    google_sub: number
    created_at: number
    access_token: number
    refresh_token: number
    token_expiry: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    google_sub?: true
    created_at?: true
    access_token?: true
    refresh_token?: true
    token_expiry?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    google_sub?: true
    created_at?: true
    access_token?: true
    refresh_token?: true
    token_expiry?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    google_sub?: true
    created_at?: true
    access_token?: true
    refresh_token?: true
    token_expiry?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    name: string
    google_sub: string
    created_at: Date
    access_token: string
    refresh_token: string | null
    token_expiry: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    google_sub?: boolean
    created_at?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expiry?: boolean
    urls?: boolean | Users$urlsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    google_sub?: boolean
    created_at?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expiry?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    google_sub?: boolean
    created_at?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expiry?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    google_sub?: boolean
    created_at?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expiry?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "google_sub" | "created_at" | "access_token" | "refresh_token" | "token_expiry", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urls?: boolean | Users$urlsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      urls: Prisma.$UrlsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      google_sub: string
      created_at: Date
      access_token: string
      refresh_token: string | null
      token_expiry: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    urls<T extends Users$urlsArgs<ExtArgs> = {}>(args?: Subset<T, Users$urlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly google_sub: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly access_token: FieldRef<"Users", 'String'>
    readonly refresh_token: FieldRef<"Users", 'String'>
    readonly token_expiry: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.urls
   */
  export type Users$urlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    where?: UrlsWhereInput
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    cursor?: UrlsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Urls
   */

  export type AggregateUrls = {
    _count: UrlsCountAggregateOutputType | null
    _min: UrlsMinAggregateOutputType | null
    _max: UrlsMaxAggregateOutputType | null
  }

  export type UrlsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    alias: string | null
    target_url: string | null
    topic: string | null
    created_at: Date | null
    is_active: boolean | null
  }

  export type UrlsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    alias: string | null
    target_url: string | null
    topic: string | null
    created_at: Date | null
    is_active: boolean | null
  }

  export type UrlsCountAggregateOutputType = {
    id: number
    user_id: number
    alias: number
    target_url: number
    topic: number
    created_at: number
    is_active: number
    _all: number
  }


  export type UrlsMinAggregateInputType = {
    id?: true
    user_id?: true
    alias?: true
    target_url?: true
    topic?: true
    created_at?: true
    is_active?: true
  }

  export type UrlsMaxAggregateInputType = {
    id?: true
    user_id?: true
    alias?: true
    target_url?: true
    topic?: true
    created_at?: true
    is_active?: true
  }

  export type UrlsCountAggregateInputType = {
    id?: true
    user_id?: true
    alias?: true
    target_url?: true
    topic?: true
    created_at?: true
    is_active?: true
    _all?: true
  }

  export type UrlsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to aggregate.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlsMaxAggregateInputType
  }

  export type GetUrlsAggregateType<T extends UrlsAggregateArgs> = {
        [P in keyof T & keyof AggregateUrls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrls[P]>
      : GetScalarType<T[P], AggregateUrls[P]>
  }




  export type UrlsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlsWhereInput
    orderBy?: UrlsOrderByWithAggregationInput | UrlsOrderByWithAggregationInput[]
    by: UrlsScalarFieldEnum[] | UrlsScalarFieldEnum
    having?: UrlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlsCountAggregateInputType | true
    _min?: UrlsMinAggregateInputType
    _max?: UrlsMaxAggregateInputType
  }

  export type UrlsGroupByOutputType = {
    id: string
    user_id: string
    alias: string
    target_url: string
    topic: string
    created_at: Date
    is_active: boolean
    _count: UrlsCountAggregateOutputType | null
    _min: UrlsMinAggregateOutputType | null
    _max: UrlsMaxAggregateOutputType | null
  }

  type GetUrlsGroupByPayload<T extends UrlsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlsGroupByOutputType[P]>
            : GetScalarType<T[P], UrlsGroupByOutputType[P]>
        }
      >
    >


  export type UrlsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    alias?: boolean
    target_url?: boolean
    topic?: boolean
    created_at?: boolean
    is_active?: boolean
    clicks?: boolean | Urls$clicksArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | UrlsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urls"]>

  export type UrlsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    alias?: boolean
    target_url?: boolean
    topic?: boolean
    created_at?: boolean
    is_active?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urls"]>

  export type UrlsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    alias?: boolean
    target_url?: boolean
    topic?: boolean
    created_at?: boolean
    is_active?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urls"]>

  export type UrlsSelectScalar = {
    id?: boolean
    user_id?: boolean
    alias?: boolean
    target_url?: boolean
    topic?: boolean
    created_at?: boolean
    is_active?: boolean
  }

  export type UrlsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "alias" | "target_url" | "topic" | "created_at" | "is_active", ExtArgs["result"]["urls"]>
  export type UrlsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clicks?: boolean | Urls$clicksArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | UrlsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UrlsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UrlsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UrlsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Urls"
    objects: {
      clicks: Prisma.$ClicksPayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      alias: string
      target_url: string
      topic: string
      created_at: Date
      is_active: boolean
    }, ExtArgs["result"]["urls"]>
    composites: {}
  }

  type UrlsGetPayload<S extends boolean | null | undefined | UrlsDefaultArgs> = $Result.GetResult<Prisma.$UrlsPayload, S>

  type UrlsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrlsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlsCountAggregateInputType | true
    }

  export interface UrlsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Urls'], meta: { name: 'Urls' } }
    /**
     * Find zero or one Urls that matches the filter.
     * @param {UrlsFindUniqueArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlsFindUniqueArgs>(args: SelectSubset<T, UrlsFindUniqueArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Urls that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrlsFindUniqueOrThrowArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlsFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsFindFirstArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlsFindFirstArgs>(args?: SelectSubset<T, UrlsFindFirstArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsFindFirstOrThrowArgs} args - Arguments to find a Urls
     * @example
     * // Get one Urls
     * const urls = await prisma.urls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlsFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.urls.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.urls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlsWithIdOnly = await prisma.urls.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlsFindManyArgs>(args?: SelectSubset<T, UrlsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Urls.
     * @param {UrlsCreateArgs} args - Arguments to create a Urls.
     * @example
     * // Create one Urls
     * const Urls = await prisma.urls.create({
     *   data: {
     *     // ... data to create a Urls
     *   }
     * })
     * 
     */
    create<T extends UrlsCreateArgs>(args: SelectSubset<T, UrlsCreateArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urls.
     * @param {UrlsCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const urls = await prisma.urls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlsCreateManyArgs>(args?: SelectSubset<T, UrlsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {UrlsCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const urls = await prisma.urls.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `id`
     * const urlsWithIdOnly = await prisma.urls.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlsCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Urls.
     * @param {UrlsDeleteArgs} args - Arguments to delete one Urls.
     * @example
     * // Delete one Urls
     * const Urls = await prisma.urls.delete({
     *   where: {
     *     // ... filter to delete one Urls
     *   }
     * })
     * 
     */
    delete<T extends UrlsDeleteArgs>(args: SelectSubset<T, UrlsDeleteArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Urls.
     * @param {UrlsUpdateArgs} args - Arguments to update one Urls.
     * @example
     * // Update one Urls
     * const urls = await prisma.urls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlsUpdateArgs>(args: SelectSubset<T, UrlsUpdateArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urls.
     * @param {UrlsDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.urls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlsDeleteManyArgs>(args?: SelectSubset<T, UrlsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const urls = await prisma.urls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlsUpdateManyArgs>(args: SelectSubset<T, UrlsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls and returns the data updated in the database.
     * @param {UrlsUpdateManyAndReturnArgs} args - Arguments to update many Urls.
     * @example
     * // Update many Urls
     * const urls = await prisma.urls.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urls and only return the `id`
     * const urlsWithIdOnly = await prisma.urls.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UrlsUpdateManyAndReturnArgs>(args: SelectSubset<T, UrlsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Urls.
     * @param {UrlsUpsertArgs} args - Arguments to update or create a Urls.
     * @example
     * // Update or create a Urls
     * const urls = await prisma.urls.upsert({
     *   create: {
     *     // ... data to create a Urls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Urls we want to update
     *   }
     * })
     */
    upsert<T extends UrlsUpsertArgs>(args: SelectSubset<T, UrlsUpsertArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.urls.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlsCountArgs>(
      args?: Subset<T, UrlsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UrlsAggregateArgs>(args: Subset<T, UrlsAggregateArgs>): Prisma.PrismaPromise<GetUrlsAggregateType<T>>

    /**
     * Group by Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlsGroupByArgs} args - Group by arguments.
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
      T extends UrlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlsGroupByArgs['orderBy'] }
        : { orderBy?: UrlsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UrlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Urls model
   */
  readonly fields: UrlsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Urls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clicks<T extends Urls$clicksArgs<ExtArgs> = {}>(args?: Subset<T, Urls$clicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Urls model
   */
  interface UrlsFieldRefs {
    readonly id: FieldRef<"Urls", 'String'>
    readonly user_id: FieldRef<"Urls", 'String'>
    readonly alias: FieldRef<"Urls", 'String'>
    readonly target_url: FieldRef<"Urls", 'String'>
    readonly topic: FieldRef<"Urls", 'String'>
    readonly created_at: FieldRef<"Urls", 'DateTime'>
    readonly is_active: FieldRef<"Urls", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Urls findUnique
   */
  export type UrlsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls findUniqueOrThrow
   */
  export type UrlsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls findFirst
   */
  export type UrlsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Urls findFirstOrThrow
   */
  export type UrlsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Urls findMany
   */
  export type UrlsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlsOrderByWithRelationInput | UrlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     */
    cursor?: UrlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    distinct?: UrlsScalarFieldEnum | UrlsScalarFieldEnum[]
  }

  /**
   * Urls create
   */
  export type UrlsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * The data needed to create a Urls.
     */
    data: XOR<UrlsCreateInput, UrlsUncheckedCreateInput>
  }

  /**
   * Urls createMany
   */
  export type UrlsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urls.
     */
    data: UrlsCreateManyInput | UrlsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Urls createManyAndReturn
   */
  export type UrlsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * The data used to create many Urls.
     */
    data: UrlsCreateManyInput | UrlsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Urls update
   */
  export type UrlsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * The data needed to update a Urls.
     */
    data: XOR<UrlsUpdateInput, UrlsUncheckedUpdateInput>
    /**
     * Choose, which Urls to update.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls updateMany
   */
  export type UrlsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlsUpdateManyMutationInput, UrlsUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlsWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
  }

  /**
   * Urls updateManyAndReturn
   */
  export type UrlsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlsUpdateManyMutationInput, UrlsUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlsWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Urls upsert
   */
  export type UrlsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * The filter to search for the Urls to update in case it exists.
     */
    where: UrlsWhereUniqueInput
    /**
     * In case the Urls found by the `where` argument doesn't exist, create a new Urls with this data.
     */
    create: XOR<UrlsCreateInput, UrlsUncheckedCreateInput>
    /**
     * In case the Urls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlsUpdateInput, UrlsUncheckedUpdateInput>
  }

  /**
   * Urls delete
   */
  export type UrlsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
    /**
     * Filter which Urls to delete.
     */
    where: UrlsWhereUniqueInput
  }

  /**
   * Urls deleteMany
   */
  export type UrlsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to delete
     */
    where?: UrlsWhereInput
    /**
     * Limit how many Urls to delete.
     */
    limit?: number
  }

  /**
   * Urls.clicks
   */
  export type Urls$clicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    where?: ClicksWhereInput
    orderBy?: ClicksOrderByWithRelationInput | ClicksOrderByWithRelationInput[]
    cursor?: ClicksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClicksScalarFieldEnum | ClicksScalarFieldEnum[]
  }

  /**
   * Urls without action
   */
  export type UrlsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Urls
     */
    select?: UrlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Urls
     */
    omit?: UrlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlsInclude<ExtArgs> | null
  }


  /**
   * Model Clicks
   */

  export type AggregateClicks = {
    _count: ClicksCountAggregateOutputType | null
    _min: ClicksMinAggregateOutputType | null
    _max: ClicksMaxAggregateOutputType | null
  }

  export type ClicksMinAggregateOutputType = {
    id: string | null
    url_id: string | null
    ip: string | null
    country: string | null
    timestamp: Date | null
  }

  export type ClicksMaxAggregateOutputType = {
    id: string | null
    url_id: string | null
    ip: string | null
    country: string | null
    timestamp: Date | null
  }

  export type ClicksCountAggregateOutputType = {
    id: number
    url_id: number
    ip: number
    country: number
    timestamp: number
    _all: number
  }


  export type ClicksMinAggregateInputType = {
    id?: true
    url_id?: true
    ip?: true
    country?: true
    timestamp?: true
  }

  export type ClicksMaxAggregateInputType = {
    id?: true
    url_id?: true
    ip?: true
    country?: true
    timestamp?: true
  }

  export type ClicksCountAggregateInputType = {
    id?: true
    url_id?: true
    ip?: true
    country?: true
    timestamp?: true
    _all?: true
  }

  export type ClicksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clicks to aggregate.
     */
    where?: ClicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClicksOrderByWithRelationInput | ClicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clicks
    **/
    _count?: true | ClicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClicksMaxAggregateInputType
  }

  export type GetClicksAggregateType<T extends ClicksAggregateArgs> = {
        [P in keyof T & keyof AggregateClicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClicks[P]>
      : GetScalarType<T[P], AggregateClicks[P]>
  }




  export type ClicksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClicksWhereInput
    orderBy?: ClicksOrderByWithAggregationInput | ClicksOrderByWithAggregationInput[]
    by: ClicksScalarFieldEnum[] | ClicksScalarFieldEnum
    having?: ClicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClicksCountAggregateInputType | true
    _min?: ClicksMinAggregateInputType
    _max?: ClicksMaxAggregateInputType
  }

  export type ClicksGroupByOutputType = {
    id: string
    url_id: string
    ip: string
    country: string
    timestamp: Date
    _count: ClicksCountAggregateOutputType | null
    _min: ClicksMinAggregateOutputType | null
    _max: ClicksMaxAggregateOutputType | null
  }

  type GetClicksGroupByPayload<T extends ClicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClicksGroupByOutputType[P]>
            : GetScalarType<T[P], ClicksGroupByOutputType[P]>
        }
      >
    >


  export type ClicksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_id?: boolean
    ip?: boolean
    country?: boolean
    timestamp?: boolean
    url?: boolean | UrlsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clicks"]>

  export type ClicksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_id?: boolean
    ip?: boolean
    country?: boolean
    timestamp?: boolean
    url?: boolean | UrlsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clicks"]>

  export type ClicksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_id?: boolean
    ip?: boolean
    country?: boolean
    timestamp?: boolean
    url?: boolean | UrlsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clicks"]>

  export type ClicksSelectScalar = {
    id?: boolean
    url_id?: boolean
    ip?: boolean
    country?: boolean
    timestamp?: boolean
  }

  export type ClicksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url_id" | "ip" | "country" | "timestamp", ExtArgs["result"]["clicks"]>
  export type ClicksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrlsDefaultArgs<ExtArgs>
  }
  export type ClicksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrlsDefaultArgs<ExtArgs>
  }
  export type ClicksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrlsDefaultArgs<ExtArgs>
  }

  export type $ClicksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clicks"
    objects: {
      url: Prisma.$UrlsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url_id: string
      ip: string
      country: string
      timestamp: Date
    }, ExtArgs["result"]["clicks"]>
    composites: {}
  }

  type ClicksGetPayload<S extends boolean | null | undefined | ClicksDefaultArgs> = $Result.GetResult<Prisma.$ClicksPayload, S>

  type ClicksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClicksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClicksCountAggregateInputType | true
    }

  export interface ClicksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clicks'], meta: { name: 'Clicks' } }
    /**
     * Find zero or one Clicks that matches the filter.
     * @param {ClicksFindUniqueArgs} args - Arguments to find a Clicks
     * @example
     * // Get one Clicks
     * const clicks = await prisma.clicks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClicksFindUniqueArgs>(args: SelectSubset<T, ClicksFindUniqueArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clicks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClicksFindUniqueOrThrowArgs} args - Arguments to find a Clicks
     * @example
     * // Get one Clicks
     * const clicks = await prisma.clicks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClicksFindUniqueOrThrowArgs>(args: SelectSubset<T, ClicksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksFindFirstArgs} args - Arguments to find a Clicks
     * @example
     * // Get one Clicks
     * const clicks = await prisma.clicks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClicksFindFirstArgs>(args?: SelectSubset<T, ClicksFindFirstArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clicks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksFindFirstOrThrowArgs} args - Arguments to find a Clicks
     * @example
     * // Get one Clicks
     * const clicks = await prisma.clicks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClicksFindFirstOrThrowArgs>(args?: SelectSubset<T, ClicksFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clicks
     * const clicks = await prisma.clicks.findMany()
     * 
     * // Get first 10 Clicks
     * const clicks = await prisma.clicks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clicksWithIdOnly = await prisma.clicks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClicksFindManyArgs>(args?: SelectSubset<T, ClicksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clicks.
     * @param {ClicksCreateArgs} args - Arguments to create a Clicks.
     * @example
     * // Create one Clicks
     * const Clicks = await prisma.clicks.create({
     *   data: {
     *     // ... data to create a Clicks
     *   }
     * })
     * 
     */
    create<T extends ClicksCreateArgs>(args: SelectSubset<T, ClicksCreateArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clicks.
     * @param {ClicksCreateManyArgs} args - Arguments to create many Clicks.
     * @example
     * // Create many Clicks
     * const clicks = await prisma.clicks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClicksCreateManyArgs>(args?: SelectSubset<T, ClicksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clicks and returns the data saved in the database.
     * @param {ClicksCreateManyAndReturnArgs} args - Arguments to create many Clicks.
     * @example
     * // Create many Clicks
     * const clicks = await prisma.clicks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clicks and only return the `id`
     * const clicksWithIdOnly = await prisma.clicks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClicksCreateManyAndReturnArgs>(args?: SelectSubset<T, ClicksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clicks.
     * @param {ClicksDeleteArgs} args - Arguments to delete one Clicks.
     * @example
     * // Delete one Clicks
     * const Clicks = await prisma.clicks.delete({
     *   where: {
     *     // ... filter to delete one Clicks
     *   }
     * })
     * 
     */
    delete<T extends ClicksDeleteArgs>(args: SelectSubset<T, ClicksDeleteArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clicks.
     * @param {ClicksUpdateArgs} args - Arguments to update one Clicks.
     * @example
     * // Update one Clicks
     * const clicks = await prisma.clicks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClicksUpdateArgs>(args: SelectSubset<T, ClicksUpdateArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clicks.
     * @param {ClicksDeleteManyArgs} args - Arguments to filter Clicks to delete.
     * @example
     * // Delete a few Clicks
     * const { count } = await prisma.clicks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClicksDeleteManyArgs>(args?: SelectSubset<T, ClicksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clicks
     * const clicks = await prisma.clicks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClicksUpdateManyArgs>(args: SelectSubset<T, ClicksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks and returns the data updated in the database.
     * @param {ClicksUpdateManyAndReturnArgs} args - Arguments to update many Clicks.
     * @example
     * // Update many Clicks
     * const clicks = await prisma.clicks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clicks and only return the `id`
     * const clicksWithIdOnly = await prisma.clicks.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClicksUpdateManyAndReturnArgs>(args: SelectSubset<T, ClicksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clicks.
     * @param {ClicksUpsertArgs} args - Arguments to update or create a Clicks.
     * @example
     * // Update or create a Clicks
     * const clicks = await prisma.clicks.upsert({
     *   create: {
     *     // ... data to create a Clicks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clicks we want to update
     *   }
     * })
     */
    upsert<T extends ClicksUpsertArgs>(args: SelectSubset<T, ClicksUpsertArgs<ExtArgs>>): Prisma__ClicksClient<$Result.GetResult<Prisma.$ClicksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksCountArgs} args - Arguments to filter Clicks to count.
     * @example
     * // Count the number of Clicks
     * const count = await prisma.clicks.count({
     *   where: {
     *     // ... the filter for the Clicks we want to count
     *   }
     * })
    **/
    count<T extends ClicksCountArgs>(
      args?: Subset<T, ClicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClicksAggregateArgs>(args: Subset<T, ClicksAggregateArgs>): Prisma.PrismaPromise<GetClicksAggregateType<T>>

    /**
     * Group by Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClicksGroupByArgs} args - Group by arguments.
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
      T extends ClicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClicksGroupByArgs['orderBy'] }
        : { orderBy?: ClicksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clicks model
   */
  readonly fields: ClicksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clicks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClicksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends UrlsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UrlsDefaultArgs<ExtArgs>>): Prisma__UrlsClient<$Result.GetResult<Prisma.$UrlsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Clicks model
   */
  interface ClicksFieldRefs {
    readonly id: FieldRef<"Clicks", 'String'>
    readonly url_id: FieldRef<"Clicks", 'String'>
    readonly ip: FieldRef<"Clicks", 'String'>
    readonly country: FieldRef<"Clicks", 'String'>
    readonly timestamp: FieldRef<"Clicks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clicks findUnique
   */
  export type ClicksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where: ClicksWhereUniqueInput
  }

  /**
   * Clicks findUniqueOrThrow
   */
  export type ClicksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where: ClicksWhereUniqueInput
  }

  /**
   * Clicks findFirst
   */
  export type ClicksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where?: ClicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClicksOrderByWithRelationInput | ClicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     */
    cursor?: ClicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     */
    distinct?: ClicksScalarFieldEnum | ClicksScalarFieldEnum[]
  }

  /**
   * Clicks findFirstOrThrow
   */
  export type ClicksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where?: ClicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClicksOrderByWithRelationInput | ClicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     */
    cursor?: ClicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     */
    distinct?: ClicksScalarFieldEnum | ClicksScalarFieldEnum[]
  }

  /**
   * Clicks findMany
   */
  export type ClicksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where?: ClicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClicksOrderByWithRelationInput | ClicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clicks.
     */
    cursor?: ClicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    distinct?: ClicksScalarFieldEnum | ClicksScalarFieldEnum[]
  }

  /**
   * Clicks create
   */
  export type ClicksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * The data needed to create a Clicks.
     */
    data: XOR<ClicksCreateInput, ClicksUncheckedCreateInput>
  }

  /**
   * Clicks createMany
   */
  export type ClicksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clicks.
     */
    data: ClicksCreateManyInput | ClicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clicks createManyAndReturn
   */
  export type ClicksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * The data used to create many Clicks.
     */
    data: ClicksCreateManyInput | ClicksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clicks update
   */
  export type ClicksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * The data needed to update a Clicks.
     */
    data: XOR<ClicksUpdateInput, ClicksUncheckedUpdateInput>
    /**
     * Choose, which Clicks to update.
     */
    where: ClicksWhereUniqueInput
  }

  /**
   * Clicks updateMany
   */
  export type ClicksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clicks.
     */
    data: XOR<ClicksUpdateManyMutationInput, ClicksUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     */
    where?: ClicksWhereInput
    /**
     * Limit how many Clicks to update.
     */
    limit?: number
  }

  /**
   * Clicks updateManyAndReturn
   */
  export type ClicksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * The data used to update Clicks.
     */
    data: XOR<ClicksUpdateManyMutationInput, ClicksUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     */
    where?: ClicksWhereInput
    /**
     * Limit how many Clicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clicks upsert
   */
  export type ClicksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * The filter to search for the Clicks to update in case it exists.
     */
    where: ClicksWhereUniqueInput
    /**
     * In case the Clicks found by the `where` argument doesn't exist, create a new Clicks with this data.
     */
    create: XOR<ClicksCreateInput, ClicksUncheckedCreateInput>
    /**
     * In case the Clicks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClicksUpdateInput, ClicksUncheckedUpdateInput>
  }

  /**
   * Clicks delete
   */
  export type ClicksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
    /**
     * Filter which Clicks to delete.
     */
    where: ClicksWhereUniqueInput
  }

  /**
   * Clicks deleteMany
   */
  export type ClicksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clicks to delete
     */
    where?: ClicksWhereInput
    /**
     * Limit how many Clicks to delete.
     */
    limit?: number
  }

  /**
   * Clicks without action
   */
  export type ClicksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clicks
     */
    select?: ClicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clicks
     */
    omit?: ClicksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClicksInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    google_sub: 'google_sub',
    created_at: 'created_at',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_expiry: 'token_expiry'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UrlsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    alias: 'alias',
    target_url: 'target_url',
    topic: 'topic',
    created_at: 'created_at',
    is_active: 'is_active'
  };

  export type UrlsScalarFieldEnum = (typeof UrlsScalarFieldEnum)[keyof typeof UrlsScalarFieldEnum]


  export const ClicksScalarFieldEnum: {
    id: 'id',
    url_id: 'url_id',
    ip: 'ip',
    country: 'country',
    timestamp: 'timestamp'
  };

  export type ClicksScalarFieldEnum = (typeof ClicksScalarFieldEnum)[keyof typeof ClicksScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    google_sub?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    access_token?: StringFilter<"Users"> | string
    refresh_token?: StringNullableFilter<"Users"> | string | null
    token_expiry?: DateTimeFilter<"Users"> | Date | string
    urls?: UrlsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    google_sub?: SortOrder
    created_at?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    token_expiry?: SortOrder
    urls?: UrlsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    google_sub?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    access_token?: StringFilter<"Users"> | string
    refresh_token?: StringNullableFilter<"Users"> | string | null
    token_expiry?: DateTimeFilter<"Users"> | Date | string
    urls?: UrlsListRelationFilter
  }, "id" | "google_sub">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    google_sub?: SortOrder
    created_at?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    token_expiry?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    google_sub?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    access_token?: StringWithAggregatesFilter<"Users"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Users"> | string | null
    token_expiry?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type UrlsWhereInput = {
    AND?: UrlsWhereInput | UrlsWhereInput[]
    OR?: UrlsWhereInput[]
    NOT?: UrlsWhereInput | UrlsWhereInput[]
    id?: StringFilter<"Urls"> | string
    user_id?: StringFilter<"Urls"> | string
    alias?: StringFilter<"Urls"> | string
    target_url?: StringFilter<"Urls"> | string
    topic?: StringFilter<"Urls"> | string
    created_at?: DateTimeFilter<"Urls"> | Date | string
    is_active?: BoolFilter<"Urls"> | boolean
    clicks?: ClicksListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UrlsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    alias?: SortOrder
    target_url?: SortOrder
    topic?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
    clicks?: ClicksOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
  }

  export type UrlsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UrlsWhereInput | UrlsWhereInput[]
    OR?: UrlsWhereInput[]
    NOT?: UrlsWhereInput | UrlsWhereInput[]
    user_id?: StringFilter<"Urls"> | string
    alias?: StringFilter<"Urls"> | string
    target_url?: StringFilter<"Urls"> | string
    topic?: StringFilter<"Urls"> | string
    created_at?: DateTimeFilter<"Urls"> | Date | string
    is_active?: BoolFilter<"Urls"> | boolean
    clicks?: ClicksListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type UrlsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    alias?: SortOrder
    target_url?: SortOrder
    topic?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
    _count?: UrlsCountOrderByAggregateInput
    _max?: UrlsMaxOrderByAggregateInput
    _min?: UrlsMinOrderByAggregateInput
  }

  export type UrlsScalarWhereWithAggregatesInput = {
    AND?: UrlsScalarWhereWithAggregatesInput | UrlsScalarWhereWithAggregatesInput[]
    OR?: UrlsScalarWhereWithAggregatesInput[]
    NOT?: UrlsScalarWhereWithAggregatesInput | UrlsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Urls"> | string
    user_id?: StringWithAggregatesFilter<"Urls"> | string
    alias?: StringWithAggregatesFilter<"Urls"> | string
    target_url?: StringWithAggregatesFilter<"Urls"> | string
    topic?: StringWithAggregatesFilter<"Urls"> | string
    created_at?: DateTimeWithAggregatesFilter<"Urls"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Urls"> | boolean
  }

  export type ClicksWhereInput = {
    AND?: ClicksWhereInput | ClicksWhereInput[]
    OR?: ClicksWhereInput[]
    NOT?: ClicksWhereInput | ClicksWhereInput[]
    id?: StringFilter<"Clicks"> | string
    url_id?: StringFilter<"Clicks"> | string
    ip?: StringFilter<"Clicks"> | string
    country?: StringFilter<"Clicks"> | string
    timestamp?: DateTimeFilter<"Clicks"> | Date | string
    url?: XOR<UrlsScalarRelationFilter, UrlsWhereInput>
  }

  export type ClicksOrderByWithRelationInput = {
    id?: SortOrder
    url_id?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    timestamp?: SortOrder
    url?: UrlsOrderByWithRelationInput
  }

  export type ClicksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClicksWhereInput | ClicksWhereInput[]
    OR?: ClicksWhereInput[]
    NOT?: ClicksWhereInput | ClicksWhereInput[]
    url_id?: StringFilter<"Clicks"> | string
    ip?: StringFilter<"Clicks"> | string
    country?: StringFilter<"Clicks"> | string
    timestamp?: DateTimeFilter<"Clicks"> | Date | string
    url?: XOR<UrlsScalarRelationFilter, UrlsWhereInput>
  }, "id">

  export type ClicksOrderByWithAggregationInput = {
    id?: SortOrder
    url_id?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    timestamp?: SortOrder
    _count?: ClicksCountOrderByAggregateInput
    _max?: ClicksMaxOrderByAggregateInput
    _min?: ClicksMinOrderByAggregateInput
  }

  export type ClicksScalarWhereWithAggregatesInput = {
    AND?: ClicksScalarWhereWithAggregatesInput | ClicksScalarWhereWithAggregatesInput[]
    OR?: ClicksScalarWhereWithAggregatesInput[]
    NOT?: ClicksScalarWhereWithAggregatesInput | ClicksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clicks"> | string
    url_id?: StringWithAggregatesFilter<"Clicks"> | string
    ip?: StringWithAggregatesFilter<"Clicks"> | string
    country?: StringWithAggregatesFilter<"Clicks"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Clicks"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    name: string
    google_sub: string
    created_at?: Date | string
    access_token: string
    refresh_token?: string | null
    token_expiry: Date | string
    urls?: UrlsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    google_sub: string
    created_at?: Date | string
    access_token: string
    refresh_token?: string | null
    token_expiry: Date | string
    urls?: UrlsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    google_sub?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    urls?: UrlsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    google_sub?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    urls?: UrlsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    name: string
    google_sub: string
    created_at?: Date | string
    access_token: string
    refresh_token?: string | null
    token_expiry: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    google_sub?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    google_sub?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlsCreateInput = {
    id?: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
    clicks?: ClicksCreateNestedManyWithoutUrlInput
    user: UsersCreateNestedOneWithoutUrlsInput
  }

  export type UrlsUncheckedCreateInput = {
    id?: string
    user_id: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
    clicks?: ClicksUncheckedCreateNestedManyWithoutUrlInput
  }

  export type UrlsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    clicks?: ClicksUpdateManyWithoutUrlNestedInput
    user?: UsersUpdateOneRequiredWithoutUrlsNestedInput
  }

  export type UrlsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    clicks?: ClicksUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type UrlsCreateManyInput = {
    id?: string
    user_id: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
  }

  export type UrlsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UrlsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClicksCreateInput = {
    id?: string
    ip: string
    country: string
    timestamp: Date | string
    url: UrlsCreateNestedOneWithoutClicksInput
  }

  export type ClicksUncheckedCreateInput = {
    id?: string
    url_id: string
    ip: string
    country: string
    timestamp: Date | string
  }

  export type ClicksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: UrlsUpdateOneRequiredWithoutClicksNestedInput
  }

  export type ClicksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClicksCreateManyInput = {
    id?: string
    url_id: string
    ip: string
    country: string
    timestamp: Date | string
  }

  export type ClicksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClicksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UrlsListRelationFilter = {
    every?: UrlsWhereInput
    some?: UrlsWhereInput
    none?: UrlsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UrlsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    google_sub?: SortOrder
    created_at?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expiry?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    google_sub?: SortOrder
    created_at?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expiry?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    google_sub?: SortOrder
    created_at?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expiry?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClicksListRelationFilter = {
    every?: ClicksWhereInput
    some?: ClicksWhereInput
    none?: ClicksWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ClicksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UrlsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    alias?: SortOrder
    target_url?: SortOrder
    topic?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type UrlsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    alias?: SortOrder
    target_url?: SortOrder
    topic?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type UrlsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    alias?: SortOrder
    target_url?: SortOrder
    topic?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UrlsScalarRelationFilter = {
    is?: UrlsWhereInput
    isNot?: UrlsWhereInput
  }

  export type ClicksCountOrderByAggregateInput = {
    id?: SortOrder
    url_id?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    timestamp?: SortOrder
  }

  export type ClicksMaxOrderByAggregateInput = {
    id?: SortOrder
    url_id?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    timestamp?: SortOrder
  }

  export type ClicksMinOrderByAggregateInput = {
    id?: SortOrder
    url_id?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    timestamp?: SortOrder
  }

  export type UrlsCreateNestedManyWithoutUserInput = {
    create?: XOR<UrlsCreateWithoutUserInput, UrlsUncheckedCreateWithoutUserInput> | UrlsCreateWithoutUserInput[] | UrlsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutUserInput | UrlsCreateOrConnectWithoutUserInput[]
    createMany?: UrlsCreateManyUserInputEnvelope
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
  }

  export type UrlsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UrlsCreateWithoutUserInput, UrlsUncheckedCreateWithoutUserInput> | UrlsCreateWithoutUserInput[] | UrlsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutUserInput | UrlsCreateOrConnectWithoutUserInput[]
    createMany?: UrlsCreateManyUserInputEnvelope
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UrlsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UrlsCreateWithoutUserInput, UrlsUncheckedCreateWithoutUserInput> | UrlsCreateWithoutUserInput[] | UrlsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutUserInput | UrlsCreateOrConnectWithoutUserInput[]
    upsert?: UrlsUpsertWithWhereUniqueWithoutUserInput | UrlsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UrlsCreateManyUserInputEnvelope
    set?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    disconnect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    delete?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    update?: UrlsUpdateWithWhereUniqueWithoutUserInput | UrlsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UrlsUpdateManyWithWhereWithoutUserInput | UrlsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
  }

  export type UrlsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UrlsCreateWithoutUserInput, UrlsUncheckedCreateWithoutUserInput> | UrlsCreateWithoutUserInput[] | UrlsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlsCreateOrConnectWithoutUserInput | UrlsCreateOrConnectWithoutUserInput[]
    upsert?: UrlsUpsertWithWhereUniqueWithoutUserInput | UrlsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UrlsCreateManyUserInputEnvelope
    set?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    disconnect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    delete?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    connect?: UrlsWhereUniqueInput | UrlsWhereUniqueInput[]
    update?: UrlsUpdateWithWhereUniqueWithoutUserInput | UrlsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UrlsUpdateManyWithWhereWithoutUserInput | UrlsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
  }

  export type ClicksCreateNestedManyWithoutUrlInput = {
    create?: XOR<ClicksCreateWithoutUrlInput, ClicksUncheckedCreateWithoutUrlInput> | ClicksCreateWithoutUrlInput[] | ClicksUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClicksCreateOrConnectWithoutUrlInput | ClicksCreateOrConnectWithoutUrlInput[]
    createMany?: ClicksCreateManyUrlInputEnvelope
    connect?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutUrlsInput = {
    create?: XOR<UsersCreateWithoutUrlsInput, UsersUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUrlsInput
    connect?: UsersWhereUniqueInput
  }

  export type ClicksUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<ClicksCreateWithoutUrlInput, ClicksUncheckedCreateWithoutUrlInput> | ClicksCreateWithoutUrlInput[] | ClicksUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClicksCreateOrConnectWithoutUrlInput | ClicksCreateOrConnectWithoutUrlInput[]
    createMany?: ClicksCreateManyUrlInputEnvelope
    connect?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClicksUpdateManyWithoutUrlNestedInput = {
    create?: XOR<ClicksCreateWithoutUrlInput, ClicksUncheckedCreateWithoutUrlInput> | ClicksCreateWithoutUrlInput[] | ClicksUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClicksCreateOrConnectWithoutUrlInput | ClicksCreateOrConnectWithoutUrlInput[]
    upsert?: ClicksUpsertWithWhereUniqueWithoutUrlInput | ClicksUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: ClicksCreateManyUrlInputEnvelope
    set?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    disconnect?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    delete?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    connect?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    update?: ClicksUpdateWithWhereUniqueWithoutUrlInput | ClicksUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: ClicksUpdateManyWithWhereWithoutUrlInput | ClicksUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: ClicksScalarWhereInput | ClicksScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutUrlsNestedInput = {
    create?: XOR<UsersCreateWithoutUrlsInput, UsersUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUrlsInput
    upsert?: UsersUpsertWithoutUrlsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUrlsInput, UsersUpdateWithoutUrlsInput>, UsersUncheckedUpdateWithoutUrlsInput>
  }

  export type ClicksUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<ClicksCreateWithoutUrlInput, ClicksUncheckedCreateWithoutUrlInput> | ClicksCreateWithoutUrlInput[] | ClicksUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: ClicksCreateOrConnectWithoutUrlInput | ClicksCreateOrConnectWithoutUrlInput[]
    upsert?: ClicksUpsertWithWhereUniqueWithoutUrlInput | ClicksUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: ClicksCreateManyUrlInputEnvelope
    set?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    disconnect?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    delete?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    connect?: ClicksWhereUniqueInput | ClicksWhereUniqueInput[]
    update?: ClicksUpdateWithWhereUniqueWithoutUrlInput | ClicksUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: ClicksUpdateManyWithWhereWithoutUrlInput | ClicksUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: ClicksScalarWhereInput | ClicksScalarWhereInput[]
  }

  export type UrlsCreateNestedOneWithoutClicksInput = {
    create?: XOR<UrlsCreateWithoutClicksInput, UrlsUncheckedCreateWithoutClicksInput>
    connectOrCreate?: UrlsCreateOrConnectWithoutClicksInput
    connect?: UrlsWhereUniqueInput
  }

  export type UrlsUpdateOneRequiredWithoutClicksNestedInput = {
    create?: XOR<UrlsCreateWithoutClicksInput, UrlsUncheckedCreateWithoutClicksInput>
    connectOrCreate?: UrlsCreateOrConnectWithoutClicksInput
    upsert?: UrlsUpsertWithoutClicksInput
    connect?: UrlsWhereUniqueInput
    update?: XOR<XOR<UrlsUpdateToOneWithWhereWithoutClicksInput, UrlsUpdateWithoutClicksInput>, UrlsUncheckedUpdateWithoutClicksInput>
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

  export type UrlsCreateWithoutUserInput = {
    id?: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
    clicks?: ClicksCreateNestedManyWithoutUrlInput
  }

  export type UrlsUncheckedCreateWithoutUserInput = {
    id?: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
    clicks?: ClicksUncheckedCreateNestedManyWithoutUrlInput
  }

  export type UrlsCreateOrConnectWithoutUserInput = {
    where: UrlsWhereUniqueInput
    create: XOR<UrlsCreateWithoutUserInput, UrlsUncheckedCreateWithoutUserInput>
  }

  export type UrlsCreateManyUserInputEnvelope = {
    data: UrlsCreateManyUserInput | UrlsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UrlsUpsertWithWhereUniqueWithoutUserInput = {
    where: UrlsWhereUniqueInput
    update: XOR<UrlsUpdateWithoutUserInput, UrlsUncheckedUpdateWithoutUserInput>
    create: XOR<UrlsCreateWithoutUserInput, UrlsUncheckedCreateWithoutUserInput>
  }

  export type UrlsUpdateWithWhereUniqueWithoutUserInput = {
    where: UrlsWhereUniqueInput
    data: XOR<UrlsUpdateWithoutUserInput, UrlsUncheckedUpdateWithoutUserInput>
  }

  export type UrlsUpdateManyWithWhereWithoutUserInput = {
    where: UrlsScalarWhereInput
    data: XOR<UrlsUpdateManyMutationInput, UrlsUncheckedUpdateManyWithoutUserInput>
  }

  export type UrlsScalarWhereInput = {
    AND?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
    OR?: UrlsScalarWhereInput[]
    NOT?: UrlsScalarWhereInput | UrlsScalarWhereInput[]
    id?: StringFilter<"Urls"> | string
    user_id?: StringFilter<"Urls"> | string
    alias?: StringFilter<"Urls"> | string
    target_url?: StringFilter<"Urls"> | string
    topic?: StringFilter<"Urls"> | string
    created_at?: DateTimeFilter<"Urls"> | Date | string
    is_active?: BoolFilter<"Urls"> | boolean
  }

  export type ClicksCreateWithoutUrlInput = {
    id?: string
    ip: string
    country: string
    timestamp: Date | string
  }

  export type ClicksUncheckedCreateWithoutUrlInput = {
    id?: string
    ip: string
    country: string
    timestamp: Date | string
  }

  export type ClicksCreateOrConnectWithoutUrlInput = {
    where: ClicksWhereUniqueInput
    create: XOR<ClicksCreateWithoutUrlInput, ClicksUncheckedCreateWithoutUrlInput>
  }

  export type ClicksCreateManyUrlInputEnvelope = {
    data: ClicksCreateManyUrlInput | ClicksCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutUrlsInput = {
    id?: string
    email: string
    name: string
    google_sub: string
    created_at?: Date | string
    access_token: string
    refresh_token?: string | null
    token_expiry: Date | string
  }

  export type UsersUncheckedCreateWithoutUrlsInput = {
    id?: string
    email: string
    name: string
    google_sub: string
    created_at?: Date | string
    access_token: string
    refresh_token?: string | null
    token_expiry: Date | string
  }

  export type UsersCreateOrConnectWithoutUrlsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUrlsInput, UsersUncheckedCreateWithoutUrlsInput>
  }

  export type ClicksUpsertWithWhereUniqueWithoutUrlInput = {
    where: ClicksWhereUniqueInput
    update: XOR<ClicksUpdateWithoutUrlInput, ClicksUncheckedUpdateWithoutUrlInput>
    create: XOR<ClicksCreateWithoutUrlInput, ClicksUncheckedCreateWithoutUrlInput>
  }

  export type ClicksUpdateWithWhereUniqueWithoutUrlInput = {
    where: ClicksWhereUniqueInput
    data: XOR<ClicksUpdateWithoutUrlInput, ClicksUncheckedUpdateWithoutUrlInput>
  }

  export type ClicksUpdateManyWithWhereWithoutUrlInput = {
    where: ClicksScalarWhereInput
    data: XOR<ClicksUpdateManyMutationInput, ClicksUncheckedUpdateManyWithoutUrlInput>
  }

  export type ClicksScalarWhereInput = {
    AND?: ClicksScalarWhereInput | ClicksScalarWhereInput[]
    OR?: ClicksScalarWhereInput[]
    NOT?: ClicksScalarWhereInput | ClicksScalarWhereInput[]
    id?: StringFilter<"Clicks"> | string
    url_id?: StringFilter<"Clicks"> | string
    ip?: StringFilter<"Clicks"> | string
    country?: StringFilter<"Clicks"> | string
    timestamp?: DateTimeFilter<"Clicks"> | Date | string
  }

  export type UsersUpsertWithoutUrlsInput = {
    update: XOR<UsersUpdateWithoutUrlsInput, UsersUncheckedUpdateWithoutUrlsInput>
    create: XOR<UsersCreateWithoutUrlsInput, UsersUncheckedCreateWithoutUrlsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUrlsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUrlsInput, UsersUncheckedUpdateWithoutUrlsInput>
  }

  export type UsersUpdateWithoutUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    google_sub?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    google_sub?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    token_expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlsCreateWithoutClicksInput = {
    id?: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
    user: UsersCreateNestedOneWithoutUrlsInput
  }

  export type UrlsUncheckedCreateWithoutClicksInput = {
    id?: string
    user_id: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
  }

  export type UrlsCreateOrConnectWithoutClicksInput = {
    where: UrlsWhereUniqueInput
    create: XOR<UrlsCreateWithoutClicksInput, UrlsUncheckedCreateWithoutClicksInput>
  }

  export type UrlsUpsertWithoutClicksInput = {
    update: XOR<UrlsUpdateWithoutClicksInput, UrlsUncheckedUpdateWithoutClicksInput>
    create: XOR<UrlsCreateWithoutClicksInput, UrlsUncheckedCreateWithoutClicksInput>
    where?: UrlsWhereInput
  }

  export type UrlsUpdateToOneWithWhereWithoutClicksInput = {
    where?: UrlsWhereInput
    data: XOR<UrlsUpdateWithoutClicksInput, UrlsUncheckedUpdateWithoutClicksInput>
  }

  export type UrlsUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutUrlsNestedInput
  }

  export type UrlsUncheckedUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UrlsCreateManyUserInput = {
    id?: string
    alias: string
    target_url: string
    topic?: string
    created_at?: Date | string
    is_active?: boolean
  }

  export type UrlsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    clicks?: ClicksUpdateManyWithoutUrlNestedInput
  }

  export type UrlsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    clicks?: ClicksUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type UrlsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    target_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClicksCreateManyUrlInput = {
    id?: string
    ip: string
    country: string
    timestamp: Date | string
  }

  export type ClicksUpdateWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClicksUncheckedUpdateWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClicksUncheckedUpdateManyWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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