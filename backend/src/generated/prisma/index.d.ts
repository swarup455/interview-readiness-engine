
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CandidateProfile
 * 
 */
export type CandidateProfile = $Result.DefaultSelection<Prisma.$CandidateProfilePayload>
/**
 * Model ProfileLink
 * 
 */
export type ProfileLink = $Result.DefaultSelection<Prisma.$ProfileLinkPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model InterviewExperience
 * 
 */
export type InterviewExperience = $Result.DefaultSelection<Prisma.$InterviewExperiencePayload>
/**
 * Model InterviewQuestion
 * 
 */
export type InterviewQuestion = $Result.DefaultSelection<Prisma.$InterviewQuestionPayload>
/**
 * Model QuestionTopic
 * 
 */
export type QuestionTopic = $Result.DefaultSelection<Prisma.$QuestionTopicPayload>
/**
 * Model CompanyRoleTopic
 * 
 */
export type CompanyRoleTopic = $Result.DefaultSelection<Prisma.$CompanyRoleTopicPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProfileProvider: {
  LINKEDIN: 'LINKEDIN',
  GITHUB: 'GITHUB',
  LEETCODE: 'LEETCODE',
  CODECHEF: 'CODECHEF',
  OTHER: 'OTHER'
};

export type ProfileProvider = (typeof ProfileProvider)[keyof typeof ProfileProvider]


export const DataSourceType: {
  CURATED: 'CURATED',
  PUBLIC_SOURCE: 'PUBLIC_SOURCE',
  USER_SUBMITTED: 'USER_SUBMITTED',
  DEMO_SEED: 'DEMO_SEED',
  OFFICIAL_INTEGRATION: 'OFFICIAL_INTEGRATION'
};

export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const InterviewRoundType: {
  ONLINE_ASSESSMENT: 'ONLINE_ASSESSMENT',
  TECHNICAL_SCREEN: 'TECHNICAL_SCREEN',
  TECHNICAL_INTERVIEW: 'TECHNICAL_INTERVIEW',
  SYSTEM_DESIGN: 'SYSTEM_DESIGN',
  HIRING_MANAGER: 'HIRING_MANAGER',
  BEHAVIORAL: 'BEHAVIORAL',
  HR: 'HR',
  OTHER: 'OTHER'
};

export type InterviewRoundType = (typeof InterviewRoundType)[keyof typeof InterviewRoundType]


export const InterviewOutcome: {
  ADVANCED: 'ADVANCED',
  OFFERED: 'OFFERED',
  REJECTED: 'REJECTED',
  WITHDREW: 'WITHDREW',
  UNKNOWN: 'UNKNOWN'
};

export type InterviewOutcome = (typeof InterviewOutcome)[keyof typeof InterviewOutcome]


export const ImportanceLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type ImportanceLevel = (typeof ImportanceLevel)[keyof typeof ImportanceLevel]

}

export type ProfileProvider = $Enums.ProfileProvider

export const ProfileProvider: typeof $Enums.ProfileProvider

export type DataSourceType = $Enums.DataSourceType

export const DataSourceType: typeof $Enums.DataSourceType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type InterviewRoundType = $Enums.InterviewRoundType

export const InterviewRoundType: typeof $Enums.InterviewRoundType

export type InterviewOutcome = $Enums.InterviewOutcome

export const InterviewOutcome: typeof $Enums.InterviewOutcome

export type ImportanceLevel = $Enums.ImportanceLevel

export const ImportanceLevel: typeof $Enums.ImportanceLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateProfile`: Exposes CRUD operations for the **CandidateProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateProfiles
    * const candidateProfiles = await prisma.candidateProfile.findMany()
    * ```
    */
  get candidateProfile(): Prisma.CandidateProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileLink`: Exposes CRUD operations for the **ProfileLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileLinks
    * const profileLinks = await prisma.profileLink.findMany()
    * ```
    */
  get profileLink(): Prisma.ProfileLinkDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewExperience`: Exposes CRUD operations for the **InterviewExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewExperiences
    * const interviewExperiences = await prisma.interviewExperience.findMany()
    * ```
    */
  get interviewExperience(): Prisma.InterviewExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewQuestion`: Exposes CRUD operations for the **InterviewQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewQuestions
    * const interviewQuestions = await prisma.interviewQuestion.findMany()
    * ```
    */
  get interviewQuestion(): Prisma.InterviewQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionTopic`: Exposes CRUD operations for the **QuestionTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionTopics
    * const questionTopics = await prisma.questionTopic.findMany()
    * ```
    */
  get questionTopic(): Prisma.QuestionTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyRoleTopic`: Exposes CRUD operations for the **CompanyRoleTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyRoleTopics
    * const companyRoleTopics = await prisma.companyRoleTopic.findMany()
    * ```
    */
  get companyRoleTopic(): Prisma.CompanyRoleTopicDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    CandidateProfile: 'CandidateProfile',
    ProfileLink: 'ProfileLink',
    Company: 'Company',
    Role: 'Role',
    Topic: 'Topic',
    InterviewExperience: 'InterviewExperience',
    InterviewQuestion: 'InterviewQuestion',
    QuestionTopic: 'QuestionTopic',
    CompanyRoleTopic: 'CompanyRoleTopic'
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
      modelProps: "user" | "candidateProfile" | "profileLink" | "company" | "role" | "topic" | "interviewExperience" | "interviewQuestion" | "questionTopic" | "companyRoleTopic"
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
      CandidateProfile: {
        payload: Prisma.$CandidateProfilePayload<ExtArgs>
        fields: Prisma.CandidateProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findFirst: {
            args: Prisma.CandidateProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findMany: {
            args: Prisma.CandidateProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          create: {
            args: Prisma.CandidateProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          createMany: {
            args: Prisma.CandidateProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          delete: {
            args: Prisma.CandidateProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          update: {
            args: Prisma.CandidateProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          deleteMany: {
            args: Prisma.CandidateProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          upsert: {
            args: Prisma.CandidateProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          aggregate: {
            args: Prisma.CandidateProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateProfile>
          }
          groupBy: {
            args: Prisma.CandidateProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileCountAggregateOutputType> | number
          }
        }
      }
      ProfileLink: {
        payload: Prisma.$ProfileLinkPayload<ExtArgs>
        fields: Prisma.ProfileLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>
          }
          findFirst: {
            args: Prisma.ProfileLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>
          }
          findMany: {
            args: Prisma.ProfileLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>[]
          }
          create: {
            args: Prisma.ProfileLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>
          }
          createMany: {
            args: Prisma.ProfileLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>[]
          }
          delete: {
            args: Prisma.ProfileLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>
          }
          update: {
            args: Prisma.ProfileLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>
          }
          deleteMany: {
            args: Prisma.ProfileLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>[]
          }
          upsert: {
            args: Prisma.ProfileLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileLinkPayload>
          }
          aggregate: {
            args: Prisma.ProfileLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileLink>
          }
          groupBy: {
            args: Prisma.ProfileLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileLinkCountAggregateOutputType> | number
          }
        }
      }
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      InterviewExperience: {
        payload: Prisma.$InterviewExperiencePayload<ExtArgs>
        fields: Prisma.InterviewExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>
          }
          findFirst: {
            args: Prisma.InterviewExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>
          }
          findMany: {
            args: Prisma.InterviewExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>[]
          }
          create: {
            args: Prisma.InterviewExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>
          }
          createMany: {
            args: Prisma.InterviewExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>[]
          }
          delete: {
            args: Prisma.InterviewExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>
          }
          update: {
            args: Prisma.InterviewExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>
          }
          deleteMany: {
            args: Prisma.InterviewExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>[]
          }
          upsert: {
            args: Prisma.InterviewExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewExperiencePayload>
          }
          aggregate: {
            args: Prisma.InterviewExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewExperience>
          }
          groupBy: {
            args: Prisma.InterviewExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewExperienceCountAggregateOutputType> | number
          }
        }
      }
      InterviewQuestion: {
        payload: Prisma.$InterviewQuestionPayload<ExtArgs>
        fields: Prisma.InterviewQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          findFirst: {
            args: Prisma.InterviewQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          findMany: {
            args: Prisma.InterviewQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          create: {
            args: Prisma.InterviewQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          createMany: {
            args: Prisma.InterviewQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          delete: {
            args: Prisma.InterviewQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          update: {
            args: Prisma.InterviewQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          deleteMany: {
            args: Prisma.InterviewQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          upsert: {
            args: Prisma.InterviewQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          aggregate: {
            args: Prisma.InterviewQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewQuestion>
          }
          groupBy: {
            args: Prisma.InterviewQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewQuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionTopic: {
        payload: Prisma.$QuestionTopicPayload<ExtArgs>
        fields: Prisma.QuestionTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>
          }
          findFirst: {
            args: Prisma.QuestionTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>
          }
          findMany: {
            args: Prisma.QuestionTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>[]
          }
          create: {
            args: Prisma.QuestionTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>
          }
          createMany: {
            args: Prisma.QuestionTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>[]
          }
          delete: {
            args: Prisma.QuestionTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>
          }
          update: {
            args: Prisma.QuestionTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>
          }
          deleteMany: {
            args: Prisma.QuestionTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>[]
          }
          upsert: {
            args: Prisma.QuestionTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTopicPayload>
          }
          aggregate: {
            args: Prisma.QuestionTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionTopic>
          }
          groupBy: {
            args: Prisma.QuestionTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionTopicCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionTopicCountAggregateOutputType> | number
          }
        }
      }
      CompanyRoleTopic: {
        payload: Prisma.$CompanyRoleTopicPayload<ExtArgs>
        fields: Prisma.CompanyRoleTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyRoleTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyRoleTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>
          }
          findFirst: {
            args: Prisma.CompanyRoleTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyRoleTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>
          }
          findMany: {
            args: Prisma.CompanyRoleTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>[]
          }
          create: {
            args: Prisma.CompanyRoleTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>
          }
          createMany: {
            args: Prisma.CompanyRoleTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyRoleTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>[]
          }
          delete: {
            args: Prisma.CompanyRoleTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>
          }
          update: {
            args: Prisma.CompanyRoleTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>
          }
          deleteMany: {
            args: Prisma.CompanyRoleTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyRoleTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyRoleTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>[]
          }
          upsert: {
            args: Prisma.CompanyRoleTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRoleTopicPayload>
          }
          aggregate: {
            args: Prisma.CompanyRoleTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyRoleTopic>
          }
          groupBy: {
            args: Prisma.CompanyRoleTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyRoleTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyRoleTopicCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyRoleTopicCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    candidateProfile?: CandidateProfileOmit
    profileLink?: ProfileLinkOmit
    company?: CompanyOmit
    role?: RoleOmit
    topic?: TopicOmit
    interviewExperience?: InterviewExperienceOmit
    interviewQuestion?: InterviewQuestionOmit
    questionTopic?: QuestionTopicOmit
    companyRoleTopic?: CompanyRoleTopicOmit
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
   * Count Type CandidateProfileCountOutputType
   */

  export type CandidateProfileCountOutputType = {
    profileLinks: number
  }

  export type CandidateProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profileLinks?: boolean | CandidateProfileCountOutputTypeCountProfileLinksArgs
  }

  // Custom InputTypes
  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfileCountOutputType
     */
    select?: CandidateProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountProfileLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileLinkWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    roles: number
    interviewExperiences: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | CompanyCountOutputTypeCountRolesArgs
    interviewExperiences?: boolean | CompanyCountOutputTypeCountInterviewExperiencesArgs
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
  export type CompanyCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountInterviewExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewExperienceWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    interviewExperiences: number
    topicImportances: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewExperiences?: boolean | RoleCountOutputTypeCountInterviewExperiencesArgs
    topicImportances?: boolean | RoleCountOutputTypeCountTopicImportancesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountInterviewExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewExperienceWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountTopicImportancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyRoleTopicWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    childTopics: number
    questionTopics: number
    roleImportances: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childTopics?: boolean | TopicCountOutputTypeCountChildTopicsArgs
    questionTopics?: boolean | TopicCountOutputTypeCountQuestionTopicsArgs
    roleImportances?: boolean | TopicCountOutputTypeCountRoleImportancesArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountChildTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountQuestionTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTopicWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountRoleImportancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyRoleTopicWhereInput
  }


  /**
   * Count Type InterviewExperienceCountOutputType
   */

  export type InterviewExperienceCountOutputType = {
    questions: number
  }

  export type InterviewExperienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewExperienceCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * InterviewExperienceCountOutputType without action
   */
  export type InterviewExperienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperienceCountOutputType
     */
    select?: InterviewExperienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewExperienceCountOutputType without action
   */
  export type InterviewExperienceCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewQuestionWhereInput
  }


  /**
   * Count Type InterviewQuestionCountOutputType
   */

  export type InterviewQuestionCountOutputType = {
    topics: number
  }

  export type InterviewQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | InterviewQuestionCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * InterviewQuestionCountOutputType without action
   */
  export type InterviewQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestionCountOutputType
     */
    select?: InterviewQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewQuestionCountOutputType without action
   */
  export type InterviewQuestionCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTopicWhereInput
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
    email: string | null
    displayName: string | null
    passwordHash: string | null
    provider: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    passwordHash: string | null
    provider: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    displayName: number
    passwordHash: number
    provider: number
    providerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    passwordHash?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    passwordHash?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    passwordHash?: true
    provider?: true
    providerId?: true
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
    displayName: string | null
    passwordHash: string | null
    provider: string | null
    providerId: string | null
    createdAt: Date
    updatedAt: Date
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
    displayName?: boolean
    passwordHash?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateProfile?: boolean | User$candidateProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    passwordHash?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    passwordHash?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    displayName?: boolean
    passwordHash?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "displayName" | "passwordHash" | "provider" | "providerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | User$candidateProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      displayName: string | null
      passwordHash: string | null
      provider: string | null
      providerId: string | null
      createdAt: Date
      updatedAt: Date
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
    candidateProfile<T extends User$candidateProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$candidateProfileArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly displayName: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly providerId: FieldRef<"User", 'String'>
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
   * User.candidateProfile
   */
  export type User$candidateProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    where?: CandidateProfileWhereInput
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
   * Model CandidateProfile
   */

  export type AggregateCandidateProfile = {
    _count: CandidateProfileCountAggregateOutputType | null
    _avg: CandidateProfileAvgAggregateOutputType | null
    _sum: CandidateProfileSumAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  export type CandidateProfileAvgAggregateOutputType = {
    graduationYear: number | null
  }

  export type CandidateProfileSumAggregateOutputType = {
    graduationYear: number | null
  }

  export type CandidateProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    headline: string | null
    bio: string | null
    education: string | null
    graduationYear: number | null
    experienceLevel: string | null
    targetRole: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    headline: string | null
    bio: string | null
    education: string | null
    graduationYear: number | null
    experienceLevel: string | null
    targetRole: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateProfileCountAggregateOutputType = {
    id: number
    userId: number
    headline: number
    bio: number
    education: number
    graduationYear: number
    experienceLevel: number
    targetRole: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CandidateProfileAvgAggregateInputType = {
    graduationYear?: true
  }

  export type CandidateProfileSumAggregateInputType = {
    graduationYear?: true
  }

  export type CandidateProfileMinAggregateInputType = {
    id?: true
    userId?: true
    headline?: true
    bio?: true
    education?: true
    graduationYear?: true
    experienceLevel?: true
    targetRole?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    headline?: true
    bio?: true
    education?: true
    graduationYear?: true
    experienceLevel?: true
    targetRole?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateProfileCountAggregateInputType = {
    id?: true
    userId?: true
    headline?: true
    bio?: true
    education?: true
    graduationYear?: true
    experienceLevel?: true
    targetRole?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CandidateProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfile to aggregate.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateProfiles
    **/
    _count?: true | CandidateProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type GetCandidateProfileAggregateType<T extends CandidateProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateProfile[P]>
      : GetScalarType<T[P], AggregateCandidateProfile[P]>
  }




  export type CandidateProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateProfileWhereInput
    orderBy?: CandidateProfileOrderByWithAggregationInput | CandidateProfileOrderByWithAggregationInput[]
    by: CandidateProfileScalarFieldEnum[] | CandidateProfileScalarFieldEnum
    having?: CandidateProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateProfileCountAggregateInputType | true
    _avg?: CandidateProfileAvgAggregateInputType
    _sum?: CandidateProfileSumAggregateInputType
    _min?: CandidateProfileMinAggregateInputType
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type CandidateProfileGroupByOutputType = {
    id: string
    userId: string
    headline: string | null
    bio: string | null
    education: string | null
    graduationYear: number | null
    experienceLevel: string | null
    targetRole: string | null
    createdAt: Date
    updatedAt: Date
    _count: CandidateProfileCountAggregateOutputType | null
    _avg: CandidateProfileAvgAggregateOutputType | null
    _sum: CandidateProfileSumAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  type GetCandidateProfileGroupByPayload<T extends CandidateProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
        }
      >
    >


  export type CandidateProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    education?: boolean
    graduationYear?: boolean
    experienceLevel?: boolean
    targetRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    profileLinks?: boolean | CandidateProfile$profileLinksArgs<ExtArgs>
    _count?: boolean | CandidateProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    education?: boolean
    graduationYear?: boolean
    experienceLevel?: boolean
    targetRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    education?: boolean
    graduationYear?: boolean
    experienceLevel?: boolean
    targetRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    headline?: boolean
    bio?: boolean
    education?: boolean
    graduationYear?: boolean
    experienceLevel?: boolean
    targetRole?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CandidateProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "headline" | "bio" | "education" | "graduationYear" | "experienceLevel" | "targetRole" | "createdAt" | "updatedAt", ExtArgs["result"]["candidateProfile"]>
  export type CandidateProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    profileLinks?: boolean | CandidateProfile$profileLinksArgs<ExtArgs>
    _count?: boolean | CandidateProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidateProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidateProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      profileLinks: Prisma.$ProfileLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      headline: string | null
      bio: string | null
      education: string | null
      graduationYear: number | null
      experienceLevel: string | null
      targetRole: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["candidateProfile"]>
    composites: {}
  }

  type CandidateProfileGetPayload<S extends boolean | null | undefined | CandidateProfileDefaultArgs> = $Result.GetResult<Prisma.$CandidateProfilePayload, S>

  type CandidateProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateProfileCountAggregateInputType | true
    }

  export interface CandidateProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateProfile'], meta: { name: 'CandidateProfile' } }
    /**
     * Find zero or one CandidateProfile that matches the filter.
     * @param {CandidateProfileFindUniqueArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateProfileFindUniqueArgs>(args: SelectSubset<T, CandidateProfileFindUniqueArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateProfileFindUniqueOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateProfileFindFirstArgs>(args?: SelectSubset<T, CandidateProfileFindFirstArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany()
     * 
     * // Get first 10 CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateProfileFindManyArgs>(args?: SelectSubset<T, CandidateProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateProfile.
     * @param {CandidateProfileCreateArgs} args - Arguments to create a CandidateProfile.
     * @example
     * // Create one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.create({
     *   data: {
     *     // ... data to create a CandidateProfile
     *   }
     * })
     * 
     */
    create<T extends CandidateProfileCreateArgs>(args: SelectSubset<T, CandidateProfileCreateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateProfiles.
     * @param {CandidateProfileCreateManyArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateProfileCreateManyArgs>(args?: SelectSubset<T, CandidateProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateProfiles and returns the data saved in the database.
     * @param {CandidateProfileCreateManyAndReturnArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateProfiles and only return the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateProfile.
     * @param {CandidateProfileDeleteArgs} args - Arguments to delete one CandidateProfile.
     * @example
     * // Delete one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.delete({
     *   where: {
     *     // ... filter to delete one CandidateProfile
     *   }
     * })
     * 
     */
    delete<T extends CandidateProfileDeleteArgs>(args: SelectSubset<T, CandidateProfileDeleteArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateProfile.
     * @param {CandidateProfileUpdateArgs} args - Arguments to update one CandidateProfile.
     * @example
     * // Update one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateProfileUpdateArgs>(args: SelectSubset<T, CandidateProfileUpdateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateProfiles.
     * @param {CandidateProfileDeleteManyArgs} args - Arguments to filter CandidateProfiles to delete.
     * @example
     * // Delete a few CandidateProfiles
     * const { count } = await prisma.candidateProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateProfileDeleteManyArgs>(args?: SelectSubset<T, CandidateProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateProfileUpdateManyArgs>(args: SelectSubset<T, CandidateProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles and returns the data updated in the database.
     * @param {CandidateProfileUpdateManyAndReturnArgs} args - Arguments to update many CandidateProfiles.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateProfiles and only return the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CandidateProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateProfile.
     * @param {CandidateProfileUpsertArgs} args - Arguments to update or create a CandidateProfile.
     * @example
     * // Update or create a CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.upsert({
     *   create: {
     *     // ... data to create a CandidateProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateProfile we want to update
     *   }
     * })
     */
    upsert<T extends CandidateProfileUpsertArgs>(args: SelectSubset<T, CandidateProfileUpsertArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileCountArgs} args - Arguments to filter CandidateProfiles to count.
     * @example
     * // Count the number of CandidateProfiles
     * const count = await prisma.candidateProfile.count({
     *   where: {
     *     // ... the filter for the CandidateProfiles we want to count
     *   }
     * })
    **/
    count<T extends CandidateProfileCountArgs>(
      args?: Subset<T, CandidateProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateProfileAggregateArgs>(args: Subset<T, CandidateProfileAggregateArgs>): Prisma.PrismaPromise<GetCandidateProfileAggregateType<T>>

    /**
     * Group by CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileGroupByArgs} args - Group by arguments.
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
      T extends CandidateProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateProfileGroupByArgs['orderBy'] }
        : { orderBy?: CandidateProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateProfile model
   */
  readonly fields: CandidateProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profileLinks<T extends CandidateProfile$profileLinksArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$profileLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CandidateProfile model
   */
  interface CandidateProfileFieldRefs {
    readonly id: FieldRef<"CandidateProfile", 'String'>
    readonly userId: FieldRef<"CandidateProfile", 'String'>
    readonly headline: FieldRef<"CandidateProfile", 'String'>
    readonly bio: FieldRef<"CandidateProfile", 'String'>
    readonly education: FieldRef<"CandidateProfile", 'String'>
    readonly graduationYear: FieldRef<"CandidateProfile", 'Int'>
    readonly experienceLevel: FieldRef<"CandidateProfile", 'String'>
    readonly targetRole: FieldRef<"CandidateProfile", 'String'>
    readonly createdAt: FieldRef<"CandidateProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CandidateProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CandidateProfile findUnique
   */
  export type CandidateProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findUniqueOrThrow
   */
  export type CandidateProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findFirst
   */
  export type CandidateProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findFirstOrThrow
   */
  export type CandidateProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findMany
   */
  export type CandidateProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfiles to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile create
   */
  export type CandidateProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateProfile.
     */
    data: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
  }

  /**
   * CandidateProfile createMany
   */
  export type CandidateProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateProfile createManyAndReturn
   */
  export type CandidateProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile update
   */
  export type CandidateProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateProfile.
     */
    data: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
    /**
     * Choose, which CandidateProfile to update.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile updateMany
   */
  export type CandidateProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
  }

  /**
   * CandidateProfile updateManyAndReturn
   */
  export type CandidateProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile upsert
   */
  export type CandidateProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateProfile to update in case it exists.
     */
    where: CandidateProfileWhereUniqueInput
    /**
     * In case the CandidateProfile found by the `where` argument doesn't exist, create a new CandidateProfile with this data.
     */
    create: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
    /**
     * In case the CandidateProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
  }

  /**
   * CandidateProfile delete
   */
  export type CandidateProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter which CandidateProfile to delete.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile deleteMany
   */
  export type CandidateProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfiles to delete
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to delete.
     */
    limit?: number
  }

  /**
   * CandidateProfile.profileLinks
   */
  export type CandidateProfile$profileLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    where?: ProfileLinkWhereInput
    orderBy?: ProfileLinkOrderByWithRelationInput | ProfileLinkOrderByWithRelationInput[]
    cursor?: ProfileLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileLinkScalarFieldEnum | ProfileLinkScalarFieldEnum[]
  }

  /**
   * CandidateProfile without action
   */
  export type CandidateProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
  }


  /**
   * Model ProfileLink
   */

  export type AggregateProfileLink = {
    _count: ProfileLinkCountAggregateOutputType | null
    _min: ProfileLinkMinAggregateOutputType | null
    _max: ProfileLinkMaxAggregateOutputType | null
  }

  export type ProfileLinkMinAggregateOutputType = {
    id: string | null
    candidateProfileId: string | null
    provider: $Enums.ProfileProvider | null
    url: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileLinkMaxAggregateOutputType = {
    id: string | null
    candidateProfileId: string | null
    provider: $Enums.ProfileProvider | null
    url: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileLinkCountAggregateOutputType = {
    id: number
    candidateProfileId: number
    provider: number
    url: number
    label: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileLinkMinAggregateInputType = {
    id?: true
    candidateProfileId?: true
    provider?: true
    url?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileLinkMaxAggregateInputType = {
    id?: true
    candidateProfileId?: true
    provider?: true
    url?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileLinkCountAggregateInputType = {
    id?: true
    candidateProfileId?: true
    provider?: true
    url?: true
    label?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileLink to aggregate.
     */
    where?: ProfileLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileLinks to fetch.
     */
    orderBy?: ProfileLinkOrderByWithRelationInput | ProfileLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileLinks
    **/
    _count?: true | ProfileLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileLinkMaxAggregateInputType
  }

  export type GetProfileLinkAggregateType<T extends ProfileLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileLink[P]>
      : GetScalarType<T[P], AggregateProfileLink[P]>
  }




  export type ProfileLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileLinkWhereInput
    orderBy?: ProfileLinkOrderByWithAggregationInput | ProfileLinkOrderByWithAggregationInput[]
    by: ProfileLinkScalarFieldEnum[] | ProfileLinkScalarFieldEnum
    having?: ProfileLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileLinkCountAggregateInputType | true
    _min?: ProfileLinkMinAggregateInputType
    _max?: ProfileLinkMaxAggregateInputType
  }

  export type ProfileLinkGroupByOutputType = {
    id: string
    candidateProfileId: string
    provider: $Enums.ProfileProvider
    url: string
    label: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileLinkCountAggregateOutputType | null
    _min: ProfileLinkMinAggregateOutputType | null
    _max: ProfileLinkMaxAggregateOutputType | null
  }

  type GetProfileLinkGroupByPayload<T extends ProfileLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileLinkGroupByOutputType[P]>
        }
      >
    >


  export type ProfileLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateProfileId?: boolean
    provider?: boolean
    url?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileLink"]>

  export type ProfileLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateProfileId?: boolean
    provider?: boolean
    url?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileLink"]>

  export type ProfileLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateProfileId?: boolean
    provider?: boolean
    url?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileLink"]>

  export type ProfileLinkSelectScalar = {
    id?: boolean
    candidateProfileId?: boolean
    provider?: boolean
    url?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateProfileId" | "provider" | "url" | "label" | "createdAt" | "updatedAt", ExtArgs["result"]["profileLink"]>
  export type ProfileLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }
  export type ProfileLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }
  export type ProfileLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
  }

  export type $ProfileLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileLink"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      candidateProfileId: string
      provider: $Enums.ProfileProvider
      url: string
      label: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileLink"]>
    composites: {}
  }

  type ProfileLinkGetPayload<S extends boolean | null | undefined | ProfileLinkDefaultArgs> = $Result.GetResult<Prisma.$ProfileLinkPayload, S>

  type ProfileLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileLinkCountAggregateInputType | true
    }

  export interface ProfileLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileLink'], meta: { name: 'ProfileLink' } }
    /**
     * Find zero or one ProfileLink that matches the filter.
     * @param {ProfileLinkFindUniqueArgs} args - Arguments to find a ProfileLink
     * @example
     * // Get one ProfileLink
     * const profileLink = await prisma.profileLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileLinkFindUniqueArgs>(args: SelectSubset<T, ProfileLinkFindUniqueArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileLinkFindUniqueOrThrowArgs} args - Arguments to find a ProfileLink
     * @example
     * // Get one ProfileLink
     * const profileLink = await prisma.profileLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkFindFirstArgs} args - Arguments to find a ProfileLink
     * @example
     * // Get one ProfileLink
     * const profileLink = await prisma.profileLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileLinkFindFirstArgs>(args?: SelectSubset<T, ProfileLinkFindFirstArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkFindFirstOrThrowArgs} args - Arguments to find a ProfileLink
     * @example
     * // Get one ProfileLink
     * const profileLink = await prisma.profileLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileLinks
     * const profileLinks = await prisma.profileLink.findMany()
     * 
     * // Get first 10 ProfileLinks
     * const profileLinks = await prisma.profileLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileLinkWithIdOnly = await prisma.profileLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileLinkFindManyArgs>(args?: SelectSubset<T, ProfileLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileLink.
     * @param {ProfileLinkCreateArgs} args - Arguments to create a ProfileLink.
     * @example
     * // Create one ProfileLink
     * const ProfileLink = await prisma.profileLink.create({
     *   data: {
     *     // ... data to create a ProfileLink
     *   }
     * })
     * 
     */
    create<T extends ProfileLinkCreateArgs>(args: SelectSubset<T, ProfileLinkCreateArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileLinks.
     * @param {ProfileLinkCreateManyArgs} args - Arguments to create many ProfileLinks.
     * @example
     * // Create many ProfileLinks
     * const profileLink = await prisma.profileLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileLinkCreateManyArgs>(args?: SelectSubset<T, ProfileLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileLinks and returns the data saved in the database.
     * @param {ProfileLinkCreateManyAndReturnArgs} args - Arguments to create many ProfileLinks.
     * @example
     * // Create many ProfileLinks
     * const profileLink = await prisma.profileLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileLinks and only return the `id`
     * const profileLinkWithIdOnly = await prisma.profileLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileLink.
     * @param {ProfileLinkDeleteArgs} args - Arguments to delete one ProfileLink.
     * @example
     * // Delete one ProfileLink
     * const ProfileLink = await prisma.profileLink.delete({
     *   where: {
     *     // ... filter to delete one ProfileLink
     *   }
     * })
     * 
     */
    delete<T extends ProfileLinkDeleteArgs>(args: SelectSubset<T, ProfileLinkDeleteArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileLink.
     * @param {ProfileLinkUpdateArgs} args - Arguments to update one ProfileLink.
     * @example
     * // Update one ProfileLink
     * const profileLink = await prisma.profileLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileLinkUpdateArgs>(args: SelectSubset<T, ProfileLinkUpdateArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileLinks.
     * @param {ProfileLinkDeleteManyArgs} args - Arguments to filter ProfileLinks to delete.
     * @example
     * // Delete a few ProfileLinks
     * const { count } = await prisma.profileLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileLinkDeleteManyArgs>(args?: SelectSubset<T, ProfileLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileLinks
     * const profileLink = await prisma.profileLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileLinkUpdateManyArgs>(args: SelectSubset<T, ProfileLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileLinks and returns the data updated in the database.
     * @param {ProfileLinkUpdateManyAndReturnArgs} args - Arguments to update many ProfileLinks.
     * @example
     * // Update many ProfileLinks
     * const profileLink = await prisma.profileLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileLinks and only return the `id`
     * const profileLinkWithIdOnly = await prisma.profileLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileLink.
     * @param {ProfileLinkUpsertArgs} args - Arguments to update or create a ProfileLink.
     * @example
     * // Update or create a ProfileLink
     * const profileLink = await prisma.profileLink.upsert({
     *   create: {
     *     // ... data to create a ProfileLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileLink we want to update
     *   }
     * })
     */
    upsert<T extends ProfileLinkUpsertArgs>(args: SelectSubset<T, ProfileLinkUpsertArgs<ExtArgs>>): Prisma__ProfileLinkClient<$Result.GetResult<Prisma.$ProfileLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkCountArgs} args - Arguments to filter ProfileLinks to count.
     * @example
     * // Count the number of ProfileLinks
     * const count = await prisma.profileLink.count({
     *   where: {
     *     // ... the filter for the ProfileLinks we want to count
     *   }
     * })
    **/
    count<T extends ProfileLinkCountArgs>(
      args?: Subset<T, ProfileLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileLinkAggregateArgs>(args: Subset<T, ProfileLinkAggregateArgs>): Prisma.PrismaPromise<GetProfileLinkAggregateType<T>>

    /**
     * Group by ProfileLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileLinkGroupByArgs} args - Group by arguments.
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
      T extends ProfileLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileLinkGroupByArgs['orderBy'] }
        : { orderBy?: ProfileLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileLink model
   */
  readonly fields: ProfileLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfileLink model
   */
  interface ProfileLinkFieldRefs {
    readonly id: FieldRef<"ProfileLink", 'String'>
    readonly candidateProfileId: FieldRef<"ProfileLink", 'String'>
    readonly provider: FieldRef<"ProfileLink", 'ProfileProvider'>
    readonly url: FieldRef<"ProfileLink", 'String'>
    readonly label: FieldRef<"ProfileLink", 'String'>
    readonly createdAt: FieldRef<"ProfileLink", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileLink findUnique
   */
  export type ProfileLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileLink to fetch.
     */
    where: ProfileLinkWhereUniqueInput
  }

  /**
   * ProfileLink findUniqueOrThrow
   */
  export type ProfileLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileLink to fetch.
     */
    where: ProfileLinkWhereUniqueInput
  }

  /**
   * ProfileLink findFirst
   */
  export type ProfileLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileLink to fetch.
     */
    where?: ProfileLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileLinks to fetch.
     */
    orderBy?: ProfileLinkOrderByWithRelationInput | ProfileLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileLinks.
     */
    cursor?: ProfileLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileLinks.
     */
    distinct?: ProfileLinkScalarFieldEnum | ProfileLinkScalarFieldEnum[]
  }

  /**
   * ProfileLink findFirstOrThrow
   */
  export type ProfileLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileLink to fetch.
     */
    where?: ProfileLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileLinks to fetch.
     */
    orderBy?: ProfileLinkOrderByWithRelationInput | ProfileLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileLinks.
     */
    cursor?: ProfileLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileLinks.
     */
    distinct?: ProfileLinkScalarFieldEnum | ProfileLinkScalarFieldEnum[]
  }

  /**
   * ProfileLink findMany
   */
  export type ProfileLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProfileLinks to fetch.
     */
    where?: ProfileLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileLinks to fetch.
     */
    orderBy?: ProfileLinkOrderByWithRelationInput | ProfileLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileLinks.
     */
    cursor?: ProfileLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileLinks.
     */
    distinct?: ProfileLinkScalarFieldEnum | ProfileLinkScalarFieldEnum[]
  }

  /**
   * ProfileLink create
   */
  export type ProfileLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileLink.
     */
    data: XOR<ProfileLinkCreateInput, ProfileLinkUncheckedCreateInput>
  }

  /**
   * ProfileLink createMany
   */
  export type ProfileLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileLinks.
     */
    data: ProfileLinkCreateManyInput | ProfileLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileLink createManyAndReturn
   */
  export type ProfileLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileLinks.
     */
    data: ProfileLinkCreateManyInput | ProfileLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileLink update
   */
  export type ProfileLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileLink.
     */
    data: XOR<ProfileLinkUpdateInput, ProfileLinkUncheckedUpdateInput>
    /**
     * Choose, which ProfileLink to update.
     */
    where: ProfileLinkWhereUniqueInput
  }

  /**
   * ProfileLink updateMany
   */
  export type ProfileLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileLinks.
     */
    data: XOR<ProfileLinkUpdateManyMutationInput, ProfileLinkUncheckedUpdateManyInput>
    /**
     * Filter which ProfileLinks to update
     */
    where?: ProfileLinkWhereInput
    /**
     * Limit how many ProfileLinks to update.
     */
    limit?: number
  }

  /**
   * ProfileLink updateManyAndReturn
   */
  export type ProfileLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * The data used to update ProfileLinks.
     */
    data: XOR<ProfileLinkUpdateManyMutationInput, ProfileLinkUncheckedUpdateManyInput>
    /**
     * Filter which ProfileLinks to update
     */
    where?: ProfileLinkWhereInput
    /**
     * Limit how many ProfileLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileLink upsert
   */
  export type ProfileLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileLink to update in case it exists.
     */
    where: ProfileLinkWhereUniqueInput
    /**
     * In case the ProfileLink found by the `where` argument doesn't exist, create a new ProfileLink with this data.
     */
    create: XOR<ProfileLinkCreateInput, ProfileLinkUncheckedCreateInput>
    /**
     * In case the ProfileLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileLinkUpdateInput, ProfileLinkUncheckedUpdateInput>
  }

  /**
   * ProfileLink delete
   */
  export type ProfileLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
    /**
     * Filter which ProfileLink to delete.
     */
    where: ProfileLinkWhereUniqueInput
  }

  /**
   * ProfileLink deleteMany
   */
  export type ProfileLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileLinks to delete
     */
    where?: ProfileLinkWhereInput
    /**
     * Limit how many ProfileLinks to delete.
     */
    limit?: number
  }

  /**
   * ProfileLink without action
   */
  export type ProfileLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileLink
     */
    select?: ProfileLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileLink
     */
    omit?: ProfileLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileLinkInclude<ExtArgs> | null
  }


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
    slug: string | null
    description: string | null
    website: string | null
    logoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    website: string | null
    logoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    website: number
    logoUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    website?: true
    logoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    website?: true
    logoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    website?: true
    logoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    slug: string
    description: string | null
    website: string | null
    logoUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    slug?: boolean
    description?: boolean
    website?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Company$rolesArgs<ExtArgs>
    interviewExperiences?: boolean | Company$interviewExperiencesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    website?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    website?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    website?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "website" | "logoUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Company$rolesArgs<ExtArgs>
    interviewExperiences?: boolean | Company$interviewExperiencesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      interviewExperiences: Prisma.$InterviewExperiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      website: string | null
      logoUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
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
    roles<T extends Company$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Company$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewExperiences<T extends Company$interviewExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, Company$interviewExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly slug: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly isActive: FieldRef<"Company", 'Boolean'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
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
   * Company.roles
   */
  export type Company$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Company.interviewExperiences
   */
  export type Company$interviewExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    where?: InterviewExperienceWhereInput
    orderBy?: InterviewExperienceOrderByWithRelationInput | InterviewExperienceOrderByWithRelationInput[]
    cursor?: InterviewExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewExperienceScalarFieldEnum | InterviewExperienceScalarFieldEnum[]
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    slug: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    companyId: string
    name: string
    slug: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    interviewExperiences?: boolean | Role$interviewExperiencesArgs<ExtArgs>
    topicImportances?: boolean | Role$topicImportancesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "slug" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    interviewExperiences?: boolean | Role$interviewExperiencesArgs<ExtArgs>
    topicImportances?: boolean | Role$topicImportancesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      interviewExperiences: Prisma.$InterviewExperiencePayload<ExtArgs>[]
      topicImportances: Prisma.$CompanyRoleTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      name: string
      slug: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interviewExperiences<T extends Role$interviewExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, Role$interviewExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topicImportances<T extends Role$topicImportancesArgs<ExtArgs> = {}>(args?: Subset<T, Role$topicImportancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly companyId: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly slug: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly isActive: FieldRef<"Role", 'Boolean'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.interviewExperiences
   */
  export type Role$interviewExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    where?: InterviewExperienceWhereInput
    orderBy?: InterviewExperienceOrderByWithRelationInput | InterviewExperienceOrderByWithRelationInput[]
    cursor?: InterviewExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewExperienceScalarFieldEnum | InterviewExperienceScalarFieldEnum[]
  }

  /**
   * Role.topicImportances
   */
  export type Role$topicImportancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    where?: CompanyRoleTopicWhereInput
    orderBy?: CompanyRoleTopicOrderByWithRelationInput | CompanyRoleTopicOrderByWithRelationInput[]
    cursor?: CompanyRoleTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyRoleTopicScalarFieldEnum | CompanyRoleTopicScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    category: string | null
    description: string | null
    isActive: boolean | null
    parentTopicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    category: string | null
    description: string | null
    isActive: boolean | null
    parentTopicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    category: number
    description: number
    isActive: number
    parentTopicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    description?: true
    isActive?: true
    parentTopicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    description?: true
    isActive?: true
    parentTopicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    category?: true
    description?: true
    isActive?: true
    parentTopicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    name: string
    slug: string
    category: string
    description: string | null
    isActive: boolean
    parentTopicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
    parentTopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentTopic?: boolean | Topic$parentTopicArgs<ExtArgs>
    childTopics?: boolean | Topic$childTopicsArgs<ExtArgs>
    questionTopics?: boolean | Topic$questionTopicsArgs<ExtArgs>
    roleImportances?: boolean | Topic$roleImportancesArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
    parentTopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentTopic?: boolean | Topic$parentTopicArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
    parentTopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentTopic?: boolean | Topic$parentTopicArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
    parentTopicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "category" | "description" | "isActive" | "parentTopicId" | "createdAt" | "updatedAt", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentTopic?: boolean | Topic$parentTopicArgs<ExtArgs>
    childTopics?: boolean | Topic$childTopicsArgs<ExtArgs>
    questionTopics?: boolean | Topic$questionTopicsArgs<ExtArgs>
    roleImportances?: boolean | Topic$roleImportancesArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentTopic?: boolean | Topic$parentTopicArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentTopic?: boolean | Topic$parentTopicArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      parentTopic: Prisma.$TopicPayload<ExtArgs> | null
      childTopics: Prisma.$TopicPayload<ExtArgs>[]
      questionTopics: Prisma.$QuestionTopicPayload<ExtArgs>[]
      roleImportances: Prisma.$CompanyRoleTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      category: string
      description: string | null
      isActive: boolean
      parentTopicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
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
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentTopic<T extends Topic$parentTopicArgs<ExtArgs> = {}>(args?: Subset<T, Topic$parentTopicArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childTopics<T extends Topic$childTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$childTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionTopics<T extends Topic$questionTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$questionTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roleImportances<T extends Topic$roleImportancesArgs<ExtArgs> = {}>(args?: Subset<T, Topic$roleImportancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly slug: FieldRef<"Topic", 'String'>
    readonly category: FieldRef<"Topic", 'String'>
    readonly description: FieldRef<"Topic", 'String'>
    readonly isActive: FieldRef<"Topic", 'Boolean'>
    readonly parentTopicId: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.parentTopic
   */
  export type Topic$parentTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
  }

  /**
   * Topic.childTopics
   */
  export type Topic$childTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic.questionTopics
   */
  export type Topic$questionTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    where?: QuestionTopicWhereInput
    orderBy?: QuestionTopicOrderByWithRelationInput | QuestionTopicOrderByWithRelationInput[]
    cursor?: QuestionTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTopicScalarFieldEnum | QuestionTopicScalarFieldEnum[]
  }

  /**
   * Topic.roleImportances
   */
  export type Topic$roleImportancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    where?: CompanyRoleTopicWhereInput
    orderBy?: CompanyRoleTopicOrderByWithRelationInput | CompanyRoleTopicOrderByWithRelationInput[]
    cursor?: CompanyRoleTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyRoleTopicScalarFieldEnum | CompanyRoleTopicScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model InterviewExperience
   */

  export type AggregateInterviewExperience = {
    _count: InterviewExperienceCountAggregateOutputType | null
    _avg: InterviewExperienceAvgAggregateOutputType | null
    _sum: InterviewExperienceSumAggregateOutputType | null
    _min: InterviewExperienceMinAggregateOutputType | null
    _max: InterviewExperienceMaxAggregateOutputType | null
  }

  export type InterviewExperienceAvgAggregateOutputType = {
    interviewYear: number | null
    confidence: number | null
  }

  export type InterviewExperienceSumAggregateOutputType = {
    interviewYear: number | null
    confidence: number | null
  }

  export type InterviewExperienceMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    roleId: string | null
    interviewYear: number | null
    roundType: $Enums.InterviewRoundType | null
    outcome: $Enums.InterviewOutcome | null
    experienceText: string | null
    dataSourceType: $Enums.DataSourceType | null
    sourceName: string | null
    sourceUrl: string | null
    provenance: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewExperienceMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    roleId: string | null
    interviewYear: number | null
    roundType: $Enums.InterviewRoundType | null
    outcome: $Enums.InterviewOutcome | null
    experienceText: string | null
    dataSourceType: $Enums.DataSourceType | null
    sourceName: string | null
    sourceUrl: string | null
    provenance: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewExperienceCountAggregateOutputType = {
    id: number
    companyId: number
    roleId: number
    interviewYear: number
    roundType: number
    outcome: number
    experienceText: number
    dataSourceType: number
    sourceName: number
    sourceUrl: number
    provenance: number
    confidence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewExperienceAvgAggregateInputType = {
    interviewYear?: true
    confidence?: true
  }

  export type InterviewExperienceSumAggregateInputType = {
    interviewYear?: true
    confidence?: true
  }

  export type InterviewExperienceMinAggregateInputType = {
    id?: true
    companyId?: true
    roleId?: true
    interviewYear?: true
    roundType?: true
    outcome?: true
    experienceText?: true
    dataSourceType?: true
    sourceName?: true
    sourceUrl?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewExperienceMaxAggregateInputType = {
    id?: true
    companyId?: true
    roleId?: true
    interviewYear?: true
    roundType?: true
    outcome?: true
    experienceText?: true
    dataSourceType?: true
    sourceName?: true
    sourceUrl?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewExperienceCountAggregateInputType = {
    id?: true
    companyId?: true
    roleId?: true
    interviewYear?: true
    roundType?: true
    outcome?: true
    experienceText?: true
    dataSourceType?: true
    sourceName?: true
    sourceUrl?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewExperience to aggregate.
     */
    where?: InterviewExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewExperiences to fetch.
     */
    orderBy?: InterviewExperienceOrderByWithRelationInput | InterviewExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewExperiences
    **/
    _count?: true | InterviewExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewExperienceMaxAggregateInputType
  }

  export type GetInterviewExperienceAggregateType<T extends InterviewExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewExperience[P]>
      : GetScalarType<T[P], AggregateInterviewExperience[P]>
  }




  export type InterviewExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewExperienceWhereInput
    orderBy?: InterviewExperienceOrderByWithAggregationInput | InterviewExperienceOrderByWithAggregationInput[]
    by: InterviewExperienceScalarFieldEnum[] | InterviewExperienceScalarFieldEnum
    having?: InterviewExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewExperienceCountAggregateInputType | true
    _avg?: InterviewExperienceAvgAggregateInputType
    _sum?: InterviewExperienceSumAggregateInputType
    _min?: InterviewExperienceMinAggregateInputType
    _max?: InterviewExperienceMaxAggregateInputType
  }

  export type InterviewExperienceGroupByOutputType = {
    id: string
    companyId: string
    roleId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl: string | null
    provenance: string
    confidence: number
    createdAt: Date
    updatedAt: Date
    _count: InterviewExperienceCountAggregateOutputType | null
    _avg: InterviewExperienceAvgAggregateOutputType | null
    _sum: InterviewExperienceSumAggregateOutputType | null
    _min: InterviewExperienceMinAggregateOutputType | null
    _max: InterviewExperienceMaxAggregateOutputType | null
  }

  type GetInterviewExperienceGroupByPayload<T extends InterviewExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewExperienceGroupByOutputType[P]>
        }
      >
    >


  export type InterviewExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roleId?: boolean
    interviewYear?: boolean
    roundType?: boolean
    outcome?: boolean
    experienceText?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    questions?: boolean | InterviewExperience$questionsArgs<ExtArgs>
    _count?: boolean | InterviewExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewExperience"]>

  export type InterviewExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roleId?: boolean
    interviewYear?: boolean
    roundType?: boolean
    outcome?: boolean
    experienceText?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewExperience"]>

  export type InterviewExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roleId?: boolean
    interviewYear?: boolean
    roundType?: boolean
    outcome?: boolean
    experienceText?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewExperience"]>

  export type InterviewExperienceSelectScalar = {
    id?: boolean
    companyId?: boolean
    roleId?: boolean
    interviewYear?: boolean
    roundType?: boolean
    outcome?: boolean
    experienceText?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterviewExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "roleId" | "interviewYear" | "roundType" | "outcome" | "experienceText" | "dataSourceType" | "sourceName" | "sourceUrl" | "provenance" | "confidence" | "createdAt" | "updatedAt", ExtArgs["result"]["interviewExperience"]>
  export type InterviewExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    questions?: boolean | InterviewExperience$questionsArgs<ExtArgs>
    _count?: boolean | InterviewExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type InterviewExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $InterviewExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewExperience"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
      questions: Prisma.$InterviewQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      roleId: string
      interviewYear: number
      roundType: $Enums.InterviewRoundType
      outcome: $Enums.InterviewOutcome | null
      experienceText: string
      dataSourceType: $Enums.DataSourceType
      sourceName: string
      sourceUrl: string | null
      provenance: string
      confidence: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interviewExperience"]>
    composites: {}
  }

  type InterviewExperienceGetPayload<S extends boolean | null | undefined | InterviewExperienceDefaultArgs> = $Result.GetResult<Prisma.$InterviewExperiencePayload, S>

  type InterviewExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewExperienceCountAggregateInputType | true
    }

  export interface InterviewExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewExperience'], meta: { name: 'InterviewExperience' } }
    /**
     * Find zero or one InterviewExperience that matches the filter.
     * @param {InterviewExperienceFindUniqueArgs} args - Arguments to find a InterviewExperience
     * @example
     * // Get one InterviewExperience
     * const interviewExperience = await prisma.interviewExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewExperienceFindUniqueArgs>(args: SelectSubset<T, InterviewExperienceFindUniqueArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewExperienceFindUniqueOrThrowArgs} args - Arguments to find a InterviewExperience
     * @example
     * // Get one InterviewExperience
     * const interviewExperience = await prisma.interviewExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceFindFirstArgs} args - Arguments to find a InterviewExperience
     * @example
     * // Get one InterviewExperience
     * const interviewExperience = await prisma.interviewExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewExperienceFindFirstArgs>(args?: SelectSubset<T, InterviewExperienceFindFirstArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceFindFirstOrThrowArgs} args - Arguments to find a InterviewExperience
     * @example
     * // Get one InterviewExperience
     * const interviewExperience = await prisma.interviewExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewExperiences
     * const interviewExperiences = await prisma.interviewExperience.findMany()
     * 
     * // Get first 10 InterviewExperiences
     * const interviewExperiences = await prisma.interviewExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewExperienceWithIdOnly = await prisma.interviewExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewExperienceFindManyArgs>(args?: SelectSubset<T, InterviewExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewExperience.
     * @param {InterviewExperienceCreateArgs} args - Arguments to create a InterviewExperience.
     * @example
     * // Create one InterviewExperience
     * const InterviewExperience = await prisma.interviewExperience.create({
     *   data: {
     *     // ... data to create a InterviewExperience
     *   }
     * })
     * 
     */
    create<T extends InterviewExperienceCreateArgs>(args: SelectSubset<T, InterviewExperienceCreateArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewExperiences.
     * @param {InterviewExperienceCreateManyArgs} args - Arguments to create many InterviewExperiences.
     * @example
     * // Create many InterviewExperiences
     * const interviewExperience = await prisma.interviewExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewExperienceCreateManyArgs>(args?: SelectSubset<T, InterviewExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewExperiences and returns the data saved in the database.
     * @param {InterviewExperienceCreateManyAndReturnArgs} args - Arguments to create many InterviewExperiences.
     * @example
     * // Create many InterviewExperiences
     * const interviewExperience = await prisma.interviewExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewExperiences and only return the `id`
     * const interviewExperienceWithIdOnly = await prisma.interviewExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewExperience.
     * @param {InterviewExperienceDeleteArgs} args - Arguments to delete one InterviewExperience.
     * @example
     * // Delete one InterviewExperience
     * const InterviewExperience = await prisma.interviewExperience.delete({
     *   where: {
     *     // ... filter to delete one InterviewExperience
     *   }
     * })
     * 
     */
    delete<T extends InterviewExperienceDeleteArgs>(args: SelectSubset<T, InterviewExperienceDeleteArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewExperience.
     * @param {InterviewExperienceUpdateArgs} args - Arguments to update one InterviewExperience.
     * @example
     * // Update one InterviewExperience
     * const interviewExperience = await prisma.interviewExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewExperienceUpdateArgs>(args: SelectSubset<T, InterviewExperienceUpdateArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewExperiences.
     * @param {InterviewExperienceDeleteManyArgs} args - Arguments to filter InterviewExperiences to delete.
     * @example
     * // Delete a few InterviewExperiences
     * const { count } = await prisma.interviewExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewExperienceDeleteManyArgs>(args?: SelectSubset<T, InterviewExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewExperiences
     * const interviewExperience = await prisma.interviewExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewExperienceUpdateManyArgs>(args: SelectSubset<T, InterviewExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewExperiences and returns the data updated in the database.
     * @param {InterviewExperienceUpdateManyAndReturnArgs} args - Arguments to update many InterviewExperiences.
     * @example
     * // Update many InterviewExperiences
     * const interviewExperience = await prisma.interviewExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewExperiences and only return the `id`
     * const interviewExperienceWithIdOnly = await prisma.interviewExperience.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewExperience.
     * @param {InterviewExperienceUpsertArgs} args - Arguments to update or create a InterviewExperience.
     * @example
     * // Update or create a InterviewExperience
     * const interviewExperience = await prisma.interviewExperience.upsert({
     *   create: {
     *     // ... data to create a InterviewExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewExperience we want to update
     *   }
     * })
     */
    upsert<T extends InterviewExperienceUpsertArgs>(args: SelectSubset<T, InterviewExperienceUpsertArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceCountArgs} args - Arguments to filter InterviewExperiences to count.
     * @example
     * // Count the number of InterviewExperiences
     * const count = await prisma.interviewExperience.count({
     *   where: {
     *     // ... the filter for the InterviewExperiences we want to count
     *   }
     * })
    **/
    count<T extends InterviewExperienceCountArgs>(
      args?: Subset<T, InterviewExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewExperienceAggregateArgs>(args: Subset<T, InterviewExperienceAggregateArgs>): Prisma.PrismaPromise<GetInterviewExperienceAggregateType<T>>

    /**
     * Group by InterviewExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewExperienceGroupByArgs} args - Group by arguments.
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
      T extends InterviewExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewExperienceGroupByArgs['orderBy'] }
        : { orderBy?: InterviewExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewExperience model
   */
  readonly fields: InterviewExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends InterviewExperience$questionsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewExperience$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InterviewExperience model
   */
  interface InterviewExperienceFieldRefs {
    readonly id: FieldRef<"InterviewExperience", 'String'>
    readonly companyId: FieldRef<"InterviewExperience", 'String'>
    readonly roleId: FieldRef<"InterviewExperience", 'String'>
    readonly interviewYear: FieldRef<"InterviewExperience", 'Int'>
    readonly roundType: FieldRef<"InterviewExperience", 'InterviewRoundType'>
    readonly outcome: FieldRef<"InterviewExperience", 'InterviewOutcome'>
    readonly experienceText: FieldRef<"InterviewExperience", 'String'>
    readonly dataSourceType: FieldRef<"InterviewExperience", 'DataSourceType'>
    readonly sourceName: FieldRef<"InterviewExperience", 'String'>
    readonly sourceUrl: FieldRef<"InterviewExperience", 'String'>
    readonly provenance: FieldRef<"InterviewExperience", 'String'>
    readonly confidence: FieldRef<"InterviewExperience", 'Float'>
    readonly createdAt: FieldRef<"InterviewExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"InterviewExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewExperience findUnique
   */
  export type InterviewExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * Filter, which InterviewExperience to fetch.
     */
    where: InterviewExperienceWhereUniqueInput
  }

  /**
   * InterviewExperience findUniqueOrThrow
   */
  export type InterviewExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * Filter, which InterviewExperience to fetch.
     */
    where: InterviewExperienceWhereUniqueInput
  }

  /**
   * InterviewExperience findFirst
   */
  export type InterviewExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * Filter, which InterviewExperience to fetch.
     */
    where?: InterviewExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewExperiences to fetch.
     */
    orderBy?: InterviewExperienceOrderByWithRelationInput | InterviewExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewExperiences.
     */
    cursor?: InterviewExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewExperiences.
     */
    distinct?: InterviewExperienceScalarFieldEnum | InterviewExperienceScalarFieldEnum[]
  }

  /**
   * InterviewExperience findFirstOrThrow
   */
  export type InterviewExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * Filter, which InterviewExperience to fetch.
     */
    where?: InterviewExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewExperiences to fetch.
     */
    orderBy?: InterviewExperienceOrderByWithRelationInput | InterviewExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewExperiences.
     */
    cursor?: InterviewExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewExperiences.
     */
    distinct?: InterviewExperienceScalarFieldEnum | InterviewExperienceScalarFieldEnum[]
  }

  /**
   * InterviewExperience findMany
   */
  export type InterviewExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * Filter, which InterviewExperiences to fetch.
     */
    where?: InterviewExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewExperiences to fetch.
     */
    orderBy?: InterviewExperienceOrderByWithRelationInput | InterviewExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewExperiences.
     */
    cursor?: InterviewExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewExperiences.
     */
    distinct?: InterviewExperienceScalarFieldEnum | InterviewExperienceScalarFieldEnum[]
  }

  /**
   * InterviewExperience create
   */
  export type InterviewExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewExperience.
     */
    data: XOR<InterviewExperienceCreateInput, InterviewExperienceUncheckedCreateInput>
  }

  /**
   * InterviewExperience createMany
   */
  export type InterviewExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewExperiences.
     */
    data: InterviewExperienceCreateManyInput | InterviewExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewExperience createManyAndReturn
   */
  export type InterviewExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewExperiences.
     */
    data: InterviewExperienceCreateManyInput | InterviewExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewExperience update
   */
  export type InterviewExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewExperience.
     */
    data: XOR<InterviewExperienceUpdateInput, InterviewExperienceUncheckedUpdateInput>
    /**
     * Choose, which InterviewExperience to update.
     */
    where: InterviewExperienceWhereUniqueInput
  }

  /**
   * InterviewExperience updateMany
   */
  export type InterviewExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewExperiences.
     */
    data: XOR<InterviewExperienceUpdateManyMutationInput, InterviewExperienceUncheckedUpdateManyInput>
    /**
     * Filter which InterviewExperiences to update
     */
    where?: InterviewExperienceWhereInput
    /**
     * Limit how many InterviewExperiences to update.
     */
    limit?: number
  }

  /**
   * InterviewExperience updateManyAndReturn
   */
  export type InterviewExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * The data used to update InterviewExperiences.
     */
    data: XOR<InterviewExperienceUpdateManyMutationInput, InterviewExperienceUncheckedUpdateManyInput>
    /**
     * Filter which InterviewExperiences to update
     */
    where?: InterviewExperienceWhereInput
    /**
     * Limit how many InterviewExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewExperience upsert
   */
  export type InterviewExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewExperience to update in case it exists.
     */
    where: InterviewExperienceWhereUniqueInput
    /**
     * In case the InterviewExperience found by the `where` argument doesn't exist, create a new InterviewExperience with this data.
     */
    create: XOR<InterviewExperienceCreateInput, InterviewExperienceUncheckedCreateInput>
    /**
     * In case the InterviewExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewExperienceUpdateInput, InterviewExperienceUncheckedUpdateInput>
  }

  /**
   * InterviewExperience delete
   */
  export type InterviewExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    /**
     * Filter which InterviewExperience to delete.
     */
    where: InterviewExperienceWhereUniqueInput
  }

  /**
   * InterviewExperience deleteMany
   */
  export type InterviewExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewExperiences to delete
     */
    where?: InterviewExperienceWhereInput
    /**
     * Limit how many InterviewExperiences to delete.
     */
    limit?: number
  }

  /**
   * InterviewExperience.questions
   */
  export type InterviewExperience$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    where?: InterviewQuestionWhereInput
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    cursor?: InterviewQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewExperience without action
   */
  export type InterviewExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
  }


  /**
   * Model InterviewQuestion
   */

  export type AggregateInterviewQuestion = {
    _count: InterviewQuestionCountAggregateOutputType | null
    _avg: InterviewQuestionAvgAggregateOutputType | null
    _sum: InterviewQuestionSumAggregateOutputType | null
    _min: InterviewQuestionMinAggregateOutputType | null
    _max: InterviewQuestionMaxAggregateOutputType | null
  }

  export type InterviewQuestionAvgAggregateOutputType = {
    confidence: number | null
  }

  export type InterviewQuestionSumAggregateOutputType = {
    confidence: number | null
  }

  export type InterviewQuestionMinAggregateOutputType = {
    id: string | null
    questionText: string | null
    normalizedQuestionText: string | null
    difficulty: $Enums.Difficulty | null
    sourceExperienceId: string | null
    dataSourceType: $Enums.DataSourceType | null
    sourceName: string | null
    provenance: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewQuestionMaxAggregateOutputType = {
    id: string | null
    questionText: string | null
    normalizedQuestionText: string | null
    difficulty: $Enums.Difficulty | null
    sourceExperienceId: string | null
    dataSourceType: $Enums.DataSourceType | null
    sourceName: string | null
    provenance: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewQuestionCountAggregateOutputType = {
    id: number
    questionText: number
    normalizedQuestionText: number
    difficulty: number
    sourceExperienceId: number
    dataSourceType: number
    sourceName: number
    provenance: number
    confidence: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewQuestionAvgAggregateInputType = {
    confidence?: true
  }

  export type InterviewQuestionSumAggregateInputType = {
    confidence?: true
  }

  export type InterviewQuestionMinAggregateInputType = {
    id?: true
    questionText?: true
    normalizedQuestionText?: true
    difficulty?: true
    sourceExperienceId?: true
    dataSourceType?: true
    sourceName?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewQuestionMaxAggregateInputType = {
    id?: true
    questionText?: true
    normalizedQuestionText?: true
    difficulty?: true
    sourceExperienceId?: true
    dataSourceType?: true
    sourceName?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewQuestionCountAggregateInputType = {
    id?: true
    questionText?: true
    normalizedQuestionText?: true
    difficulty?: true
    sourceExperienceId?: true
    dataSourceType?: true
    sourceName?: true
    provenance?: true
    confidence?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewQuestion to aggregate.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewQuestions
    **/
    _count?: true | InterviewQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewQuestionMaxAggregateInputType
  }

  export type GetInterviewQuestionAggregateType<T extends InterviewQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewQuestion[P]>
      : GetScalarType<T[P], AggregateInterviewQuestion[P]>
  }




  export type InterviewQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewQuestionWhereInput
    orderBy?: InterviewQuestionOrderByWithAggregationInput | InterviewQuestionOrderByWithAggregationInput[]
    by: InterviewQuestionScalarFieldEnum[] | InterviewQuestionScalarFieldEnum
    having?: InterviewQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewQuestionCountAggregateInputType | true
    _avg?: InterviewQuestionAvgAggregateInputType
    _sum?: InterviewQuestionSumAggregateInputType
    _min?: InterviewQuestionMinAggregateInputType
    _max?: InterviewQuestionMaxAggregateInputType
  }

  export type InterviewQuestionGroupByOutputType = {
    id: string
    questionText: string
    normalizedQuestionText: string | null
    difficulty: $Enums.Difficulty
    sourceExperienceId: string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: InterviewQuestionCountAggregateOutputType | null
    _avg: InterviewQuestionAvgAggregateOutputType | null
    _sum: InterviewQuestionSumAggregateOutputType | null
    _min: InterviewQuestionMinAggregateOutputType | null
    _max: InterviewQuestionMaxAggregateOutputType | null
  }

  type GetInterviewQuestionGroupByPayload<T extends InterviewQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewQuestionGroupByOutputType[P]>
        }
      >
    >


  export type InterviewQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    normalizedQuestionText?: boolean
    difficulty?: boolean
    sourceExperienceId?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    provenance?: boolean
    confidence?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceExperience?: boolean | InterviewQuestion$sourceExperienceArgs<ExtArgs>
    topics?: boolean | InterviewQuestion$topicsArgs<ExtArgs>
    _count?: boolean | InterviewQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    normalizedQuestionText?: boolean
    difficulty?: boolean
    sourceExperienceId?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    provenance?: boolean
    confidence?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceExperience?: boolean | InterviewQuestion$sourceExperienceArgs<ExtArgs>
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    normalizedQuestionText?: boolean
    difficulty?: boolean
    sourceExperienceId?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    provenance?: boolean
    confidence?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceExperience?: boolean | InterviewQuestion$sourceExperienceArgs<ExtArgs>
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectScalar = {
    id?: boolean
    questionText?: boolean
    normalizedQuestionText?: boolean
    difficulty?: boolean
    sourceExperienceId?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    provenance?: boolean
    confidence?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterviewQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionText" | "normalizedQuestionText" | "difficulty" | "sourceExperienceId" | "dataSourceType" | "sourceName" | "provenance" | "confidence" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["interviewQuestion"]>
  export type InterviewQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceExperience?: boolean | InterviewQuestion$sourceExperienceArgs<ExtArgs>
    topics?: boolean | InterviewQuestion$topicsArgs<ExtArgs>
    _count?: boolean | InterviewQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceExperience?: boolean | InterviewQuestion$sourceExperienceArgs<ExtArgs>
  }
  export type InterviewQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceExperience?: boolean | InterviewQuestion$sourceExperienceArgs<ExtArgs>
  }

  export type $InterviewQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewQuestion"
    objects: {
      sourceExperience: Prisma.$InterviewExperiencePayload<ExtArgs> | null
      topics: Prisma.$QuestionTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionText: string
      normalizedQuestionText: string | null
      difficulty: $Enums.Difficulty
      sourceExperienceId: string | null
      dataSourceType: $Enums.DataSourceType
      sourceName: string
      provenance: string
      confidence: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interviewQuestion"]>
    composites: {}
  }

  type InterviewQuestionGetPayload<S extends boolean | null | undefined | InterviewQuestionDefaultArgs> = $Result.GetResult<Prisma.$InterviewQuestionPayload, S>

  type InterviewQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewQuestionCountAggregateInputType | true
    }

  export interface InterviewQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewQuestion'], meta: { name: 'InterviewQuestion' } }
    /**
     * Find zero or one InterviewQuestion that matches the filter.
     * @param {InterviewQuestionFindUniqueArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewQuestionFindUniqueArgs>(args: SelectSubset<T, InterviewQuestionFindUniqueArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewQuestionFindUniqueOrThrowArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindFirstArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewQuestionFindFirstArgs>(args?: SelectSubset<T, InterviewQuestionFindFirstArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindFirstOrThrowArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewQuestions
     * const interviewQuestions = await prisma.interviewQuestion.findMany()
     * 
     * // Get first 10 InterviewQuestions
     * const interviewQuestions = await prisma.interviewQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewQuestionFindManyArgs>(args?: SelectSubset<T, InterviewQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewQuestion.
     * @param {InterviewQuestionCreateArgs} args - Arguments to create a InterviewQuestion.
     * @example
     * // Create one InterviewQuestion
     * const InterviewQuestion = await prisma.interviewQuestion.create({
     *   data: {
     *     // ... data to create a InterviewQuestion
     *   }
     * })
     * 
     */
    create<T extends InterviewQuestionCreateArgs>(args: SelectSubset<T, InterviewQuestionCreateArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewQuestions.
     * @param {InterviewQuestionCreateManyArgs} args - Arguments to create many InterviewQuestions.
     * @example
     * // Create many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewQuestionCreateManyArgs>(args?: SelectSubset<T, InterviewQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewQuestions and returns the data saved in the database.
     * @param {InterviewQuestionCreateManyAndReturnArgs} args - Arguments to create many InterviewQuestions.
     * @example
     * // Create many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewQuestions and only return the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewQuestion.
     * @param {InterviewQuestionDeleteArgs} args - Arguments to delete one InterviewQuestion.
     * @example
     * // Delete one InterviewQuestion
     * const InterviewQuestion = await prisma.interviewQuestion.delete({
     *   where: {
     *     // ... filter to delete one InterviewQuestion
     *   }
     * })
     * 
     */
    delete<T extends InterviewQuestionDeleteArgs>(args: SelectSubset<T, InterviewQuestionDeleteArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewQuestion.
     * @param {InterviewQuestionUpdateArgs} args - Arguments to update one InterviewQuestion.
     * @example
     * // Update one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewQuestionUpdateArgs>(args: SelectSubset<T, InterviewQuestionUpdateArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewQuestions.
     * @param {InterviewQuestionDeleteManyArgs} args - Arguments to filter InterviewQuestions to delete.
     * @example
     * // Delete a few InterviewQuestions
     * const { count } = await prisma.interviewQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewQuestionDeleteManyArgs>(args?: SelectSubset<T, InterviewQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewQuestionUpdateManyArgs>(args: SelectSubset<T, InterviewQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewQuestions and returns the data updated in the database.
     * @param {InterviewQuestionUpdateManyAndReturnArgs} args - Arguments to update many InterviewQuestions.
     * @example
     * // Update many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewQuestions and only return the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewQuestion.
     * @param {InterviewQuestionUpsertArgs} args - Arguments to update or create a InterviewQuestion.
     * @example
     * // Update or create a InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.upsert({
     *   create: {
     *     // ... data to create a InterviewQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewQuestion we want to update
     *   }
     * })
     */
    upsert<T extends InterviewQuestionUpsertArgs>(args: SelectSubset<T, InterviewQuestionUpsertArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionCountArgs} args - Arguments to filter InterviewQuestions to count.
     * @example
     * // Count the number of InterviewQuestions
     * const count = await prisma.interviewQuestion.count({
     *   where: {
     *     // ... the filter for the InterviewQuestions we want to count
     *   }
     * })
    **/
    count<T extends InterviewQuestionCountArgs>(
      args?: Subset<T, InterviewQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewQuestionAggregateArgs>(args: Subset<T, InterviewQuestionAggregateArgs>): Prisma.PrismaPromise<GetInterviewQuestionAggregateType<T>>

    /**
     * Group by InterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionGroupByArgs} args - Group by arguments.
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
      T extends InterviewQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewQuestionGroupByArgs['orderBy'] }
        : { orderBy?: InterviewQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewQuestion model
   */
  readonly fields: InterviewQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceExperience<T extends InterviewQuestion$sourceExperienceArgs<ExtArgs> = {}>(args?: Subset<T, InterviewQuestion$sourceExperienceArgs<ExtArgs>>): Prisma__InterviewExperienceClient<$Result.GetResult<Prisma.$InterviewExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    topics<T extends InterviewQuestion$topicsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewQuestion$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InterviewQuestion model
   */
  interface InterviewQuestionFieldRefs {
    readonly id: FieldRef<"InterviewQuestion", 'String'>
    readonly questionText: FieldRef<"InterviewQuestion", 'String'>
    readonly normalizedQuestionText: FieldRef<"InterviewQuestion", 'String'>
    readonly difficulty: FieldRef<"InterviewQuestion", 'Difficulty'>
    readonly sourceExperienceId: FieldRef<"InterviewQuestion", 'String'>
    readonly dataSourceType: FieldRef<"InterviewQuestion", 'DataSourceType'>
    readonly sourceName: FieldRef<"InterviewQuestion", 'String'>
    readonly provenance: FieldRef<"InterviewQuestion", 'String'>
    readonly confidence: FieldRef<"InterviewQuestion", 'Float'>
    readonly metadata: FieldRef<"InterviewQuestion", 'Json'>
    readonly createdAt: FieldRef<"InterviewQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"InterviewQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewQuestion findUnique
   */
  export type InterviewQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion findUniqueOrThrow
   */
  export type InterviewQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion findFirst
   */
  export type InterviewQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewQuestion findFirstOrThrow
   */
  export type InterviewQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewQuestion findMany
   */
  export type InterviewQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewQuestions to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }

  /**
   * InterviewQuestion create
   */
  export type InterviewQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewQuestion.
     */
    data: XOR<InterviewQuestionCreateInput, InterviewQuestionUncheckedCreateInput>
  }

  /**
   * InterviewQuestion createMany
   */
  export type InterviewQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewQuestions.
     */
    data: InterviewQuestionCreateManyInput | InterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewQuestion createManyAndReturn
   */
  export type InterviewQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewQuestions.
     */
    data: InterviewQuestionCreateManyInput | InterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewQuestion update
   */
  export type InterviewQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewQuestion.
     */
    data: XOR<InterviewQuestionUpdateInput, InterviewQuestionUncheckedUpdateInput>
    /**
     * Choose, which InterviewQuestion to update.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion updateMany
   */
  export type InterviewQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewQuestions.
     */
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewQuestions to update
     */
    where?: InterviewQuestionWhereInput
    /**
     * Limit how many InterviewQuestions to update.
     */
    limit?: number
  }

  /**
   * InterviewQuestion updateManyAndReturn
   */
  export type InterviewQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * The data used to update InterviewQuestions.
     */
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewQuestions to update
     */
    where?: InterviewQuestionWhereInput
    /**
     * Limit how many InterviewQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewQuestion upsert
   */
  export type InterviewQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewQuestion to update in case it exists.
     */
    where: InterviewQuestionWhereUniqueInput
    /**
     * In case the InterviewQuestion found by the `where` argument doesn't exist, create a new InterviewQuestion with this data.
     */
    create: XOR<InterviewQuestionCreateInput, InterviewQuestionUncheckedCreateInput>
    /**
     * In case the InterviewQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewQuestionUpdateInput, InterviewQuestionUncheckedUpdateInput>
  }

  /**
   * InterviewQuestion delete
   */
  export type InterviewQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter which InterviewQuestion to delete.
     */
    where: InterviewQuestionWhereUniqueInput
  }

  /**
   * InterviewQuestion deleteMany
   */
  export type InterviewQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewQuestions to delete
     */
    where?: InterviewQuestionWhereInput
    /**
     * Limit how many InterviewQuestions to delete.
     */
    limit?: number
  }

  /**
   * InterviewQuestion.sourceExperience
   */
  export type InterviewQuestion$sourceExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewExperience
     */
    select?: InterviewExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewExperience
     */
    omit?: InterviewExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewExperienceInclude<ExtArgs> | null
    where?: InterviewExperienceWhereInput
  }

  /**
   * InterviewQuestion.topics
   */
  export type InterviewQuestion$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    where?: QuestionTopicWhereInput
    orderBy?: QuestionTopicOrderByWithRelationInput | QuestionTopicOrderByWithRelationInput[]
    cursor?: QuestionTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTopicScalarFieldEnum | QuestionTopicScalarFieldEnum[]
  }

  /**
   * InterviewQuestion without action
   */
  export type InterviewQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewQuestion
     */
    omit?: InterviewQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewQuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionTopic
   */

  export type AggregateQuestionTopic = {
    _count: QuestionTopicCountAggregateOutputType | null
    _min: QuestionTopicMinAggregateOutputType | null
    _max: QuestionTopicMaxAggregateOutputType | null
  }

  export type QuestionTopicMinAggregateOutputType = {
    questionId: string | null
    topicId: string | null
    createdAt: Date | null
  }

  export type QuestionTopicMaxAggregateOutputType = {
    questionId: string | null
    topicId: string | null
    createdAt: Date | null
  }

  export type QuestionTopicCountAggregateOutputType = {
    questionId: number
    topicId: number
    createdAt: number
    _all: number
  }


  export type QuestionTopicMinAggregateInputType = {
    questionId?: true
    topicId?: true
    createdAt?: true
  }

  export type QuestionTopicMaxAggregateInputType = {
    questionId?: true
    topicId?: true
    createdAt?: true
  }

  export type QuestionTopicCountAggregateInputType = {
    questionId?: true
    topicId?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTopic to aggregate.
     */
    where?: QuestionTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTopics to fetch.
     */
    orderBy?: QuestionTopicOrderByWithRelationInput | QuestionTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionTopics
    **/
    _count?: true | QuestionTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionTopicMaxAggregateInputType
  }

  export type GetQuestionTopicAggregateType<T extends QuestionTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionTopic[P]>
      : GetScalarType<T[P], AggregateQuestionTopic[P]>
  }




  export type QuestionTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTopicWhereInput
    orderBy?: QuestionTopicOrderByWithAggregationInput | QuestionTopicOrderByWithAggregationInput[]
    by: QuestionTopicScalarFieldEnum[] | QuestionTopicScalarFieldEnum
    having?: QuestionTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionTopicCountAggregateInputType | true
    _min?: QuestionTopicMinAggregateInputType
    _max?: QuestionTopicMaxAggregateInputType
  }

  export type QuestionTopicGroupByOutputType = {
    questionId: string
    topicId: string
    createdAt: Date
    _count: QuestionTopicCountAggregateOutputType | null
    _min: QuestionTopicMinAggregateOutputType | null
    _max: QuestionTopicMaxAggregateOutputType | null
  }

  type GetQuestionTopicGroupByPayload<T extends QuestionTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTopicGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTopicGroupByOutputType[P]>
        }
      >
    >


  export type QuestionTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    topicId?: boolean
    createdAt?: boolean
    question?: boolean | InterviewQuestionDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTopic"]>

  export type QuestionTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    topicId?: boolean
    createdAt?: boolean
    question?: boolean | InterviewQuestionDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTopic"]>

  export type QuestionTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    topicId?: boolean
    createdAt?: boolean
    question?: boolean | InterviewQuestionDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTopic"]>

  export type QuestionTopicSelectScalar = {
    questionId?: boolean
    topicId?: boolean
    createdAt?: boolean
  }

  export type QuestionTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questionId" | "topicId" | "createdAt", ExtArgs["result"]["questionTopic"]>
  export type QuestionTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | InterviewQuestionDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type QuestionTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | InterviewQuestionDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type QuestionTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | InterviewQuestionDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $QuestionTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionTopic"
    objects: {
      question: Prisma.$InterviewQuestionPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      questionId: string
      topicId: string
      createdAt: Date
    }, ExtArgs["result"]["questionTopic"]>
    composites: {}
  }

  type QuestionTopicGetPayload<S extends boolean | null | undefined | QuestionTopicDefaultArgs> = $Result.GetResult<Prisma.$QuestionTopicPayload, S>

  type QuestionTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionTopicCountAggregateInputType | true
    }

  export interface QuestionTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionTopic'], meta: { name: 'QuestionTopic' } }
    /**
     * Find zero or one QuestionTopic that matches the filter.
     * @param {QuestionTopicFindUniqueArgs} args - Arguments to find a QuestionTopic
     * @example
     * // Get one QuestionTopic
     * const questionTopic = await prisma.questionTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTopicFindUniqueArgs>(args: SelectSubset<T, QuestionTopicFindUniqueArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionTopicFindUniqueOrThrowArgs} args - Arguments to find a QuestionTopic
     * @example
     * // Get one QuestionTopic
     * const questionTopic = await prisma.questionTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicFindFirstArgs} args - Arguments to find a QuestionTopic
     * @example
     * // Get one QuestionTopic
     * const questionTopic = await prisma.questionTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTopicFindFirstArgs>(args?: SelectSubset<T, QuestionTopicFindFirstArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicFindFirstOrThrowArgs} args - Arguments to find a QuestionTopic
     * @example
     * // Get one QuestionTopic
     * const questionTopic = await prisma.questionTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTopics
     * const questionTopics = await prisma.questionTopic.findMany()
     * 
     * // Get first 10 QuestionTopics
     * const questionTopics = await prisma.questionTopic.findMany({ take: 10 })
     * 
     * // Only select the `questionId`
     * const questionTopicWithQuestionIdOnly = await prisma.questionTopic.findMany({ select: { questionId: true } })
     * 
     */
    findMany<T extends QuestionTopicFindManyArgs>(args?: SelectSubset<T, QuestionTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionTopic.
     * @param {QuestionTopicCreateArgs} args - Arguments to create a QuestionTopic.
     * @example
     * // Create one QuestionTopic
     * const QuestionTopic = await prisma.questionTopic.create({
     *   data: {
     *     // ... data to create a QuestionTopic
     *   }
     * })
     * 
     */
    create<T extends QuestionTopicCreateArgs>(args: SelectSubset<T, QuestionTopicCreateArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionTopics.
     * @param {QuestionTopicCreateManyArgs} args - Arguments to create many QuestionTopics.
     * @example
     * // Create many QuestionTopics
     * const questionTopic = await prisma.questionTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionTopicCreateManyArgs>(args?: SelectSubset<T, QuestionTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionTopics and returns the data saved in the database.
     * @param {QuestionTopicCreateManyAndReturnArgs} args - Arguments to create many QuestionTopics.
     * @example
     * // Create many QuestionTopics
     * const questionTopic = await prisma.questionTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionTopics and only return the `questionId`
     * const questionTopicWithQuestionIdOnly = await prisma.questionTopic.createManyAndReturn({
     *   select: { questionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionTopic.
     * @param {QuestionTopicDeleteArgs} args - Arguments to delete one QuestionTopic.
     * @example
     * // Delete one QuestionTopic
     * const QuestionTopic = await prisma.questionTopic.delete({
     *   where: {
     *     // ... filter to delete one QuestionTopic
     *   }
     * })
     * 
     */
    delete<T extends QuestionTopicDeleteArgs>(args: SelectSubset<T, QuestionTopicDeleteArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionTopic.
     * @param {QuestionTopicUpdateArgs} args - Arguments to update one QuestionTopic.
     * @example
     * // Update one QuestionTopic
     * const questionTopic = await prisma.questionTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionTopicUpdateArgs>(args: SelectSubset<T, QuestionTopicUpdateArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionTopics.
     * @param {QuestionTopicDeleteManyArgs} args - Arguments to filter QuestionTopics to delete.
     * @example
     * // Delete a few QuestionTopics
     * const { count } = await prisma.questionTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionTopicDeleteManyArgs>(args?: SelectSubset<T, QuestionTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTopics
     * const questionTopic = await prisma.questionTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionTopicUpdateManyArgs>(args: SelectSubset<T, QuestionTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTopics and returns the data updated in the database.
     * @param {QuestionTopicUpdateManyAndReturnArgs} args - Arguments to update many QuestionTopics.
     * @example
     * // Update many QuestionTopics
     * const questionTopic = await prisma.questionTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionTopics and only return the `questionId`
     * const questionTopicWithQuestionIdOnly = await prisma.questionTopic.updateManyAndReturn({
     *   select: { questionId: true },
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
    updateManyAndReturn<T extends QuestionTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionTopic.
     * @param {QuestionTopicUpsertArgs} args - Arguments to update or create a QuestionTopic.
     * @example
     * // Update or create a QuestionTopic
     * const questionTopic = await prisma.questionTopic.upsert({
     *   create: {
     *     // ... data to create a QuestionTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionTopic we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTopicUpsertArgs>(args: SelectSubset<T, QuestionTopicUpsertArgs<ExtArgs>>): Prisma__QuestionTopicClient<$Result.GetResult<Prisma.$QuestionTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicCountArgs} args - Arguments to filter QuestionTopics to count.
     * @example
     * // Count the number of QuestionTopics
     * const count = await prisma.questionTopic.count({
     *   where: {
     *     // ... the filter for the QuestionTopics we want to count
     *   }
     * })
    **/
    count<T extends QuestionTopicCountArgs>(
      args?: Subset<T, QuestionTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionTopicAggregateArgs>(args: Subset<T, QuestionTopicAggregateArgs>): Prisma.PrismaPromise<GetQuestionTopicAggregateType<T>>

    /**
     * Group by QuestionTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTopicGroupByArgs} args - Group by arguments.
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
      T extends QuestionTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTopicGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionTopic model
   */
  readonly fields: QuestionTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends InterviewQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewQuestionDefaultArgs<ExtArgs>>): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionTopic model
   */
  interface QuestionTopicFieldRefs {
    readonly questionId: FieldRef<"QuestionTopic", 'String'>
    readonly topicId: FieldRef<"QuestionTopic", 'String'>
    readonly createdAt: FieldRef<"QuestionTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionTopic findUnique
   */
  export type QuestionTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTopic to fetch.
     */
    where: QuestionTopicWhereUniqueInput
  }

  /**
   * QuestionTopic findUniqueOrThrow
   */
  export type QuestionTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTopic to fetch.
     */
    where: QuestionTopicWhereUniqueInput
  }

  /**
   * QuestionTopic findFirst
   */
  export type QuestionTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTopic to fetch.
     */
    where?: QuestionTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTopics to fetch.
     */
    orderBy?: QuestionTopicOrderByWithRelationInput | QuestionTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTopics.
     */
    cursor?: QuestionTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTopics.
     */
    distinct?: QuestionTopicScalarFieldEnum | QuestionTopicScalarFieldEnum[]
  }

  /**
   * QuestionTopic findFirstOrThrow
   */
  export type QuestionTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTopic to fetch.
     */
    where?: QuestionTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTopics to fetch.
     */
    orderBy?: QuestionTopicOrderByWithRelationInput | QuestionTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTopics.
     */
    cursor?: QuestionTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTopics.
     */
    distinct?: QuestionTopicScalarFieldEnum | QuestionTopicScalarFieldEnum[]
  }

  /**
   * QuestionTopic findMany
   */
  export type QuestionTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTopics to fetch.
     */
    where?: QuestionTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTopics to fetch.
     */
    orderBy?: QuestionTopicOrderByWithRelationInput | QuestionTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionTopics.
     */
    cursor?: QuestionTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTopics.
     */
    distinct?: QuestionTopicScalarFieldEnum | QuestionTopicScalarFieldEnum[]
  }

  /**
   * QuestionTopic create
   */
  export type QuestionTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionTopic.
     */
    data: XOR<QuestionTopicCreateInput, QuestionTopicUncheckedCreateInput>
  }

  /**
   * QuestionTopic createMany
   */
  export type QuestionTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionTopics.
     */
    data: QuestionTopicCreateManyInput | QuestionTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionTopic createManyAndReturn
   */
  export type QuestionTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionTopics.
     */
    data: QuestionTopicCreateManyInput | QuestionTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTopic update
   */
  export type QuestionTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionTopic.
     */
    data: XOR<QuestionTopicUpdateInput, QuestionTopicUncheckedUpdateInput>
    /**
     * Choose, which QuestionTopic to update.
     */
    where: QuestionTopicWhereUniqueInput
  }

  /**
   * QuestionTopic updateMany
   */
  export type QuestionTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionTopics.
     */
    data: XOR<QuestionTopicUpdateManyMutationInput, QuestionTopicUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTopics to update
     */
    where?: QuestionTopicWhereInput
    /**
     * Limit how many QuestionTopics to update.
     */
    limit?: number
  }

  /**
   * QuestionTopic updateManyAndReturn
   */
  export type QuestionTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * The data used to update QuestionTopics.
     */
    data: XOR<QuestionTopicUpdateManyMutationInput, QuestionTopicUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTopics to update
     */
    where?: QuestionTopicWhereInput
    /**
     * Limit how many QuestionTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTopic upsert
   */
  export type QuestionTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionTopic to update in case it exists.
     */
    where: QuestionTopicWhereUniqueInput
    /**
     * In case the QuestionTopic found by the `where` argument doesn't exist, create a new QuestionTopic with this data.
     */
    create: XOR<QuestionTopicCreateInput, QuestionTopicUncheckedCreateInput>
    /**
     * In case the QuestionTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTopicUpdateInput, QuestionTopicUncheckedUpdateInput>
  }

  /**
   * QuestionTopic delete
   */
  export type QuestionTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
    /**
     * Filter which QuestionTopic to delete.
     */
    where: QuestionTopicWhereUniqueInput
  }

  /**
   * QuestionTopic deleteMany
   */
  export type QuestionTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTopics to delete
     */
    where?: QuestionTopicWhereInput
    /**
     * Limit how many QuestionTopics to delete.
     */
    limit?: number
  }

  /**
   * QuestionTopic without action
   */
  export type QuestionTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTopic
     */
    select?: QuestionTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTopic
     */
    omit?: QuestionTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTopicInclude<ExtArgs> | null
  }


  /**
   * Model CompanyRoleTopic
   */

  export type AggregateCompanyRoleTopic = {
    _count: CompanyRoleTopicCountAggregateOutputType | null
    _avg: CompanyRoleTopicAvgAggregateOutputType | null
    _sum: CompanyRoleTopicSumAggregateOutputType | null
    _min: CompanyRoleTopicMinAggregateOutputType | null
    _max: CompanyRoleTopicMaxAggregateOutputType | null
  }

  export type CompanyRoleTopicAvgAggregateOutputType = {
    weight: Decimal | null
    confidence: number | null
  }

  export type CompanyRoleTopicSumAggregateOutputType = {
    weight: Decimal | null
    confidence: number | null
  }

  export type CompanyRoleTopicMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    topicId: string | null
    importance: $Enums.ImportanceLevel | null
    weight: Decimal | null
    dataSourceType: $Enums.DataSourceType | null
    sourceName: string | null
    sourceUrl: string | null
    provenance: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyRoleTopicMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    topicId: string | null
    importance: $Enums.ImportanceLevel | null
    weight: Decimal | null
    dataSourceType: $Enums.DataSourceType | null
    sourceName: string | null
    sourceUrl: string | null
    provenance: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyRoleTopicCountAggregateOutputType = {
    id: number
    roleId: number
    topicId: number
    importance: number
    weight: number
    dataSourceType: number
    sourceName: number
    sourceUrl: number
    provenance: number
    confidence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyRoleTopicAvgAggregateInputType = {
    weight?: true
    confidence?: true
  }

  export type CompanyRoleTopicSumAggregateInputType = {
    weight?: true
    confidence?: true
  }

  export type CompanyRoleTopicMinAggregateInputType = {
    id?: true
    roleId?: true
    topicId?: true
    importance?: true
    weight?: true
    dataSourceType?: true
    sourceName?: true
    sourceUrl?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyRoleTopicMaxAggregateInputType = {
    id?: true
    roleId?: true
    topicId?: true
    importance?: true
    weight?: true
    dataSourceType?: true
    sourceName?: true
    sourceUrl?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyRoleTopicCountAggregateInputType = {
    id?: true
    roleId?: true
    topicId?: true
    importance?: true
    weight?: true
    dataSourceType?: true
    sourceName?: true
    sourceUrl?: true
    provenance?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyRoleTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyRoleTopic to aggregate.
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRoleTopics to fetch.
     */
    orderBy?: CompanyRoleTopicOrderByWithRelationInput | CompanyRoleTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyRoleTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRoleTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRoleTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyRoleTopics
    **/
    _count?: true | CompanyRoleTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyRoleTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyRoleTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyRoleTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyRoleTopicMaxAggregateInputType
  }

  export type GetCompanyRoleTopicAggregateType<T extends CompanyRoleTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyRoleTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyRoleTopic[P]>
      : GetScalarType<T[P], AggregateCompanyRoleTopic[P]>
  }




  export type CompanyRoleTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyRoleTopicWhereInput
    orderBy?: CompanyRoleTopicOrderByWithAggregationInput | CompanyRoleTopicOrderByWithAggregationInput[]
    by: CompanyRoleTopicScalarFieldEnum[] | CompanyRoleTopicScalarFieldEnum
    having?: CompanyRoleTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyRoleTopicCountAggregateInputType | true
    _avg?: CompanyRoleTopicAvgAggregateInputType
    _sum?: CompanyRoleTopicSumAggregateInputType
    _min?: CompanyRoleTopicMinAggregateInputType
    _max?: CompanyRoleTopicMaxAggregateInputType
  }

  export type CompanyRoleTopicGroupByOutputType = {
    id: string
    roleId: string
    topicId: string
    importance: $Enums.ImportanceLevel
    weight: Decimal | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl: string | null
    provenance: string
    confidence: number
    createdAt: Date
    updatedAt: Date
    _count: CompanyRoleTopicCountAggregateOutputType | null
    _avg: CompanyRoleTopicAvgAggregateOutputType | null
    _sum: CompanyRoleTopicSumAggregateOutputType | null
    _min: CompanyRoleTopicMinAggregateOutputType | null
    _max: CompanyRoleTopicMaxAggregateOutputType | null
  }

  type GetCompanyRoleTopicGroupByPayload<T extends CompanyRoleTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyRoleTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyRoleTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyRoleTopicGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyRoleTopicGroupByOutputType[P]>
        }
      >
    >


  export type CompanyRoleTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    topicId?: boolean
    importance?: boolean
    weight?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyRoleTopic"]>

  export type CompanyRoleTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    topicId?: boolean
    importance?: boolean
    weight?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyRoleTopic"]>

  export type CompanyRoleTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    topicId?: boolean
    importance?: boolean
    weight?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyRoleTopic"]>

  export type CompanyRoleTopicSelectScalar = {
    id?: boolean
    roleId?: boolean
    topicId?: boolean
    importance?: boolean
    weight?: boolean
    dataSourceType?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    provenance?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyRoleTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "topicId" | "importance" | "weight" | "dataSourceType" | "sourceName" | "sourceUrl" | "provenance" | "confidence" | "createdAt" | "updatedAt", ExtArgs["result"]["companyRoleTopic"]>
  export type CompanyRoleTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type CompanyRoleTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type CompanyRoleTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $CompanyRoleTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyRoleTopic"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      topicId: string
      importance: $Enums.ImportanceLevel
      weight: Prisma.Decimal | null
      dataSourceType: $Enums.DataSourceType
      sourceName: string
      sourceUrl: string | null
      provenance: string
      confidence: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companyRoleTopic"]>
    composites: {}
  }

  type CompanyRoleTopicGetPayload<S extends boolean | null | undefined | CompanyRoleTopicDefaultArgs> = $Result.GetResult<Prisma.$CompanyRoleTopicPayload, S>

  type CompanyRoleTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyRoleTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyRoleTopicCountAggregateInputType | true
    }

  export interface CompanyRoleTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyRoleTopic'], meta: { name: 'CompanyRoleTopic' } }
    /**
     * Find zero or one CompanyRoleTopic that matches the filter.
     * @param {CompanyRoleTopicFindUniqueArgs} args - Arguments to find a CompanyRoleTopic
     * @example
     * // Get one CompanyRoleTopic
     * const companyRoleTopic = await prisma.companyRoleTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyRoleTopicFindUniqueArgs>(args: SelectSubset<T, CompanyRoleTopicFindUniqueArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyRoleTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyRoleTopicFindUniqueOrThrowArgs} args - Arguments to find a CompanyRoleTopic
     * @example
     * // Get one CompanyRoleTopic
     * const companyRoleTopic = await prisma.companyRoleTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyRoleTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyRoleTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyRoleTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicFindFirstArgs} args - Arguments to find a CompanyRoleTopic
     * @example
     * // Get one CompanyRoleTopic
     * const companyRoleTopic = await prisma.companyRoleTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyRoleTopicFindFirstArgs>(args?: SelectSubset<T, CompanyRoleTopicFindFirstArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyRoleTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicFindFirstOrThrowArgs} args - Arguments to find a CompanyRoleTopic
     * @example
     * // Get one CompanyRoleTopic
     * const companyRoleTopic = await prisma.companyRoleTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyRoleTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyRoleTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyRoleTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyRoleTopics
     * const companyRoleTopics = await prisma.companyRoleTopic.findMany()
     * 
     * // Get first 10 CompanyRoleTopics
     * const companyRoleTopics = await prisma.companyRoleTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyRoleTopicWithIdOnly = await prisma.companyRoleTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyRoleTopicFindManyArgs>(args?: SelectSubset<T, CompanyRoleTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyRoleTopic.
     * @param {CompanyRoleTopicCreateArgs} args - Arguments to create a CompanyRoleTopic.
     * @example
     * // Create one CompanyRoleTopic
     * const CompanyRoleTopic = await prisma.companyRoleTopic.create({
     *   data: {
     *     // ... data to create a CompanyRoleTopic
     *   }
     * })
     * 
     */
    create<T extends CompanyRoleTopicCreateArgs>(args: SelectSubset<T, CompanyRoleTopicCreateArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyRoleTopics.
     * @param {CompanyRoleTopicCreateManyArgs} args - Arguments to create many CompanyRoleTopics.
     * @example
     * // Create many CompanyRoleTopics
     * const companyRoleTopic = await prisma.companyRoleTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyRoleTopicCreateManyArgs>(args?: SelectSubset<T, CompanyRoleTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyRoleTopics and returns the data saved in the database.
     * @param {CompanyRoleTopicCreateManyAndReturnArgs} args - Arguments to create many CompanyRoleTopics.
     * @example
     * // Create many CompanyRoleTopics
     * const companyRoleTopic = await prisma.companyRoleTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyRoleTopics and only return the `id`
     * const companyRoleTopicWithIdOnly = await prisma.companyRoleTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyRoleTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyRoleTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyRoleTopic.
     * @param {CompanyRoleTopicDeleteArgs} args - Arguments to delete one CompanyRoleTopic.
     * @example
     * // Delete one CompanyRoleTopic
     * const CompanyRoleTopic = await prisma.companyRoleTopic.delete({
     *   where: {
     *     // ... filter to delete one CompanyRoleTopic
     *   }
     * })
     * 
     */
    delete<T extends CompanyRoleTopicDeleteArgs>(args: SelectSubset<T, CompanyRoleTopicDeleteArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyRoleTopic.
     * @param {CompanyRoleTopicUpdateArgs} args - Arguments to update one CompanyRoleTopic.
     * @example
     * // Update one CompanyRoleTopic
     * const companyRoleTopic = await prisma.companyRoleTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyRoleTopicUpdateArgs>(args: SelectSubset<T, CompanyRoleTopicUpdateArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyRoleTopics.
     * @param {CompanyRoleTopicDeleteManyArgs} args - Arguments to filter CompanyRoleTopics to delete.
     * @example
     * // Delete a few CompanyRoleTopics
     * const { count } = await prisma.companyRoleTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyRoleTopicDeleteManyArgs>(args?: SelectSubset<T, CompanyRoleTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyRoleTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyRoleTopics
     * const companyRoleTopic = await prisma.companyRoleTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyRoleTopicUpdateManyArgs>(args: SelectSubset<T, CompanyRoleTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyRoleTopics and returns the data updated in the database.
     * @param {CompanyRoleTopicUpdateManyAndReturnArgs} args - Arguments to update many CompanyRoleTopics.
     * @example
     * // Update many CompanyRoleTopics
     * const companyRoleTopic = await prisma.companyRoleTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyRoleTopics and only return the `id`
     * const companyRoleTopicWithIdOnly = await prisma.companyRoleTopic.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyRoleTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyRoleTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyRoleTopic.
     * @param {CompanyRoleTopicUpsertArgs} args - Arguments to update or create a CompanyRoleTopic.
     * @example
     * // Update or create a CompanyRoleTopic
     * const companyRoleTopic = await prisma.companyRoleTopic.upsert({
     *   create: {
     *     // ... data to create a CompanyRoleTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyRoleTopic we want to update
     *   }
     * })
     */
    upsert<T extends CompanyRoleTopicUpsertArgs>(args: SelectSubset<T, CompanyRoleTopicUpsertArgs<ExtArgs>>): Prisma__CompanyRoleTopicClient<$Result.GetResult<Prisma.$CompanyRoleTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyRoleTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicCountArgs} args - Arguments to filter CompanyRoleTopics to count.
     * @example
     * // Count the number of CompanyRoleTopics
     * const count = await prisma.companyRoleTopic.count({
     *   where: {
     *     // ... the filter for the CompanyRoleTopics we want to count
     *   }
     * })
    **/
    count<T extends CompanyRoleTopicCountArgs>(
      args?: Subset<T, CompanyRoleTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyRoleTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyRoleTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyRoleTopicAggregateArgs>(args: Subset<T, CompanyRoleTopicAggregateArgs>): Prisma.PrismaPromise<GetCompanyRoleTopicAggregateType<T>>

    /**
     * Group by CompanyRoleTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRoleTopicGroupByArgs} args - Group by arguments.
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
      T extends CompanyRoleTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyRoleTopicGroupByArgs['orderBy'] }
        : { orderBy?: CompanyRoleTopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyRoleTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyRoleTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyRoleTopic model
   */
  readonly fields: CompanyRoleTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyRoleTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyRoleTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyRoleTopic model
   */
  interface CompanyRoleTopicFieldRefs {
    readonly id: FieldRef<"CompanyRoleTopic", 'String'>
    readonly roleId: FieldRef<"CompanyRoleTopic", 'String'>
    readonly topicId: FieldRef<"CompanyRoleTopic", 'String'>
    readonly importance: FieldRef<"CompanyRoleTopic", 'ImportanceLevel'>
    readonly weight: FieldRef<"CompanyRoleTopic", 'Decimal'>
    readonly dataSourceType: FieldRef<"CompanyRoleTopic", 'DataSourceType'>
    readonly sourceName: FieldRef<"CompanyRoleTopic", 'String'>
    readonly sourceUrl: FieldRef<"CompanyRoleTopic", 'String'>
    readonly provenance: FieldRef<"CompanyRoleTopic", 'String'>
    readonly confidence: FieldRef<"CompanyRoleTopic", 'Float'>
    readonly createdAt: FieldRef<"CompanyRoleTopic", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyRoleTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyRoleTopic findUnique
   */
  export type CompanyRoleTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRoleTopic to fetch.
     */
    where: CompanyRoleTopicWhereUniqueInput
  }

  /**
   * CompanyRoleTopic findUniqueOrThrow
   */
  export type CompanyRoleTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRoleTopic to fetch.
     */
    where: CompanyRoleTopicWhereUniqueInput
  }

  /**
   * CompanyRoleTopic findFirst
   */
  export type CompanyRoleTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRoleTopic to fetch.
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRoleTopics to fetch.
     */
    orderBy?: CompanyRoleTopicOrderByWithRelationInput | CompanyRoleTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyRoleTopics.
     */
    cursor?: CompanyRoleTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRoleTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRoleTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyRoleTopics.
     */
    distinct?: CompanyRoleTopicScalarFieldEnum | CompanyRoleTopicScalarFieldEnum[]
  }

  /**
   * CompanyRoleTopic findFirstOrThrow
   */
  export type CompanyRoleTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRoleTopic to fetch.
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRoleTopics to fetch.
     */
    orderBy?: CompanyRoleTopicOrderByWithRelationInput | CompanyRoleTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyRoleTopics.
     */
    cursor?: CompanyRoleTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRoleTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRoleTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyRoleTopics.
     */
    distinct?: CompanyRoleTopicScalarFieldEnum | CompanyRoleTopicScalarFieldEnum[]
  }

  /**
   * CompanyRoleTopic findMany
   */
  export type CompanyRoleTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRoleTopics to fetch.
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRoleTopics to fetch.
     */
    orderBy?: CompanyRoleTopicOrderByWithRelationInput | CompanyRoleTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyRoleTopics.
     */
    cursor?: CompanyRoleTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRoleTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRoleTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyRoleTopics.
     */
    distinct?: CompanyRoleTopicScalarFieldEnum | CompanyRoleTopicScalarFieldEnum[]
  }

  /**
   * CompanyRoleTopic create
   */
  export type CompanyRoleTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyRoleTopic.
     */
    data: XOR<CompanyRoleTopicCreateInput, CompanyRoleTopicUncheckedCreateInput>
  }

  /**
   * CompanyRoleTopic createMany
   */
  export type CompanyRoleTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyRoleTopics.
     */
    data: CompanyRoleTopicCreateManyInput | CompanyRoleTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyRoleTopic createManyAndReturn
   */
  export type CompanyRoleTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyRoleTopics.
     */
    data: CompanyRoleTopicCreateManyInput | CompanyRoleTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyRoleTopic update
   */
  export type CompanyRoleTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyRoleTopic.
     */
    data: XOR<CompanyRoleTopicUpdateInput, CompanyRoleTopicUncheckedUpdateInput>
    /**
     * Choose, which CompanyRoleTopic to update.
     */
    where: CompanyRoleTopicWhereUniqueInput
  }

  /**
   * CompanyRoleTopic updateMany
   */
  export type CompanyRoleTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyRoleTopics.
     */
    data: XOR<CompanyRoleTopicUpdateManyMutationInput, CompanyRoleTopicUncheckedUpdateManyInput>
    /**
     * Filter which CompanyRoleTopics to update
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * Limit how many CompanyRoleTopics to update.
     */
    limit?: number
  }

  /**
   * CompanyRoleTopic updateManyAndReturn
   */
  export type CompanyRoleTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * The data used to update CompanyRoleTopics.
     */
    data: XOR<CompanyRoleTopicUpdateManyMutationInput, CompanyRoleTopicUncheckedUpdateManyInput>
    /**
     * Filter which CompanyRoleTopics to update
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * Limit how many CompanyRoleTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyRoleTopic upsert
   */
  export type CompanyRoleTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyRoleTopic to update in case it exists.
     */
    where: CompanyRoleTopicWhereUniqueInput
    /**
     * In case the CompanyRoleTopic found by the `where` argument doesn't exist, create a new CompanyRoleTopic with this data.
     */
    create: XOR<CompanyRoleTopicCreateInput, CompanyRoleTopicUncheckedCreateInput>
    /**
     * In case the CompanyRoleTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyRoleTopicUpdateInput, CompanyRoleTopicUncheckedUpdateInput>
  }

  /**
   * CompanyRoleTopic delete
   */
  export type CompanyRoleTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
    /**
     * Filter which CompanyRoleTopic to delete.
     */
    where: CompanyRoleTopicWhereUniqueInput
  }

  /**
   * CompanyRoleTopic deleteMany
   */
  export type CompanyRoleTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyRoleTopics to delete
     */
    where?: CompanyRoleTopicWhereInput
    /**
     * Limit how many CompanyRoleTopics to delete.
     */
    limit?: number
  }

  /**
   * CompanyRoleTopic without action
   */
  export type CompanyRoleTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRoleTopic
     */
    select?: CompanyRoleTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRoleTopic
     */
    omit?: CompanyRoleTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRoleTopicInclude<ExtArgs> | null
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
    email: 'email',
    displayName: 'displayName',
    passwordHash: 'passwordHash',
    provider: 'provider',
    providerId: 'providerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CandidateProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    headline: 'headline',
    bio: 'bio',
    education: 'education',
    graduationYear: 'graduationYear',
    experienceLevel: 'experienceLevel',
    targetRole: 'targetRole',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CandidateProfileScalarFieldEnum = (typeof CandidateProfileScalarFieldEnum)[keyof typeof CandidateProfileScalarFieldEnum]


  export const ProfileLinkScalarFieldEnum: {
    id: 'id',
    candidateProfileId: 'candidateProfileId',
    provider: 'provider',
    url: 'url',
    label: 'label',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileLinkScalarFieldEnum = (typeof ProfileLinkScalarFieldEnum)[keyof typeof ProfileLinkScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    website: 'website',
    logoUrl: 'logoUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    category: 'category',
    description: 'description',
    isActive: 'isActive',
    parentTopicId: 'parentTopicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const InterviewExperienceScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    roleId: 'roleId',
    interviewYear: 'interviewYear',
    roundType: 'roundType',
    outcome: 'outcome',
    experienceText: 'experienceText',
    dataSourceType: 'dataSourceType',
    sourceName: 'sourceName',
    sourceUrl: 'sourceUrl',
    provenance: 'provenance',
    confidence: 'confidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewExperienceScalarFieldEnum = (typeof InterviewExperienceScalarFieldEnum)[keyof typeof InterviewExperienceScalarFieldEnum]


  export const InterviewQuestionScalarFieldEnum: {
    id: 'id',
    questionText: 'questionText',
    normalizedQuestionText: 'normalizedQuestionText',
    difficulty: 'difficulty',
    sourceExperienceId: 'sourceExperienceId',
    dataSourceType: 'dataSourceType',
    sourceName: 'sourceName',
    provenance: 'provenance',
    confidence: 'confidence',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewQuestionScalarFieldEnum = (typeof InterviewQuestionScalarFieldEnum)[keyof typeof InterviewQuestionScalarFieldEnum]


  export const QuestionTopicScalarFieldEnum: {
    questionId: 'questionId',
    topicId: 'topicId',
    createdAt: 'createdAt'
  };

  export type QuestionTopicScalarFieldEnum = (typeof QuestionTopicScalarFieldEnum)[keyof typeof QuestionTopicScalarFieldEnum]


  export const CompanyRoleTopicScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    topicId: 'topicId',
    importance: 'importance',
    weight: 'weight',
    dataSourceType: 'dataSourceType',
    sourceName: 'sourceName',
    sourceUrl: 'sourceUrl',
    provenance: 'provenance',
    confidence: 'confidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyRoleTopicScalarFieldEnum = (typeof CompanyRoleTopicScalarFieldEnum)[keyof typeof CompanyRoleTopicScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'ProfileProvider'
   */
  export type EnumProfileProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileProvider'>
    


  /**
   * Reference to a field of type 'ProfileProvider[]'
   */
  export type ListEnumProfileProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileProvider[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InterviewRoundType'
   */
  export type EnumInterviewRoundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewRoundType'>
    


  /**
   * Reference to a field of type 'InterviewRoundType[]'
   */
  export type ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewRoundType[]'>
    


  /**
   * Reference to a field of type 'InterviewOutcome'
   */
  export type EnumInterviewOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewOutcome'>
    


  /**
   * Reference to a field of type 'InterviewOutcome[]'
   */
  export type ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewOutcome[]'>
    


  /**
   * Reference to a field of type 'DataSourceType'
   */
  export type EnumDataSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataSourceType'>
    


  /**
   * Reference to a field of type 'DataSourceType[]'
   */
  export type ListEnumDataSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataSourceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ImportanceLevel'
   */
  export type EnumImportanceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImportanceLevel'>
    


  /**
   * Reference to a field of type 'ImportanceLevel[]'
   */
  export type ListEnumImportanceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImportanceLevel[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    candidateProfile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    provider_providerId?: UserProviderProviderIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    candidateProfile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
  }, "id" | "email" | "provider_providerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CandidateProfileWhereInput = {
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    id?: UuidFilter<"CandidateProfile"> | string
    userId?: UuidFilter<"CandidateProfile"> | string
    headline?: StringNullableFilter<"CandidateProfile"> | string | null
    bio?: StringNullableFilter<"CandidateProfile"> | string | null
    education?: StringNullableFilter<"CandidateProfile"> | string | null
    graduationYear?: IntNullableFilter<"CandidateProfile"> | number | null
    experienceLevel?: StringNullableFilter<"CandidateProfile"> | string | null
    targetRole?: StringNullableFilter<"CandidateProfile"> | string | null
    createdAt?: DateTimeFilter<"CandidateProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CandidateProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    profileLinks?: ProfileLinkListRelationFilter
  }

  export type CandidateProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    profileLinks?: ProfileLinkOrderByRelationAggregateInput
  }

  export type CandidateProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    headline?: StringNullableFilter<"CandidateProfile"> | string | null
    bio?: StringNullableFilter<"CandidateProfile"> | string | null
    education?: StringNullableFilter<"CandidateProfile"> | string | null
    graduationYear?: IntNullableFilter<"CandidateProfile"> | number | null
    experienceLevel?: StringNullableFilter<"CandidateProfile"> | string | null
    targetRole?: StringNullableFilter<"CandidateProfile"> | string | null
    createdAt?: DateTimeFilter<"CandidateProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CandidateProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    profileLinks?: ProfileLinkListRelationFilter
  }, "id" | "userId">

  export type CandidateProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CandidateProfileCountOrderByAggregateInput
    _avg?: CandidateProfileAvgOrderByAggregateInput
    _max?: CandidateProfileMaxOrderByAggregateInput
    _min?: CandidateProfileMinOrderByAggregateInput
    _sum?: CandidateProfileSumOrderByAggregateInput
  }

  export type CandidateProfileScalarWhereWithAggregatesInput = {
    AND?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    OR?: CandidateProfileScalarWhereWithAggregatesInput[]
    NOT?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CandidateProfile"> | string
    userId?: UuidWithAggregatesFilter<"CandidateProfile"> | string
    headline?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    education?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    graduationYear?: IntNullableWithAggregatesFilter<"CandidateProfile"> | number | null
    experienceLevel?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    targetRole?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CandidateProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CandidateProfile"> | Date | string
  }

  export type ProfileLinkWhereInput = {
    AND?: ProfileLinkWhereInput | ProfileLinkWhereInput[]
    OR?: ProfileLinkWhereInput[]
    NOT?: ProfileLinkWhereInput | ProfileLinkWhereInput[]
    id?: UuidFilter<"ProfileLink"> | string
    candidateProfileId?: UuidFilter<"ProfileLink"> | string
    provider?: EnumProfileProviderFilter<"ProfileLink"> | $Enums.ProfileProvider
    url?: StringFilter<"ProfileLink"> | string
    label?: StringNullableFilter<"ProfileLink"> | string | null
    createdAt?: DateTimeFilter<"ProfileLink"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileLink"> | Date | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
  }

  export type ProfileLinkOrderByWithRelationInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    provider?: SortOrder
    url?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
  }

  export type ProfileLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    candidateProfileId_provider_url?: ProfileLinkCandidateProfileIdProviderUrlCompoundUniqueInput
    AND?: ProfileLinkWhereInput | ProfileLinkWhereInput[]
    OR?: ProfileLinkWhereInput[]
    NOT?: ProfileLinkWhereInput | ProfileLinkWhereInput[]
    candidateProfileId?: UuidFilter<"ProfileLink"> | string
    provider?: EnumProfileProviderFilter<"ProfileLink"> | $Enums.ProfileProvider
    url?: StringFilter<"ProfileLink"> | string
    label?: StringNullableFilter<"ProfileLink"> | string | null
    createdAt?: DateTimeFilter<"ProfileLink"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileLink"> | Date | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
  }, "id" | "candidateProfileId_provider_url">

  export type ProfileLinkOrderByWithAggregationInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    provider?: SortOrder
    url?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileLinkCountOrderByAggregateInput
    _max?: ProfileLinkMaxOrderByAggregateInput
    _min?: ProfileLinkMinOrderByAggregateInput
  }

  export type ProfileLinkScalarWhereWithAggregatesInput = {
    AND?: ProfileLinkScalarWhereWithAggregatesInput | ProfileLinkScalarWhereWithAggregatesInput[]
    OR?: ProfileLinkScalarWhereWithAggregatesInput[]
    NOT?: ProfileLinkScalarWhereWithAggregatesInput | ProfileLinkScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProfileLink"> | string
    candidateProfileId?: UuidWithAggregatesFilter<"ProfileLink"> | string
    provider?: EnumProfileProviderWithAggregatesFilter<"ProfileLink"> | $Enums.ProfileProvider
    url?: StringWithAggregatesFilter<"ProfileLink"> | string
    label?: StringNullableWithAggregatesFilter<"ProfileLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProfileLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileLink"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: UuidFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    roles?: RoleListRelationFilter
    interviewExperiences?: InterviewExperienceListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    interviewExperiences?: InterviewExperienceOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    description?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    roles?: RoleListRelationFilter
    interviewExperiences?: InterviewExperienceListRelationFilter
  }, "id" | "name" | "slug">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    slug?: StringWithAggregatesFilter<"Company"> | string
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isActive?: BoolWithAggregatesFilter<"Company"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: UuidFilter<"Role"> | string
    companyId?: UuidFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    slug?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    interviewExperiences?: InterviewExperienceListRelationFilter
    topicImportances?: CompanyRoleTopicListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    interviewExperiences?: InterviewExperienceOrderByRelationAggregateInput
    topicImportances?: CompanyRoleTopicOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_slug?: RoleCompanyIdSlugCompoundUniqueInput
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    companyId?: UuidFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    slug?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    interviewExperiences?: InterviewExperienceListRelationFilter
    topicImportances?: CompanyRoleTopicListRelationFilter
  }, "id" | "companyId_slug">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Role"> | string
    companyId?: UuidWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    slug?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    isActive?: BoolWithAggregatesFilter<"Role"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: UuidFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    slug?: StringFilter<"Topic"> | string
    category?: StringFilter<"Topic"> | string
    description?: StringNullableFilter<"Topic"> | string | null
    isActive?: BoolFilter<"Topic"> | boolean
    parentTopicId?: UuidNullableFilter<"Topic"> | string | null
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    parentTopic?: XOR<TopicNullableScalarRelationFilter, TopicWhereInput> | null
    childTopics?: TopicListRelationFilter
    questionTopics?: QuestionTopicListRelationFilter
    roleImportances?: CompanyRoleTopicListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    parentTopicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentTopic?: TopicOrderByWithRelationInput
    childTopics?: TopicOrderByRelationAggregateInput
    questionTopics?: QuestionTopicOrderByRelationAggregateInput
    roleImportances?: CompanyRoleTopicOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    category?: StringFilter<"Topic"> | string
    description?: StringNullableFilter<"Topic"> | string | null
    isActive?: BoolFilter<"Topic"> | boolean
    parentTopicId?: UuidNullableFilter<"Topic"> | string | null
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    parentTopic?: XOR<TopicNullableScalarRelationFilter, TopicWhereInput> | null
    childTopics?: TopicListRelationFilter
    questionTopics?: QuestionTopicListRelationFilter
    roleImportances?: CompanyRoleTopicListRelationFilter
  }, "id" | "name" | "slug">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    parentTopicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Topic"> | string
    name?: StringWithAggregatesFilter<"Topic"> | string
    slug?: StringWithAggregatesFilter<"Topic"> | string
    category?: StringWithAggregatesFilter<"Topic"> | string
    description?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    isActive?: BoolWithAggregatesFilter<"Topic"> | boolean
    parentTopicId?: UuidNullableWithAggregatesFilter<"Topic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type InterviewExperienceWhereInput = {
    AND?: InterviewExperienceWhereInput | InterviewExperienceWhereInput[]
    OR?: InterviewExperienceWhereInput[]
    NOT?: InterviewExperienceWhereInput | InterviewExperienceWhereInput[]
    id?: UuidFilter<"InterviewExperience"> | string
    companyId?: UuidFilter<"InterviewExperience"> | string
    roleId?: UuidFilter<"InterviewExperience"> | string
    interviewYear?: IntFilter<"InterviewExperience"> | number
    roundType?: EnumInterviewRoundTypeFilter<"InterviewExperience"> | $Enums.InterviewRoundType
    outcome?: EnumInterviewOutcomeNullableFilter<"InterviewExperience"> | $Enums.InterviewOutcome | null
    experienceText?: StringFilter<"InterviewExperience"> | string
    dataSourceType?: EnumDataSourceTypeFilter<"InterviewExperience"> | $Enums.DataSourceType
    sourceName?: StringFilter<"InterviewExperience"> | string
    sourceUrl?: StringNullableFilter<"InterviewExperience"> | string | null
    provenance?: StringFilter<"InterviewExperience"> | string
    confidence?: FloatFilter<"InterviewExperience"> | number
    createdAt?: DateTimeFilter<"InterviewExperience"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewExperience"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    questions?: InterviewQuestionListRelationFilter
  }

  export type InterviewExperienceOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    roleId?: SortOrder
    interviewYear?: SortOrder
    roundType?: SortOrder
    outcome?: SortOrderInput | SortOrder
    experienceText?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    questions?: InterviewQuestionOrderByRelationAggregateInput
  }

  export type InterviewExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewExperienceWhereInput | InterviewExperienceWhereInput[]
    OR?: InterviewExperienceWhereInput[]
    NOT?: InterviewExperienceWhereInput | InterviewExperienceWhereInput[]
    companyId?: UuidFilter<"InterviewExperience"> | string
    roleId?: UuidFilter<"InterviewExperience"> | string
    interviewYear?: IntFilter<"InterviewExperience"> | number
    roundType?: EnumInterviewRoundTypeFilter<"InterviewExperience"> | $Enums.InterviewRoundType
    outcome?: EnumInterviewOutcomeNullableFilter<"InterviewExperience"> | $Enums.InterviewOutcome | null
    experienceText?: StringFilter<"InterviewExperience"> | string
    dataSourceType?: EnumDataSourceTypeFilter<"InterviewExperience"> | $Enums.DataSourceType
    sourceName?: StringFilter<"InterviewExperience"> | string
    sourceUrl?: StringNullableFilter<"InterviewExperience"> | string | null
    provenance?: StringFilter<"InterviewExperience"> | string
    confidence?: FloatFilter<"InterviewExperience"> | number
    createdAt?: DateTimeFilter<"InterviewExperience"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewExperience"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    questions?: InterviewQuestionListRelationFilter
  }, "id">

  export type InterviewExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    roleId?: SortOrder
    interviewYear?: SortOrder
    roundType?: SortOrder
    outcome?: SortOrderInput | SortOrder
    experienceText?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewExperienceCountOrderByAggregateInput
    _avg?: InterviewExperienceAvgOrderByAggregateInput
    _max?: InterviewExperienceMaxOrderByAggregateInput
    _min?: InterviewExperienceMinOrderByAggregateInput
    _sum?: InterviewExperienceSumOrderByAggregateInput
  }

  export type InterviewExperienceScalarWhereWithAggregatesInput = {
    AND?: InterviewExperienceScalarWhereWithAggregatesInput | InterviewExperienceScalarWhereWithAggregatesInput[]
    OR?: InterviewExperienceScalarWhereWithAggregatesInput[]
    NOT?: InterviewExperienceScalarWhereWithAggregatesInput | InterviewExperienceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InterviewExperience"> | string
    companyId?: UuidWithAggregatesFilter<"InterviewExperience"> | string
    roleId?: UuidWithAggregatesFilter<"InterviewExperience"> | string
    interviewYear?: IntWithAggregatesFilter<"InterviewExperience"> | number
    roundType?: EnumInterviewRoundTypeWithAggregatesFilter<"InterviewExperience"> | $Enums.InterviewRoundType
    outcome?: EnumInterviewOutcomeNullableWithAggregatesFilter<"InterviewExperience"> | $Enums.InterviewOutcome | null
    experienceText?: StringWithAggregatesFilter<"InterviewExperience"> | string
    dataSourceType?: EnumDataSourceTypeWithAggregatesFilter<"InterviewExperience"> | $Enums.DataSourceType
    sourceName?: StringWithAggregatesFilter<"InterviewExperience"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"InterviewExperience"> | string | null
    provenance?: StringWithAggregatesFilter<"InterviewExperience"> | string
    confidence?: FloatWithAggregatesFilter<"InterviewExperience"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InterviewExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InterviewExperience"> | Date | string
  }

  export type InterviewQuestionWhereInput = {
    AND?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    OR?: InterviewQuestionWhereInput[]
    NOT?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    id?: UuidFilter<"InterviewQuestion"> | string
    questionText?: StringFilter<"InterviewQuestion"> | string
    normalizedQuestionText?: StringNullableFilter<"InterviewQuestion"> | string | null
    difficulty?: EnumDifficultyFilter<"InterviewQuestion"> | $Enums.Difficulty
    sourceExperienceId?: UuidNullableFilter<"InterviewQuestion"> | string | null
    dataSourceType?: EnumDataSourceTypeFilter<"InterviewQuestion"> | $Enums.DataSourceType
    sourceName?: StringFilter<"InterviewQuestion"> | string
    provenance?: StringFilter<"InterviewQuestion"> | string
    confidence?: FloatFilter<"InterviewQuestion"> | number
    metadata?: JsonNullableFilter<"InterviewQuestion">
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    sourceExperience?: XOR<InterviewExperienceNullableScalarRelationFilter, InterviewExperienceWhereInput> | null
    topics?: QuestionTopicListRelationFilter
  }

  export type InterviewQuestionOrderByWithRelationInput = {
    id?: SortOrder
    questionText?: SortOrder
    normalizedQuestionText?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    sourceExperienceId?: SortOrderInput | SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceExperience?: InterviewExperienceOrderByWithRelationInput
    topics?: QuestionTopicOrderByRelationAggregateInput
  }

  export type InterviewQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    OR?: InterviewQuestionWhereInput[]
    NOT?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    questionText?: StringFilter<"InterviewQuestion"> | string
    normalizedQuestionText?: StringNullableFilter<"InterviewQuestion"> | string | null
    difficulty?: EnumDifficultyFilter<"InterviewQuestion"> | $Enums.Difficulty
    sourceExperienceId?: UuidNullableFilter<"InterviewQuestion"> | string | null
    dataSourceType?: EnumDataSourceTypeFilter<"InterviewQuestion"> | $Enums.DataSourceType
    sourceName?: StringFilter<"InterviewQuestion"> | string
    provenance?: StringFilter<"InterviewQuestion"> | string
    confidence?: FloatFilter<"InterviewQuestion"> | number
    metadata?: JsonNullableFilter<"InterviewQuestion">
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    sourceExperience?: XOR<InterviewExperienceNullableScalarRelationFilter, InterviewExperienceWhereInput> | null
    topics?: QuestionTopicListRelationFilter
  }, "id">

  export type InterviewQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    questionText?: SortOrder
    normalizedQuestionText?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    sourceExperienceId?: SortOrderInput | SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewQuestionCountOrderByAggregateInput
    _avg?: InterviewQuestionAvgOrderByAggregateInput
    _max?: InterviewQuestionMaxOrderByAggregateInput
    _min?: InterviewQuestionMinOrderByAggregateInput
    _sum?: InterviewQuestionSumOrderByAggregateInput
  }

  export type InterviewQuestionScalarWhereWithAggregatesInput = {
    AND?: InterviewQuestionScalarWhereWithAggregatesInput | InterviewQuestionScalarWhereWithAggregatesInput[]
    OR?: InterviewQuestionScalarWhereWithAggregatesInput[]
    NOT?: InterviewQuestionScalarWhereWithAggregatesInput | InterviewQuestionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InterviewQuestion"> | string
    questionText?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    normalizedQuestionText?: StringNullableWithAggregatesFilter<"InterviewQuestion"> | string | null
    difficulty?: EnumDifficultyWithAggregatesFilter<"InterviewQuestion"> | $Enums.Difficulty
    sourceExperienceId?: UuidNullableWithAggregatesFilter<"InterviewQuestion"> | string | null
    dataSourceType?: EnumDataSourceTypeWithAggregatesFilter<"InterviewQuestion"> | $Enums.DataSourceType
    sourceName?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    provenance?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    confidence?: FloatWithAggregatesFilter<"InterviewQuestion"> | number
    metadata?: JsonNullableWithAggregatesFilter<"InterviewQuestion">
    createdAt?: DateTimeWithAggregatesFilter<"InterviewQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InterviewQuestion"> | Date | string
  }

  export type QuestionTopicWhereInput = {
    AND?: QuestionTopicWhereInput | QuestionTopicWhereInput[]
    OR?: QuestionTopicWhereInput[]
    NOT?: QuestionTopicWhereInput | QuestionTopicWhereInput[]
    questionId?: UuidFilter<"QuestionTopic"> | string
    topicId?: UuidFilter<"QuestionTopic"> | string
    createdAt?: DateTimeFilter<"QuestionTopic"> | Date | string
    question?: XOR<InterviewQuestionScalarRelationFilter, InterviewQuestionWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type QuestionTopicOrderByWithRelationInput = {
    questionId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    question?: InterviewQuestionOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type QuestionTopicWhereUniqueInput = Prisma.AtLeast<{
    questionId_topicId?: QuestionTopicQuestionIdTopicIdCompoundUniqueInput
    AND?: QuestionTopicWhereInput | QuestionTopicWhereInput[]
    OR?: QuestionTopicWhereInput[]
    NOT?: QuestionTopicWhereInput | QuestionTopicWhereInput[]
    questionId?: UuidFilter<"QuestionTopic"> | string
    topicId?: UuidFilter<"QuestionTopic"> | string
    createdAt?: DateTimeFilter<"QuestionTopic"> | Date | string
    question?: XOR<InterviewQuestionScalarRelationFilter, InterviewQuestionWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "questionId_topicId">

  export type QuestionTopicOrderByWithAggregationInput = {
    questionId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionTopicCountOrderByAggregateInput
    _max?: QuestionTopicMaxOrderByAggregateInput
    _min?: QuestionTopicMinOrderByAggregateInput
  }

  export type QuestionTopicScalarWhereWithAggregatesInput = {
    AND?: QuestionTopicScalarWhereWithAggregatesInput | QuestionTopicScalarWhereWithAggregatesInput[]
    OR?: QuestionTopicScalarWhereWithAggregatesInput[]
    NOT?: QuestionTopicScalarWhereWithAggregatesInput | QuestionTopicScalarWhereWithAggregatesInput[]
    questionId?: UuidWithAggregatesFilter<"QuestionTopic"> | string
    topicId?: UuidWithAggregatesFilter<"QuestionTopic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuestionTopic"> | Date | string
  }

  export type CompanyRoleTopicWhereInput = {
    AND?: CompanyRoleTopicWhereInput | CompanyRoleTopicWhereInput[]
    OR?: CompanyRoleTopicWhereInput[]
    NOT?: CompanyRoleTopicWhereInput | CompanyRoleTopicWhereInput[]
    id?: UuidFilter<"CompanyRoleTopic"> | string
    roleId?: UuidFilter<"CompanyRoleTopic"> | string
    topicId?: UuidFilter<"CompanyRoleTopic"> | string
    importance?: EnumImportanceLevelFilter<"CompanyRoleTopic"> | $Enums.ImportanceLevel
    weight?: DecimalNullableFilter<"CompanyRoleTopic"> | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFilter<"CompanyRoleTopic"> | $Enums.DataSourceType
    sourceName?: StringFilter<"CompanyRoleTopic"> | string
    sourceUrl?: StringNullableFilter<"CompanyRoleTopic"> | string | null
    provenance?: StringFilter<"CompanyRoleTopic"> | string
    confidence?: FloatFilter<"CompanyRoleTopic"> | number
    createdAt?: DateTimeFilter<"CompanyRoleTopic"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyRoleTopic"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type CompanyRoleTopicOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    topicId?: SortOrder
    importance?: SortOrder
    weight?: SortOrderInput | SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type CompanyRoleTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_topicId?: CompanyRoleTopicRoleIdTopicIdCompoundUniqueInput
    AND?: CompanyRoleTopicWhereInput | CompanyRoleTopicWhereInput[]
    OR?: CompanyRoleTopicWhereInput[]
    NOT?: CompanyRoleTopicWhereInput | CompanyRoleTopicWhereInput[]
    roleId?: UuidFilter<"CompanyRoleTopic"> | string
    topicId?: UuidFilter<"CompanyRoleTopic"> | string
    importance?: EnumImportanceLevelFilter<"CompanyRoleTopic"> | $Enums.ImportanceLevel
    weight?: DecimalNullableFilter<"CompanyRoleTopic"> | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFilter<"CompanyRoleTopic"> | $Enums.DataSourceType
    sourceName?: StringFilter<"CompanyRoleTopic"> | string
    sourceUrl?: StringNullableFilter<"CompanyRoleTopic"> | string | null
    provenance?: StringFilter<"CompanyRoleTopic"> | string
    confidence?: FloatFilter<"CompanyRoleTopic"> | number
    createdAt?: DateTimeFilter<"CompanyRoleTopic"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyRoleTopic"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id" | "roleId_topicId">

  export type CompanyRoleTopicOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    topicId?: SortOrder
    importance?: SortOrder
    weight?: SortOrderInput | SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyRoleTopicCountOrderByAggregateInput
    _avg?: CompanyRoleTopicAvgOrderByAggregateInput
    _max?: CompanyRoleTopicMaxOrderByAggregateInput
    _min?: CompanyRoleTopicMinOrderByAggregateInput
    _sum?: CompanyRoleTopicSumOrderByAggregateInput
  }

  export type CompanyRoleTopicScalarWhereWithAggregatesInput = {
    AND?: CompanyRoleTopicScalarWhereWithAggregatesInput | CompanyRoleTopicScalarWhereWithAggregatesInput[]
    OR?: CompanyRoleTopicScalarWhereWithAggregatesInput[]
    NOT?: CompanyRoleTopicScalarWhereWithAggregatesInput | CompanyRoleTopicScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CompanyRoleTopic"> | string
    roleId?: UuidWithAggregatesFilter<"CompanyRoleTopic"> | string
    topicId?: UuidWithAggregatesFilter<"CompanyRoleTopic"> | string
    importance?: EnumImportanceLevelWithAggregatesFilter<"CompanyRoleTopic"> | $Enums.ImportanceLevel
    weight?: DecimalNullableWithAggregatesFilter<"CompanyRoleTopic"> | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeWithAggregatesFilter<"CompanyRoleTopic"> | $Enums.DataSourceType
    sourceName?: StringWithAggregatesFilter<"CompanyRoleTopic"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"CompanyRoleTopic"> | string | null
    provenance?: StringWithAggregatesFilter<"CompanyRoleTopic"> | string
    confidence?: FloatWithAggregatesFilter<"CompanyRoleTopic"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompanyRoleTopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyRoleTopic"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    displayName?: string | null
    passwordHash?: string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateProfile?: CandidateProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    displayName?: string | null
    passwordHash?: string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateProfile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateProfile?: CandidateProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateProfile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    displayName?: string | null
    passwordHash?: string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileCreateInput = {
    id?: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCandidateProfileInput
    profileLinks?: ProfileLinkCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateInput = {
    id?: string
    userId: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileLinks?: ProfileLinkUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    profileLinks?: ProfileLinkUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileLinks?: ProfileLinkUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileCreateManyInput = {
    id?: string
    userId: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileLinkCreateInput = {
    id?: string
    provider: $Enums.ProfileProvider
    url: string
    label?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    candidateProfile: CandidateProfileCreateNestedOneWithoutProfileLinksInput
  }

  export type ProfileLinkUncheckedCreateInput = {
    id?: string
    candidateProfileId: string
    provider: $Enums.ProfileProvider
    url: string
    label?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutProfileLinksNestedInput
  }

  export type ProfileLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileLinkCreateManyInput = {
    id?: string
    candidateProfileId: string
    provider: $Enums.ProfileProvider
    url: string
    label?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutCompanyInput
    interviewExperiences?: InterviewExperienceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutCompanyInput
    interviewExperiences?: InterviewExperienceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutCompanyNestedInput
    interviewExperiences?: InterviewExperienceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutCompanyNestedInput
    interviewExperiences?: InterviewExperienceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRolesInput
    interviewExperiences?: InterviewExperienceCreateNestedManyWithoutRoleInput
    topicImportances?: CompanyRoleTopicCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewExperiences?: InterviewExperienceUncheckedCreateNestedManyWithoutRoleInput
    topicImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRolesNestedInput
    interviewExperiences?: InterviewExperienceUpdateManyWithoutRoleNestedInput
    topicImportances?: CompanyRoleTopicUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewExperiences?: InterviewExperienceUncheckedUpdateManyWithoutRoleNestedInput
    topicImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parentTopic?: TopicCreateNestedOneWithoutChildTopicsInput
    childTopics?: TopicCreateNestedManyWithoutParentTopicInput
    questionTopics?: QuestionTopicCreateNestedManyWithoutTopicInput
    roleImportances?: CompanyRoleTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    parentTopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childTopics?: TopicUncheckedCreateNestedManyWithoutParentTopicInput
    questionTopics?: QuestionTopicUncheckedCreateNestedManyWithoutTopicInput
    roleImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTopic?: TopicUpdateOneWithoutChildTopicsNestedInput
    childTopics?: TopicUpdateManyWithoutParentTopicNestedInput
    questionTopics?: QuestionTopicUpdateManyWithoutTopicNestedInput
    roleImportances?: CompanyRoleTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childTopics?: TopicUncheckedUpdateManyWithoutParentTopicNestedInput
    questionTopics?: QuestionTopicUncheckedUpdateManyWithoutTopicNestedInput
    roleImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    parentTopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewExperienceCreateInput = {
    id?: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutInterviewExperiencesInput
    role: RoleCreateNestedOneWithoutInterviewExperiencesInput
    questions?: InterviewQuestionCreateNestedManyWithoutSourceExperienceInput
  }

  export type InterviewExperienceUncheckedCreateInput = {
    id?: string
    companyId: string
    roleId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: InterviewQuestionUncheckedCreateNestedManyWithoutSourceExperienceInput
  }

  export type InterviewExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutInterviewExperiencesNestedInput
    role?: RoleUpdateOneRequiredWithoutInterviewExperiencesNestedInput
    questions?: InterviewQuestionUpdateManyWithoutSourceExperienceNestedInput
  }

  export type InterviewExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: InterviewQuestionUncheckedUpdateManyWithoutSourceExperienceNestedInput
  }

  export type InterviewExperienceCreateManyInput = {
    id?: string
    companyId: string
    roleId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceExperience?: InterviewExperienceCreateNestedOneWithoutQuestionsInput
    topics?: QuestionTopicCreateNestedManyWithoutQuestionInput
  }

  export type InterviewQuestionUncheckedCreateInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    sourceExperienceId?: string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: QuestionTopicUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type InterviewQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceExperience?: InterviewExperienceUpdateOneWithoutQuestionsNestedInput
    topics?: QuestionTopicUpdateManyWithoutQuestionNestedInput
  }

  export type InterviewQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sourceExperienceId?: NullableStringFieldUpdateOperationsInput | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: QuestionTopicUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type InterviewQuestionCreateManyInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    sourceExperienceId?: string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sourceExperienceId?: NullableStringFieldUpdateOperationsInput | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicCreateInput = {
    createdAt?: Date | string
    question: InterviewQuestionCreateNestedOneWithoutTopicsInput
    topic: TopicCreateNestedOneWithoutQuestionTopicsInput
  }

  export type QuestionTopicUncheckedCreateInput = {
    questionId: string
    topicId: string
    createdAt?: Date | string
  }

  export type QuestionTopicUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: InterviewQuestionUpdateOneRequiredWithoutTopicsNestedInput
    topic?: TopicUpdateOneRequiredWithoutQuestionTopicsNestedInput
  }

  export type QuestionTopicUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicCreateManyInput = {
    questionId: string
    topicId: string
    createdAt?: Date | string
  }

  export type QuestionTopicUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicCreateInput = {
    id?: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutTopicImportancesInput
    topic: TopicCreateNestedOneWithoutRoleImportancesInput
  }

  export type CompanyRoleTopicUncheckedCreateInput = {
    id?: string
    roleId: string
    topicId: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyRoleTopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutTopicImportancesNestedInput
    topic?: TopicUpdateOneRequiredWithoutRoleImportancesNestedInput
  }

  export type CompanyRoleTopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicCreateManyInput = {
    id?: string
    roleId: string
    topicId: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyRoleTopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CandidateProfileNullableScalarRelationFilter = {
    is?: CandidateProfileWhereInput | null
    isNot?: CandidateProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileLinkListRelationFilter = {
    every?: ProfileLinkWhereInput
    some?: ProfileLinkWhereInput
    none?: ProfileLinkWhereInput
  }

  export type ProfileLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    education?: SortOrder
    graduationYear?: SortOrder
    experienceLevel?: SortOrder
    targetRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateProfileAvgOrderByAggregateInput = {
    graduationYear?: SortOrder
  }

  export type CandidateProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    education?: SortOrder
    graduationYear?: SortOrder
    experienceLevel?: SortOrder
    targetRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    education?: SortOrder
    graduationYear?: SortOrder
    experienceLevel?: SortOrder
    targetRole?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateProfileSumOrderByAggregateInput = {
    graduationYear?: SortOrder
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

  export type EnumProfileProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileProvider | EnumProfileProviderFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileProviderFilter<$PrismaModel> | $Enums.ProfileProvider
  }

  export type CandidateProfileScalarRelationFilter = {
    is?: CandidateProfileWhereInput
    isNot?: CandidateProfileWhereInput
  }

  export type ProfileLinkCandidateProfileIdProviderUrlCompoundUniqueInput = {
    candidateProfileId: string
    provider: $Enums.ProfileProvider
    url: string
  }

  export type ProfileLinkCountOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    provider?: SortOrder
    url?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    provider?: SortOrder
    url?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileLinkMinOrderByAggregateInput = {
    id?: SortOrder
    candidateProfileId?: SortOrder
    provider?: SortOrder
    url?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProfileProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileProvider | EnumProfileProviderFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileProviderWithAggregatesFilter<$PrismaModel> | $Enums.ProfileProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfileProviderFilter<$PrismaModel>
    _max?: NestedEnumProfileProviderFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type InterviewExperienceListRelationFilter = {
    every?: InterviewExperienceWhereInput
    some?: InterviewExperienceWhereInput
    none?: InterviewExperienceWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanyRoleTopicListRelationFilter = {
    every?: CompanyRoleTopicWhereInput
    some?: CompanyRoleTopicWhereInput
    none?: CompanyRoleTopicWhereInput
  }

  export type CompanyRoleTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCompanyIdSlugCompoundUniqueInput = {
    companyId: string
    slug: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type TopicNullableScalarRelationFilter = {
    is?: TopicWhereInput | null
    isNot?: TopicWhereInput | null
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type QuestionTopicListRelationFilter = {
    every?: QuestionTopicWhereInput
    some?: QuestionTopicWhereInput
    none?: QuestionTopicWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    parentTopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    parentTopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    parentTopicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumInterviewRoundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRoundType | EnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewRoundTypeFilter<$PrismaModel> | $Enums.InterviewRoundType
  }

  export type EnumInterviewOutcomeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewOutcome | EnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInterviewOutcomeNullableFilter<$PrismaModel> | $Enums.InterviewOutcome | null
  }

  export type EnumDataSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeFilter<$PrismaModel> | $Enums.DataSourceType
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type InterviewQuestionListRelationFilter = {
    every?: InterviewQuestionWhereInput
    some?: InterviewQuestionWhereInput
    none?: InterviewQuestionWhereInput
  }

  export type InterviewQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roleId?: SortOrder
    interviewYear?: SortOrder
    roundType?: SortOrder
    outcome?: SortOrder
    experienceText?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewExperienceAvgOrderByAggregateInput = {
    interviewYear?: SortOrder
    confidence?: SortOrder
  }

  export type InterviewExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roleId?: SortOrder
    interviewYear?: SortOrder
    roundType?: SortOrder
    outcome?: SortOrder
    experienceText?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roleId?: SortOrder
    interviewYear?: SortOrder
    roundType?: SortOrder
    outcome?: SortOrder
    experienceText?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewExperienceSumOrderByAggregateInput = {
    interviewYear?: SortOrder
    confidence?: SortOrder
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

  export type EnumInterviewRoundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRoundType | EnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewRoundTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewRoundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewRoundTypeFilter<$PrismaModel>
    _max?: NestedEnumInterviewRoundTypeFilter<$PrismaModel>
  }

  export type EnumInterviewOutcomeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewOutcome | EnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInterviewOutcomeNullableWithAggregatesFilter<$PrismaModel> | $Enums.InterviewOutcome | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInterviewOutcomeNullableFilter<$PrismaModel>
    _max?: NestedEnumInterviewOutcomeNullableFilter<$PrismaModel>
  }

  export type EnumDataSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DataSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumDataSourceTypeFilter<$PrismaModel>
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

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InterviewExperienceNullableScalarRelationFilter = {
    is?: InterviewExperienceWhereInput | null
    isNot?: InterviewExperienceWhereInput | null
  }

  export type InterviewQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    normalizedQuestionText?: SortOrder
    difficulty?: SortOrder
    sourceExperienceId?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewQuestionAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type InterviewQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    normalizedQuestionText?: SortOrder
    difficulty?: SortOrder
    sourceExperienceId?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    normalizedQuestionText?: SortOrder
    difficulty?: SortOrder
    sourceExperienceId?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewQuestionSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type InterviewQuestionScalarRelationFilter = {
    is?: InterviewQuestionWhereInput
    isNot?: InterviewQuestionWhereInput
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type QuestionTopicQuestionIdTopicIdCompoundUniqueInput = {
    questionId: string
    topicId: string
  }

  export type QuestionTopicCountOrderByAggregateInput = {
    questionId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionTopicMaxOrderByAggregateInput = {
    questionId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionTopicMinOrderByAggregateInput = {
    questionId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumImportanceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportanceLevel | EnumImportanceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumImportanceLevelFilter<$PrismaModel> | $Enums.ImportanceLevel
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CompanyRoleTopicRoleIdTopicIdCompoundUniqueInput = {
    roleId: string
    topicId: string
  }

  export type CompanyRoleTopicCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    topicId?: SortOrder
    importance?: SortOrder
    weight?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyRoleTopicAvgOrderByAggregateInput = {
    weight?: SortOrder
    confidence?: SortOrder
  }

  export type CompanyRoleTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    topicId?: SortOrder
    importance?: SortOrder
    weight?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyRoleTopicMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    topicId?: SortOrder
    importance?: SortOrder
    weight?: SortOrder
    dataSourceType?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    provenance?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyRoleTopicSumOrderByAggregateInput = {
    weight?: SortOrder
    confidence?: SortOrder
  }

  export type EnumImportanceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportanceLevel | EnumImportanceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumImportanceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ImportanceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImportanceLevelFilter<$PrismaModel>
    _max?: NestedEnumImportanceLevelFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CandidateProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type CandidateProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
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

  export type CandidateProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CandidateProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutCandidateProfileInput = {
    create?: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProfileLinkCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<ProfileLinkCreateWithoutCandidateProfileInput, ProfileLinkUncheckedCreateWithoutCandidateProfileInput> | ProfileLinkCreateWithoutCandidateProfileInput[] | ProfileLinkUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: ProfileLinkCreateOrConnectWithoutCandidateProfileInput | ProfileLinkCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: ProfileLinkCreateManyCandidateProfileInputEnvelope
    connect?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
  }

  export type ProfileLinkUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<ProfileLinkCreateWithoutCandidateProfileInput, ProfileLinkUncheckedCreateWithoutCandidateProfileInput> | ProfileLinkCreateWithoutCandidateProfileInput[] | ProfileLinkUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: ProfileLinkCreateOrConnectWithoutCandidateProfileInput | ProfileLinkCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: ProfileLinkCreateManyCandidateProfileInputEnvelope
    connect?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCandidateProfileNestedInput = {
    create?: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateProfileInput
    upsert?: UserUpsertWithoutCandidateProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidateProfileInput, UserUpdateWithoutCandidateProfileInput>, UserUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type ProfileLinkUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<ProfileLinkCreateWithoutCandidateProfileInput, ProfileLinkUncheckedCreateWithoutCandidateProfileInput> | ProfileLinkCreateWithoutCandidateProfileInput[] | ProfileLinkUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: ProfileLinkCreateOrConnectWithoutCandidateProfileInput | ProfileLinkCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: ProfileLinkUpsertWithWhereUniqueWithoutCandidateProfileInput | ProfileLinkUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: ProfileLinkCreateManyCandidateProfileInputEnvelope
    set?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    disconnect?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    delete?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    connect?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    update?: ProfileLinkUpdateWithWhereUniqueWithoutCandidateProfileInput | ProfileLinkUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: ProfileLinkUpdateManyWithWhereWithoutCandidateProfileInput | ProfileLinkUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: ProfileLinkScalarWhereInput | ProfileLinkScalarWhereInput[]
  }

  export type ProfileLinkUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<ProfileLinkCreateWithoutCandidateProfileInput, ProfileLinkUncheckedCreateWithoutCandidateProfileInput> | ProfileLinkCreateWithoutCandidateProfileInput[] | ProfileLinkUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: ProfileLinkCreateOrConnectWithoutCandidateProfileInput | ProfileLinkCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: ProfileLinkUpsertWithWhereUniqueWithoutCandidateProfileInput | ProfileLinkUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: ProfileLinkCreateManyCandidateProfileInputEnvelope
    set?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    disconnect?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    delete?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    connect?: ProfileLinkWhereUniqueInput | ProfileLinkWhereUniqueInput[]
    update?: ProfileLinkUpdateWithWhereUniqueWithoutCandidateProfileInput | ProfileLinkUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: ProfileLinkUpdateManyWithWhereWithoutCandidateProfileInput | ProfileLinkUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: ProfileLinkScalarWhereInput | ProfileLinkScalarWhereInput[]
  }

  export type CandidateProfileCreateNestedOneWithoutProfileLinksInput = {
    create?: XOR<CandidateProfileCreateWithoutProfileLinksInput, CandidateProfileUncheckedCreateWithoutProfileLinksInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutProfileLinksInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type EnumProfileProviderFieldUpdateOperationsInput = {
    set?: $Enums.ProfileProvider
  }

  export type CandidateProfileUpdateOneRequiredWithoutProfileLinksNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutProfileLinksInput, CandidateProfileUncheckedCreateWithoutProfileLinksInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutProfileLinksInput
    upsert?: CandidateProfileUpsertWithoutProfileLinksInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutProfileLinksInput, CandidateProfileUpdateWithoutProfileLinksInput>, CandidateProfileUncheckedUpdateWithoutProfileLinksInput>
  }

  export type RoleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RoleCreateWithoutCompanyInput, RoleUncheckedCreateWithoutCompanyInput> | RoleCreateWithoutCompanyInput[] | RoleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCompanyInput | RoleCreateOrConnectWithoutCompanyInput[]
    createMany?: RoleCreateManyCompanyInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type InterviewExperienceCreateNestedManyWithoutCompanyInput = {
    create?: XOR<InterviewExperienceCreateWithoutCompanyInput, InterviewExperienceUncheckedCreateWithoutCompanyInput> | InterviewExperienceCreateWithoutCompanyInput[] | InterviewExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutCompanyInput | InterviewExperienceCreateOrConnectWithoutCompanyInput[]
    createMany?: InterviewExperienceCreateManyCompanyInputEnvelope
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RoleCreateWithoutCompanyInput, RoleUncheckedCreateWithoutCompanyInput> | RoleCreateWithoutCompanyInput[] | RoleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCompanyInput | RoleCreateOrConnectWithoutCompanyInput[]
    createMany?: RoleCreateManyCompanyInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type InterviewExperienceUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<InterviewExperienceCreateWithoutCompanyInput, InterviewExperienceUncheckedCreateWithoutCompanyInput> | InterviewExperienceCreateWithoutCompanyInput[] | InterviewExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutCompanyInput | InterviewExperienceCreateOrConnectWithoutCompanyInput[]
    createMany?: InterviewExperienceCreateManyCompanyInputEnvelope
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RoleCreateWithoutCompanyInput, RoleUncheckedCreateWithoutCompanyInput> | RoleCreateWithoutCompanyInput[] | RoleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCompanyInput | RoleCreateOrConnectWithoutCompanyInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCompanyInput | RoleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RoleCreateManyCompanyInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCompanyInput | RoleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCompanyInput | RoleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type InterviewExperienceUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<InterviewExperienceCreateWithoutCompanyInput, InterviewExperienceUncheckedCreateWithoutCompanyInput> | InterviewExperienceCreateWithoutCompanyInput[] | InterviewExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutCompanyInput | InterviewExperienceCreateOrConnectWithoutCompanyInput[]
    upsert?: InterviewExperienceUpsertWithWhereUniqueWithoutCompanyInput | InterviewExperienceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: InterviewExperienceCreateManyCompanyInputEnvelope
    set?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    disconnect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    delete?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    update?: InterviewExperienceUpdateWithWhereUniqueWithoutCompanyInput | InterviewExperienceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: InterviewExperienceUpdateManyWithWhereWithoutCompanyInput | InterviewExperienceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: InterviewExperienceScalarWhereInput | InterviewExperienceScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RoleCreateWithoutCompanyInput, RoleUncheckedCreateWithoutCompanyInput> | RoleCreateWithoutCompanyInput[] | RoleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCompanyInput | RoleCreateOrConnectWithoutCompanyInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCompanyInput | RoleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RoleCreateManyCompanyInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCompanyInput | RoleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCompanyInput | RoleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type InterviewExperienceUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<InterviewExperienceCreateWithoutCompanyInput, InterviewExperienceUncheckedCreateWithoutCompanyInput> | InterviewExperienceCreateWithoutCompanyInput[] | InterviewExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutCompanyInput | InterviewExperienceCreateOrConnectWithoutCompanyInput[]
    upsert?: InterviewExperienceUpsertWithWhereUniqueWithoutCompanyInput | InterviewExperienceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: InterviewExperienceCreateManyCompanyInputEnvelope
    set?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    disconnect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    delete?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    update?: InterviewExperienceUpdateWithWhereUniqueWithoutCompanyInput | InterviewExperienceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: InterviewExperienceUpdateManyWithWhereWithoutCompanyInput | InterviewExperienceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: InterviewExperienceScalarWhereInput | InterviewExperienceScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutRolesInput = {
    create?: XOR<CompanyCreateWithoutRolesInput, CompanyUncheckedCreateWithoutRolesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRolesInput
    connect?: CompanyWhereUniqueInput
  }

  export type InterviewExperienceCreateNestedManyWithoutRoleInput = {
    create?: XOR<InterviewExperienceCreateWithoutRoleInput, InterviewExperienceUncheckedCreateWithoutRoleInput> | InterviewExperienceCreateWithoutRoleInput[] | InterviewExperienceUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutRoleInput | InterviewExperienceCreateOrConnectWithoutRoleInput[]
    createMany?: InterviewExperienceCreateManyRoleInputEnvelope
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
  }

  export type CompanyRoleTopicCreateNestedManyWithoutRoleInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutRoleInput, CompanyRoleTopicUncheckedCreateWithoutRoleInput> | CompanyRoleTopicCreateWithoutRoleInput[] | CompanyRoleTopicUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutRoleInput | CompanyRoleTopicCreateOrConnectWithoutRoleInput[]
    createMany?: CompanyRoleTopicCreateManyRoleInputEnvelope
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
  }

  export type InterviewExperienceUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<InterviewExperienceCreateWithoutRoleInput, InterviewExperienceUncheckedCreateWithoutRoleInput> | InterviewExperienceCreateWithoutRoleInput[] | InterviewExperienceUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutRoleInput | InterviewExperienceCreateOrConnectWithoutRoleInput[]
    createMany?: InterviewExperienceCreateManyRoleInputEnvelope
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
  }

  export type CompanyRoleTopicUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutRoleInput, CompanyRoleTopicUncheckedCreateWithoutRoleInput> | CompanyRoleTopicCreateWithoutRoleInput[] | CompanyRoleTopicUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutRoleInput | CompanyRoleTopicCreateOrConnectWithoutRoleInput[]
    createMany?: CompanyRoleTopicCreateManyRoleInputEnvelope
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<CompanyCreateWithoutRolesInput, CompanyUncheckedCreateWithoutRolesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRolesInput
    upsert?: CompanyUpsertWithoutRolesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRolesInput, CompanyUpdateWithoutRolesInput>, CompanyUncheckedUpdateWithoutRolesInput>
  }

  export type InterviewExperienceUpdateManyWithoutRoleNestedInput = {
    create?: XOR<InterviewExperienceCreateWithoutRoleInput, InterviewExperienceUncheckedCreateWithoutRoleInput> | InterviewExperienceCreateWithoutRoleInput[] | InterviewExperienceUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutRoleInput | InterviewExperienceCreateOrConnectWithoutRoleInput[]
    upsert?: InterviewExperienceUpsertWithWhereUniqueWithoutRoleInput | InterviewExperienceUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: InterviewExperienceCreateManyRoleInputEnvelope
    set?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    disconnect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    delete?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    update?: InterviewExperienceUpdateWithWhereUniqueWithoutRoleInput | InterviewExperienceUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: InterviewExperienceUpdateManyWithWhereWithoutRoleInput | InterviewExperienceUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: InterviewExperienceScalarWhereInput | InterviewExperienceScalarWhereInput[]
  }

  export type CompanyRoleTopicUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutRoleInput, CompanyRoleTopicUncheckedCreateWithoutRoleInput> | CompanyRoleTopicCreateWithoutRoleInput[] | CompanyRoleTopicUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutRoleInput | CompanyRoleTopicCreateOrConnectWithoutRoleInput[]
    upsert?: CompanyRoleTopicUpsertWithWhereUniqueWithoutRoleInput | CompanyRoleTopicUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CompanyRoleTopicCreateManyRoleInputEnvelope
    set?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    disconnect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    delete?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    update?: CompanyRoleTopicUpdateWithWhereUniqueWithoutRoleInput | CompanyRoleTopicUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CompanyRoleTopicUpdateManyWithWhereWithoutRoleInput | CompanyRoleTopicUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CompanyRoleTopicScalarWhereInput | CompanyRoleTopicScalarWhereInput[]
  }

  export type InterviewExperienceUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<InterviewExperienceCreateWithoutRoleInput, InterviewExperienceUncheckedCreateWithoutRoleInput> | InterviewExperienceCreateWithoutRoleInput[] | InterviewExperienceUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutRoleInput | InterviewExperienceCreateOrConnectWithoutRoleInput[]
    upsert?: InterviewExperienceUpsertWithWhereUniqueWithoutRoleInput | InterviewExperienceUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: InterviewExperienceCreateManyRoleInputEnvelope
    set?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    disconnect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    delete?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    connect?: InterviewExperienceWhereUniqueInput | InterviewExperienceWhereUniqueInput[]
    update?: InterviewExperienceUpdateWithWhereUniqueWithoutRoleInput | InterviewExperienceUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: InterviewExperienceUpdateManyWithWhereWithoutRoleInput | InterviewExperienceUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: InterviewExperienceScalarWhereInput | InterviewExperienceScalarWhereInput[]
  }

  export type CompanyRoleTopicUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutRoleInput, CompanyRoleTopicUncheckedCreateWithoutRoleInput> | CompanyRoleTopicCreateWithoutRoleInput[] | CompanyRoleTopicUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutRoleInput | CompanyRoleTopicCreateOrConnectWithoutRoleInput[]
    upsert?: CompanyRoleTopicUpsertWithWhereUniqueWithoutRoleInput | CompanyRoleTopicUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CompanyRoleTopicCreateManyRoleInputEnvelope
    set?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    disconnect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    delete?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    update?: CompanyRoleTopicUpdateWithWhereUniqueWithoutRoleInput | CompanyRoleTopicUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CompanyRoleTopicUpdateManyWithWhereWithoutRoleInput | CompanyRoleTopicUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CompanyRoleTopicScalarWhereInput | CompanyRoleTopicScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutChildTopicsInput = {
    create?: XOR<TopicCreateWithoutChildTopicsInput, TopicUncheckedCreateWithoutChildTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutChildTopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutParentTopicInput = {
    create?: XOR<TopicCreateWithoutParentTopicInput, TopicUncheckedCreateWithoutParentTopicInput> | TopicCreateWithoutParentTopicInput[] | TopicUncheckedCreateWithoutParentTopicInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentTopicInput | TopicCreateOrConnectWithoutParentTopicInput[]
    createMany?: TopicCreateManyParentTopicInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type QuestionTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionTopicCreateWithoutTopicInput, QuestionTopicUncheckedCreateWithoutTopicInput> | QuestionTopicCreateWithoutTopicInput[] | QuestionTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutTopicInput | QuestionTopicCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionTopicCreateManyTopicInputEnvelope
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
  }

  export type CompanyRoleTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutTopicInput, CompanyRoleTopicUncheckedCreateWithoutTopicInput> | CompanyRoleTopicCreateWithoutTopicInput[] | CompanyRoleTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutTopicInput | CompanyRoleTopicCreateOrConnectWithoutTopicInput[]
    createMany?: CompanyRoleTopicCreateManyTopicInputEnvelope
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutParentTopicInput = {
    create?: XOR<TopicCreateWithoutParentTopicInput, TopicUncheckedCreateWithoutParentTopicInput> | TopicCreateWithoutParentTopicInput[] | TopicUncheckedCreateWithoutParentTopicInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentTopicInput | TopicCreateOrConnectWithoutParentTopicInput[]
    createMany?: TopicCreateManyParentTopicInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type QuestionTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionTopicCreateWithoutTopicInput, QuestionTopicUncheckedCreateWithoutTopicInput> | QuestionTopicCreateWithoutTopicInput[] | QuestionTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutTopicInput | QuestionTopicCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionTopicCreateManyTopicInputEnvelope
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
  }

  export type CompanyRoleTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutTopicInput, CompanyRoleTopicUncheckedCreateWithoutTopicInput> | CompanyRoleTopicCreateWithoutTopicInput[] | CompanyRoleTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutTopicInput | CompanyRoleTopicCreateOrConnectWithoutTopicInput[]
    createMany?: CompanyRoleTopicCreateManyTopicInputEnvelope
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
  }

  export type TopicUpdateOneWithoutChildTopicsNestedInput = {
    create?: XOR<TopicCreateWithoutChildTopicsInput, TopicUncheckedCreateWithoutChildTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutChildTopicsInput
    upsert?: TopicUpsertWithoutChildTopicsInput
    disconnect?: TopicWhereInput | boolean
    delete?: TopicWhereInput | boolean
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutChildTopicsInput, TopicUpdateWithoutChildTopicsInput>, TopicUncheckedUpdateWithoutChildTopicsInput>
  }

  export type TopicUpdateManyWithoutParentTopicNestedInput = {
    create?: XOR<TopicCreateWithoutParentTopicInput, TopicUncheckedCreateWithoutParentTopicInput> | TopicCreateWithoutParentTopicInput[] | TopicUncheckedCreateWithoutParentTopicInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentTopicInput | TopicCreateOrConnectWithoutParentTopicInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutParentTopicInput | TopicUpsertWithWhereUniqueWithoutParentTopicInput[]
    createMany?: TopicCreateManyParentTopicInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutParentTopicInput | TopicUpdateWithWhereUniqueWithoutParentTopicInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutParentTopicInput | TopicUpdateManyWithWhereWithoutParentTopicInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type QuestionTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionTopicCreateWithoutTopicInput, QuestionTopicUncheckedCreateWithoutTopicInput> | QuestionTopicCreateWithoutTopicInput[] | QuestionTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutTopicInput | QuestionTopicCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionTopicUpsertWithWhereUniqueWithoutTopicInput | QuestionTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionTopicCreateManyTopicInputEnvelope
    set?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    disconnect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    delete?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    update?: QuestionTopicUpdateWithWhereUniqueWithoutTopicInput | QuestionTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionTopicUpdateManyWithWhereWithoutTopicInput | QuestionTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionTopicScalarWhereInput | QuestionTopicScalarWhereInput[]
  }

  export type CompanyRoleTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutTopicInput, CompanyRoleTopicUncheckedCreateWithoutTopicInput> | CompanyRoleTopicCreateWithoutTopicInput[] | CompanyRoleTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutTopicInput | CompanyRoleTopicCreateOrConnectWithoutTopicInput[]
    upsert?: CompanyRoleTopicUpsertWithWhereUniqueWithoutTopicInput | CompanyRoleTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: CompanyRoleTopicCreateManyTopicInputEnvelope
    set?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    disconnect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    delete?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    update?: CompanyRoleTopicUpdateWithWhereUniqueWithoutTopicInput | CompanyRoleTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: CompanyRoleTopicUpdateManyWithWhereWithoutTopicInput | CompanyRoleTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: CompanyRoleTopicScalarWhereInput | CompanyRoleTopicScalarWhereInput[]
  }

  export type TopicUncheckedUpdateManyWithoutParentTopicNestedInput = {
    create?: XOR<TopicCreateWithoutParentTopicInput, TopicUncheckedCreateWithoutParentTopicInput> | TopicCreateWithoutParentTopicInput[] | TopicUncheckedCreateWithoutParentTopicInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentTopicInput | TopicCreateOrConnectWithoutParentTopicInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutParentTopicInput | TopicUpsertWithWhereUniqueWithoutParentTopicInput[]
    createMany?: TopicCreateManyParentTopicInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutParentTopicInput | TopicUpdateWithWhereUniqueWithoutParentTopicInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutParentTopicInput | TopicUpdateManyWithWhereWithoutParentTopicInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type QuestionTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionTopicCreateWithoutTopicInput, QuestionTopicUncheckedCreateWithoutTopicInput> | QuestionTopicCreateWithoutTopicInput[] | QuestionTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutTopicInput | QuestionTopicCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionTopicUpsertWithWhereUniqueWithoutTopicInput | QuestionTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionTopicCreateManyTopicInputEnvelope
    set?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    disconnect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    delete?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    update?: QuestionTopicUpdateWithWhereUniqueWithoutTopicInput | QuestionTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionTopicUpdateManyWithWhereWithoutTopicInput | QuestionTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionTopicScalarWhereInput | QuestionTopicScalarWhereInput[]
  }

  export type CompanyRoleTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<CompanyRoleTopicCreateWithoutTopicInput, CompanyRoleTopicUncheckedCreateWithoutTopicInput> | CompanyRoleTopicCreateWithoutTopicInput[] | CompanyRoleTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: CompanyRoleTopicCreateOrConnectWithoutTopicInput | CompanyRoleTopicCreateOrConnectWithoutTopicInput[]
    upsert?: CompanyRoleTopicUpsertWithWhereUniqueWithoutTopicInput | CompanyRoleTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: CompanyRoleTopicCreateManyTopicInputEnvelope
    set?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    disconnect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    delete?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    connect?: CompanyRoleTopicWhereUniqueInput | CompanyRoleTopicWhereUniqueInput[]
    update?: CompanyRoleTopicUpdateWithWhereUniqueWithoutTopicInput | CompanyRoleTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: CompanyRoleTopicUpdateManyWithWhereWithoutTopicInput | CompanyRoleTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: CompanyRoleTopicScalarWhereInput | CompanyRoleTopicScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutInterviewExperiencesInput = {
    create?: XOR<CompanyCreateWithoutInterviewExperiencesInput, CompanyUncheckedCreateWithoutInterviewExperiencesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutInterviewExperiencesInput
    connect?: CompanyWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutInterviewExperiencesInput = {
    create?: XOR<RoleCreateWithoutInterviewExperiencesInput, RoleUncheckedCreateWithoutInterviewExperiencesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutInterviewExperiencesInput
    connect?: RoleWhereUniqueInput
  }

  export type InterviewQuestionCreateNestedManyWithoutSourceExperienceInput = {
    create?: XOR<InterviewQuestionCreateWithoutSourceExperienceInput, InterviewQuestionUncheckedCreateWithoutSourceExperienceInput> | InterviewQuestionCreateWithoutSourceExperienceInput[] | InterviewQuestionUncheckedCreateWithoutSourceExperienceInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutSourceExperienceInput | InterviewQuestionCreateOrConnectWithoutSourceExperienceInput[]
    createMany?: InterviewQuestionCreateManySourceExperienceInputEnvelope
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
  }

  export type InterviewQuestionUncheckedCreateNestedManyWithoutSourceExperienceInput = {
    create?: XOR<InterviewQuestionCreateWithoutSourceExperienceInput, InterviewQuestionUncheckedCreateWithoutSourceExperienceInput> | InterviewQuestionCreateWithoutSourceExperienceInput[] | InterviewQuestionUncheckedCreateWithoutSourceExperienceInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutSourceExperienceInput | InterviewQuestionCreateOrConnectWithoutSourceExperienceInput[]
    createMany?: InterviewQuestionCreateManySourceExperienceInputEnvelope
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInterviewRoundTypeFieldUpdateOperationsInput = {
    set?: $Enums.InterviewRoundType
  }

  export type NullableEnumInterviewOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.InterviewOutcome | null
  }

  export type EnumDataSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DataSourceType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutInterviewExperiencesNestedInput = {
    create?: XOR<CompanyCreateWithoutInterviewExperiencesInput, CompanyUncheckedCreateWithoutInterviewExperiencesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutInterviewExperiencesInput
    upsert?: CompanyUpsertWithoutInterviewExperiencesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutInterviewExperiencesInput, CompanyUpdateWithoutInterviewExperiencesInput>, CompanyUncheckedUpdateWithoutInterviewExperiencesInput>
  }

  export type RoleUpdateOneRequiredWithoutInterviewExperiencesNestedInput = {
    create?: XOR<RoleCreateWithoutInterviewExperiencesInput, RoleUncheckedCreateWithoutInterviewExperiencesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutInterviewExperiencesInput
    upsert?: RoleUpsertWithoutInterviewExperiencesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutInterviewExperiencesInput, RoleUpdateWithoutInterviewExperiencesInput>, RoleUncheckedUpdateWithoutInterviewExperiencesInput>
  }

  export type InterviewQuestionUpdateManyWithoutSourceExperienceNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutSourceExperienceInput, InterviewQuestionUncheckedCreateWithoutSourceExperienceInput> | InterviewQuestionCreateWithoutSourceExperienceInput[] | InterviewQuestionUncheckedCreateWithoutSourceExperienceInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutSourceExperienceInput | InterviewQuestionCreateOrConnectWithoutSourceExperienceInput[]
    upsert?: InterviewQuestionUpsertWithWhereUniqueWithoutSourceExperienceInput | InterviewQuestionUpsertWithWhereUniqueWithoutSourceExperienceInput[]
    createMany?: InterviewQuestionCreateManySourceExperienceInputEnvelope
    set?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    disconnect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    delete?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    update?: InterviewQuestionUpdateWithWhereUniqueWithoutSourceExperienceInput | InterviewQuestionUpdateWithWhereUniqueWithoutSourceExperienceInput[]
    updateMany?: InterviewQuestionUpdateManyWithWhereWithoutSourceExperienceInput | InterviewQuestionUpdateManyWithWhereWithoutSourceExperienceInput[]
    deleteMany?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
  }

  export type InterviewQuestionUncheckedUpdateManyWithoutSourceExperienceNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutSourceExperienceInput, InterviewQuestionUncheckedCreateWithoutSourceExperienceInput> | InterviewQuestionCreateWithoutSourceExperienceInput[] | InterviewQuestionUncheckedCreateWithoutSourceExperienceInput[]
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutSourceExperienceInput | InterviewQuestionCreateOrConnectWithoutSourceExperienceInput[]
    upsert?: InterviewQuestionUpsertWithWhereUniqueWithoutSourceExperienceInput | InterviewQuestionUpsertWithWhereUniqueWithoutSourceExperienceInput[]
    createMany?: InterviewQuestionCreateManySourceExperienceInputEnvelope
    set?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    disconnect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    delete?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    connect?: InterviewQuestionWhereUniqueInput | InterviewQuestionWhereUniqueInput[]
    update?: InterviewQuestionUpdateWithWhereUniqueWithoutSourceExperienceInput | InterviewQuestionUpdateWithWhereUniqueWithoutSourceExperienceInput[]
    updateMany?: InterviewQuestionUpdateManyWithWhereWithoutSourceExperienceInput | InterviewQuestionUpdateManyWithWhereWithoutSourceExperienceInput[]
    deleteMany?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
  }

  export type InterviewExperienceCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<InterviewExperienceCreateWithoutQuestionsInput, InterviewExperienceUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutQuestionsInput
    connect?: InterviewExperienceWhereUniqueInput
  }

  export type QuestionTopicCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTopicCreateWithoutQuestionInput, QuestionTopicUncheckedCreateWithoutQuestionInput> | QuestionTopicCreateWithoutQuestionInput[] | QuestionTopicUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutQuestionInput | QuestionTopicCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTopicCreateManyQuestionInputEnvelope
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
  }

  export type QuestionTopicUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTopicCreateWithoutQuestionInput, QuestionTopicUncheckedCreateWithoutQuestionInput> | QuestionTopicCreateWithoutQuestionInput[] | QuestionTopicUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutQuestionInput | QuestionTopicCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTopicCreateManyQuestionInputEnvelope
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type InterviewExperienceUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<InterviewExperienceCreateWithoutQuestionsInput, InterviewExperienceUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewExperienceCreateOrConnectWithoutQuestionsInput
    upsert?: InterviewExperienceUpsertWithoutQuestionsInput
    disconnect?: InterviewExperienceWhereInput | boolean
    delete?: InterviewExperienceWhereInput | boolean
    connect?: InterviewExperienceWhereUniqueInput
    update?: XOR<XOR<InterviewExperienceUpdateToOneWithWhereWithoutQuestionsInput, InterviewExperienceUpdateWithoutQuestionsInput>, InterviewExperienceUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionTopicUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTopicCreateWithoutQuestionInput, QuestionTopicUncheckedCreateWithoutQuestionInput> | QuestionTopicCreateWithoutQuestionInput[] | QuestionTopicUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutQuestionInput | QuestionTopicCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput | QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTopicCreateManyQuestionInputEnvelope
    set?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    disconnect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    delete?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    update?: QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput | QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTopicUpdateManyWithWhereWithoutQuestionInput | QuestionTopicUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTopicScalarWhereInput | QuestionTopicScalarWhereInput[]
  }

  export type QuestionTopicUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTopicCreateWithoutQuestionInput, QuestionTopicUncheckedCreateWithoutQuestionInput> | QuestionTopicCreateWithoutQuestionInput[] | QuestionTopicUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTopicCreateOrConnectWithoutQuestionInput | QuestionTopicCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput | QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTopicCreateManyQuestionInputEnvelope
    set?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    disconnect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    delete?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    connect?: QuestionTopicWhereUniqueInput | QuestionTopicWhereUniqueInput[]
    update?: QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput | QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTopicUpdateManyWithWhereWithoutQuestionInput | QuestionTopicUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTopicScalarWhereInput | QuestionTopicScalarWhereInput[]
  }

  export type InterviewQuestionCreateNestedOneWithoutTopicsInput = {
    create?: XOR<InterviewQuestionCreateWithoutTopicsInput, InterviewQuestionUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutTopicsInput
    connect?: InterviewQuestionWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutQuestionTopicsInput = {
    create?: XOR<TopicCreateWithoutQuestionTopicsInput, TopicUncheckedCreateWithoutQuestionTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQuestionTopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type InterviewQuestionUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<InterviewQuestionCreateWithoutTopicsInput, InterviewQuestionUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: InterviewQuestionCreateOrConnectWithoutTopicsInput
    upsert?: InterviewQuestionUpsertWithoutTopicsInput
    connect?: InterviewQuestionWhereUniqueInput
    update?: XOR<XOR<InterviewQuestionUpdateToOneWithWhereWithoutTopicsInput, InterviewQuestionUpdateWithoutTopicsInput>, InterviewQuestionUncheckedUpdateWithoutTopicsInput>
  }

  export type TopicUpdateOneRequiredWithoutQuestionTopicsNestedInput = {
    create?: XOR<TopicCreateWithoutQuestionTopicsInput, TopicUncheckedCreateWithoutQuestionTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQuestionTopicsInput
    upsert?: TopicUpsertWithoutQuestionTopicsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutQuestionTopicsInput, TopicUpdateWithoutQuestionTopicsInput>, TopicUncheckedUpdateWithoutQuestionTopicsInput>
  }

  export type RoleCreateNestedOneWithoutTopicImportancesInput = {
    create?: XOR<RoleCreateWithoutTopicImportancesInput, RoleUncheckedCreateWithoutTopicImportancesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutTopicImportancesInput
    connect?: RoleWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutRoleImportancesInput = {
    create?: XOR<TopicCreateWithoutRoleImportancesInput, TopicUncheckedCreateWithoutRoleImportancesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutRoleImportancesInput
    connect?: TopicWhereUniqueInput
  }

  export type EnumImportanceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ImportanceLevel
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type RoleUpdateOneRequiredWithoutTopicImportancesNestedInput = {
    create?: XOR<RoleCreateWithoutTopicImportancesInput, RoleUncheckedCreateWithoutTopicImportancesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutTopicImportancesInput
    upsert?: RoleUpsertWithoutTopicImportancesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutTopicImportancesInput, RoleUpdateWithoutTopicImportancesInput>, RoleUncheckedUpdateWithoutTopicImportancesInput>
  }

  export type TopicUpdateOneRequiredWithoutRoleImportancesNestedInput = {
    create?: XOR<TopicCreateWithoutRoleImportancesInput, TopicUncheckedCreateWithoutRoleImportancesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutRoleImportancesInput
    upsert?: TopicUpsertWithoutRoleImportancesInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutRoleImportancesInput, TopicUpdateWithoutRoleImportancesInput>, TopicUncheckedUpdateWithoutRoleImportancesInput>
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

  export type NestedEnumProfileProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileProvider | EnumProfileProviderFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileProviderFilter<$PrismaModel> | $Enums.ProfileProvider
  }

  export type NestedEnumProfileProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileProvider | EnumProfileProviderFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileProvider[] | ListEnumProfileProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileProviderWithAggregatesFilter<$PrismaModel> | $Enums.ProfileProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfileProviderFilter<$PrismaModel>
    _max?: NestedEnumProfileProviderFilter<$PrismaModel>
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

  export type NestedEnumInterviewRoundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRoundType | EnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewRoundTypeFilter<$PrismaModel> | $Enums.InterviewRoundType
  }

  export type NestedEnumInterviewOutcomeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewOutcome | EnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInterviewOutcomeNullableFilter<$PrismaModel> | $Enums.InterviewOutcome | null
  }

  export type NestedEnumDataSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeFilter<$PrismaModel> | $Enums.DataSourceType
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

  export type NestedEnumInterviewRoundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRoundType | EnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewRoundType[] | ListEnumInterviewRoundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewRoundTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewRoundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewRoundTypeFilter<$PrismaModel>
    _max?: NestedEnumInterviewRoundTypeFilter<$PrismaModel>
  }

  export type NestedEnumInterviewOutcomeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewOutcome | EnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InterviewOutcome[] | ListEnumInterviewOutcomeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInterviewOutcomeNullableWithAggregatesFilter<$PrismaModel> | $Enums.InterviewOutcome | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInterviewOutcomeNullableFilter<$PrismaModel>
    _max?: NestedEnumInterviewOutcomeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DataSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumDataSourceTypeFilter<$PrismaModel>
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

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumImportanceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportanceLevel | EnumImportanceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumImportanceLevelFilter<$PrismaModel> | $Enums.ImportanceLevel
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumImportanceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImportanceLevel | EnumImportanceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImportanceLevel[] | ListEnumImportanceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumImportanceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ImportanceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImportanceLevelFilter<$PrismaModel>
    _max?: NestedEnumImportanceLevelFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CandidateProfileCreateWithoutUserInput = {
    id?: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileLinks?: ProfileLinkCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutUserInput = {
    id?: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profileLinks?: ProfileLinkUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutUserInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
  }

  export type CandidateProfileUpsertWithoutUserInput = {
    update: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CandidateProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileLinks?: ProfileLinkUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileLinks?: ProfileLinkUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type UserCreateWithoutCandidateProfileInput = {
    id?: string
    email: string
    displayName?: string | null
    passwordHash?: string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCandidateProfileInput = {
    id?: string
    email: string
    displayName?: string | null
    passwordHash?: string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCandidateProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
  }

  export type ProfileLinkCreateWithoutCandidateProfileInput = {
    id?: string
    provider: $Enums.ProfileProvider
    url: string
    label?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileLinkUncheckedCreateWithoutCandidateProfileInput = {
    id?: string
    provider: $Enums.ProfileProvider
    url: string
    label?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileLinkCreateOrConnectWithoutCandidateProfileInput = {
    where: ProfileLinkWhereUniqueInput
    create: XOR<ProfileLinkCreateWithoutCandidateProfileInput, ProfileLinkUncheckedCreateWithoutCandidateProfileInput>
  }

  export type ProfileLinkCreateManyCandidateProfileInputEnvelope = {
    data: ProfileLinkCreateManyCandidateProfileInput | ProfileLinkCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCandidateProfileInput = {
    update: XOR<UserUpdateWithoutCandidateProfileInput, UserUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidateProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidateProfileInput, UserUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type UserUpdateWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileLinkUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: ProfileLinkWhereUniqueInput
    update: XOR<ProfileLinkUpdateWithoutCandidateProfileInput, ProfileLinkUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<ProfileLinkCreateWithoutCandidateProfileInput, ProfileLinkUncheckedCreateWithoutCandidateProfileInput>
  }

  export type ProfileLinkUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: ProfileLinkWhereUniqueInput
    data: XOR<ProfileLinkUpdateWithoutCandidateProfileInput, ProfileLinkUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type ProfileLinkUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: ProfileLinkScalarWhereInput
    data: XOR<ProfileLinkUpdateManyMutationInput, ProfileLinkUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type ProfileLinkScalarWhereInput = {
    AND?: ProfileLinkScalarWhereInput | ProfileLinkScalarWhereInput[]
    OR?: ProfileLinkScalarWhereInput[]
    NOT?: ProfileLinkScalarWhereInput | ProfileLinkScalarWhereInput[]
    id?: UuidFilter<"ProfileLink"> | string
    candidateProfileId?: UuidFilter<"ProfileLink"> | string
    provider?: EnumProfileProviderFilter<"ProfileLink"> | $Enums.ProfileProvider
    url?: StringFilter<"ProfileLink"> | string
    label?: StringNullableFilter<"ProfileLink"> | string | null
    createdAt?: DateTimeFilter<"ProfileLink"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileLink"> | Date | string
  }

  export type CandidateProfileCreateWithoutProfileLinksInput = {
    id?: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutProfileLinksInput = {
    id?: string
    userId: string
    headline?: string | null
    bio?: string | null
    education?: string | null
    graduationYear?: number | null
    experienceLevel?: string | null
    targetRole?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateProfileCreateOrConnectWithoutProfileLinksInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutProfileLinksInput, CandidateProfileUncheckedCreateWithoutProfileLinksInput>
  }

  export type CandidateProfileUpsertWithoutProfileLinksInput = {
    update: XOR<CandidateProfileUpdateWithoutProfileLinksInput, CandidateProfileUncheckedUpdateWithoutProfileLinksInput>
    create: XOR<CandidateProfileCreateWithoutProfileLinksInput, CandidateProfileUncheckedCreateWithoutProfileLinksInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutProfileLinksInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutProfileLinksInput, CandidateProfileUncheckedUpdateWithoutProfileLinksInput>
  }

  export type CandidateProfileUpdateWithoutProfileLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutProfileLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewExperiences?: InterviewExperienceCreateNestedManyWithoutRoleInput
    topicImportances?: CompanyRoleTopicCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewExperiences?: InterviewExperienceUncheckedCreateNestedManyWithoutRoleInput
    topicImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCompanyInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCompanyInput, RoleUncheckedCreateWithoutCompanyInput>
  }

  export type RoleCreateManyCompanyInputEnvelope = {
    data: RoleCreateManyCompanyInput | RoleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type InterviewExperienceCreateWithoutCompanyInput = {
    id?: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutInterviewExperiencesInput
    questions?: InterviewQuestionCreateNestedManyWithoutSourceExperienceInput
  }

  export type InterviewExperienceUncheckedCreateWithoutCompanyInput = {
    id?: string
    roleId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: InterviewQuestionUncheckedCreateNestedManyWithoutSourceExperienceInput
  }

  export type InterviewExperienceCreateOrConnectWithoutCompanyInput = {
    where: InterviewExperienceWhereUniqueInput
    create: XOR<InterviewExperienceCreateWithoutCompanyInput, InterviewExperienceUncheckedCreateWithoutCompanyInput>
  }

  export type InterviewExperienceCreateManyCompanyInputEnvelope = {
    data: InterviewExperienceCreateManyCompanyInput | InterviewExperienceCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutCompanyInput, RoleUncheckedUpdateWithoutCompanyInput>
    create: XOR<RoleCreateWithoutCompanyInput, RoleUncheckedCreateWithoutCompanyInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutCompanyInput, RoleUncheckedUpdateWithoutCompanyInput>
  }

  export type RoleUpdateManyWithWhereWithoutCompanyInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: UuidFilter<"Role"> | string
    companyId?: UuidFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    slug?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type InterviewExperienceUpsertWithWhereUniqueWithoutCompanyInput = {
    where: InterviewExperienceWhereUniqueInput
    update: XOR<InterviewExperienceUpdateWithoutCompanyInput, InterviewExperienceUncheckedUpdateWithoutCompanyInput>
    create: XOR<InterviewExperienceCreateWithoutCompanyInput, InterviewExperienceUncheckedCreateWithoutCompanyInput>
  }

  export type InterviewExperienceUpdateWithWhereUniqueWithoutCompanyInput = {
    where: InterviewExperienceWhereUniqueInput
    data: XOR<InterviewExperienceUpdateWithoutCompanyInput, InterviewExperienceUncheckedUpdateWithoutCompanyInput>
  }

  export type InterviewExperienceUpdateManyWithWhereWithoutCompanyInput = {
    where: InterviewExperienceScalarWhereInput
    data: XOR<InterviewExperienceUpdateManyMutationInput, InterviewExperienceUncheckedUpdateManyWithoutCompanyInput>
  }

  export type InterviewExperienceScalarWhereInput = {
    AND?: InterviewExperienceScalarWhereInput | InterviewExperienceScalarWhereInput[]
    OR?: InterviewExperienceScalarWhereInput[]
    NOT?: InterviewExperienceScalarWhereInput | InterviewExperienceScalarWhereInput[]
    id?: UuidFilter<"InterviewExperience"> | string
    companyId?: UuidFilter<"InterviewExperience"> | string
    roleId?: UuidFilter<"InterviewExperience"> | string
    interviewYear?: IntFilter<"InterviewExperience"> | number
    roundType?: EnumInterviewRoundTypeFilter<"InterviewExperience"> | $Enums.InterviewRoundType
    outcome?: EnumInterviewOutcomeNullableFilter<"InterviewExperience"> | $Enums.InterviewOutcome | null
    experienceText?: StringFilter<"InterviewExperience"> | string
    dataSourceType?: EnumDataSourceTypeFilter<"InterviewExperience"> | $Enums.DataSourceType
    sourceName?: StringFilter<"InterviewExperience"> | string
    sourceUrl?: StringNullableFilter<"InterviewExperience"> | string | null
    provenance?: StringFilter<"InterviewExperience"> | string
    confidence?: FloatFilter<"InterviewExperience"> | number
    createdAt?: DateTimeFilter<"InterviewExperience"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewExperience"> | Date | string
  }

  export type CompanyCreateWithoutRolesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewExperiences?: InterviewExperienceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewExperiences?: InterviewExperienceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRolesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRolesInput, CompanyUncheckedCreateWithoutRolesInput>
  }

  export type InterviewExperienceCreateWithoutRoleInput = {
    id?: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutInterviewExperiencesInput
    questions?: InterviewQuestionCreateNestedManyWithoutSourceExperienceInput
  }

  export type InterviewExperienceUncheckedCreateWithoutRoleInput = {
    id?: string
    companyId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: InterviewQuestionUncheckedCreateNestedManyWithoutSourceExperienceInput
  }

  export type InterviewExperienceCreateOrConnectWithoutRoleInput = {
    where: InterviewExperienceWhereUniqueInput
    create: XOR<InterviewExperienceCreateWithoutRoleInput, InterviewExperienceUncheckedCreateWithoutRoleInput>
  }

  export type InterviewExperienceCreateManyRoleInputEnvelope = {
    data: InterviewExperienceCreateManyRoleInput | InterviewExperienceCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyRoleTopicCreateWithoutRoleInput = {
    id?: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutRoleImportancesInput
  }

  export type CompanyRoleTopicUncheckedCreateWithoutRoleInput = {
    id?: string
    topicId: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyRoleTopicCreateOrConnectWithoutRoleInput = {
    where: CompanyRoleTopicWhereUniqueInput
    create: XOR<CompanyRoleTopicCreateWithoutRoleInput, CompanyRoleTopicUncheckedCreateWithoutRoleInput>
  }

  export type CompanyRoleTopicCreateManyRoleInputEnvelope = {
    data: CompanyRoleTopicCreateManyRoleInput | CompanyRoleTopicCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutRolesInput = {
    update: XOR<CompanyUpdateWithoutRolesInput, CompanyUncheckedUpdateWithoutRolesInput>
    create: XOR<CompanyCreateWithoutRolesInput, CompanyUncheckedCreateWithoutRolesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRolesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRolesInput, CompanyUncheckedUpdateWithoutRolesInput>
  }

  export type CompanyUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewExperiences?: InterviewExperienceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewExperiences?: InterviewExperienceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type InterviewExperienceUpsertWithWhereUniqueWithoutRoleInput = {
    where: InterviewExperienceWhereUniqueInput
    update: XOR<InterviewExperienceUpdateWithoutRoleInput, InterviewExperienceUncheckedUpdateWithoutRoleInput>
    create: XOR<InterviewExperienceCreateWithoutRoleInput, InterviewExperienceUncheckedCreateWithoutRoleInput>
  }

  export type InterviewExperienceUpdateWithWhereUniqueWithoutRoleInput = {
    where: InterviewExperienceWhereUniqueInput
    data: XOR<InterviewExperienceUpdateWithoutRoleInput, InterviewExperienceUncheckedUpdateWithoutRoleInput>
  }

  export type InterviewExperienceUpdateManyWithWhereWithoutRoleInput = {
    where: InterviewExperienceScalarWhereInput
    data: XOR<InterviewExperienceUpdateManyMutationInput, InterviewExperienceUncheckedUpdateManyWithoutRoleInput>
  }

  export type CompanyRoleTopicUpsertWithWhereUniqueWithoutRoleInput = {
    where: CompanyRoleTopicWhereUniqueInput
    update: XOR<CompanyRoleTopicUpdateWithoutRoleInput, CompanyRoleTopicUncheckedUpdateWithoutRoleInput>
    create: XOR<CompanyRoleTopicCreateWithoutRoleInput, CompanyRoleTopicUncheckedCreateWithoutRoleInput>
  }

  export type CompanyRoleTopicUpdateWithWhereUniqueWithoutRoleInput = {
    where: CompanyRoleTopicWhereUniqueInput
    data: XOR<CompanyRoleTopicUpdateWithoutRoleInput, CompanyRoleTopicUncheckedUpdateWithoutRoleInput>
  }

  export type CompanyRoleTopicUpdateManyWithWhereWithoutRoleInput = {
    where: CompanyRoleTopicScalarWhereInput
    data: XOR<CompanyRoleTopicUpdateManyMutationInput, CompanyRoleTopicUncheckedUpdateManyWithoutRoleInput>
  }

  export type CompanyRoleTopicScalarWhereInput = {
    AND?: CompanyRoleTopicScalarWhereInput | CompanyRoleTopicScalarWhereInput[]
    OR?: CompanyRoleTopicScalarWhereInput[]
    NOT?: CompanyRoleTopicScalarWhereInput | CompanyRoleTopicScalarWhereInput[]
    id?: UuidFilter<"CompanyRoleTopic"> | string
    roleId?: UuidFilter<"CompanyRoleTopic"> | string
    topicId?: UuidFilter<"CompanyRoleTopic"> | string
    importance?: EnumImportanceLevelFilter<"CompanyRoleTopic"> | $Enums.ImportanceLevel
    weight?: DecimalNullableFilter<"CompanyRoleTopic"> | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFilter<"CompanyRoleTopic"> | $Enums.DataSourceType
    sourceName?: StringFilter<"CompanyRoleTopic"> | string
    sourceUrl?: StringNullableFilter<"CompanyRoleTopic"> | string | null
    provenance?: StringFilter<"CompanyRoleTopic"> | string
    confidence?: FloatFilter<"CompanyRoleTopic"> | number
    createdAt?: DateTimeFilter<"CompanyRoleTopic"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyRoleTopic"> | Date | string
  }

  export type TopicCreateWithoutChildTopicsInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parentTopic?: TopicCreateNestedOneWithoutChildTopicsInput
    questionTopics?: QuestionTopicCreateNestedManyWithoutTopicInput
    roleImportances?: CompanyRoleTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutChildTopicsInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    parentTopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionTopics?: QuestionTopicUncheckedCreateNestedManyWithoutTopicInput
    roleImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutChildTopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutChildTopicsInput, TopicUncheckedCreateWithoutChildTopicsInput>
  }

  export type TopicCreateWithoutParentTopicInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childTopics?: TopicCreateNestedManyWithoutParentTopicInput
    questionTopics?: QuestionTopicCreateNestedManyWithoutTopicInput
    roleImportances?: CompanyRoleTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutParentTopicInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childTopics?: TopicUncheckedCreateNestedManyWithoutParentTopicInput
    questionTopics?: QuestionTopicUncheckedCreateNestedManyWithoutTopicInput
    roleImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutParentTopicInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutParentTopicInput, TopicUncheckedCreateWithoutParentTopicInput>
  }

  export type TopicCreateManyParentTopicInputEnvelope = {
    data: TopicCreateManyParentTopicInput | TopicCreateManyParentTopicInput[]
    skipDuplicates?: boolean
  }

  export type QuestionTopicCreateWithoutTopicInput = {
    createdAt?: Date | string
    question: InterviewQuestionCreateNestedOneWithoutTopicsInput
  }

  export type QuestionTopicUncheckedCreateWithoutTopicInput = {
    questionId: string
    createdAt?: Date | string
  }

  export type QuestionTopicCreateOrConnectWithoutTopicInput = {
    where: QuestionTopicWhereUniqueInput
    create: XOR<QuestionTopicCreateWithoutTopicInput, QuestionTopicUncheckedCreateWithoutTopicInput>
  }

  export type QuestionTopicCreateManyTopicInputEnvelope = {
    data: QuestionTopicCreateManyTopicInput | QuestionTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type CompanyRoleTopicCreateWithoutTopicInput = {
    id?: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutTopicImportancesInput
  }

  export type CompanyRoleTopicUncheckedCreateWithoutTopicInput = {
    id?: string
    roleId: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyRoleTopicCreateOrConnectWithoutTopicInput = {
    where: CompanyRoleTopicWhereUniqueInput
    create: XOR<CompanyRoleTopicCreateWithoutTopicInput, CompanyRoleTopicUncheckedCreateWithoutTopicInput>
  }

  export type CompanyRoleTopicCreateManyTopicInputEnvelope = {
    data: CompanyRoleTopicCreateManyTopicInput | CompanyRoleTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type TopicUpsertWithoutChildTopicsInput = {
    update: XOR<TopicUpdateWithoutChildTopicsInput, TopicUncheckedUpdateWithoutChildTopicsInput>
    create: XOR<TopicCreateWithoutChildTopicsInput, TopicUncheckedCreateWithoutChildTopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutChildTopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutChildTopicsInput, TopicUncheckedUpdateWithoutChildTopicsInput>
  }

  export type TopicUpdateWithoutChildTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTopic?: TopicUpdateOneWithoutChildTopicsNestedInput
    questionTopics?: QuestionTopicUpdateManyWithoutTopicNestedInput
    roleImportances?: CompanyRoleTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutChildTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionTopics?: QuestionTopicUncheckedUpdateManyWithoutTopicNestedInput
    roleImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUpsertWithWhereUniqueWithoutParentTopicInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutParentTopicInput, TopicUncheckedUpdateWithoutParentTopicInput>
    create: XOR<TopicCreateWithoutParentTopicInput, TopicUncheckedCreateWithoutParentTopicInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutParentTopicInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutParentTopicInput, TopicUncheckedUpdateWithoutParentTopicInput>
  }

  export type TopicUpdateManyWithWhereWithoutParentTopicInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutParentTopicInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: UuidFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    slug?: StringFilter<"Topic"> | string
    category?: StringFilter<"Topic"> | string
    description?: StringNullableFilter<"Topic"> | string | null
    isActive?: BoolFilter<"Topic"> | boolean
    parentTopicId?: UuidNullableFilter<"Topic"> | string | null
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
  }

  export type QuestionTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: QuestionTopicWhereUniqueInput
    update: XOR<QuestionTopicUpdateWithoutTopicInput, QuestionTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<QuestionTopicCreateWithoutTopicInput, QuestionTopicUncheckedCreateWithoutTopicInput>
  }

  export type QuestionTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: QuestionTopicWhereUniqueInput
    data: XOR<QuestionTopicUpdateWithoutTopicInput, QuestionTopicUncheckedUpdateWithoutTopicInput>
  }

  export type QuestionTopicUpdateManyWithWhereWithoutTopicInput = {
    where: QuestionTopicScalarWhereInput
    data: XOR<QuestionTopicUpdateManyMutationInput, QuestionTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type QuestionTopicScalarWhereInput = {
    AND?: QuestionTopicScalarWhereInput | QuestionTopicScalarWhereInput[]
    OR?: QuestionTopicScalarWhereInput[]
    NOT?: QuestionTopicScalarWhereInput | QuestionTopicScalarWhereInput[]
    questionId?: UuidFilter<"QuestionTopic"> | string
    topicId?: UuidFilter<"QuestionTopic"> | string
    createdAt?: DateTimeFilter<"QuestionTopic"> | Date | string
  }

  export type CompanyRoleTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: CompanyRoleTopicWhereUniqueInput
    update: XOR<CompanyRoleTopicUpdateWithoutTopicInput, CompanyRoleTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<CompanyRoleTopicCreateWithoutTopicInput, CompanyRoleTopicUncheckedCreateWithoutTopicInput>
  }

  export type CompanyRoleTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: CompanyRoleTopicWhereUniqueInput
    data: XOR<CompanyRoleTopicUpdateWithoutTopicInput, CompanyRoleTopicUncheckedUpdateWithoutTopicInput>
  }

  export type CompanyRoleTopicUpdateManyWithWhereWithoutTopicInput = {
    where: CompanyRoleTopicScalarWhereInput
    data: XOR<CompanyRoleTopicUpdateManyMutationInput, CompanyRoleTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type CompanyCreateWithoutInterviewExperiencesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutInterviewExperiencesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    website?: string | null
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutInterviewExperiencesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutInterviewExperiencesInput, CompanyUncheckedCreateWithoutInterviewExperiencesInput>
  }

  export type RoleCreateWithoutInterviewExperiencesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRolesInput
    topicImportances?: CompanyRoleTopicCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutInterviewExperiencesInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    topicImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutInterviewExperiencesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutInterviewExperiencesInput, RoleUncheckedCreateWithoutInterviewExperiencesInput>
  }

  export type InterviewQuestionCreateWithoutSourceExperienceInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: QuestionTopicCreateNestedManyWithoutQuestionInput
  }

  export type InterviewQuestionUncheckedCreateWithoutSourceExperienceInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: QuestionTopicUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type InterviewQuestionCreateOrConnectWithoutSourceExperienceInput = {
    where: InterviewQuestionWhereUniqueInput
    create: XOR<InterviewQuestionCreateWithoutSourceExperienceInput, InterviewQuestionUncheckedCreateWithoutSourceExperienceInput>
  }

  export type InterviewQuestionCreateManySourceExperienceInputEnvelope = {
    data: InterviewQuestionCreateManySourceExperienceInput | InterviewQuestionCreateManySourceExperienceInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutInterviewExperiencesInput = {
    update: XOR<CompanyUpdateWithoutInterviewExperiencesInput, CompanyUncheckedUpdateWithoutInterviewExperiencesInput>
    create: XOR<CompanyCreateWithoutInterviewExperiencesInput, CompanyUncheckedCreateWithoutInterviewExperiencesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutInterviewExperiencesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutInterviewExperiencesInput, CompanyUncheckedUpdateWithoutInterviewExperiencesInput>
  }

  export type CompanyUpdateWithoutInterviewExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutInterviewExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type RoleUpsertWithoutInterviewExperiencesInput = {
    update: XOR<RoleUpdateWithoutInterviewExperiencesInput, RoleUncheckedUpdateWithoutInterviewExperiencesInput>
    create: XOR<RoleCreateWithoutInterviewExperiencesInput, RoleUncheckedCreateWithoutInterviewExperiencesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutInterviewExperiencesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutInterviewExperiencesInput, RoleUncheckedUpdateWithoutInterviewExperiencesInput>
  }

  export type RoleUpdateWithoutInterviewExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRolesNestedInput
    topicImportances?: CompanyRoleTopicUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutInterviewExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type InterviewQuestionUpsertWithWhereUniqueWithoutSourceExperienceInput = {
    where: InterviewQuestionWhereUniqueInput
    update: XOR<InterviewQuestionUpdateWithoutSourceExperienceInput, InterviewQuestionUncheckedUpdateWithoutSourceExperienceInput>
    create: XOR<InterviewQuestionCreateWithoutSourceExperienceInput, InterviewQuestionUncheckedCreateWithoutSourceExperienceInput>
  }

  export type InterviewQuestionUpdateWithWhereUniqueWithoutSourceExperienceInput = {
    where: InterviewQuestionWhereUniqueInput
    data: XOR<InterviewQuestionUpdateWithoutSourceExperienceInput, InterviewQuestionUncheckedUpdateWithoutSourceExperienceInput>
  }

  export type InterviewQuestionUpdateManyWithWhereWithoutSourceExperienceInput = {
    where: InterviewQuestionScalarWhereInput
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyWithoutSourceExperienceInput>
  }

  export type InterviewQuestionScalarWhereInput = {
    AND?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
    OR?: InterviewQuestionScalarWhereInput[]
    NOT?: InterviewQuestionScalarWhereInput | InterviewQuestionScalarWhereInput[]
    id?: UuidFilter<"InterviewQuestion"> | string
    questionText?: StringFilter<"InterviewQuestion"> | string
    normalizedQuestionText?: StringNullableFilter<"InterviewQuestion"> | string | null
    difficulty?: EnumDifficultyFilter<"InterviewQuestion"> | $Enums.Difficulty
    sourceExperienceId?: UuidNullableFilter<"InterviewQuestion"> | string | null
    dataSourceType?: EnumDataSourceTypeFilter<"InterviewQuestion"> | $Enums.DataSourceType
    sourceName?: StringFilter<"InterviewQuestion"> | string
    provenance?: StringFilter<"InterviewQuestion"> | string
    confidence?: FloatFilter<"InterviewQuestion"> | number
    metadata?: JsonNullableFilter<"InterviewQuestion">
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
  }

  export type InterviewExperienceCreateWithoutQuestionsInput = {
    id?: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutInterviewExperiencesInput
    role: RoleCreateNestedOneWithoutInterviewExperiencesInput
  }

  export type InterviewExperienceUncheckedCreateWithoutQuestionsInput = {
    id?: string
    companyId: string
    roleId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewExperienceCreateOrConnectWithoutQuestionsInput = {
    where: InterviewExperienceWhereUniqueInput
    create: XOR<InterviewExperienceCreateWithoutQuestionsInput, InterviewExperienceUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionTopicCreateWithoutQuestionInput = {
    createdAt?: Date | string
    topic: TopicCreateNestedOneWithoutQuestionTopicsInput
  }

  export type QuestionTopicUncheckedCreateWithoutQuestionInput = {
    topicId: string
    createdAt?: Date | string
  }

  export type QuestionTopicCreateOrConnectWithoutQuestionInput = {
    where: QuestionTopicWhereUniqueInput
    create: XOR<QuestionTopicCreateWithoutQuestionInput, QuestionTopicUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTopicCreateManyQuestionInputEnvelope = {
    data: QuestionTopicCreateManyQuestionInput | QuestionTopicCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type InterviewExperienceUpsertWithoutQuestionsInput = {
    update: XOR<InterviewExperienceUpdateWithoutQuestionsInput, InterviewExperienceUncheckedUpdateWithoutQuestionsInput>
    create: XOR<InterviewExperienceCreateWithoutQuestionsInput, InterviewExperienceUncheckedCreateWithoutQuestionsInput>
    where?: InterviewExperienceWhereInput
  }

  export type InterviewExperienceUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: InterviewExperienceWhereInput
    data: XOR<InterviewExperienceUpdateWithoutQuestionsInput, InterviewExperienceUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewExperienceUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutInterviewExperiencesNestedInput
    role?: RoleUpdateOneRequiredWithoutInterviewExperiencesNestedInput
  }

  export type InterviewExperienceUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTopicWhereUniqueInput
    update: XOR<QuestionTopicUpdateWithoutQuestionInput, QuestionTopicUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionTopicCreateWithoutQuestionInput, QuestionTopicUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTopicUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTopicWhereUniqueInput
    data: XOR<QuestionTopicUpdateWithoutQuestionInput, QuestionTopicUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionTopicUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionTopicScalarWhereInput
    data: XOR<QuestionTopicUpdateManyMutationInput, QuestionTopicUncheckedUpdateManyWithoutQuestionInput>
  }

  export type InterviewQuestionCreateWithoutTopicsInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceExperience?: InterviewExperienceCreateNestedOneWithoutQuestionsInput
  }

  export type InterviewQuestionUncheckedCreateWithoutTopicsInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    sourceExperienceId?: string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewQuestionCreateOrConnectWithoutTopicsInput = {
    where: InterviewQuestionWhereUniqueInput
    create: XOR<InterviewQuestionCreateWithoutTopicsInput, InterviewQuestionUncheckedCreateWithoutTopicsInput>
  }

  export type TopicCreateWithoutQuestionTopicsInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parentTopic?: TopicCreateNestedOneWithoutChildTopicsInput
    childTopics?: TopicCreateNestedManyWithoutParentTopicInput
    roleImportances?: CompanyRoleTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutQuestionTopicsInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    parentTopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childTopics?: TopicUncheckedCreateNestedManyWithoutParentTopicInput
    roleImportances?: CompanyRoleTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutQuestionTopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutQuestionTopicsInput, TopicUncheckedCreateWithoutQuestionTopicsInput>
  }

  export type InterviewQuestionUpsertWithoutTopicsInput = {
    update: XOR<InterviewQuestionUpdateWithoutTopicsInput, InterviewQuestionUncheckedUpdateWithoutTopicsInput>
    create: XOR<InterviewQuestionCreateWithoutTopicsInput, InterviewQuestionUncheckedCreateWithoutTopicsInput>
    where?: InterviewQuestionWhereInput
  }

  export type InterviewQuestionUpdateToOneWithWhereWithoutTopicsInput = {
    where?: InterviewQuestionWhereInput
    data: XOR<InterviewQuestionUpdateWithoutTopicsInput, InterviewQuestionUncheckedUpdateWithoutTopicsInput>
  }

  export type InterviewQuestionUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceExperience?: InterviewExperienceUpdateOneWithoutQuestionsNestedInput
  }

  export type InterviewQuestionUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sourceExperienceId?: NullableStringFieldUpdateOperationsInput | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUpsertWithoutQuestionTopicsInput = {
    update: XOR<TopicUpdateWithoutQuestionTopicsInput, TopicUncheckedUpdateWithoutQuestionTopicsInput>
    create: XOR<TopicCreateWithoutQuestionTopicsInput, TopicUncheckedCreateWithoutQuestionTopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutQuestionTopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutQuestionTopicsInput, TopicUncheckedUpdateWithoutQuestionTopicsInput>
  }

  export type TopicUpdateWithoutQuestionTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTopic?: TopicUpdateOneWithoutChildTopicsNestedInput
    childTopics?: TopicUpdateManyWithoutParentTopicNestedInput
    roleImportances?: CompanyRoleTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutQuestionTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childTopics?: TopicUncheckedUpdateManyWithoutParentTopicNestedInput
    roleImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type RoleCreateWithoutTopicImportancesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRolesInput
    interviewExperiences?: InterviewExperienceCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutTopicImportancesInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewExperiences?: InterviewExperienceUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutTopicImportancesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutTopicImportancesInput, RoleUncheckedCreateWithoutTopicImportancesInput>
  }

  export type TopicCreateWithoutRoleImportancesInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parentTopic?: TopicCreateNestedOneWithoutChildTopicsInput
    childTopics?: TopicCreateNestedManyWithoutParentTopicInput
    questionTopics?: QuestionTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutRoleImportancesInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    parentTopicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childTopics?: TopicUncheckedCreateNestedManyWithoutParentTopicInput
    questionTopics?: QuestionTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutRoleImportancesInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutRoleImportancesInput, TopicUncheckedCreateWithoutRoleImportancesInput>
  }

  export type RoleUpsertWithoutTopicImportancesInput = {
    update: XOR<RoleUpdateWithoutTopicImportancesInput, RoleUncheckedUpdateWithoutTopicImportancesInput>
    create: XOR<RoleCreateWithoutTopicImportancesInput, RoleUncheckedCreateWithoutTopicImportancesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutTopicImportancesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutTopicImportancesInput, RoleUncheckedUpdateWithoutTopicImportancesInput>
  }

  export type RoleUpdateWithoutTopicImportancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRolesNestedInput
    interviewExperiences?: InterviewExperienceUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutTopicImportancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewExperiences?: InterviewExperienceUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type TopicUpsertWithoutRoleImportancesInput = {
    update: XOR<TopicUpdateWithoutRoleImportancesInput, TopicUncheckedUpdateWithoutRoleImportancesInput>
    create: XOR<TopicCreateWithoutRoleImportancesInput, TopicUncheckedCreateWithoutRoleImportancesInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutRoleImportancesInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutRoleImportancesInput, TopicUncheckedUpdateWithoutRoleImportancesInput>
  }

  export type TopicUpdateWithoutRoleImportancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentTopic?: TopicUpdateOneWithoutChildTopicsNestedInput
    childTopics?: TopicUpdateManyWithoutParentTopicNestedInput
    questionTopics?: QuestionTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutRoleImportancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childTopics?: TopicUncheckedUpdateManyWithoutParentTopicNestedInput
    questionTopics?: QuestionTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type ProfileLinkCreateManyCandidateProfileInput = {
    id?: string
    provider: $Enums.ProfileProvider
    url: string
    label?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileLinkUpdateWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileLinkUncheckedUpdateWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileLinkUncheckedUpdateManyWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProfileProviderFieldUpdateOperationsInput | $Enums.ProfileProvider
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateManyCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewExperienceCreateManyCompanyInput = {
    id?: string
    roleId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewExperiences?: InterviewExperienceUpdateManyWithoutRoleNestedInput
    topicImportances?: CompanyRoleTopicUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewExperiences?: InterviewExperienceUncheckedUpdateManyWithoutRoleNestedInput
    topicImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewExperienceUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutInterviewExperiencesNestedInput
    questions?: InterviewQuestionUpdateManyWithoutSourceExperienceNestedInput
  }

  export type InterviewExperienceUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: InterviewQuestionUncheckedUpdateManyWithoutSourceExperienceNestedInput
  }

  export type InterviewExperienceUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewExperienceCreateManyRoleInput = {
    id?: string
    companyId: string
    interviewYear: number
    roundType: $Enums.InterviewRoundType
    outcome?: $Enums.InterviewOutcome | null
    experienceText: string
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyRoleTopicCreateManyRoleInput = {
    id?: string
    topicId: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewExperienceUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutInterviewExperiencesNestedInput
    questions?: InterviewQuestionUpdateManyWithoutSourceExperienceNestedInput
  }

  export type InterviewExperienceUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: InterviewQuestionUncheckedUpdateManyWithoutSourceExperienceNestedInput
  }

  export type InterviewExperienceUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    interviewYear?: IntFieldUpdateOperationsInput | number
    roundType?: EnumInterviewRoundTypeFieldUpdateOperationsInput | $Enums.InterviewRoundType
    outcome?: NullableEnumInterviewOutcomeFieldUpdateOperationsInput | $Enums.InterviewOutcome | null
    experienceText?: StringFieldUpdateOperationsInput | string
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutRoleImportancesNestedInput
  }

  export type CompanyRoleTopicUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateManyParentTopicInput = {
    id?: string
    name: string
    slug: string
    category: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTopicCreateManyTopicInput = {
    questionId: string
    createdAt?: Date | string
  }

  export type CompanyRoleTopicCreateManyTopicInput = {
    id?: string
    roleId: string
    importance: $Enums.ImportanceLevel
    weight?: Decimal | DecimalJsLike | number | string | null
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    sourceUrl?: string | null
    provenance: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateWithoutParentTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childTopics?: TopicUpdateManyWithoutParentTopicNestedInput
    questionTopics?: QuestionTopicUpdateManyWithoutTopicNestedInput
    roleImportances?: CompanyRoleTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutParentTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childTopics?: TopicUncheckedUpdateManyWithoutParentTopicNestedInput
    questionTopics?: QuestionTopicUncheckedUpdateManyWithoutTopicNestedInput
    roleImportances?: CompanyRoleTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutParentTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicUpdateWithoutTopicInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: InterviewQuestionUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type QuestionTopicUncheckedUpdateWithoutTopicInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicUncheckedUpdateManyWithoutTopicInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutTopicImportancesNestedInput
  }

  export type CompanyRoleTopicUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyRoleTopicUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    importance?: EnumImportanceLevelFieldUpdateOperationsInput | $Enums.ImportanceLevel
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateManySourceExperienceInput = {
    id?: string
    questionText: string
    normalizedQuestionText?: string | null
    difficulty: $Enums.Difficulty
    dataSourceType: $Enums.DataSourceType
    sourceName: string
    provenance: string
    confidence: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewQuestionUpdateWithoutSourceExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: QuestionTopicUpdateManyWithoutQuestionNestedInput
  }

  export type InterviewQuestionUncheckedUpdateWithoutSourceExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: QuestionTopicUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type InterviewQuestionUncheckedUpdateManyWithoutSourceExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    normalizedQuestionText?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    dataSourceType?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    sourceName?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicCreateManyQuestionInput = {
    topicId: string
    createdAt?: Date | string
  }

  export type QuestionTopicUpdateWithoutQuestionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutQuestionTopicsNestedInput
  }

  export type QuestionTopicUncheckedUpdateWithoutQuestionInput = {
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTopicUncheckedUpdateManyWithoutQuestionInput = {
    topicId?: StringFieldUpdateOperationsInput | string
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