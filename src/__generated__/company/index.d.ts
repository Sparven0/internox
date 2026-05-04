
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CompanyIntegration
 * 
 */
export type CompanyIntegration = $Result.DefaultSelection<Prisma.$CompanyIntegrationPayload>
/**
 * Model ImapCredential
 * 
 */
export type ImapCredential = $Result.DefaultSelection<Prisma.$ImapCredentialPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model EmployeeCustomer
 * 
 */
export type EmployeeCustomer = $Result.DefaultSelection<Prisma.$EmployeeCustomerPayload>
/**
 * Model TimeEntry
 * 
 */
export type TimeEntry = $Result.DefaultSelection<Prisma.$TimeEntryPayload>
/**
 * Model EmailActivity
 * 
 */
export type EmailActivity = $Result.DefaultSelection<Prisma.$EmailActivityPayload>
/**
 * Model FortnoxSyncLog
 * 
 */
export type FortnoxSyncLog = $Result.DefaultSelection<Prisma.$FortnoxSyncLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyIntegration`: Exposes CRUD operations for the **CompanyIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyIntegrations
    * const companyIntegrations = await prisma.companyIntegration.findMany()
    * ```
    */
  get companyIntegration(): Prisma.CompanyIntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imapCredential`: Exposes CRUD operations for the **ImapCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImapCredentials
    * const imapCredentials = await prisma.imapCredential.findMany()
    * ```
    */
  get imapCredential(): Prisma.ImapCredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeCustomer`: Exposes CRUD operations for the **EmployeeCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeCustomers
    * const employeeCustomers = await prisma.employeeCustomer.findMany()
    * ```
    */
  get employeeCustomer(): Prisma.EmployeeCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeEntry`: Exposes CRUD operations for the **TimeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeEntries
    * const timeEntries = await prisma.timeEntry.findMany()
    * ```
    */
  get timeEntry(): Prisma.TimeEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailActivity`: Exposes CRUD operations for the **EmailActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailActivities
    * const emailActivities = await prisma.emailActivity.findMany()
    * ```
    */
  get emailActivity(): Prisma.EmailActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fortnoxSyncLog`: Exposes CRUD operations for the **FortnoxSyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FortnoxSyncLogs
    * const fortnoxSyncLogs = await prisma.fortnoxSyncLog.findMany()
    * ```
    */
  get fortnoxSyncLog(): Prisma.FortnoxSyncLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Company: 'Company',
    User: 'User',
    CompanyIntegration: 'CompanyIntegration',
    ImapCredential: 'ImapCredential',
    Customer: 'Customer',
    EmployeeCustomer: 'EmployeeCustomer',
    TimeEntry: 'TimeEntry',
    EmailActivity: 'EmailActivity',
    FortnoxSyncLog: 'FortnoxSyncLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "user" | "companyIntegration" | "imapCredential" | "customer" | "employeeCustomer" | "timeEntry" | "emailActivity" | "fortnoxSyncLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
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
      CompanyIntegration: {
        payload: Prisma.$CompanyIntegrationPayload<ExtArgs>
        fields: Prisma.CompanyIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>
          }
          findFirst: {
            args: Prisma.CompanyIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>
          }
          findMany: {
            args: Prisma.CompanyIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>[]
          }
          create: {
            args: Prisma.CompanyIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>
          }
          createMany: {
            args: Prisma.CompanyIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyIntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>[]
          }
          delete: {
            args: Prisma.CompanyIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>
          }
          update: {
            args: Prisma.CompanyIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.CompanyIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyIntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>[]
          }
          upsert: {
            args: Prisma.CompanyIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyIntegrationPayload>
          }
          aggregate: {
            args: Prisma.CompanyIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyIntegration>
          }
          groupBy: {
            args: Prisma.CompanyIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyIntegrationCountAggregateOutputType> | number
          }
        }
      }
      ImapCredential: {
        payload: Prisma.$ImapCredentialPayload<ExtArgs>
        fields: Prisma.ImapCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImapCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImapCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>
          }
          findFirst: {
            args: Prisma.ImapCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImapCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>
          }
          findMany: {
            args: Prisma.ImapCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>[]
          }
          create: {
            args: Prisma.ImapCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>
          }
          createMany: {
            args: Prisma.ImapCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImapCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>[]
          }
          delete: {
            args: Prisma.ImapCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>
          }
          update: {
            args: Prisma.ImapCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>
          }
          deleteMany: {
            args: Prisma.ImapCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImapCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImapCredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>[]
          }
          upsert: {
            args: Prisma.ImapCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImapCredentialPayload>
          }
          aggregate: {
            args: Prisma.ImapCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImapCredential>
          }
          groupBy: {
            args: Prisma.ImapCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImapCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImapCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<ImapCredentialCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      EmployeeCustomer: {
        payload: Prisma.$EmployeeCustomerPayload<ExtArgs>
        fields: Prisma.EmployeeCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>
          }
          findFirst: {
            args: Prisma.EmployeeCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>
          }
          findMany: {
            args: Prisma.EmployeeCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>[]
          }
          create: {
            args: Prisma.EmployeeCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>
          }
          createMany: {
            args: Prisma.EmployeeCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>[]
          }
          delete: {
            args: Prisma.EmployeeCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>
          }
          update: {
            args: Prisma.EmployeeCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCustomerPayload>
          }
          aggregate: {
            args: Prisma.EmployeeCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeCustomer>
          }
          groupBy: {
            args: Prisma.EmployeeCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCustomerCountAggregateOutputType> | number
          }
        }
      }
      TimeEntry: {
        payload: Prisma.$TimeEntryPayload<ExtArgs>
        fields: Prisma.TimeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findFirst: {
            args: Prisma.TimeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findMany: {
            args: Prisma.TimeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          create: {
            args: Prisma.TimeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          createMany: {
            args: Prisma.TimeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          delete: {
            args: Prisma.TimeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          update: {
            args: Prisma.TimeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          upsert: {
            args: Prisma.TimeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          aggregate: {
            args: Prisma.TimeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeEntry>
          }
          groupBy: {
            args: Prisma.TimeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryCountAggregateOutputType> | number
          }
        }
      }
      EmailActivity: {
        payload: Prisma.$EmailActivityPayload<ExtArgs>
        fields: Prisma.EmailActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>
          }
          findFirst: {
            args: Prisma.EmailActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>
          }
          findMany: {
            args: Prisma.EmailActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>[]
          }
          create: {
            args: Prisma.EmailActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>
          }
          createMany: {
            args: Prisma.EmailActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>[]
          }
          delete: {
            args: Prisma.EmailActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>
          }
          update: {
            args: Prisma.EmailActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>
          }
          deleteMany: {
            args: Prisma.EmailActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>[]
          }
          upsert: {
            args: Prisma.EmailActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailActivityPayload>
          }
          aggregate: {
            args: Prisma.EmailActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailActivity>
          }
          groupBy: {
            args: Prisma.EmailActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailActivityCountArgs<ExtArgs>
            result: $Utils.Optional<EmailActivityCountAggregateOutputType> | number
          }
        }
      }
      FortnoxSyncLog: {
        payload: Prisma.$FortnoxSyncLogPayload<ExtArgs>
        fields: Prisma.FortnoxSyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FortnoxSyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FortnoxSyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>
          }
          findFirst: {
            args: Prisma.FortnoxSyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FortnoxSyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>
          }
          findMany: {
            args: Prisma.FortnoxSyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>[]
          }
          create: {
            args: Prisma.FortnoxSyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>
          }
          createMany: {
            args: Prisma.FortnoxSyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FortnoxSyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>[]
          }
          delete: {
            args: Prisma.FortnoxSyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>
          }
          update: {
            args: Prisma.FortnoxSyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>
          }
          deleteMany: {
            args: Prisma.FortnoxSyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FortnoxSyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FortnoxSyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>[]
          }
          upsert: {
            args: Prisma.FortnoxSyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FortnoxSyncLogPayload>
          }
          aggregate: {
            args: Prisma.FortnoxSyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFortnoxSyncLog>
          }
          groupBy: {
            args: Prisma.FortnoxSyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FortnoxSyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FortnoxSyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<FortnoxSyncLogCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    user?: UserOmit
    companyIntegration?: CompanyIntegrationOmit
    imapCredential?: ImapCredentialOmit
    customer?: CustomerOmit
    employeeCustomer?: EmployeeCustomerOmit
    timeEntry?: TimeEntryOmit
    emailActivity?: EmailActivityOmit
    fortnoxSyncLog?: FortnoxSyncLogOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    integrations: number
    customers: number
    fortnoxSyncLogs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    integrations?: boolean | CompanyCountOutputTypeCountIntegrationsArgs
    customers?: boolean | CompanyCountOutputTypeCountCustomersArgs
    fortnoxSyncLogs?: boolean | CompanyCountOutputTypeCountFortnoxSyncLogsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyIntegrationWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFortnoxSyncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FortnoxSyncLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    imapCredentials: number
    employeeCustomers: number
    timeEntries: number
    emailActivities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imapCredentials?: boolean | UserCountOutputTypeCountImapCredentialsArgs
    employeeCustomers?: boolean | UserCountOutputTypeCountEmployeeCustomersArgs
    timeEntries?: boolean | UserCountOutputTypeCountTimeEntriesArgs
    emailActivities?: boolean | UserCountOutputTypeCountEmailActivitiesArgs
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
  export type UserCountOutputTypeCountImapCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImapCredentialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCustomerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailActivityWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    employeeCustomers: number
    timeEntries: number
    emailActivities: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeCustomers?: boolean | CustomerCountOutputTypeCountEmployeeCustomersArgs
    timeEntries?: boolean | CustomerCountOutputTypeCountTimeEntriesArgs
    emailActivities?: boolean | CustomerCountOutputTypeCountEmailActivitiesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountEmployeeCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCustomerWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountEmailActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    createdAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    domain: string
    createdAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    integrations?: boolean | Company$integrationsArgs<ExtArgs>
    customers?: boolean | Company$customersArgs<ExtArgs>
    fortnoxSyncLogs?: boolean | Company$fortnoxSyncLogsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "createdAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    integrations?: boolean | Company$integrationsArgs<ExtArgs>
    customers?: boolean | Company$customersArgs<ExtArgs>
    fortnoxSyncLogs?: boolean | Company$fortnoxSyncLogsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      integrations: Prisma.$CompanyIntegrationPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      fortnoxSyncLogs: Prisma.$FortnoxSyncLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string
      createdAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends Company$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, Company$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends Company$customersArgs<ExtArgs> = {}>(args?: Subset<T, Company$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fortnoxSyncLogs<T extends Company$fortnoxSyncLogsArgs<ExtArgs> = {}>(args?: Subset<T, Company$fortnoxSyncLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly domain: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.integrations
   */
  export type Company$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    where?: CompanyIntegrationWhereInput
    orderBy?: CompanyIntegrationOrderByWithRelationInput | CompanyIntegrationOrderByWithRelationInput[]
    cursor?: CompanyIntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyIntegrationScalarFieldEnum | CompanyIntegrationScalarFieldEnum[]
  }

  /**
   * Company.customers
   */
  export type Company$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Company.fortnoxSyncLogs
   */
  export type Company$fortnoxSyncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    where?: FortnoxSyncLogWhereInput
    orderBy?: FortnoxSyncLogOrderByWithRelationInput | FortnoxSyncLogOrderByWithRelationInput[]
    cursor?: FortnoxSyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FortnoxSyncLogScalarFieldEnum | FortnoxSyncLogScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


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
    email: string | null
    password: string | null
    companyId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    companyId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    companyId: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    companyId?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    companyId?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    companyId?: true
    role?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    companyId: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    imapCredentials?: boolean | User$imapCredentialsArgs<ExtArgs>
    employeeCustomers?: boolean | User$employeeCustomersArgs<ExtArgs>
    timeEntries?: boolean | User$timeEntriesArgs<ExtArgs>
    emailActivities?: boolean | User$emailActivitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    companyId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "companyId" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    imapCredentials?: boolean | User$imapCredentialsArgs<ExtArgs>
    employeeCustomers?: boolean | User$employeeCustomersArgs<ExtArgs>
    timeEntries?: boolean | User$timeEntriesArgs<ExtArgs>
    emailActivities?: boolean | User$emailActivitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      imapCredentials: Prisma.$ImapCredentialPayload<ExtArgs>[]
      employeeCustomers: Prisma.$EmployeeCustomerPayload<ExtArgs>[]
      timeEntries: Prisma.$TimeEntryPayload<ExtArgs>[]
      emailActivities: Prisma.$EmailActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      companyId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imapCredentials<T extends User$imapCredentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$imapCredentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employeeCustomers<T extends User$employeeCustomersArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeCustomersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeEntries<T extends User$timeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$timeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailActivities<T extends User$emailActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$emailActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.imapCredentials
   */
  export type User$imapCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    where?: ImapCredentialWhereInput
    orderBy?: ImapCredentialOrderByWithRelationInput | ImapCredentialOrderByWithRelationInput[]
    cursor?: ImapCredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImapCredentialScalarFieldEnum | ImapCredentialScalarFieldEnum[]
  }

  /**
   * User.employeeCustomers
   */
  export type User$employeeCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    where?: EmployeeCustomerWhereInput
    orderBy?: EmployeeCustomerOrderByWithRelationInput | EmployeeCustomerOrderByWithRelationInput[]
    cursor?: EmployeeCustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeCustomerScalarFieldEnum | EmployeeCustomerScalarFieldEnum[]
  }

  /**
   * User.timeEntries
   */
  export type User$timeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    cursor?: TimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * User.emailActivities
   */
  export type User$emailActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    where?: EmailActivityWhereInput
    orderBy?: EmailActivityOrderByWithRelationInput | EmailActivityOrderByWithRelationInput[]
    cursor?: EmailActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailActivityScalarFieldEnum | EmailActivityScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CompanyIntegration
   */

  export type AggregateCompanyIntegration = {
    _count: CompanyIntegrationCountAggregateOutputType | null
    _min: CompanyIntegrationMinAggregateOutputType | null
    _max: CompanyIntegrationMaxAggregateOutputType | null
  }

  export type CompanyIntegrationMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    service: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type CompanyIntegrationMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    service: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type CompanyIntegrationCountAggregateOutputType = {
    id: number
    companyId: number
    service: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type CompanyIntegrationMinAggregateInputType = {
    id?: true
    companyId?: true
    service?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type CompanyIntegrationMaxAggregateInputType = {
    id?: true
    companyId?: true
    service?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type CompanyIntegrationCountAggregateInputType = {
    id?: true
    companyId?: true
    service?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyIntegration to aggregate.
     */
    where?: CompanyIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIntegrations to fetch.
     */
    orderBy?: CompanyIntegrationOrderByWithRelationInput | CompanyIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyIntegrations
    **/
    _count?: true | CompanyIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyIntegrationMaxAggregateInputType
  }

  export type GetCompanyIntegrationAggregateType<T extends CompanyIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyIntegration[P]>
      : GetScalarType<T[P], AggregateCompanyIntegration[P]>
  }




  export type CompanyIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyIntegrationWhereInput
    orderBy?: CompanyIntegrationOrderByWithAggregationInput | CompanyIntegrationOrderByWithAggregationInput[]
    by: CompanyIntegrationScalarFieldEnum[] | CompanyIntegrationScalarFieldEnum
    having?: CompanyIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyIntegrationCountAggregateInputType | true
    _min?: CompanyIntegrationMinAggregateInputType
    _max?: CompanyIntegrationMaxAggregateInputType
  }

  export type CompanyIntegrationGroupByOutputType = {
    id: string
    companyId: string
    service: string
    accessToken: string
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date
    _count: CompanyIntegrationCountAggregateOutputType | null
    _min: CompanyIntegrationMinAggregateOutputType | null
    _max: CompanyIntegrationMaxAggregateOutputType | null
  }

  type GetCompanyIntegrationGroupByPayload<T extends CompanyIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type CompanyIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    service?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyIntegration"]>

  export type CompanyIntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    service?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyIntegration"]>

  export type CompanyIntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    service?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyIntegration"]>

  export type CompanyIntegrationSelectScalar = {
    id?: boolean
    companyId?: boolean
    service?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type CompanyIntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "service" | "accessToken" | "refreshToken" | "expiresAt" | "createdAt", ExtArgs["result"]["companyIntegration"]>
  export type CompanyIntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyIntegrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyIntegrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyIntegration"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      service: string
      accessToken: string
      refreshToken: string | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["companyIntegration"]>
    composites: {}
  }

  type CompanyIntegrationGetPayload<S extends boolean | null | undefined | CompanyIntegrationDefaultArgs> = $Result.GetResult<Prisma.$CompanyIntegrationPayload, S>

  type CompanyIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyIntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyIntegrationCountAggregateInputType | true
    }

  export interface CompanyIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyIntegration'], meta: { name: 'CompanyIntegration' } }
    /**
     * Find zero or one CompanyIntegration that matches the filter.
     * @param {CompanyIntegrationFindUniqueArgs} args - Arguments to find a CompanyIntegration
     * @example
     * // Get one CompanyIntegration
     * const companyIntegration = await prisma.companyIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyIntegrationFindUniqueArgs>(args: SelectSubset<T, CompanyIntegrationFindUniqueArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyIntegration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyIntegrationFindUniqueOrThrowArgs} args - Arguments to find a CompanyIntegration
     * @example
     * // Get one CompanyIntegration
     * const companyIntegration = await prisma.companyIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationFindFirstArgs} args - Arguments to find a CompanyIntegration
     * @example
     * // Get one CompanyIntegration
     * const companyIntegration = await prisma.companyIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyIntegrationFindFirstArgs>(args?: SelectSubset<T, CompanyIntegrationFindFirstArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationFindFirstOrThrowArgs} args - Arguments to find a CompanyIntegration
     * @example
     * // Get one CompanyIntegration
     * const companyIntegration = await prisma.companyIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyIntegrations
     * const companyIntegrations = await prisma.companyIntegration.findMany()
     * 
     * // Get first 10 CompanyIntegrations
     * const companyIntegrations = await prisma.companyIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyIntegrationWithIdOnly = await prisma.companyIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyIntegrationFindManyArgs>(args?: SelectSubset<T, CompanyIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyIntegration.
     * @param {CompanyIntegrationCreateArgs} args - Arguments to create a CompanyIntegration.
     * @example
     * // Create one CompanyIntegration
     * const CompanyIntegration = await prisma.companyIntegration.create({
     *   data: {
     *     // ... data to create a CompanyIntegration
     *   }
     * })
     * 
     */
    create<T extends CompanyIntegrationCreateArgs>(args: SelectSubset<T, CompanyIntegrationCreateArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyIntegrations.
     * @param {CompanyIntegrationCreateManyArgs} args - Arguments to create many CompanyIntegrations.
     * @example
     * // Create many CompanyIntegrations
     * const companyIntegration = await prisma.companyIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyIntegrationCreateManyArgs>(args?: SelectSubset<T, CompanyIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyIntegrations and returns the data saved in the database.
     * @param {CompanyIntegrationCreateManyAndReturnArgs} args - Arguments to create many CompanyIntegrations.
     * @example
     * // Create many CompanyIntegrations
     * const companyIntegration = await prisma.companyIntegration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyIntegrations and only return the `id`
     * const companyIntegrationWithIdOnly = await prisma.companyIntegration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyIntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyIntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyIntegration.
     * @param {CompanyIntegrationDeleteArgs} args - Arguments to delete one CompanyIntegration.
     * @example
     * // Delete one CompanyIntegration
     * const CompanyIntegration = await prisma.companyIntegration.delete({
     *   where: {
     *     // ... filter to delete one CompanyIntegration
     *   }
     * })
     * 
     */
    delete<T extends CompanyIntegrationDeleteArgs>(args: SelectSubset<T, CompanyIntegrationDeleteArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyIntegration.
     * @param {CompanyIntegrationUpdateArgs} args - Arguments to update one CompanyIntegration.
     * @example
     * // Update one CompanyIntegration
     * const companyIntegration = await prisma.companyIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyIntegrationUpdateArgs>(args: SelectSubset<T, CompanyIntegrationUpdateArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyIntegrations.
     * @param {CompanyIntegrationDeleteManyArgs} args - Arguments to filter CompanyIntegrations to delete.
     * @example
     * // Delete a few CompanyIntegrations
     * const { count } = await prisma.companyIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyIntegrationDeleteManyArgs>(args?: SelectSubset<T, CompanyIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyIntegrations
     * const companyIntegration = await prisma.companyIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyIntegrationUpdateManyArgs>(args: SelectSubset<T, CompanyIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyIntegrations and returns the data updated in the database.
     * @param {CompanyIntegrationUpdateManyAndReturnArgs} args - Arguments to update many CompanyIntegrations.
     * @example
     * // Update many CompanyIntegrations
     * const companyIntegration = await prisma.companyIntegration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyIntegrations and only return the `id`
     * const companyIntegrationWithIdOnly = await prisma.companyIntegration.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyIntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyIntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyIntegration.
     * @param {CompanyIntegrationUpsertArgs} args - Arguments to update or create a CompanyIntegration.
     * @example
     * // Update or create a CompanyIntegration
     * const companyIntegration = await prisma.companyIntegration.upsert({
     *   create: {
     *     // ... data to create a CompanyIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyIntegration we want to update
     *   }
     * })
     */
    upsert<T extends CompanyIntegrationUpsertArgs>(args: SelectSubset<T, CompanyIntegrationUpsertArgs<ExtArgs>>): Prisma__CompanyIntegrationClient<$Result.GetResult<Prisma.$CompanyIntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationCountArgs} args - Arguments to filter CompanyIntegrations to count.
     * @example
     * // Count the number of CompanyIntegrations
     * const count = await prisma.companyIntegration.count({
     *   where: {
     *     // ... the filter for the CompanyIntegrations we want to count
     *   }
     * })
    **/
    count<T extends CompanyIntegrationCountArgs>(
      args?: Subset<T, CompanyIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyIntegrationAggregateArgs>(args: Subset<T, CompanyIntegrationAggregateArgs>): Prisma.PrismaPromise<GetCompanyIntegrationAggregateType<T>>

    /**
     * Group by CompanyIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyIntegrationGroupByArgs} args - Group by arguments.
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
      T extends CompanyIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: CompanyIntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyIntegration model
   */
  readonly fields: CompanyIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyIntegration model
   */
  interface CompanyIntegrationFieldRefs {
    readonly id: FieldRef<"CompanyIntegration", 'String'>
    readonly companyId: FieldRef<"CompanyIntegration", 'String'>
    readonly service: FieldRef<"CompanyIntegration", 'String'>
    readonly accessToken: FieldRef<"CompanyIntegration", 'String'>
    readonly refreshToken: FieldRef<"CompanyIntegration", 'String'>
    readonly expiresAt: FieldRef<"CompanyIntegration", 'DateTime'>
    readonly createdAt: FieldRef<"CompanyIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyIntegration findUnique
   */
  export type CompanyIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIntegration to fetch.
     */
    where: CompanyIntegrationWhereUniqueInput
  }

  /**
   * CompanyIntegration findUniqueOrThrow
   */
  export type CompanyIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIntegration to fetch.
     */
    where: CompanyIntegrationWhereUniqueInput
  }

  /**
   * CompanyIntegration findFirst
   */
  export type CompanyIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIntegration to fetch.
     */
    where?: CompanyIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIntegrations to fetch.
     */
    orderBy?: CompanyIntegrationOrderByWithRelationInput | CompanyIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyIntegrations.
     */
    cursor?: CompanyIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyIntegrations.
     */
    distinct?: CompanyIntegrationScalarFieldEnum | CompanyIntegrationScalarFieldEnum[]
  }

  /**
   * CompanyIntegration findFirstOrThrow
   */
  export type CompanyIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIntegration to fetch.
     */
    where?: CompanyIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIntegrations to fetch.
     */
    orderBy?: CompanyIntegrationOrderByWithRelationInput | CompanyIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyIntegrations.
     */
    cursor?: CompanyIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyIntegrations.
     */
    distinct?: CompanyIntegrationScalarFieldEnum | CompanyIntegrationScalarFieldEnum[]
  }

  /**
   * CompanyIntegration findMany
   */
  export type CompanyIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * Filter, which CompanyIntegrations to fetch.
     */
    where?: CompanyIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyIntegrations to fetch.
     */
    orderBy?: CompanyIntegrationOrderByWithRelationInput | CompanyIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyIntegrations.
     */
    cursor?: CompanyIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyIntegrations.
     */
    distinct?: CompanyIntegrationScalarFieldEnum | CompanyIntegrationScalarFieldEnum[]
  }

  /**
   * CompanyIntegration create
   */
  export type CompanyIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyIntegration.
     */
    data: XOR<CompanyIntegrationCreateInput, CompanyIntegrationUncheckedCreateInput>
  }

  /**
   * CompanyIntegration createMany
   */
  export type CompanyIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyIntegrations.
     */
    data: CompanyIntegrationCreateManyInput | CompanyIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyIntegration createManyAndReturn
   */
  export type CompanyIntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyIntegrations.
     */
    data: CompanyIntegrationCreateManyInput | CompanyIntegrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyIntegration update
   */
  export type CompanyIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyIntegration.
     */
    data: XOR<CompanyIntegrationUpdateInput, CompanyIntegrationUncheckedUpdateInput>
    /**
     * Choose, which CompanyIntegration to update.
     */
    where: CompanyIntegrationWhereUniqueInput
  }

  /**
   * CompanyIntegration updateMany
   */
  export type CompanyIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyIntegrations.
     */
    data: XOR<CompanyIntegrationUpdateManyMutationInput, CompanyIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which CompanyIntegrations to update
     */
    where?: CompanyIntegrationWhereInput
    /**
     * Limit how many CompanyIntegrations to update.
     */
    limit?: number
  }

  /**
   * CompanyIntegration updateManyAndReturn
   */
  export type CompanyIntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * The data used to update CompanyIntegrations.
     */
    data: XOR<CompanyIntegrationUpdateManyMutationInput, CompanyIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which CompanyIntegrations to update
     */
    where?: CompanyIntegrationWhereInput
    /**
     * Limit how many CompanyIntegrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyIntegration upsert
   */
  export type CompanyIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyIntegration to update in case it exists.
     */
    where: CompanyIntegrationWhereUniqueInput
    /**
     * In case the CompanyIntegration found by the `where` argument doesn't exist, create a new CompanyIntegration with this data.
     */
    create: XOR<CompanyIntegrationCreateInput, CompanyIntegrationUncheckedCreateInput>
    /**
     * In case the CompanyIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyIntegrationUpdateInput, CompanyIntegrationUncheckedUpdateInput>
  }

  /**
   * CompanyIntegration delete
   */
  export type CompanyIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
    /**
     * Filter which CompanyIntegration to delete.
     */
    where: CompanyIntegrationWhereUniqueInput
  }

  /**
   * CompanyIntegration deleteMany
   */
  export type CompanyIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyIntegrations to delete
     */
    where?: CompanyIntegrationWhereInput
    /**
     * Limit how many CompanyIntegrations to delete.
     */
    limit?: number
  }

  /**
   * CompanyIntegration without action
   */
  export type CompanyIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyIntegration
     */
    select?: CompanyIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyIntegration
     */
    omit?: CompanyIntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIntegrationInclude<ExtArgs> | null
  }


  /**
   * Model ImapCredential
   */

  export type AggregateImapCredential = {
    _count: ImapCredentialCountAggregateOutputType | null
    _avg: ImapCredentialAvgAggregateOutputType | null
    _sum: ImapCredentialSumAggregateOutputType | null
    _min: ImapCredentialMinAggregateOutputType | null
    _max: ImapCredentialMaxAggregateOutputType | null
  }

  export type ImapCredentialAvgAggregateOutputType = {
    imapPort: number | null
  }

  export type ImapCredentialSumAggregateOutputType = {
    imapPort: number | null
  }

  export type ImapCredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    imapHost: string | null
    imapPort: number | null
    emailAddress: string | null
    encryptedPassword: string | null
    useTls: boolean | null
    createdAt: Date | null
  }

  export type ImapCredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    imapHost: string | null
    imapPort: number | null
    emailAddress: string | null
    encryptedPassword: string | null
    useTls: boolean | null
    createdAt: Date | null
  }

  export type ImapCredentialCountAggregateOutputType = {
    id: number
    userId: number
    imapHost: number
    imapPort: number
    emailAddress: number
    encryptedPassword: number
    useTls: number
    createdAt: number
    _all: number
  }


  export type ImapCredentialAvgAggregateInputType = {
    imapPort?: true
  }

  export type ImapCredentialSumAggregateInputType = {
    imapPort?: true
  }

  export type ImapCredentialMinAggregateInputType = {
    id?: true
    userId?: true
    imapHost?: true
    imapPort?: true
    emailAddress?: true
    encryptedPassword?: true
    useTls?: true
    createdAt?: true
  }

  export type ImapCredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    imapHost?: true
    imapPort?: true
    emailAddress?: true
    encryptedPassword?: true
    useTls?: true
    createdAt?: true
  }

  export type ImapCredentialCountAggregateInputType = {
    id?: true
    userId?: true
    imapHost?: true
    imapPort?: true
    emailAddress?: true
    encryptedPassword?: true
    useTls?: true
    createdAt?: true
    _all?: true
  }

  export type ImapCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImapCredential to aggregate.
     */
    where?: ImapCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImapCredentials to fetch.
     */
    orderBy?: ImapCredentialOrderByWithRelationInput | ImapCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImapCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImapCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImapCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImapCredentials
    **/
    _count?: true | ImapCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImapCredentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImapCredentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImapCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImapCredentialMaxAggregateInputType
  }

  export type GetImapCredentialAggregateType<T extends ImapCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateImapCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImapCredential[P]>
      : GetScalarType<T[P], AggregateImapCredential[P]>
  }




  export type ImapCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImapCredentialWhereInput
    orderBy?: ImapCredentialOrderByWithAggregationInput | ImapCredentialOrderByWithAggregationInput[]
    by: ImapCredentialScalarFieldEnum[] | ImapCredentialScalarFieldEnum
    having?: ImapCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImapCredentialCountAggregateInputType | true
    _avg?: ImapCredentialAvgAggregateInputType
    _sum?: ImapCredentialSumAggregateInputType
    _min?: ImapCredentialMinAggregateInputType
    _max?: ImapCredentialMaxAggregateInputType
  }

  export type ImapCredentialGroupByOutputType = {
    id: string
    userId: string | null
    imapHost: string
    imapPort: number
    emailAddress: string
    encryptedPassword: string
    useTls: boolean
    createdAt: Date
    _count: ImapCredentialCountAggregateOutputType | null
    _avg: ImapCredentialAvgAggregateOutputType | null
    _sum: ImapCredentialSumAggregateOutputType | null
    _min: ImapCredentialMinAggregateOutputType | null
    _max: ImapCredentialMaxAggregateOutputType | null
  }

  type GetImapCredentialGroupByPayload<T extends ImapCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImapCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImapCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImapCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], ImapCredentialGroupByOutputType[P]>
        }
      >
    >


  export type ImapCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imapHost?: boolean
    imapPort?: boolean
    emailAddress?: boolean
    encryptedPassword?: boolean
    useTls?: boolean
    createdAt?: boolean
    user?: boolean | ImapCredential$userArgs<ExtArgs>
  }, ExtArgs["result"]["imapCredential"]>

  export type ImapCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imapHost?: boolean
    imapPort?: boolean
    emailAddress?: boolean
    encryptedPassword?: boolean
    useTls?: boolean
    createdAt?: boolean
    user?: boolean | ImapCredential$userArgs<ExtArgs>
  }, ExtArgs["result"]["imapCredential"]>

  export type ImapCredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imapHost?: boolean
    imapPort?: boolean
    emailAddress?: boolean
    encryptedPassword?: boolean
    useTls?: boolean
    createdAt?: boolean
    user?: boolean | ImapCredential$userArgs<ExtArgs>
  }, ExtArgs["result"]["imapCredential"]>

  export type ImapCredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    imapHost?: boolean
    imapPort?: boolean
    emailAddress?: boolean
    encryptedPassword?: boolean
    useTls?: boolean
    createdAt?: boolean
  }

  export type ImapCredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imapHost" | "imapPort" | "emailAddress" | "encryptedPassword" | "useTls" | "createdAt", ExtArgs["result"]["imapCredential"]>
  export type ImapCredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ImapCredential$userArgs<ExtArgs>
  }
  export type ImapCredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ImapCredential$userArgs<ExtArgs>
  }
  export type ImapCredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ImapCredential$userArgs<ExtArgs>
  }

  export type $ImapCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImapCredential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      imapHost: string
      imapPort: number
      emailAddress: string
      encryptedPassword: string
      useTls: boolean
      createdAt: Date
    }, ExtArgs["result"]["imapCredential"]>
    composites: {}
  }

  type ImapCredentialGetPayload<S extends boolean | null | undefined | ImapCredentialDefaultArgs> = $Result.GetResult<Prisma.$ImapCredentialPayload, S>

  type ImapCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImapCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImapCredentialCountAggregateInputType | true
    }

  export interface ImapCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImapCredential'], meta: { name: 'ImapCredential' } }
    /**
     * Find zero or one ImapCredential that matches the filter.
     * @param {ImapCredentialFindUniqueArgs} args - Arguments to find a ImapCredential
     * @example
     * // Get one ImapCredential
     * const imapCredential = await prisma.imapCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImapCredentialFindUniqueArgs>(args: SelectSubset<T, ImapCredentialFindUniqueArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImapCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImapCredentialFindUniqueOrThrowArgs} args - Arguments to find a ImapCredential
     * @example
     * // Get one ImapCredential
     * const imapCredential = await prisma.imapCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImapCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, ImapCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImapCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialFindFirstArgs} args - Arguments to find a ImapCredential
     * @example
     * // Get one ImapCredential
     * const imapCredential = await prisma.imapCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImapCredentialFindFirstArgs>(args?: SelectSubset<T, ImapCredentialFindFirstArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImapCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialFindFirstOrThrowArgs} args - Arguments to find a ImapCredential
     * @example
     * // Get one ImapCredential
     * const imapCredential = await prisma.imapCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImapCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, ImapCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImapCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImapCredentials
     * const imapCredentials = await prisma.imapCredential.findMany()
     * 
     * // Get first 10 ImapCredentials
     * const imapCredentials = await prisma.imapCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imapCredentialWithIdOnly = await prisma.imapCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImapCredentialFindManyArgs>(args?: SelectSubset<T, ImapCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImapCredential.
     * @param {ImapCredentialCreateArgs} args - Arguments to create a ImapCredential.
     * @example
     * // Create one ImapCredential
     * const ImapCredential = await prisma.imapCredential.create({
     *   data: {
     *     // ... data to create a ImapCredential
     *   }
     * })
     * 
     */
    create<T extends ImapCredentialCreateArgs>(args: SelectSubset<T, ImapCredentialCreateArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImapCredentials.
     * @param {ImapCredentialCreateManyArgs} args - Arguments to create many ImapCredentials.
     * @example
     * // Create many ImapCredentials
     * const imapCredential = await prisma.imapCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImapCredentialCreateManyArgs>(args?: SelectSubset<T, ImapCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImapCredentials and returns the data saved in the database.
     * @param {ImapCredentialCreateManyAndReturnArgs} args - Arguments to create many ImapCredentials.
     * @example
     * // Create many ImapCredentials
     * const imapCredential = await prisma.imapCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImapCredentials and only return the `id`
     * const imapCredentialWithIdOnly = await prisma.imapCredential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImapCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, ImapCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImapCredential.
     * @param {ImapCredentialDeleteArgs} args - Arguments to delete one ImapCredential.
     * @example
     * // Delete one ImapCredential
     * const ImapCredential = await prisma.imapCredential.delete({
     *   where: {
     *     // ... filter to delete one ImapCredential
     *   }
     * })
     * 
     */
    delete<T extends ImapCredentialDeleteArgs>(args: SelectSubset<T, ImapCredentialDeleteArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImapCredential.
     * @param {ImapCredentialUpdateArgs} args - Arguments to update one ImapCredential.
     * @example
     * // Update one ImapCredential
     * const imapCredential = await prisma.imapCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImapCredentialUpdateArgs>(args: SelectSubset<T, ImapCredentialUpdateArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImapCredentials.
     * @param {ImapCredentialDeleteManyArgs} args - Arguments to filter ImapCredentials to delete.
     * @example
     * // Delete a few ImapCredentials
     * const { count } = await prisma.imapCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImapCredentialDeleteManyArgs>(args?: SelectSubset<T, ImapCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImapCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImapCredentials
     * const imapCredential = await prisma.imapCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImapCredentialUpdateManyArgs>(args: SelectSubset<T, ImapCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImapCredentials and returns the data updated in the database.
     * @param {ImapCredentialUpdateManyAndReturnArgs} args - Arguments to update many ImapCredentials.
     * @example
     * // Update many ImapCredentials
     * const imapCredential = await prisma.imapCredential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImapCredentials and only return the `id`
     * const imapCredentialWithIdOnly = await prisma.imapCredential.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImapCredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, ImapCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImapCredential.
     * @param {ImapCredentialUpsertArgs} args - Arguments to update or create a ImapCredential.
     * @example
     * // Update or create a ImapCredential
     * const imapCredential = await prisma.imapCredential.upsert({
     *   create: {
     *     // ... data to create a ImapCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImapCredential we want to update
     *   }
     * })
     */
    upsert<T extends ImapCredentialUpsertArgs>(args: SelectSubset<T, ImapCredentialUpsertArgs<ExtArgs>>): Prisma__ImapCredentialClient<$Result.GetResult<Prisma.$ImapCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImapCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialCountArgs} args - Arguments to filter ImapCredentials to count.
     * @example
     * // Count the number of ImapCredentials
     * const count = await prisma.imapCredential.count({
     *   where: {
     *     // ... the filter for the ImapCredentials we want to count
     *   }
     * })
    **/
    count<T extends ImapCredentialCountArgs>(
      args?: Subset<T, ImapCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImapCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImapCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImapCredentialAggregateArgs>(args: Subset<T, ImapCredentialAggregateArgs>): Prisma.PrismaPromise<GetImapCredentialAggregateType<T>>

    /**
     * Group by ImapCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImapCredentialGroupByArgs} args - Group by arguments.
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
      T extends ImapCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImapCredentialGroupByArgs['orderBy'] }
        : { orderBy?: ImapCredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImapCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImapCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImapCredential model
   */
  readonly fields: ImapCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImapCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImapCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ImapCredential$userArgs<ExtArgs> = {}>(args?: Subset<T, ImapCredential$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImapCredential model
   */
  interface ImapCredentialFieldRefs {
    readonly id: FieldRef<"ImapCredential", 'String'>
    readonly userId: FieldRef<"ImapCredential", 'String'>
    readonly imapHost: FieldRef<"ImapCredential", 'String'>
    readonly imapPort: FieldRef<"ImapCredential", 'Int'>
    readonly emailAddress: FieldRef<"ImapCredential", 'String'>
    readonly encryptedPassword: FieldRef<"ImapCredential", 'String'>
    readonly useTls: FieldRef<"ImapCredential", 'Boolean'>
    readonly createdAt: FieldRef<"ImapCredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImapCredential findUnique
   */
  export type ImapCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * Filter, which ImapCredential to fetch.
     */
    where: ImapCredentialWhereUniqueInput
  }

  /**
   * ImapCredential findUniqueOrThrow
   */
  export type ImapCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * Filter, which ImapCredential to fetch.
     */
    where: ImapCredentialWhereUniqueInput
  }

  /**
   * ImapCredential findFirst
   */
  export type ImapCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * Filter, which ImapCredential to fetch.
     */
    where?: ImapCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImapCredentials to fetch.
     */
    orderBy?: ImapCredentialOrderByWithRelationInput | ImapCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImapCredentials.
     */
    cursor?: ImapCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImapCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImapCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImapCredentials.
     */
    distinct?: ImapCredentialScalarFieldEnum | ImapCredentialScalarFieldEnum[]
  }

  /**
   * ImapCredential findFirstOrThrow
   */
  export type ImapCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * Filter, which ImapCredential to fetch.
     */
    where?: ImapCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImapCredentials to fetch.
     */
    orderBy?: ImapCredentialOrderByWithRelationInput | ImapCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImapCredentials.
     */
    cursor?: ImapCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImapCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImapCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImapCredentials.
     */
    distinct?: ImapCredentialScalarFieldEnum | ImapCredentialScalarFieldEnum[]
  }

  /**
   * ImapCredential findMany
   */
  export type ImapCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * Filter, which ImapCredentials to fetch.
     */
    where?: ImapCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImapCredentials to fetch.
     */
    orderBy?: ImapCredentialOrderByWithRelationInput | ImapCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImapCredentials.
     */
    cursor?: ImapCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImapCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImapCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImapCredentials.
     */
    distinct?: ImapCredentialScalarFieldEnum | ImapCredentialScalarFieldEnum[]
  }

  /**
   * ImapCredential create
   */
  export type ImapCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a ImapCredential.
     */
    data: XOR<ImapCredentialCreateInput, ImapCredentialUncheckedCreateInput>
  }

  /**
   * ImapCredential createMany
   */
  export type ImapCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImapCredentials.
     */
    data: ImapCredentialCreateManyInput | ImapCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImapCredential createManyAndReturn
   */
  export type ImapCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * The data used to create many ImapCredentials.
     */
    data: ImapCredentialCreateManyInput | ImapCredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImapCredential update
   */
  export type ImapCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a ImapCredential.
     */
    data: XOR<ImapCredentialUpdateInput, ImapCredentialUncheckedUpdateInput>
    /**
     * Choose, which ImapCredential to update.
     */
    where: ImapCredentialWhereUniqueInput
  }

  /**
   * ImapCredential updateMany
   */
  export type ImapCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImapCredentials.
     */
    data: XOR<ImapCredentialUpdateManyMutationInput, ImapCredentialUncheckedUpdateManyInput>
    /**
     * Filter which ImapCredentials to update
     */
    where?: ImapCredentialWhereInput
    /**
     * Limit how many ImapCredentials to update.
     */
    limit?: number
  }

  /**
   * ImapCredential updateManyAndReturn
   */
  export type ImapCredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * The data used to update ImapCredentials.
     */
    data: XOR<ImapCredentialUpdateManyMutationInput, ImapCredentialUncheckedUpdateManyInput>
    /**
     * Filter which ImapCredentials to update
     */
    where?: ImapCredentialWhereInput
    /**
     * Limit how many ImapCredentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImapCredential upsert
   */
  export type ImapCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the ImapCredential to update in case it exists.
     */
    where: ImapCredentialWhereUniqueInput
    /**
     * In case the ImapCredential found by the `where` argument doesn't exist, create a new ImapCredential with this data.
     */
    create: XOR<ImapCredentialCreateInput, ImapCredentialUncheckedCreateInput>
    /**
     * In case the ImapCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImapCredentialUpdateInput, ImapCredentialUncheckedUpdateInput>
  }

  /**
   * ImapCredential delete
   */
  export type ImapCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
    /**
     * Filter which ImapCredential to delete.
     */
    where: ImapCredentialWhereUniqueInput
  }

  /**
   * ImapCredential deleteMany
   */
  export type ImapCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImapCredentials to delete
     */
    where?: ImapCredentialWhereInput
    /**
     * Limit how many ImapCredentials to delete.
     */
    limit?: number
  }

  /**
   * ImapCredential.user
   */
  export type ImapCredential$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * ImapCredential without action
   */
  export type ImapCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImapCredential
     */
    select?: ImapCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImapCredential
     */
    omit?: ImapCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImapCredentialInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    fortnoxCustomerNumber: string | null
    name: string | null
    domain: string | null
    companyId: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    fortnoxCustomerNumber: string | null
    name: string | null
    domain: string | null
    companyId: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    fortnoxCustomerNumber: number
    name: number
    domain: number
    companyId: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    fortnoxCustomerNumber?: true
    name?: true
    domain?: true
    companyId?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    fortnoxCustomerNumber?: true
    name?: true
    domain?: true
    companyId?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    fortnoxCustomerNumber?: true
    name?: true
    domain?: true
    companyId?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    fortnoxCustomerNumber: string | null
    name: string
    domain: string | null
    companyId: string
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fortnoxCustomerNumber?: boolean
    name?: boolean
    domain?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employeeCustomers?: boolean | Customer$employeeCustomersArgs<ExtArgs>
    timeEntries?: boolean | Customer$timeEntriesArgs<ExtArgs>
    emailActivities?: boolean | Customer$emailActivitiesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fortnoxCustomerNumber?: boolean
    name?: boolean
    domain?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fortnoxCustomerNumber?: boolean
    name?: boolean
    domain?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    fortnoxCustomerNumber?: boolean
    name?: boolean
    domain?: boolean
    companyId?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fortnoxCustomerNumber" | "name" | "domain" | "companyId" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employeeCustomers?: boolean | Customer$employeeCustomersArgs<ExtArgs>
    timeEntries?: boolean | Customer$timeEntriesArgs<ExtArgs>
    emailActivities?: boolean | Customer$emailActivitiesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      employeeCustomers: Prisma.$EmployeeCustomerPayload<ExtArgs>[]
      timeEntries: Prisma.$TimeEntryPayload<ExtArgs>[]
      emailActivities: Prisma.$EmailActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fortnoxCustomerNumber: string | null
      name: string
      domain: string | null
      companyId: string
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employeeCustomers<T extends Customer$employeeCustomersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$employeeCustomersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeEntries<T extends Customer$timeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$timeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailActivities<T extends Customer$emailActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$emailActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly fortnoxCustomerNumber: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly domain: FieldRef<"Customer", 'String'>
    readonly companyId: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.employeeCustomers
   */
  export type Customer$employeeCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    where?: EmployeeCustomerWhereInput
    orderBy?: EmployeeCustomerOrderByWithRelationInput | EmployeeCustomerOrderByWithRelationInput[]
    cursor?: EmployeeCustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeCustomerScalarFieldEnum | EmployeeCustomerScalarFieldEnum[]
  }

  /**
   * Customer.timeEntries
   */
  export type Customer$timeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    cursor?: TimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * Customer.emailActivities
   */
  export type Customer$emailActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    where?: EmailActivityWhereInput
    orderBy?: EmailActivityOrderByWithRelationInput | EmailActivityOrderByWithRelationInput[]
    cursor?: EmailActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailActivityScalarFieldEnum | EmailActivityScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeCustomer
   */

  export type AggregateEmployeeCustomer = {
    _count: EmployeeCustomerCountAggregateOutputType | null
    _min: EmployeeCustomerMinAggregateOutputType | null
    _max: EmployeeCustomerMaxAggregateOutputType | null
  }

  export type EmployeeCustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    customerId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type EmployeeCustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    customerId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type EmployeeCustomerCountAggregateOutputType = {
    id: number
    userId: number
    customerId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type EmployeeCustomerMinAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type EmployeeCustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type EmployeeCustomerCountAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type EmployeeCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeCustomer to aggregate.
     */
    where?: EmployeeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCustomers to fetch.
     */
    orderBy?: EmployeeCustomerOrderByWithRelationInput | EmployeeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeCustomers
    **/
    _count?: true | EmployeeCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeCustomerMaxAggregateInputType
  }

  export type GetEmployeeCustomerAggregateType<T extends EmployeeCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeCustomer[P]>
      : GetScalarType<T[P], AggregateEmployeeCustomer[P]>
  }




  export type EmployeeCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCustomerWhereInput
    orderBy?: EmployeeCustomerOrderByWithAggregationInput | EmployeeCustomerOrderByWithAggregationInput[]
    by: EmployeeCustomerScalarFieldEnum[] | EmployeeCustomerScalarFieldEnum
    having?: EmployeeCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCustomerCountAggregateInputType | true
    _min?: EmployeeCustomerMinAggregateInputType
    _max?: EmployeeCustomerMaxAggregateInputType
  }

  export type EmployeeCustomerGroupByOutputType = {
    id: string
    userId: string
    customerId: string
    assignedAt: Date
    assignedBy: string | null
    _count: EmployeeCustomerCountAggregateOutputType | null
    _min: EmployeeCustomerMinAggregateOutputType | null
    _max: EmployeeCustomerMaxAggregateOutputType | null
  }

  type GetEmployeeCustomerGroupByPayload<T extends EmployeeCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeCustomerGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeCustomer"]>

  export type EmployeeCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeCustomer"]>

  export type EmployeeCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeCustomer"]>

  export type EmployeeCustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    customerId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
  }

  export type EmployeeCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "customerId" | "assignedAt" | "assignedBy", ExtArgs["result"]["employeeCustomer"]>
  export type EmployeeCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type EmployeeCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type EmployeeCustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $EmployeeCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeCustomer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      customerId: string
      assignedAt: Date
      assignedBy: string | null
    }, ExtArgs["result"]["employeeCustomer"]>
    composites: {}
  }

  type EmployeeCustomerGetPayload<S extends boolean | null | undefined | EmployeeCustomerDefaultArgs> = $Result.GetResult<Prisma.$EmployeeCustomerPayload, S>

  type EmployeeCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCustomerCountAggregateInputType | true
    }

  export interface EmployeeCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeCustomer'], meta: { name: 'EmployeeCustomer' } }
    /**
     * Find zero or one EmployeeCustomer that matches the filter.
     * @param {EmployeeCustomerFindUniqueArgs} args - Arguments to find a EmployeeCustomer
     * @example
     * // Get one EmployeeCustomer
     * const employeeCustomer = await prisma.employeeCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeCustomerFindUniqueArgs>(args: SelectSubset<T, EmployeeCustomerFindUniqueArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeCustomerFindUniqueOrThrowArgs} args - Arguments to find a EmployeeCustomer
     * @example
     * // Get one EmployeeCustomer
     * const employeeCustomer = await prisma.employeeCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerFindFirstArgs} args - Arguments to find a EmployeeCustomer
     * @example
     * // Get one EmployeeCustomer
     * const employeeCustomer = await prisma.employeeCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeCustomerFindFirstArgs>(args?: SelectSubset<T, EmployeeCustomerFindFirstArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerFindFirstOrThrowArgs} args - Arguments to find a EmployeeCustomer
     * @example
     * // Get one EmployeeCustomer
     * const employeeCustomer = await prisma.employeeCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeCustomers
     * const employeeCustomers = await prisma.employeeCustomer.findMany()
     * 
     * // Get first 10 EmployeeCustomers
     * const employeeCustomers = await prisma.employeeCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeCustomerWithIdOnly = await prisma.employeeCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeCustomerFindManyArgs>(args?: SelectSubset<T, EmployeeCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeCustomer.
     * @param {EmployeeCustomerCreateArgs} args - Arguments to create a EmployeeCustomer.
     * @example
     * // Create one EmployeeCustomer
     * const EmployeeCustomer = await prisma.employeeCustomer.create({
     *   data: {
     *     // ... data to create a EmployeeCustomer
     *   }
     * })
     * 
     */
    create<T extends EmployeeCustomerCreateArgs>(args: SelectSubset<T, EmployeeCustomerCreateArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeCustomers.
     * @param {EmployeeCustomerCreateManyArgs} args - Arguments to create many EmployeeCustomers.
     * @example
     * // Create many EmployeeCustomers
     * const employeeCustomer = await prisma.employeeCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCustomerCreateManyArgs>(args?: SelectSubset<T, EmployeeCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeCustomers and returns the data saved in the database.
     * @param {EmployeeCustomerCreateManyAndReturnArgs} args - Arguments to create many EmployeeCustomers.
     * @example
     * // Create many EmployeeCustomers
     * const employeeCustomer = await prisma.employeeCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeCustomers and only return the `id`
     * const employeeCustomerWithIdOnly = await prisma.employeeCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeCustomer.
     * @param {EmployeeCustomerDeleteArgs} args - Arguments to delete one EmployeeCustomer.
     * @example
     * // Delete one EmployeeCustomer
     * const EmployeeCustomer = await prisma.employeeCustomer.delete({
     *   where: {
     *     // ... filter to delete one EmployeeCustomer
     *   }
     * })
     * 
     */
    delete<T extends EmployeeCustomerDeleteArgs>(args: SelectSubset<T, EmployeeCustomerDeleteArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeCustomer.
     * @param {EmployeeCustomerUpdateArgs} args - Arguments to update one EmployeeCustomer.
     * @example
     * // Update one EmployeeCustomer
     * const employeeCustomer = await prisma.employeeCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeCustomerUpdateArgs>(args: SelectSubset<T, EmployeeCustomerUpdateArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeCustomers.
     * @param {EmployeeCustomerDeleteManyArgs} args - Arguments to filter EmployeeCustomers to delete.
     * @example
     * // Delete a few EmployeeCustomers
     * const { count } = await prisma.employeeCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeCustomerDeleteManyArgs>(args?: SelectSubset<T, EmployeeCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeCustomers
     * const employeeCustomer = await prisma.employeeCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeCustomerUpdateManyArgs>(args: SelectSubset<T, EmployeeCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeCustomers and returns the data updated in the database.
     * @param {EmployeeCustomerUpdateManyAndReturnArgs} args - Arguments to update many EmployeeCustomers.
     * @example
     * // Update many EmployeeCustomers
     * const employeeCustomer = await prisma.employeeCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeCustomers and only return the `id`
     * const employeeCustomerWithIdOnly = await prisma.employeeCustomer.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeCustomer.
     * @param {EmployeeCustomerUpsertArgs} args - Arguments to update or create a EmployeeCustomer.
     * @example
     * // Update or create a EmployeeCustomer
     * const employeeCustomer = await prisma.employeeCustomer.upsert({
     *   create: {
     *     // ... data to create a EmployeeCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeCustomer we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeCustomerUpsertArgs>(args: SelectSubset<T, EmployeeCustomerUpsertArgs<ExtArgs>>): Prisma__EmployeeCustomerClient<$Result.GetResult<Prisma.$EmployeeCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerCountArgs} args - Arguments to filter EmployeeCustomers to count.
     * @example
     * // Count the number of EmployeeCustomers
     * const count = await prisma.employeeCustomer.count({
     *   where: {
     *     // ... the filter for the EmployeeCustomers we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCustomerCountArgs>(
      args?: Subset<T, EmployeeCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeCustomerAggregateArgs>(args: Subset<T, EmployeeCustomerAggregateArgs>): Prisma.PrismaPromise<GetEmployeeCustomerAggregateType<T>>

    /**
     * Group by EmployeeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCustomerGroupByArgs} args - Group by arguments.
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
      T extends EmployeeCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeCustomerGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeCustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeCustomer model
   */
  readonly fields: EmployeeCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmployeeCustomer model
   */
  interface EmployeeCustomerFieldRefs {
    readonly id: FieldRef<"EmployeeCustomer", 'String'>
    readonly userId: FieldRef<"EmployeeCustomer", 'String'>
    readonly customerId: FieldRef<"EmployeeCustomer", 'String'>
    readonly assignedAt: FieldRef<"EmployeeCustomer", 'DateTime'>
    readonly assignedBy: FieldRef<"EmployeeCustomer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeCustomer findUnique
   */
  export type EmployeeCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCustomer to fetch.
     */
    where: EmployeeCustomerWhereUniqueInput
  }

  /**
   * EmployeeCustomer findUniqueOrThrow
   */
  export type EmployeeCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCustomer to fetch.
     */
    where: EmployeeCustomerWhereUniqueInput
  }

  /**
   * EmployeeCustomer findFirst
   */
  export type EmployeeCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCustomer to fetch.
     */
    where?: EmployeeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCustomers to fetch.
     */
    orderBy?: EmployeeCustomerOrderByWithRelationInput | EmployeeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeCustomers.
     */
    cursor?: EmployeeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCustomers.
     */
    distinct?: EmployeeCustomerScalarFieldEnum | EmployeeCustomerScalarFieldEnum[]
  }

  /**
   * EmployeeCustomer findFirstOrThrow
   */
  export type EmployeeCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCustomer to fetch.
     */
    where?: EmployeeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCustomers to fetch.
     */
    orderBy?: EmployeeCustomerOrderByWithRelationInput | EmployeeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeCustomers.
     */
    cursor?: EmployeeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCustomers.
     */
    distinct?: EmployeeCustomerScalarFieldEnum | EmployeeCustomerScalarFieldEnum[]
  }

  /**
   * EmployeeCustomer findMany
   */
  export type EmployeeCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCustomers to fetch.
     */
    where?: EmployeeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCustomers to fetch.
     */
    orderBy?: EmployeeCustomerOrderByWithRelationInput | EmployeeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeCustomers.
     */
    cursor?: EmployeeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCustomers.
     */
    distinct?: EmployeeCustomerScalarFieldEnum | EmployeeCustomerScalarFieldEnum[]
  }

  /**
   * EmployeeCustomer create
   */
  export type EmployeeCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeCustomer.
     */
    data: XOR<EmployeeCustomerCreateInput, EmployeeCustomerUncheckedCreateInput>
  }

  /**
   * EmployeeCustomer createMany
   */
  export type EmployeeCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeCustomers.
     */
    data: EmployeeCustomerCreateManyInput | EmployeeCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeCustomer createManyAndReturn
   */
  export type EmployeeCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeCustomers.
     */
    data: EmployeeCustomerCreateManyInput | EmployeeCustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeCustomer update
   */
  export type EmployeeCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeCustomer.
     */
    data: XOR<EmployeeCustomerUpdateInput, EmployeeCustomerUncheckedUpdateInput>
    /**
     * Choose, which EmployeeCustomer to update.
     */
    where: EmployeeCustomerWhereUniqueInput
  }

  /**
   * EmployeeCustomer updateMany
   */
  export type EmployeeCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeCustomers.
     */
    data: XOR<EmployeeCustomerUpdateManyMutationInput, EmployeeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeCustomers to update
     */
    where?: EmployeeCustomerWhereInput
    /**
     * Limit how many EmployeeCustomers to update.
     */
    limit?: number
  }

  /**
   * EmployeeCustomer updateManyAndReturn
   */
  export type EmployeeCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeCustomers.
     */
    data: XOR<EmployeeCustomerUpdateManyMutationInput, EmployeeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeCustomers to update
     */
    where?: EmployeeCustomerWhereInput
    /**
     * Limit how many EmployeeCustomers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeCustomer upsert
   */
  export type EmployeeCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeCustomer to update in case it exists.
     */
    where: EmployeeCustomerWhereUniqueInput
    /**
     * In case the EmployeeCustomer found by the `where` argument doesn't exist, create a new EmployeeCustomer with this data.
     */
    create: XOR<EmployeeCustomerCreateInput, EmployeeCustomerUncheckedCreateInput>
    /**
     * In case the EmployeeCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeCustomerUpdateInput, EmployeeCustomerUncheckedUpdateInput>
  }

  /**
   * EmployeeCustomer delete
   */
  export type EmployeeCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
    /**
     * Filter which EmployeeCustomer to delete.
     */
    where: EmployeeCustomerWhereUniqueInput
  }

  /**
   * EmployeeCustomer deleteMany
   */
  export type EmployeeCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeCustomers to delete
     */
    where?: EmployeeCustomerWhereInput
    /**
     * Limit how many EmployeeCustomers to delete.
     */
    limit?: number
  }

  /**
   * EmployeeCustomer without action
   */
  export type EmployeeCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCustomer
     */
    select?: EmployeeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCustomer
     */
    omit?: EmployeeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCustomerInclude<ExtArgs> | null
  }


  /**
   * Model TimeEntry
   */

  export type AggregateTimeEntry = {
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  export type TimeEntryAvgAggregateOutputType = {
    hours: Decimal | null
  }

  export type TimeEntrySumAggregateOutputType = {
    hours: Decimal | null
  }

  export type TimeEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    customerId: string | null
    date: Date | null
    hours: Decimal | null
    description: string | null
    source: string | null
    rawCustomerName: string | null
    createdAt: Date | null
  }

  export type TimeEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    customerId: string | null
    date: Date | null
    hours: Decimal | null
    description: string | null
    source: string | null
    rawCustomerName: string | null
    createdAt: Date | null
  }

  export type TimeEntryCountAggregateOutputType = {
    id: number
    userId: number
    customerId: number
    date: number
    hours: number
    description: number
    source: number
    rawCustomerName: number
    createdAt: number
    _all: number
  }


  export type TimeEntryAvgAggregateInputType = {
    hours?: true
  }

  export type TimeEntrySumAggregateInputType = {
    hours?: true
  }

  export type TimeEntryMinAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    date?: true
    hours?: true
    description?: true
    source?: true
    rawCustomerName?: true
    createdAt?: true
  }

  export type TimeEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    date?: true
    hours?: true
    description?: true
    source?: true
    rawCustomerName?: true
    createdAt?: true
  }

  export type TimeEntryCountAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    date?: true
    hours?: true
    description?: true
    source?: true
    rawCustomerName?: true
    createdAt?: true
    _all?: true
  }

  export type TimeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntry to aggregate.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeEntries
    **/
    _count?: true | TimeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeEntryMaxAggregateInputType
  }

  export type GetTimeEntryAggregateType<T extends TimeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeEntry[P]>
      : GetScalarType<T[P], AggregateTimeEntry[P]>
  }




  export type TimeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithAggregationInput | TimeEntryOrderByWithAggregationInput[]
    by: TimeEntryScalarFieldEnum[] | TimeEntryScalarFieldEnum
    having?: TimeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeEntryCountAggregateInputType | true
    _avg?: TimeEntryAvgAggregateInputType
    _sum?: TimeEntrySumAggregateInputType
    _min?: TimeEntryMinAggregateInputType
    _max?: TimeEntryMaxAggregateInputType
  }

  export type TimeEntryGroupByOutputType = {
    id: string
    userId: string
    customerId: string | null
    date: Date
    hours: Decimal
    description: string | null
    source: string
    rawCustomerName: string | null
    createdAt: Date
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  type GetTimeEntryGroupByPayload<T extends TimeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    date?: boolean
    hours?: boolean
    description?: boolean
    source?: boolean
    rawCustomerName?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | TimeEntry$customerArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    date?: boolean
    hours?: boolean
    description?: boolean
    source?: boolean
    rawCustomerName?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | TimeEntry$customerArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    date?: boolean
    hours?: boolean
    description?: boolean
    source?: boolean
    rawCustomerName?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | TimeEntry$customerArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    customerId?: boolean
    date?: boolean
    hours?: boolean
    description?: boolean
    source?: boolean
    rawCustomerName?: boolean
    createdAt?: boolean
  }

  export type TimeEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "customerId" | "date" | "hours" | "description" | "source" | "rawCustomerName" | "createdAt", ExtArgs["result"]["timeEntry"]>
  export type TimeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | TimeEntry$customerArgs<ExtArgs>
  }
  export type TimeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | TimeEntry$customerArgs<ExtArgs>
  }
  export type TimeEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | TimeEntry$customerArgs<ExtArgs>
  }

  export type $TimeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      customerId: string | null
      date: Date
      hours: Prisma.Decimal
      description: string | null
      source: string
      rawCustomerName: string | null
      createdAt: Date
    }, ExtArgs["result"]["timeEntry"]>
    composites: {}
  }

  type TimeEntryGetPayload<S extends boolean | null | undefined | TimeEntryDefaultArgs> = $Result.GetResult<Prisma.$TimeEntryPayload, S>

  type TimeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeEntryCountAggregateInputType | true
    }

  export interface TimeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeEntry'], meta: { name: 'TimeEntry' } }
    /**
     * Find zero or one TimeEntry that matches the filter.
     * @param {TimeEntryFindUniqueArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeEntryFindUniqueArgs>(args: SelectSubset<T, TimeEntryFindUniqueArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeEntryFindUniqueOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeEntryFindFirstArgs>(args?: SelectSubset<T, TimeEntryFindFirstArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany()
     * 
     * // Get first 10 TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeEntryFindManyArgs>(args?: SelectSubset<T, TimeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeEntry.
     * @param {TimeEntryCreateArgs} args - Arguments to create a TimeEntry.
     * @example
     * // Create one TimeEntry
     * const TimeEntry = await prisma.timeEntry.create({
     *   data: {
     *     // ... data to create a TimeEntry
     *   }
     * })
     * 
     */
    create<T extends TimeEntryCreateArgs>(args: SelectSubset<T, TimeEntryCreateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeEntries.
     * @param {TimeEntryCreateManyArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeEntryCreateManyArgs>(args?: SelectSubset<T, TimeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeEntries and returns the data saved in the database.
     * @param {TimeEntryCreateManyAndReturnArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeEntry.
     * @param {TimeEntryDeleteArgs} args - Arguments to delete one TimeEntry.
     * @example
     * // Delete one TimeEntry
     * const TimeEntry = await prisma.timeEntry.delete({
     *   where: {
     *     // ... filter to delete one TimeEntry
     *   }
     * })
     * 
     */
    delete<T extends TimeEntryDeleteArgs>(args: SelectSubset<T, TimeEntryDeleteArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeEntry.
     * @param {TimeEntryUpdateArgs} args - Arguments to update one TimeEntry.
     * @example
     * // Update one TimeEntry
     * const timeEntry = await prisma.timeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeEntryUpdateArgs>(args: SelectSubset<T, TimeEntryUpdateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeEntries.
     * @param {TimeEntryDeleteManyArgs} args - Arguments to filter TimeEntries to delete.
     * @example
     * // Delete a few TimeEntries
     * const { count } = await prisma.timeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeEntryDeleteManyArgs>(args?: SelectSubset<T, TimeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeEntryUpdateManyArgs>(args: SelectSubset<T, TimeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries and returns the data updated in the database.
     * @param {TimeEntryUpdateManyAndReturnArgs} args - Arguments to update many TimeEntries.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimeEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeEntry.
     * @param {TimeEntryUpsertArgs} args - Arguments to update or create a TimeEntry.
     * @example
     * // Update or create a TimeEntry
     * const timeEntry = await prisma.timeEntry.upsert({
     *   create: {
     *     // ... data to create a TimeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimeEntryUpsertArgs>(args: SelectSubset<T, TimeEntryUpsertArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryCountArgs} args - Arguments to filter TimeEntries to count.
     * @example
     * // Count the number of TimeEntries
     * const count = await prisma.timeEntry.count({
     *   where: {
     *     // ... the filter for the TimeEntries we want to count
     *   }
     * })
    **/
    count<T extends TimeEntryCountArgs>(
      args?: Subset<T, TimeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeEntryAggregateArgs>(args: Subset<T, TimeEntryAggregateArgs>): Prisma.PrismaPromise<GetTimeEntryAggregateType<T>>

    /**
     * Group by TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryGroupByArgs} args - Group by arguments.
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
      T extends TimeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimeEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeEntry model
   */
  readonly fields: TimeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends TimeEntry$customerArgs<ExtArgs> = {}>(args?: Subset<T, TimeEntry$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimeEntry model
   */
  interface TimeEntryFieldRefs {
    readonly id: FieldRef<"TimeEntry", 'String'>
    readonly userId: FieldRef<"TimeEntry", 'String'>
    readonly customerId: FieldRef<"TimeEntry", 'String'>
    readonly date: FieldRef<"TimeEntry", 'DateTime'>
    readonly hours: FieldRef<"TimeEntry", 'Decimal'>
    readonly description: FieldRef<"TimeEntry", 'String'>
    readonly source: FieldRef<"TimeEntry", 'String'>
    readonly rawCustomerName: FieldRef<"TimeEntry", 'String'>
    readonly createdAt: FieldRef<"TimeEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeEntry findUnique
   */
  export type TimeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findUniqueOrThrow
   */
  export type TimeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findFirst
   */
  export type TimeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findFirstOrThrow
   */
  export type TimeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findMany
   */
  export type TimeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntries to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry create
   */
  export type TimeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeEntry.
     */
    data: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
  }

  /**
   * TimeEntry createMany
   */
  export type TimeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeEntry createManyAndReturn
   */
  export type TimeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeEntry update
   */
  export type TimeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeEntry.
     */
    data: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
    /**
     * Choose, which TimeEntry to update.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry updateMany
   */
  export type TimeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
    /**
     * Limit how many TimeEntries to update.
     */
    limit?: number
  }

  /**
   * TimeEntry updateManyAndReturn
   */
  export type TimeEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
    /**
     * Limit how many TimeEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeEntry upsert
   */
  export type TimeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeEntry to update in case it exists.
     */
    where: TimeEntryWhereUniqueInput
    /**
     * In case the TimeEntry found by the `where` argument doesn't exist, create a new TimeEntry with this data.
     */
    create: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
    /**
     * In case the TimeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
  }

  /**
   * TimeEntry delete
   */
  export type TimeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter which TimeEntry to delete.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry deleteMany
   */
  export type TimeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntries to delete
     */
    where?: TimeEntryWhereInput
    /**
     * Limit how many TimeEntries to delete.
     */
    limit?: number
  }

  /**
   * TimeEntry.customer
   */
  export type TimeEntry$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * TimeEntry without action
   */
  export type TimeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeEntry
     */
    omit?: TimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
  }


  /**
   * Model EmailActivity
   */

  export type AggregateEmailActivity = {
    _count: EmailActivityCountAggregateOutputType | null
    _min: EmailActivityMinAggregateOutputType | null
    _max: EmailActivityMaxAggregateOutputType | null
  }

  export type EmailActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    customerId: string | null
    sentAt: Date | null
    recipientEmail: string | null
    recipientDomain: string | null
    subject: string | null
    messageId: string | null
    createdAt: Date | null
  }

  export type EmailActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    customerId: string | null
    sentAt: Date | null
    recipientEmail: string | null
    recipientDomain: string | null
    subject: string | null
    messageId: string | null
    createdAt: Date | null
  }

  export type EmailActivityCountAggregateOutputType = {
    id: number
    userId: number
    customerId: number
    sentAt: number
    recipientEmail: number
    recipientDomain: number
    subject: number
    messageId: number
    createdAt: number
    _all: number
  }


  export type EmailActivityMinAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    sentAt?: true
    recipientEmail?: true
    recipientDomain?: true
    subject?: true
    messageId?: true
    createdAt?: true
  }

  export type EmailActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    sentAt?: true
    recipientEmail?: true
    recipientDomain?: true
    subject?: true
    messageId?: true
    createdAt?: true
  }

  export type EmailActivityCountAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    sentAt?: true
    recipientEmail?: true
    recipientDomain?: true
    subject?: true
    messageId?: true
    createdAt?: true
    _all?: true
  }

  export type EmailActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailActivity to aggregate.
     */
    where?: EmailActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActivities to fetch.
     */
    orderBy?: EmailActivityOrderByWithRelationInput | EmailActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailActivities
    **/
    _count?: true | EmailActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailActivityMaxAggregateInputType
  }

  export type GetEmailActivityAggregateType<T extends EmailActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailActivity[P]>
      : GetScalarType<T[P], AggregateEmailActivity[P]>
  }




  export type EmailActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailActivityWhereInput
    orderBy?: EmailActivityOrderByWithAggregationInput | EmailActivityOrderByWithAggregationInput[]
    by: EmailActivityScalarFieldEnum[] | EmailActivityScalarFieldEnum
    having?: EmailActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailActivityCountAggregateInputType | true
    _min?: EmailActivityMinAggregateInputType
    _max?: EmailActivityMaxAggregateInputType
  }

  export type EmailActivityGroupByOutputType = {
    id: string
    userId: string
    customerId: string | null
    sentAt: Date
    recipientEmail: string
    recipientDomain: string
    subject: string | null
    messageId: string | null
    createdAt: Date
    _count: EmailActivityCountAggregateOutputType | null
    _min: EmailActivityMinAggregateOutputType | null
    _max: EmailActivityMaxAggregateOutputType | null
  }

  type GetEmailActivityGroupByPayload<T extends EmailActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailActivityGroupByOutputType[P]>
            : GetScalarType<T[P], EmailActivityGroupByOutputType[P]>
        }
      >
    >


  export type EmailActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    sentAt?: boolean
    recipientEmail?: boolean
    recipientDomain?: boolean
    subject?: boolean
    messageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | EmailActivity$customerArgs<ExtArgs>
  }, ExtArgs["result"]["emailActivity"]>

  export type EmailActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    sentAt?: boolean
    recipientEmail?: boolean
    recipientDomain?: boolean
    subject?: boolean
    messageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | EmailActivity$customerArgs<ExtArgs>
  }, ExtArgs["result"]["emailActivity"]>

  export type EmailActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    customerId?: boolean
    sentAt?: boolean
    recipientEmail?: boolean
    recipientDomain?: boolean
    subject?: boolean
    messageId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | EmailActivity$customerArgs<ExtArgs>
  }, ExtArgs["result"]["emailActivity"]>

  export type EmailActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    customerId?: boolean
    sentAt?: boolean
    recipientEmail?: boolean
    recipientDomain?: boolean
    subject?: boolean
    messageId?: boolean
    createdAt?: boolean
  }

  export type EmailActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "customerId" | "sentAt" | "recipientEmail" | "recipientDomain" | "subject" | "messageId" | "createdAt", ExtArgs["result"]["emailActivity"]>
  export type EmailActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | EmailActivity$customerArgs<ExtArgs>
  }
  export type EmailActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | EmailActivity$customerArgs<ExtArgs>
  }
  export type EmailActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | EmailActivity$customerArgs<ExtArgs>
  }

  export type $EmailActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      customerId: string | null
      sentAt: Date
      recipientEmail: string
      recipientDomain: string
      subject: string | null
      messageId: string | null
      createdAt: Date
    }, ExtArgs["result"]["emailActivity"]>
    composites: {}
  }

  type EmailActivityGetPayload<S extends boolean | null | undefined | EmailActivityDefaultArgs> = $Result.GetResult<Prisma.$EmailActivityPayload, S>

  type EmailActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailActivityCountAggregateInputType | true
    }

  export interface EmailActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailActivity'], meta: { name: 'EmailActivity' } }
    /**
     * Find zero or one EmailActivity that matches the filter.
     * @param {EmailActivityFindUniqueArgs} args - Arguments to find a EmailActivity
     * @example
     * // Get one EmailActivity
     * const emailActivity = await prisma.emailActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailActivityFindUniqueArgs>(args: SelectSubset<T, EmailActivityFindUniqueArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailActivityFindUniqueOrThrowArgs} args - Arguments to find a EmailActivity
     * @example
     * // Get one EmailActivity
     * const emailActivity = await prisma.emailActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityFindFirstArgs} args - Arguments to find a EmailActivity
     * @example
     * // Get one EmailActivity
     * const emailActivity = await prisma.emailActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailActivityFindFirstArgs>(args?: SelectSubset<T, EmailActivityFindFirstArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityFindFirstOrThrowArgs} args - Arguments to find a EmailActivity
     * @example
     * // Get one EmailActivity
     * const emailActivity = await prisma.emailActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailActivities
     * const emailActivities = await prisma.emailActivity.findMany()
     * 
     * // Get first 10 EmailActivities
     * const emailActivities = await prisma.emailActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailActivityWithIdOnly = await prisma.emailActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailActivityFindManyArgs>(args?: SelectSubset<T, EmailActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailActivity.
     * @param {EmailActivityCreateArgs} args - Arguments to create a EmailActivity.
     * @example
     * // Create one EmailActivity
     * const EmailActivity = await prisma.emailActivity.create({
     *   data: {
     *     // ... data to create a EmailActivity
     *   }
     * })
     * 
     */
    create<T extends EmailActivityCreateArgs>(args: SelectSubset<T, EmailActivityCreateArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailActivities.
     * @param {EmailActivityCreateManyArgs} args - Arguments to create many EmailActivities.
     * @example
     * // Create many EmailActivities
     * const emailActivity = await prisma.emailActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailActivityCreateManyArgs>(args?: SelectSubset<T, EmailActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailActivities and returns the data saved in the database.
     * @param {EmailActivityCreateManyAndReturnArgs} args - Arguments to create many EmailActivities.
     * @example
     * // Create many EmailActivities
     * const emailActivity = await prisma.emailActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailActivities and only return the `id`
     * const emailActivityWithIdOnly = await prisma.emailActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailActivity.
     * @param {EmailActivityDeleteArgs} args - Arguments to delete one EmailActivity.
     * @example
     * // Delete one EmailActivity
     * const EmailActivity = await prisma.emailActivity.delete({
     *   where: {
     *     // ... filter to delete one EmailActivity
     *   }
     * })
     * 
     */
    delete<T extends EmailActivityDeleteArgs>(args: SelectSubset<T, EmailActivityDeleteArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailActivity.
     * @param {EmailActivityUpdateArgs} args - Arguments to update one EmailActivity.
     * @example
     * // Update one EmailActivity
     * const emailActivity = await prisma.emailActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailActivityUpdateArgs>(args: SelectSubset<T, EmailActivityUpdateArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailActivities.
     * @param {EmailActivityDeleteManyArgs} args - Arguments to filter EmailActivities to delete.
     * @example
     * // Delete a few EmailActivities
     * const { count } = await prisma.emailActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailActivityDeleteManyArgs>(args?: SelectSubset<T, EmailActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailActivities
     * const emailActivity = await prisma.emailActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailActivityUpdateManyArgs>(args: SelectSubset<T, EmailActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailActivities and returns the data updated in the database.
     * @param {EmailActivityUpdateManyAndReturnArgs} args - Arguments to update many EmailActivities.
     * @example
     * // Update many EmailActivities
     * const emailActivity = await prisma.emailActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailActivities and only return the `id`
     * const emailActivityWithIdOnly = await prisma.emailActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailActivity.
     * @param {EmailActivityUpsertArgs} args - Arguments to update or create a EmailActivity.
     * @example
     * // Update or create a EmailActivity
     * const emailActivity = await prisma.emailActivity.upsert({
     *   create: {
     *     // ... data to create a EmailActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailActivity we want to update
     *   }
     * })
     */
    upsert<T extends EmailActivityUpsertArgs>(args: SelectSubset<T, EmailActivityUpsertArgs<ExtArgs>>): Prisma__EmailActivityClient<$Result.GetResult<Prisma.$EmailActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityCountArgs} args - Arguments to filter EmailActivities to count.
     * @example
     * // Count the number of EmailActivities
     * const count = await prisma.emailActivity.count({
     *   where: {
     *     // ... the filter for the EmailActivities we want to count
     *   }
     * })
    **/
    count<T extends EmailActivityCountArgs>(
      args?: Subset<T, EmailActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailActivityAggregateArgs>(args: Subset<T, EmailActivityAggregateArgs>): Prisma.PrismaPromise<GetEmailActivityAggregateType<T>>

    /**
     * Group by EmailActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailActivityGroupByArgs} args - Group by arguments.
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
      T extends EmailActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailActivityGroupByArgs['orderBy'] }
        : { orderBy?: EmailActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailActivity model
   */
  readonly fields: EmailActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends EmailActivity$customerArgs<ExtArgs> = {}>(args?: Subset<T, EmailActivity$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailActivity model
   */
  interface EmailActivityFieldRefs {
    readonly id: FieldRef<"EmailActivity", 'String'>
    readonly userId: FieldRef<"EmailActivity", 'String'>
    readonly customerId: FieldRef<"EmailActivity", 'String'>
    readonly sentAt: FieldRef<"EmailActivity", 'DateTime'>
    readonly recipientEmail: FieldRef<"EmailActivity", 'String'>
    readonly recipientDomain: FieldRef<"EmailActivity", 'String'>
    readonly subject: FieldRef<"EmailActivity", 'String'>
    readonly messageId: FieldRef<"EmailActivity", 'String'>
    readonly createdAt: FieldRef<"EmailActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailActivity findUnique
   */
  export type EmailActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * Filter, which EmailActivity to fetch.
     */
    where: EmailActivityWhereUniqueInput
  }

  /**
   * EmailActivity findUniqueOrThrow
   */
  export type EmailActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * Filter, which EmailActivity to fetch.
     */
    where: EmailActivityWhereUniqueInput
  }

  /**
   * EmailActivity findFirst
   */
  export type EmailActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * Filter, which EmailActivity to fetch.
     */
    where?: EmailActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActivities to fetch.
     */
    orderBy?: EmailActivityOrderByWithRelationInput | EmailActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailActivities.
     */
    cursor?: EmailActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailActivities.
     */
    distinct?: EmailActivityScalarFieldEnum | EmailActivityScalarFieldEnum[]
  }

  /**
   * EmailActivity findFirstOrThrow
   */
  export type EmailActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * Filter, which EmailActivity to fetch.
     */
    where?: EmailActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActivities to fetch.
     */
    orderBy?: EmailActivityOrderByWithRelationInput | EmailActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailActivities.
     */
    cursor?: EmailActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailActivities.
     */
    distinct?: EmailActivityScalarFieldEnum | EmailActivityScalarFieldEnum[]
  }

  /**
   * EmailActivity findMany
   */
  export type EmailActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * Filter, which EmailActivities to fetch.
     */
    where?: EmailActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailActivities to fetch.
     */
    orderBy?: EmailActivityOrderByWithRelationInput | EmailActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailActivities.
     */
    cursor?: EmailActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailActivities.
     */
    distinct?: EmailActivityScalarFieldEnum | EmailActivityScalarFieldEnum[]
  }

  /**
   * EmailActivity create
   */
  export type EmailActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailActivity.
     */
    data: XOR<EmailActivityCreateInput, EmailActivityUncheckedCreateInput>
  }

  /**
   * EmailActivity createMany
   */
  export type EmailActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailActivities.
     */
    data: EmailActivityCreateManyInput | EmailActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailActivity createManyAndReturn
   */
  export type EmailActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * The data used to create many EmailActivities.
     */
    data: EmailActivityCreateManyInput | EmailActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailActivity update
   */
  export type EmailActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailActivity.
     */
    data: XOR<EmailActivityUpdateInput, EmailActivityUncheckedUpdateInput>
    /**
     * Choose, which EmailActivity to update.
     */
    where: EmailActivityWhereUniqueInput
  }

  /**
   * EmailActivity updateMany
   */
  export type EmailActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailActivities.
     */
    data: XOR<EmailActivityUpdateManyMutationInput, EmailActivityUncheckedUpdateManyInput>
    /**
     * Filter which EmailActivities to update
     */
    where?: EmailActivityWhereInput
    /**
     * Limit how many EmailActivities to update.
     */
    limit?: number
  }

  /**
   * EmailActivity updateManyAndReturn
   */
  export type EmailActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * The data used to update EmailActivities.
     */
    data: XOR<EmailActivityUpdateManyMutationInput, EmailActivityUncheckedUpdateManyInput>
    /**
     * Filter which EmailActivities to update
     */
    where?: EmailActivityWhereInput
    /**
     * Limit how many EmailActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailActivity upsert
   */
  export type EmailActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailActivity to update in case it exists.
     */
    where: EmailActivityWhereUniqueInput
    /**
     * In case the EmailActivity found by the `where` argument doesn't exist, create a new EmailActivity with this data.
     */
    create: XOR<EmailActivityCreateInput, EmailActivityUncheckedCreateInput>
    /**
     * In case the EmailActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailActivityUpdateInput, EmailActivityUncheckedUpdateInput>
  }

  /**
   * EmailActivity delete
   */
  export type EmailActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
    /**
     * Filter which EmailActivity to delete.
     */
    where: EmailActivityWhereUniqueInput
  }

  /**
   * EmailActivity deleteMany
   */
  export type EmailActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailActivities to delete
     */
    where?: EmailActivityWhereInput
    /**
     * Limit how many EmailActivities to delete.
     */
    limit?: number
  }

  /**
   * EmailActivity.customer
   */
  export type EmailActivity$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * EmailActivity without action
   */
  export type EmailActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailActivity
     */
    select?: EmailActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailActivity
     */
    omit?: EmailActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailActivityInclude<ExtArgs> | null
  }


  /**
   * Model FortnoxSyncLog
   */

  export type AggregateFortnoxSyncLog = {
    _count: FortnoxSyncLogCountAggregateOutputType | null
    _min: FortnoxSyncLogMinAggregateOutputType | null
    _max: FortnoxSyncLogMaxAggregateOutputType | null
  }

  export type FortnoxSyncLogMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    resource: string | null
    lastSyncedAt: Date | null
  }

  export type FortnoxSyncLogMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    resource: string | null
    lastSyncedAt: Date | null
  }

  export type FortnoxSyncLogCountAggregateOutputType = {
    id: number
    companyId: number
    resource: number
    lastSyncedAt: number
    _all: number
  }


  export type FortnoxSyncLogMinAggregateInputType = {
    id?: true
    companyId?: true
    resource?: true
    lastSyncedAt?: true
  }

  export type FortnoxSyncLogMaxAggregateInputType = {
    id?: true
    companyId?: true
    resource?: true
    lastSyncedAt?: true
  }

  export type FortnoxSyncLogCountAggregateInputType = {
    id?: true
    companyId?: true
    resource?: true
    lastSyncedAt?: true
    _all?: true
  }

  export type FortnoxSyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FortnoxSyncLog to aggregate.
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FortnoxSyncLogs to fetch.
     */
    orderBy?: FortnoxSyncLogOrderByWithRelationInput | FortnoxSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FortnoxSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FortnoxSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FortnoxSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FortnoxSyncLogs
    **/
    _count?: true | FortnoxSyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FortnoxSyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FortnoxSyncLogMaxAggregateInputType
  }

  export type GetFortnoxSyncLogAggregateType<T extends FortnoxSyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFortnoxSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFortnoxSyncLog[P]>
      : GetScalarType<T[P], AggregateFortnoxSyncLog[P]>
  }




  export type FortnoxSyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FortnoxSyncLogWhereInput
    orderBy?: FortnoxSyncLogOrderByWithAggregationInput | FortnoxSyncLogOrderByWithAggregationInput[]
    by: FortnoxSyncLogScalarFieldEnum[] | FortnoxSyncLogScalarFieldEnum
    having?: FortnoxSyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FortnoxSyncLogCountAggregateInputType | true
    _min?: FortnoxSyncLogMinAggregateInputType
    _max?: FortnoxSyncLogMaxAggregateInputType
  }

  export type FortnoxSyncLogGroupByOutputType = {
    id: string
    companyId: string
    resource: string
    lastSyncedAt: Date
    _count: FortnoxSyncLogCountAggregateOutputType | null
    _min: FortnoxSyncLogMinAggregateOutputType | null
    _max: FortnoxSyncLogMaxAggregateOutputType | null
  }

  type GetFortnoxSyncLogGroupByPayload<T extends FortnoxSyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FortnoxSyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FortnoxSyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FortnoxSyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], FortnoxSyncLogGroupByOutputType[P]>
        }
      >
    >


  export type FortnoxSyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    resource?: boolean
    lastSyncedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fortnoxSyncLog"]>

  export type FortnoxSyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    resource?: boolean
    lastSyncedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fortnoxSyncLog"]>

  export type FortnoxSyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    resource?: boolean
    lastSyncedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fortnoxSyncLog"]>

  export type FortnoxSyncLogSelectScalar = {
    id?: boolean
    companyId?: boolean
    resource?: boolean
    lastSyncedAt?: boolean
  }

  export type FortnoxSyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "resource" | "lastSyncedAt", ExtArgs["result"]["fortnoxSyncLog"]>
  export type FortnoxSyncLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FortnoxSyncLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FortnoxSyncLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $FortnoxSyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FortnoxSyncLog"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      resource: string
      lastSyncedAt: Date
    }, ExtArgs["result"]["fortnoxSyncLog"]>
    composites: {}
  }

  type FortnoxSyncLogGetPayload<S extends boolean | null | undefined | FortnoxSyncLogDefaultArgs> = $Result.GetResult<Prisma.$FortnoxSyncLogPayload, S>

  type FortnoxSyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FortnoxSyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FortnoxSyncLogCountAggregateInputType | true
    }

  export interface FortnoxSyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FortnoxSyncLog'], meta: { name: 'FortnoxSyncLog' } }
    /**
     * Find zero or one FortnoxSyncLog that matches the filter.
     * @param {FortnoxSyncLogFindUniqueArgs} args - Arguments to find a FortnoxSyncLog
     * @example
     * // Get one FortnoxSyncLog
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FortnoxSyncLogFindUniqueArgs>(args: SelectSubset<T, FortnoxSyncLogFindUniqueArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FortnoxSyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FortnoxSyncLogFindUniqueOrThrowArgs} args - Arguments to find a FortnoxSyncLog
     * @example
     * // Get one FortnoxSyncLog
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FortnoxSyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FortnoxSyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FortnoxSyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogFindFirstArgs} args - Arguments to find a FortnoxSyncLog
     * @example
     * // Get one FortnoxSyncLog
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FortnoxSyncLogFindFirstArgs>(args?: SelectSubset<T, FortnoxSyncLogFindFirstArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FortnoxSyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogFindFirstOrThrowArgs} args - Arguments to find a FortnoxSyncLog
     * @example
     * // Get one FortnoxSyncLog
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FortnoxSyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FortnoxSyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FortnoxSyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FortnoxSyncLogs
     * const fortnoxSyncLogs = await prisma.fortnoxSyncLog.findMany()
     * 
     * // Get first 10 FortnoxSyncLogs
     * const fortnoxSyncLogs = await prisma.fortnoxSyncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fortnoxSyncLogWithIdOnly = await prisma.fortnoxSyncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FortnoxSyncLogFindManyArgs>(args?: SelectSubset<T, FortnoxSyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FortnoxSyncLog.
     * @param {FortnoxSyncLogCreateArgs} args - Arguments to create a FortnoxSyncLog.
     * @example
     * // Create one FortnoxSyncLog
     * const FortnoxSyncLog = await prisma.fortnoxSyncLog.create({
     *   data: {
     *     // ... data to create a FortnoxSyncLog
     *   }
     * })
     * 
     */
    create<T extends FortnoxSyncLogCreateArgs>(args: SelectSubset<T, FortnoxSyncLogCreateArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FortnoxSyncLogs.
     * @param {FortnoxSyncLogCreateManyArgs} args - Arguments to create many FortnoxSyncLogs.
     * @example
     * // Create many FortnoxSyncLogs
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FortnoxSyncLogCreateManyArgs>(args?: SelectSubset<T, FortnoxSyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FortnoxSyncLogs and returns the data saved in the database.
     * @param {FortnoxSyncLogCreateManyAndReturnArgs} args - Arguments to create many FortnoxSyncLogs.
     * @example
     * // Create many FortnoxSyncLogs
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FortnoxSyncLogs and only return the `id`
     * const fortnoxSyncLogWithIdOnly = await prisma.fortnoxSyncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FortnoxSyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, FortnoxSyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FortnoxSyncLog.
     * @param {FortnoxSyncLogDeleteArgs} args - Arguments to delete one FortnoxSyncLog.
     * @example
     * // Delete one FortnoxSyncLog
     * const FortnoxSyncLog = await prisma.fortnoxSyncLog.delete({
     *   where: {
     *     // ... filter to delete one FortnoxSyncLog
     *   }
     * })
     * 
     */
    delete<T extends FortnoxSyncLogDeleteArgs>(args: SelectSubset<T, FortnoxSyncLogDeleteArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FortnoxSyncLog.
     * @param {FortnoxSyncLogUpdateArgs} args - Arguments to update one FortnoxSyncLog.
     * @example
     * // Update one FortnoxSyncLog
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FortnoxSyncLogUpdateArgs>(args: SelectSubset<T, FortnoxSyncLogUpdateArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FortnoxSyncLogs.
     * @param {FortnoxSyncLogDeleteManyArgs} args - Arguments to filter FortnoxSyncLogs to delete.
     * @example
     * // Delete a few FortnoxSyncLogs
     * const { count } = await prisma.fortnoxSyncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FortnoxSyncLogDeleteManyArgs>(args?: SelectSubset<T, FortnoxSyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FortnoxSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FortnoxSyncLogs
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FortnoxSyncLogUpdateManyArgs>(args: SelectSubset<T, FortnoxSyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FortnoxSyncLogs and returns the data updated in the database.
     * @param {FortnoxSyncLogUpdateManyAndReturnArgs} args - Arguments to update many FortnoxSyncLogs.
     * @example
     * // Update many FortnoxSyncLogs
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FortnoxSyncLogs and only return the `id`
     * const fortnoxSyncLogWithIdOnly = await prisma.fortnoxSyncLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends FortnoxSyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, FortnoxSyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FortnoxSyncLog.
     * @param {FortnoxSyncLogUpsertArgs} args - Arguments to update or create a FortnoxSyncLog.
     * @example
     * // Update or create a FortnoxSyncLog
     * const fortnoxSyncLog = await prisma.fortnoxSyncLog.upsert({
     *   create: {
     *     // ... data to create a FortnoxSyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FortnoxSyncLog we want to update
     *   }
     * })
     */
    upsert<T extends FortnoxSyncLogUpsertArgs>(args: SelectSubset<T, FortnoxSyncLogUpsertArgs<ExtArgs>>): Prisma__FortnoxSyncLogClient<$Result.GetResult<Prisma.$FortnoxSyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FortnoxSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogCountArgs} args - Arguments to filter FortnoxSyncLogs to count.
     * @example
     * // Count the number of FortnoxSyncLogs
     * const count = await prisma.fortnoxSyncLog.count({
     *   where: {
     *     // ... the filter for the FortnoxSyncLogs we want to count
     *   }
     * })
    **/
    count<T extends FortnoxSyncLogCountArgs>(
      args?: Subset<T, FortnoxSyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FortnoxSyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FortnoxSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FortnoxSyncLogAggregateArgs>(args: Subset<T, FortnoxSyncLogAggregateArgs>): Prisma.PrismaPromise<GetFortnoxSyncLogAggregateType<T>>

    /**
     * Group by FortnoxSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FortnoxSyncLogGroupByArgs} args - Group by arguments.
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
      T extends FortnoxSyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FortnoxSyncLogGroupByArgs['orderBy'] }
        : { orderBy?: FortnoxSyncLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FortnoxSyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFortnoxSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FortnoxSyncLog model
   */
  readonly fields: FortnoxSyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FortnoxSyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FortnoxSyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FortnoxSyncLog model
   */
  interface FortnoxSyncLogFieldRefs {
    readonly id: FieldRef<"FortnoxSyncLog", 'String'>
    readonly companyId: FieldRef<"FortnoxSyncLog", 'String'>
    readonly resource: FieldRef<"FortnoxSyncLog", 'String'>
    readonly lastSyncedAt: FieldRef<"FortnoxSyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FortnoxSyncLog findUnique
   */
  export type FortnoxSyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which FortnoxSyncLog to fetch.
     */
    where: FortnoxSyncLogWhereUniqueInput
  }

  /**
   * FortnoxSyncLog findUniqueOrThrow
   */
  export type FortnoxSyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which FortnoxSyncLog to fetch.
     */
    where: FortnoxSyncLogWhereUniqueInput
  }

  /**
   * FortnoxSyncLog findFirst
   */
  export type FortnoxSyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which FortnoxSyncLog to fetch.
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FortnoxSyncLogs to fetch.
     */
    orderBy?: FortnoxSyncLogOrderByWithRelationInput | FortnoxSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FortnoxSyncLogs.
     */
    cursor?: FortnoxSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FortnoxSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FortnoxSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FortnoxSyncLogs.
     */
    distinct?: FortnoxSyncLogScalarFieldEnum | FortnoxSyncLogScalarFieldEnum[]
  }

  /**
   * FortnoxSyncLog findFirstOrThrow
   */
  export type FortnoxSyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which FortnoxSyncLog to fetch.
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FortnoxSyncLogs to fetch.
     */
    orderBy?: FortnoxSyncLogOrderByWithRelationInput | FortnoxSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FortnoxSyncLogs.
     */
    cursor?: FortnoxSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FortnoxSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FortnoxSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FortnoxSyncLogs.
     */
    distinct?: FortnoxSyncLogScalarFieldEnum | FortnoxSyncLogScalarFieldEnum[]
  }

  /**
   * FortnoxSyncLog findMany
   */
  export type FortnoxSyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which FortnoxSyncLogs to fetch.
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FortnoxSyncLogs to fetch.
     */
    orderBy?: FortnoxSyncLogOrderByWithRelationInput | FortnoxSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FortnoxSyncLogs.
     */
    cursor?: FortnoxSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FortnoxSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FortnoxSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FortnoxSyncLogs.
     */
    distinct?: FortnoxSyncLogScalarFieldEnum | FortnoxSyncLogScalarFieldEnum[]
  }

  /**
   * FortnoxSyncLog create
   */
  export type FortnoxSyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FortnoxSyncLog.
     */
    data: XOR<FortnoxSyncLogCreateInput, FortnoxSyncLogUncheckedCreateInput>
  }

  /**
   * FortnoxSyncLog createMany
   */
  export type FortnoxSyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FortnoxSyncLogs.
     */
    data: FortnoxSyncLogCreateManyInput | FortnoxSyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FortnoxSyncLog createManyAndReturn
   */
  export type FortnoxSyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many FortnoxSyncLogs.
     */
    data: FortnoxSyncLogCreateManyInput | FortnoxSyncLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FortnoxSyncLog update
   */
  export type FortnoxSyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FortnoxSyncLog.
     */
    data: XOR<FortnoxSyncLogUpdateInput, FortnoxSyncLogUncheckedUpdateInput>
    /**
     * Choose, which FortnoxSyncLog to update.
     */
    where: FortnoxSyncLogWhereUniqueInput
  }

  /**
   * FortnoxSyncLog updateMany
   */
  export type FortnoxSyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FortnoxSyncLogs.
     */
    data: XOR<FortnoxSyncLogUpdateManyMutationInput, FortnoxSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which FortnoxSyncLogs to update
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * Limit how many FortnoxSyncLogs to update.
     */
    limit?: number
  }

  /**
   * FortnoxSyncLog updateManyAndReturn
   */
  export type FortnoxSyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * The data used to update FortnoxSyncLogs.
     */
    data: XOR<FortnoxSyncLogUpdateManyMutationInput, FortnoxSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which FortnoxSyncLogs to update
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * Limit how many FortnoxSyncLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FortnoxSyncLog upsert
   */
  export type FortnoxSyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FortnoxSyncLog to update in case it exists.
     */
    where: FortnoxSyncLogWhereUniqueInput
    /**
     * In case the FortnoxSyncLog found by the `where` argument doesn't exist, create a new FortnoxSyncLog with this data.
     */
    create: XOR<FortnoxSyncLogCreateInput, FortnoxSyncLogUncheckedCreateInput>
    /**
     * In case the FortnoxSyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FortnoxSyncLogUpdateInput, FortnoxSyncLogUncheckedUpdateInput>
  }

  /**
   * FortnoxSyncLog delete
   */
  export type FortnoxSyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
    /**
     * Filter which FortnoxSyncLog to delete.
     */
    where: FortnoxSyncLogWhereUniqueInput
  }

  /**
   * FortnoxSyncLog deleteMany
   */
  export type FortnoxSyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FortnoxSyncLogs to delete
     */
    where?: FortnoxSyncLogWhereInput
    /**
     * Limit how many FortnoxSyncLogs to delete.
     */
    limit?: number
  }

  /**
   * FortnoxSyncLog without action
   */
  export type FortnoxSyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FortnoxSyncLog
     */
    select?: FortnoxSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FortnoxSyncLog
     */
    omit?: FortnoxSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FortnoxSyncLogInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    createdAt: 'createdAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    companyId: 'companyId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyIntegrationScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    service: 'service',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type CompanyIntegrationScalarFieldEnum = (typeof CompanyIntegrationScalarFieldEnum)[keyof typeof CompanyIntegrationScalarFieldEnum]


  export const ImapCredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imapHost: 'imapHost',
    imapPort: 'imapPort',
    emailAddress: 'emailAddress',
    encryptedPassword: 'encryptedPassword',
    useTls: 'useTls',
    createdAt: 'createdAt'
  };

  export type ImapCredentialScalarFieldEnum = (typeof ImapCredentialScalarFieldEnum)[keyof typeof ImapCredentialScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    fortnoxCustomerNumber: 'fortnoxCustomerNumber',
    name: 'name',
    domain: 'domain',
    companyId: 'companyId',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeeCustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type EmployeeCustomerScalarFieldEnum = (typeof EmployeeCustomerScalarFieldEnum)[keyof typeof EmployeeCustomerScalarFieldEnum]


  export const TimeEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId',
    date: 'date',
    hours: 'hours',
    description: 'description',
    source: 'source',
    rawCustomerName: 'rawCustomerName',
    createdAt: 'createdAt'
  };

  export type TimeEntryScalarFieldEnum = (typeof TimeEntryScalarFieldEnum)[keyof typeof TimeEntryScalarFieldEnum]


  export const EmailActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId',
    sentAt: 'sentAt',
    recipientEmail: 'recipientEmail',
    recipientDomain: 'recipientDomain',
    subject: 'subject',
    messageId: 'messageId',
    createdAt: 'createdAt'
  };

  export type EmailActivityScalarFieldEnum = (typeof EmailActivityScalarFieldEnum)[keyof typeof EmailActivityScalarFieldEnum]


  export const FortnoxSyncLogScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    resource: 'resource',
    lastSyncedAt: 'lastSyncedAt'
  };

  export type FortnoxSyncLogScalarFieldEnum = (typeof FortnoxSyncLogScalarFieldEnum)[keyof typeof FortnoxSyncLogScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: UuidFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    domain?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    integrations?: CompanyIntegrationListRelationFilter
    customers?: CustomerListRelationFilter
    fortnoxSyncLogs?: FortnoxSyncLogListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    integrations?: CompanyIntegrationOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    fortnoxSyncLogs?: FortnoxSyncLogOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    integrations?: CompanyIntegrationListRelationFilter
    customers?: CustomerListRelationFilter
    fortnoxSyncLogs?: FortnoxSyncLogListRelationFilter
  }, "id" | "domain">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    domain?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    companyId?: UuidFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    imapCredentials?: ImapCredentialListRelationFilter
    employeeCustomers?: EmployeeCustomerListRelationFilter
    timeEntries?: TimeEntryListRelationFilter
    emailActivities?: EmailActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    imapCredentials?: ImapCredentialOrderByRelationAggregateInput
    employeeCustomers?: EmployeeCustomerOrderByRelationAggregateInput
    timeEntries?: TimeEntryOrderByRelationAggregateInput
    emailActivities?: EmailActivityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    companyId?: UuidFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    imapCredentials?: ImapCredentialListRelationFilter
    employeeCustomers?: EmployeeCustomerListRelationFilter
    timeEntries?: TimeEntryListRelationFilter
    emailActivities?: EmailActivityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    companyId?: UuidWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyIntegrationWhereInput = {
    AND?: CompanyIntegrationWhereInput | CompanyIntegrationWhereInput[]
    OR?: CompanyIntegrationWhereInput[]
    NOT?: CompanyIntegrationWhereInput | CompanyIntegrationWhereInput[]
    id?: UuidFilter<"CompanyIntegration"> | string
    companyId?: UuidFilter<"CompanyIntegration"> | string
    service?: StringFilter<"CompanyIntegration"> | string
    accessToken?: StringFilter<"CompanyIntegration"> | string
    refreshToken?: StringNullableFilter<"CompanyIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"CompanyIntegration"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanyIntegration"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    service?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_service?: CompanyIntegrationCompanyIdServiceCompoundUniqueInput
    AND?: CompanyIntegrationWhereInput | CompanyIntegrationWhereInput[]
    OR?: CompanyIntegrationWhereInput[]
    NOT?: CompanyIntegrationWhereInput | CompanyIntegrationWhereInput[]
    companyId?: UuidFilter<"CompanyIntegration"> | string
    service?: StringFilter<"CompanyIntegration"> | string
    accessToken?: StringFilter<"CompanyIntegration"> | string
    refreshToken?: StringNullableFilter<"CompanyIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"CompanyIntegration"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanyIntegration"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId_service">

  export type CompanyIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    service?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompanyIntegrationCountOrderByAggregateInput
    _max?: CompanyIntegrationMaxOrderByAggregateInput
    _min?: CompanyIntegrationMinOrderByAggregateInput
  }

  export type CompanyIntegrationScalarWhereWithAggregatesInput = {
    AND?: CompanyIntegrationScalarWhereWithAggregatesInput | CompanyIntegrationScalarWhereWithAggregatesInput[]
    OR?: CompanyIntegrationScalarWhereWithAggregatesInput[]
    NOT?: CompanyIntegrationScalarWhereWithAggregatesInput | CompanyIntegrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CompanyIntegration"> | string
    companyId?: UuidWithAggregatesFilter<"CompanyIntegration"> | string
    service?: StringWithAggregatesFilter<"CompanyIntegration"> | string
    accessToken?: StringWithAggregatesFilter<"CompanyIntegration"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"CompanyIntegration"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CompanyIntegration"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanyIntegration"> | Date | string
  }

  export type ImapCredentialWhereInput = {
    AND?: ImapCredentialWhereInput | ImapCredentialWhereInput[]
    OR?: ImapCredentialWhereInput[]
    NOT?: ImapCredentialWhereInput | ImapCredentialWhereInput[]
    id?: UuidFilter<"ImapCredential"> | string
    userId?: UuidNullableFilter<"ImapCredential"> | string | null
    imapHost?: StringFilter<"ImapCredential"> | string
    imapPort?: IntFilter<"ImapCredential"> | number
    emailAddress?: StringFilter<"ImapCredential"> | string
    encryptedPassword?: StringFilter<"ImapCredential"> | string
    useTls?: BoolFilter<"ImapCredential"> | boolean
    createdAt?: DateTimeFilter<"ImapCredential"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ImapCredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    imapHost?: SortOrder
    imapPort?: SortOrder
    emailAddress?: SortOrder
    encryptedPassword?: SortOrder
    useTls?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ImapCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImapCredentialWhereInput | ImapCredentialWhereInput[]
    OR?: ImapCredentialWhereInput[]
    NOT?: ImapCredentialWhereInput | ImapCredentialWhereInput[]
    userId?: UuidNullableFilter<"ImapCredential"> | string | null
    imapHost?: StringFilter<"ImapCredential"> | string
    imapPort?: IntFilter<"ImapCredential"> | number
    emailAddress?: StringFilter<"ImapCredential"> | string
    encryptedPassword?: StringFilter<"ImapCredential"> | string
    useTls?: BoolFilter<"ImapCredential"> | boolean
    createdAt?: DateTimeFilter<"ImapCredential"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ImapCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    imapHost?: SortOrder
    imapPort?: SortOrder
    emailAddress?: SortOrder
    encryptedPassword?: SortOrder
    useTls?: SortOrder
    createdAt?: SortOrder
    _count?: ImapCredentialCountOrderByAggregateInput
    _avg?: ImapCredentialAvgOrderByAggregateInput
    _max?: ImapCredentialMaxOrderByAggregateInput
    _min?: ImapCredentialMinOrderByAggregateInput
    _sum?: ImapCredentialSumOrderByAggregateInput
  }

  export type ImapCredentialScalarWhereWithAggregatesInput = {
    AND?: ImapCredentialScalarWhereWithAggregatesInput | ImapCredentialScalarWhereWithAggregatesInput[]
    OR?: ImapCredentialScalarWhereWithAggregatesInput[]
    NOT?: ImapCredentialScalarWhereWithAggregatesInput | ImapCredentialScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ImapCredential"> | string
    userId?: UuidNullableWithAggregatesFilter<"ImapCredential"> | string | null
    imapHost?: StringWithAggregatesFilter<"ImapCredential"> | string
    imapPort?: IntWithAggregatesFilter<"ImapCredential"> | number
    emailAddress?: StringWithAggregatesFilter<"ImapCredential"> | string
    encryptedPassword?: StringWithAggregatesFilter<"ImapCredential"> | string
    useTls?: BoolWithAggregatesFilter<"ImapCredential"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ImapCredential"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: UuidFilter<"Customer"> | string
    fortnoxCustomerNumber?: StringNullableFilter<"Customer"> | string | null
    name?: StringFilter<"Customer"> | string
    domain?: StringNullableFilter<"Customer"> | string | null
    companyId?: UuidFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employeeCustomers?: EmployeeCustomerListRelationFilter
    timeEntries?: TimeEntryListRelationFilter
    emailActivities?: EmailActivityListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    fortnoxCustomerNumber?: SortOrderInput | SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    employeeCustomers?: EmployeeCustomerOrderByRelationAggregateInput
    timeEntries?: TimeEntryOrderByRelationAggregateInput
    emailActivities?: EmailActivityOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    fortnoxCustomerNumber?: StringNullableFilter<"Customer"> | string | null
    name?: StringFilter<"Customer"> | string
    domain?: StringNullableFilter<"Customer"> | string | null
    companyId?: UuidFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employeeCustomers?: EmployeeCustomerListRelationFilter
    timeEntries?: TimeEntryListRelationFilter
    emailActivities?: EmailActivityListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    fortnoxCustomerNumber?: SortOrderInput | SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Customer"> | string
    fortnoxCustomerNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    name?: StringWithAggregatesFilter<"Customer"> | string
    domain?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    companyId?: UuidWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type EmployeeCustomerWhereInput = {
    AND?: EmployeeCustomerWhereInput | EmployeeCustomerWhereInput[]
    OR?: EmployeeCustomerWhereInput[]
    NOT?: EmployeeCustomerWhereInput | EmployeeCustomerWhereInput[]
    id?: UuidFilter<"EmployeeCustomer"> | string
    userId?: UuidFilter<"EmployeeCustomer"> | string
    customerId?: UuidFilter<"EmployeeCustomer"> | string
    assignedAt?: DateTimeFilter<"EmployeeCustomer"> | Date | string
    assignedBy?: UuidNullableFilter<"EmployeeCustomer"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type EmployeeCustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type EmployeeCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_customerId?: EmployeeCustomerUserIdCustomerIdCompoundUniqueInput
    AND?: EmployeeCustomerWhereInput | EmployeeCustomerWhereInput[]
    OR?: EmployeeCustomerWhereInput[]
    NOT?: EmployeeCustomerWhereInput | EmployeeCustomerWhereInput[]
    userId?: UuidFilter<"EmployeeCustomer"> | string
    customerId?: UuidFilter<"EmployeeCustomer"> | string
    assignedAt?: DateTimeFilter<"EmployeeCustomer"> | Date | string
    assignedBy?: UuidNullableFilter<"EmployeeCustomer"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "userId_customerId">

  export type EmployeeCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    _count?: EmployeeCustomerCountOrderByAggregateInput
    _max?: EmployeeCustomerMaxOrderByAggregateInput
    _min?: EmployeeCustomerMinOrderByAggregateInput
  }

  export type EmployeeCustomerScalarWhereWithAggregatesInput = {
    AND?: EmployeeCustomerScalarWhereWithAggregatesInput | EmployeeCustomerScalarWhereWithAggregatesInput[]
    OR?: EmployeeCustomerScalarWhereWithAggregatesInput[]
    NOT?: EmployeeCustomerScalarWhereWithAggregatesInput | EmployeeCustomerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmployeeCustomer"> | string
    userId?: UuidWithAggregatesFilter<"EmployeeCustomer"> | string
    customerId?: UuidWithAggregatesFilter<"EmployeeCustomer"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"EmployeeCustomer"> | Date | string
    assignedBy?: UuidNullableWithAggregatesFilter<"EmployeeCustomer"> | string | null
  }

  export type TimeEntryWhereInput = {
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    id?: UuidFilter<"TimeEntry"> | string
    userId?: UuidFilter<"TimeEntry"> | string
    customerId?: UuidNullableFilter<"TimeEntry"> | string | null
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    hours?: DecimalFilter<"TimeEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    source?: StringFilter<"TimeEntry"> | string
    rawCustomerName?: StringNullableFilter<"TimeEntry"> | string | null
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type TimeEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    date?: SortOrder
    hours?: SortOrder
    description?: SortOrderInput | SortOrder
    source?: SortOrder
    rawCustomerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type TimeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    userId?: UuidFilter<"TimeEntry"> | string
    customerId?: UuidNullableFilter<"TimeEntry"> | string | null
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    hours?: DecimalFilter<"TimeEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    source?: StringFilter<"TimeEntry"> | string
    rawCustomerName?: StringNullableFilter<"TimeEntry"> | string | null
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type TimeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    date?: SortOrder
    hours?: SortOrder
    description?: SortOrderInput | SortOrder
    source?: SortOrder
    rawCustomerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TimeEntryCountOrderByAggregateInput
    _avg?: TimeEntryAvgOrderByAggregateInput
    _max?: TimeEntryMaxOrderByAggregateInput
    _min?: TimeEntryMinOrderByAggregateInput
    _sum?: TimeEntrySumOrderByAggregateInput
  }

  export type TimeEntryScalarWhereWithAggregatesInput = {
    AND?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    OR?: TimeEntryScalarWhereWithAggregatesInput[]
    NOT?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TimeEntry"> | string
    userId?: UuidWithAggregatesFilter<"TimeEntry"> | string
    customerId?: UuidNullableWithAggregatesFilter<"TimeEntry"> | string | null
    date?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    hours?: DecimalWithAggregatesFilter<"TimeEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"TimeEntry"> | string | null
    source?: StringWithAggregatesFilter<"TimeEntry"> | string
    rawCustomerName?: StringNullableWithAggregatesFilter<"TimeEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
  }

  export type EmailActivityWhereInput = {
    AND?: EmailActivityWhereInput | EmailActivityWhereInput[]
    OR?: EmailActivityWhereInput[]
    NOT?: EmailActivityWhereInput | EmailActivityWhereInput[]
    id?: UuidFilter<"EmailActivity"> | string
    userId?: UuidFilter<"EmailActivity"> | string
    customerId?: UuidNullableFilter<"EmailActivity"> | string | null
    sentAt?: DateTimeFilter<"EmailActivity"> | Date | string
    recipientEmail?: StringFilter<"EmailActivity"> | string
    recipientDomain?: StringFilter<"EmailActivity"> | string
    subject?: StringNullableFilter<"EmailActivity"> | string | null
    messageId?: StringNullableFilter<"EmailActivity"> | string | null
    createdAt?: DateTimeFilter<"EmailActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type EmailActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    recipientEmail?: SortOrder
    recipientDomain?: SortOrder
    subject?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type EmailActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: EmailActivityWhereInput | EmailActivityWhereInput[]
    OR?: EmailActivityWhereInput[]
    NOT?: EmailActivityWhereInput | EmailActivityWhereInput[]
    userId?: UuidFilter<"EmailActivity"> | string
    customerId?: UuidNullableFilter<"EmailActivity"> | string | null
    sentAt?: DateTimeFilter<"EmailActivity"> | Date | string
    recipientEmail?: StringFilter<"EmailActivity"> | string
    recipientDomain?: StringFilter<"EmailActivity"> | string
    subject?: StringNullableFilter<"EmailActivity"> | string | null
    createdAt?: DateTimeFilter<"EmailActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id" | "messageId">

  export type EmailActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    recipientEmail?: SortOrder
    recipientDomain?: SortOrder
    subject?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailActivityCountOrderByAggregateInput
    _max?: EmailActivityMaxOrderByAggregateInput
    _min?: EmailActivityMinOrderByAggregateInput
  }

  export type EmailActivityScalarWhereWithAggregatesInput = {
    AND?: EmailActivityScalarWhereWithAggregatesInput | EmailActivityScalarWhereWithAggregatesInput[]
    OR?: EmailActivityScalarWhereWithAggregatesInput[]
    NOT?: EmailActivityScalarWhereWithAggregatesInput | EmailActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailActivity"> | string
    userId?: UuidWithAggregatesFilter<"EmailActivity"> | string
    customerId?: UuidNullableWithAggregatesFilter<"EmailActivity"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"EmailActivity"> | Date | string
    recipientEmail?: StringWithAggregatesFilter<"EmailActivity"> | string
    recipientDomain?: StringWithAggregatesFilter<"EmailActivity"> | string
    subject?: StringNullableWithAggregatesFilter<"EmailActivity"> | string | null
    messageId?: StringNullableWithAggregatesFilter<"EmailActivity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailActivity"> | Date | string
  }

  export type FortnoxSyncLogWhereInput = {
    AND?: FortnoxSyncLogWhereInput | FortnoxSyncLogWhereInput[]
    OR?: FortnoxSyncLogWhereInput[]
    NOT?: FortnoxSyncLogWhereInput | FortnoxSyncLogWhereInput[]
    id?: UuidFilter<"FortnoxSyncLog"> | string
    companyId?: UuidFilter<"FortnoxSyncLog"> | string
    resource?: StringFilter<"FortnoxSyncLog"> | string
    lastSyncedAt?: DateTimeFilter<"FortnoxSyncLog"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type FortnoxSyncLogOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    resource?: SortOrder
    lastSyncedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type FortnoxSyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_resource?: FortnoxSyncLogCompanyIdResourceCompoundUniqueInput
    AND?: FortnoxSyncLogWhereInput | FortnoxSyncLogWhereInput[]
    OR?: FortnoxSyncLogWhereInput[]
    NOT?: FortnoxSyncLogWhereInput | FortnoxSyncLogWhereInput[]
    companyId?: UuidFilter<"FortnoxSyncLog"> | string
    resource?: StringFilter<"FortnoxSyncLog"> | string
    lastSyncedAt?: DateTimeFilter<"FortnoxSyncLog"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId_resource">

  export type FortnoxSyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    resource?: SortOrder
    lastSyncedAt?: SortOrder
    _count?: FortnoxSyncLogCountOrderByAggregateInput
    _max?: FortnoxSyncLogMaxOrderByAggregateInput
    _min?: FortnoxSyncLogMinOrderByAggregateInput
  }

  export type FortnoxSyncLogScalarWhereWithAggregatesInput = {
    AND?: FortnoxSyncLogScalarWhereWithAggregatesInput | FortnoxSyncLogScalarWhereWithAggregatesInput[]
    OR?: FortnoxSyncLogScalarWhereWithAggregatesInput[]
    NOT?: FortnoxSyncLogScalarWhereWithAggregatesInput | FortnoxSyncLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FortnoxSyncLog"> | string
    companyId?: UuidWithAggregatesFilter<"FortnoxSyncLog"> | string
    resource?: StringWithAggregatesFilter<"FortnoxSyncLog"> | string
    lastSyncedAt?: DateTimeWithAggregatesFilter<"FortnoxSyncLog"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    integrations?: CompanyIntegrationCreateNestedManyWithoutCompanyInput
    customers?: CustomerCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    integrations?: CompanyIntegrationUncheckedCreateNestedManyWithoutCompanyInput
    customers?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    integrations?: CompanyIntegrationUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    integrations?: CompanyIntegrationUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    imapCredentials?: ImapCredentialCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    companyId: string
    role?: string
    createdAt?: Date | string
    imapCredentials?: ImapCredentialUncheckedCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    imapCredentials?: ImapCredentialUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imapCredentials?: ImapCredentialUncheckedUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    companyId: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIntegrationCreateInput = {
    id?: string
    service: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutIntegrationsInput
  }

  export type CompanyIntegrationUncheckedCreateInput = {
    id?: string
    companyId: string
    service: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutIntegrationsNestedInput
  }

  export type CompanyIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIntegrationCreateManyInput = {
    id?: string
    companyId: string
    service: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImapCredentialCreateInput = {
    id?: string
    imapHost: string
    imapPort?: number
    emailAddress: string
    encryptedPassword: string
    useTls?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutImapCredentialsInput
  }

  export type ImapCredentialUncheckedCreateInput = {
    id?: string
    userId?: string | null
    imapHost: string
    imapPort?: number
    emailAddress: string
    encryptedPassword: string
    useTls?: boolean
    createdAt?: Date | string
  }

  export type ImapCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutImapCredentialsNestedInput
  }

  export type ImapCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImapCredentialCreateManyInput = {
    id?: string
    userId?: string | null
    imapHost: string
    imapPort?: number
    emailAddress: string
    encryptedPassword: string
    useTls?: boolean
    createdAt?: Date | string
  }

  export type ImapCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImapCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutCustomersInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutCustomerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    companyId: string
    createdAt?: Date | string
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutCustomerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCustomersNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutCustomerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutCustomerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    companyId: string
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCustomerCreateInput = {
    id?: string
    assignedAt?: Date | string
    assignedBy?: string | null
    user: UserCreateNestedOneWithoutEmployeeCustomersInput
    customer: CustomerCreateNestedOneWithoutEmployeeCustomersInput
  }

  export type EmployeeCustomerUncheckedCreateInput = {
    id?: string
    userId: string
    customerId: string
    assignedAt?: Date | string
    assignedBy?: string | null
  }

  export type EmployeeCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeCustomersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutEmployeeCustomersNestedInput
  }

  export type EmployeeCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCustomerCreateManyInput = {
    id?: string
    userId: string
    customerId: string
    assignedAt?: Date | string
    assignedBy?: string | null
  }

  export type EmployeeCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeEntryCreateInput = {
    id?: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimeEntriesInput
    customer?: CustomerCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateInput = {
    id?: string
    userId: string
    customerId?: string | null
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
  }

  export type TimeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeEntriesNestedInput
    customer?: CustomerUpdateOneWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryCreateManyInput = {
    id?: string
    userId: string
    customerId?: string | null
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
  }

  export type TimeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityCreateInput = {
    id?: string
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailActivitiesInput
    customer?: CustomerCreateNestedOneWithoutEmailActivitiesInput
  }

  export type EmailActivityUncheckedCreateInput = {
    id?: string
    userId: string
    customerId?: string | null
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
  }

  export type EmailActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailActivitiesNestedInput
    customer?: CustomerUpdateOneWithoutEmailActivitiesNestedInput
  }

  export type EmailActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityCreateManyInput = {
    id?: string
    userId: string
    customerId?: string | null
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
  }

  export type EmailActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FortnoxSyncLogCreateInput = {
    id?: string
    resource: string
    lastSyncedAt: Date | string
    company: CompanyCreateNestedOneWithoutFortnoxSyncLogsInput
  }

  export type FortnoxSyncLogUncheckedCreateInput = {
    id?: string
    companyId: string
    resource: string
    lastSyncedAt: Date | string
  }

  export type FortnoxSyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutFortnoxSyncLogsNestedInput
  }

  export type FortnoxSyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FortnoxSyncLogCreateManyInput = {
    id?: string
    companyId: string
    resource: string
    lastSyncedAt: Date | string
  }

  export type FortnoxSyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FortnoxSyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CompanyIntegrationListRelationFilter = {
    every?: CompanyIntegrationWhereInput
    some?: CompanyIntegrationWhereInput
    none?: CompanyIntegrationWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type FortnoxSyncLogListRelationFilter = {
    every?: FortnoxSyncLogWhereInput
    some?: FortnoxSyncLogWhereInput
    none?: FortnoxSyncLogWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyIntegrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FortnoxSyncLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ImapCredentialListRelationFilter = {
    every?: ImapCredentialWhereInput
    some?: ImapCredentialWhereInput
    none?: ImapCredentialWhereInput
  }

  export type EmployeeCustomerListRelationFilter = {
    every?: EmployeeCustomerWhereInput
    some?: EmployeeCustomerWhereInput
    none?: EmployeeCustomerWhereInput
  }

  export type TimeEntryListRelationFilter = {
    every?: TimeEntryWhereInput
    some?: TimeEntryWhereInput
    none?: TimeEntryWhereInput
  }

  export type EmailActivityListRelationFilter = {
    every?: EmailActivityWhereInput
    some?: EmailActivityWhereInput
    none?: EmailActivityWhereInput
  }

  export type ImapCredentialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    companyId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyIntegrationCompanyIdServiceCompoundUniqueInput = {
    companyId: string
    service: string
  }

  export type CompanyIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    service?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    service?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    service?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ImapCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imapHost?: SortOrder
    imapPort?: SortOrder
    emailAddress?: SortOrder
    encryptedPassword?: SortOrder
    useTls?: SortOrder
    createdAt?: SortOrder
  }

  export type ImapCredentialAvgOrderByAggregateInput = {
    imapPort?: SortOrder
  }

  export type ImapCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imapHost?: SortOrder
    imapPort?: SortOrder
    emailAddress?: SortOrder
    encryptedPassword?: SortOrder
    useTls?: SortOrder
    createdAt?: SortOrder
  }

  export type ImapCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imapHost?: SortOrder
    imapPort?: SortOrder
    emailAddress?: SortOrder
    encryptedPassword?: SortOrder
    useTls?: SortOrder
    createdAt?: SortOrder
  }

  export type ImapCredentialSumOrderByAggregateInput = {
    imapPort?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    fortnoxCustomerNumber?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    fortnoxCustomerNumber?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    fortnoxCustomerNumber?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type EmployeeCustomerUserIdCustomerIdCompoundUniqueInput = {
    userId: string
    customerId: string
  }

  export type EmployeeCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type EmployeeCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type EmployeeCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type TimeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    description?: SortOrder
    source?: SortOrder
    rawCustomerName?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntryAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type TimeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    description?: SortOrder
    source?: SortOrder
    rawCustomerName?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    description?: SortOrder
    source?: SortOrder
    rawCustomerName?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntrySumOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EmailActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    sentAt?: SortOrder
    recipientEmail?: SortOrder
    recipientDomain?: SortOrder
    subject?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    sentAt?: SortOrder
    recipientEmail?: SortOrder
    recipientDomain?: SortOrder
    subject?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    sentAt?: SortOrder
    recipientEmail?: SortOrder
    recipientDomain?: SortOrder
    subject?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
  }

  export type FortnoxSyncLogCompanyIdResourceCompoundUniqueInput = {
    companyId: string
    resource: string
  }

  export type FortnoxSyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    resource?: SortOrder
    lastSyncedAt?: SortOrder
  }

  export type FortnoxSyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    resource?: SortOrder
    lastSyncedAt?: SortOrder
  }

  export type FortnoxSyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    resource?: SortOrder
    lastSyncedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyIntegrationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyIntegrationCreateWithoutCompanyInput, CompanyIntegrationUncheckedCreateWithoutCompanyInput> | CompanyIntegrationCreateWithoutCompanyInput[] | CompanyIntegrationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyIntegrationCreateOrConnectWithoutCompanyInput | CompanyIntegrationCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyIntegrationCreateManyCompanyInputEnvelope
    connect?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type FortnoxSyncLogCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FortnoxSyncLogCreateWithoutCompanyInput, FortnoxSyncLogUncheckedCreateWithoutCompanyInput> | FortnoxSyncLogCreateWithoutCompanyInput[] | FortnoxSyncLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FortnoxSyncLogCreateOrConnectWithoutCompanyInput | FortnoxSyncLogCreateOrConnectWithoutCompanyInput[]
    createMany?: FortnoxSyncLogCreateManyCompanyInputEnvelope
    connect?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyIntegrationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyIntegrationCreateWithoutCompanyInput, CompanyIntegrationUncheckedCreateWithoutCompanyInput> | CompanyIntegrationCreateWithoutCompanyInput[] | CompanyIntegrationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyIntegrationCreateOrConnectWithoutCompanyInput | CompanyIntegrationCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyIntegrationCreateManyCompanyInputEnvelope
    connect?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type FortnoxSyncLogUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FortnoxSyncLogCreateWithoutCompanyInput, FortnoxSyncLogUncheckedCreateWithoutCompanyInput> | FortnoxSyncLogCreateWithoutCompanyInput[] | FortnoxSyncLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FortnoxSyncLogCreateOrConnectWithoutCompanyInput | FortnoxSyncLogCreateOrConnectWithoutCompanyInput[]
    createMany?: FortnoxSyncLogCreateManyCompanyInputEnvelope
    connect?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyIntegrationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyIntegrationCreateWithoutCompanyInput, CompanyIntegrationUncheckedCreateWithoutCompanyInput> | CompanyIntegrationCreateWithoutCompanyInput[] | CompanyIntegrationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyIntegrationCreateOrConnectWithoutCompanyInput | CompanyIntegrationCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyIntegrationUpsertWithWhereUniqueWithoutCompanyInput | CompanyIntegrationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyIntegrationCreateManyCompanyInputEnvelope
    set?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    disconnect?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    delete?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    connect?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    update?: CompanyIntegrationUpdateWithWhereUniqueWithoutCompanyInput | CompanyIntegrationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyIntegrationUpdateManyWithWhereWithoutCompanyInput | CompanyIntegrationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyIntegrationScalarWhereInput | CompanyIntegrationScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput | CustomerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput | CustomerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput | CustomerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type FortnoxSyncLogUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FortnoxSyncLogCreateWithoutCompanyInput, FortnoxSyncLogUncheckedCreateWithoutCompanyInput> | FortnoxSyncLogCreateWithoutCompanyInput[] | FortnoxSyncLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FortnoxSyncLogCreateOrConnectWithoutCompanyInput | FortnoxSyncLogCreateOrConnectWithoutCompanyInput[]
    upsert?: FortnoxSyncLogUpsertWithWhereUniqueWithoutCompanyInput | FortnoxSyncLogUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FortnoxSyncLogCreateManyCompanyInputEnvelope
    set?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    disconnect?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    delete?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    connect?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    update?: FortnoxSyncLogUpdateWithWhereUniqueWithoutCompanyInput | FortnoxSyncLogUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FortnoxSyncLogUpdateManyWithWhereWithoutCompanyInput | FortnoxSyncLogUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FortnoxSyncLogScalarWhereInput | FortnoxSyncLogScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyIntegrationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyIntegrationCreateWithoutCompanyInput, CompanyIntegrationUncheckedCreateWithoutCompanyInput> | CompanyIntegrationCreateWithoutCompanyInput[] | CompanyIntegrationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyIntegrationCreateOrConnectWithoutCompanyInput | CompanyIntegrationCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyIntegrationUpsertWithWhereUniqueWithoutCompanyInput | CompanyIntegrationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyIntegrationCreateManyCompanyInputEnvelope
    set?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    disconnect?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    delete?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    connect?: CompanyIntegrationWhereUniqueInput | CompanyIntegrationWhereUniqueInput[]
    update?: CompanyIntegrationUpdateWithWhereUniqueWithoutCompanyInput | CompanyIntegrationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyIntegrationUpdateManyWithWhereWithoutCompanyInput | CompanyIntegrationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyIntegrationScalarWhereInput | CompanyIntegrationScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput> | CustomerCreateWithoutCompanyInput[] | CustomerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput | CustomerCreateOrConnectWithoutCompanyInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput | CustomerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CustomerCreateManyCompanyInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput | CustomerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput | CustomerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type FortnoxSyncLogUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FortnoxSyncLogCreateWithoutCompanyInput, FortnoxSyncLogUncheckedCreateWithoutCompanyInput> | FortnoxSyncLogCreateWithoutCompanyInput[] | FortnoxSyncLogUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FortnoxSyncLogCreateOrConnectWithoutCompanyInput | FortnoxSyncLogCreateOrConnectWithoutCompanyInput[]
    upsert?: FortnoxSyncLogUpsertWithWhereUniqueWithoutCompanyInput | FortnoxSyncLogUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FortnoxSyncLogCreateManyCompanyInputEnvelope
    set?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    disconnect?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    delete?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    connect?: FortnoxSyncLogWhereUniqueInput | FortnoxSyncLogWhereUniqueInput[]
    update?: FortnoxSyncLogUpdateWithWhereUniqueWithoutCompanyInput | FortnoxSyncLogUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FortnoxSyncLogUpdateManyWithWhereWithoutCompanyInput | FortnoxSyncLogUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FortnoxSyncLogScalarWhereInput | FortnoxSyncLogScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ImapCredentialCreateNestedManyWithoutUserInput = {
    create?: XOR<ImapCredentialCreateWithoutUserInput, ImapCredentialUncheckedCreateWithoutUserInput> | ImapCredentialCreateWithoutUserInput[] | ImapCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImapCredentialCreateOrConnectWithoutUserInput | ImapCredentialCreateOrConnectWithoutUserInput[]
    createMany?: ImapCredentialCreateManyUserInputEnvelope
    connect?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
  }

  export type EmployeeCustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeCustomerCreateWithoutUserInput, EmployeeCustomerUncheckedCreateWithoutUserInput> | EmployeeCustomerCreateWithoutUserInput[] | EmployeeCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutUserInput | EmployeeCustomerCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeCustomerCreateManyUserInputEnvelope
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
  }

  export type TimeEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type EmailActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailActivityCreateWithoutUserInput, EmailActivityUncheckedCreateWithoutUserInput> | EmailActivityCreateWithoutUserInput[] | EmailActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutUserInput | EmailActivityCreateOrConnectWithoutUserInput[]
    createMany?: EmailActivityCreateManyUserInputEnvelope
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
  }

  export type ImapCredentialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImapCredentialCreateWithoutUserInput, ImapCredentialUncheckedCreateWithoutUserInput> | ImapCredentialCreateWithoutUserInput[] | ImapCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImapCredentialCreateOrConnectWithoutUserInput | ImapCredentialCreateOrConnectWithoutUserInput[]
    createMany?: ImapCredentialCreateManyUserInputEnvelope
    connect?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
  }

  export type EmployeeCustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeCustomerCreateWithoutUserInput, EmployeeCustomerUncheckedCreateWithoutUserInput> | EmployeeCustomerCreateWithoutUserInput[] | EmployeeCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutUserInput | EmployeeCustomerCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeCustomerCreateManyUserInputEnvelope
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
  }

  export type TimeEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type EmailActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailActivityCreateWithoutUserInput, EmailActivityUncheckedCreateWithoutUserInput> | EmailActivityCreateWithoutUserInput[] | EmailActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutUserInput | EmailActivityCreateOrConnectWithoutUserInput[]
    createMany?: EmailActivityCreateManyUserInputEnvelope
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type ImapCredentialUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImapCredentialCreateWithoutUserInput, ImapCredentialUncheckedCreateWithoutUserInput> | ImapCredentialCreateWithoutUserInput[] | ImapCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImapCredentialCreateOrConnectWithoutUserInput | ImapCredentialCreateOrConnectWithoutUserInput[]
    upsert?: ImapCredentialUpsertWithWhereUniqueWithoutUserInput | ImapCredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImapCredentialCreateManyUserInputEnvelope
    set?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    disconnect?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    delete?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    connect?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    update?: ImapCredentialUpdateWithWhereUniqueWithoutUserInput | ImapCredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImapCredentialUpdateManyWithWhereWithoutUserInput | ImapCredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImapCredentialScalarWhereInput | ImapCredentialScalarWhereInput[]
  }

  export type EmployeeCustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeCustomerCreateWithoutUserInput, EmployeeCustomerUncheckedCreateWithoutUserInput> | EmployeeCustomerCreateWithoutUserInput[] | EmployeeCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutUserInput | EmployeeCustomerCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeCustomerUpsertWithWhereUniqueWithoutUserInput | EmployeeCustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeCustomerCreateManyUserInputEnvelope
    set?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    disconnect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    delete?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    update?: EmployeeCustomerUpdateWithWhereUniqueWithoutUserInput | EmployeeCustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeCustomerUpdateManyWithWhereWithoutUserInput | EmployeeCustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeCustomerScalarWhereInput | EmployeeCustomerScalarWhereInput[]
  }

  export type TimeEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutUserInput | TimeEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutUserInput | TimeEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutUserInput | TimeEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type EmailActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailActivityCreateWithoutUserInput, EmailActivityUncheckedCreateWithoutUserInput> | EmailActivityCreateWithoutUserInput[] | EmailActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutUserInput | EmailActivityCreateOrConnectWithoutUserInput[]
    upsert?: EmailActivityUpsertWithWhereUniqueWithoutUserInput | EmailActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailActivityCreateManyUserInputEnvelope
    set?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    disconnect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    delete?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    update?: EmailActivityUpdateWithWhereUniqueWithoutUserInput | EmailActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailActivityUpdateManyWithWhereWithoutUserInput | EmailActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailActivityScalarWhereInput | EmailActivityScalarWhereInput[]
  }

  export type ImapCredentialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImapCredentialCreateWithoutUserInput, ImapCredentialUncheckedCreateWithoutUserInput> | ImapCredentialCreateWithoutUserInput[] | ImapCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImapCredentialCreateOrConnectWithoutUserInput | ImapCredentialCreateOrConnectWithoutUserInput[]
    upsert?: ImapCredentialUpsertWithWhereUniqueWithoutUserInput | ImapCredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImapCredentialCreateManyUserInputEnvelope
    set?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    disconnect?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    delete?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    connect?: ImapCredentialWhereUniqueInput | ImapCredentialWhereUniqueInput[]
    update?: ImapCredentialUpdateWithWhereUniqueWithoutUserInput | ImapCredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImapCredentialUpdateManyWithWhereWithoutUserInput | ImapCredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImapCredentialScalarWhereInput | ImapCredentialScalarWhereInput[]
  }

  export type EmployeeCustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeCustomerCreateWithoutUserInput, EmployeeCustomerUncheckedCreateWithoutUserInput> | EmployeeCustomerCreateWithoutUserInput[] | EmployeeCustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutUserInput | EmployeeCustomerCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeCustomerUpsertWithWhereUniqueWithoutUserInput | EmployeeCustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeCustomerCreateManyUserInputEnvelope
    set?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    disconnect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    delete?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    update?: EmployeeCustomerUpdateWithWhereUniqueWithoutUserInput | EmployeeCustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeCustomerUpdateManyWithWhereWithoutUserInput | EmployeeCustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeCustomerScalarWhereInput | EmployeeCustomerScalarWhereInput[]
  }

  export type TimeEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutUserInput | TimeEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutUserInput | TimeEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutUserInput | TimeEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type EmailActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailActivityCreateWithoutUserInput, EmailActivityUncheckedCreateWithoutUserInput> | EmailActivityCreateWithoutUserInput[] | EmailActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutUserInput | EmailActivityCreateOrConnectWithoutUserInput[]
    upsert?: EmailActivityUpsertWithWhereUniqueWithoutUserInput | EmailActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailActivityCreateManyUserInputEnvelope
    set?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    disconnect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    delete?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    update?: EmailActivityUpdateWithWhereUniqueWithoutUserInput | EmailActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailActivityUpdateManyWithWhereWithoutUserInput | EmailActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailActivityScalarWhereInput | EmailActivityScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<CompanyCreateWithoutIntegrationsInput, CompanyUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIntegrationsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneRequiredWithoutIntegrationsNestedInput = {
    create?: XOR<CompanyCreateWithoutIntegrationsInput, CompanyUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIntegrationsInput
    upsert?: CompanyUpsertWithoutIntegrationsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutIntegrationsInput, CompanyUpdateWithoutIntegrationsInput>, CompanyUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserCreateNestedOneWithoutImapCredentialsInput = {
    create?: XOR<UserCreateWithoutImapCredentialsInput, UserUncheckedCreateWithoutImapCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImapCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutImapCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutImapCredentialsInput, UserUncheckedCreateWithoutImapCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImapCredentialsInput
    upsert?: UserUpsertWithoutImapCredentialsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImapCredentialsInput, UserUpdateWithoutImapCredentialsInput>, UserUncheckedUpdateWithoutImapCredentialsInput>
  }

  export type CompanyCreateNestedOneWithoutCustomersInput = {
    create?: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomersInput
    connect?: CompanyWhereUniqueInput
  }

  export type EmployeeCustomerCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EmployeeCustomerCreateWithoutCustomerInput, EmployeeCustomerUncheckedCreateWithoutCustomerInput> | EmployeeCustomerCreateWithoutCustomerInput[] | EmployeeCustomerUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutCustomerInput | EmployeeCustomerCreateOrConnectWithoutCustomerInput[]
    createMany?: EmployeeCustomerCreateManyCustomerInputEnvelope
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
  }

  export type TimeEntryCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TimeEntryCreateWithoutCustomerInput, TimeEntryUncheckedCreateWithoutCustomerInput> | TimeEntryCreateWithoutCustomerInput[] | TimeEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutCustomerInput | TimeEntryCreateOrConnectWithoutCustomerInput[]
    createMany?: TimeEntryCreateManyCustomerInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type EmailActivityCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EmailActivityCreateWithoutCustomerInput, EmailActivityUncheckedCreateWithoutCustomerInput> | EmailActivityCreateWithoutCustomerInput[] | EmailActivityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutCustomerInput | EmailActivityCreateOrConnectWithoutCustomerInput[]
    createMany?: EmailActivityCreateManyCustomerInputEnvelope
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
  }

  export type EmployeeCustomerUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EmployeeCustomerCreateWithoutCustomerInput, EmployeeCustomerUncheckedCreateWithoutCustomerInput> | EmployeeCustomerCreateWithoutCustomerInput[] | EmployeeCustomerUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutCustomerInput | EmployeeCustomerCreateOrConnectWithoutCustomerInput[]
    createMany?: EmployeeCustomerCreateManyCustomerInputEnvelope
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
  }

  export type TimeEntryUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TimeEntryCreateWithoutCustomerInput, TimeEntryUncheckedCreateWithoutCustomerInput> | TimeEntryCreateWithoutCustomerInput[] | TimeEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutCustomerInput | TimeEntryCreateOrConnectWithoutCustomerInput[]
    createMany?: TimeEntryCreateManyCustomerInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type EmailActivityUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EmailActivityCreateWithoutCustomerInput, EmailActivityUncheckedCreateWithoutCustomerInput> | EmailActivityCreateWithoutCustomerInput[] | EmailActivityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutCustomerInput | EmailActivityCreateOrConnectWithoutCustomerInput[]
    createMany?: EmailActivityCreateManyCustomerInputEnvelope
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomersInput
    upsert?: CompanyUpsertWithoutCustomersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCustomersInput, CompanyUpdateWithoutCustomersInput>, CompanyUncheckedUpdateWithoutCustomersInput>
  }

  export type EmployeeCustomerUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EmployeeCustomerCreateWithoutCustomerInput, EmployeeCustomerUncheckedCreateWithoutCustomerInput> | EmployeeCustomerCreateWithoutCustomerInput[] | EmployeeCustomerUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutCustomerInput | EmployeeCustomerCreateOrConnectWithoutCustomerInput[]
    upsert?: EmployeeCustomerUpsertWithWhereUniqueWithoutCustomerInput | EmployeeCustomerUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EmployeeCustomerCreateManyCustomerInputEnvelope
    set?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    disconnect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    delete?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    update?: EmployeeCustomerUpdateWithWhereUniqueWithoutCustomerInput | EmployeeCustomerUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EmployeeCustomerUpdateManyWithWhereWithoutCustomerInput | EmployeeCustomerUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EmployeeCustomerScalarWhereInput | EmployeeCustomerScalarWhereInput[]
  }

  export type TimeEntryUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TimeEntryCreateWithoutCustomerInput, TimeEntryUncheckedCreateWithoutCustomerInput> | TimeEntryCreateWithoutCustomerInput[] | TimeEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutCustomerInput | TimeEntryCreateOrConnectWithoutCustomerInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutCustomerInput | TimeEntryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TimeEntryCreateManyCustomerInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutCustomerInput | TimeEntryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutCustomerInput | TimeEntryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type EmailActivityUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EmailActivityCreateWithoutCustomerInput, EmailActivityUncheckedCreateWithoutCustomerInput> | EmailActivityCreateWithoutCustomerInput[] | EmailActivityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutCustomerInput | EmailActivityCreateOrConnectWithoutCustomerInput[]
    upsert?: EmailActivityUpsertWithWhereUniqueWithoutCustomerInput | EmailActivityUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EmailActivityCreateManyCustomerInputEnvelope
    set?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    disconnect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    delete?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    update?: EmailActivityUpdateWithWhereUniqueWithoutCustomerInput | EmailActivityUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EmailActivityUpdateManyWithWhereWithoutCustomerInput | EmailActivityUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EmailActivityScalarWhereInput | EmailActivityScalarWhereInput[]
  }

  export type EmployeeCustomerUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EmployeeCustomerCreateWithoutCustomerInput, EmployeeCustomerUncheckedCreateWithoutCustomerInput> | EmployeeCustomerCreateWithoutCustomerInput[] | EmployeeCustomerUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmployeeCustomerCreateOrConnectWithoutCustomerInput | EmployeeCustomerCreateOrConnectWithoutCustomerInput[]
    upsert?: EmployeeCustomerUpsertWithWhereUniqueWithoutCustomerInput | EmployeeCustomerUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EmployeeCustomerCreateManyCustomerInputEnvelope
    set?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    disconnect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    delete?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    connect?: EmployeeCustomerWhereUniqueInput | EmployeeCustomerWhereUniqueInput[]
    update?: EmployeeCustomerUpdateWithWhereUniqueWithoutCustomerInput | EmployeeCustomerUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EmployeeCustomerUpdateManyWithWhereWithoutCustomerInput | EmployeeCustomerUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EmployeeCustomerScalarWhereInput | EmployeeCustomerScalarWhereInput[]
  }

  export type TimeEntryUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TimeEntryCreateWithoutCustomerInput, TimeEntryUncheckedCreateWithoutCustomerInput> | TimeEntryCreateWithoutCustomerInput[] | TimeEntryUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutCustomerInput | TimeEntryCreateOrConnectWithoutCustomerInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutCustomerInput | TimeEntryUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TimeEntryCreateManyCustomerInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutCustomerInput | TimeEntryUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutCustomerInput | TimeEntryUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type EmailActivityUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EmailActivityCreateWithoutCustomerInput, EmailActivityUncheckedCreateWithoutCustomerInput> | EmailActivityCreateWithoutCustomerInput[] | EmailActivityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EmailActivityCreateOrConnectWithoutCustomerInput | EmailActivityCreateOrConnectWithoutCustomerInput[]
    upsert?: EmailActivityUpsertWithWhereUniqueWithoutCustomerInput | EmailActivityUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EmailActivityCreateManyCustomerInputEnvelope
    set?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    disconnect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    delete?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    connect?: EmailActivityWhereUniqueInput | EmailActivityWhereUniqueInput[]
    update?: EmailActivityUpdateWithWhereUniqueWithoutCustomerInput | EmailActivityUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EmailActivityUpdateManyWithWhereWithoutCustomerInput | EmailActivityUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EmailActivityScalarWhereInput | EmailActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployeeCustomersInput = {
    create?: XOR<UserCreateWithoutEmployeeCustomersInput, UserUncheckedCreateWithoutEmployeeCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutEmployeeCustomersInput = {
    create?: XOR<CustomerCreateWithoutEmployeeCustomersInput, CustomerUncheckedCreateWithoutEmployeeCustomersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeCustomersInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmployeeCustomersNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeCustomersInput, UserUncheckedCreateWithoutEmployeeCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeCustomersInput
    upsert?: UserUpsertWithoutEmployeeCustomersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeCustomersInput, UserUpdateWithoutEmployeeCustomersInput>, UserUncheckedUpdateWithoutEmployeeCustomersInput>
  }

  export type CustomerUpdateOneRequiredWithoutEmployeeCustomersNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeCustomersInput, CustomerUncheckedCreateWithoutEmployeeCustomersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeCustomersInput
    upsert?: CustomerUpsertWithoutEmployeeCustomersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutEmployeeCustomersInput, CustomerUpdateWithoutEmployeeCustomersInput>, CustomerUncheckedUpdateWithoutEmployeeCustomersInput>
  }

  export type UserCreateNestedOneWithoutTimeEntriesInput = {
    create?: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutTimeEntriesInput = {
    create?: XOR<CustomerCreateWithoutTimeEntriesInput, CustomerUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTimeEntriesInput
    connect?: CustomerWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutTimeEntriesNestedInput = {
    create?: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeEntriesInput
    upsert?: UserUpsertWithoutTimeEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeEntriesInput, UserUpdateWithoutTimeEntriesInput>, UserUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type CustomerUpdateOneWithoutTimeEntriesNestedInput = {
    create?: XOR<CustomerCreateWithoutTimeEntriesInput, CustomerUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTimeEntriesInput
    upsert?: CustomerUpsertWithoutTimeEntriesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTimeEntriesInput, CustomerUpdateWithoutTimeEntriesInput>, CustomerUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type UserCreateNestedOneWithoutEmailActivitiesInput = {
    create?: XOR<UserCreateWithoutEmailActivitiesInput, UserUncheckedCreateWithoutEmailActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutEmailActivitiesInput = {
    create?: XOR<CustomerCreateWithoutEmailActivitiesInput, CustomerUncheckedCreateWithoutEmailActivitiesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEmailActivitiesInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutEmailActivitiesInput, UserUncheckedCreateWithoutEmailActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailActivitiesInput
    upsert?: UserUpsertWithoutEmailActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailActivitiesInput, UserUpdateWithoutEmailActivitiesInput>, UserUncheckedUpdateWithoutEmailActivitiesInput>
  }

  export type CustomerUpdateOneWithoutEmailActivitiesNestedInput = {
    create?: XOR<CustomerCreateWithoutEmailActivitiesInput, CustomerUncheckedCreateWithoutEmailActivitiesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEmailActivitiesInput
    upsert?: CustomerUpsertWithoutEmailActivitiesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutEmailActivitiesInput, CustomerUpdateWithoutEmailActivitiesInput>, CustomerUncheckedUpdateWithoutEmailActivitiesInput>
  }

  export type CompanyCreateNestedOneWithoutFortnoxSyncLogsInput = {
    create?: XOR<CompanyCreateWithoutFortnoxSyncLogsInput, CompanyUncheckedCreateWithoutFortnoxSyncLogsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFortnoxSyncLogsInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutFortnoxSyncLogsNestedInput = {
    create?: XOR<CompanyCreateWithoutFortnoxSyncLogsInput, CompanyUncheckedCreateWithoutFortnoxSyncLogsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFortnoxSyncLogsInput
    upsert?: CompanyUpsertWithoutFortnoxSyncLogsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFortnoxSyncLogsInput, CompanyUpdateWithoutFortnoxSyncLogsInput>, CompanyUncheckedUpdateWithoutFortnoxSyncLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    imapCredentials?: ImapCredentialCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    imapCredentials?: ImapCredentialUncheckedCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyIntegrationCreateWithoutCompanyInput = {
    id?: string
    service: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyIntegrationUncheckedCreateWithoutCompanyInput = {
    id?: string
    service: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanyIntegrationCreateOrConnectWithoutCompanyInput = {
    where: CompanyIntegrationWhereUniqueInput
    create: XOR<CompanyIntegrationCreateWithoutCompanyInput, CompanyIntegrationUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyIntegrationCreateManyCompanyInputEnvelope = {
    data: CompanyIntegrationCreateManyCompanyInput | CompanyIntegrationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutCompanyInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutCustomerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCompanyInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutCustomerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput>
  }

  export type CustomerCreateManyCompanyInputEnvelope = {
    data: CustomerCreateManyCompanyInput | CustomerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FortnoxSyncLogCreateWithoutCompanyInput = {
    id?: string
    resource: string
    lastSyncedAt: Date | string
  }

  export type FortnoxSyncLogUncheckedCreateWithoutCompanyInput = {
    id?: string
    resource: string
    lastSyncedAt: Date | string
  }

  export type FortnoxSyncLogCreateOrConnectWithoutCompanyInput = {
    where: FortnoxSyncLogWhereUniqueInput
    create: XOR<FortnoxSyncLogCreateWithoutCompanyInput, FortnoxSyncLogUncheckedCreateWithoutCompanyInput>
  }

  export type FortnoxSyncLogCreateManyCompanyInputEnvelope = {
    data: FortnoxSyncLogCreateManyCompanyInput | FortnoxSyncLogCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    companyId?: UuidFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CompanyIntegrationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyIntegrationWhereUniqueInput
    update: XOR<CompanyIntegrationUpdateWithoutCompanyInput, CompanyIntegrationUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyIntegrationCreateWithoutCompanyInput, CompanyIntegrationUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyIntegrationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyIntegrationWhereUniqueInput
    data: XOR<CompanyIntegrationUpdateWithoutCompanyInput, CompanyIntegrationUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyIntegrationUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyIntegrationScalarWhereInput
    data: XOR<CompanyIntegrationUpdateManyMutationInput, CompanyIntegrationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyIntegrationScalarWhereInput = {
    AND?: CompanyIntegrationScalarWhereInput | CompanyIntegrationScalarWhereInput[]
    OR?: CompanyIntegrationScalarWhereInput[]
    NOT?: CompanyIntegrationScalarWhereInput | CompanyIntegrationScalarWhereInput[]
    id?: UuidFilter<"CompanyIntegration"> | string
    companyId?: UuidFilter<"CompanyIntegration"> | string
    service?: StringFilter<"CompanyIntegration"> | string
    accessToken?: StringFilter<"CompanyIntegration"> | string
    refreshToken?: StringNullableFilter<"CompanyIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"CompanyIntegration"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanyIntegration"> | Date | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutCompanyInput, CustomerUncheckedUpdateWithoutCompanyInput>
    create: XOR<CustomerCreateWithoutCompanyInput, CustomerUncheckedCreateWithoutCompanyInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutCompanyInput, CustomerUncheckedUpdateWithoutCompanyInput>
  }

  export type CustomerUpdateManyWithWhereWithoutCompanyInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: UuidFilter<"Customer"> | string
    fortnoxCustomerNumber?: StringNullableFilter<"Customer"> | string | null
    name?: StringFilter<"Customer"> | string
    domain?: StringNullableFilter<"Customer"> | string | null
    companyId?: UuidFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type FortnoxSyncLogUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FortnoxSyncLogWhereUniqueInput
    update: XOR<FortnoxSyncLogUpdateWithoutCompanyInput, FortnoxSyncLogUncheckedUpdateWithoutCompanyInput>
    create: XOR<FortnoxSyncLogCreateWithoutCompanyInput, FortnoxSyncLogUncheckedCreateWithoutCompanyInput>
  }

  export type FortnoxSyncLogUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FortnoxSyncLogWhereUniqueInput
    data: XOR<FortnoxSyncLogUpdateWithoutCompanyInput, FortnoxSyncLogUncheckedUpdateWithoutCompanyInput>
  }

  export type FortnoxSyncLogUpdateManyWithWhereWithoutCompanyInput = {
    where: FortnoxSyncLogScalarWhereInput
    data: XOR<FortnoxSyncLogUpdateManyMutationInput, FortnoxSyncLogUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FortnoxSyncLogScalarWhereInput = {
    AND?: FortnoxSyncLogScalarWhereInput | FortnoxSyncLogScalarWhereInput[]
    OR?: FortnoxSyncLogScalarWhereInput[]
    NOT?: FortnoxSyncLogScalarWhereInput | FortnoxSyncLogScalarWhereInput[]
    id?: UuidFilter<"FortnoxSyncLog"> | string
    companyId?: UuidFilter<"FortnoxSyncLog"> | string
    resource?: StringFilter<"FortnoxSyncLog"> | string
    lastSyncedAt?: DateTimeFilter<"FortnoxSyncLog"> | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    integrations?: CompanyIntegrationCreateNestedManyWithoutCompanyInput
    customers?: CustomerCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    integrations?: CompanyIntegrationUncheckedCreateNestedManyWithoutCompanyInput
    customers?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type ImapCredentialCreateWithoutUserInput = {
    id?: string
    imapHost: string
    imapPort?: number
    emailAddress: string
    encryptedPassword: string
    useTls?: boolean
    createdAt?: Date | string
  }

  export type ImapCredentialUncheckedCreateWithoutUserInput = {
    id?: string
    imapHost: string
    imapPort?: number
    emailAddress: string
    encryptedPassword: string
    useTls?: boolean
    createdAt?: Date | string
  }

  export type ImapCredentialCreateOrConnectWithoutUserInput = {
    where: ImapCredentialWhereUniqueInput
    create: XOR<ImapCredentialCreateWithoutUserInput, ImapCredentialUncheckedCreateWithoutUserInput>
  }

  export type ImapCredentialCreateManyUserInputEnvelope = {
    data: ImapCredentialCreateManyUserInput | ImapCredentialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCustomerCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    assignedBy?: string | null
    customer: CustomerCreateNestedOneWithoutEmployeeCustomersInput
  }

  export type EmployeeCustomerUncheckedCreateWithoutUserInput = {
    id?: string
    customerId: string
    assignedAt?: Date | string
    assignedBy?: string | null
  }

  export type EmployeeCustomerCreateOrConnectWithoutUserInput = {
    where: EmployeeCustomerWhereUniqueInput
    create: XOR<EmployeeCustomerCreateWithoutUserInput, EmployeeCustomerUncheckedCreateWithoutUserInput>
  }

  export type EmployeeCustomerCreateManyUserInputEnvelope = {
    data: EmployeeCustomerCreateManyUserInput | EmployeeCustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeEntryCreateWithoutUserInput = {
    id?: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateWithoutUserInput = {
    id?: string
    customerId?: string | null
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
  }

  export type TimeEntryCreateOrConnectWithoutUserInput = {
    where: TimeEntryWhereUniqueInput
    create: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput>
  }

  export type TimeEntryCreateManyUserInputEnvelope = {
    data: TimeEntryCreateManyUserInput | TimeEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailActivityCreateWithoutUserInput = {
    id?: string
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutEmailActivitiesInput
  }

  export type EmailActivityUncheckedCreateWithoutUserInput = {
    id?: string
    customerId?: string | null
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
  }

  export type EmailActivityCreateOrConnectWithoutUserInput = {
    where: EmailActivityWhereUniqueInput
    create: XOR<EmailActivityCreateWithoutUserInput, EmailActivityUncheckedCreateWithoutUserInput>
  }

  export type EmailActivityCreateManyUserInputEnvelope = {
    data: EmailActivityCreateManyUserInput | EmailActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: CompanyIntegrationUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: CompanyIntegrationUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ImapCredentialUpsertWithWhereUniqueWithoutUserInput = {
    where: ImapCredentialWhereUniqueInput
    update: XOR<ImapCredentialUpdateWithoutUserInput, ImapCredentialUncheckedUpdateWithoutUserInput>
    create: XOR<ImapCredentialCreateWithoutUserInput, ImapCredentialUncheckedCreateWithoutUserInput>
  }

  export type ImapCredentialUpdateWithWhereUniqueWithoutUserInput = {
    where: ImapCredentialWhereUniqueInput
    data: XOR<ImapCredentialUpdateWithoutUserInput, ImapCredentialUncheckedUpdateWithoutUserInput>
  }

  export type ImapCredentialUpdateManyWithWhereWithoutUserInput = {
    where: ImapCredentialScalarWhereInput
    data: XOR<ImapCredentialUpdateManyMutationInput, ImapCredentialUncheckedUpdateManyWithoutUserInput>
  }

  export type ImapCredentialScalarWhereInput = {
    AND?: ImapCredentialScalarWhereInput | ImapCredentialScalarWhereInput[]
    OR?: ImapCredentialScalarWhereInput[]
    NOT?: ImapCredentialScalarWhereInput | ImapCredentialScalarWhereInput[]
    id?: UuidFilter<"ImapCredential"> | string
    userId?: UuidNullableFilter<"ImapCredential"> | string | null
    imapHost?: StringFilter<"ImapCredential"> | string
    imapPort?: IntFilter<"ImapCredential"> | number
    emailAddress?: StringFilter<"ImapCredential"> | string
    encryptedPassword?: StringFilter<"ImapCredential"> | string
    useTls?: BoolFilter<"ImapCredential"> | boolean
    createdAt?: DateTimeFilter<"ImapCredential"> | Date | string
  }

  export type EmployeeCustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeeCustomerWhereUniqueInput
    update: XOR<EmployeeCustomerUpdateWithoutUserInput, EmployeeCustomerUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCustomerCreateWithoutUserInput, EmployeeCustomerUncheckedCreateWithoutUserInput>
  }

  export type EmployeeCustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeeCustomerWhereUniqueInput
    data: XOR<EmployeeCustomerUpdateWithoutUserInput, EmployeeCustomerUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeCustomerUpdateManyWithWhereWithoutUserInput = {
    where: EmployeeCustomerScalarWhereInput
    data: XOR<EmployeeCustomerUpdateManyMutationInput, EmployeeCustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeeCustomerScalarWhereInput = {
    AND?: EmployeeCustomerScalarWhereInput | EmployeeCustomerScalarWhereInput[]
    OR?: EmployeeCustomerScalarWhereInput[]
    NOT?: EmployeeCustomerScalarWhereInput | EmployeeCustomerScalarWhereInput[]
    id?: UuidFilter<"EmployeeCustomer"> | string
    userId?: UuidFilter<"EmployeeCustomer"> | string
    customerId?: UuidFilter<"EmployeeCustomer"> | string
    assignedAt?: DateTimeFilter<"EmployeeCustomer"> | Date | string
    assignedBy?: UuidNullableFilter<"EmployeeCustomer"> | string | null
  }

  export type TimeEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeEntryWhereUniqueInput
    update: XOR<TimeEntryUpdateWithoutUserInput, TimeEntryUncheckedUpdateWithoutUserInput>
    create: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput>
  }

  export type TimeEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeEntryWhereUniqueInput
    data: XOR<TimeEntryUpdateWithoutUserInput, TimeEntryUncheckedUpdateWithoutUserInput>
  }

  export type TimeEntryUpdateManyWithWhereWithoutUserInput = {
    where: TimeEntryScalarWhereInput
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeEntryScalarWhereInput = {
    AND?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
    OR?: TimeEntryScalarWhereInput[]
    NOT?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
    id?: UuidFilter<"TimeEntry"> | string
    userId?: UuidFilter<"TimeEntry"> | string
    customerId?: UuidNullableFilter<"TimeEntry"> | string | null
    date?: DateTimeFilter<"TimeEntry"> | Date | string
    hours?: DecimalFilter<"TimeEntry"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    source?: StringFilter<"TimeEntry"> | string
    rawCustomerName?: StringNullableFilter<"TimeEntry"> | string | null
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
  }

  export type EmailActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailActivityWhereUniqueInput
    update: XOR<EmailActivityUpdateWithoutUserInput, EmailActivityUncheckedUpdateWithoutUserInput>
    create: XOR<EmailActivityCreateWithoutUserInput, EmailActivityUncheckedCreateWithoutUserInput>
  }

  export type EmailActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailActivityWhereUniqueInput
    data: XOR<EmailActivityUpdateWithoutUserInput, EmailActivityUncheckedUpdateWithoutUserInput>
  }

  export type EmailActivityUpdateManyWithWhereWithoutUserInput = {
    where: EmailActivityScalarWhereInput
    data: XOR<EmailActivityUpdateManyMutationInput, EmailActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailActivityScalarWhereInput = {
    AND?: EmailActivityScalarWhereInput | EmailActivityScalarWhereInput[]
    OR?: EmailActivityScalarWhereInput[]
    NOT?: EmailActivityScalarWhereInput | EmailActivityScalarWhereInput[]
    id?: UuidFilter<"EmailActivity"> | string
    userId?: UuidFilter<"EmailActivity"> | string
    customerId?: UuidNullableFilter<"EmailActivity"> | string | null
    sentAt?: DateTimeFilter<"EmailActivity"> | Date | string
    recipientEmail?: StringFilter<"EmailActivity"> | string
    recipientDomain?: StringFilter<"EmailActivity"> | string
    subject?: StringNullableFilter<"EmailActivity"> | string | null
    messageId?: StringNullableFilter<"EmailActivity"> | string | null
    createdAt?: DateTimeFilter<"EmailActivity"> | Date | string
  }

  export type CompanyCreateWithoutIntegrationsInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    customers?: CustomerCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    customers?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutIntegrationsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutIntegrationsInput, CompanyUncheckedCreateWithoutIntegrationsInput>
  }

  export type CompanyUpsertWithoutIntegrationsInput = {
    update: XOR<CompanyUpdateWithoutIntegrationsInput, CompanyUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<CompanyCreateWithoutIntegrationsInput, CompanyUncheckedCreateWithoutIntegrationsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutIntegrationsInput, CompanyUncheckedUpdateWithoutIntegrationsInput>
  }

  export type CompanyUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserCreateWithoutImapCredentialsInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImapCredentialsInput = {
    id?: string
    email: string
    password: string
    companyId: string
    role?: string
    createdAt?: Date | string
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImapCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImapCredentialsInput, UserUncheckedCreateWithoutImapCredentialsInput>
  }

  export type UserUpsertWithoutImapCredentialsInput = {
    update: XOR<UserUpdateWithoutImapCredentialsInput, UserUncheckedUpdateWithoutImapCredentialsInput>
    create: XOR<UserCreateWithoutImapCredentialsInput, UserUncheckedCreateWithoutImapCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImapCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImapCredentialsInput, UserUncheckedUpdateWithoutImapCredentialsInput>
  }

  export type UserUpdateWithoutImapCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImapCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyCreateWithoutCustomersInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    integrations?: CompanyIntegrationCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    integrations?: CompanyIntegrationUncheckedCreateNestedManyWithoutCompanyInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCustomersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
  }

  export type EmployeeCustomerCreateWithoutCustomerInput = {
    id?: string
    assignedAt?: Date | string
    assignedBy?: string | null
    user: UserCreateNestedOneWithoutEmployeeCustomersInput
  }

  export type EmployeeCustomerUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    assignedBy?: string | null
  }

  export type EmployeeCustomerCreateOrConnectWithoutCustomerInput = {
    where: EmployeeCustomerWhereUniqueInput
    create: XOR<EmployeeCustomerCreateWithoutCustomerInput, EmployeeCustomerUncheckedCreateWithoutCustomerInput>
  }

  export type EmployeeCustomerCreateManyCustomerInputEnvelope = {
    data: EmployeeCustomerCreateManyCustomerInput | EmployeeCustomerCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TimeEntryCreateWithoutCustomerInput = {
    id?: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
  }

  export type TimeEntryCreateOrConnectWithoutCustomerInput = {
    where: TimeEntryWhereUniqueInput
    create: XOR<TimeEntryCreateWithoutCustomerInput, TimeEntryUncheckedCreateWithoutCustomerInput>
  }

  export type TimeEntryCreateManyCustomerInputEnvelope = {
    data: TimeEntryCreateManyCustomerInput | TimeEntryCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type EmailActivityCreateWithoutCustomerInput = {
    id?: string
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailActivitiesInput
  }

  export type EmailActivityUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId: string
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
  }

  export type EmailActivityCreateOrConnectWithoutCustomerInput = {
    where: EmailActivityWhereUniqueInput
    create: XOR<EmailActivityCreateWithoutCustomerInput, EmailActivityUncheckedCreateWithoutCustomerInput>
  }

  export type EmailActivityCreateManyCustomerInputEnvelope = {
    data: EmailActivityCreateManyCustomerInput | EmailActivityCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutCustomersInput = {
    update: XOR<CompanyUpdateWithoutCustomersInput, CompanyUncheckedUpdateWithoutCustomersInput>
    create: XOR<CompanyCreateWithoutCustomersInput, CompanyUncheckedCreateWithoutCustomersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCustomersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCustomersInput, CompanyUncheckedUpdateWithoutCustomersInput>
  }

  export type CompanyUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    integrations?: CompanyIntegrationUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    integrations?: CompanyIntegrationUncheckedUpdateManyWithoutCompanyNestedInput
    fortnoxSyncLogs?: FortnoxSyncLogUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type EmployeeCustomerUpsertWithWhereUniqueWithoutCustomerInput = {
    where: EmployeeCustomerWhereUniqueInput
    update: XOR<EmployeeCustomerUpdateWithoutCustomerInput, EmployeeCustomerUncheckedUpdateWithoutCustomerInput>
    create: XOR<EmployeeCustomerCreateWithoutCustomerInput, EmployeeCustomerUncheckedCreateWithoutCustomerInput>
  }

  export type EmployeeCustomerUpdateWithWhereUniqueWithoutCustomerInput = {
    where: EmployeeCustomerWhereUniqueInput
    data: XOR<EmployeeCustomerUpdateWithoutCustomerInput, EmployeeCustomerUncheckedUpdateWithoutCustomerInput>
  }

  export type EmployeeCustomerUpdateManyWithWhereWithoutCustomerInput = {
    where: EmployeeCustomerScalarWhereInput
    data: XOR<EmployeeCustomerUpdateManyMutationInput, EmployeeCustomerUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TimeEntryUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TimeEntryWhereUniqueInput
    update: XOR<TimeEntryUpdateWithoutCustomerInput, TimeEntryUncheckedUpdateWithoutCustomerInput>
    create: XOR<TimeEntryCreateWithoutCustomerInput, TimeEntryUncheckedCreateWithoutCustomerInput>
  }

  export type TimeEntryUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TimeEntryWhereUniqueInput
    data: XOR<TimeEntryUpdateWithoutCustomerInput, TimeEntryUncheckedUpdateWithoutCustomerInput>
  }

  export type TimeEntryUpdateManyWithWhereWithoutCustomerInput = {
    where: TimeEntryScalarWhereInput
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyWithoutCustomerInput>
  }

  export type EmailActivityUpsertWithWhereUniqueWithoutCustomerInput = {
    where: EmailActivityWhereUniqueInput
    update: XOR<EmailActivityUpdateWithoutCustomerInput, EmailActivityUncheckedUpdateWithoutCustomerInput>
    create: XOR<EmailActivityCreateWithoutCustomerInput, EmailActivityUncheckedCreateWithoutCustomerInput>
  }

  export type EmailActivityUpdateWithWhereUniqueWithoutCustomerInput = {
    where: EmailActivityWhereUniqueInput
    data: XOR<EmailActivityUpdateWithoutCustomerInput, EmailActivityUncheckedUpdateWithoutCustomerInput>
  }

  export type EmailActivityUpdateManyWithWhereWithoutCustomerInput = {
    where: EmailActivityScalarWhereInput
    data: XOR<EmailActivityUpdateManyMutationInput, EmailActivityUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UserCreateWithoutEmployeeCustomersInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    imapCredentials?: ImapCredentialCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeCustomersInput = {
    id?: string
    email: string
    password: string
    companyId: string
    role?: string
    createdAt?: Date | string
    imapCredentials?: ImapCredentialUncheckedCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeCustomersInput, UserUncheckedCreateWithoutEmployeeCustomersInput>
  }

  export type CustomerCreateWithoutEmployeeCustomersInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutCustomersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEmployeeCustomersInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    companyId: string
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEmployeeCustomersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEmployeeCustomersInput, CustomerUncheckedCreateWithoutEmployeeCustomersInput>
  }

  export type UserUpsertWithoutEmployeeCustomersInput = {
    update: XOR<UserUpdateWithoutEmployeeCustomersInput, UserUncheckedUpdateWithoutEmployeeCustomersInput>
    create: XOR<UserCreateWithoutEmployeeCustomersInput, UserUncheckedCreateWithoutEmployeeCustomersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeCustomersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeCustomersInput, UserUncheckedUpdateWithoutEmployeeCustomersInput>
  }

  export type UserUpdateWithoutEmployeeCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    imapCredentials?: ImapCredentialUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imapCredentials?: ImapCredentialUncheckedUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutEmployeeCustomersInput = {
    update: XOR<CustomerUpdateWithoutEmployeeCustomersInput, CustomerUncheckedUpdateWithoutEmployeeCustomersInput>
    create: XOR<CustomerCreateWithoutEmployeeCustomersInput, CustomerUncheckedCreateWithoutEmployeeCustomersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutEmployeeCustomersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutEmployeeCustomersInput, CustomerUncheckedUpdateWithoutEmployeeCustomersInput>
  }

  export type CustomerUpdateWithoutEmployeeCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCustomersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEmployeeCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutTimeEntriesInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    imapCredentials?: ImapCredentialCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeEntriesInput = {
    id?: string
    email: string
    password: string
    companyId: string
    role?: string
    createdAt?: Date | string
    imapCredentials?: ImapCredentialUncheckedCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutUserInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
  }

  export type CustomerCreateWithoutTimeEntriesInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutCustomersInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTimeEntriesInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    companyId: string
    createdAt?: Date | string
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutCustomerInput
    emailActivities?: EmailActivityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTimeEntriesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTimeEntriesInput, CustomerUncheckedCreateWithoutTimeEntriesInput>
  }

  export type UserUpsertWithoutTimeEntriesInput = {
    update: XOR<UserUpdateWithoutTimeEntriesInput, UserUncheckedUpdateWithoutTimeEntriesInput>
    create: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeEntriesInput, UserUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type UserUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    imapCredentials?: ImapCredentialUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imapCredentials?: ImapCredentialUncheckedUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutTimeEntriesInput = {
    update: XOR<CustomerUpdateWithoutTimeEntriesInput, CustomerUncheckedUpdateWithoutTimeEntriesInput>
    create: XOR<CustomerCreateWithoutTimeEntriesInput, CustomerUncheckedCreateWithoutTimeEntriesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTimeEntriesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTimeEntriesInput, CustomerUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type CustomerUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCustomersNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutEmailActivitiesInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    imapCredentials?: ImapCredentialCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailActivitiesInput = {
    id?: string
    email: string
    password: string
    companyId: string
    role?: string
    createdAt?: Date | string
    imapCredentials?: ImapCredentialUncheckedCreateNestedManyWithoutUserInput
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutUserInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailActivitiesInput, UserUncheckedCreateWithoutEmailActivitiesInput>
  }

  export type CustomerCreateWithoutEmailActivitiesInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutCustomersInput
    employeeCustomers?: EmployeeCustomerCreateNestedManyWithoutCustomerInput
    timeEntries?: TimeEntryCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEmailActivitiesInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    companyId: string
    createdAt?: Date | string
    employeeCustomers?: EmployeeCustomerUncheckedCreateNestedManyWithoutCustomerInput
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEmailActivitiesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEmailActivitiesInput, CustomerUncheckedCreateWithoutEmailActivitiesInput>
  }

  export type UserUpsertWithoutEmailActivitiesInput = {
    update: XOR<UserUpdateWithoutEmailActivitiesInput, UserUncheckedUpdateWithoutEmailActivitiesInput>
    create: XOR<UserCreateWithoutEmailActivitiesInput, UserUncheckedCreateWithoutEmailActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailActivitiesInput, UserUncheckedUpdateWithoutEmailActivitiesInput>
  }

  export type UserUpdateWithoutEmailActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    imapCredentials?: ImapCredentialUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imapCredentials?: ImapCredentialUncheckedUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutEmailActivitiesInput = {
    update: XOR<CustomerUpdateWithoutEmailActivitiesInput, CustomerUncheckedUpdateWithoutEmailActivitiesInput>
    create: XOR<CustomerCreateWithoutEmailActivitiesInput, CustomerUncheckedCreateWithoutEmailActivitiesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutEmailActivitiesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutEmailActivitiesInput, CustomerUncheckedUpdateWithoutEmailActivitiesInput>
  }

  export type CustomerUpdateWithoutEmailActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutCustomersNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutCustomerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEmailActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutCustomerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CompanyCreateWithoutFortnoxSyncLogsInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    integrations?: CompanyIntegrationCreateNestedManyWithoutCompanyInput
    customers?: CustomerCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFortnoxSyncLogsInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    integrations?: CompanyIntegrationUncheckedCreateNestedManyWithoutCompanyInput
    customers?: CustomerUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFortnoxSyncLogsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFortnoxSyncLogsInput, CompanyUncheckedCreateWithoutFortnoxSyncLogsInput>
  }

  export type CompanyUpsertWithoutFortnoxSyncLogsInput = {
    update: XOR<CompanyUpdateWithoutFortnoxSyncLogsInput, CompanyUncheckedUpdateWithoutFortnoxSyncLogsInput>
    create: XOR<CompanyCreateWithoutFortnoxSyncLogsInput, CompanyUncheckedCreateWithoutFortnoxSyncLogsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFortnoxSyncLogsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFortnoxSyncLogsInput, CompanyUncheckedUpdateWithoutFortnoxSyncLogsInput>
  }

  export type CompanyUpdateWithoutFortnoxSyncLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    integrations?: CompanyIntegrationUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFortnoxSyncLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    integrations?: CompanyIntegrationUncheckedUpdateManyWithoutCompanyNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type CompanyIntegrationCreateManyCompanyInput = {
    id?: string
    service: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CustomerCreateManyCompanyInput = {
    id?: string
    fortnoxCustomerNumber?: string | null
    name: string
    domain?: string | null
    createdAt?: Date | string
  }

  export type FortnoxSyncLogCreateManyCompanyInput = {
    id?: string
    resource: string
    lastSyncedAt: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imapCredentials?: ImapCredentialUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imapCredentials?: ImapCredentialUncheckedUpdateManyWithoutUserNestedInput
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutUserNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIntegrationUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIntegrationUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyIntegrationUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeCustomers?: EmployeeCustomerUpdateManyWithoutCustomerNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeCustomers?: EmployeeCustomerUncheckedUpdateManyWithoutCustomerNestedInput
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutCustomerNestedInput
    emailActivities?: EmailActivityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fortnoxCustomerNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FortnoxSyncLogUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FortnoxSyncLogUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FortnoxSyncLogUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImapCredentialCreateManyUserInput = {
    id?: string
    imapHost: string
    imapPort?: number
    emailAddress: string
    encryptedPassword: string
    useTls?: boolean
    createdAt?: Date | string
  }

  export type EmployeeCustomerCreateManyUserInput = {
    id?: string
    customerId: string
    assignedAt?: Date | string
    assignedBy?: string | null
  }

  export type TimeEntryCreateManyUserInput = {
    id?: string
    customerId?: string | null
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
  }

  export type EmailActivityCreateManyUserInput = {
    id?: string
    customerId?: string | null
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
  }

  export type ImapCredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImapCredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImapCredentialUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imapHost?: StringFieldUpdateOperationsInput | string
    imapPort?: IntFieldUpdateOperationsInput | number
    emailAddress?: StringFieldUpdateOperationsInput | string
    encryptedPassword?: StringFieldUpdateOperationsInput | string
    useTls?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneRequiredWithoutEmployeeCustomersNestedInput
  }

  export type EmployeeCustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutEmailActivitiesNestedInput
  }

  export type EmailActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCustomerCreateManyCustomerInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    assignedBy?: string | null
  }

  export type TimeEntryCreateManyCustomerInput = {
    id?: string
    userId: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    description?: string | null
    source?: string
    rawCustomerName?: string | null
    createdAt?: Date | string
  }

  export type EmailActivityCreateManyCustomerInput = {
    id?: string
    userId: string
    sentAt: Date | string
    recipientEmail: string
    recipientDomain: string
    subject?: string | null
    messageId?: string | null
    createdAt?: Date | string
  }

  export type EmployeeCustomerUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEmployeeCustomersNestedInput
  }

  export type EmployeeCustomerUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCustomerUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeEntryUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    rawCustomerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailActivitiesNestedInput
  }

  export type EmailActivityUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailActivityUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientDomain?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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