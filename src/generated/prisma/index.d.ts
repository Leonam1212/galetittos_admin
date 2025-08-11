/**
 * Client
 **/

import * as runtime from './runtime/library.js'
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
 * Model Clients
 *
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Address
 *
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Reservations
 *
 */
export type Reservations = $Result.DefaultSelection<Prisma.$ReservationsPayload>
/**
 * Model Products
 *
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ReservationProducts
 *
 */
export type ReservationProducts =
  $Result.DefaultSelection<Prisma.$ReservationProductsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RESERVATION_STATUS: {
    PENDING: 'PENDING'
    APPROVED: 'APPROVED'
    REFUSED: 'REFUSED'
  }

  export type RESERVATION_STATUS =
    (typeof RESERVATION_STATUS)[keyof typeof RESERVATION_STATUS]

  export const ProductType: {
    GALE01: 'GALE01'
    TROP02: 'TROP02'
    BROW03: 'BROW03'
  }

  export type ProductType = (typeof ProductType)[keyof typeof ProductType]
}

export type RESERVATION_STATUS = $Enums.RESERVATION_STATUS

export const RESERVATION_STATUS: typeof $Enums.RESERVATION_STATUS

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

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
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  )
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.clients.findMany()
   * ```
   */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **Reservations** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reservations
   * const reservations = await prisma.reservations.findMany()
   * ```
   */
  get reservations(): Prisma.ReservationsDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.reservationProducts`: Exposes CRUD operations for the **ReservationProducts** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ReservationProducts
   * const reservationProducts = await prisma.reservationProducts.findMany()
   * ```
   */
  get reservationProducts(): Prisma.ReservationProductsDelegate<
    ExtArgs,
    ClientOptions
  >
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
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
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
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

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
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
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
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
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
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
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    User: 'User'
    Clients: 'Clients'
    Address: 'Address'
    Reservations: 'Reservations'
    Products: 'Products'
    ReservationProducts: 'ReservationProducts'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | 'user'
        | 'clients'
        | 'address'
        | 'reservations'
        | 'products'
        | 'reservationProducts'
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Reservations: {
        payload: Prisma.$ReservationsPayload<ExtArgs>
        fields: Prisma.ReservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findFirst: {
            args: Prisma.ReservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findMany: {
            args: Prisma.ReservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          create: {
            args: Prisma.ReservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          createMany: {
            args: Prisma.ReservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          delete: {
            args: Prisma.ReservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          update: {
            args: Prisma.ReservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          deleteMany: {
            args: Prisma.ReservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          upsert: {
            args: Prisma.ReservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.ReservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationsCountArgs<ExtArgs>
            result:
              | $Utils.Optional<ReservationsCountAggregateOutputType>
              | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ReservationProducts: {
        payload: Prisma.$ReservationProductsPayload<ExtArgs>
        fields: Prisma.ReservationProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>
          }
          findFirst: {
            args: Prisma.ReservationProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>
          }
          findMany: {
            args: Prisma.ReservationProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>[]
          }
          create: {
            args: Prisma.ReservationProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>
          }
          createMany: {
            args: Prisma.ReservationProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>[]
          }
          delete: {
            args: Prisma.ReservationProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>
          }
          update: {
            args: Prisma.ReservationProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>
          }
          deleteMany: {
            args: Prisma.ReservationProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>[]
          }
          upsert: {
            args: Prisma.ReservationProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationProductsPayload>
          }
          aggregate: {
            args: Prisma.ReservationProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationProducts>
          }
          groupBy: {
            args: Prisma.ReservationProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationProductsCountArgs<ExtArgs>
            result:
              | $Utils.Optional<ReservationProductsCountAggregateOutputType>
              | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
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
    user?: UserOmit
    clients?: ClientsOmit
    address?: AddressOmit
    reservations?: ReservationsOmit
    products?: ProductsOmit
    reservationProducts?: ReservationProductsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >

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
    Reservations: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Reservations?: boolean | UserCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReservationsWhereInput
  }

  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    Reservations: number
  }

  export type ClientsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Reservations?: boolean | ClientsCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountReservationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReservationsWhereInput
  }

  /**
   * Count Type ReservationsCountOutputType
   */

  export type ReservationsCountOutputType = {
    ReservationProducts: number
  }

  export type ReservationsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ReservationProducts?:
      | boolean
      | ReservationsCountOutputTypeCountReservationProductsArgs
  }

  // Custom InputTypes
  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationsCountOutputType
     */
    select?: ReservationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationsCountOutputType without action
   */
  export type ReservationsCountOutputTypeCountReservationProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReservationProductsWhereInput
  }

  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    ReservationProducts: number
  }

  export type ProductsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ReservationProducts?:
      | boolean
      | ProductsCountOutputTypeCountReservationProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountReservationProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReservationProductsWhereInput
  }

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cpf: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    cpf: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      email?: boolean
      password?: boolean
      cpf?: boolean
      created_at?: boolean
      updated_at?: boolean
      Reservations?: boolean | User$ReservationsArgs<ExtArgs>
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      email?: boolean
      password?: boolean
      cpf?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['user']
  >

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      email?: boolean
      password?: boolean
      cpf?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['user']
  >

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'password' | 'cpf' | 'created_at' | 'updated_at',
    ExtArgs['result']['user']
  >
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Reservations?: boolean | User$ReservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User'
    objects: {
      Reservations: Prisma.$ReservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        email: string
        password: string
        cpf: string | null
        created_at: Date
        updated_at: Date
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User']
      meta: { name: 'User' }
    }
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
      args?: Subset<T, UserCountArgs>
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    Reservations<T extends User$ReservationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ReservationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReservationsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
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
    readonly id: FieldRef<'User', 'String'>
    readonly name: FieldRef<'User', 'String'>
    readonly email: FieldRef<'User', 'String'>
    readonly password: FieldRef<'User', 'String'>
    readonly cpf: FieldRef<'User', 'String'>
    readonly created_at: FieldRef<'User', 'DateTime'>
    readonly updated_at: FieldRef<'User', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Reservations
   */
  export type User$ReservationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?:
      | ReservationsOrderByWithRelationInput
      | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }

  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    email: number
    phone: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClientsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?:
      | ClientsOrderByWithRelationInput
      | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clients
     **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
    [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }

  export type ClientsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ClientsWhereInput
    orderBy?:
      | ClientsOrderByWithAggregationInput
      | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: string
    name: string
    cpf: string | null
    email: string | null
    phone: string
    created_at: Date
    updated_at: Date
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ClientsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ClientsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >

  export type ClientsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      cpf?: boolean
      email?: boolean
      phone?: boolean
      created_at?: boolean
      updated_at?: boolean
      address?: boolean | Clients$addressArgs<ExtArgs>
      Reservations?: boolean | Clients$ReservationsArgs<ExtArgs>
      _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['clients']
  >

  export type ClientsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      cpf?: boolean
      email?: boolean
      phone?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['clients']
  >

  export type ClientsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      cpf?: boolean
      email?: boolean
      phone?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['clients']
  >

  export type ClientsSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClientsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'cpf' | 'email' | 'phone' | 'created_at' | 'updated_at',
    ExtArgs['result']['clients']
  >
  export type ClientsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    address?: boolean | Clients$addressArgs<ExtArgs>
    Reservations?: boolean | Clients$ReservationsArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type ClientsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $ClientsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Clients'
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      Reservations: Prisma.$ReservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        cpf: string | null
        email: string | null
        phone: string
        created_at: Date
        updated_at: Date
      },
      ExtArgs['result']['clients']
    >
    composites: {}
  }

  type ClientsGetPayload<
    S extends boolean | null | undefined | ClientsDefaultArgs,
  > = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientsCountAggregateInputType | true
  }

  export interface ClientsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Clients']
      meta: { name: 'Clients' }
    }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(
      args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(
      args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClientsFindManyArgs>(
      args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     *
     */
    create<T extends ClientsCreateArgs>(
      args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClientsCreateManyArgs>(
      args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClientsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ClientsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     *
     */
    delete<T extends ClientsDeleteArgs>(
      args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClientsUpdateArgs>(
      args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClientsDeleteManyArgs>(
      args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClientsUpdateManyArgs>(
      args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ClientsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(
      args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      $Result.GetResult<
        Prisma.$ClientsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientsAggregateArgs>(
      args: Subset<T, ClientsAggregateArgs>
    ): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
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
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetClientsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Clients model
     */
    readonly fields: ClientsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    address<T extends Clients$addressArgs<ExtArgs> = {}>(
      args?: Subset<T, Clients$addressArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >
    Reservations<T extends Clients$ReservationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Clients$ReservationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReservationsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Clients model
   */
  interface ClientsFieldRefs {
    readonly id: FieldRef<'Clients', 'String'>
    readonly name: FieldRef<'Clients', 'String'>
    readonly cpf: FieldRef<'Clients', 'String'>
    readonly email: FieldRef<'Clients', 'String'>
    readonly phone: FieldRef<'Clients', 'String'>
    readonly created_at: FieldRef<'Clients', 'DateTime'>
    readonly updated_at: FieldRef<'Clients', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?:
      | ClientsOrderByWithRelationInput
      | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?:
      | ClientsOrderByWithRelationInput
      | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?:
      | ClientsOrderByWithRelationInput
      | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients createManyAndReturn
   */
  export type ClientsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients updateManyAndReturn
   */
  export type ClientsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.address
   */
  export type Clients$addressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Clients.Reservations
   */
  export type Clients$ReservationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?:
      | ReservationsOrderByWithRelationInput
      | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    number: number | null
  }

  export type AddressSumAggregateOutputType = {
    number: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    client_id: string | null
    city: string | null
    neighborhood: string | null
    state: string | null
    number: number | null
    country: string | null
    street: string | null
    postal_code: string | null
    complement: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    client_id: string | null
    city: string | null
    neighborhood: string | null
    state: string | null
    number: number | null
    country: string | null
    street: string | null
    postal_code: string | null
    complement: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    client_id: number
    city: number
    neighborhood: number
    state: number
    number: number
    country: number
    street: number
    postal_code: number
    complement: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type AddressAvgAggregateInputType = {
    number?: true
  }

  export type AddressSumAggregateInputType = {
    number?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    client_id?: true
    city?: true
    neighborhood?: true
    state?: true
    number?: true
    country?: true
    street?: true
    postal_code?: true
    complement?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    client_id?: true
    city?: true
    neighborhood?: true
    state?: true
    number?: true
    country?: true
    street?: true
    postal_code?: true
    complement?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    client_id?: true
    city?: true
    neighborhood?: true
    state?: true
    number?: true
    country?: true
    street?: true
    postal_code?: true
    complement?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Addresses
     **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
    [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }

  export type AddressGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressWhereInput
    orderBy?:
      | AddressOrderByWithAggregationInput
      | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    client_id: string
    city: string
    neighborhood: string
    state: string
    number: number
    country: string
    street: string
    postal_code: string
    complement: string
    created_at: Date
    updated_at: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AddressGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AddressGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >

  export type AddressSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      client_id?: boolean
      city?: boolean
      neighborhood?: boolean
      state?: boolean
      number?: boolean
      country?: boolean
      street?: boolean
      postal_code?: boolean
      complement?: boolean
      created_at?: boolean
      updated_at?: boolean
      client?: boolean | ClientsDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['address']
  >

  export type AddressSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      client_id?: boolean
      city?: boolean
      neighborhood?: boolean
      state?: boolean
      number?: boolean
      country?: boolean
      street?: boolean
      postal_code?: boolean
      complement?: boolean
      created_at?: boolean
      updated_at?: boolean
      client?: boolean | ClientsDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['address']
  >

  export type AddressSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      client_id?: boolean
      city?: boolean
      neighborhood?: boolean
      state?: boolean
      number?: boolean
      country?: boolean
      street?: boolean
      postal_code?: boolean
      complement?: boolean
      created_at?: boolean
      updated_at?: boolean
      client?: boolean | ClientsDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['address']
  >

  export type AddressSelectScalar = {
    id?: boolean
    client_id?: boolean
    city?: boolean
    neighborhood?: boolean
    state?: boolean
    number?: boolean
    country?: boolean
    street?: boolean
    postal_code?: boolean
    complement?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AddressOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'client_id'
    | 'city'
    | 'neighborhood'
    | 'state'
    | 'number'
    | 'country'
    | 'street'
    | 'postal_code'
    | 'complement'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['address']
  >
  export type AddressInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Address'
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        client_id: string
        city: string
        neighborhood: string
        state: string
        number: number
        country: string
        street: string
        postal_code: string
        complement: string
        created_at: Date
        updated_at: Date
      },
      ExtArgs['result']['address']
    >
    composites: {}
  }

  type AddressGetPayload<
    S extends boolean | null | undefined | AddressDefaultArgs,
  > = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressCountAggregateInputType | true
  }

  export interface AddressDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Address']
      meta: { name: 'Address' }
    }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     *
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     *
     */
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     *
     */
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<
        Prisma.$AddressPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
     **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(
      args: Subset<T, AddressAggregateArgs>
    ): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAddressGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Address model
     */
    readonly fields: AddressFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientsDefaultArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      | $Result.GetResult<
          Prisma.$ClientsPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<'Address', 'String'>
    readonly client_id: FieldRef<'Address', 'String'>
    readonly city: FieldRef<'Address', 'String'>
    readonly neighborhood: FieldRef<'Address', 'String'>
    readonly state: FieldRef<'Address', 'String'>
    readonly number: FieldRef<'Address', 'Int'>
    readonly country: FieldRef<'Address', 'String'>
    readonly street: FieldRef<'Address', 'String'>
    readonly postal_code: FieldRef<'Address', 'String'>
    readonly complement: FieldRef<'Address', 'String'>
    readonly created_at: FieldRef<'Address', 'DateTime'>
    readonly updated_at: FieldRef<'Address', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?:
      | AddressOrderByWithRelationInput
      | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }

  /**
   * Model Reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: string | null
    client_id: string | null
    user_id: string | null
    status: $Enums.RESERVATION_STATUS | null
    reservation_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: string | null
    client_id: string | null
    user_id: string | null
    status: $Enums.RESERVATION_STATUS | null
    reservation_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    client_id: number
    user_id: number
    status: number
    reservation_date: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type ReservationsMinAggregateInputType = {
    id?: true
    client_id?: true
    user_id?: true
    status?: true
    reservation_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    client_id?: true
    user_id?: true
    status?: true
    reservation_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    client_id?: true
    user_id?: true
    status?: true
    reservation_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reservations to aggregate.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reservations to fetch.
     */
    orderBy?:
      | ReservationsOrderByWithRelationInput
      | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reservations
     **/
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<
    T extends ReservationsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }

  export type ReservationsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReservationsWhereInput
    orderBy?:
      | ReservationsOrderByWithAggregationInput
      | ReservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: ReservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: string
    client_id: string
    user_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date: Date
    created_at: Date
    updated_at: Date
    _count: ReservationsCountAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends ReservationsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReservationsGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ReservationsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >

  export type ReservationsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      client_id?: boolean
      user_id?: boolean
      status?: boolean
      reservation_date?: boolean
      created_at?: boolean
      updated_at?: boolean
      clients?: boolean | ClientsDefaultArgs<ExtArgs>
      user?: boolean | UserDefaultArgs<ExtArgs>
      ReservationProducts?:
        | boolean
        | Reservations$ReservationProductsArgs<ExtArgs>
      _count?: boolean | ReservationsCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reservations']
  >

  export type ReservationsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      client_id?: boolean
      user_id?: boolean
      status?: boolean
      reservation_date?: boolean
      created_at?: boolean
      updated_at?: boolean
      clients?: boolean | ClientsDefaultArgs<ExtArgs>
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reservations']
  >

  export type ReservationsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      client_id?: boolean
      user_id?: boolean
      status?: boolean
      reservation_date?: boolean
      created_at?: boolean
      updated_at?: boolean
      clients?: boolean | ClientsDefaultArgs<ExtArgs>
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reservations']
  >

  export type ReservationsSelectScalar = {
    id?: boolean
    client_id?: boolean
    user_id?: boolean
    status?: boolean
    reservation_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReservationsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'client_id'
    | 'user_id'
    | 'status'
    | 'reservation_date'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['reservations']
  >
  export type ReservationsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    clients?: boolean | ClientsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ReservationProducts?:
      | boolean
      | Reservations$ReservationProductsArgs<ExtArgs>
    _count?: boolean | ReservationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    clients?: boolean | ClientsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReservationsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    clients?: boolean | ClientsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReservationsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Reservations'
    objects: {
      clients: Prisma.$ClientsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      ReservationProducts: Prisma.$ReservationProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        client_id: string
        user_id: string
        status: $Enums.RESERVATION_STATUS
        reservation_date: Date
        created_at: Date
        updated_at: Date
      },
      ExtArgs['result']['reservations']
    >
    composites: {}
  }

  type ReservationsGetPayload<
    S extends boolean | null | undefined | ReservationsDefaultArgs,
  > = $Result.GetResult<Prisma.$ReservationsPayload, S>

  type ReservationsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ReservationsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ReservationsCountAggregateInputType | true
  }

  export interface ReservationsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Reservations']
      meta: { name: 'Reservations' }
    }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {ReservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationsFindUniqueArgs>(
      args: SelectSubset<T, ReservationsFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReservationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationsFindFirstArgs>(
      args?: SelectSubset<T, ReservationsFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReservationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     *
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReservationsFindManyArgs>(
      args?: SelectSubset<T, ReservationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Reservations.
     * @param {ReservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     *
     */
    create<T extends ReservationsCreateArgs>(
      args: SelectSubset<T, ReservationsCreateArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Reservations.
     * @param {ReservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReservationsCreateManyArgs>(
      args?: SelectSubset<T, ReservationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationsCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReservationsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReservationsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Reservations.
     * @param {ReservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     *
     */
    delete<T extends ReservationsDeleteArgs>(
      args: SelectSubset<T, ReservationsDeleteArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Reservations.
     * @param {ReservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReservationsUpdateArgs>(
      args: SelectSubset<T, ReservationsUpdateArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Reservations.
     * @param {ReservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReservationsDeleteManyArgs>(
      args?: SelectSubset<T, ReservationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReservationsUpdateManyArgs>(
      args: SelectSubset<T, ReservationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationsUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReservationsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Reservations.
     * @param {ReservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends ReservationsUpsertArgs>(
      args: SelectSubset<T, ReservationsUpsertArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      $Result.GetResult<
        Prisma.$ReservationsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
     **/
    count<T extends ReservationsCountArgs>(
      args?: Subset<T, ReservationsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationsAggregateArgs>(
      args: Subset<T, ReservationsAggregateArgs>
    ): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsGroupByArgs} args - Group by arguments.
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
      T extends ReservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationsGroupByArgs['orderBy'] }
        : { orderBy?: ReservationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReservationsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetReservationsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Reservations model
     */
    readonly fields: ReservationsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ClientsDefaultArgs<ExtArgs>>
    ): Prisma__ClientsClient<
      | $Result.GetResult<
          Prisma.$ClientsPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    ReservationProducts<
      T extends Reservations$ReservationProductsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, Reservations$ReservationProductsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReservationProductsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Reservations model
   */
  interface ReservationsFieldRefs {
    readonly id: FieldRef<'Reservations', 'String'>
    readonly client_id: FieldRef<'Reservations', 'String'>
    readonly user_id: FieldRef<'Reservations', 'String'>
    readonly status: FieldRef<'Reservations', 'RESERVATION_STATUS'>
    readonly reservation_date: FieldRef<'Reservations', 'DateTime'>
    readonly created_at: FieldRef<'Reservations', 'DateTime'>
    readonly updated_at: FieldRef<'Reservations', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Reservations findUnique
   */
  export type ReservationsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findUniqueOrThrow
   */
  export type ReservationsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findFirst
   */
  export type ReservationsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reservations to fetch.
     */
    orderBy?:
      | ReservationsOrderByWithRelationInput
      | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findFirstOrThrow
   */
  export type ReservationsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reservations to fetch.
     */
    orderBy?:
      | ReservationsOrderByWithRelationInput
      | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findMany
   */
  export type ReservationsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reservations to fetch.
     */
    orderBy?:
      | ReservationsOrderByWithRelationInput
      | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations create
   */
  export type ReservationsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservations.
     */
    data: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
  }

  /**
   * Reservations createMany
   */
  export type ReservationsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservations createManyAndReturn
   */
  export type ReservationsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservations update
   */
  export type ReservationsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservations.
     */
    data: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
    /**
     * Choose, which Reservations to update.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations updateMany
   */
  export type ReservationsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<
      ReservationsUpdateManyMutationInput,
      ReservationsUncheckedUpdateManyInput
    >
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservations updateManyAndReturn
   */
  export type ReservationsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<
      ReservationsUpdateManyMutationInput,
      ReservationsUncheckedUpdateManyInput
    >
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservations upsert
   */
  export type ReservationsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservations to update in case it exists.
     */
    where: ReservationsWhereUniqueInput
    /**
     * In case the Reservations found by the `where` argument doesn't exist, create a new Reservations with this data.
     */
    create: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
    /**
     * In case the Reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
  }

  /**
   * Reservations delete
   */
  export type ReservationsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter which Reservations to delete.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations deleteMany
   */
  export type ReservationsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservations.ReservationProducts
   */
  export type Reservations$ReservationProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    where?: ReservationProductsWhereInput
    orderBy?:
      | ReservationProductsOrderByWithRelationInput
      | ReservationProductsOrderByWithRelationInput[]
    cursor?: ReservationProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | ReservationProductsScalarFieldEnum
      | ReservationProductsScalarFieldEnum[]
  }

  /**
   * Reservations without action
   */
  export type ReservationsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
  }

  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    price: number | null
    type: $Enums.ProductType | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    price: number | null
    type: $Enums.ProductType | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    price: number
    type: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type ProductsAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    type?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    type?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    type?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductsOrderByWithRelationInput
      | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }

  export type ProductsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductsWhereInput
    orderBy?:
      | ProductsOrderByWithAggregationInput
      | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    quantity: number
    price: number
    type: $Enums.ProductType
    description: string
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >

  export type ProductsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      quantity?: boolean
      price?: boolean
      type?: boolean
      description?: boolean
      created_at?: boolean
      updated_at?: boolean
      ReservationProducts?: boolean | Products$ReservationProductsArgs<ExtArgs>
      _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['products']
  >

  export type ProductsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      quantity?: boolean
      price?: boolean
      type?: boolean
      description?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['products']
  >

  export type ProductsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      quantity?: boolean
      price?: boolean
      type?: boolean
      description?: boolean
      created_at?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['products']
  >

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    type?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'quantity'
    | 'price'
    | 'type'
    | 'description'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['products']
  >
  export type ProductsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ReservationProducts?: boolean | Products$ReservationProductsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type ProductsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $ProductsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Products'
    objects: {
      ReservationProducts: Prisma.$ReservationProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        quantity: number
        price: number
        type: $Enums.ProductType
        description: string
        created_at: Date
        updated_at: Date
      },
      ExtArgs['result']['products']
    >
    composites: {}
  }

  type ProductsGetPayload<
    S extends boolean | null | undefined | ProductsDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductsCountAggregateInputType | true
  }

  export interface ProductsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Products']
      meta: { name: 'Products' }
    }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(
      args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(
      args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductsFindManyArgs>(
      args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     *
     */
    create<T extends ProductsCreateArgs>(
      args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductsCreateManyArgs>(
      args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     *
     */
    delete<T extends ProductsDeleteArgs>(
      args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductsUpdateArgs>(
      args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductsDeleteManyArgs>(
      args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductsUpdateManyArgs>(
      args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(
      args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      $Result.GetResult<
        Prisma.$ProductsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(
      args: Subset<T, ProductsAggregateArgs>
    ): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProductsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Products model
     */
    readonly fields: ProductsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    ReservationProducts<
      T extends Products$ReservationProductsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, Products$ReservationProductsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReservationProductsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<'Products', 'String'>
    readonly name: FieldRef<'Products', 'String'>
    readonly quantity: FieldRef<'Products', 'Int'>
    readonly price: FieldRef<'Products', 'Float'>
    readonly type: FieldRef<'Products', 'ProductType'>
    readonly description: FieldRef<'Products', 'String'>
    readonly created_at: FieldRef<'Products', 'DateTime'>
    readonly updated_at: FieldRef<'Products', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductsOrderByWithRelationInput
      | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductsOrderByWithRelationInput
      | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductsOrderByWithRelationInput
      | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.ReservationProducts
   */
  export type Products$ReservationProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    where?: ReservationProductsWhereInput
    orderBy?:
      | ReservationProductsOrderByWithRelationInput
      | ReservationProductsOrderByWithRelationInput[]
    cursor?: ReservationProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?:
      | ReservationProductsScalarFieldEnum
      | ReservationProductsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }

  /**
   * Model ReservationProducts
   */

  export type AggregateReservationProducts = {
    _count: ReservationProductsCountAggregateOutputType | null
    _avg: ReservationProductsAvgAggregateOutputType | null
    _sum: ReservationProductsSumAggregateOutputType | null
    _min: ReservationProductsMinAggregateOutputType | null
    _max: ReservationProductsMaxAggregateOutputType | null
  }

  export type ReservationProductsAvgAggregateOutputType = {
    quantity: number | null
    unit_price: number | null
    total_price: number | null
  }

  export type ReservationProductsSumAggregateOutputType = {
    quantity: number | null
    unit_price: number | null
    total_price: number | null
  }

  export type ReservationProductsMinAggregateOutputType = {
    id: string | null
    reservation_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: number | null
    total_price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservationProductsMaxAggregateOutputType = {
    id: string | null
    reservation_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: number | null
    total_price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservationProductsCountAggregateOutputType = {
    id: number
    reservation_id: number
    product_id: number
    quantity: number
    unit_price: number
    total_price: number
    created_at: number
    updated_at: number
    _all: number
  }

  export type ReservationProductsAvgAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type ReservationProductsSumAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type ReservationProductsMinAggregateInputType = {
    id?: true
    reservation_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservationProductsMaxAggregateInputType = {
    id?: true
    reservation_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservationProductsCountAggregateInputType = {
    id?: true
    reservation_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReservationProductsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ReservationProducts to aggregate.
     */
    where?: ReservationProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReservationProducts to fetch.
     */
    orderBy?:
      | ReservationProductsOrderByWithRelationInput
      | ReservationProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReservationProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReservationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReservationProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ReservationProducts
     **/
    _count?: true | ReservationProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReservationProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReservationProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReservationProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReservationProductsMaxAggregateInputType
  }

  export type GetReservationProductsAggregateType<
    T extends ReservationProductsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateReservationProducts]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationProducts[P]>
      : GetScalarType<T[P], AggregateReservationProducts[P]>
  }

  export type ReservationProductsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReservationProductsWhereInput
    orderBy?:
      | ReservationProductsOrderByWithAggregationInput
      | ReservationProductsOrderByWithAggregationInput[]
    by:
      | ReservationProductsScalarFieldEnum[]
      | ReservationProductsScalarFieldEnum
    having?: ReservationProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationProductsCountAggregateInputType | true
    _avg?: ReservationProductsAvgAggregateInputType
    _sum?: ReservationProductsSumAggregateInputType
    _min?: ReservationProductsMinAggregateInputType
    _max?: ReservationProductsMaxAggregateInputType
  }

  export type ReservationProductsGroupByOutputType = {
    id: string
    reservation_id: string
    product_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at: Date
    updated_at: Date
    _count: ReservationProductsCountAggregateOutputType | null
    _avg: ReservationProductsAvgAggregateOutputType | null
    _sum: ReservationProductsSumAggregateOutputType | null
    _min: ReservationProductsMinAggregateOutputType | null
    _max: ReservationProductsMaxAggregateOutputType | null
  }

  type GetReservationProductsGroupByPayload<
    T extends ReservationProductsGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationProductsGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof ReservationProductsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReservationProductsGroupByOutputType[P]>
          : GetScalarType<T[P], ReservationProductsGroupByOutputType[P]>
      }
    >
  >

  export type ReservationProductsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      reservation_id?: boolean
      product_id?: boolean
      quantity?: boolean
      unit_price?: boolean
      total_price?: boolean
      created_at?: boolean
      updated_at?: boolean
      reservations?: boolean | ReservationsDefaultArgs<ExtArgs>
      product?: boolean | ProductsDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reservationProducts']
  >

  export type ReservationProductsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      reservation_id?: boolean
      product_id?: boolean
      quantity?: boolean
      unit_price?: boolean
      total_price?: boolean
      created_at?: boolean
      updated_at?: boolean
      reservations?: boolean | ReservationsDefaultArgs<ExtArgs>
      product?: boolean | ProductsDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reservationProducts']
  >

  export type ReservationProductsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      reservation_id?: boolean
      product_id?: boolean
      quantity?: boolean
      unit_price?: boolean
      total_price?: boolean
      created_at?: boolean
      updated_at?: boolean
      reservations?: boolean | ReservationsDefaultArgs<ExtArgs>
      product?: boolean | ProductsDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reservationProducts']
  >

  export type ReservationProductsSelectScalar = {
    id?: boolean
    reservation_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReservationProductsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'reservation_id'
    | 'product_id'
    | 'quantity'
    | 'unit_price'
    | 'total_price'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['reservationProducts']
  >
  export type ReservationProductsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    reservations?: boolean | ReservationsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ReservationProductsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    reservations?: boolean | ReservationsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ReservationProductsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    reservations?: boolean | ReservationsDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ReservationProductsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ReservationProducts'
    objects: {
      reservations: Prisma.$ReservationsPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        reservation_id: string
        product_id: string
        quantity: number
        unit_price: number
        total_price: number
        created_at: Date
        updated_at: Date
      },
      ExtArgs['result']['reservationProducts']
    >
    composites: {}
  }

  type ReservationProductsGetPayload<
    S extends boolean | null | undefined | ReservationProductsDefaultArgs,
  > = $Result.GetResult<Prisma.$ReservationProductsPayload, S>

  type ReservationProductsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ReservationProductsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ReservationProductsCountAggregateInputType | true
  }

  export interface ReservationProductsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ReservationProducts']
      meta: { name: 'ReservationProducts' }
    }
    /**
     * Find zero or one ReservationProducts that matches the filter.
     * @param {ReservationProductsFindUniqueArgs} args - Arguments to find a ReservationProducts
     * @example
     * // Get one ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationProductsFindUniqueArgs>(
      args: SelectSubset<T, ReservationProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one ReservationProducts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationProductsFindUniqueOrThrowArgs} args - Arguments to find a ReservationProducts
     * @example
     * // Get one ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationProductsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReservationProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first ReservationProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsFindFirstArgs} args - Arguments to find a ReservationProducts
     * @example
     * // Get one ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationProductsFindFirstArgs>(
      args?: SelectSubset<T, ReservationProductsFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first ReservationProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsFindFirstOrThrowArgs} args - Arguments to find a ReservationProducts
     * @example
     * // Get one ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReservationProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more ReservationProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.findMany()
     *
     * // Get first 10 ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reservationProductsWithIdOnly = await prisma.reservationProducts.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReservationProductsFindManyArgs>(
      args?: SelectSubset<T, ReservationProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >

    /**
     * Create a ReservationProducts.
     * @param {ReservationProductsCreateArgs} args - Arguments to create a ReservationProducts.
     * @example
     * // Create one ReservationProducts
     * const ReservationProducts = await prisma.reservationProducts.create({
     *   data: {
     *     // ... data to create a ReservationProducts
     *   }
     * })
     *
     */
    create<T extends ReservationProductsCreateArgs>(
      args: SelectSubset<T, ReservationProductsCreateArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many ReservationProducts.
     * @param {ReservationProductsCreateManyArgs} args - Arguments to create many ReservationProducts.
     * @example
     * // Create many ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReservationProductsCreateManyArgs>(
      args?: SelectSubset<T, ReservationProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationProducts and returns the data saved in the database.
     * @param {ReservationProductsCreateManyAndReturnArgs} args - Arguments to create many ReservationProducts.
     * @example
     * // Create many ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ReservationProducts and only return the `id`
     * const reservationProductsWithIdOnly = await prisma.reservationProducts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReservationProductsCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        ReservationProductsCreateManyAndReturnArgs<ExtArgs>
      >
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a ReservationProducts.
     * @param {ReservationProductsDeleteArgs} args - Arguments to delete one ReservationProducts.
     * @example
     * // Delete one ReservationProducts
     * const ReservationProducts = await prisma.reservationProducts.delete({
     *   where: {
     *     // ... filter to delete one ReservationProducts
     *   }
     * })
     *
     */
    delete<T extends ReservationProductsDeleteArgs>(
      args: SelectSubset<T, ReservationProductsDeleteArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one ReservationProducts.
     * @param {ReservationProductsUpdateArgs} args - Arguments to update one ReservationProducts.
     * @example
     * // Update one ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReservationProductsUpdateArgs>(
      args: SelectSubset<T, ReservationProductsUpdateArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more ReservationProducts.
     * @param {ReservationProductsDeleteManyArgs} args - Arguments to filter ReservationProducts to delete.
     * @example
     * // Delete a few ReservationProducts
     * const { count } = await prisma.reservationProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReservationProductsDeleteManyArgs>(
      args?: SelectSubset<T, ReservationProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReservationProductsUpdateManyArgs>(
      args: SelectSubset<T, ReservationProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationProducts and returns the data updated in the database.
     * @param {ReservationProductsUpdateManyAndReturnArgs} args - Arguments to update many ReservationProducts.
     * @example
     * // Update many ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ReservationProducts and only return the `id`
     * const reservationProductsWithIdOnly = await prisma.reservationProducts.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationProductsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReservationProductsUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one ReservationProducts.
     * @param {ReservationProductsUpsertArgs} args - Arguments to update or create a ReservationProducts.
     * @example
     * // Update or create a ReservationProducts
     * const reservationProducts = await prisma.reservationProducts.upsert({
     *   create: {
     *     // ... data to create a ReservationProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationProducts we want to update
     *   }
     * })
     */
    upsert<T extends ReservationProductsUpsertArgs>(
      args: SelectSubset<T, ReservationProductsUpsertArgs<ExtArgs>>
    ): Prisma__ReservationProductsClient<
      $Result.GetResult<
        Prisma.$ReservationProductsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of ReservationProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsCountArgs} args - Arguments to filter ReservationProducts to count.
     * @example
     * // Count the number of ReservationProducts
     * const count = await prisma.reservationProducts.count({
     *   where: {
     *     // ... the filter for the ReservationProducts we want to count
     *   }
     * })
     **/
    count<T extends ReservationProductsCountArgs>(
      args?: Subset<T, ReservationProductsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              ReservationProductsCountAggregateOutputType
            >
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationProductsAggregateArgs>(
      args: Subset<T, ReservationProductsAggregateArgs>
    ): Prisma.PrismaPromise<GetReservationProductsAggregateType<T>>

    /**
     * Group by ReservationProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationProductsGroupByArgs} args - Group by arguments.
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
      T extends ReservationProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationProductsGroupByArgs['orderBy'] }
        : { orderBy?: ReservationProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReservationProductsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetReservationProductsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the ReservationProducts model
     */
    readonly fields: ReservationProductsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationProductsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    reservations<T extends ReservationsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ReservationsDefaultArgs<ExtArgs>>
    ): Prisma__ReservationsClient<
      | $Result.GetResult<
          Prisma.$ReservationsPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductsDefaultArgs<ExtArgs>>
    ): Prisma__ProductsClient<
      | $Result.GetResult<
          Prisma.$ProductsPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the ReservationProducts model
   */
  interface ReservationProductsFieldRefs {
    readonly id: FieldRef<'ReservationProducts', 'String'>
    readonly reservation_id: FieldRef<'ReservationProducts', 'String'>
    readonly product_id: FieldRef<'ReservationProducts', 'String'>
    readonly quantity: FieldRef<'ReservationProducts', 'Int'>
    readonly unit_price: FieldRef<'ReservationProducts', 'Float'>
    readonly total_price: FieldRef<'ReservationProducts', 'Float'>
    readonly created_at: FieldRef<'ReservationProducts', 'DateTime'>
    readonly updated_at: FieldRef<'ReservationProducts', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * ReservationProducts findUnique
   */
  export type ReservationProductsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * Filter, which ReservationProducts to fetch.
     */
    where: ReservationProductsWhereUniqueInput
  }

  /**
   * ReservationProducts findUniqueOrThrow
   */
  export type ReservationProductsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * Filter, which ReservationProducts to fetch.
     */
    where: ReservationProductsWhereUniqueInput
  }

  /**
   * ReservationProducts findFirst
   */
  export type ReservationProductsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * Filter, which ReservationProducts to fetch.
     */
    where?: ReservationProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReservationProducts to fetch.
     */
    orderBy?:
      | ReservationProductsOrderByWithRelationInput
      | ReservationProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReservationProducts.
     */
    cursor?: ReservationProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReservationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReservationProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReservationProducts.
     */
    distinct?:
      | ReservationProductsScalarFieldEnum
      | ReservationProductsScalarFieldEnum[]
  }

  /**
   * ReservationProducts findFirstOrThrow
   */
  export type ReservationProductsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * Filter, which ReservationProducts to fetch.
     */
    where?: ReservationProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReservationProducts to fetch.
     */
    orderBy?:
      | ReservationProductsOrderByWithRelationInput
      | ReservationProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReservationProducts.
     */
    cursor?: ReservationProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReservationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReservationProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReservationProducts.
     */
    distinct?:
      | ReservationProductsScalarFieldEnum
      | ReservationProductsScalarFieldEnum[]
  }

  /**
   * ReservationProducts findMany
   */
  export type ReservationProductsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * Filter, which ReservationProducts to fetch.
     */
    where?: ReservationProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReservationProducts to fetch.
     */
    orderBy?:
      | ReservationProductsOrderByWithRelationInput
      | ReservationProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ReservationProducts.
     */
    cursor?: ReservationProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReservationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReservationProducts.
     */
    skip?: number
    distinct?:
      | ReservationProductsScalarFieldEnum
      | ReservationProductsScalarFieldEnum[]
  }

  /**
   * ReservationProducts create
   */
  export type ReservationProductsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationProducts.
     */
    data: XOR<
      ReservationProductsCreateInput,
      ReservationProductsUncheckedCreateInput
    >
  }

  /**
   * ReservationProducts createMany
   */
  export type ReservationProductsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ReservationProducts.
     */
    data:
      | ReservationProductsCreateManyInput
      | ReservationProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationProducts createManyAndReturn
   */
  export type ReservationProductsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * The data used to create many ReservationProducts.
     */
    data:
      | ReservationProductsCreateManyInput
      | ReservationProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationProducts update
   */
  export type ReservationProductsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationProducts.
     */
    data: XOR<
      ReservationProductsUpdateInput,
      ReservationProductsUncheckedUpdateInput
    >
    /**
     * Choose, which ReservationProducts to update.
     */
    where: ReservationProductsWhereUniqueInput
  }

  /**
   * ReservationProducts updateMany
   */
  export type ReservationProductsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ReservationProducts.
     */
    data: XOR<
      ReservationProductsUpdateManyMutationInput,
      ReservationProductsUncheckedUpdateManyInput
    >
    /**
     * Filter which ReservationProducts to update
     */
    where?: ReservationProductsWhereInput
    /**
     * Limit how many ReservationProducts to update.
     */
    limit?: number
  }

  /**
   * ReservationProducts updateManyAndReturn
   */
  export type ReservationProductsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * The data used to update ReservationProducts.
     */
    data: XOR<
      ReservationProductsUpdateManyMutationInput,
      ReservationProductsUncheckedUpdateManyInput
    >
    /**
     * Filter which ReservationProducts to update
     */
    where?: ReservationProductsWhereInput
    /**
     * Limit how many ReservationProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationProducts upsert
   */
  export type ReservationProductsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationProducts to update in case it exists.
     */
    where: ReservationProductsWhereUniqueInput
    /**
     * In case the ReservationProducts found by the `where` argument doesn't exist, create a new ReservationProducts with this data.
     */
    create: XOR<
      ReservationProductsCreateInput,
      ReservationProductsUncheckedCreateInput
    >
    /**
     * In case the ReservationProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ReservationProductsUpdateInput,
      ReservationProductsUncheckedUpdateInput
    >
  }

  /**
   * ReservationProducts delete
   */
  export type ReservationProductsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
    /**
     * Filter which ReservationProducts to delete.
     */
    where: ReservationProductsWhereUniqueInput
  }

  /**
   * ReservationProducts deleteMany
   */
  export type ReservationProductsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ReservationProducts to delete
     */
    where?: ReservationProductsWhereInput
    /**
     * Limit how many ReservationProducts to delete.
     */
    limit?: number
  }

  /**
   * ReservationProducts without action
   */
  export type ReservationProductsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReservationProducts
     */
    select?: ReservationProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationProducts
     */
    omit?: ReservationProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationProductsInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserScalarFieldEnum: {
    id: 'id'
    name: 'name'
    email: 'email'
    password: 'password'
    cpf: 'cpf'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const ClientsScalarFieldEnum: {
    id: 'id'
    name: 'name'
    cpf: 'cpf'
    email: 'email'
    phone: 'phone'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type ClientsScalarFieldEnum =
    (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]

  export const AddressScalarFieldEnum: {
    id: 'id'
    client_id: 'client_id'
    city: 'city'
    neighborhood: 'neighborhood'
    state: 'state'
    number: 'number'
    country: 'country'
    street: 'street'
    postal_code: 'postal_code'
    complement: 'complement'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type AddressScalarFieldEnum =
    (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]

  export const ReservationsScalarFieldEnum: {
    id: 'id'
    client_id: 'client_id'
    user_id: 'user_id'
    status: 'status'
    reservation_date: 'reservation_date'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type ReservationsScalarFieldEnum =
    (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]

  export const ProductsScalarFieldEnum: {
    id: 'id'
    name: 'name'
    quantity: 'quantity'
    price: 'price'
    type: 'type'
    description: 'description'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type ProductsScalarFieldEnum =
    (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]

  export const ReservationProductsScalarFieldEnum: {
    id: 'id'
    reservation_id: 'reservation_id'
    product_id: 'product_id'
    quantity: 'quantity'
    unit_price: 'unit_price'
    total_price: 'total_price'
    created_at: 'created_at'
    updated_at: 'updated_at'
  }

  export type ReservationProductsScalarFieldEnum =
    (typeof ReservationProductsScalarFieldEnum)[keyof typeof ReservationProductsScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >

  /**
   * Reference to a field of type 'RESERVATION_STATUS'
   */
  export type EnumRESERVATION_STATUSFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'RESERVATION_STATUS'>

  /**
   * Reference to a field of type 'RESERVATION_STATUS[]'
   */
  export type ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'RESERVATION_STATUS[]'>

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >

  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ProductType'
  >

  /**
   * Reference to a field of type 'ProductType[]'
   */
  export type ListEnumProductTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ProductType[]'>

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<'User'> | string
    name?: StringFilter<'User'> | string
    email?: StringFilter<'User'> | string
    password?: StringFilter<'User'> | string
    cpf?: StringNullableFilter<'User'> | string | null
    created_at?: DateTimeFilter<'User'> | Date | string
    updated_at?: DateTimeFilter<'User'> | Date | string
    Reservations?: ReservationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Reservations?: ReservationsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      cpf?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      name?: StringFilter<'User'> | string
      password?: StringFilter<'User'> | string
      created_at?: DateTimeFilter<'User'> | Date | string
      updated_at?: DateTimeFilter<'User'> | Date | string
      Reservations?: ReservationsListRelationFilter
    },
    'id' | 'email' | 'cpf'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'User'> | string
    name?: StringWithAggregatesFilter<'User'> | string
    email?: StringWithAggregatesFilter<'User'> | string
    password?: StringWithAggregatesFilter<'User'> | string
    cpf?: StringNullableWithAggregatesFilter<'User'> | string | null
    created_at?: DateTimeWithAggregatesFilter<'User'> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<'User'> | Date | string
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: StringFilter<'Clients'> | string
    name?: StringFilter<'Clients'> | string
    cpf?: StringNullableFilter<'Clients'> | string | null
    email?: StringNullableFilter<'Clients'> | string | null
    phone?: StringFilter<'Clients'> | string
    created_at?: DateTimeFilter<'Clients'> | Date | string
    updated_at?: DateTimeFilter<'Clients'> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    Reservations?: ReservationsListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    address?: AddressOrderByWithRelationInput
    Reservations?: ReservationsOrderByRelationAggregateInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ClientsWhereInput | ClientsWhereInput[]
      OR?: ClientsWhereInput[]
      NOT?: ClientsWhereInput | ClientsWhereInput[]
      name?: StringFilter<'Clients'> | string
      cpf?: StringNullableFilter<'Clients'> | string | null
      email?: StringNullableFilter<'Clients'> | string | null
      phone?: StringFilter<'Clients'> | string
      created_at?: DateTimeFilter<'Clients'> | Date | string
      updated_at?: DateTimeFilter<'Clients'> | Date | string
      address?: XOR<
        AddressNullableScalarRelationFilter,
        AddressWhereInput
      > | null
      Reservations?: ReservationsListRelationFilter
    },
    'id'
  >

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?:
      | ClientsScalarWhereWithAggregatesInput
      | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?:
      | ClientsScalarWhereWithAggregatesInput
      | ClientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Clients'> | string
    name?: StringWithAggregatesFilter<'Clients'> | string
    cpf?: StringNullableWithAggregatesFilter<'Clients'> | string | null
    email?: StringNullableWithAggregatesFilter<'Clients'> | string | null
    phone?: StringWithAggregatesFilter<'Clients'> | string
    created_at?: DateTimeWithAggregatesFilter<'Clients'> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<'Clients'> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<'Address'> | string
    client_id?: StringFilter<'Address'> | string
    city?: StringFilter<'Address'> | string
    neighborhood?: StringFilter<'Address'> | string
    state?: StringFilter<'Address'> | string
    number?: IntFilter<'Address'> | number
    country?: StringFilter<'Address'> | string
    street?: StringFilter<'Address'> | string
    postal_code?: StringFilter<'Address'> | string
    complement?: StringFilter<'Address'> | string
    created_at?: DateTimeFilter<'Address'> | Date | string
    updated_at?: DateTimeFilter<'Address'> | Date | string
    client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    state?: SortOrder
    number?: SortOrder
    country?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    complement?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    client?: ClientsOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      client_id?: string
      AND?: AddressWhereInput | AddressWhereInput[]
      OR?: AddressWhereInput[]
      NOT?: AddressWhereInput | AddressWhereInput[]
      city?: StringFilter<'Address'> | string
      neighborhood?: StringFilter<'Address'> | string
      state?: StringFilter<'Address'> | string
      number?: IntFilter<'Address'> | number
      country?: StringFilter<'Address'> | string
      street?: StringFilter<'Address'> | string
      postal_code?: StringFilter<'Address'> | string
      complement?: StringFilter<'Address'> | string
      created_at?: DateTimeFilter<'Address'> | Date | string
      updated_at?: DateTimeFilter<'Address'> | Date | string
      client?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    },
    'id' | 'client_id'
  >

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    state?: SortOrder
    number?: SortOrder
    country?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    complement?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?:
      | AddressScalarWhereWithAggregatesInput
      | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?:
      | AddressScalarWhereWithAggregatesInput
      | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Address'> | string
    client_id?: StringWithAggregatesFilter<'Address'> | string
    city?: StringWithAggregatesFilter<'Address'> | string
    neighborhood?: StringWithAggregatesFilter<'Address'> | string
    state?: StringWithAggregatesFilter<'Address'> | string
    number?: IntWithAggregatesFilter<'Address'> | number
    country?: StringWithAggregatesFilter<'Address'> | string
    street?: StringWithAggregatesFilter<'Address'> | string
    postal_code?: StringWithAggregatesFilter<'Address'> | string
    complement?: StringWithAggregatesFilter<'Address'> | string
    created_at?: DateTimeWithAggregatesFilter<'Address'> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<'Address'> | Date | string
  }

  export type ReservationsWhereInput = {
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    id?: StringFilter<'Reservations'> | string
    client_id?: StringFilter<'Reservations'> | string
    user_id?: StringFilter<'Reservations'> | string
    status?:
      | EnumRESERVATION_STATUSFilter<'Reservations'>
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFilter<'Reservations'> | Date | string
    created_at?: DateTimeFilter<'Reservations'> | Date | string
    updated_at?: DateTimeFilter<'Reservations'> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ReservationProducts?: ReservationProductsListRelationFilter
  }

  export type ReservationsOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    reservation_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clients?: ClientsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    ReservationProducts?: ReservationProductsOrderByRelationAggregateInput
  }

  export type ReservationsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ReservationsWhereInput | ReservationsWhereInput[]
      OR?: ReservationsWhereInput[]
      NOT?: ReservationsWhereInput | ReservationsWhereInput[]
      client_id?: StringFilter<'Reservations'> | string
      user_id?: StringFilter<'Reservations'> | string
      status?:
        | EnumRESERVATION_STATUSFilter<'Reservations'>
        | $Enums.RESERVATION_STATUS
      reservation_date?: DateTimeFilter<'Reservations'> | Date | string
      created_at?: DateTimeFilter<'Reservations'> | Date | string
      updated_at?: DateTimeFilter<'Reservations'> | Date | string
      clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
      ReservationProducts?: ReservationProductsListRelationFilter
    },
    'id'
  >

  export type ReservationsOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    reservation_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReservationsCountOrderByAggregateInput
    _max?: ReservationsMaxOrderByAggregateInput
    _min?: ReservationsMinOrderByAggregateInput
  }

  export type ReservationsScalarWhereWithAggregatesInput = {
    AND?:
      | ReservationsScalarWhereWithAggregatesInput
      | ReservationsScalarWhereWithAggregatesInput[]
    OR?: ReservationsScalarWhereWithAggregatesInput[]
    NOT?:
      | ReservationsScalarWhereWithAggregatesInput
      | ReservationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Reservations'> | string
    client_id?: StringWithAggregatesFilter<'Reservations'> | string
    user_id?: StringWithAggregatesFilter<'Reservations'> | string
    status?:
      | EnumRESERVATION_STATUSWithAggregatesFilter<'Reservations'>
      | $Enums.RESERVATION_STATUS
    reservation_date?:
      | DateTimeWithAggregatesFilter<'Reservations'>
      | Date
      | string
    created_at?: DateTimeWithAggregatesFilter<'Reservations'> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<'Reservations'> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: StringFilter<'Products'> | string
    name?: StringFilter<'Products'> | string
    quantity?: IntFilter<'Products'> | number
    price?: FloatFilter<'Products'> | number
    type?: EnumProductTypeFilter<'Products'> | $Enums.ProductType
    description?: StringFilter<'Products'> | string
    created_at?: DateTimeFilter<'Products'> | Date | string
    updated_at?: DateTimeFilter<'Products'> | Date | string
    ReservationProducts?: ReservationProductsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    type?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ReservationProducts?: ReservationProductsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ProductsWhereInput | ProductsWhereInput[]
      OR?: ProductsWhereInput[]
      NOT?: ProductsWhereInput | ProductsWhereInput[]
      name?: StringFilter<'Products'> | string
      quantity?: IntFilter<'Products'> | number
      price?: FloatFilter<'Products'> | number
      type?: EnumProductTypeFilter<'Products'> | $Enums.ProductType
      description?: StringFilter<'Products'> | string
      created_at?: DateTimeFilter<'Products'> | Date | string
      updated_at?: DateTimeFilter<'Products'> | Date | string
      ReservationProducts?: ReservationProductsListRelationFilter
    },
    'id'
  >

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    type?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?:
      | ProductsScalarWhereWithAggregatesInput
      | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?:
      | ProductsScalarWhereWithAggregatesInput
      | ProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Products'> | string
    name?: StringWithAggregatesFilter<'Products'> | string
    quantity?: IntWithAggregatesFilter<'Products'> | number
    price?: FloatWithAggregatesFilter<'Products'> | number
    type?: EnumProductTypeWithAggregatesFilter<'Products'> | $Enums.ProductType
    description?: StringWithAggregatesFilter<'Products'> | string
    created_at?: DateTimeWithAggregatesFilter<'Products'> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<'Products'> | Date | string
  }

  export type ReservationProductsWhereInput = {
    AND?: ReservationProductsWhereInput | ReservationProductsWhereInput[]
    OR?: ReservationProductsWhereInput[]
    NOT?: ReservationProductsWhereInput | ReservationProductsWhereInput[]
    id?: StringFilter<'ReservationProducts'> | string
    reservation_id?: StringFilter<'ReservationProducts'> | string
    product_id?: StringFilter<'ReservationProducts'> | string
    quantity?: IntFilter<'ReservationProducts'> | number
    unit_price?: FloatFilter<'ReservationProducts'> | number
    total_price?: FloatFilter<'ReservationProducts'> | number
    created_at?: DateTimeFilter<'ReservationProducts'> | Date | string
    updated_at?: DateTimeFilter<'ReservationProducts'> | Date | string
    reservations?: XOR<ReservationsScalarRelationFilter, ReservationsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type ReservationProductsOrderByWithRelationInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reservations?: ReservationsOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type ReservationProductsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ReservationProductsWhereInput | ReservationProductsWhereInput[]
      OR?: ReservationProductsWhereInput[]
      NOT?: ReservationProductsWhereInput | ReservationProductsWhereInput[]
      reservation_id?: StringFilter<'ReservationProducts'> | string
      product_id?: StringFilter<'ReservationProducts'> | string
      quantity?: IntFilter<'ReservationProducts'> | number
      unit_price?: FloatFilter<'ReservationProducts'> | number
      total_price?: FloatFilter<'ReservationProducts'> | number
      created_at?: DateTimeFilter<'ReservationProducts'> | Date | string
      updated_at?: DateTimeFilter<'ReservationProducts'> | Date | string
      reservations?: XOR<
        ReservationsScalarRelationFilter,
        ReservationsWhereInput
      >
      product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    },
    'id'
  >

  export type ReservationProductsOrderByWithAggregationInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReservationProductsCountOrderByAggregateInput
    _avg?: ReservationProductsAvgOrderByAggregateInput
    _max?: ReservationProductsMaxOrderByAggregateInput
    _min?: ReservationProductsMinOrderByAggregateInput
    _sum?: ReservationProductsSumOrderByAggregateInput
  }

  export type ReservationProductsScalarWhereWithAggregatesInput = {
    AND?:
      | ReservationProductsScalarWhereWithAggregatesInput
      | ReservationProductsScalarWhereWithAggregatesInput[]
    OR?: ReservationProductsScalarWhereWithAggregatesInput[]
    NOT?:
      | ReservationProductsScalarWhereWithAggregatesInput
      | ReservationProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'ReservationProducts'> | string
    reservation_id?: StringWithAggregatesFilter<'ReservationProducts'> | string
    product_id?: StringWithAggregatesFilter<'ReservationProducts'> | string
    quantity?: IntWithAggregatesFilter<'ReservationProducts'> | number
    unit_price?: FloatWithAggregatesFilter<'ReservationProducts'> | number
    total_price?: FloatWithAggregatesFilter<'ReservationProducts'> | number
    created_at?:
      | DateTimeWithAggregatesFilter<'ReservationProducts'>
      | Date
      | string
    updated_at?:
      | DateTimeWithAggregatesFilter<'ReservationProducts'>
      | Date
      | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Reservations?: ReservationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Reservations?: ReservationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservations?: ReservationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservations?: ReservationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsCreateInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedOneWithoutClientInput
    Reservations?: ReservationsCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutClientInput
    Reservations?: ReservationsUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutClientNestedInput
    Reservations?: ReservationsUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutClientNestedInput
    Reservations?: ReservationsUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    city: string
    neighborhood: string
    state: string
    number: number
    country: string
    street: string
    postal_code: string
    complement: string
    created_at?: Date | string
    updated_at?: Date | string
    client: ClientsCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    client_id: string
    city: string
    neighborhood: string
    state: string
    number: number
    country: string
    street: string
    postal_code: string
    complement: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientsUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: string
    client_id: string
    city: string
    neighborhood: string
    state: string
    number: number
    country: string
    street: string
    postal_code: string
    complement: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsCreateInput = {
    id?: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    clients: ClientsCreateNestedOneWithoutReservationsInput
    user: UserCreateNestedOneWithoutReservationsInput
    ReservationProducts?: ReservationProductsCreateNestedManyWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateInput = {
    id?: string
    client_id: string
    user_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ReservationProducts?: ReservationProductsUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientsUpdateOneRequiredWithoutReservationsNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    ReservationProducts?: ReservationProductsUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ReservationProducts?: ReservationProductsUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationsCreateManyInput = {
    id?: string
    client_id: string
    user_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    id?: string
    name: string
    quantity: number
    price: number
    type: $Enums.ProductType
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    ReservationProducts?: ReservationProductsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: string
    name: string
    quantity: number
    price: number
    type: $Enums.ProductType
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    ReservationProducts?: ReservationProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ReservationProducts?: ReservationProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ReservationProducts?: ReservationProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: string
    name: string
    quantity: number
    price: number
    type: $Enums.ProductType
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsCreateInput = {
    id?: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
    reservations: ReservationsCreateNestedOneWithoutReservationProductsInput
    product: ProductsCreateNestedOneWithoutReservationProductsInput
  }

  export type ReservationProductsUncheckedCreateInput = {
    id?: string
    reservation_id: string
    product_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUpdateOneRequiredWithoutReservationProductsNestedInput
    product?: ProductsUpdateOneRequiredWithoutReservationProductsNestedInput
  }

  export type ReservationProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservation_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsCreateManyInput = {
    id?: string
    reservation_id: string
    product_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservation_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ReservationsListRelationFilter = {
    every?: ReservationsWhereInput
    some?: ReservationsWhereInput
    none?: ReservationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type ClientsScalarRelationFilter = {
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    state?: SortOrder
    number?: SortOrder
    country?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    complement?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    state?: SortOrder
    number?: SortOrder
    country?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    complement?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    state?: SortOrder
    number?: SortOrder
    country?: SortOrder
    street?: SortOrder
    postal_code?: SortOrder
    complement?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    number?: SortOrder
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

  export type EnumRESERVATION_STATUSFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.RESERVATION_STATUS
      | EnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    in?:
      | $Enums.RESERVATION_STATUS[]
      | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.RESERVATION_STATUS[]
      | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumRESERVATION_STATUSFilter<$PrismaModel>
      | $Enums.RESERVATION_STATUS
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReservationProductsListRelationFilter = {
    every?: ReservationProductsWhereInput
    some?: ReservationProductsWhereInput
    none?: ReservationProductsWhereInput
  }

  export type ReservationProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationsCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    reservation_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    reservation_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationsMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    reservation_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRESERVATION_STATUSWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.RESERVATION_STATUS
        | EnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
      in?:
        | $Enums.RESERVATION_STATUS[]
        | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
      notIn?:
        | $Enums.RESERVATION_STATUS[]
        | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
      not?:
        | NestedEnumRESERVATION_STATUSWithAggregatesFilter<$PrismaModel>
        | $Enums.RESERVATION_STATUS
      _count?: NestedIntFilter<$PrismaModel>
      _min?: NestedEnumRESERVATION_STATUSFilter<$PrismaModel>
      _max?: NestedEnumRESERVATION_STATUSFilter<$PrismaModel>
    }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.ProductType[]
      | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    type?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    type?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    type?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.ProductType[]
      | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumProductTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type ReservationsScalarRelationFilter = {
    is?: ReservationsWhereInput
    isNot?: ReservationsWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type ReservationProductsCountOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationProductsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type ReservationProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationProductsMinOrderByAggregateInput = {
    id?: SortOrder
    reservation_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservationProductsSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type ReservationsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutUserInput,
          ReservationsUncheckedCreateWithoutUserInput
        >
      | ReservationsCreateWithoutUserInput[]
      | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutUserInput
      | ReservationsCreateOrConnectWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutUserInput,
          ReservationsUncheckedCreateWithoutUserInput
        >
      | ReservationsCreateWithoutUserInput[]
      | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutUserInput
      | ReservationsCreateOrConnectWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservationsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutUserInput,
          ReservationsUncheckedCreateWithoutUserInput
        >
      | ReservationsCreateWithoutUserInput[]
      | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutUserInput
      | ReservationsCreateOrConnectWithoutUserInput[]
    upsert?:
      | ReservationsUpsertWithWhereUniqueWithoutUserInput
      | ReservationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?:
      | ReservationsUpdateWithWhereUniqueWithoutUserInput
      | ReservationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | ReservationsUpdateManyWithWhereWithoutUserInput
      | ReservationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutUserInput,
          ReservationsUncheckedCreateWithoutUserInput
        >
      | ReservationsCreateWithoutUserInput[]
      | ReservationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutUserInput
      | ReservationsCreateOrConnectWithoutUserInput[]
    upsert?:
      | ReservationsUpsertWithWhereUniqueWithoutUserInput
      | ReservationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationsCreateManyUserInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?:
      | ReservationsUpdateWithWhereUniqueWithoutUserInput
      | ReservationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | ReservationsUpdateManyWithWhereWithoutUserInput
      | ReservationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutClientInput = {
    create?: XOR<
      AddressCreateWithoutClientInput,
      AddressUncheckedCreateWithoutClientInput
    >
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    connect?: AddressWhereUniqueInput
  }

  export type ReservationsCreateNestedManyWithoutClientsInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutClientsInput,
          ReservationsUncheckedCreateWithoutClientsInput
        >
      | ReservationsCreateWithoutClientsInput[]
      | ReservationsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutClientsInput
      | ReservationsCreateOrConnectWithoutClientsInput[]
    createMany?: ReservationsCreateManyClientsInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<
      AddressCreateWithoutClientInput,
      AddressUncheckedCreateWithoutClientInput
    >
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    connect?: AddressWhereUniqueInput
  }

  export type ReservationsUncheckedCreateNestedManyWithoutClientsInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutClientsInput,
          ReservationsUncheckedCreateWithoutClientsInput
        >
      | ReservationsCreateWithoutClientsInput[]
      | ReservationsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutClientsInput
      | ReservationsCreateOrConnectWithoutClientsInput[]
    createMany?: ReservationsCreateManyClientsInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type AddressUpdateOneWithoutClientNestedInput = {
    create?: XOR<
      AddressCreateWithoutClientInput,
      AddressUncheckedCreateWithoutClientInput
    >
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    upsert?: AddressUpsertWithoutClientInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<
      XOR<
        AddressUpdateToOneWithWhereWithoutClientInput,
        AddressUpdateWithoutClientInput
      >,
      AddressUncheckedUpdateWithoutClientInput
    >
  }

  export type ReservationsUpdateManyWithoutClientsNestedInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutClientsInput,
          ReservationsUncheckedCreateWithoutClientsInput
        >
      | ReservationsCreateWithoutClientsInput[]
      | ReservationsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutClientsInput
      | ReservationsCreateOrConnectWithoutClientsInput[]
    upsert?:
      | ReservationsUpsertWithWhereUniqueWithoutClientsInput
      | ReservationsUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: ReservationsCreateManyClientsInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?:
      | ReservationsUpdateWithWhereUniqueWithoutClientsInput
      | ReservationsUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?:
      | ReservationsUpdateManyWithWhereWithoutClientsInput
      | ReservationsUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<
      AddressCreateWithoutClientInput,
      AddressUncheckedCreateWithoutClientInput
    >
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    upsert?: AddressUpsertWithoutClientInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<
      XOR<
        AddressUpdateToOneWithWhereWithoutClientInput,
        AddressUpdateWithoutClientInput
      >,
      AddressUncheckedUpdateWithoutClientInput
    >
  }

  export type ReservationsUncheckedUpdateManyWithoutClientsNestedInput = {
    create?:
      | XOR<
          ReservationsCreateWithoutClientsInput,
          ReservationsUncheckedCreateWithoutClientsInput
        >
      | ReservationsCreateWithoutClientsInput[]
      | ReservationsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?:
      | ReservationsCreateOrConnectWithoutClientsInput
      | ReservationsCreateOrConnectWithoutClientsInput[]
    upsert?:
      | ReservationsUpsertWithWhereUniqueWithoutClientsInput
      | ReservationsUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: ReservationsCreateManyClientsInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?:
      | ReservationsUpdateWithWhereUniqueWithoutClientsInput
      | ReservationsUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?:
      | ReservationsUpdateManyWithWhereWithoutClientsInput
      | ReservationsUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutAddressInput = {
    create?: XOR<
      ClientsCreateWithoutAddressInput,
      ClientsUncheckedCreateWithoutAddressInput
    >
    connectOrCreate?: ClientsCreateOrConnectWithoutAddressInput
    connect?: ClientsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientsUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<
      ClientsCreateWithoutAddressInput,
      ClientsUncheckedCreateWithoutAddressInput
    >
    connectOrCreate?: ClientsCreateOrConnectWithoutAddressInput
    upsert?: ClientsUpsertWithoutAddressInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<
      XOR<
        ClientsUpdateToOneWithWhereWithoutAddressInput,
        ClientsUpdateWithoutAddressInput
      >,
      ClientsUncheckedUpdateWithoutAddressInput
    >
  }

  export type ClientsCreateNestedOneWithoutReservationsInput = {
    create?: XOR<
      ClientsCreateWithoutReservationsInput,
      ClientsUncheckedCreateWithoutReservationsInput
    >
    connectOrCreate?: ClientsCreateOrConnectWithoutReservationsInput
    connect?: ClientsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<
      UserCreateWithoutReservationsInput,
      UserUncheckedCreateWithoutReservationsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationProductsCreateNestedManyWithoutReservationsInput = {
    create?:
      | XOR<
          ReservationProductsCreateWithoutReservationsInput,
          ReservationProductsUncheckedCreateWithoutReservationsInput
        >
      | ReservationProductsCreateWithoutReservationsInput[]
      | ReservationProductsUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?:
      | ReservationProductsCreateOrConnectWithoutReservationsInput
      | ReservationProductsCreateOrConnectWithoutReservationsInput[]
    createMany?: ReservationProductsCreateManyReservationsInputEnvelope
    connect?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
  }

  export type ReservationProductsUncheckedCreateNestedManyWithoutReservationsInput =
    {
      create?:
        | XOR<
            ReservationProductsCreateWithoutReservationsInput,
            ReservationProductsUncheckedCreateWithoutReservationsInput
          >
        | ReservationProductsCreateWithoutReservationsInput[]
        | ReservationProductsUncheckedCreateWithoutReservationsInput[]
      connectOrCreate?:
        | ReservationProductsCreateOrConnectWithoutReservationsInput
        | ReservationProductsCreateOrConnectWithoutReservationsInput[]
      createMany?: ReservationProductsCreateManyReservationsInputEnvelope
      connect?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
    }

  export type EnumRESERVATION_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.RESERVATION_STATUS
  }

  export type ClientsUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<
      ClientsCreateWithoutReservationsInput,
      ClientsUncheckedCreateWithoutReservationsInput
    >
    connectOrCreate?: ClientsCreateOrConnectWithoutReservationsInput
    upsert?: ClientsUpsertWithoutReservationsInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<
      XOR<
        ClientsUpdateToOneWithWhereWithoutReservationsInput,
        ClientsUpdateWithoutReservationsInput
      >,
      ClientsUncheckedUpdateWithoutReservationsInput
    >
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<
      UserCreateWithoutReservationsInput,
      UserUncheckedCreateWithoutReservationsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReservationsInput,
        UserUpdateWithoutReservationsInput
      >,
      UserUncheckedUpdateWithoutReservationsInput
    >
  }

  export type ReservationProductsUpdateManyWithoutReservationsNestedInput = {
    create?:
      | XOR<
          ReservationProductsCreateWithoutReservationsInput,
          ReservationProductsUncheckedCreateWithoutReservationsInput
        >
      | ReservationProductsCreateWithoutReservationsInput[]
      | ReservationProductsUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?:
      | ReservationProductsCreateOrConnectWithoutReservationsInput
      | ReservationProductsCreateOrConnectWithoutReservationsInput[]
    upsert?:
      | ReservationProductsUpsertWithWhereUniqueWithoutReservationsInput
      | ReservationProductsUpsertWithWhereUniqueWithoutReservationsInput[]
    createMany?: ReservationProductsCreateManyReservationsInputEnvelope
    set?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    disconnect?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    delete?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    connect?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    update?:
      | ReservationProductsUpdateWithWhereUniqueWithoutReservationsInput
      | ReservationProductsUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?:
      | ReservationProductsUpdateManyWithWhereWithoutReservationsInput
      | ReservationProductsUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?:
      | ReservationProductsScalarWhereInput
      | ReservationProductsScalarWhereInput[]
  }

  export type ReservationProductsUncheckedUpdateManyWithoutReservationsNestedInput =
    {
      create?:
        | XOR<
            ReservationProductsCreateWithoutReservationsInput,
            ReservationProductsUncheckedCreateWithoutReservationsInput
          >
        | ReservationProductsCreateWithoutReservationsInput[]
        | ReservationProductsUncheckedCreateWithoutReservationsInput[]
      connectOrCreate?:
        | ReservationProductsCreateOrConnectWithoutReservationsInput
        | ReservationProductsCreateOrConnectWithoutReservationsInput[]
      upsert?:
        | ReservationProductsUpsertWithWhereUniqueWithoutReservationsInput
        | ReservationProductsUpsertWithWhereUniqueWithoutReservationsInput[]
      createMany?: ReservationProductsCreateManyReservationsInputEnvelope
      set?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      disconnect?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      delete?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      connect?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      update?:
        | ReservationProductsUpdateWithWhereUniqueWithoutReservationsInput
        | ReservationProductsUpdateWithWhereUniqueWithoutReservationsInput[]
      updateMany?:
        | ReservationProductsUpdateManyWithWhereWithoutReservationsInput
        | ReservationProductsUpdateManyWithWhereWithoutReservationsInput[]
      deleteMany?:
        | ReservationProductsScalarWhereInput
        | ReservationProductsScalarWhereInput[]
    }

  export type ReservationProductsCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          ReservationProductsCreateWithoutProductInput,
          ReservationProductsUncheckedCreateWithoutProductInput
        >
      | ReservationProductsCreateWithoutProductInput[]
      | ReservationProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?:
      | ReservationProductsCreateOrConnectWithoutProductInput
      | ReservationProductsCreateOrConnectWithoutProductInput[]
    createMany?: ReservationProductsCreateManyProductInputEnvelope
    connect?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
  }

  export type ReservationProductsUncheckedCreateNestedManyWithoutProductInput =
    {
      create?:
        | XOR<
            ReservationProductsCreateWithoutProductInput,
            ReservationProductsUncheckedCreateWithoutProductInput
          >
        | ReservationProductsCreateWithoutProductInput[]
        | ReservationProductsUncheckedCreateWithoutProductInput[]
      connectOrCreate?:
        | ReservationProductsCreateOrConnectWithoutProductInput
        | ReservationProductsCreateOrConnectWithoutProductInput[]
      createMany?: ReservationProductsCreateManyProductInputEnvelope
      connect?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
    }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType
  }

  export type ReservationProductsUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          ReservationProductsCreateWithoutProductInput,
          ReservationProductsUncheckedCreateWithoutProductInput
        >
      | ReservationProductsCreateWithoutProductInput[]
      | ReservationProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?:
      | ReservationProductsCreateOrConnectWithoutProductInput
      | ReservationProductsCreateOrConnectWithoutProductInput[]
    upsert?:
      | ReservationProductsUpsertWithWhereUniqueWithoutProductInput
      | ReservationProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReservationProductsCreateManyProductInputEnvelope
    set?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    disconnect?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    delete?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    connect?:
      | ReservationProductsWhereUniqueInput
      | ReservationProductsWhereUniqueInput[]
    update?:
      | ReservationProductsUpdateWithWhereUniqueWithoutProductInput
      | ReservationProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?:
      | ReservationProductsUpdateManyWithWhereWithoutProductInput
      | ReservationProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?:
      | ReservationProductsScalarWhereInput
      | ReservationProductsScalarWhereInput[]
  }

  export type ReservationProductsUncheckedUpdateManyWithoutProductNestedInput =
    {
      create?:
        | XOR<
            ReservationProductsCreateWithoutProductInput,
            ReservationProductsUncheckedCreateWithoutProductInput
          >
        | ReservationProductsCreateWithoutProductInput[]
        | ReservationProductsUncheckedCreateWithoutProductInput[]
      connectOrCreate?:
        | ReservationProductsCreateOrConnectWithoutProductInput
        | ReservationProductsCreateOrConnectWithoutProductInput[]
      upsert?:
        | ReservationProductsUpsertWithWhereUniqueWithoutProductInput
        | ReservationProductsUpsertWithWhereUniqueWithoutProductInput[]
      createMany?: ReservationProductsCreateManyProductInputEnvelope
      set?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      disconnect?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      delete?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      connect?:
        | ReservationProductsWhereUniqueInput
        | ReservationProductsWhereUniqueInput[]
      update?:
        | ReservationProductsUpdateWithWhereUniqueWithoutProductInput
        | ReservationProductsUpdateWithWhereUniqueWithoutProductInput[]
      updateMany?:
        | ReservationProductsUpdateManyWithWhereWithoutProductInput
        | ReservationProductsUpdateManyWithWhereWithoutProductInput[]
      deleteMany?:
        | ReservationProductsScalarWhereInput
        | ReservationProductsScalarWhereInput[]
    }

  export type ReservationsCreateNestedOneWithoutReservationProductsInput = {
    create?: XOR<
      ReservationsCreateWithoutReservationProductsInput,
      ReservationsUncheckedCreateWithoutReservationProductsInput
    >
    connectOrCreate?: ReservationsCreateOrConnectWithoutReservationProductsInput
    connect?: ReservationsWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutReservationProductsInput = {
    create?: XOR<
      ProductsCreateWithoutReservationProductsInput,
      ProductsUncheckedCreateWithoutReservationProductsInput
    >
    connectOrCreate?: ProductsCreateOrConnectWithoutReservationProductsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ReservationsUpdateOneRequiredWithoutReservationProductsNestedInput =
    {
      create?: XOR<
        ReservationsCreateWithoutReservationProductsInput,
        ReservationsUncheckedCreateWithoutReservationProductsInput
      >
      connectOrCreate?: ReservationsCreateOrConnectWithoutReservationProductsInput
      upsert?: ReservationsUpsertWithoutReservationProductsInput
      connect?: ReservationsWhereUniqueInput
      update?: XOR<
        XOR<
          ReservationsUpdateToOneWithWhereWithoutReservationProductsInput,
          ReservationsUpdateWithoutReservationProductsInput
        >,
        ReservationsUncheckedUpdateWithoutReservationProductsInput
      >
    }

  export type ProductsUpdateOneRequiredWithoutReservationProductsNestedInput = {
    create?: XOR<
      ProductsCreateWithoutReservationProductsInput,
      ProductsUncheckedCreateWithoutReservationProductsInput
    >
    connectOrCreate?: ProductsCreateOrConnectWithoutReservationProductsInput
    upsert?: ProductsUpsertWithoutReservationProductsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<
      XOR<
        ProductsUpdateToOneWithWhereWithoutReservationProductsInput,
        ProductsUpdateWithoutReservationProductsInput
      >,
      ProductsUncheckedUpdateWithoutReservationProductsInput
    >
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

  export type NestedEnumRESERVATION_STATUSFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.RESERVATION_STATUS
      | EnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    in?:
      | $Enums.RESERVATION_STATUS[]
      | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.RESERVATION_STATUS[]
      | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumRESERVATION_STATUSFilter<$PrismaModel>
      | $Enums.RESERVATION_STATUS
  }

  export type NestedEnumRESERVATION_STATUSWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.RESERVATION_STATUS
      | EnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    in?:
      | $Enums.RESERVATION_STATUS[]
      | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.RESERVATION_STATUS[]
      | ListEnumRESERVATION_STATUSFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumRESERVATION_STATUSWithAggregatesFilter<$PrismaModel>
      | $Enums.RESERVATION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRESERVATION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumRESERVATION_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.ProductType[]
      | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
      in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
      notIn?:
        | $Enums.ProductType[]
        | ListEnumProductTypeFieldRefInput<$PrismaModel>
      not?:
        | NestedEnumProductTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.ProductType
      _count?: NestedIntFilter<$PrismaModel>
      _min?: NestedEnumProductTypeFilter<$PrismaModel>
      _max?: NestedEnumProductTypeFilter<$PrismaModel>
    }

  export type ReservationsCreateWithoutUserInput = {
    id?: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    clients: ClientsCreateNestedOneWithoutReservationsInput
    ReservationProducts?: ReservationProductsCreateNestedManyWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateWithoutUserInput = {
    id?: string
    client_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ReservationProducts?: ReservationProductsUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationsCreateOrConnectWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<
      ReservationsCreateWithoutUserInput,
      ReservationsUncheckedCreateWithoutUserInput
    >
  }

  export type ReservationsCreateManyUserInputEnvelope = {
    data: ReservationsCreateManyUserInput | ReservationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<
      ReservationsUpdateWithoutUserInput,
      ReservationsUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      ReservationsCreateWithoutUserInput,
      ReservationsUncheckedCreateWithoutUserInput
    >
  }

  export type ReservationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<
      ReservationsUpdateWithoutUserInput,
      ReservationsUncheckedUpdateWithoutUserInput
    >
  }

  export type ReservationsUpdateManyWithWhereWithoutUserInput = {
    where: ReservationsScalarWhereInput
    data: XOR<
      ReservationsUpdateManyMutationInput,
      ReservationsUncheckedUpdateManyWithoutUserInput
    >
  }

  export type ReservationsScalarWhereInput = {
    AND?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    OR?: ReservationsScalarWhereInput[]
    NOT?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    id?: StringFilter<'Reservations'> | string
    client_id?: StringFilter<'Reservations'> | string
    user_id?: StringFilter<'Reservations'> | string
    status?:
      | EnumRESERVATION_STATUSFilter<'Reservations'>
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFilter<'Reservations'> | Date | string
    created_at?: DateTimeFilter<'Reservations'> | Date | string
    updated_at?: DateTimeFilter<'Reservations'> | Date | string
  }

  export type AddressCreateWithoutClientInput = {
    id?: string
    city: string
    neighborhood: string
    state: string
    number: number
    country: string
    street: string
    postal_code: string
    complement: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressUncheckedCreateWithoutClientInput = {
    id?: string
    city: string
    neighborhood: string
    state: string
    number: number
    country: string
    street: string
    postal_code: string
    complement: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressCreateOrConnectWithoutClientInput = {
    where: AddressWhereUniqueInput
    create: XOR<
      AddressCreateWithoutClientInput,
      AddressUncheckedCreateWithoutClientInput
    >
  }

  export type ReservationsCreateWithoutClientsInput = {
    id?: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    ReservationProducts?: ReservationProductsCreateNestedManyWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateWithoutClientsInput = {
    id?: string
    user_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    ReservationProducts?: ReservationProductsUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationsCreateOrConnectWithoutClientsInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<
      ReservationsCreateWithoutClientsInput,
      ReservationsUncheckedCreateWithoutClientsInput
    >
  }

  export type ReservationsCreateManyClientsInputEnvelope = {
    data:
      | ReservationsCreateManyClientsInput
      | ReservationsCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutClientInput = {
    update: XOR<
      AddressUpdateWithoutClientInput,
      AddressUncheckedUpdateWithoutClientInput
    >
    create: XOR<
      AddressCreateWithoutClientInput,
      AddressUncheckedCreateWithoutClientInput
    >
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutClientInput = {
    where?: AddressWhereInput
    data: XOR<
      AddressUpdateWithoutClientInput,
      AddressUncheckedUpdateWithoutClientInput
    >
  }

  export type AddressUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUpsertWithWhereUniqueWithoutClientsInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<
      ReservationsUpdateWithoutClientsInput,
      ReservationsUncheckedUpdateWithoutClientsInput
    >
    create: XOR<
      ReservationsCreateWithoutClientsInput,
      ReservationsUncheckedCreateWithoutClientsInput
    >
  }

  export type ReservationsUpdateWithWhereUniqueWithoutClientsInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<
      ReservationsUpdateWithoutClientsInput,
      ReservationsUncheckedUpdateWithoutClientsInput
    >
  }

  export type ReservationsUpdateManyWithWhereWithoutClientsInput = {
    where: ReservationsScalarWhereInput
    data: XOR<
      ReservationsUpdateManyMutationInput,
      ReservationsUncheckedUpdateManyWithoutClientsInput
    >
  }

  export type ClientsCreateWithoutAddressInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    Reservations?: ReservationsCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    Reservations?: ReservationsUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutAddressInput = {
    where: ClientsWhereUniqueInput
    create: XOR<
      ClientsCreateWithoutAddressInput,
      ClientsUncheckedCreateWithoutAddressInput
    >
  }

  export type ClientsUpsertWithoutAddressInput = {
    update: XOR<
      ClientsUpdateWithoutAddressInput,
      ClientsUncheckedUpdateWithoutAddressInput
    >
    create: XOR<
      ClientsCreateWithoutAddressInput,
      ClientsUncheckedCreateWithoutAddressInput
    >
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutAddressInput = {
    where?: ClientsWhereInput
    data: XOR<
      ClientsUpdateWithoutAddressInput,
      ClientsUncheckedUpdateWithoutAddressInput
    >
  }

  export type ClientsUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservations?: ReservationsUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservations?: ReservationsUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateWithoutReservationsInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressCreateNestedOneWithoutClientInput
  }

  export type ClientsUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutClientInput
  }

  export type ClientsCreateOrConnectWithoutReservationsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<
      ClientsCreateWithoutReservationsInput,
      ClientsUncheckedCreateWithoutReservationsInput
    >
  }

  export type UserCreateWithoutReservationsInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    email: string
    password: string
    cpf?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutReservationsInput,
      UserUncheckedCreateWithoutReservationsInput
    >
  }

  export type ReservationProductsCreateWithoutReservationsInput = {
    id?: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutReservationProductsInput
  }

  export type ReservationProductsUncheckedCreateWithoutReservationsInput = {
    id?: string
    product_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationProductsCreateOrConnectWithoutReservationsInput = {
    where: ReservationProductsWhereUniqueInput
    create: XOR<
      ReservationProductsCreateWithoutReservationsInput,
      ReservationProductsUncheckedCreateWithoutReservationsInput
    >
  }

  export type ReservationProductsCreateManyReservationsInputEnvelope = {
    data:
      | ReservationProductsCreateManyReservationsInput
      | ReservationProductsCreateManyReservationsInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithoutReservationsInput = {
    update: XOR<
      ClientsUpdateWithoutReservationsInput,
      ClientsUncheckedUpdateWithoutReservationsInput
    >
    create: XOR<
      ClientsCreateWithoutReservationsInput,
      ClientsUncheckedCreateWithoutReservationsInput
    >
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ClientsWhereInput
    data: XOR<
      ClientsUpdateWithoutReservationsInput,
      ClientsUncheckedUpdateWithoutReservationsInput
    >
  }

  export type ClientsUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutClientNestedInput
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<
      UserUpdateWithoutReservationsInput,
      UserUncheckedUpdateWithoutReservationsInput
    >
    create: XOR<
      UserCreateWithoutReservationsInput,
      UserUncheckedCreateWithoutReservationsInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutReservationsInput,
      UserUncheckedUpdateWithoutReservationsInput
    >
  }

  export type UserUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsUpsertWithWhereUniqueWithoutReservationsInput =
    {
      where: ReservationProductsWhereUniqueInput
      update: XOR<
        ReservationProductsUpdateWithoutReservationsInput,
        ReservationProductsUncheckedUpdateWithoutReservationsInput
      >
      create: XOR<
        ReservationProductsCreateWithoutReservationsInput,
        ReservationProductsUncheckedCreateWithoutReservationsInput
      >
    }

  export type ReservationProductsUpdateWithWhereUniqueWithoutReservationsInput =
    {
      where: ReservationProductsWhereUniqueInput
      data: XOR<
        ReservationProductsUpdateWithoutReservationsInput,
        ReservationProductsUncheckedUpdateWithoutReservationsInput
      >
    }

  export type ReservationProductsUpdateManyWithWhereWithoutReservationsInput = {
    where: ReservationProductsScalarWhereInput
    data: XOR<
      ReservationProductsUpdateManyMutationInput,
      ReservationProductsUncheckedUpdateManyWithoutReservationsInput
    >
  }

  export type ReservationProductsScalarWhereInput = {
    AND?:
      | ReservationProductsScalarWhereInput
      | ReservationProductsScalarWhereInput[]
    OR?: ReservationProductsScalarWhereInput[]
    NOT?:
      | ReservationProductsScalarWhereInput
      | ReservationProductsScalarWhereInput[]
    id?: StringFilter<'ReservationProducts'> | string
    reservation_id?: StringFilter<'ReservationProducts'> | string
    product_id?: StringFilter<'ReservationProducts'> | string
    quantity?: IntFilter<'ReservationProducts'> | number
    unit_price?: FloatFilter<'ReservationProducts'> | number
    total_price?: FloatFilter<'ReservationProducts'> | number
    created_at?: DateTimeFilter<'ReservationProducts'> | Date | string
    updated_at?: DateTimeFilter<'ReservationProducts'> | Date | string
  }

  export type ReservationProductsCreateWithoutProductInput = {
    id?: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
    reservations: ReservationsCreateNestedOneWithoutReservationProductsInput
  }

  export type ReservationProductsUncheckedCreateWithoutProductInput = {
    id?: string
    reservation_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationProductsCreateOrConnectWithoutProductInput = {
    where: ReservationProductsWhereUniqueInput
    create: XOR<
      ReservationProductsCreateWithoutProductInput,
      ReservationProductsUncheckedCreateWithoutProductInput
    >
  }

  export type ReservationProductsCreateManyProductInputEnvelope = {
    data:
      | ReservationProductsCreateManyProductInput
      | ReservationProductsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ReservationProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: ReservationProductsWhereUniqueInput
    update: XOR<
      ReservationProductsUpdateWithoutProductInput,
      ReservationProductsUncheckedUpdateWithoutProductInput
    >
    create: XOR<
      ReservationProductsCreateWithoutProductInput,
      ReservationProductsUncheckedCreateWithoutProductInput
    >
  }

  export type ReservationProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: ReservationProductsWhereUniqueInput
    data: XOR<
      ReservationProductsUpdateWithoutProductInput,
      ReservationProductsUncheckedUpdateWithoutProductInput
    >
  }

  export type ReservationProductsUpdateManyWithWhereWithoutProductInput = {
    where: ReservationProductsScalarWhereInput
    data: XOR<
      ReservationProductsUpdateManyMutationInput,
      ReservationProductsUncheckedUpdateManyWithoutProductInput
    >
  }

  export type ReservationsCreateWithoutReservationProductsInput = {
    id?: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    clients: ClientsCreateNestedOneWithoutReservationsInput
    user: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateWithoutReservationProductsInput = {
    id?: string
    client_id: string
    user_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationsCreateOrConnectWithoutReservationProductsInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<
      ReservationsCreateWithoutReservationProductsInput,
      ReservationsUncheckedCreateWithoutReservationProductsInput
    >
  }

  export type ProductsCreateWithoutReservationProductsInput = {
    id?: string
    name: string
    quantity: number
    price: number
    type: $Enums.ProductType
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUncheckedCreateWithoutReservationProductsInput = {
    id?: string
    name: string
    quantity: number
    price: number
    type: $Enums.ProductType
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsCreateOrConnectWithoutReservationProductsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<
      ProductsCreateWithoutReservationProductsInput,
      ProductsUncheckedCreateWithoutReservationProductsInput
    >
  }

  export type ReservationsUpsertWithoutReservationProductsInput = {
    update: XOR<
      ReservationsUpdateWithoutReservationProductsInput,
      ReservationsUncheckedUpdateWithoutReservationProductsInput
    >
    create: XOR<
      ReservationsCreateWithoutReservationProductsInput,
      ReservationsUncheckedCreateWithoutReservationProductsInput
    >
    where?: ReservationsWhereInput
  }

  export type ReservationsUpdateToOneWithWhereWithoutReservationProductsInput =
    {
      where?: ReservationsWhereInput
      data: XOR<
        ReservationsUpdateWithoutReservationProductsInput,
        ReservationsUncheckedUpdateWithoutReservationProductsInput
      >
    }

  export type ReservationsUpdateWithoutReservationProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientsUpdateOneRequiredWithoutReservationsNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutReservationProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpsertWithoutReservationProductsInput = {
    update: XOR<
      ProductsUpdateWithoutReservationProductsInput,
      ProductsUncheckedUpdateWithoutReservationProductsInput
    >
    create: XOR<
      ProductsCreateWithoutReservationProductsInput,
      ProductsUncheckedCreateWithoutReservationProductsInput
    >
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutReservationProductsInput = {
    where?: ProductsWhereInput
    data: XOR<
      ProductsUpdateWithoutReservationProductsInput,
      ProductsUncheckedUpdateWithoutReservationProductsInput
    >
  }

  export type ProductsUpdateWithoutReservationProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateWithoutReservationProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsCreateManyUserInput = {
    id?: string
    client_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientsUpdateOneRequiredWithoutReservationsNestedInput
    ReservationProducts?: ReservationProductsUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ReservationProducts?: ReservationProductsUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsCreateManyClientsInput = {
    id?: string
    user_id: string
    status: $Enums.RESERVATION_STATUS
    reservation_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationsUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    ReservationProducts?: ReservationProductsUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ReservationProducts?: ReservationProductsUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?:
      | EnumRESERVATION_STATUSFieldUpdateOperationsInput
      | $Enums.RESERVATION_STATUS
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsCreateManyReservationsInput = {
    id?: string
    product_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationProductsUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutReservationProductsNestedInput
  }

  export type ReservationProductsUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsUncheckedUpdateManyWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsCreateManyProductInput = {
    id?: string
    reservation_id: string
    quantity: number
    unit_price: number
    total_price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservationProductsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUpdateOneRequiredWithoutReservationProductsNestedInput
  }

  export type ReservationProductsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservation_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationProductsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservation_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
