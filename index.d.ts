/**
 * Any type that can be used as a key of an object.
 *
 * ```
 * const key1: Key = Symbol();
 * const key2: Key = 42;
 * const key3: Key = "Bart";
 * ```
 */
export type Key = keyof any;

/**
 * An object containing elements of type T.
 *
 * ```
 * const scores: Dictionary<number> = {
 *     "Amelia": 4,
 *     "Riley": 7,
 *     "April": 5
 * };
 *
 *  scores["Xander"] = 3;
 * ```
 *
 * @deprecated Use `Record<TKey, TElement>` or `Map<TKey, TElement>` instead.
 */
export type Dictionary<TElement, TKey extends Key = string> = Record<TKey, TElement>;

/**
 * A read-only object containing elements of type T.
 *
 * ```typescript
 * function winner(scores: ReadonlyDictionary<number>): string {
 *     let winner = "";
 *     let highScore = 0;
 *
 *     for (const name of Object.keys(scores)) {
 *         if (scores[name] > highScore) {
 *             highScore = scores[name];
 *             winner = name;
 *         }
 *     }
 *
 *     return name;
 * }
 * ```
 *
 * @deprecated Use `Readonly<Record<TKey, TElement>>` or `ReadonlyMap<TKey, TElement>` instead.
 */
export type ReadonlyDictionary<TElement, TKey extends Key = string> = Readonly<Record<TKey, TElement>>;

/**
 * An object containing elements of type T, keyed by numbers.
 *
 * @deprecated Use `Record<number, T>` or `Map<number, T>` instead.
 */
export type NumberMap<T> = Dictionary<T, number>;

/**
 * A read-only object containing elements of type T, keyed by numbers.
 *
 * @deprecated Use `Readonly<Record<number, T>>` or `ReadonlyMap<number, T>` instead.
 */
export type ReadonlyNumberMap<T> = ReadonlyDictionary<T, number>;
