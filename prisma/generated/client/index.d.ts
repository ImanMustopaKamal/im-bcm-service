
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model threat_type
 * 
 */
export type threat_type = $Result.DefaultSelection<Prisma.$threat_typePayload>
/**
 * Model threat
 * 
 */
export type threat = $Result.DefaultSelection<Prisma.$threatPayload>
/**
 * Model Applications
 * 
 */
export type Applications = $Result.DefaultSelection<Prisma.$ApplicationsPayload>
/**
 * Model Staff_Condition
 * 
 */
export type Staff_Condition = $Result.DefaultSelection<Prisma.$Staff_ConditionPayload>
/**
 * Model Indirect_Unit
 * 
 */
export type Indirect_Unit = $Result.DefaultSelection<Prisma.$Indirect_UnitPayload>
/**
 * Model App_Testing_Period
 * 
 */
export type App_Testing_Period = $Result.DefaultSelection<Prisma.$App_Testing_PeriodPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model vw_threat_types
 * 
 */
export type vw_threat_types = $Result.DefaultSelection<Prisma.$vw_threat_typesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Threat_types
 * const threat_types = await prisma.threat_type.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Threat_types
   * const threat_types = await prisma.threat_type.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.threat_type`: Exposes CRUD operations for the **threat_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threat_types
    * const threat_types = await prisma.threat_type.findMany()
    * ```
    */
  get threat_type(): Prisma.threat_typeDelegate<ExtArgs>;

  /**
   * `prisma.threat`: Exposes CRUD operations for the **threat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threats
    * const threats = await prisma.threat.findMany()
    * ```
    */
  get threat(): Prisma.threatDelegate<ExtArgs>;

  /**
   * `prisma.applications`: Exposes CRUD operations for the **Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.ApplicationsDelegate<ExtArgs>;

  /**
   * `prisma.staff_Condition`: Exposes CRUD operations for the **Staff_Condition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff_Conditions
    * const staff_Conditions = await prisma.staff_Condition.findMany()
    * ```
    */
  get staff_Condition(): Prisma.Staff_ConditionDelegate<ExtArgs>;

  /**
   * `prisma.indirect_Unit`: Exposes CRUD operations for the **Indirect_Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indirect_Units
    * const indirect_Units = await prisma.indirect_Unit.findMany()
    * ```
    */
  get indirect_Unit(): Prisma.Indirect_UnitDelegate<ExtArgs>;

  /**
   * `prisma.app_Testing_Period`: Exposes CRUD operations for the **App_Testing_Period** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more App_Testing_Periods
    * const app_Testing_Periods = await prisma.app_Testing_Period.findMany()
    * ```
    */
  get app_Testing_Period(): Prisma.App_Testing_PeriodDelegate<ExtArgs>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs>;

  /**
   * `prisma.vw_threat_types`: Exposes CRUD operations for the **vw_threat_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vw_threat_types
    * const vw_threat_types = await prisma.vw_threat_types.findMany()
    * ```
    */
  get vw_threat_types(): Prisma.vw_threat_typesDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    threat_type: 'threat_type',
    threat: 'threat',
    Applications: 'Applications',
    Staff_Condition: 'Staff_Condition',
    Indirect_Unit: 'Indirect_Unit',
    App_Testing_Period: 'App_Testing_Period',
    Currency: 'Currency',
    vw_threat_types: 'vw_threat_types'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'threat_type' | 'threat' | 'applications' | 'staff_Condition' | 'indirect_Unit' | 'app_Testing_Period' | 'currency' | 'vw_threat_types'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      threat_type: {
        payload: Prisma.$threat_typePayload<ExtArgs>
        fields: Prisma.threat_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.threat_typeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.threat_typeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>
          }
          findFirst: {
            args: Prisma.threat_typeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.threat_typeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>
          }
          findMany: {
            args: Prisma.threat_typeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>[]
          }
          create: {
            args: Prisma.threat_typeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>
          }
          createMany: {
            args: Prisma.threat_typeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.threat_typeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>
          }
          update: {
            args: Prisma.threat_typeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>
          }
          deleteMany: {
            args: Prisma.threat_typeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.threat_typeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.threat_typeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threat_typePayload>
          }
          aggregate: {
            args: Prisma.Threat_typeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThreat_type>
          }
          groupBy: {
            args: Prisma.threat_typeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Threat_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.threat_typeCountArgs<ExtArgs>,
            result: $Utils.Optional<Threat_typeCountAggregateOutputType> | number
          }
        }
      }
      threat: {
        payload: Prisma.$threatPayload<ExtArgs>
        fields: Prisma.threatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.threatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.threatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>
          }
          findFirst: {
            args: Prisma.threatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.threatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>
          }
          findMany: {
            args: Prisma.threatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>[]
          }
          create: {
            args: Prisma.threatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>
          }
          createMany: {
            args: Prisma.threatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.threatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>
          }
          update: {
            args: Prisma.threatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>
          }
          deleteMany: {
            args: Prisma.threatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.threatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.threatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$threatPayload>
          }
          aggregate: {
            args: Prisma.ThreatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThreat>
          }
          groupBy: {
            args: Prisma.threatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThreatGroupByOutputType>[]
          }
          count: {
            args: Prisma.threatCountArgs<ExtArgs>,
            result: $Utils.Optional<ThreatCountAggregateOutputType> | number
          }
        }
      }
      Applications: {
        payload: Prisma.$ApplicationsPayload<ExtArgs>
        fields: Prisma.ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findMany: {
            args: Prisma.ApplicationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          create: {
            args: Prisma.ApplicationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          createMany: {
            args: Prisma.ApplicationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          update: {
            args: Prisma.ApplicationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.ApplicationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationsCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      Staff_Condition: {
        payload: Prisma.$Staff_ConditionPayload<ExtArgs>
        fields: Prisma.Staff_ConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Staff_ConditionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Staff_ConditionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>
          }
          findFirst: {
            args: Prisma.Staff_ConditionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Staff_ConditionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>
          }
          findMany: {
            args: Prisma.Staff_ConditionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>[]
          }
          create: {
            args: Prisma.Staff_ConditionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>
          }
          createMany: {
            args: Prisma.Staff_ConditionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Staff_ConditionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>
          }
          update: {
            args: Prisma.Staff_ConditionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>
          }
          deleteMany: {
            args: Prisma.Staff_ConditionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Staff_ConditionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Staff_ConditionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Staff_ConditionPayload>
          }
          aggregate: {
            args: Prisma.Staff_ConditionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStaff_Condition>
          }
          groupBy: {
            args: Prisma.Staff_ConditionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Staff_ConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.Staff_ConditionCountArgs<ExtArgs>,
            result: $Utils.Optional<Staff_ConditionCountAggregateOutputType> | number
          }
        }
      }
      Indirect_Unit: {
        payload: Prisma.$Indirect_UnitPayload<ExtArgs>
        fields: Prisma.Indirect_UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Indirect_UnitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Indirect_UnitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>
          }
          findFirst: {
            args: Prisma.Indirect_UnitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Indirect_UnitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>
          }
          findMany: {
            args: Prisma.Indirect_UnitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>[]
          }
          create: {
            args: Prisma.Indirect_UnitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>
          }
          createMany: {
            args: Prisma.Indirect_UnitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Indirect_UnitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>
          }
          update: {
            args: Prisma.Indirect_UnitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>
          }
          deleteMany: {
            args: Prisma.Indirect_UnitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Indirect_UnitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Indirect_UnitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Indirect_UnitPayload>
          }
          aggregate: {
            args: Prisma.Indirect_UnitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIndirect_Unit>
          }
          groupBy: {
            args: Prisma.Indirect_UnitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Indirect_UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.Indirect_UnitCountArgs<ExtArgs>,
            result: $Utils.Optional<Indirect_UnitCountAggregateOutputType> | number
          }
        }
      }
      App_Testing_Period: {
        payload: Prisma.$App_Testing_PeriodPayload<ExtArgs>
        fields: Prisma.App_Testing_PeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.App_Testing_PeriodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.App_Testing_PeriodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>
          }
          findFirst: {
            args: Prisma.App_Testing_PeriodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.App_Testing_PeriodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>
          }
          findMany: {
            args: Prisma.App_Testing_PeriodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>[]
          }
          create: {
            args: Prisma.App_Testing_PeriodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>
          }
          createMany: {
            args: Prisma.App_Testing_PeriodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.App_Testing_PeriodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>
          }
          update: {
            args: Prisma.App_Testing_PeriodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>
          }
          deleteMany: {
            args: Prisma.App_Testing_PeriodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.App_Testing_PeriodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.App_Testing_PeriodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$App_Testing_PeriodPayload>
          }
          aggregate: {
            args: Prisma.App_Testing_PeriodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApp_Testing_Period>
          }
          groupBy: {
            args: Prisma.App_Testing_PeriodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<App_Testing_PeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.App_Testing_PeriodCountArgs<ExtArgs>,
            result: $Utils.Optional<App_Testing_PeriodCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      vw_threat_types: {
        payload: Prisma.$vw_threat_typesPayload<ExtArgs>
        fields: Prisma.vw_threat_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vw_threat_typesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vw_threat_typesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>
          }
          findFirst: {
            args: Prisma.vw_threat_typesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vw_threat_typesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>
          }
          findMany: {
            args: Prisma.vw_threat_typesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>[]
          }
          create: {
            args: Prisma.vw_threat_typesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>
          }
          createMany: {
            args: Prisma.vw_threat_typesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.vw_threat_typesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>
          }
          update: {
            args: Prisma.vw_threat_typesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>
          }
          deleteMany: {
            args: Prisma.vw_threat_typesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.vw_threat_typesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.vw_threat_typesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$vw_threat_typesPayload>
          }
          aggregate: {
            args: Prisma.Vw_threat_typesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVw_threat_types>
          }
          groupBy: {
            args: Prisma.vw_threat_typesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Vw_threat_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vw_threat_typesCountArgs<ExtArgs>,
            result: $Utils.Optional<Vw_threat_typesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type Threat_typeCountOutputType
   */

  export type Threat_typeCountOutputType = {
    threats: number
  }

  export type Threat_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threats?: boolean | Threat_typeCountOutputTypeCountThreatsArgs
  }

  // Custom InputTypes

  /**
   * Threat_typeCountOutputType without action
   */
  export type Threat_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Threat_typeCountOutputType
     */
    select?: Threat_typeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Threat_typeCountOutputType without action
   */
  export type Threat_typeCountOutputTypeCountThreatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: threatWhereInput
  }



  /**
   * Models
   */

  /**
   * Model threat_type
   */

  export type AggregateThreat_type = {
    _count: Threat_typeCountAggregateOutputType | null
    _min: Threat_typeMinAggregateOutputType | null
    _max: Threat_typeMaxAggregateOutputType | null
  }

  export type Threat_typeMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Threat_typeMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Threat_typeCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Threat_typeMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Threat_typeMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Threat_typeCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Threat_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which threat_type to aggregate.
     */
    where?: threat_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threat_types to fetch.
     */
    orderBy?: threat_typeOrderByWithRelationInput | threat_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: threat_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned threat_types
    **/
    _count?: true | Threat_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Threat_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Threat_typeMaxAggregateInputType
  }

  export type GetThreat_typeAggregateType<T extends Threat_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateThreat_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreat_type[P]>
      : GetScalarType<T[P], AggregateThreat_type[P]>
  }




  export type threat_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: threat_typeWhereInput
    orderBy?: threat_typeOrderByWithAggregationInput | threat_typeOrderByWithAggregationInput[]
    by: Threat_typeScalarFieldEnum[] | Threat_typeScalarFieldEnum
    having?: threat_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Threat_typeCountAggregateInputType | true
    _min?: Threat_typeMinAggregateInputType
    _max?: Threat_typeMaxAggregateInputType
  }

  export type Threat_typeGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: Threat_typeCountAggregateOutputType | null
    _min: Threat_typeMinAggregateOutputType | null
    _max: Threat_typeMaxAggregateOutputType | null
  }

  type GetThreat_typeGroupByPayload<T extends threat_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Threat_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Threat_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Threat_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Threat_typeGroupByOutputType[P]>
        }
      >
    >


  export type threat_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    threats?: boolean | threat_type$threatsArgs<ExtArgs>
    _count?: boolean | Threat_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threat_type"]>

  export type threat_typeSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type threat_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threats?: boolean | threat_type$threatsArgs<ExtArgs>
    _count?: boolean | Threat_typeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $threat_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "threat_type"
    objects: {
      threats: Prisma.$threatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["threat_type"]>
    composites: {}
  }


  type threat_typeGetPayload<S extends boolean | null | undefined | threat_typeDefaultArgs> = $Result.GetResult<Prisma.$threat_typePayload, S>

  type threat_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<threat_typeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Threat_typeCountAggregateInputType | true
    }

  export interface threat_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['threat_type'], meta: { name: 'threat_type' } }
    /**
     * Find zero or one Threat_type that matches the filter.
     * @param {threat_typeFindUniqueArgs} args - Arguments to find a Threat_type
     * @example
     * // Get one Threat_type
     * const threat_type = await prisma.threat_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends threat_typeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, threat_typeFindUniqueArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Threat_type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {threat_typeFindUniqueOrThrowArgs} args - Arguments to find a Threat_type
     * @example
     * // Get one Threat_type
     * const threat_type = await prisma.threat_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends threat_typeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, threat_typeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Threat_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threat_typeFindFirstArgs} args - Arguments to find a Threat_type
     * @example
     * // Get one Threat_type
     * const threat_type = await prisma.threat_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends threat_typeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, threat_typeFindFirstArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Threat_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threat_typeFindFirstOrThrowArgs} args - Arguments to find a Threat_type
     * @example
     * // Get one Threat_type
     * const threat_type = await prisma.threat_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends threat_typeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, threat_typeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Threat_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threat_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threat_types
     * const threat_types = await prisma.threat_type.findMany()
     * 
     * // Get first 10 Threat_types
     * const threat_types = await prisma.threat_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threat_typeWithIdOnly = await prisma.threat_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends threat_typeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threat_typeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Threat_type.
     * @param {threat_typeCreateArgs} args - Arguments to create a Threat_type.
     * @example
     * // Create one Threat_type
     * const Threat_type = await prisma.threat_type.create({
     *   data: {
     *     // ... data to create a Threat_type
     *   }
     * })
     * 
    **/
    create<T extends threat_typeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, threat_typeCreateArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Threat_types.
     *     @param {threat_typeCreateManyArgs} args - Arguments to create many Threat_types.
     *     @example
     *     // Create many Threat_types
     *     const threat_type = await prisma.threat_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends threat_typeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threat_typeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Threat_type.
     * @param {threat_typeDeleteArgs} args - Arguments to delete one Threat_type.
     * @example
     * // Delete one Threat_type
     * const Threat_type = await prisma.threat_type.delete({
     *   where: {
     *     // ... filter to delete one Threat_type
     *   }
     * })
     * 
    **/
    delete<T extends threat_typeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, threat_typeDeleteArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Threat_type.
     * @param {threat_typeUpdateArgs} args - Arguments to update one Threat_type.
     * @example
     * // Update one Threat_type
     * const threat_type = await prisma.threat_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends threat_typeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, threat_typeUpdateArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Threat_types.
     * @param {threat_typeDeleteManyArgs} args - Arguments to filter Threat_types to delete.
     * @example
     * // Delete a few Threat_types
     * const { count } = await prisma.threat_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends threat_typeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threat_typeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threat_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threat_types
     * const threat_type = await prisma.threat_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends threat_typeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, threat_typeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Threat_type.
     * @param {threat_typeUpsertArgs} args - Arguments to update or create a Threat_type.
     * @example
     * // Update or create a Threat_type
     * const threat_type = await prisma.threat_type.upsert({
     *   create: {
     *     // ... data to create a Threat_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Threat_type we want to update
     *   }
     * })
    **/
    upsert<T extends threat_typeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, threat_typeUpsertArgs<ExtArgs>>
    ): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Threat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threat_typeCountArgs} args - Arguments to filter Threat_types to count.
     * @example
     * // Count the number of Threat_types
     * const count = await prisma.threat_type.count({
     *   where: {
     *     // ... the filter for the Threat_types we want to count
     *   }
     * })
    **/
    count<T extends threat_typeCountArgs>(
      args?: Subset<T, threat_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Threat_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Threat_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Threat_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Threat_typeAggregateArgs>(args: Subset<T, Threat_typeAggregateArgs>): Prisma.PrismaPromise<GetThreat_typeAggregateType<T>>

    /**
     * Group by Threat_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threat_typeGroupByArgs} args - Group by arguments.
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
      T extends threat_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: threat_typeGroupByArgs['orderBy'] }
        : { orderBy?: threat_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, threat_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreat_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the threat_type model
   */
  readonly fields: threat_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for threat_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__threat_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    threats<T extends threat_type$threatsArgs<ExtArgs> = {}>(args?: Subset<T, threat_type$threatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the threat_type model
   */ 
  interface threat_typeFieldRefs {
    readonly id: FieldRef<"threat_type", 'String'>
    readonly tenant_id: FieldRef<"threat_type", 'String'>
    readonly name: FieldRef<"threat_type", 'String'>
    readonly is_active: FieldRef<"threat_type", 'Boolean'>
    readonly created_at: FieldRef<"threat_type", 'DateTime'>
    readonly updated_at: FieldRef<"threat_type", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * threat_type findUnique
   */
  export type threat_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * Filter, which threat_type to fetch.
     */
    where: threat_typeWhereUniqueInput
  }


  /**
   * threat_type findUniqueOrThrow
   */
  export type threat_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * Filter, which threat_type to fetch.
     */
    where: threat_typeWhereUniqueInput
  }


  /**
   * threat_type findFirst
   */
  export type threat_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * Filter, which threat_type to fetch.
     */
    where?: threat_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threat_types to fetch.
     */
    orderBy?: threat_typeOrderByWithRelationInput | threat_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threat_types.
     */
    cursor?: threat_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threat_types.
     */
    distinct?: Threat_typeScalarFieldEnum | Threat_typeScalarFieldEnum[]
  }


  /**
   * threat_type findFirstOrThrow
   */
  export type threat_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * Filter, which threat_type to fetch.
     */
    where?: threat_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threat_types to fetch.
     */
    orderBy?: threat_typeOrderByWithRelationInput | threat_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threat_types.
     */
    cursor?: threat_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threat_types.
     */
    distinct?: Threat_typeScalarFieldEnum | Threat_typeScalarFieldEnum[]
  }


  /**
   * threat_type findMany
   */
  export type threat_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * Filter, which threat_types to fetch.
     */
    where?: threat_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threat_types to fetch.
     */
    orderBy?: threat_typeOrderByWithRelationInput | threat_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing threat_types.
     */
    cursor?: threat_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threat_types.
     */
    skip?: number
    distinct?: Threat_typeScalarFieldEnum | Threat_typeScalarFieldEnum[]
  }


  /**
   * threat_type create
   */
  export type threat_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a threat_type.
     */
    data: XOR<threat_typeCreateInput, threat_typeUncheckedCreateInput>
  }


  /**
   * threat_type createMany
   */
  export type threat_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many threat_types.
     */
    data: threat_typeCreateManyInput | threat_typeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * threat_type update
   */
  export type threat_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a threat_type.
     */
    data: XOR<threat_typeUpdateInput, threat_typeUncheckedUpdateInput>
    /**
     * Choose, which threat_type to update.
     */
    where: threat_typeWhereUniqueInput
  }


  /**
   * threat_type updateMany
   */
  export type threat_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update threat_types.
     */
    data: XOR<threat_typeUpdateManyMutationInput, threat_typeUncheckedUpdateManyInput>
    /**
     * Filter which threat_types to update
     */
    where?: threat_typeWhereInput
  }


  /**
   * threat_type upsert
   */
  export type threat_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the threat_type to update in case it exists.
     */
    where: threat_typeWhereUniqueInput
    /**
     * In case the threat_type found by the `where` argument doesn't exist, create a new threat_type with this data.
     */
    create: XOR<threat_typeCreateInput, threat_typeUncheckedCreateInput>
    /**
     * In case the threat_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<threat_typeUpdateInput, threat_typeUncheckedUpdateInput>
  }


  /**
   * threat_type delete
   */
  export type threat_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
    /**
     * Filter which threat_type to delete.
     */
    where: threat_typeWhereUniqueInput
  }


  /**
   * threat_type deleteMany
   */
  export type threat_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which threat_types to delete
     */
    where?: threat_typeWhereInput
  }


  /**
   * threat_type.threats
   */
  export type threat_type$threatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    where?: threatWhereInput
    orderBy?: threatOrderByWithRelationInput | threatOrderByWithRelationInput[]
    cursor?: threatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreatScalarFieldEnum | ThreatScalarFieldEnum[]
  }


  /**
   * threat_type without action
   */
  export type threat_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat_type
     */
    select?: threat_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threat_typeInclude<ExtArgs> | null
  }



  /**
   * Model threat
   */

  export type AggregateThreat = {
    _count: ThreatCountAggregateOutputType | null
    _min: ThreatMinAggregateOutputType | null
    _max: ThreatMaxAggregateOutputType | null
  }

  export type ThreatMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    type_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ThreatMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    type_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ThreatCountAggregateOutputType = {
    id: number
    tenant_id: number
    type_id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ThreatMinAggregateInputType = {
    id?: true
    tenant_id?: true
    type_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ThreatMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    type_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ThreatCountAggregateInputType = {
    id?: true
    tenant_id?: true
    type_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ThreatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which threat to aggregate.
     */
    where?: threatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threats to fetch.
     */
    orderBy?: threatOrderByWithRelationInput | threatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: threatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned threats
    **/
    _count?: true | ThreatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreatMaxAggregateInputType
  }

  export type GetThreatAggregateType<T extends ThreatAggregateArgs> = {
        [P in keyof T & keyof AggregateThreat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreat[P]>
      : GetScalarType<T[P], AggregateThreat[P]>
  }




  export type threatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: threatWhereInput
    orderBy?: threatOrderByWithAggregationInput | threatOrderByWithAggregationInput[]
    by: ThreatScalarFieldEnum[] | ThreatScalarFieldEnum
    having?: threatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreatCountAggregateInputType | true
    _min?: ThreatMinAggregateInputType
    _max?: ThreatMaxAggregateInputType
  }

  export type ThreatGroupByOutputType = {
    id: string
    tenant_id: string
    type_id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: ThreatCountAggregateOutputType | null
    _min: ThreatMinAggregateOutputType | null
    _max: ThreatMaxAggregateOutputType | null
  }

  type GetThreatGroupByPayload<T extends threatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreatGroupByOutputType[P]>
            : GetScalarType<T[P], ThreatGroupByOutputType[P]>
        }
      >
    >


  export type threatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    type_id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    threat_types?: boolean | threat_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threat"]>

  export type threatSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    type_id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type threatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threat_types?: boolean | threat_typeDefaultArgs<ExtArgs>
  }


  export type $threatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "threat"
    objects: {
      threat_types: Prisma.$threat_typePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      type_id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["threat"]>
    composites: {}
  }


  type threatGetPayload<S extends boolean | null | undefined | threatDefaultArgs> = $Result.GetResult<Prisma.$threatPayload, S>

  type threatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<threatFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ThreatCountAggregateInputType | true
    }

  export interface threatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['threat'], meta: { name: 'threat' } }
    /**
     * Find zero or one Threat that matches the filter.
     * @param {threatFindUniqueArgs} args - Arguments to find a Threat
     * @example
     * // Get one Threat
     * const threat = await prisma.threat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends threatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, threatFindUniqueArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Threat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {threatFindUniqueOrThrowArgs} args - Arguments to find a Threat
     * @example
     * // Get one Threat
     * const threat = await prisma.threat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends threatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, threatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Threat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threatFindFirstArgs} args - Arguments to find a Threat
     * @example
     * // Get one Threat
     * const threat = await prisma.threat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends threatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, threatFindFirstArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Threat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threatFindFirstOrThrowArgs} args - Arguments to find a Threat
     * @example
     * // Get one Threat
     * const threat = await prisma.threat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends threatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, threatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Threats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threats
     * const threats = await prisma.threat.findMany()
     * 
     * // Get first 10 Threats
     * const threats = await prisma.threat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threatWithIdOnly = await prisma.threat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends threatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Threat.
     * @param {threatCreateArgs} args - Arguments to create a Threat.
     * @example
     * // Create one Threat
     * const Threat = await prisma.threat.create({
     *   data: {
     *     // ... data to create a Threat
     *   }
     * })
     * 
    **/
    create<T extends threatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, threatCreateArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Threats.
     *     @param {threatCreateManyArgs} args - Arguments to create many Threats.
     *     @example
     *     // Create many Threats
     *     const threat = await prisma.threat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends threatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Threat.
     * @param {threatDeleteArgs} args - Arguments to delete one Threat.
     * @example
     * // Delete one Threat
     * const Threat = await prisma.threat.delete({
     *   where: {
     *     // ... filter to delete one Threat
     *   }
     * })
     * 
    **/
    delete<T extends threatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, threatDeleteArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Threat.
     * @param {threatUpdateArgs} args - Arguments to update one Threat.
     * @example
     * // Update one Threat
     * const threat = await prisma.threat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends threatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, threatUpdateArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Threats.
     * @param {threatDeleteManyArgs} args - Arguments to filter Threats to delete.
     * @example
     * // Delete a few Threats
     * const { count } = await prisma.threat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends threatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, threatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threats
     * const threat = await prisma.threat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends threatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, threatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Threat.
     * @param {threatUpsertArgs} args - Arguments to update or create a Threat.
     * @example
     * // Update or create a Threat
     * const threat = await prisma.threat.upsert({
     *   create: {
     *     // ... data to create a Threat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Threat we want to update
     *   }
     * })
    **/
    upsert<T extends threatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, threatUpsertArgs<ExtArgs>>
    ): Prisma__threatClient<$Result.GetResult<Prisma.$threatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Threats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threatCountArgs} args - Arguments to filter Threats to count.
     * @example
     * // Count the number of Threats
     * const count = await prisma.threat.count({
     *   where: {
     *     // ... the filter for the Threats we want to count
     *   }
     * })
    **/
    count<T extends threatCountArgs>(
      args?: Subset<T, threatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Threat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThreatAggregateArgs>(args: Subset<T, ThreatAggregateArgs>): Prisma.PrismaPromise<GetThreatAggregateType<T>>

    /**
     * Group by Threat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threatGroupByArgs} args - Group by arguments.
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
      T extends threatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: threatGroupByArgs['orderBy'] }
        : { orderBy?: threatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, threatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the threat model
   */
  readonly fields: threatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for threat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__threatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    threat_types<T extends threat_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, threat_typeDefaultArgs<ExtArgs>>): Prisma__threat_typeClient<$Result.GetResult<Prisma.$threat_typePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the threat model
   */ 
  interface threatFieldRefs {
    readonly id: FieldRef<"threat", 'String'>
    readonly tenant_id: FieldRef<"threat", 'String'>
    readonly type_id: FieldRef<"threat", 'String'>
    readonly name: FieldRef<"threat", 'String'>
    readonly is_active: FieldRef<"threat", 'Boolean'>
    readonly created_at: FieldRef<"threat", 'DateTime'>
    readonly updated_at: FieldRef<"threat", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * threat findUnique
   */
  export type threatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * Filter, which threat to fetch.
     */
    where: threatWhereUniqueInput
  }


  /**
   * threat findUniqueOrThrow
   */
  export type threatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * Filter, which threat to fetch.
     */
    where: threatWhereUniqueInput
  }


  /**
   * threat findFirst
   */
  export type threatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * Filter, which threat to fetch.
     */
    where?: threatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threats to fetch.
     */
    orderBy?: threatOrderByWithRelationInput | threatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threats.
     */
    cursor?: threatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threats.
     */
    distinct?: ThreatScalarFieldEnum | ThreatScalarFieldEnum[]
  }


  /**
   * threat findFirstOrThrow
   */
  export type threatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * Filter, which threat to fetch.
     */
    where?: threatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threats to fetch.
     */
    orderBy?: threatOrderByWithRelationInput | threatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threats.
     */
    cursor?: threatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threats.
     */
    distinct?: ThreatScalarFieldEnum | ThreatScalarFieldEnum[]
  }


  /**
   * threat findMany
   */
  export type threatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * Filter, which threats to fetch.
     */
    where?: threatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threats to fetch.
     */
    orderBy?: threatOrderByWithRelationInput | threatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing threats.
     */
    cursor?: threatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threats.
     */
    skip?: number
    distinct?: ThreatScalarFieldEnum | ThreatScalarFieldEnum[]
  }


  /**
   * threat create
   */
  export type threatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * The data needed to create a threat.
     */
    data: XOR<threatCreateInput, threatUncheckedCreateInput>
  }


  /**
   * threat createMany
   */
  export type threatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many threats.
     */
    data: threatCreateManyInput | threatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * threat update
   */
  export type threatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * The data needed to update a threat.
     */
    data: XOR<threatUpdateInput, threatUncheckedUpdateInput>
    /**
     * Choose, which threat to update.
     */
    where: threatWhereUniqueInput
  }


  /**
   * threat updateMany
   */
  export type threatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update threats.
     */
    data: XOR<threatUpdateManyMutationInput, threatUncheckedUpdateManyInput>
    /**
     * Filter which threats to update
     */
    where?: threatWhereInput
  }


  /**
   * threat upsert
   */
  export type threatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * The filter to search for the threat to update in case it exists.
     */
    where: threatWhereUniqueInput
    /**
     * In case the threat found by the `where` argument doesn't exist, create a new threat with this data.
     */
    create: XOR<threatCreateInput, threatUncheckedCreateInput>
    /**
     * In case the threat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<threatUpdateInput, threatUncheckedUpdateInput>
  }


  /**
   * threat delete
   */
  export type threatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
    /**
     * Filter which threat to delete.
     */
    where: threatWhereUniqueInput
  }


  /**
   * threat deleteMany
   */
  export type threatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which threats to delete
     */
    where?: threatWhereInput
  }


  /**
   * threat without action
   */
  export type threatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the threat
     */
    select?: threatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: threatInclude<ExtArgs> | null
  }



  /**
   * Model Applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsAvgAggregateOutputType = {
    severity: number | null
  }

  export type ApplicationsSumAggregateOutputType = {
    severity: number | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    code: string | null
    name: string | null
    severity: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    code: string | null
    name: string | null
    severity: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicationsCountAggregateOutputType = {
    id: number
    tenant_id: number
    code: number
    name: number
    severity: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApplicationsAvgAggregateInputType = {
    severity?: true
  }

  export type ApplicationsSumAggregateInputType = {
    severity?: true
  }

  export type ApplicationsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    code?: true
    name?: true
    severity?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    code?: true
    name?: true
    severity?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicationsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    code?: true
    name?: true
    severity?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to aggregate.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithAggregationInput | ApplicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _avg?: ApplicationsAvgAggregateInputType
    _sum?: ApplicationsSumAggregateInputType
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    id: string
    tenant_id: string
    code: string
    name: string
    severity: number
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    code?: boolean
    name?: boolean
    severity?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    code?: boolean
    name?: boolean
    severity?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      code: string
      name: string
      severity: number
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }


  type ApplicationsGetPayload<S extends boolean | null | undefined | ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationsPayload, S>

  type ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applications'], meta: { name: 'Applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {ApplicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Applications that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationsWithIdOnly = await prisma.applications.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Applications.
     * @param {ApplicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
    **/
    create<T extends ApplicationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsCreateArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Applications.
     *     @param {ApplicationsCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const applications = await prisma.applications.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applications.
     * @param {ApplicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Applications.
     * @param {ApplicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applications.
     * @param {ApplicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationsCountArgs>(
      args?: Subset<T, ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsGroupByArgs} args - Group by arguments.
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
      T extends ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applications model
   */
  readonly fields: ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Applications model
   */ 
  interface ApplicationsFieldRefs {
    readonly id: FieldRef<"Applications", 'String'>
    readonly tenant_id: FieldRef<"Applications", 'String'>
    readonly code: FieldRef<"Applications", 'String'>
    readonly name: FieldRef<"Applications", 'String'>
    readonly severity: FieldRef<"Applications", 'Int'>
    readonly is_active: FieldRef<"Applications", 'Boolean'>
    readonly created_at: FieldRef<"Applications", 'DateTime'>
    readonly updated_at: FieldRef<"Applications", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Applications findUnique
   */
  export type ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications findUniqueOrThrow
   */
  export type ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications findFirst
   */
  export type ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }


  /**
   * Applications findFirstOrThrow
   */
  export type ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }


  /**
   * Applications findMany
   */
  export type ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }


  /**
   * Applications create
   */
  export type ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * The data needed to create a Applications.
     */
    data: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
  }


  /**
   * Applications createMany
   */
  export type ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Applications update
   */
  export type ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * The data needed to update a Applications.
     */
    data: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Applications to update.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications updateMany
   */
  export type ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
  }


  /**
   * Applications upsert
   */
  export type ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * The filter to search for the Applications to update in case it exists.
     */
    where: ApplicationsWhereUniqueInput
    /**
     * In case the Applications found by the `where` argument doesn't exist, create a new Applications with this data.
     */
    create: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
    /**
     * In case the Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
  }


  /**
   * Applications delete
   */
  export type ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Filter which Applications to delete.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications deleteMany
   */
  export type ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationsWhereInput
  }


  /**
   * Applications without action
   */
  export type ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
  }



  /**
   * Model Staff_Condition
   */

  export type AggregateStaff_Condition = {
    _count: Staff_ConditionCountAggregateOutputType | null
    _avg: Staff_ConditionAvgAggregateOutputType | null
    _sum: Staff_ConditionSumAggregateOutputType | null
    _min: Staff_ConditionMinAggregateOutputType | null
    _max: Staff_ConditionMaxAggregateOutputType | null
  }

  export type Staff_ConditionAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type Staff_ConditionSumAggregateOutputType = {
    sort_order: number | null
  }

  export type Staff_ConditionMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Staff_ConditionMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Staff_ConditionCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    sort_order: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Staff_ConditionAvgAggregateInputType = {
    sort_order?: true
  }

  export type Staff_ConditionSumAggregateInputType = {
    sort_order?: true
  }

  export type Staff_ConditionMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Staff_ConditionMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Staff_ConditionCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Staff_ConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff_Condition to aggregate.
     */
    where?: Staff_ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff_Conditions to fetch.
     */
    orderBy?: Staff_ConditionOrderByWithRelationInput | Staff_ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Staff_ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff_Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff_Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff_Conditions
    **/
    _count?: true | Staff_ConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Staff_ConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Staff_ConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Staff_ConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Staff_ConditionMaxAggregateInputType
  }

  export type GetStaff_ConditionAggregateType<T extends Staff_ConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff_Condition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff_Condition[P]>
      : GetScalarType<T[P], AggregateStaff_Condition[P]>
  }




  export type Staff_ConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Staff_ConditionWhereInput
    orderBy?: Staff_ConditionOrderByWithAggregationInput | Staff_ConditionOrderByWithAggregationInput[]
    by: Staff_ConditionScalarFieldEnum[] | Staff_ConditionScalarFieldEnum
    having?: Staff_ConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Staff_ConditionCountAggregateInputType | true
    _avg?: Staff_ConditionAvgAggregateInputType
    _sum?: Staff_ConditionSumAggregateInputType
    _min?: Staff_ConditionMinAggregateInputType
    _max?: Staff_ConditionMaxAggregateInputType
  }

  export type Staff_ConditionGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: Staff_ConditionCountAggregateOutputType | null
    _avg: Staff_ConditionAvgAggregateOutputType | null
    _sum: Staff_ConditionSumAggregateOutputType | null
    _min: Staff_ConditionMinAggregateOutputType | null
    _max: Staff_ConditionMaxAggregateOutputType | null
  }

  type GetStaff_ConditionGroupByPayload<T extends Staff_ConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Staff_ConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Staff_ConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Staff_ConditionGroupByOutputType[P]>
            : GetScalarType<T[P], Staff_ConditionGroupByOutputType[P]>
        }
      >
    >


  export type Staff_ConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["staff_Condition"]>

  export type Staff_ConditionSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $Staff_ConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff_Condition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      sort_order: number
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["staff_Condition"]>
    composites: {}
  }


  type Staff_ConditionGetPayload<S extends boolean | null | undefined | Staff_ConditionDefaultArgs> = $Result.GetResult<Prisma.$Staff_ConditionPayload, S>

  type Staff_ConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Staff_ConditionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Staff_ConditionCountAggregateInputType | true
    }

  export interface Staff_ConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff_Condition'], meta: { name: 'Staff_Condition' } }
    /**
     * Find zero or one Staff_Condition that matches the filter.
     * @param {Staff_ConditionFindUniqueArgs} args - Arguments to find a Staff_Condition
     * @example
     * // Get one Staff_Condition
     * const staff_Condition = await prisma.staff_Condition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Staff_ConditionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Staff_ConditionFindUniqueArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Staff_Condition that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Staff_ConditionFindUniqueOrThrowArgs} args - Arguments to find a Staff_Condition
     * @example
     * // Get one Staff_Condition
     * const staff_Condition = await prisma.staff_Condition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Staff_ConditionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Staff_ConditionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Staff_Condition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionFindFirstArgs} args - Arguments to find a Staff_Condition
     * @example
     * // Get one Staff_Condition
     * const staff_Condition = await prisma.staff_Condition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Staff_ConditionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Staff_ConditionFindFirstArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Staff_Condition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionFindFirstOrThrowArgs} args - Arguments to find a Staff_Condition
     * @example
     * // Get one Staff_Condition
     * const staff_Condition = await prisma.staff_Condition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Staff_ConditionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Staff_ConditionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Staff_Conditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff_Conditions
     * const staff_Conditions = await prisma.staff_Condition.findMany()
     * 
     * // Get first 10 Staff_Conditions
     * const staff_Conditions = await prisma.staff_Condition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staff_ConditionWithIdOnly = await prisma.staff_Condition.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Staff_ConditionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Staff_ConditionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Staff_Condition.
     * @param {Staff_ConditionCreateArgs} args - Arguments to create a Staff_Condition.
     * @example
     * // Create one Staff_Condition
     * const Staff_Condition = await prisma.staff_Condition.create({
     *   data: {
     *     // ... data to create a Staff_Condition
     *   }
     * })
     * 
    **/
    create<T extends Staff_ConditionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Staff_ConditionCreateArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Staff_Conditions.
     *     @param {Staff_ConditionCreateManyArgs} args - Arguments to create many Staff_Conditions.
     *     @example
     *     // Create many Staff_Conditions
     *     const staff_Condition = await prisma.staff_Condition.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Staff_ConditionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Staff_ConditionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff_Condition.
     * @param {Staff_ConditionDeleteArgs} args - Arguments to delete one Staff_Condition.
     * @example
     * // Delete one Staff_Condition
     * const Staff_Condition = await prisma.staff_Condition.delete({
     *   where: {
     *     // ... filter to delete one Staff_Condition
     *   }
     * })
     * 
    **/
    delete<T extends Staff_ConditionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Staff_ConditionDeleteArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Staff_Condition.
     * @param {Staff_ConditionUpdateArgs} args - Arguments to update one Staff_Condition.
     * @example
     * // Update one Staff_Condition
     * const staff_Condition = await prisma.staff_Condition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Staff_ConditionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Staff_ConditionUpdateArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Staff_Conditions.
     * @param {Staff_ConditionDeleteManyArgs} args - Arguments to filter Staff_Conditions to delete.
     * @example
     * // Delete a few Staff_Conditions
     * const { count } = await prisma.staff_Condition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Staff_ConditionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Staff_ConditionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff_Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff_Conditions
     * const staff_Condition = await prisma.staff_Condition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Staff_ConditionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Staff_ConditionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff_Condition.
     * @param {Staff_ConditionUpsertArgs} args - Arguments to update or create a Staff_Condition.
     * @example
     * // Update or create a Staff_Condition
     * const staff_Condition = await prisma.staff_Condition.upsert({
     *   create: {
     *     // ... data to create a Staff_Condition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff_Condition we want to update
     *   }
     * })
    **/
    upsert<T extends Staff_ConditionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Staff_ConditionUpsertArgs<ExtArgs>>
    ): Prisma__Staff_ConditionClient<$Result.GetResult<Prisma.$Staff_ConditionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Staff_Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionCountArgs} args - Arguments to filter Staff_Conditions to count.
     * @example
     * // Count the number of Staff_Conditions
     * const count = await prisma.staff_Condition.count({
     *   where: {
     *     // ... the filter for the Staff_Conditions we want to count
     *   }
     * })
    **/
    count<T extends Staff_ConditionCountArgs>(
      args?: Subset<T, Staff_ConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Staff_ConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff_Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Staff_ConditionAggregateArgs>(args: Subset<T, Staff_ConditionAggregateArgs>): Prisma.PrismaPromise<GetStaff_ConditionAggregateType<T>>

    /**
     * Group by Staff_Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_ConditionGroupByArgs} args - Group by arguments.
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
      T extends Staff_ConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Staff_ConditionGroupByArgs['orderBy'] }
        : { orderBy?: Staff_ConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Staff_ConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaff_ConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff_Condition model
   */
  readonly fields: Staff_ConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff_Condition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Staff_ConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Staff_Condition model
   */ 
  interface Staff_ConditionFieldRefs {
    readonly id: FieldRef<"Staff_Condition", 'String'>
    readonly tenant_id: FieldRef<"Staff_Condition", 'String'>
    readonly name: FieldRef<"Staff_Condition", 'String'>
    readonly sort_order: FieldRef<"Staff_Condition", 'Int'>
    readonly is_active: FieldRef<"Staff_Condition", 'Boolean'>
    readonly created_at: FieldRef<"Staff_Condition", 'DateTime'>
    readonly updated_at: FieldRef<"Staff_Condition", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Staff_Condition findUnique
   */
  export type Staff_ConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * Filter, which Staff_Condition to fetch.
     */
    where: Staff_ConditionWhereUniqueInput
  }


  /**
   * Staff_Condition findUniqueOrThrow
   */
  export type Staff_ConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * Filter, which Staff_Condition to fetch.
     */
    where: Staff_ConditionWhereUniqueInput
  }


  /**
   * Staff_Condition findFirst
   */
  export type Staff_ConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * Filter, which Staff_Condition to fetch.
     */
    where?: Staff_ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff_Conditions to fetch.
     */
    orderBy?: Staff_ConditionOrderByWithRelationInput | Staff_ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff_Conditions.
     */
    cursor?: Staff_ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff_Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff_Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff_Conditions.
     */
    distinct?: Staff_ConditionScalarFieldEnum | Staff_ConditionScalarFieldEnum[]
  }


  /**
   * Staff_Condition findFirstOrThrow
   */
  export type Staff_ConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * Filter, which Staff_Condition to fetch.
     */
    where?: Staff_ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff_Conditions to fetch.
     */
    orderBy?: Staff_ConditionOrderByWithRelationInput | Staff_ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff_Conditions.
     */
    cursor?: Staff_ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff_Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff_Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff_Conditions.
     */
    distinct?: Staff_ConditionScalarFieldEnum | Staff_ConditionScalarFieldEnum[]
  }


  /**
   * Staff_Condition findMany
   */
  export type Staff_ConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * Filter, which Staff_Conditions to fetch.
     */
    where?: Staff_ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff_Conditions to fetch.
     */
    orderBy?: Staff_ConditionOrderByWithRelationInput | Staff_ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff_Conditions.
     */
    cursor?: Staff_ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff_Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff_Conditions.
     */
    skip?: number
    distinct?: Staff_ConditionScalarFieldEnum | Staff_ConditionScalarFieldEnum[]
  }


  /**
   * Staff_Condition create
   */
  export type Staff_ConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * The data needed to create a Staff_Condition.
     */
    data: XOR<Staff_ConditionCreateInput, Staff_ConditionUncheckedCreateInput>
  }


  /**
   * Staff_Condition createMany
   */
  export type Staff_ConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff_Conditions.
     */
    data: Staff_ConditionCreateManyInput | Staff_ConditionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Staff_Condition update
   */
  export type Staff_ConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * The data needed to update a Staff_Condition.
     */
    data: XOR<Staff_ConditionUpdateInput, Staff_ConditionUncheckedUpdateInput>
    /**
     * Choose, which Staff_Condition to update.
     */
    where: Staff_ConditionWhereUniqueInput
  }


  /**
   * Staff_Condition updateMany
   */
  export type Staff_ConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff_Conditions.
     */
    data: XOR<Staff_ConditionUpdateManyMutationInput, Staff_ConditionUncheckedUpdateManyInput>
    /**
     * Filter which Staff_Conditions to update
     */
    where?: Staff_ConditionWhereInput
  }


  /**
   * Staff_Condition upsert
   */
  export type Staff_ConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * The filter to search for the Staff_Condition to update in case it exists.
     */
    where: Staff_ConditionWhereUniqueInput
    /**
     * In case the Staff_Condition found by the `where` argument doesn't exist, create a new Staff_Condition with this data.
     */
    create: XOR<Staff_ConditionCreateInput, Staff_ConditionUncheckedCreateInput>
    /**
     * In case the Staff_Condition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Staff_ConditionUpdateInput, Staff_ConditionUncheckedUpdateInput>
  }


  /**
   * Staff_Condition delete
   */
  export type Staff_ConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
    /**
     * Filter which Staff_Condition to delete.
     */
    where: Staff_ConditionWhereUniqueInput
  }


  /**
   * Staff_Condition deleteMany
   */
  export type Staff_ConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff_Conditions to delete
     */
    where?: Staff_ConditionWhereInput
  }


  /**
   * Staff_Condition without action
   */
  export type Staff_ConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff_Condition
     */
    select?: Staff_ConditionSelect<ExtArgs> | null
  }



  /**
   * Model Indirect_Unit
   */

  export type AggregateIndirect_Unit = {
    _count: Indirect_UnitCountAggregateOutputType | null
    _avg: Indirect_UnitAvgAggregateOutputType | null
    _sum: Indirect_UnitSumAggregateOutputType | null
    _min: Indirect_UnitMinAggregateOutputType | null
    _max: Indirect_UnitMaxAggregateOutputType | null
  }

  export type Indirect_UnitAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type Indirect_UnitSumAggregateOutputType = {
    sort_order: number | null
  }

  export type Indirect_UnitMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Indirect_UnitMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Indirect_UnitCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    sort_order: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Indirect_UnitAvgAggregateInputType = {
    sort_order?: true
  }

  export type Indirect_UnitSumAggregateInputType = {
    sort_order?: true
  }

  export type Indirect_UnitMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Indirect_UnitMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Indirect_UnitCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Indirect_UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indirect_Unit to aggregate.
     */
    where?: Indirect_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indirect_Units to fetch.
     */
    orderBy?: Indirect_UnitOrderByWithRelationInput | Indirect_UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Indirect_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indirect_Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indirect_Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indirect_Units
    **/
    _count?: true | Indirect_UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Indirect_UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Indirect_UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Indirect_UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Indirect_UnitMaxAggregateInputType
  }

  export type GetIndirect_UnitAggregateType<T extends Indirect_UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateIndirect_Unit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndirect_Unit[P]>
      : GetScalarType<T[P], AggregateIndirect_Unit[P]>
  }




  export type Indirect_UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Indirect_UnitWhereInput
    orderBy?: Indirect_UnitOrderByWithAggregationInput | Indirect_UnitOrderByWithAggregationInput[]
    by: Indirect_UnitScalarFieldEnum[] | Indirect_UnitScalarFieldEnum
    having?: Indirect_UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Indirect_UnitCountAggregateInputType | true
    _avg?: Indirect_UnitAvgAggregateInputType
    _sum?: Indirect_UnitSumAggregateInputType
    _min?: Indirect_UnitMinAggregateInputType
    _max?: Indirect_UnitMaxAggregateInputType
  }

  export type Indirect_UnitGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: Indirect_UnitCountAggregateOutputType | null
    _avg: Indirect_UnitAvgAggregateOutputType | null
    _sum: Indirect_UnitSumAggregateOutputType | null
    _min: Indirect_UnitMinAggregateOutputType | null
    _max: Indirect_UnitMaxAggregateOutputType | null
  }

  type GetIndirect_UnitGroupByPayload<T extends Indirect_UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Indirect_UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Indirect_UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Indirect_UnitGroupByOutputType[P]>
            : GetScalarType<T[P], Indirect_UnitGroupByOutputType[P]>
        }
      >
    >


  export type Indirect_UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["indirect_Unit"]>

  export type Indirect_UnitSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $Indirect_UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Indirect_Unit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      sort_order: number
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["indirect_Unit"]>
    composites: {}
  }


  type Indirect_UnitGetPayload<S extends boolean | null | undefined | Indirect_UnitDefaultArgs> = $Result.GetResult<Prisma.$Indirect_UnitPayload, S>

  type Indirect_UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Indirect_UnitFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Indirect_UnitCountAggregateInputType | true
    }

  export interface Indirect_UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Indirect_Unit'], meta: { name: 'Indirect_Unit' } }
    /**
     * Find zero or one Indirect_Unit that matches the filter.
     * @param {Indirect_UnitFindUniqueArgs} args - Arguments to find a Indirect_Unit
     * @example
     * // Get one Indirect_Unit
     * const indirect_Unit = await prisma.indirect_Unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Indirect_UnitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Indirect_UnitFindUniqueArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Indirect_Unit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Indirect_UnitFindUniqueOrThrowArgs} args - Arguments to find a Indirect_Unit
     * @example
     * // Get one Indirect_Unit
     * const indirect_Unit = await prisma.indirect_Unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Indirect_UnitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Indirect_UnitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Indirect_Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitFindFirstArgs} args - Arguments to find a Indirect_Unit
     * @example
     * // Get one Indirect_Unit
     * const indirect_Unit = await prisma.indirect_Unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Indirect_UnitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Indirect_UnitFindFirstArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Indirect_Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitFindFirstOrThrowArgs} args - Arguments to find a Indirect_Unit
     * @example
     * // Get one Indirect_Unit
     * const indirect_Unit = await prisma.indirect_Unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Indirect_UnitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Indirect_UnitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Indirect_Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indirect_Units
     * const indirect_Units = await prisma.indirect_Unit.findMany()
     * 
     * // Get first 10 Indirect_Units
     * const indirect_Units = await prisma.indirect_Unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indirect_UnitWithIdOnly = await prisma.indirect_Unit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Indirect_UnitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Indirect_UnitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Indirect_Unit.
     * @param {Indirect_UnitCreateArgs} args - Arguments to create a Indirect_Unit.
     * @example
     * // Create one Indirect_Unit
     * const Indirect_Unit = await prisma.indirect_Unit.create({
     *   data: {
     *     // ... data to create a Indirect_Unit
     *   }
     * })
     * 
    **/
    create<T extends Indirect_UnitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Indirect_UnitCreateArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Indirect_Units.
     *     @param {Indirect_UnitCreateManyArgs} args - Arguments to create many Indirect_Units.
     *     @example
     *     // Create many Indirect_Units
     *     const indirect_Unit = await prisma.indirect_Unit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Indirect_UnitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Indirect_UnitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Indirect_Unit.
     * @param {Indirect_UnitDeleteArgs} args - Arguments to delete one Indirect_Unit.
     * @example
     * // Delete one Indirect_Unit
     * const Indirect_Unit = await prisma.indirect_Unit.delete({
     *   where: {
     *     // ... filter to delete one Indirect_Unit
     *   }
     * })
     * 
    **/
    delete<T extends Indirect_UnitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Indirect_UnitDeleteArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Indirect_Unit.
     * @param {Indirect_UnitUpdateArgs} args - Arguments to update one Indirect_Unit.
     * @example
     * // Update one Indirect_Unit
     * const indirect_Unit = await prisma.indirect_Unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Indirect_UnitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Indirect_UnitUpdateArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Indirect_Units.
     * @param {Indirect_UnitDeleteManyArgs} args - Arguments to filter Indirect_Units to delete.
     * @example
     * // Delete a few Indirect_Units
     * const { count } = await prisma.indirect_Unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Indirect_UnitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Indirect_UnitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indirect_Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indirect_Units
     * const indirect_Unit = await prisma.indirect_Unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Indirect_UnitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Indirect_UnitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Indirect_Unit.
     * @param {Indirect_UnitUpsertArgs} args - Arguments to update or create a Indirect_Unit.
     * @example
     * // Update or create a Indirect_Unit
     * const indirect_Unit = await prisma.indirect_Unit.upsert({
     *   create: {
     *     // ... data to create a Indirect_Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indirect_Unit we want to update
     *   }
     * })
    **/
    upsert<T extends Indirect_UnitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Indirect_UnitUpsertArgs<ExtArgs>>
    ): Prisma__Indirect_UnitClient<$Result.GetResult<Prisma.$Indirect_UnitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Indirect_Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitCountArgs} args - Arguments to filter Indirect_Units to count.
     * @example
     * // Count the number of Indirect_Units
     * const count = await prisma.indirect_Unit.count({
     *   where: {
     *     // ... the filter for the Indirect_Units we want to count
     *   }
     * })
    **/
    count<T extends Indirect_UnitCountArgs>(
      args?: Subset<T, Indirect_UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Indirect_UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indirect_Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Indirect_UnitAggregateArgs>(args: Subset<T, Indirect_UnitAggregateArgs>): Prisma.PrismaPromise<GetIndirect_UnitAggregateType<T>>

    /**
     * Group by Indirect_Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Indirect_UnitGroupByArgs} args - Group by arguments.
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
      T extends Indirect_UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Indirect_UnitGroupByArgs['orderBy'] }
        : { orderBy?: Indirect_UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Indirect_UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndirect_UnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Indirect_Unit model
   */
  readonly fields: Indirect_UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Indirect_Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Indirect_UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Indirect_Unit model
   */ 
  interface Indirect_UnitFieldRefs {
    readonly id: FieldRef<"Indirect_Unit", 'String'>
    readonly tenant_id: FieldRef<"Indirect_Unit", 'String'>
    readonly name: FieldRef<"Indirect_Unit", 'String'>
    readonly sort_order: FieldRef<"Indirect_Unit", 'Int'>
    readonly is_active: FieldRef<"Indirect_Unit", 'Boolean'>
    readonly created_at: FieldRef<"Indirect_Unit", 'DateTime'>
    readonly updated_at: FieldRef<"Indirect_Unit", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Indirect_Unit findUnique
   */
  export type Indirect_UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * Filter, which Indirect_Unit to fetch.
     */
    where: Indirect_UnitWhereUniqueInput
  }


  /**
   * Indirect_Unit findUniqueOrThrow
   */
  export type Indirect_UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * Filter, which Indirect_Unit to fetch.
     */
    where: Indirect_UnitWhereUniqueInput
  }


  /**
   * Indirect_Unit findFirst
   */
  export type Indirect_UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * Filter, which Indirect_Unit to fetch.
     */
    where?: Indirect_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indirect_Units to fetch.
     */
    orderBy?: Indirect_UnitOrderByWithRelationInput | Indirect_UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indirect_Units.
     */
    cursor?: Indirect_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indirect_Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indirect_Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indirect_Units.
     */
    distinct?: Indirect_UnitScalarFieldEnum | Indirect_UnitScalarFieldEnum[]
  }


  /**
   * Indirect_Unit findFirstOrThrow
   */
  export type Indirect_UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * Filter, which Indirect_Unit to fetch.
     */
    where?: Indirect_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indirect_Units to fetch.
     */
    orderBy?: Indirect_UnitOrderByWithRelationInput | Indirect_UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indirect_Units.
     */
    cursor?: Indirect_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indirect_Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indirect_Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indirect_Units.
     */
    distinct?: Indirect_UnitScalarFieldEnum | Indirect_UnitScalarFieldEnum[]
  }


  /**
   * Indirect_Unit findMany
   */
  export type Indirect_UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * Filter, which Indirect_Units to fetch.
     */
    where?: Indirect_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indirect_Units to fetch.
     */
    orderBy?: Indirect_UnitOrderByWithRelationInput | Indirect_UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indirect_Units.
     */
    cursor?: Indirect_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indirect_Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indirect_Units.
     */
    skip?: number
    distinct?: Indirect_UnitScalarFieldEnum | Indirect_UnitScalarFieldEnum[]
  }


  /**
   * Indirect_Unit create
   */
  export type Indirect_UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * The data needed to create a Indirect_Unit.
     */
    data: XOR<Indirect_UnitCreateInput, Indirect_UnitUncheckedCreateInput>
  }


  /**
   * Indirect_Unit createMany
   */
  export type Indirect_UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Indirect_Units.
     */
    data: Indirect_UnitCreateManyInput | Indirect_UnitCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Indirect_Unit update
   */
  export type Indirect_UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * The data needed to update a Indirect_Unit.
     */
    data: XOR<Indirect_UnitUpdateInput, Indirect_UnitUncheckedUpdateInput>
    /**
     * Choose, which Indirect_Unit to update.
     */
    where: Indirect_UnitWhereUniqueInput
  }


  /**
   * Indirect_Unit updateMany
   */
  export type Indirect_UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Indirect_Units.
     */
    data: XOR<Indirect_UnitUpdateManyMutationInput, Indirect_UnitUncheckedUpdateManyInput>
    /**
     * Filter which Indirect_Units to update
     */
    where?: Indirect_UnitWhereInput
  }


  /**
   * Indirect_Unit upsert
   */
  export type Indirect_UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * The filter to search for the Indirect_Unit to update in case it exists.
     */
    where: Indirect_UnitWhereUniqueInput
    /**
     * In case the Indirect_Unit found by the `where` argument doesn't exist, create a new Indirect_Unit with this data.
     */
    create: XOR<Indirect_UnitCreateInput, Indirect_UnitUncheckedCreateInput>
    /**
     * In case the Indirect_Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Indirect_UnitUpdateInput, Indirect_UnitUncheckedUpdateInput>
  }


  /**
   * Indirect_Unit delete
   */
  export type Indirect_UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
    /**
     * Filter which Indirect_Unit to delete.
     */
    where: Indirect_UnitWhereUniqueInput
  }


  /**
   * Indirect_Unit deleteMany
   */
  export type Indirect_UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indirect_Units to delete
     */
    where?: Indirect_UnitWhereInput
  }


  /**
   * Indirect_Unit without action
   */
  export type Indirect_UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indirect_Unit
     */
    select?: Indirect_UnitSelect<ExtArgs> | null
  }



  /**
   * Model App_Testing_Period
   */

  export type AggregateApp_Testing_Period = {
    _count: App_Testing_PeriodCountAggregateOutputType | null
    _avg: App_Testing_PeriodAvgAggregateOutputType | null
    _sum: App_Testing_PeriodSumAggregateOutputType | null
    _min: App_Testing_PeriodMinAggregateOutputType | null
    _max: App_Testing_PeriodMaxAggregateOutputType | null
  }

  export type App_Testing_PeriodAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type App_Testing_PeriodSumAggregateOutputType = {
    sort_order: number | null
  }

  export type App_Testing_PeriodMinAggregateOutputType = {
    code: string | null
    tenant_id: string | null
    name: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type App_Testing_PeriodMaxAggregateOutputType = {
    code: string | null
    tenant_id: string | null
    name: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type App_Testing_PeriodCountAggregateOutputType = {
    code: number
    tenant_id: number
    name: number
    sort_order: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type App_Testing_PeriodAvgAggregateInputType = {
    sort_order?: true
  }

  export type App_Testing_PeriodSumAggregateInputType = {
    sort_order?: true
  }

  export type App_Testing_PeriodMinAggregateInputType = {
    code?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type App_Testing_PeriodMaxAggregateInputType = {
    code?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type App_Testing_PeriodCountAggregateInputType = {
    code?: true
    tenant_id?: true
    name?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type App_Testing_PeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which App_Testing_Period to aggregate.
     */
    where?: App_Testing_PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of App_Testing_Periods to fetch.
     */
    orderBy?: App_Testing_PeriodOrderByWithRelationInput | App_Testing_PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: App_Testing_PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` App_Testing_Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` App_Testing_Periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned App_Testing_Periods
    **/
    _count?: true | App_Testing_PeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: App_Testing_PeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: App_Testing_PeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: App_Testing_PeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: App_Testing_PeriodMaxAggregateInputType
  }

  export type GetApp_Testing_PeriodAggregateType<T extends App_Testing_PeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateApp_Testing_Period]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp_Testing_Period[P]>
      : GetScalarType<T[P], AggregateApp_Testing_Period[P]>
  }




  export type App_Testing_PeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: App_Testing_PeriodWhereInput
    orderBy?: App_Testing_PeriodOrderByWithAggregationInput | App_Testing_PeriodOrderByWithAggregationInput[]
    by: App_Testing_PeriodScalarFieldEnum[] | App_Testing_PeriodScalarFieldEnum
    having?: App_Testing_PeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: App_Testing_PeriodCountAggregateInputType | true
    _avg?: App_Testing_PeriodAvgAggregateInputType
    _sum?: App_Testing_PeriodSumAggregateInputType
    _min?: App_Testing_PeriodMinAggregateInputType
    _max?: App_Testing_PeriodMaxAggregateInputType
  }

  export type App_Testing_PeriodGroupByOutputType = {
    code: string
    tenant_id: string
    name: string
    sort_order: number
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: App_Testing_PeriodCountAggregateOutputType | null
    _avg: App_Testing_PeriodAvgAggregateOutputType | null
    _sum: App_Testing_PeriodSumAggregateOutputType | null
    _min: App_Testing_PeriodMinAggregateOutputType | null
    _max: App_Testing_PeriodMaxAggregateOutputType | null
  }

  type GetApp_Testing_PeriodGroupByPayload<T extends App_Testing_PeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<App_Testing_PeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof App_Testing_PeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], App_Testing_PeriodGroupByOutputType[P]>
            : GetScalarType<T[P], App_Testing_PeriodGroupByOutputType[P]>
        }
      >
    >


  export type App_Testing_PeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    tenant_id?: boolean
    name?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["app_Testing_Period"]>

  export type App_Testing_PeriodSelectScalar = {
    code?: boolean
    tenant_id?: boolean
    name?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $App_Testing_PeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "App_Testing_Period"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      code: string
      tenant_id: string
      name: string
      sort_order: number
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["app_Testing_Period"]>
    composites: {}
  }


  type App_Testing_PeriodGetPayload<S extends boolean | null | undefined | App_Testing_PeriodDefaultArgs> = $Result.GetResult<Prisma.$App_Testing_PeriodPayload, S>

  type App_Testing_PeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<App_Testing_PeriodFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: App_Testing_PeriodCountAggregateInputType | true
    }

  export interface App_Testing_PeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['App_Testing_Period'], meta: { name: 'App_Testing_Period' } }
    /**
     * Find zero or one App_Testing_Period that matches the filter.
     * @param {App_Testing_PeriodFindUniqueArgs} args - Arguments to find a App_Testing_Period
     * @example
     * // Get one App_Testing_Period
     * const app_Testing_Period = await prisma.app_Testing_Period.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends App_Testing_PeriodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, App_Testing_PeriodFindUniqueArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one App_Testing_Period that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {App_Testing_PeriodFindUniqueOrThrowArgs} args - Arguments to find a App_Testing_Period
     * @example
     * // Get one App_Testing_Period
     * const app_Testing_Period = await prisma.app_Testing_Period.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends App_Testing_PeriodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, App_Testing_PeriodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first App_Testing_Period that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodFindFirstArgs} args - Arguments to find a App_Testing_Period
     * @example
     * // Get one App_Testing_Period
     * const app_Testing_Period = await prisma.app_Testing_Period.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends App_Testing_PeriodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, App_Testing_PeriodFindFirstArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first App_Testing_Period that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodFindFirstOrThrowArgs} args - Arguments to find a App_Testing_Period
     * @example
     * // Get one App_Testing_Period
     * const app_Testing_Period = await prisma.app_Testing_Period.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends App_Testing_PeriodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, App_Testing_PeriodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more App_Testing_Periods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all App_Testing_Periods
     * const app_Testing_Periods = await prisma.app_Testing_Period.findMany()
     * 
     * // Get first 10 App_Testing_Periods
     * const app_Testing_Periods = await prisma.app_Testing_Period.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const app_Testing_PeriodWithCodeOnly = await prisma.app_Testing_Period.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends App_Testing_PeriodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, App_Testing_PeriodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a App_Testing_Period.
     * @param {App_Testing_PeriodCreateArgs} args - Arguments to create a App_Testing_Period.
     * @example
     * // Create one App_Testing_Period
     * const App_Testing_Period = await prisma.app_Testing_Period.create({
     *   data: {
     *     // ... data to create a App_Testing_Period
     *   }
     * })
     * 
    **/
    create<T extends App_Testing_PeriodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, App_Testing_PeriodCreateArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many App_Testing_Periods.
     *     @param {App_Testing_PeriodCreateManyArgs} args - Arguments to create many App_Testing_Periods.
     *     @example
     *     // Create many App_Testing_Periods
     *     const app_Testing_Period = await prisma.app_Testing_Period.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends App_Testing_PeriodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, App_Testing_PeriodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a App_Testing_Period.
     * @param {App_Testing_PeriodDeleteArgs} args - Arguments to delete one App_Testing_Period.
     * @example
     * // Delete one App_Testing_Period
     * const App_Testing_Period = await prisma.app_Testing_Period.delete({
     *   where: {
     *     // ... filter to delete one App_Testing_Period
     *   }
     * })
     * 
    **/
    delete<T extends App_Testing_PeriodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, App_Testing_PeriodDeleteArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one App_Testing_Period.
     * @param {App_Testing_PeriodUpdateArgs} args - Arguments to update one App_Testing_Period.
     * @example
     * // Update one App_Testing_Period
     * const app_Testing_Period = await prisma.app_Testing_Period.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends App_Testing_PeriodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, App_Testing_PeriodUpdateArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more App_Testing_Periods.
     * @param {App_Testing_PeriodDeleteManyArgs} args - Arguments to filter App_Testing_Periods to delete.
     * @example
     * // Delete a few App_Testing_Periods
     * const { count } = await prisma.app_Testing_Period.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends App_Testing_PeriodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, App_Testing_PeriodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_Testing_Periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many App_Testing_Periods
     * const app_Testing_Period = await prisma.app_Testing_Period.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends App_Testing_PeriodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, App_Testing_PeriodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one App_Testing_Period.
     * @param {App_Testing_PeriodUpsertArgs} args - Arguments to update or create a App_Testing_Period.
     * @example
     * // Update or create a App_Testing_Period
     * const app_Testing_Period = await prisma.app_Testing_Period.upsert({
     *   create: {
     *     // ... data to create a App_Testing_Period
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App_Testing_Period we want to update
     *   }
     * })
    **/
    upsert<T extends App_Testing_PeriodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, App_Testing_PeriodUpsertArgs<ExtArgs>>
    ): Prisma__App_Testing_PeriodClient<$Result.GetResult<Prisma.$App_Testing_PeriodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of App_Testing_Periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodCountArgs} args - Arguments to filter App_Testing_Periods to count.
     * @example
     * // Count the number of App_Testing_Periods
     * const count = await prisma.app_Testing_Period.count({
     *   where: {
     *     // ... the filter for the App_Testing_Periods we want to count
     *   }
     * })
    **/
    count<T extends App_Testing_PeriodCountArgs>(
      args?: Subset<T, App_Testing_PeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], App_Testing_PeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App_Testing_Period.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends App_Testing_PeriodAggregateArgs>(args: Subset<T, App_Testing_PeriodAggregateArgs>): Prisma.PrismaPromise<GetApp_Testing_PeriodAggregateType<T>>

    /**
     * Group by App_Testing_Period.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_Testing_PeriodGroupByArgs} args - Group by arguments.
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
      T extends App_Testing_PeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: App_Testing_PeriodGroupByArgs['orderBy'] }
        : { orderBy?: App_Testing_PeriodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, App_Testing_PeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_Testing_PeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the App_Testing_Period model
   */
  readonly fields: App_Testing_PeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for App_Testing_Period.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__App_Testing_PeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the App_Testing_Period model
   */ 
  interface App_Testing_PeriodFieldRefs {
    readonly code: FieldRef<"App_Testing_Period", 'String'>
    readonly tenant_id: FieldRef<"App_Testing_Period", 'String'>
    readonly name: FieldRef<"App_Testing_Period", 'String'>
    readonly sort_order: FieldRef<"App_Testing_Period", 'Int'>
    readonly is_active: FieldRef<"App_Testing_Period", 'Boolean'>
    readonly created_at: FieldRef<"App_Testing_Period", 'DateTime'>
    readonly updated_at: FieldRef<"App_Testing_Period", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * App_Testing_Period findUnique
   */
  export type App_Testing_PeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * Filter, which App_Testing_Period to fetch.
     */
    where: App_Testing_PeriodWhereUniqueInput
  }


  /**
   * App_Testing_Period findUniqueOrThrow
   */
  export type App_Testing_PeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * Filter, which App_Testing_Period to fetch.
     */
    where: App_Testing_PeriodWhereUniqueInput
  }


  /**
   * App_Testing_Period findFirst
   */
  export type App_Testing_PeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * Filter, which App_Testing_Period to fetch.
     */
    where?: App_Testing_PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of App_Testing_Periods to fetch.
     */
    orderBy?: App_Testing_PeriodOrderByWithRelationInput | App_Testing_PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for App_Testing_Periods.
     */
    cursor?: App_Testing_PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` App_Testing_Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` App_Testing_Periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of App_Testing_Periods.
     */
    distinct?: App_Testing_PeriodScalarFieldEnum | App_Testing_PeriodScalarFieldEnum[]
  }


  /**
   * App_Testing_Period findFirstOrThrow
   */
  export type App_Testing_PeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * Filter, which App_Testing_Period to fetch.
     */
    where?: App_Testing_PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of App_Testing_Periods to fetch.
     */
    orderBy?: App_Testing_PeriodOrderByWithRelationInput | App_Testing_PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for App_Testing_Periods.
     */
    cursor?: App_Testing_PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` App_Testing_Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` App_Testing_Periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of App_Testing_Periods.
     */
    distinct?: App_Testing_PeriodScalarFieldEnum | App_Testing_PeriodScalarFieldEnum[]
  }


  /**
   * App_Testing_Period findMany
   */
  export type App_Testing_PeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * Filter, which App_Testing_Periods to fetch.
     */
    where?: App_Testing_PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of App_Testing_Periods to fetch.
     */
    orderBy?: App_Testing_PeriodOrderByWithRelationInput | App_Testing_PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing App_Testing_Periods.
     */
    cursor?: App_Testing_PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` App_Testing_Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` App_Testing_Periods.
     */
    skip?: number
    distinct?: App_Testing_PeriodScalarFieldEnum | App_Testing_PeriodScalarFieldEnum[]
  }


  /**
   * App_Testing_Period create
   */
  export type App_Testing_PeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * The data needed to create a App_Testing_Period.
     */
    data: XOR<App_Testing_PeriodCreateInput, App_Testing_PeriodUncheckedCreateInput>
  }


  /**
   * App_Testing_Period createMany
   */
  export type App_Testing_PeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many App_Testing_Periods.
     */
    data: App_Testing_PeriodCreateManyInput | App_Testing_PeriodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * App_Testing_Period update
   */
  export type App_Testing_PeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * The data needed to update a App_Testing_Period.
     */
    data: XOR<App_Testing_PeriodUpdateInput, App_Testing_PeriodUncheckedUpdateInput>
    /**
     * Choose, which App_Testing_Period to update.
     */
    where: App_Testing_PeriodWhereUniqueInput
  }


  /**
   * App_Testing_Period updateMany
   */
  export type App_Testing_PeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update App_Testing_Periods.
     */
    data: XOR<App_Testing_PeriodUpdateManyMutationInput, App_Testing_PeriodUncheckedUpdateManyInput>
    /**
     * Filter which App_Testing_Periods to update
     */
    where?: App_Testing_PeriodWhereInput
  }


  /**
   * App_Testing_Period upsert
   */
  export type App_Testing_PeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * The filter to search for the App_Testing_Period to update in case it exists.
     */
    where: App_Testing_PeriodWhereUniqueInput
    /**
     * In case the App_Testing_Period found by the `where` argument doesn't exist, create a new App_Testing_Period with this data.
     */
    create: XOR<App_Testing_PeriodCreateInput, App_Testing_PeriodUncheckedCreateInput>
    /**
     * In case the App_Testing_Period was found with the provided `where` argument, update it with this data.
     */
    update: XOR<App_Testing_PeriodUpdateInput, App_Testing_PeriodUncheckedUpdateInput>
  }


  /**
   * App_Testing_Period delete
   */
  export type App_Testing_PeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
    /**
     * Filter which App_Testing_Period to delete.
     */
    where: App_Testing_PeriodWhereUniqueInput
  }


  /**
   * App_Testing_Period deleteMany
   */
  export type App_Testing_PeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which App_Testing_Periods to delete
     */
    where?: App_Testing_PeriodWhereInput
  }


  /**
   * App_Testing_Period without action
   */
  export type App_Testing_PeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_Testing_Period
     */
    select?: App_Testing_PeriodSelect<ExtArgs> | null
  }



  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type CurrencySumAggregateOutputType = {
    sort_order: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    code: string | null
    tenant_id: string | null
    name: string | null
    description: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurrencyMaxAggregateOutputType = {
    code: string | null
    tenant_id: string | null
    name: string | null
    description: string | null
    sort_order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurrencyCountAggregateOutputType = {
    code: number
    tenant_id: number
    name: number
    description: number
    sort_order: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    sort_order?: true
  }

  export type CurrencySumAggregateInputType = {
    sort_order?: true
  }

  export type CurrencyMinAggregateInputType = {
    code?: true
    tenant_id?: true
    name?: true
    description?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CurrencyMaxAggregateInputType = {
    code?: true
    tenant_id?: true
    name?: true
    description?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CurrencyCountAggregateInputType = {
    code?: true
    tenant_id?: true
    name?: true
    description?: true
    sort_order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    code: string
    tenant_id: string
    name: string
    description: string
    sort_order: number
    is_active: boolean
    created_at: Date
    updated_at: Date | null
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    tenant_id?: boolean
    name?: boolean
    description?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    code?: boolean
    tenant_id?: boolean
    name?: boolean
    description?: boolean
    sort_order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      code: string
      tenant_id: string
      name: string
      description: string
      sort_order: number
      is_active: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }


  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CurrencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Currency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CurrencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const currencyWithCodeOnly = await prisma.currency.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends CurrencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
    **/
    create<T extends CurrencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Currencies.
     *     @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     *     @example
     *     // Create many Currencies
     *     const currency = await prisma.currency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CurrencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
    **/
    delete<T extends CurrencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CurrencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CurrencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CurrencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
    **/
    upsert<T extends CurrencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
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
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Currency model
   */ 
  interface CurrencyFieldRefs {
    readonly code: FieldRef<"Currency", 'String'>
    readonly tenant_id: FieldRef<"Currency", 'String'>
    readonly name: FieldRef<"Currency", 'String'>
    readonly description: FieldRef<"Currency", 'String'>
    readonly sort_order: FieldRef<"Currency", 'Int'>
    readonly is_active: FieldRef<"Currency", 'Boolean'>
    readonly created_at: FieldRef<"Currency", 'DateTime'>
    readonly updated_at: FieldRef<"Currency", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }


  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }


  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
  }



  /**
   * Model vw_threat_types
   */

  export type AggregateVw_threat_types = {
    _count: Vw_threat_typesCountAggregateOutputType | null
    _avg: Vw_threat_typesAvgAggregateOutputType | null
    _sum: Vw_threat_typesSumAggregateOutputType | null
    _min: Vw_threat_typesMinAggregateOutputType | null
    _max: Vw_threat_typesMaxAggregateOutputType | null
  }

  export type Vw_threat_typesAvgAggregateOutputType = {
    delete_enable: number | null
  }

  export type Vw_threat_typesSumAggregateOutputType = {
    delete_enable: number | null
  }

  export type Vw_threat_typesMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    delete_enable: number | null
  }

  export type Vw_threat_typesMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    delete_enable: number | null
  }

  export type Vw_threat_typesCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    delete_enable: number
    _all: number
  }


  export type Vw_threat_typesAvgAggregateInputType = {
    delete_enable?: true
  }

  export type Vw_threat_typesSumAggregateInputType = {
    delete_enable?: true
  }

  export type Vw_threat_typesMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    delete_enable?: true
  }

  export type Vw_threat_typesMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    delete_enable?: true
  }

  export type Vw_threat_typesCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    delete_enable?: true
    _all?: true
  }

  export type Vw_threat_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vw_threat_types to aggregate.
     */
    where?: vw_threat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_threat_types to fetch.
     */
    orderBy?: vw_threat_typesOrderByWithRelationInput | vw_threat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vw_threat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_threat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vw_threat_types
    **/
    _count?: true | Vw_threat_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vw_threat_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vw_threat_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vw_threat_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vw_threat_typesMaxAggregateInputType
  }

  export type GetVw_threat_typesAggregateType<T extends Vw_threat_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateVw_threat_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVw_threat_types[P]>
      : GetScalarType<T[P], AggregateVw_threat_types[P]>
  }




  export type vw_threat_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vw_threat_typesWhereInput
    orderBy?: vw_threat_typesOrderByWithAggregationInput | vw_threat_typesOrderByWithAggregationInput[]
    by: Vw_threat_typesScalarFieldEnum[] | Vw_threat_typesScalarFieldEnum
    having?: vw_threat_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vw_threat_typesCountAggregateInputType | true
    _avg?: Vw_threat_typesAvgAggregateInputType
    _sum?: Vw_threat_typesSumAggregateInputType
    _min?: Vw_threat_typesMinAggregateInputType
    _max?: Vw_threat_typesMaxAggregateInputType
  }

  export type Vw_threat_typesGroupByOutputType = {
    id: string
    tenant_id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    delete_enable: number
    _count: Vw_threat_typesCountAggregateOutputType | null
    _avg: Vw_threat_typesAvgAggregateOutputType | null
    _sum: Vw_threat_typesSumAggregateOutputType | null
    _min: Vw_threat_typesMinAggregateOutputType | null
    _max: Vw_threat_typesMaxAggregateOutputType | null
  }

  type GetVw_threat_typesGroupByPayload<T extends vw_threat_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vw_threat_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vw_threat_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vw_threat_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Vw_threat_typesGroupByOutputType[P]>
        }
      >
    >


  export type vw_threat_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    delete_enable?: boolean
  }, ExtArgs["result"]["vw_threat_types"]>

  export type vw_threat_typesSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    delete_enable?: boolean
  }


  export type $vw_threat_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vw_threat_types"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string | null
      name: string | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
      delete_enable: number
    }, ExtArgs["result"]["vw_threat_types"]>
    composites: {}
  }


  type vw_threat_typesGetPayload<S extends boolean | null | undefined | vw_threat_typesDefaultArgs> = $Result.GetResult<Prisma.$vw_threat_typesPayload, S>

  type vw_threat_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<vw_threat_typesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Vw_threat_typesCountAggregateInputType | true
    }

  export interface vw_threat_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vw_threat_types'], meta: { name: 'vw_threat_types' } }
    /**
     * Find zero or one Vw_threat_types that matches the filter.
     * @param {vw_threat_typesFindUniqueArgs} args - Arguments to find a Vw_threat_types
     * @example
     * // Get one Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends vw_threat_typesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vw_threat_typesFindUniqueArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vw_threat_types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {vw_threat_typesFindUniqueOrThrowArgs} args - Arguments to find a Vw_threat_types
     * @example
     * // Get one Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends vw_threat_typesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vw_threat_typesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vw_threat_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_threat_typesFindFirstArgs} args - Arguments to find a Vw_threat_types
     * @example
     * // Get one Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends vw_threat_typesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vw_threat_typesFindFirstArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vw_threat_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_threat_typesFindFirstOrThrowArgs} args - Arguments to find a Vw_threat_types
     * @example
     * // Get one Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends vw_threat_typesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vw_threat_typesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vw_threat_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_threat_typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.findMany()
     * 
     * // Get first 10 Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vw_threat_typesWithIdOnly = await prisma.vw_threat_types.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends vw_threat_typesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vw_threat_typesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vw_threat_types.
     * @param {vw_threat_typesCreateArgs} args - Arguments to create a Vw_threat_types.
     * @example
     * // Create one Vw_threat_types
     * const Vw_threat_types = await prisma.vw_threat_types.create({
     *   data: {
     *     // ... data to create a Vw_threat_types
     *   }
     * })
     * 
    **/
    create<T extends vw_threat_typesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vw_threat_typesCreateArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vw_threat_types.
     *     @param {vw_threat_typesCreateManyArgs} args - Arguments to create many Vw_threat_types.
     *     @example
     *     // Create many Vw_threat_types
     *     const vw_threat_types = await prisma.vw_threat_types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends vw_threat_typesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vw_threat_typesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vw_threat_types.
     * @param {vw_threat_typesDeleteArgs} args - Arguments to delete one Vw_threat_types.
     * @example
     * // Delete one Vw_threat_types
     * const Vw_threat_types = await prisma.vw_threat_types.delete({
     *   where: {
     *     // ... filter to delete one Vw_threat_types
     *   }
     * })
     * 
    **/
    delete<T extends vw_threat_typesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vw_threat_typesDeleteArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vw_threat_types.
     * @param {vw_threat_typesUpdateArgs} args - Arguments to update one Vw_threat_types.
     * @example
     * // Update one Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends vw_threat_typesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vw_threat_typesUpdateArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vw_threat_types.
     * @param {vw_threat_typesDeleteManyArgs} args - Arguments to filter Vw_threat_types to delete.
     * @example
     * // Delete a few Vw_threat_types
     * const { count } = await prisma.vw_threat_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends vw_threat_typesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vw_threat_typesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vw_threat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_threat_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends vw_threat_typesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vw_threat_typesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vw_threat_types.
     * @param {vw_threat_typesUpsertArgs} args - Arguments to update or create a Vw_threat_types.
     * @example
     * // Update or create a Vw_threat_types
     * const vw_threat_types = await prisma.vw_threat_types.upsert({
     *   create: {
     *     // ... data to create a Vw_threat_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vw_threat_types we want to update
     *   }
     * })
    **/
    upsert<T extends vw_threat_typesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vw_threat_typesUpsertArgs<ExtArgs>>
    ): Prisma__vw_threat_typesClient<$Result.GetResult<Prisma.$vw_threat_typesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vw_threat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_threat_typesCountArgs} args - Arguments to filter Vw_threat_types to count.
     * @example
     * // Count the number of Vw_threat_types
     * const count = await prisma.vw_threat_types.count({
     *   where: {
     *     // ... the filter for the Vw_threat_types we want to count
     *   }
     * })
    **/
    count<T extends vw_threat_typesCountArgs>(
      args?: Subset<T, vw_threat_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vw_threat_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vw_threat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vw_threat_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vw_threat_typesAggregateArgs>(args: Subset<T, Vw_threat_typesAggregateArgs>): Prisma.PrismaPromise<GetVw_threat_typesAggregateType<T>>

    /**
     * Group by Vw_threat_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vw_threat_typesGroupByArgs} args - Group by arguments.
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
      T extends vw_threat_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vw_threat_typesGroupByArgs['orderBy'] }
        : { orderBy?: vw_threat_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vw_threat_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVw_threat_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vw_threat_types model
   */
  readonly fields: vw_threat_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vw_threat_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vw_threat_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the vw_threat_types model
   */ 
  interface vw_threat_typesFieldRefs {
    readonly id: FieldRef<"vw_threat_types", 'String'>
    readonly tenant_id: FieldRef<"vw_threat_types", 'String'>
    readonly name: FieldRef<"vw_threat_types", 'String'>
    readonly is_active: FieldRef<"vw_threat_types", 'Boolean'>
    readonly created_at: FieldRef<"vw_threat_types", 'DateTime'>
    readonly updated_at: FieldRef<"vw_threat_types", 'DateTime'>
    readonly delete_enable: FieldRef<"vw_threat_types", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * vw_threat_types findUnique
   */
  export type vw_threat_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * Filter, which vw_threat_types to fetch.
     */
    where: vw_threat_typesWhereUniqueInput
  }


  /**
   * vw_threat_types findUniqueOrThrow
   */
  export type vw_threat_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * Filter, which vw_threat_types to fetch.
     */
    where: vw_threat_typesWhereUniqueInput
  }


  /**
   * vw_threat_types findFirst
   */
  export type vw_threat_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * Filter, which vw_threat_types to fetch.
     */
    where?: vw_threat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_threat_types to fetch.
     */
    orderBy?: vw_threat_typesOrderByWithRelationInput | vw_threat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vw_threat_types.
     */
    cursor?: vw_threat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_threat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vw_threat_types.
     */
    distinct?: Vw_threat_typesScalarFieldEnum | Vw_threat_typesScalarFieldEnum[]
  }


  /**
   * vw_threat_types findFirstOrThrow
   */
  export type vw_threat_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * Filter, which vw_threat_types to fetch.
     */
    where?: vw_threat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_threat_types to fetch.
     */
    orderBy?: vw_threat_typesOrderByWithRelationInput | vw_threat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vw_threat_types.
     */
    cursor?: vw_threat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_threat_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vw_threat_types.
     */
    distinct?: Vw_threat_typesScalarFieldEnum | Vw_threat_typesScalarFieldEnum[]
  }


  /**
   * vw_threat_types findMany
   */
  export type vw_threat_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * Filter, which vw_threat_types to fetch.
     */
    where?: vw_threat_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vw_threat_types to fetch.
     */
    orderBy?: vw_threat_typesOrderByWithRelationInput | vw_threat_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vw_threat_types.
     */
    cursor?: vw_threat_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vw_threat_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vw_threat_types.
     */
    skip?: number
    distinct?: Vw_threat_typesScalarFieldEnum | Vw_threat_typesScalarFieldEnum[]
  }


  /**
   * vw_threat_types create
   */
  export type vw_threat_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * The data needed to create a vw_threat_types.
     */
    data: XOR<vw_threat_typesCreateInput, vw_threat_typesUncheckedCreateInput>
  }


  /**
   * vw_threat_types createMany
   */
  export type vw_threat_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vw_threat_types.
     */
    data: vw_threat_typesCreateManyInput | vw_threat_typesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * vw_threat_types update
   */
  export type vw_threat_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * The data needed to update a vw_threat_types.
     */
    data: XOR<vw_threat_typesUpdateInput, vw_threat_typesUncheckedUpdateInput>
    /**
     * Choose, which vw_threat_types to update.
     */
    where: vw_threat_typesWhereUniqueInput
  }


  /**
   * vw_threat_types updateMany
   */
  export type vw_threat_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vw_threat_types.
     */
    data: XOR<vw_threat_typesUpdateManyMutationInput, vw_threat_typesUncheckedUpdateManyInput>
    /**
     * Filter which vw_threat_types to update
     */
    where?: vw_threat_typesWhereInput
  }


  /**
   * vw_threat_types upsert
   */
  export type vw_threat_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * The filter to search for the vw_threat_types to update in case it exists.
     */
    where: vw_threat_typesWhereUniqueInput
    /**
     * In case the vw_threat_types found by the `where` argument doesn't exist, create a new vw_threat_types with this data.
     */
    create: XOR<vw_threat_typesCreateInput, vw_threat_typesUncheckedCreateInput>
    /**
     * In case the vw_threat_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vw_threat_typesUpdateInput, vw_threat_typesUncheckedUpdateInput>
  }


  /**
   * vw_threat_types delete
   */
  export type vw_threat_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
    /**
     * Filter which vw_threat_types to delete.
     */
    where: vw_threat_typesWhereUniqueInput
  }


  /**
   * vw_threat_types deleteMany
   */
  export type vw_threat_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vw_threat_types to delete
     */
    where?: vw_threat_typesWhereInput
  }


  /**
   * vw_threat_types without action
   */
  export type vw_threat_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vw_threat_types
     */
    select?: vw_threat_typesSelect<ExtArgs> | null
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


  export const Threat_typeScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Threat_typeScalarFieldEnum = (typeof Threat_typeScalarFieldEnum)[keyof typeof Threat_typeScalarFieldEnum]


  export const ThreatScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    type_id: 'type_id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ThreatScalarFieldEnum = (typeof ThreatScalarFieldEnum)[keyof typeof ThreatScalarFieldEnum]


  export const ApplicationsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    code: 'code',
    name: 'name',
    severity: 'severity',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const Staff_ConditionScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Staff_ConditionScalarFieldEnum = (typeof Staff_ConditionScalarFieldEnum)[keyof typeof Staff_ConditionScalarFieldEnum]


  export const Indirect_UnitScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Indirect_UnitScalarFieldEnum = (typeof Indirect_UnitScalarFieldEnum)[keyof typeof Indirect_UnitScalarFieldEnum]


  export const App_Testing_PeriodScalarFieldEnum: {
    code: 'code',
    tenant_id: 'tenant_id',
    name: 'name',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type App_Testing_PeriodScalarFieldEnum = (typeof App_Testing_PeriodScalarFieldEnum)[keyof typeof App_Testing_PeriodScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    code: 'code',
    tenant_id: 'tenant_id',
    name: 'name',
    description: 'description',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const Vw_threat_typesScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    delete_enable: 'delete_enable'
  };

  export type Vw_threat_typesScalarFieldEnum = (typeof Vw_threat_typesScalarFieldEnum)[keyof typeof Vw_threat_typesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type threat_typeWhereInput = {
    AND?: threat_typeWhereInput | threat_typeWhereInput[]
    OR?: threat_typeWhereInput[]
    NOT?: threat_typeWhereInput | threat_typeWhereInput[]
    id?: StringFilter<"threat_type"> | string
    tenant_id?: StringFilter<"threat_type"> | string
    name?: StringFilter<"threat_type"> | string
    is_active?: BoolFilter<"threat_type"> | boolean
    created_at?: DateTimeFilter<"threat_type"> | Date | string
    updated_at?: DateTimeNullableFilter<"threat_type"> | Date | string | null
    threats?: ThreatListRelationFilter
  }

  export type threat_typeOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    threats?: threatOrderByRelationAggregateInput
  }

  export type threat_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_name?: threat_typeTenant_idNameCompoundUniqueInput
    AND?: threat_typeWhereInput | threat_typeWhereInput[]
    OR?: threat_typeWhereInput[]
    NOT?: threat_typeWhereInput | threat_typeWhereInput[]
    tenant_id?: StringFilter<"threat_type"> | string
    name?: StringFilter<"threat_type"> | string
    is_active?: BoolFilter<"threat_type"> | boolean
    created_at?: DateTimeFilter<"threat_type"> | Date | string
    updated_at?: DateTimeNullableFilter<"threat_type"> | Date | string | null
    threats?: ThreatListRelationFilter
  }, "id" | "tenant_id_name">

  export type threat_typeOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: threat_typeCountOrderByAggregateInput
    _max?: threat_typeMaxOrderByAggregateInput
    _min?: threat_typeMinOrderByAggregateInput
  }

  export type threat_typeScalarWhereWithAggregatesInput = {
    AND?: threat_typeScalarWhereWithAggregatesInput | threat_typeScalarWhereWithAggregatesInput[]
    OR?: threat_typeScalarWhereWithAggregatesInput[]
    NOT?: threat_typeScalarWhereWithAggregatesInput | threat_typeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"threat_type"> | string
    tenant_id?: StringWithAggregatesFilter<"threat_type"> | string
    name?: StringWithAggregatesFilter<"threat_type"> | string
    is_active?: BoolWithAggregatesFilter<"threat_type"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"threat_type"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"threat_type"> | Date | string | null
  }

  export type threatWhereInput = {
    AND?: threatWhereInput | threatWhereInput[]
    OR?: threatWhereInput[]
    NOT?: threatWhereInput | threatWhereInput[]
    id?: StringFilter<"threat"> | string
    tenant_id?: StringFilter<"threat"> | string
    type_id?: StringFilter<"threat"> | string
    name?: StringFilter<"threat"> | string
    is_active?: BoolFilter<"threat"> | boolean
    created_at?: DateTimeFilter<"threat"> | Date | string
    updated_at?: DateTimeNullableFilter<"threat"> | Date | string | null
    threat_types?: XOR<Threat_typeRelationFilter, threat_typeWhereInput>
  }

  export type threatOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    threat_types?: threat_typeOrderByWithRelationInput
  }

  export type threatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type_id_name_tenant_id?: threatType_idNameTenant_idCompoundUniqueInput
    AND?: threatWhereInput | threatWhereInput[]
    OR?: threatWhereInput[]
    NOT?: threatWhereInput | threatWhereInput[]
    tenant_id?: StringFilter<"threat"> | string
    type_id?: StringFilter<"threat"> | string
    name?: StringFilter<"threat"> | string
    is_active?: BoolFilter<"threat"> | boolean
    created_at?: DateTimeFilter<"threat"> | Date | string
    updated_at?: DateTimeNullableFilter<"threat"> | Date | string | null
    threat_types?: XOR<Threat_typeRelationFilter, threat_typeWhereInput>
  }, "id" | "type_id_name_tenant_id">

  export type threatOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: threatCountOrderByAggregateInput
    _max?: threatMaxOrderByAggregateInput
    _min?: threatMinOrderByAggregateInput
  }

  export type threatScalarWhereWithAggregatesInput = {
    AND?: threatScalarWhereWithAggregatesInput | threatScalarWhereWithAggregatesInput[]
    OR?: threatScalarWhereWithAggregatesInput[]
    NOT?: threatScalarWhereWithAggregatesInput | threatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"threat"> | string
    tenant_id?: StringWithAggregatesFilter<"threat"> | string
    type_id?: StringWithAggregatesFilter<"threat"> | string
    name?: StringWithAggregatesFilter<"threat"> | string
    is_active?: BoolWithAggregatesFilter<"threat"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"threat"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"threat"> | Date | string | null
  }

  export type ApplicationsWhereInput = {
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    id?: StringFilter<"Applications"> | string
    tenant_id?: StringFilter<"Applications"> | string
    code?: StringFilter<"Applications"> | string
    name?: StringFilter<"Applications"> | string
    severity?: IntFilter<"Applications"> | number
    is_active?: BoolFilter<"Applications"> | boolean
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeNullableFilter<"Applications"> | Date | string | null
  }

  export type ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_code?: ApplicationsTenant_idCodeCompoundUniqueInput
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    tenant_id?: StringFilter<"Applications"> | string
    code?: StringFilter<"Applications"> | string
    name?: StringFilter<"Applications"> | string
    severity?: IntFilter<"Applications"> | number
    is_active?: BoolFilter<"Applications"> | boolean
    created_at?: DateTimeFilter<"Applications"> | Date | string
    updated_at?: DateTimeNullableFilter<"Applications"> | Date | string | null
  }, "id" | "tenant_id_code">

  export type ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ApplicationsCountOrderByAggregateInput
    _avg?: ApplicationsAvgOrderByAggregateInput
    _max?: ApplicationsMaxOrderByAggregateInput
    _min?: ApplicationsMinOrderByAggregateInput
    _sum?: ApplicationsSumOrderByAggregateInput
  }

  export type ApplicationsScalarWhereWithAggregatesInput = {
    AND?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    OR?: ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Applications"> | string
    tenant_id?: StringWithAggregatesFilter<"Applications"> | string
    code?: StringWithAggregatesFilter<"Applications"> | string
    name?: StringWithAggregatesFilter<"Applications"> | string
    severity?: IntWithAggregatesFilter<"Applications"> | number
    is_active?: BoolWithAggregatesFilter<"Applications"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Applications"> | Date | string | null
  }

  export type Staff_ConditionWhereInput = {
    AND?: Staff_ConditionWhereInput | Staff_ConditionWhereInput[]
    OR?: Staff_ConditionWhereInput[]
    NOT?: Staff_ConditionWhereInput | Staff_ConditionWhereInput[]
    id?: StringFilter<"Staff_Condition"> | string
    tenant_id?: StringFilter<"Staff_Condition"> | string
    name?: StringFilter<"Staff_Condition"> | string
    sort_order?: IntFilter<"Staff_Condition"> | number
    is_active?: BoolFilter<"Staff_Condition"> | boolean
    created_at?: DateTimeFilter<"Staff_Condition"> | Date | string
    updated_at?: DateTimeNullableFilter<"Staff_Condition"> | Date | string | null
  }

  export type Staff_ConditionOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type Staff_ConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_tenant_id?: Staff_ConditionNameTenant_idCompoundUniqueInput
    AND?: Staff_ConditionWhereInput | Staff_ConditionWhereInput[]
    OR?: Staff_ConditionWhereInput[]
    NOT?: Staff_ConditionWhereInput | Staff_ConditionWhereInput[]
    tenant_id?: StringFilter<"Staff_Condition"> | string
    name?: StringFilter<"Staff_Condition"> | string
    sort_order?: IntFilter<"Staff_Condition"> | number
    is_active?: BoolFilter<"Staff_Condition"> | boolean
    created_at?: DateTimeFilter<"Staff_Condition"> | Date | string
    updated_at?: DateTimeNullableFilter<"Staff_Condition"> | Date | string | null
  }, "id" | "name_tenant_id">

  export type Staff_ConditionOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: Staff_ConditionCountOrderByAggregateInput
    _avg?: Staff_ConditionAvgOrderByAggregateInput
    _max?: Staff_ConditionMaxOrderByAggregateInput
    _min?: Staff_ConditionMinOrderByAggregateInput
    _sum?: Staff_ConditionSumOrderByAggregateInput
  }

  export type Staff_ConditionScalarWhereWithAggregatesInput = {
    AND?: Staff_ConditionScalarWhereWithAggregatesInput | Staff_ConditionScalarWhereWithAggregatesInput[]
    OR?: Staff_ConditionScalarWhereWithAggregatesInput[]
    NOT?: Staff_ConditionScalarWhereWithAggregatesInput | Staff_ConditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff_Condition"> | string
    tenant_id?: StringWithAggregatesFilter<"Staff_Condition"> | string
    name?: StringWithAggregatesFilter<"Staff_Condition"> | string
    sort_order?: IntWithAggregatesFilter<"Staff_Condition"> | number
    is_active?: BoolWithAggregatesFilter<"Staff_Condition"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Staff_Condition"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Staff_Condition"> | Date | string | null
  }

  export type Indirect_UnitWhereInput = {
    AND?: Indirect_UnitWhereInput | Indirect_UnitWhereInput[]
    OR?: Indirect_UnitWhereInput[]
    NOT?: Indirect_UnitWhereInput | Indirect_UnitWhereInput[]
    id?: StringFilter<"Indirect_Unit"> | string
    tenant_id?: StringFilter<"Indirect_Unit"> | string
    name?: StringFilter<"Indirect_Unit"> | string
    sort_order?: IntFilter<"Indirect_Unit"> | number
    is_active?: BoolFilter<"Indirect_Unit"> | boolean
    created_at?: DateTimeFilter<"Indirect_Unit"> | Date | string
    updated_at?: DateTimeNullableFilter<"Indirect_Unit"> | Date | string | null
  }

  export type Indirect_UnitOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type Indirect_UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_name?: Indirect_UnitTenant_idNameCompoundUniqueInput
    AND?: Indirect_UnitWhereInput | Indirect_UnitWhereInput[]
    OR?: Indirect_UnitWhereInput[]
    NOT?: Indirect_UnitWhereInput | Indirect_UnitWhereInput[]
    tenant_id?: StringFilter<"Indirect_Unit"> | string
    name?: StringFilter<"Indirect_Unit"> | string
    sort_order?: IntFilter<"Indirect_Unit"> | number
    is_active?: BoolFilter<"Indirect_Unit"> | boolean
    created_at?: DateTimeFilter<"Indirect_Unit"> | Date | string
    updated_at?: DateTimeNullableFilter<"Indirect_Unit"> | Date | string | null
  }, "id" | "tenant_id_name">

  export type Indirect_UnitOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: Indirect_UnitCountOrderByAggregateInput
    _avg?: Indirect_UnitAvgOrderByAggregateInput
    _max?: Indirect_UnitMaxOrderByAggregateInput
    _min?: Indirect_UnitMinOrderByAggregateInput
    _sum?: Indirect_UnitSumOrderByAggregateInput
  }

  export type Indirect_UnitScalarWhereWithAggregatesInput = {
    AND?: Indirect_UnitScalarWhereWithAggregatesInput | Indirect_UnitScalarWhereWithAggregatesInput[]
    OR?: Indirect_UnitScalarWhereWithAggregatesInput[]
    NOT?: Indirect_UnitScalarWhereWithAggregatesInput | Indirect_UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Indirect_Unit"> | string
    tenant_id?: StringWithAggregatesFilter<"Indirect_Unit"> | string
    name?: StringWithAggregatesFilter<"Indirect_Unit"> | string
    sort_order?: IntWithAggregatesFilter<"Indirect_Unit"> | number
    is_active?: BoolWithAggregatesFilter<"Indirect_Unit"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Indirect_Unit"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Indirect_Unit"> | Date | string | null
  }

  export type App_Testing_PeriodWhereInput = {
    AND?: App_Testing_PeriodWhereInput | App_Testing_PeriodWhereInput[]
    OR?: App_Testing_PeriodWhereInput[]
    NOT?: App_Testing_PeriodWhereInput | App_Testing_PeriodWhereInput[]
    code?: StringFilter<"App_Testing_Period"> | string
    tenant_id?: StringFilter<"App_Testing_Period"> | string
    name?: StringFilter<"App_Testing_Period"> | string
    sort_order?: IntFilter<"App_Testing_Period"> | number
    is_active?: BoolFilter<"App_Testing_Period"> | boolean
    created_at?: DateTimeFilter<"App_Testing_Period"> | Date | string
    updated_at?: DateTimeNullableFilter<"App_Testing_Period"> | Date | string | null
  }

  export type App_Testing_PeriodOrderByWithRelationInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type App_Testing_PeriodWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    tenant_id_name?: App_Testing_PeriodTenant_idNameCompoundUniqueInput
    AND?: App_Testing_PeriodWhereInput | App_Testing_PeriodWhereInput[]
    OR?: App_Testing_PeriodWhereInput[]
    NOT?: App_Testing_PeriodWhereInput | App_Testing_PeriodWhereInput[]
    tenant_id?: StringFilter<"App_Testing_Period"> | string
    name?: StringFilter<"App_Testing_Period"> | string
    sort_order?: IntFilter<"App_Testing_Period"> | number
    is_active?: BoolFilter<"App_Testing_Period"> | boolean
    created_at?: DateTimeFilter<"App_Testing_Period"> | Date | string
    updated_at?: DateTimeNullableFilter<"App_Testing_Period"> | Date | string | null
  }, "code" | "tenant_id_name">

  export type App_Testing_PeriodOrderByWithAggregationInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: App_Testing_PeriodCountOrderByAggregateInput
    _avg?: App_Testing_PeriodAvgOrderByAggregateInput
    _max?: App_Testing_PeriodMaxOrderByAggregateInput
    _min?: App_Testing_PeriodMinOrderByAggregateInput
    _sum?: App_Testing_PeriodSumOrderByAggregateInput
  }

  export type App_Testing_PeriodScalarWhereWithAggregatesInput = {
    AND?: App_Testing_PeriodScalarWhereWithAggregatesInput | App_Testing_PeriodScalarWhereWithAggregatesInput[]
    OR?: App_Testing_PeriodScalarWhereWithAggregatesInput[]
    NOT?: App_Testing_PeriodScalarWhereWithAggregatesInput | App_Testing_PeriodScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"App_Testing_Period"> | string
    tenant_id?: StringWithAggregatesFilter<"App_Testing_Period"> | string
    name?: StringWithAggregatesFilter<"App_Testing_Period"> | string
    sort_order?: IntWithAggregatesFilter<"App_Testing_Period"> | number
    is_active?: BoolWithAggregatesFilter<"App_Testing_Period"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"App_Testing_Period"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"App_Testing_Period"> | Date | string | null
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    code?: StringFilter<"Currency"> | string
    tenant_id?: StringFilter<"Currency"> | string
    name?: StringFilter<"Currency"> | string
    description?: StringFilter<"Currency"> | string
    sort_order?: IntFilter<"Currency"> | number
    is_active?: BoolFilter<"Currency"> | boolean
    created_at?: DateTimeFilter<"Currency"> | Date | string
    updated_at?: DateTimeNullableFilter<"Currency"> | Date | string | null
  }

  export type CurrencyOrderByWithRelationInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    tenant_id_name?: CurrencyTenant_idNameCompoundUniqueInput
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    tenant_id?: StringFilter<"Currency"> | string
    name?: StringFilter<"Currency"> | string
    description?: StringFilter<"Currency"> | string
    sort_order?: IntFilter<"Currency"> | number
    is_active?: BoolFilter<"Currency"> | boolean
    created_at?: DateTimeFilter<"Currency"> | Date | string
    updated_at?: DateTimeNullableFilter<"Currency"> | Date | string | null
  }, "code" | "tenant_id_name">

  export type CurrencyOrderByWithAggregationInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Currency"> | string
    tenant_id?: StringWithAggregatesFilter<"Currency"> | string
    name?: StringWithAggregatesFilter<"Currency"> | string
    description?: StringWithAggregatesFilter<"Currency"> | string
    sort_order?: IntWithAggregatesFilter<"Currency"> | number
    is_active?: BoolWithAggregatesFilter<"Currency"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Currency"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Currency"> | Date | string | null
  }

  export type vw_threat_typesWhereInput = {
    AND?: vw_threat_typesWhereInput | vw_threat_typesWhereInput[]
    OR?: vw_threat_typesWhereInput[]
    NOT?: vw_threat_typesWhereInput | vw_threat_typesWhereInput[]
    id?: StringFilter<"vw_threat_types"> | string
    tenant_id?: StringNullableFilter<"vw_threat_types"> | string | null
    name?: StringNullableFilter<"vw_threat_types"> | string | null
    is_active?: BoolNullableFilter<"vw_threat_types"> | boolean | null
    created_at?: DateTimeNullableFilter<"vw_threat_types"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"vw_threat_types"> | Date | string | null
    delete_enable?: IntFilter<"vw_threat_types"> | number
  }

  export type vw_threat_typesOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    delete_enable?: SortOrder
  }

  export type vw_threat_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vw_threat_typesWhereInput | vw_threat_typesWhereInput[]
    OR?: vw_threat_typesWhereInput[]
    NOT?: vw_threat_typesWhereInput | vw_threat_typesWhereInput[]
    tenant_id?: StringNullableFilter<"vw_threat_types"> | string | null
    name?: StringNullableFilter<"vw_threat_types"> | string | null
    is_active?: BoolNullableFilter<"vw_threat_types"> | boolean | null
    created_at?: DateTimeNullableFilter<"vw_threat_types"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"vw_threat_types"> | Date | string | null
    delete_enable?: IntFilter<"vw_threat_types"> | number
  }, "id">

  export type vw_threat_typesOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    delete_enable?: SortOrder
    _count?: vw_threat_typesCountOrderByAggregateInput
    _avg?: vw_threat_typesAvgOrderByAggregateInput
    _max?: vw_threat_typesMaxOrderByAggregateInput
    _min?: vw_threat_typesMinOrderByAggregateInput
    _sum?: vw_threat_typesSumOrderByAggregateInput
  }

  export type vw_threat_typesScalarWhereWithAggregatesInput = {
    AND?: vw_threat_typesScalarWhereWithAggregatesInput | vw_threat_typesScalarWhereWithAggregatesInput[]
    OR?: vw_threat_typesScalarWhereWithAggregatesInput[]
    NOT?: vw_threat_typesScalarWhereWithAggregatesInput | vw_threat_typesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vw_threat_types"> | string
    tenant_id?: StringNullableWithAggregatesFilter<"vw_threat_types"> | string | null
    name?: StringNullableWithAggregatesFilter<"vw_threat_types"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"vw_threat_types"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"vw_threat_types"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"vw_threat_types"> | Date | string | null
    delete_enable?: IntWithAggregatesFilter<"vw_threat_types"> | number
  }

  export type threat_typeCreateInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    threats?: threatCreateNestedManyWithoutThreat_typesInput
  }

  export type threat_typeUncheckedCreateInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    threats?: threatUncheckedCreateNestedManyWithoutThreat_typesInput
  }

  export type threat_typeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    threats?: threatUpdateManyWithoutThreat_typesNestedInput
  }

  export type threat_typeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    threats?: threatUncheckedUpdateManyWithoutThreat_typesNestedInput
  }

  export type threat_typeCreateManyInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threat_typeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threat_typeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threatCreateInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    threat_types: threat_typeCreateNestedOneWithoutThreatsInput
  }

  export type threatUncheckedCreateInput = {
    id: string
    tenant_id: string
    type_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    threat_types?: threat_typeUpdateOneRequiredWithoutThreatsNestedInput
  }

  export type threatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threatCreateManyInput = {
    id: string
    tenant_id: string
    type_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationsCreateInput = {
    id: string
    tenant_id: string
    code: string
    name: string
    severity: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type ApplicationsUncheckedCreateInput = {
    id: string
    tenant_id: string
    code: string
    name: string
    severity: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type ApplicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationsCreateManyInput = {
    id: string
    tenant_id: string
    code: string
    name: string
    severity: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type ApplicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Staff_ConditionCreateInput = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type Staff_ConditionUncheckedCreateInput = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type Staff_ConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Staff_ConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Staff_ConditionCreateManyInput = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type Staff_ConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Staff_ConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Indirect_UnitCreateInput = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type Indirect_UnitUncheckedCreateInput = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type Indirect_UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Indirect_UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Indirect_UnitCreateManyInput = {
    id: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type Indirect_UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Indirect_UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type App_Testing_PeriodCreateInput = {
    code: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type App_Testing_PeriodUncheckedCreateInput = {
    code: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type App_Testing_PeriodUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type App_Testing_PeriodUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type App_Testing_PeriodCreateManyInput = {
    code: string
    tenant_id: string
    name: string
    sort_order: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type App_Testing_PeriodUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type App_Testing_PeriodUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyCreateInput = {
    code: string
    tenant_id: string
    name: string
    description: string
    sort_order?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurrencyUncheckedCreateInput = {
    code: string
    tenant_id: string
    name: string
    description: string
    sort_order?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurrencyUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyCreateManyInput = {
    code: string
    tenant_id: string
    name: string
    description: string
    sort_order?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CurrencyUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sort_order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vw_threat_typesCreateInput = {
    id: string
    tenant_id?: string | null
    name?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    delete_enable?: number
  }

  export type vw_threat_typesUncheckedCreateInput = {
    id: string
    tenant_id?: string | null
    name?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    delete_enable?: number
  }

  export type vw_threat_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delete_enable?: IntFieldUpdateOperationsInput | number
  }

  export type vw_threat_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delete_enable?: IntFieldUpdateOperationsInput | number
  }

  export type vw_threat_typesCreateManyInput = {
    id: string
    tenant_id?: string | null
    name?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    delete_enable?: number
  }

  export type vw_threat_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delete_enable?: IntFieldUpdateOperationsInput | number
  }

  export type vw_threat_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delete_enable?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ThreatListRelationFilter = {
    every?: threatWhereInput
    some?: threatWhereInput
    none?: threatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type threatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type threat_typeTenant_idNameCompoundUniqueInput = {
    tenant_id: string
    name: string
  }

  export type threat_typeCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type threat_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type threat_typeMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Threat_typeRelationFilter = {
    is?: threat_typeWhereInput
    isNot?: threat_typeWhereInput
  }

  export type threatType_idNameTenant_idCompoundUniqueInput = {
    type_id: string
    name: string
    tenant_id: string
  }

  export type threatCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type threatMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type threatMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApplicationsTenant_idCodeCompoundUniqueInput = {
    tenant_id: string
    code: string
  }

  export type ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsAvgOrderByAggregateInput = {
    severity?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    severity?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationsSumOrderByAggregateInput = {
    severity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type Staff_ConditionNameTenant_idCompoundUniqueInput = {
    name: string
    tenant_id: string
  }

  export type Staff_ConditionCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Staff_ConditionAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type Staff_ConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Staff_ConditionMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Staff_ConditionSumOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type Indirect_UnitTenant_idNameCompoundUniqueInput = {
    tenant_id: string
    name: string
  }

  export type Indirect_UnitCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Indirect_UnitAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type Indirect_UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Indirect_UnitMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Indirect_UnitSumOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type App_Testing_PeriodTenant_idNameCompoundUniqueInput = {
    tenant_id: string
    name: string
  }

  export type App_Testing_PeriodCountOrderByAggregateInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type App_Testing_PeriodAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type App_Testing_PeriodMaxOrderByAggregateInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type App_Testing_PeriodMinOrderByAggregateInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type App_Testing_PeriodSumOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type CurrencyTenant_idNameCompoundUniqueInput = {
    tenant_id: string
    name: string
  }

  export type CurrencyCountOrderByAggregateInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    code?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sort_order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type vw_threat_typesCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delete_enable?: SortOrder
  }

  export type vw_threat_typesAvgOrderByAggregateInput = {
    delete_enable?: SortOrder
  }

  export type vw_threat_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delete_enable?: SortOrder
  }

  export type vw_threat_typesMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    delete_enable?: SortOrder
  }

  export type vw_threat_typesSumOrderByAggregateInput = {
    delete_enable?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type threatCreateNestedManyWithoutThreat_typesInput = {
    create?: XOR<threatCreateWithoutThreat_typesInput, threatUncheckedCreateWithoutThreat_typesInput> | threatCreateWithoutThreat_typesInput[] | threatUncheckedCreateWithoutThreat_typesInput[]
    connectOrCreate?: threatCreateOrConnectWithoutThreat_typesInput | threatCreateOrConnectWithoutThreat_typesInput[]
    createMany?: threatCreateManyThreat_typesInputEnvelope
    connect?: threatWhereUniqueInput | threatWhereUniqueInput[]
  }

  export type threatUncheckedCreateNestedManyWithoutThreat_typesInput = {
    create?: XOR<threatCreateWithoutThreat_typesInput, threatUncheckedCreateWithoutThreat_typesInput> | threatCreateWithoutThreat_typesInput[] | threatUncheckedCreateWithoutThreat_typesInput[]
    connectOrCreate?: threatCreateOrConnectWithoutThreat_typesInput | threatCreateOrConnectWithoutThreat_typesInput[]
    createMany?: threatCreateManyThreat_typesInputEnvelope
    connect?: threatWhereUniqueInput | threatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type threatUpdateManyWithoutThreat_typesNestedInput = {
    create?: XOR<threatCreateWithoutThreat_typesInput, threatUncheckedCreateWithoutThreat_typesInput> | threatCreateWithoutThreat_typesInput[] | threatUncheckedCreateWithoutThreat_typesInput[]
    connectOrCreate?: threatCreateOrConnectWithoutThreat_typesInput | threatCreateOrConnectWithoutThreat_typesInput[]
    upsert?: threatUpsertWithWhereUniqueWithoutThreat_typesInput | threatUpsertWithWhereUniqueWithoutThreat_typesInput[]
    createMany?: threatCreateManyThreat_typesInputEnvelope
    set?: threatWhereUniqueInput | threatWhereUniqueInput[]
    disconnect?: threatWhereUniqueInput | threatWhereUniqueInput[]
    delete?: threatWhereUniqueInput | threatWhereUniqueInput[]
    connect?: threatWhereUniqueInput | threatWhereUniqueInput[]
    update?: threatUpdateWithWhereUniqueWithoutThreat_typesInput | threatUpdateWithWhereUniqueWithoutThreat_typesInput[]
    updateMany?: threatUpdateManyWithWhereWithoutThreat_typesInput | threatUpdateManyWithWhereWithoutThreat_typesInput[]
    deleteMany?: threatScalarWhereInput | threatScalarWhereInput[]
  }

  export type threatUncheckedUpdateManyWithoutThreat_typesNestedInput = {
    create?: XOR<threatCreateWithoutThreat_typesInput, threatUncheckedCreateWithoutThreat_typesInput> | threatCreateWithoutThreat_typesInput[] | threatUncheckedCreateWithoutThreat_typesInput[]
    connectOrCreate?: threatCreateOrConnectWithoutThreat_typesInput | threatCreateOrConnectWithoutThreat_typesInput[]
    upsert?: threatUpsertWithWhereUniqueWithoutThreat_typesInput | threatUpsertWithWhereUniqueWithoutThreat_typesInput[]
    createMany?: threatCreateManyThreat_typesInputEnvelope
    set?: threatWhereUniqueInput | threatWhereUniqueInput[]
    disconnect?: threatWhereUniqueInput | threatWhereUniqueInput[]
    delete?: threatWhereUniqueInput | threatWhereUniqueInput[]
    connect?: threatWhereUniqueInput | threatWhereUniqueInput[]
    update?: threatUpdateWithWhereUniqueWithoutThreat_typesInput | threatUpdateWithWhereUniqueWithoutThreat_typesInput[]
    updateMany?: threatUpdateManyWithWhereWithoutThreat_typesInput | threatUpdateManyWithWhereWithoutThreat_typesInput[]
    deleteMany?: threatScalarWhereInput | threatScalarWhereInput[]
  }

  export type threat_typeCreateNestedOneWithoutThreatsInput = {
    create?: XOR<threat_typeCreateWithoutThreatsInput, threat_typeUncheckedCreateWithoutThreatsInput>
    connectOrCreate?: threat_typeCreateOrConnectWithoutThreatsInput
    connect?: threat_typeWhereUniqueInput
  }

  export type threat_typeUpdateOneRequiredWithoutThreatsNestedInput = {
    create?: XOR<threat_typeCreateWithoutThreatsInput, threat_typeUncheckedCreateWithoutThreatsInput>
    connectOrCreate?: threat_typeCreateOrConnectWithoutThreatsInput
    upsert?: threat_typeUpsertWithoutThreatsInput
    connect?: threat_typeWhereUniqueInput
    update?: XOR<XOR<threat_typeUpdateToOneWithWhereWithoutThreatsInput, threat_typeUpdateWithoutThreatsInput>, threat_typeUncheckedUpdateWithoutThreatsInput>
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type threatCreateWithoutThreat_typesInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threatUncheckedCreateWithoutThreat_typesInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threatCreateOrConnectWithoutThreat_typesInput = {
    where: threatWhereUniqueInput
    create: XOR<threatCreateWithoutThreat_typesInput, threatUncheckedCreateWithoutThreat_typesInput>
  }

  export type threatCreateManyThreat_typesInputEnvelope = {
    data: threatCreateManyThreat_typesInput | threatCreateManyThreat_typesInput[]
    skipDuplicates?: boolean
  }

  export type threatUpsertWithWhereUniqueWithoutThreat_typesInput = {
    where: threatWhereUniqueInput
    update: XOR<threatUpdateWithoutThreat_typesInput, threatUncheckedUpdateWithoutThreat_typesInput>
    create: XOR<threatCreateWithoutThreat_typesInput, threatUncheckedCreateWithoutThreat_typesInput>
  }

  export type threatUpdateWithWhereUniqueWithoutThreat_typesInput = {
    where: threatWhereUniqueInput
    data: XOR<threatUpdateWithoutThreat_typesInput, threatUncheckedUpdateWithoutThreat_typesInput>
  }

  export type threatUpdateManyWithWhereWithoutThreat_typesInput = {
    where: threatScalarWhereInput
    data: XOR<threatUpdateManyMutationInput, threatUncheckedUpdateManyWithoutThreat_typesInput>
  }

  export type threatScalarWhereInput = {
    AND?: threatScalarWhereInput | threatScalarWhereInput[]
    OR?: threatScalarWhereInput[]
    NOT?: threatScalarWhereInput | threatScalarWhereInput[]
    id?: StringFilter<"threat"> | string
    tenant_id?: StringFilter<"threat"> | string
    type_id?: StringFilter<"threat"> | string
    name?: StringFilter<"threat"> | string
    is_active?: BoolFilter<"threat"> | boolean
    created_at?: DateTimeFilter<"threat"> | Date | string
    updated_at?: DateTimeNullableFilter<"threat"> | Date | string | null
  }

  export type threat_typeCreateWithoutThreatsInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threat_typeUncheckedCreateWithoutThreatsInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threat_typeCreateOrConnectWithoutThreatsInput = {
    where: threat_typeWhereUniqueInput
    create: XOR<threat_typeCreateWithoutThreatsInput, threat_typeUncheckedCreateWithoutThreatsInput>
  }

  export type threat_typeUpsertWithoutThreatsInput = {
    update: XOR<threat_typeUpdateWithoutThreatsInput, threat_typeUncheckedUpdateWithoutThreatsInput>
    create: XOR<threat_typeCreateWithoutThreatsInput, threat_typeUncheckedCreateWithoutThreatsInput>
    where?: threat_typeWhereInput
  }

  export type threat_typeUpdateToOneWithWhereWithoutThreatsInput = {
    where?: threat_typeWhereInput
    data: XOR<threat_typeUpdateWithoutThreatsInput, threat_typeUncheckedUpdateWithoutThreatsInput>
  }

  export type threat_typeUpdateWithoutThreatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threat_typeUncheckedUpdateWithoutThreatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threatCreateManyThreat_typesInput = {
    id: string
    tenant_id: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type threatUpdateWithoutThreat_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threatUncheckedUpdateWithoutThreat_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type threatUncheckedUpdateManyWithoutThreat_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Threat_typeCountOutputTypeDefaultArgs instead
     */
    export type Threat_typeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Threat_typeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use threat_typeDefaultArgs instead
     */
    export type threat_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = threat_typeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use threatDefaultArgs instead
     */
    export type threatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = threatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationsDefaultArgs instead
     */
    export type ApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Staff_ConditionDefaultArgs instead
     */
    export type Staff_ConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Staff_ConditionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Indirect_UnitDefaultArgs instead
     */
    export type Indirect_UnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Indirect_UnitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use App_Testing_PeriodDefaultArgs instead
     */
    export type App_Testing_PeriodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = App_Testing_PeriodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyDefaultArgs instead
     */
    export type CurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use vw_threat_typesDefaultArgs instead
     */
    export type vw_threat_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = vw_threat_typesDefaultArgs<ExtArgs>

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