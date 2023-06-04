
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model dosen
 * 
 */
export type dosen = {
  nip: string
  nama: string
  tanggal_lahir: Date
  alamat: string
  kode_pos: number
  no_telp: string
  email: string
}

/**
 * Model kode_pos
 * 
 */
export type kode_pos = {
  kode_pos: number
  alamat_kecamatan: string
  alamat_kokab: string
  alamat_provinsi: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dosens
 * const dosens = await prisma.dosen.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dosens
   * const dosens = await prisma.dosen.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.dosen`: Exposes CRUD operations for the **dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.dosenDelegate<GlobalReject>;

  /**
   * `prisma.kode_pos`: Exposes CRUD operations for the **kode_pos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kode_pos
    * const kode_pos = await prisma.kode_pos.findMany()
    * ```
    */
  get kode_pos(): Prisma.kode_posDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    dosen: 'dosen',
    kode_pos: 'kode_pos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Kode_posCountOutputType
   */


  export type Kode_posCountOutputType = {
    dosen_dosen_kode_posTokode_pos: number
  }

  export type Kode_posCountOutputTypeSelect = {
    dosen_dosen_kode_posTokode_pos?: boolean
  }

  export type Kode_posCountOutputTypeGetPayload<S extends boolean | null | undefined | Kode_posCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Kode_posCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Kode_posCountOutputTypeArgs)
    ? Kode_posCountOutputType 
    : S extends { select: any } & (Kode_posCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Kode_posCountOutputType ? Kode_posCountOutputType[P] : never
  } 
      : Kode_posCountOutputType




  // Custom InputTypes

  /**
   * Kode_posCountOutputType without action
   */
  export type Kode_posCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Kode_posCountOutputType
     */
    select?: Kode_posCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model dosen
   */


  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenAvgAggregateOutputType = {
    kode_pos: number | null
  }

  export type DosenSumAggregateOutputType = {
    kode_pos: number | null
  }

  export type DosenMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    kode_pos: number | null
    no_telp: string | null
    email: string | null
  }

  export type DosenMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    kode_pos: number | null
    no_telp: string | null
    email: string | null
  }

  export type DosenCountAggregateOutputType = {
    nip: number
    nama: number
    tanggal_lahir: number
    alamat: number
    kode_pos: number
    no_telp: number
    email: number
    _all: number
  }


  export type DosenAvgAggregateInputType = {
    kode_pos?: true
  }

  export type DosenSumAggregateInputType = {
    kode_pos?: true
  }

  export type DosenMinAggregateInputType = {
    nip?: true
    nama?: true
    tanggal_lahir?: true
    alamat?: true
    kode_pos?: true
    no_telp?: true
    email?: true
  }

  export type DosenMaxAggregateInputType = {
    nip?: true
    nama?: true
    tanggal_lahir?: true
    alamat?: true
    kode_pos?: true
    no_telp?: true
    email?: true
  }

  export type DosenCountAggregateInputType = {
    nip?: true
    nama?: true
    tanggal_lahir?: true
    alamat?: true
    kode_pos?: true
    no_telp?: true
    email?: true
    _all?: true
  }

  export type DosenAggregateArgs = {
    /**
     * Filter which dosen to aggregate.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: Enumerable<dosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DosenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DosenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs = {
    where?: dosenWhereInput
    orderBy?: Enumerable<dosenOrderByWithAggregationInput>
    by: DosenScalarFieldEnum[]
    having?: dosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _avg?: DosenAvgAggregateInputType
    _sum?: DosenSumAggregateInputType
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }


  export type DosenGroupByOutputType = {
    nip: string
    nama: string
    tanggal_lahir: Date
    alamat: string
    kode_pos: number
    no_telp: string
    email: string
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type dosenSelect = {
    nip?: boolean
    nama?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    kode_pos?: boolean
    no_telp?: boolean
    email?: boolean
    kode_pos_dosen_kode_posTokode_pos?: boolean | kode_posArgs
  }


  export type dosenInclude = {
    kode_pos_dosen_kode_posTokode_pos?: boolean | kode_posArgs
  }

  export type dosenGetPayload<S extends boolean | null | undefined | dosenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dosen :
    S extends undefined ? never :
    S extends { include: any } & (dosenArgs | dosenFindManyArgs)
    ? dosen  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'kode_pos_dosen_kode_posTokode_pos' ? kode_posGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (dosenArgs | dosenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'kode_pos_dosen_kode_posTokode_pos' ? kode_posGetPayload<S['select'][P]> :  P extends keyof dosen ? dosen[P] : never
  } 
      : dosen


  type dosenCountArgs = 
    Omit<dosenFindManyArgs, 'select' | 'include'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface dosenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Dosen that matches the filter.
     * @param {dosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dosenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dosenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dosen'> extends True ? Prisma__dosenClient<dosenGetPayload<T>> : Prisma__dosenClient<dosenGetPayload<T> | null, null>

    /**
     * Find one Dosen that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dosenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dosenFindUniqueOrThrowArgs>
    ): Prisma__dosenClient<dosenGetPayload<T>>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dosenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dosenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dosen'> extends True ? Prisma__dosenClient<dosenGetPayload<T>> : Prisma__dosenClient<dosenGetPayload<T> | null, null>

    /**
     * Find the first Dosen that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dosenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dosenFindFirstOrThrowArgs>
    ): Prisma__dosenClient<dosenGetPayload<T>>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dosenWithNipOnly = await prisma.dosen.findMany({ select: { nip: true } })
     * 
    **/
    findMany<T extends dosenFindManyArgs>(
      args?: SelectSubset<T, dosenFindManyArgs>
    ): Prisma.PrismaPromise<Array<dosenGetPayload<T>>>

    /**
     * Create a Dosen.
     * @param {dosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
    **/
    create<T extends dosenCreateArgs>(
      args: SelectSubset<T, dosenCreateArgs>
    ): Prisma__dosenClient<dosenGetPayload<T>>

    /**
     * Create many Dosens.
     *     @param {dosenCreateManyArgs} args - Arguments to create many Dosens.
     *     @example
     *     // Create many Dosens
     *     const dosen = await prisma.dosen.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dosenCreateManyArgs>(
      args?: SelectSubset<T, dosenCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dosen.
     * @param {dosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
    **/
    delete<T extends dosenDeleteArgs>(
      args: SelectSubset<T, dosenDeleteArgs>
    ): Prisma__dosenClient<dosenGetPayload<T>>

    /**
     * Update one Dosen.
     * @param {dosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dosenUpdateArgs>(
      args: SelectSubset<T, dosenUpdateArgs>
    ): Prisma__dosenClient<dosenGetPayload<T>>

    /**
     * Delete zero or more Dosens.
     * @param {dosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dosenDeleteManyArgs>(
      args?: SelectSubset<T, dosenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dosenUpdateManyArgs>(
      args: SelectSubset<T, dosenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dosen.
     * @param {dosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
    **/
    upsert<T extends dosenUpsertArgs>(
      args: SelectSubset<T, dosenUpsertArgs>
    ): Prisma__dosenClient<dosenGetPayload<T>>

    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends dosenCountArgs>(
      args?: Subset<T, dosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
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
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dosenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    kode_pos_dosen_kode_posTokode_pos<T extends kode_posArgs= {}>(args?: Subset<T, kode_posArgs>): Prisma__kode_posClient<kode_posGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dosen base type for findUnique actions
   */
  export type dosenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findUnique
   */
  export interface dosenFindUniqueArgs extends dosenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dosen findUniqueOrThrow
   */
  export type dosenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }


  /**
   * dosen base type for findFirst actions
   */
  export type dosenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: Enumerable<dosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: Enumerable<DosenScalarFieldEnum>
  }

  /**
   * dosen findFirst
   */
  export interface dosenFindFirstArgs extends dosenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dosen findFirstOrThrow
   */
  export type dosenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: Enumerable<dosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: Enumerable<DosenScalarFieldEnum>
  }


  /**
   * dosen findMany
   */
  export type dosenFindManyArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * Filter, which dosens to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: Enumerable<dosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    distinct?: Enumerable<DosenScalarFieldEnum>
  }


  /**
   * dosen create
   */
  export type dosenCreateArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * The data needed to create a dosen.
     */
    data: XOR<dosenCreateInput, dosenUncheckedCreateInput>
  }


  /**
   * dosen createMany
   */
  export type dosenCreateManyArgs = {
    /**
     * The data used to create many dosens.
     */
    data: Enumerable<dosenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dosen update
   */
  export type dosenUpdateArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * The data needed to update a dosen.
     */
    data: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
    /**
     * Choose, which dosen to update.
     */
    where: dosenWhereUniqueInput
  }


  /**
   * dosen updateMany
   */
  export type dosenUpdateManyArgs = {
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
  }


  /**
   * dosen upsert
   */
  export type dosenUpsertArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * The filter to search for the dosen to update in case it exists.
     */
    where: dosenWhereUniqueInput
    /**
     * In case the dosen found by the `where` argument doesn't exist, create a new dosen with this data.
     */
    create: XOR<dosenCreateInput, dosenUncheckedCreateInput>
    /**
     * In case the dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
  }


  /**
   * dosen delete
   */
  export type dosenDeleteArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    /**
     * Filter which dosen to delete.
     */
    where: dosenWhereUniqueInput
  }


  /**
   * dosen deleteMany
   */
  export type dosenDeleteManyArgs = {
    /**
     * Filter which dosens to delete
     */
    where?: dosenWhereInput
  }


  /**
   * dosen without action
   */
  export type dosenArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
  }



  /**
   * Model kode_pos
   */


  export type AggregateKode_pos = {
    _count: Kode_posCountAggregateOutputType | null
    _avg: Kode_posAvgAggregateOutputType | null
    _sum: Kode_posSumAggregateOutputType | null
    _min: Kode_posMinAggregateOutputType | null
    _max: Kode_posMaxAggregateOutputType | null
  }

  export type Kode_posAvgAggregateOutputType = {
    kode_pos: number | null
  }

  export type Kode_posSumAggregateOutputType = {
    kode_pos: number | null
  }

  export type Kode_posMinAggregateOutputType = {
    kode_pos: number | null
    alamat_kecamatan: string | null
    alamat_kokab: string | null
    alamat_provinsi: string | null
  }

  export type Kode_posMaxAggregateOutputType = {
    kode_pos: number | null
    alamat_kecamatan: string | null
    alamat_kokab: string | null
    alamat_provinsi: string | null
  }

  export type Kode_posCountAggregateOutputType = {
    kode_pos: number
    alamat_kecamatan: number
    alamat_kokab: number
    alamat_provinsi: number
    _all: number
  }


  export type Kode_posAvgAggregateInputType = {
    kode_pos?: true
  }

  export type Kode_posSumAggregateInputType = {
    kode_pos?: true
  }

  export type Kode_posMinAggregateInputType = {
    kode_pos?: true
    alamat_kecamatan?: true
    alamat_kokab?: true
    alamat_provinsi?: true
  }

  export type Kode_posMaxAggregateInputType = {
    kode_pos?: true
    alamat_kecamatan?: true
    alamat_kokab?: true
    alamat_provinsi?: true
  }

  export type Kode_posCountAggregateInputType = {
    kode_pos?: true
    alamat_kecamatan?: true
    alamat_kokab?: true
    alamat_provinsi?: true
    _all?: true
  }

  export type Kode_posAggregateArgs = {
    /**
     * Filter which kode_pos to aggregate.
     */
    where?: kode_posWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_pos to fetch.
     */
    orderBy?: Enumerable<kode_posOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kode_posWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_pos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kode_pos
    **/
    _count?: true | Kode_posCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Kode_posAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Kode_posSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Kode_posMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Kode_posMaxAggregateInputType
  }

  export type GetKode_posAggregateType<T extends Kode_posAggregateArgs> = {
        [P in keyof T & keyof AggregateKode_pos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKode_pos[P]>
      : GetScalarType<T[P], AggregateKode_pos[P]>
  }




  export type Kode_posGroupByArgs = {
    where?: kode_posWhereInput
    orderBy?: Enumerable<kode_posOrderByWithAggregationInput>
    by: Kode_posScalarFieldEnum[]
    having?: kode_posScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Kode_posCountAggregateInputType | true
    _avg?: Kode_posAvgAggregateInputType
    _sum?: Kode_posSumAggregateInputType
    _min?: Kode_posMinAggregateInputType
    _max?: Kode_posMaxAggregateInputType
  }


  export type Kode_posGroupByOutputType = {
    kode_pos: number
    alamat_kecamatan: string
    alamat_kokab: string
    alamat_provinsi: string
    _count: Kode_posCountAggregateOutputType | null
    _avg: Kode_posAvgAggregateOutputType | null
    _sum: Kode_posSumAggregateOutputType | null
    _min: Kode_posMinAggregateOutputType | null
    _max: Kode_posMaxAggregateOutputType | null
  }

  type GetKode_posGroupByPayload<T extends Kode_posGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Kode_posGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Kode_posGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Kode_posGroupByOutputType[P]>
            : GetScalarType<T[P], Kode_posGroupByOutputType[P]>
        }
      >
    >


  export type kode_posSelect = {
    kode_pos?: boolean
    alamat_kecamatan?: boolean
    alamat_kokab?: boolean
    alamat_provinsi?: boolean
    dosen_dosen_kode_posTokode_pos?: boolean | kode_pos$dosen_dosen_kode_posTokode_posArgs
    _count?: boolean | Kode_posCountOutputTypeArgs
  }


  export type kode_posInclude = {
    dosen_dosen_kode_posTokode_pos?: boolean | kode_pos$dosen_dosen_kode_posTokode_posArgs
    _count?: boolean | Kode_posCountOutputTypeArgs
  }

  export type kode_posGetPayload<S extends boolean | null | undefined | kode_posArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? kode_pos :
    S extends undefined ? never :
    S extends { include: any } & (kode_posArgs | kode_posFindManyArgs)
    ? kode_pos  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dosen_dosen_kode_posTokode_pos' ? Array < dosenGetPayload<S['include'][P]>>  :
        P extends '_count' ? Kode_posCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (kode_posArgs | kode_posFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dosen_dosen_kode_posTokode_pos' ? Array < dosenGetPayload<S['select'][P]>>  :
        P extends '_count' ? Kode_posCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof kode_pos ? kode_pos[P] : never
  } 
      : kode_pos


  type kode_posCountArgs = 
    Omit<kode_posFindManyArgs, 'select' | 'include'> & {
      select?: Kode_posCountAggregateInputType | true
    }

  export interface kode_posDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Kode_pos that matches the filter.
     * @param {kode_posFindUniqueArgs} args - Arguments to find a Kode_pos
     * @example
     * // Get one Kode_pos
     * const kode_pos = await prisma.kode_pos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends kode_posFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, kode_posFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'kode_pos'> extends True ? Prisma__kode_posClient<kode_posGetPayload<T>> : Prisma__kode_posClient<kode_posGetPayload<T> | null, null>

    /**
     * Find one Kode_pos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {kode_posFindUniqueOrThrowArgs} args - Arguments to find a Kode_pos
     * @example
     * // Get one Kode_pos
     * const kode_pos = await prisma.kode_pos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends kode_posFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, kode_posFindUniqueOrThrowArgs>
    ): Prisma__kode_posClient<kode_posGetPayload<T>>

    /**
     * Find the first Kode_pos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_posFindFirstArgs} args - Arguments to find a Kode_pos
     * @example
     * // Get one Kode_pos
     * const kode_pos = await prisma.kode_pos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends kode_posFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, kode_posFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'kode_pos'> extends True ? Prisma__kode_posClient<kode_posGetPayload<T>> : Prisma__kode_posClient<kode_posGetPayload<T> | null, null>

    /**
     * Find the first Kode_pos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_posFindFirstOrThrowArgs} args - Arguments to find a Kode_pos
     * @example
     * // Get one Kode_pos
     * const kode_pos = await prisma.kode_pos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends kode_posFindFirstOrThrowArgs>(
      args?: SelectSubset<T, kode_posFindFirstOrThrowArgs>
    ): Prisma__kode_posClient<kode_posGetPayload<T>>

    /**
     * Find zero or more Kode_pos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_posFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kode_pos
     * const kode_pos = await prisma.kode_pos.findMany()
     * 
     * // Get first 10 Kode_pos
     * const kode_pos = await prisma.kode_pos.findMany({ take: 10 })
     * 
     * // Only select the `kode_pos`
     * const kode_posWithKode_posOnly = await prisma.kode_pos.findMany({ select: { kode_pos: true } })
     * 
    **/
    findMany<T extends kode_posFindManyArgs>(
      args?: SelectSubset<T, kode_posFindManyArgs>
    ): Prisma.PrismaPromise<Array<kode_posGetPayload<T>>>

    /**
     * Create a Kode_pos.
     * @param {kode_posCreateArgs} args - Arguments to create a Kode_pos.
     * @example
     * // Create one Kode_pos
     * const Kode_pos = await prisma.kode_pos.create({
     *   data: {
     *     // ... data to create a Kode_pos
     *   }
     * })
     * 
    **/
    create<T extends kode_posCreateArgs>(
      args: SelectSubset<T, kode_posCreateArgs>
    ): Prisma__kode_posClient<kode_posGetPayload<T>>

    /**
     * Create many Kode_pos.
     *     @param {kode_posCreateManyArgs} args - Arguments to create many Kode_pos.
     *     @example
     *     // Create many Kode_pos
     *     const kode_pos = await prisma.kode_pos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends kode_posCreateManyArgs>(
      args?: SelectSubset<T, kode_posCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kode_pos.
     * @param {kode_posDeleteArgs} args - Arguments to delete one Kode_pos.
     * @example
     * // Delete one Kode_pos
     * const Kode_pos = await prisma.kode_pos.delete({
     *   where: {
     *     // ... filter to delete one Kode_pos
     *   }
     * })
     * 
    **/
    delete<T extends kode_posDeleteArgs>(
      args: SelectSubset<T, kode_posDeleteArgs>
    ): Prisma__kode_posClient<kode_posGetPayload<T>>

    /**
     * Update one Kode_pos.
     * @param {kode_posUpdateArgs} args - Arguments to update one Kode_pos.
     * @example
     * // Update one Kode_pos
     * const kode_pos = await prisma.kode_pos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends kode_posUpdateArgs>(
      args: SelectSubset<T, kode_posUpdateArgs>
    ): Prisma__kode_posClient<kode_posGetPayload<T>>

    /**
     * Delete zero or more Kode_pos.
     * @param {kode_posDeleteManyArgs} args - Arguments to filter Kode_pos to delete.
     * @example
     * // Delete a few Kode_pos
     * const { count } = await prisma.kode_pos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends kode_posDeleteManyArgs>(
      args?: SelectSubset<T, kode_posDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kode_pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_posUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kode_pos
     * const kode_pos = await prisma.kode_pos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends kode_posUpdateManyArgs>(
      args: SelectSubset<T, kode_posUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kode_pos.
     * @param {kode_posUpsertArgs} args - Arguments to update or create a Kode_pos.
     * @example
     * // Update or create a Kode_pos
     * const kode_pos = await prisma.kode_pos.upsert({
     *   create: {
     *     // ... data to create a Kode_pos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kode_pos we want to update
     *   }
     * })
    **/
    upsert<T extends kode_posUpsertArgs>(
      args: SelectSubset<T, kode_posUpsertArgs>
    ): Prisma__kode_posClient<kode_posGetPayload<T>>

    /**
     * Count the number of Kode_pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_posCountArgs} args - Arguments to filter Kode_pos to count.
     * @example
     * // Count the number of Kode_pos
     * const count = await prisma.kode_pos.count({
     *   where: {
     *     // ... the filter for the Kode_pos we want to count
     *   }
     * })
    **/
    count<T extends kode_posCountArgs>(
      args?: Subset<T, kode_posCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Kode_posCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kode_pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kode_posAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Kode_posAggregateArgs>(args: Subset<T, Kode_posAggregateArgs>): Prisma.PrismaPromise<GetKode_posAggregateType<T>>

    /**
     * Group by Kode_pos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kode_posGroupByArgs} args - Group by arguments.
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
      T extends Kode_posGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Kode_posGroupByArgs['orderBy'] }
        : { orderBy?: Kode_posGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Kode_posGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKode_posGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for kode_pos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__kode_posClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dosen_dosen_kode_posTokode_pos<T extends kode_pos$dosen_dosen_kode_posTokode_posArgs= {}>(args?: Subset<T, kode_pos$dosen_dosen_kode_posTokode_posArgs>): Prisma.PrismaPromise<Array<dosenGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * kode_pos base type for findUnique actions
   */
  export type kode_posFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * Filter, which kode_pos to fetch.
     */
    where: kode_posWhereUniqueInput
  }

  /**
   * kode_pos findUnique
   */
  export interface kode_posFindUniqueArgs extends kode_posFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * kode_pos findUniqueOrThrow
   */
  export type kode_posFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * Filter, which kode_pos to fetch.
     */
    where: kode_posWhereUniqueInput
  }


  /**
   * kode_pos base type for findFirst actions
   */
  export type kode_posFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * Filter, which kode_pos to fetch.
     */
    where?: kode_posWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_pos to fetch.
     */
    orderBy?: Enumerable<kode_posOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kode_pos.
     */
    cursor?: kode_posWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_pos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kode_pos.
     */
    distinct?: Enumerable<Kode_posScalarFieldEnum>
  }

  /**
   * kode_pos findFirst
   */
  export interface kode_posFindFirstArgs extends kode_posFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * kode_pos findFirstOrThrow
   */
  export type kode_posFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * Filter, which kode_pos to fetch.
     */
    where?: kode_posWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_pos to fetch.
     */
    orderBy?: Enumerable<kode_posOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kode_pos.
     */
    cursor?: kode_posWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_pos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kode_pos.
     */
    distinct?: Enumerable<Kode_posScalarFieldEnum>
  }


  /**
   * kode_pos findMany
   */
  export type kode_posFindManyArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * Filter, which kode_pos to fetch.
     */
    where?: kode_posWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_pos to fetch.
     */
    orderBy?: Enumerable<kode_posOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kode_pos.
     */
    cursor?: kode_posWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_pos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_pos.
     */
    skip?: number
    distinct?: Enumerable<Kode_posScalarFieldEnum>
  }


  /**
   * kode_pos create
   */
  export type kode_posCreateArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * The data needed to create a kode_pos.
     */
    data: XOR<kode_posCreateInput, kode_posUncheckedCreateInput>
  }


  /**
   * kode_pos createMany
   */
  export type kode_posCreateManyArgs = {
    /**
     * The data used to create many kode_pos.
     */
    data: Enumerable<kode_posCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * kode_pos update
   */
  export type kode_posUpdateArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * The data needed to update a kode_pos.
     */
    data: XOR<kode_posUpdateInput, kode_posUncheckedUpdateInput>
    /**
     * Choose, which kode_pos to update.
     */
    where: kode_posWhereUniqueInput
  }


  /**
   * kode_pos updateMany
   */
  export type kode_posUpdateManyArgs = {
    /**
     * The data used to update kode_pos.
     */
    data: XOR<kode_posUpdateManyMutationInput, kode_posUncheckedUpdateManyInput>
    /**
     * Filter which kode_pos to update
     */
    where?: kode_posWhereInput
  }


  /**
   * kode_pos upsert
   */
  export type kode_posUpsertArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * The filter to search for the kode_pos to update in case it exists.
     */
    where: kode_posWhereUniqueInput
    /**
     * In case the kode_pos found by the `where` argument doesn't exist, create a new kode_pos with this data.
     */
    create: XOR<kode_posCreateInput, kode_posUncheckedCreateInput>
    /**
     * In case the kode_pos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kode_posUpdateInput, kode_posUncheckedUpdateInput>
  }


  /**
   * kode_pos delete
   */
  export type kode_posDeleteArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
    /**
     * Filter which kode_pos to delete.
     */
    where: kode_posWhereUniqueInput
  }


  /**
   * kode_pos deleteMany
   */
  export type kode_posDeleteManyArgs = {
    /**
     * Filter which kode_pos to delete
     */
    where?: kode_posWhereInput
  }


  /**
   * kode_pos.dosen_dosen_kode_posTokode_pos
   */
  export type kode_pos$dosen_dosen_kode_posTokode_posArgs = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dosenInclude | null
    where?: dosenWhereInput
    orderBy?: Enumerable<dosenOrderByWithRelationInput>
    cursor?: dosenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DosenScalarFieldEnum>
  }


  /**
   * kode_pos without action
   */
  export type kode_posArgs = {
    /**
     * Select specific fields to fetch from the kode_pos
     */
    select?: kode_posSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: kode_posInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DosenScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    tanggal_lahir: 'tanggal_lahir',
    alamat: 'alamat',
    kode_pos: 'kode_pos',
    no_telp: 'no_telp',
    email: 'email'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const Kode_posScalarFieldEnum: {
    kode_pos: 'kode_pos',
    alamat_kecamatan: 'alamat_kecamatan',
    alamat_kokab: 'alamat_kokab',
    alamat_provinsi: 'alamat_provinsi'
  };

  export type Kode_posScalarFieldEnum = (typeof Kode_posScalarFieldEnum)[keyof typeof Kode_posScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type dosenWhereInput = {
    AND?: Enumerable<dosenWhereInput>
    OR?: Enumerable<dosenWhereInput>
    NOT?: Enumerable<dosenWhereInput>
    nip?: StringFilter | string
    nama?: StringFilter | string
    tanggal_lahir?: DateTimeFilter | Date | string
    alamat?: StringFilter | string
    kode_pos?: IntFilter | number
    no_telp?: StringFilter | string
    email?: StringFilter | string
    kode_pos_dosen_kode_posTokode_pos?: XOR<Kode_posRelationFilter, kode_posWhereInput>
  }

  export type dosenOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    kode_pos_dosen_kode_posTokode_pos?: kode_posOrderByWithRelationInput
  }

  export type dosenWhereUniqueInput = {
    nip?: string
  }

  export type dosenOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    _count?: dosenCountOrderByAggregateInput
    _avg?: dosenAvgOrderByAggregateInput
    _max?: dosenMaxOrderByAggregateInput
    _min?: dosenMinOrderByAggregateInput
    _sum?: dosenSumOrderByAggregateInput
  }

  export type dosenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dosenScalarWhereWithAggregatesInput>
    OR?: Enumerable<dosenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dosenScalarWhereWithAggregatesInput>
    nip?: StringWithAggregatesFilter | string
    nama?: StringWithAggregatesFilter | string
    tanggal_lahir?: DateTimeWithAggregatesFilter | Date | string
    alamat?: StringWithAggregatesFilter | string
    kode_pos?: IntWithAggregatesFilter | number
    no_telp?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
  }

  export type kode_posWhereInput = {
    AND?: Enumerable<kode_posWhereInput>
    OR?: Enumerable<kode_posWhereInput>
    NOT?: Enumerable<kode_posWhereInput>
    kode_pos?: IntFilter | number
    alamat_kecamatan?: StringFilter | string
    alamat_kokab?: StringFilter | string
    alamat_provinsi?: StringFilter | string
    dosen_dosen_kode_posTokode_pos?: DosenListRelationFilter
  }

  export type kode_posOrderByWithRelationInput = {
    kode_pos?: SortOrder
    alamat_kecamatan?: SortOrder
    alamat_kokab?: SortOrder
    alamat_provinsi?: SortOrder
    dosen_dosen_kode_posTokode_pos?: dosenOrderByRelationAggregateInput
  }

  export type kode_posWhereUniqueInput = {
    kode_pos?: number
  }

  export type kode_posOrderByWithAggregationInput = {
    kode_pos?: SortOrder
    alamat_kecamatan?: SortOrder
    alamat_kokab?: SortOrder
    alamat_provinsi?: SortOrder
    _count?: kode_posCountOrderByAggregateInput
    _avg?: kode_posAvgOrderByAggregateInput
    _max?: kode_posMaxOrderByAggregateInput
    _min?: kode_posMinOrderByAggregateInput
    _sum?: kode_posSumOrderByAggregateInput
  }

  export type kode_posScalarWhereWithAggregatesInput = {
    AND?: Enumerable<kode_posScalarWhereWithAggregatesInput>
    OR?: Enumerable<kode_posScalarWhereWithAggregatesInput>
    NOT?: Enumerable<kode_posScalarWhereWithAggregatesInput>
    kode_pos?: IntWithAggregatesFilter | number
    alamat_kecamatan?: StringWithAggregatesFilter | string
    alamat_kokab?: StringWithAggregatesFilter | string
    alamat_provinsi?: StringWithAggregatesFilter | string
  }

  export type dosenCreateInput = {
    nip: string
    nama: string
    tanggal_lahir: Date | string
    alamat: string
    no_telp: string
    email: string
    kode_pos_dosen_kode_posTokode_pos: kode_posCreateNestedOneWithoutDosen_dosen_kode_posTokode_posInput
  }

  export type dosenUncheckedCreateInput = {
    nip: string
    nama: string
    tanggal_lahir: Date | string
    alamat: string
    kode_pos: number
    no_telp: string
    email: string
  }

  export type dosenUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kode_pos_dosen_kode_posTokode_pos?: kode_posUpdateOneRequiredWithoutDosen_dosen_kode_posTokode_posNestedInput
  }

  export type dosenUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: IntFieldUpdateOperationsInput | number
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type dosenCreateManyInput = {
    nip: string
    nama: string
    tanggal_lahir: Date | string
    alamat: string
    kode_pos: number
    no_telp: string
    email: string
  }

  export type dosenUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: IntFieldUpdateOperationsInput | number
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type kode_posCreateInput = {
    kode_pos: number
    alamat_kecamatan: string
    alamat_kokab: string
    alamat_provinsi: string
    dosen_dosen_kode_posTokode_pos?: dosenCreateNestedManyWithoutKode_pos_dosen_kode_posTokode_posInput
  }

  export type kode_posUncheckedCreateInput = {
    kode_pos: number
    alamat_kecamatan: string
    alamat_kokab: string
    alamat_provinsi: string
    dosen_dosen_kode_posTokode_pos?: dosenUncheckedCreateNestedManyWithoutKode_pos_dosen_kode_posTokode_posInput
  }

  export type kode_posUpdateInput = {
    kode_pos?: IntFieldUpdateOperationsInput | number
    alamat_kecamatan?: StringFieldUpdateOperationsInput | string
    alamat_kokab?: StringFieldUpdateOperationsInput | string
    alamat_provinsi?: StringFieldUpdateOperationsInput | string
    dosen_dosen_kode_posTokode_pos?: dosenUpdateManyWithoutKode_pos_dosen_kode_posTokode_posNestedInput
  }

  export type kode_posUncheckedUpdateInput = {
    kode_pos?: IntFieldUpdateOperationsInput | number
    alamat_kecamatan?: StringFieldUpdateOperationsInput | string
    alamat_kokab?: StringFieldUpdateOperationsInput | string
    alamat_provinsi?: StringFieldUpdateOperationsInput | string
    dosen_dosen_kode_posTokode_pos?: dosenUncheckedUpdateManyWithoutKode_pos_dosen_kode_posTokode_posNestedInput
  }

  export type kode_posCreateManyInput = {
    kode_pos: number
    alamat_kecamatan: string
    alamat_kokab: string
    alamat_provinsi: string
  }

  export type kode_posUpdateManyMutationInput = {
    kode_pos?: IntFieldUpdateOperationsInput | number
    alamat_kecamatan?: StringFieldUpdateOperationsInput | string
    alamat_kokab?: StringFieldUpdateOperationsInput | string
    alamat_provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type kode_posUncheckedUpdateManyInput = {
    kode_pos?: IntFieldUpdateOperationsInput | number
    alamat_kecamatan?: StringFieldUpdateOperationsInput | string
    alamat_kokab?: StringFieldUpdateOperationsInput | string
    alamat_provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type Kode_posRelationFilter = {
    is?: kode_posWhereInput
    isNot?: kode_posWhereInput
  }

  export type dosenCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
  }

  export type dosenAvgOrderByAggregateInput = {
    kode_pos?: SortOrder
  }

  export type dosenMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
  }

  export type dosenMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
  }

  export type dosenSumOrderByAggregateInput = {
    kode_pos?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DosenListRelationFilter = {
    every?: dosenWhereInput
    some?: dosenWhereInput
    none?: dosenWhereInput
  }

  export type dosenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kode_posCountOrderByAggregateInput = {
    kode_pos?: SortOrder
    alamat_kecamatan?: SortOrder
    alamat_kokab?: SortOrder
    alamat_provinsi?: SortOrder
  }

  export type kode_posAvgOrderByAggregateInput = {
    kode_pos?: SortOrder
  }

  export type kode_posMaxOrderByAggregateInput = {
    kode_pos?: SortOrder
    alamat_kecamatan?: SortOrder
    alamat_kokab?: SortOrder
    alamat_provinsi?: SortOrder
  }

  export type kode_posMinOrderByAggregateInput = {
    kode_pos?: SortOrder
    alamat_kecamatan?: SortOrder
    alamat_kokab?: SortOrder
    alamat_provinsi?: SortOrder
  }

  export type kode_posSumOrderByAggregateInput = {
    kode_pos?: SortOrder
  }

  export type kode_posCreateNestedOneWithoutDosen_dosen_kode_posTokode_posInput = {
    create?: XOR<kode_posCreateWithoutDosen_dosen_kode_posTokode_posInput, kode_posUncheckedCreateWithoutDosen_dosen_kode_posTokode_posInput>
    connectOrCreate?: kode_posCreateOrConnectWithoutDosen_dosen_kode_posTokode_posInput
    connect?: kode_posWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type kode_posUpdateOneRequiredWithoutDosen_dosen_kode_posTokode_posNestedInput = {
    create?: XOR<kode_posCreateWithoutDosen_dosen_kode_posTokode_posInput, kode_posUncheckedCreateWithoutDosen_dosen_kode_posTokode_posInput>
    connectOrCreate?: kode_posCreateOrConnectWithoutDosen_dosen_kode_posTokode_posInput
    upsert?: kode_posUpsertWithoutDosen_dosen_kode_posTokode_posInput
    connect?: kode_posWhereUniqueInput
    update?: XOR<kode_posUpdateWithoutDosen_dosen_kode_posTokode_posInput, kode_posUncheckedUpdateWithoutDosen_dosen_kode_posTokode_posInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type dosenCreateNestedManyWithoutKode_pos_dosen_kode_posTokode_posInput = {
    create?: XOR<Enumerable<dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput>, Enumerable<dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput>>
    connectOrCreate?: Enumerable<dosenCreateOrConnectWithoutKode_pos_dosen_kode_posTokode_posInput>
    createMany?: dosenCreateManyKode_pos_dosen_kode_posTokode_posInputEnvelope
    connect?: Enumerable<dosenWhereUniqueInput>
  }

  export type dosenUncheckedCreateNestedManyWithoutKode_pos_dosen_kode_posTokode_posInput = {
    create?: XOR<Enumerable<dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput>, Enumerable<dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput>>
    connectOrCreate?: Enumerable<dosenCreateOrConnectWithoutKode_pos_dosen_kode_posTokode_posInput>
    createMany?: dosenCreateManyKode_pos_dosen_kode_posTokode_posInputEnvelope
    connect?: Enumerable<dosenWhereUniqueInput>
  }

  export type dosenUpdateManyWithoutKode_pos_dosen_kode_posTokode_posNestedInput = {
    create?: XOR<Enumerable<dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput>, Enumerable<dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput>>
    connectOrCreate?: Enumerable<dosenCreateOrConnectWithoutKode_pos_dosen_kode_posTokode_posInput>
    upsert?: Enumerable<dosenUpsertWithWhereUniqueWithoutKode_pos_dosen_kode_posTokode_posInput>
    createMany?: dosenCreateManyKode_pos_dosen_kode_posTokode_posInputEnvelope
    set?: Enumerable<dosenWhereUniqueInput>
    disconnect?: Enumerable<dosenWhereUniqueInput>
    delete?: Enumerable<dosenWhereUniqueInput>
    connect?: Enumerable<dosenWhereUniqueInput>
    update?: Enumerable<dosenUpdateWithWhereUniqueWithoutKode_pos_dosen_kode_posTokode_posInput>
    updateMany?: Enumerable<dosenUpdateManyWithWhereWithoutKode_pos_dosen_kode_posTokode_posInput>
    deleteMany?: Enumerable<dosenScalarWhereInput>
  }

  export type dosenUncheckedUpdateManyWithoutKode_pos_dosen_kode_posTokode_posNestedInput = {
    create?: XOR<Enumerable<dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput>, Enumerable<dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput>>
    connectOrCreate?: Enumerable<dosenCreateOrConnectWithoutKode_pos_dosen_kode_posTokode_posInput>
    upsert?: Enumerable<dosenUpsertWithWhereUniqueWithoutKode_pos_dosen_kode_posTokode_posInput>
    createMany?: dosenCreateManyKode_pos_dosen_kode_posTokode_posInputEnvelope
    set?: Enumerable<dosenWhereUniqueInput>
    disconnect?: Enumerable<dosenWhereUniqueInput>
    delete?: Enumerable<dosenWhereUniqueInput>
    connect?: Enumerable<dosenWhereUniqueInput>
    update?: Enumerable<dosenUpdateWithWhereUniqueWithoutKode_pos_dosen_kode_posTokode_posInput>
    updateMany?: Enumerable<dosenUpdateManyWithWhereWithoutKode_pos_dosen_kode_posTokode_posInput>
    deleteMany?: Enumerable<dosenScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type kode_posCreateWithoutDosen_dosen_kode_posTokode_posInput = {
    kode_pos: number
    alamat_kecamatan: string
    alamat_kokab: string
    alamat_provinsi: string
  }

  export type kode_posUncheckedCreateWithoutDosen_dosen_kode_posTokode_posInput = {
    kode_pos: number
    alamat_kecamatan: string
    alamat_kokab: string
    alamat_provinsi: string
  }

  export type kode_posCreateOrConnectWithoutDosen_dosen_kode_posTokode_posInput = {
    where: kode_posWhereUniqueInput
    create: XOR<kode_posCreateWithoutDosen_dosen_kode_posTokode_posInput, kode_posUncheckedCreateWithoutDosen_dosen_kode_posTokode_posInput>
  }

  export type kode_posUpsertWithoutDosen_dosen_kode_posTokode_posInput = {
    update: XOR<kode_posUpdateWithoutDosen_dosen_kode_posTokode_posInput, kode_posUncheckedUpdateWithoutDosen_dosen_kode_posTokode_posInput>
    create: XOR<kode_posCreateWithoutDosen_dosen_kode_posTokode_posInput, kode_posUncheckedCreateWithoutDosen_dosen_kode_posTokode_posInput>
  }

  export type kode_posUpdateWithoutDosen_dosen_kode_posTokode_posInput = {
    kode_pos?: IntFieldUpdateOperationsInput | number
    alamat_kecamatan?: StringFieldUpdateOperationsInput | string
    alamat_kokab?: StringFieldUpdateOperationsInput | string
    alamat_provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type kode_posUncheckedUpdateWithoutDosen_dosen_kode_posTokode_posInput = {
    kode_pos?: IntFieldUpdateOperationsInput | number
    alamat_kecamatan?: StringFieldUpdateOperationsInput | string
    alamat_kokab?: StringFieldUpdateOperationsInput | string
    alamat_provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput = {
    nip: string
    nama: string
    tanggal_lahir: Date | string
    alamat: string
    no_telp: string
    email: string
  }

  export type dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput = {
    nip: string
    nama: string
    tanggal_lahir: Date | string
    alamat: string
    no_telp: string
    email: string
  }

  export type dosenCreateOrConnectWithoutKode_pos_dosen_kode_posTokode_posInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput, dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput>
  }

  export type dosenCreateManyKode_pos_dosen_kode_posTokode_posInputEnvelope = {
    data: Enumerable<dosenCreateManyKode_pos_dosen_kode_posTokode_posInput>
    skipDuplicates?: boolean
  }

  export type dosenUpsertWithWhereUniqueWithoutKode_pos_dosen_kode_posTokode_posInput = {
    where: dosenWhereUniqueInput
    update: XOR<dosenUpdateWithoutKode_pos_dosen_kode_posTokode_posInput, dosenUncheckedUpdateWithoutKode_pos_dosen_kode_posTokode_posInput>
    create: XOR<dosenCreateWithoutKode_pos_dosen_kode_posTokode_posInput, dosenUncheckedCreateWithoutKode_pos_dosen_kode_posTokode_posInput>
  }

  export type dosenUpdateWithWhereUniqueWithoutKode_pos_dosen_kode_posTokode_posInput = {
    where: dosenWhereUniqueInput
    data: XOR<dosenUpdateWithoutKode_pos_dosen_kode_posTokode_posInput, dosenUncheckedUpdateWithoutKode_pos_dosen_kode_posTokode_posInput>
  }

  export type dosenUpdateManyWithWhereWithoutKode_pos_dosen_kode_posTokode_posInput = {
    where: dosenScalarWhereInput
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyWithoutDosen_dosen_kode_posTokode_posInput>
  }

  export type dosenScalarWhereInput = {
    AND?: Enumerable<dosenScalarWhereInput>
    OR?: Enumerable<dosenScalarWhereInput>
    NOT?: Enumerable<dosenScalarWhereInput>
    nip?: StringFilter | string
    nama?: StringFilter | string
    tanggal_lahir?: DateTimeFilter | Date | string
    alamat?: StringFilter | string
    kode_pos?: IntFilter | number
    no_telp?: StringFilter | string
    email?: StringFilter | string
  }

  export type dosenCreateManyKode_pos_dosen_kode_posTokode_posInput = {
    nip: string
    nama: string
    tanggal_lahir: Date | string
    alamat: string
    no_telp: string
    email: string
  }

  export type dosenUpdateWithoutKode_pos_dosen_kode_posTokode_posInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateWithoutKode_pos_dosen_kode_posTokode_posInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateManyWithoutDosen_dosen_kode_posTokode_posInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
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