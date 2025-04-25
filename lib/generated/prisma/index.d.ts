
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
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priorite: {
  BASSE: 'BASSE',
  MOYENNE: 'MOYENNE',
  HAUTE: 'HAUTE'
};

export type Priorite = (typeof Priorite)[keyof typeof Priorite]


export const Role: {
  USER: 'USER',
  AGENT: 'AGENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Statut: {
  NOUVEAU: 'NOUVEAU',
  EN_COURS: 'EN_COURS',
  RESOLU: 'RESOLU',
  FERME: 'FERME'
};

export type Statut = (typeof Statut)[keyof typeof Statut]

}

export type Priorite = $Enums.Priorite

export const Priorite: typeof $Enums.Priorite

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Commentaires
 * const commentaires = await prisma.commentaire.findMany()
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
   * // Fetch zero or more Commentaires
   * const commentaires = await prisma.commentaire.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Commentaire: 'Commentaire',
    Ticket: 'Ticket',
    Utilisateur: 'Utilisateur'
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
      modelProps: "commentaire" | "ticket" | "utilisateur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
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
    commentaire?: CommentaireOmit
    ticket?: TicketOmit
    utilisateur?: UtilisateurOmit
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
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    Commentaire: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Commentaire?: boolean | TicketCountOutputTypeCountCommentaireArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountCommentaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    Commentaire: number
    Ticket: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Commentaire?: boolean | UtilisateurCountOutputTypeCountCommentaireArgs
    Ticket?: boolean | UtilisateurCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountCommentaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireMinAggregateOutputType = {
    id: string | null
    message: string | null
    dateCreation: Date | null
    ticketId: string | null
    auteurId: string | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id: string | null
    message: string | null
    dateCreation: Date | null
    ticketId: string | null
    auteurId: string | null
  }

  export type CommentaireCountAggregateOutputType = {
    id: number
    message: number
    dateCreation: number
    ticketId: number
    auteurId: number
    _all: number
  }


  export type CommentaireMinAggregateInputType = {
    id?: true
    message?: true
    dateCreation?: true
    ticketId?: true
    auteurId?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id?: true
    message?: true
    dateCreation?: true
    ticketId?: true
    auteurId?: true
  }

  export type CommentaireCountAggregateInputType = {
    id?: true
    message?: true
    dateCreation?: true
    ticketId?: true
    auteurId?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id: string
    message: string
    dateCreation: Date
    ticketId: string
    auteurId: string
    _count: CommentaireCountAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    dateCreation?: boolean
    ticketId?: boolean
    auteurId?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    dateCreation?: boolean
    ticketId?: boolean
    auteurId?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    dateCreation?: boolean
    ticketId?: boolean
    auteurId?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectScalar = {
    id?: boolean
    message?: boolean
    dateCreation?: boolean
    ticketId?: boolean
    auteurId?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "dateCreation" | "ticketId" | "auteurId", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      Utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      Ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      dateCreation: Date
      ticketId: string
      auteurId: string
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentaireCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentaireCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentaireUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentaireUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
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
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id: FieldRef<"Commentaire", 'String'>
    readonly message: FieldRef<"Commentaire", 'String'>
    readonly dateCreation: FieldRef<"Commentaire", 'DateTime'>
    readonly ticketId: FieldRef<"Commentaire", 'String'>
    readonly auteurId: FieldRef<"Commentaire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaire createManyAndReturn
   */
  export type CommentaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire updateManyAndReturn
   */
  export type CommentaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    statut: $Enums.Statut | null
    priorite: $Enums.Priorite | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
    utilisateurId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    statut: $Enums.Statut | null
    priorite: $Enums.Priorite | null
    dateCreation: Date | null
    dateMiseAJour: Date | null
    utilisateurId: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    statut: number
    priorite: number
    dateCreation: number
    dateMiseAJour: number
    utilisateurId: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    statut?: true
    priorite?: true
    dateCreation?: true
    dateMiseAJour?: true
    utilisateurId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    statut?: true
    priorite?: true
    dateCreation?: true
    dateMiseAJour?: true
    utilisateurId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    statut?: true
    priorite?: true
    dateCreation?: true
    dateMiseAJour?: true
    utilisateurId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    titre: string
    description: string
    statut: $Enums.Statut
    priorite: $Enums.Priorite
    dateCreation: Date
    dateMiseAJour: Date
    utilisateurId: string
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    statut?: boolean
    priorite?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateurId?: boolean
    Commentaire?: boolean | Ticket$CommentaireArgs<ExtArgs>
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    statut?: boolean
    priorite?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateurId?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    statut?: boolean
    priorite?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateurId?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    statut?: boolean
    priorite?: boolean
    dateCreation?: boolean
    dateMiseAJour?: boolean
    utilisateurId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "statut" | "priorite" | "dateCreation" | "dateMiseAJour" | "utilisateurId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Commentaire?: boolean | Ticket$CommentaireArgs<ExtArgs>
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      Commentaire: Prisma.$CommentairePayload<ExtArgs>[]
      Utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      description: string
      statut: $Enums.Statut
      priorite: $Enums.Priorite
      dateCreation: Date
      dateMiseAJour: Date
      utilisateurId: string
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Commentaire<T extends Ticket$CommentaireArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$CommentaireArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly titre: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly statut: FieldRef<"Ticket", 'Statut'>
    readonly priorite: FieldRef<"Ticket", 'Priorite'>
    readonly dateCreation: FieldRef<"Ticket", 'DateTime'>
    readonly dateMiseAJour: FieldRef<"Ticket", 'DateTime'>
    readonly utilisateurId: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.Commentaire
   */
  export type Ticket$CommentaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    nom: string | null
    email: string | null
    motDePasseHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    email: string | null
    motDePasseHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    motDePasseHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    motDePasseHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    motDePasseHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    motDePasseHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasseHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Commentaire?: boolean | Utilisateur$CommentaireArgs<ExtArgs>
    Ticket?: boolean | Utilisateur$TicketArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasseHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasseHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    motDePasseHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "motDePasseHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Commentaire?: boolean | Utilisateur$CommentaireArgs<ExtArgs>
    Ticket?: boolean | Utilisateur$TicketArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      Commentaire: Prisma.$CommentairePayload<ExtArgs>[]
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      email: string
      motDePasseHash: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Commentaire<T extends Utilisateur$CommentaireArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$CommentaireArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ticket<T extends Utilisateur$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasseHash: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
    readonly updatedAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.Commentaire
   */
  export type Utilisateur$CommentaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Utilisateur.Ticket
   */
  export type Utilisateur$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
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


  export const CommentaireScalarFieldEnum: {
    id: 'id',
    message: 'message',
    dateCreation: 'dateCreation',
    ticketId: 'ticketId',
    auteurId: 'auteurId'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    statut: 'statut',
    priorite: 'priorite',
    dateCreation: 'dateCreation',
    dateMiseAJour: 'dateMiseAJour',
    utilisateurId: 'utilisateurId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    motDePasseHash: 'motDePasseHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


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
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Statut[]'
   */
  export type ListEnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut[]'>
    


  /**
   * Reference to a field of type 'Priorite'
   */
  export type EnumPrioriteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priorite'>
    


  /**
   * Reference to a field of type 'Priorite[]'
   */
  export type ListEnumPrioriteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priorite[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id?: StringFilter<"Commentaire"> | string
    message?: StringFilter<"Commentaire"> | string
    dateCreation?: DateTimeFilter<"Commentaire"> | Date | string
    ticketId?: StringFilter<"Commentaire"> | string
    auteurId?: StringFilter<"Commentaire"> | string
    Utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type CommentaireOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    dateCreation?: SortOrder
    ticketId?: SortOrder
    auteurId?: SortOrder
    Utilisateur?: UtilisateurOrderByWithRelationInput
    Ticket?: TicketOrderByWithRelationInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    message?: StringFilter<"Commentaire"> | string
    dateCreation?: DateTimeFilter<"Commentaire"> | Date | string
    ticketId?: StringFilter<"Commentaire"> | string
    auteurId?: StringFilter<"Commentaire"> | string
    Utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type CommentaireOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    dateCreation?: SortOrder
    ticketId?: SortOrder
    auteurId?: SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commentaire"> | string
    message?: StringWithAggregatesFilter<"Commentaire"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
    ticketId?: StringWithAggregatesFilter<"Commentaire"> | string
    auteurId?: StringWithAggregatesFilter<"Commentaire"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    titre?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    statut?: EnumStatutFilter<"Ticket"> | $Enums.Statut
    priorite?: EnumPrioriteFilter<"Ticket"> | $Enums.Priorite
    dateCreation?: DateTimeFilter<"Ticket"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Ticket"> | Date | string
    utilisateurId?: StringFilter<"Ticket"> | string
    Commentaire?: CommentaireListRelationFilter
    Utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    priorite?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    utilisateurId?: SortOrder
    Commentaire?: CommentaireOrderByRelationAggregateInput
    Utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    titre?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    statut?: EnumStatutFilter<"Ticket"> | $Enums.Statut
    priorite?: EnumPrioriteFilter<"Ticket"> | $Enums.Priorite
    dateCreation?: DateTimeFilter<"Ticket"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Ticket"> | Date | string
    utilisateurId?: StringFilter<"Ticket"> | string
    Commentaire?: CommentaireListRelationFilter
    Utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    priorite?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    utilisateurId?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    titre?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringWithAggregatesFilter<"Ticket"> | string
    statut?: EnumStatutWithAggregatesFilter<"Ticket"> | $Enums.Statut
    priorite?: EnumPrioriteWithAggregatesFilter<"Ticket"> | $Enums.Priorite
    dateCreation?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    dateMiseAJour?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    utilisateurId?: StringWithAggregatesFilter<"Ticket"> | string
  }

  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasseHash?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
    Commentaire?: CommentaireListRelationFilter
    Ticket?: TicketListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Commentaire?: CommentaireOrderByRelationAggregateInput
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    motDePasseHash?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
    Commentaire?: CommentaireListRelationFilter
    Ticket?: TicketListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasseHash?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type CommentaireCreateInput = {
    id: string
    message: string
    dateCreation?: Date | string
    Utilisateur: UtilisateurCreateNestedOneWithoutCommentaireInput
    Ticket: TicketCreateNestedOneWithoutCommentaireInput
  }

  export type CommentaireUncheckedCreateInput = {
    id: string
    message: string
    dateCreation?: Date | string
    ticketId: string
    auteurId: string
  }

  export type CommentaireUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutCommentaireNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutCommentaireNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    auteurId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireCreateManyInput = {
    id: string
    message: string
    dateCreation?: Date | string
    ticketId: string
    auteurId: string
  }

  export type CommentaireUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    auteurId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    Commentaire?: CommentaireCreateNestedManyWithoutTicketInput
    Utilisateur: UtilisateurCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    utilisateurId: string
    Commentaire?: CommentaireUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUpdateManyWithoutTicketNestedInput
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    Commentaire?: CommentaireUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    utilisateurId: string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurCreateInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    Commentaire?: CommentaireCreateNestedManyWithoutUtilisateurInput
    Ticket?: TicketCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    Commentaire?: CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUpdateManyWithoutUtilisateurNestedInput
    Ticket?: TicketUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type CommentaireCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    dateCreation?: SortOrder
    ticketId?: SortOrder
    auteurId?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    dateCreation?: SortOrder
    ticketId?: SortOrder
    auteurId?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    dateCreation?: SortOrder
    ticketId?: SortOrder
    auteurId?: SortOrder
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

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type EnumPrioriteFilter<$PrismaModel = never> = {
    equals?: $Enums.Priorite | EnumPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioriteFilter<$PrismaModel> | $Enums.Priorite
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    priorite?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    utilisateurId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    priorite?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    utilisateurId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    priorite?: SortOrder
    dateCreation?: SortOrder
    dateMiseAJour?: SortOrder
    utilisateurId?: SortOrder
  }

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type EnumPrioriteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priorite | EnumPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioriteWithAggregatesFilter<$PrismaModel> | $Enums.Priorite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioriteFilter<$PrismaModel>
    _max?: NestedEnumPrioriteFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UtilisateurCreateNestedOneWithoutCommentaireInput = {
    create?: XOR<UtilisateurCreateWithoutCommentaireInput, UtilisateurUncheckedCreateWithoutCommentaireInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommentaireInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutCommentaireInput = {
    create?: XOR<TicketCreateWithoutCommentaireInput, TicketUncheckedCreateWithoutCommentaireInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentaireInput
    connect?: TicketWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UtilisateurUpdateOneRequiredWithoutCommentaireNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCommentaireInput, UtilisateurUncheckedCreateWithoutCommentaireInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommentaireInput
    upsert?: UtilisateurUpsertWithoutCommentaireInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutCommentaireInput, UtilisateurUpdateWithoutCommentaireInput>, UtilisateurUncheckedUpdateWithoutCommentaireInput>
  }

  export type TicketUpdateOneRequiredWithoutCommentaireNestedInput = {
    create?: XOR<TicketCreateWithoutCommentaireInput, TicketUncheckedCreateWithoutCommentaireInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentaireInput
    upsert?: TicketUpsertWithoutCommentaireInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutCommentaireInput, TicketUpdateWithoutCommentaireInput>, TicketUncheckedUpdateWithoutCommentaireInput>
  }

  export type CommentaireCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentaireCreateWithoutTicketInput, CommentaireUncheckedCreateWithoutTicketInput> | CommentaireCreateWithoutTicketInput[] | CommentaireUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTicketInput | CommentaireCreateOrConnectWithoutTicketInput[]
    createMany?: CommentaireCreateManyTicketInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type UtilisateurCreateNestedOneWithoutTicketInput = {
    create?: XOR<UtilisateurCreateWithoutTicketInput, UtilisateurUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutTicketInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type CommentaireUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentaireCreateWithoutTicketInput, CommentaireUncheckedCreateWithoutTicketInput> | CommentaireCreateWithoutTicketInput[] | CommentaireUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTicketInput | CommentaireCreateOrConnectWithoutTicketInput[]
    createMany?: CommentaireCreateManyTicketInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type EnumPrioriteFieldUpdateOperationsInput = {
    set?: $Enums.Priorite
  }

  export type CommentaireUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentaireCreateWithoutTicketInput, CommentaireUncheckedCreateWithoutTicketInput> | CommentaireCreateWithoutTicketInput[] | CommentaireUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTicketInput | CommentaireCreateOrConnectWithoutTicketInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutTicketInput | CommentaireUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentaireCreateManyTicketInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutTicketInput | CommentaireUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutTicketInput | CommentaireUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<UtilisateurCreateWithoutTicketInput, UtilisateurUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutTicketInput
    upsert?: UtilisateurUpsertWithoutTicketInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutTicketInput, UtilisateurUpdateWithoutTicketInput>, UtilisateurUncheckedUpdateWithoutTicketInput>
  }

  export type CommentaireUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentaireCreateWithoutTicketInput, CommentaireUncheckedCreateWithoutTicketInput> | CommentaireCreateWithoutTicketInput[] | CommentaireUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTicketInput | CommentaireCreateOrConnectWithoutTicketInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutTicketInput | CommentaireUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentaireCreateManyTicketInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutTicketInput | CommentaireUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutTicketInput | CommentaireUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type CommentaireCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<TicketCreateWithoutUtilisateurInput, TicketUncheckedCreateWithoutUtilisateurInput> | TicketCreateWithoutUtilisateurInput[] | TicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUtilisateurInput | TicketCreateOrConnectWithoutUtilisateurInput[]
    createMany?: TicketCreateManyUtilisateurInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<TicketCreateWithoutUtilisateurInput, TicketUncheckedCreateWithoutUtilisateurInput> | TicketCreateWithoutUtilisateurInput[] | TicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUtilisateurInput | TicketCreateOrConnectWithoutUtilisateurInput[]
    createMany?: TicketCreateManyUtilisateurInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CommentaireUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput | CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput | CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUtilisateurInput | CommentaireUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<TicketCreateWithoutUtilisateurInput, TicketUncheckedCreateWithoutUtilisateurInput> | TicketCreateWithoutUtilisateurInput[] | TicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUtilisateurInput | TicketCreateOrConnectWithoutUtilisateurInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUtilisateurInput | TicketUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: TicketCreateManyUtilisateurInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUtilisateurInput | TicketUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUtilisateurInput | TicketUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput | CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput | CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUtilisateurInput | CommentaireUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<TicketCreateWithoutUtilisateurInput, TicketUncheckedCreateWithoutUtilisateurInput> | TicketCreateWithoutUtilisateurInput[] | TicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUtilisateurInput | TicketCreateOrConnectWithoutUtilisateurInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUtilisateurInput | TicketUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: TicketCreateManyUtilisateurInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUtilisateurInput | TicketUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUtilisateurInput | TicketUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
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

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type NestedEnumPrioriteFilter<$PrismaModel = never> = {
    equals?: $Enums.Priorite | EnumPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioriteFilter<$PrismaModel> | $Enums.Priorite
  }

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type NestedEnumPrioriteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priorite | EnumPrioriteFieldRefInput<$PrismaModel>
    in?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priorite[] | ListEnumPrioriteFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioriteWithAggregatesFilter<$PrismaModel> | $Enums.Priorite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioriteFilter<$PrismaModel>
    _max?: NestedEnumPrioriteFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UtilisateurCreateWithoutCommentaireInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    Ticket?: TicketCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutCommentaireInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutCommentaireInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutCommentaireInput, UtilisateurUncheckedCreateWithoutCommentaireInput>
  }

  export type TicketCreateWithoutCommentaireInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    Utilisateur: UtilisateurCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCommentaireInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    utilisateurId: string
  }

  export type TicketCreateOrConnectWithoutCommentaireInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCommentaireInput, TicketUncheckedCreateWithoutCommentaireInput>
  }

  export type UtilisateurUpsertWithoutCommentaireInput = {
    update: XOR<UtilisateurUpdateWithoutCommentaireInput, UtilisateurUncheckedUpdateWithoutCommentaireInput>
    create: XOR<UtilisateurCreateWithoutCommentaireInput, UtilisateurUncheckedCreateWithoutCommentaireInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutCommentaireInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutCommentaireInput, UtilisateurUncheckedUpdateWithoutCommentaireInput>
  }

  export type UtilisateurUpdateWithoutCommentaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutCommentaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type TicketUpsertWithoutCommentaireInput = {
    update: XOR<TicketUpdateWithoutCommentaireInput, TicketUncheckedUpdateWithoutCommentaireInput>
    create: XOR<TicketCreateWithoutCommentaireInput, TicketUncheckedCreateWithoutCommentaireInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutCommentaireInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutCommentaireInput, TicketUncheckedUpdateWithoutCommentaireInput>
  }

  export type TicketUpdateWithoutCommentaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCommentaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireCreateWithoutTicketInput = {
    id: string
    message: string
    dateCreation?: Date | string
    Utilisateur: UtilisateurCreateNestedOneWithoutCommentaireInput
  }

  export type CommentaireUncheckedCreateWithoutTicketInput = {
    id: string
    message: string
    dateCreation?: Date | string
    auteurId: string
  }

  export type CommentaireCreateOrConnectWithoutTicketInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutTicketInput, CommentaireUncheckedCreateWithoutTicketInput>
  }

  export type CommentaireCreateManyTicketInputEnvelope = {
    data: CommentaireCreateManyTicketInput | CommentaireCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurCreateWithoutTicketInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    Commentaire?: CommentaireCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutTicketInput = {
    id: string
    nom: string
    email: string
    motDePasseHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt: Date | string
    Commentaire?: CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutTicketInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutTicketInput, UtilisateurUncheckedCreateWithoutTicketInput>
  }

  export type CommentaireUpsertWithWhereUniqueWithoutTicketInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutTicketInput, CommentaireUncheckedUpdateWithoutTicketInput>
    create: XOR<CommentaireCreateWithoutTicketInput, CommentaireUncheckedCreateWithoutTicketInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutTicketInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutTicketInput, CommentaireUncheckedUpdateWithoutTicketInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutTicketInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutTicketInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id?: StringFilter<"Commentaire"> | string
    message?: StringFilter<"Commentaire"> | string
    dateCreation?: DateTimeFilter<"Commentaire"> | Date | string
    ticketId?: StringFilter<"Commentaire"> | string
    auteurId?: StringFilter<"Commentaire"> | string
  }

  export type UtilisateurUpsertWithoutTicketInput = {
    update: XOR<UtilisateurUpdateWithoutTicketInput, UtilisateurUncheckedUpdateWithoutTicketInput>
    create: XOR<UtilisateurCreateWithoutTicketInput, UtilisateurUncheckedCreateWithoutTicketInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutTicketInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutTicketInput, UtilisateurUncheckedUpdateWithoutTicketInput>
  }

  export type UtilisateurUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type CommentaireCreateWithoutUtilisateurInput = {
    id: string
    message: string
    dateCreation?: Date | string
    Ticket: TicketCreateNestedOneWithoutCommentaireInput
  }

  export type CommentaireUncheckedCreateWithoutUtilisateurInput = {
    id: string
    message: string
    dateCreation?: Date | string
    ticketId: string
  }

  export type CommentaireCreateOrConnectWithoutUtilisateurInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput>
  }

  export type CommentaireCreateManyUtilisateurInputEnvelope = {
    data: CommentaireCreateManyUtilisateurInput | CommentaireCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUtilisateurInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    Commentaire?: CommentaireCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUtilisateurInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
    Commentaire?: CommentaireUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUtilisateurInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUtilisateurInput, TicketUncheckedCreateWithoutUtilisateurInput>
  }

  export type TicketCreateManyUtilisateurInputEnvelope = {
    data: TicketCreateManyUtilisateurInput | TicketCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutUtilisateurInput, CommentaireUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutUtilisateurInput, CommentaireUncheckedUpdateWithoutUtilisateurInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutUtilisateurInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUtilisateurInput, TicketUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<TicketCreateWithoutUtilisateurInput, TicketUncheckedCreateWithoutUtilisateurInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUtilisateurInput, TicketUncheckedUpdateWithoutUtilisateurInput>
  }

  export type TicketUpdateManyWithWhereWithoutUtilisateurInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    titre?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    statut?: EnumStatutFilter<"Ticket"> | $Enums.Statut
    priorite?: EnumPrioriteFilter<"Ticket"> | $Enums.Priorite
    dateCreation?: DateTimeFilter<"Ticket"> | Date | string
    dateMiseAJour?: DateTimeFilter<"Ticket"> | Date | string
    utilisateurId?: StringFilter<"Ticket"> | string
  }

  export type CommentaireCreateManyTicketInput = {
    id: string
    message: string
    dateCreation?: Date | string
    auteurId: string
  }

  export type CommentaireUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutCommentaireNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireCreateManyUtilisateurInput = {
    id: string
    message: string
    dateCreation?: Date | string
    ticketId: string
  }

  export type TicketCreateManyUtilisateurInput = {
    id: string
    titre: string
    description: string
    statut?: $Enums.Statut
    priorite?: $Enums.Priorite
    dateCreation?: Date | string
    dateMiseAJour: Date | string
  }

  export type CommentaireUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneRequiredWithoutCommentaireNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
    Commentaire?: CommentaireUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    priorite?: EnumPrioriteFieldUpdateOperationsInput | $Enums.Priorite
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    dateMiseAJour?: DateTimeFieldUpdateOperationsInput | Date | string
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