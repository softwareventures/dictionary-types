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
 */
export type Dictionary<TElement, TKey extends keyof any = string> = Record<TKey, TElement>;

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
 */
export type ReadonlyDictionary<TElement, TKey extends keyof any = string> = Readonly<Record<TKey, TElement>>;

/**
 * An object containing elements of type T, keyed by numbers.
 */
export type NumberMap<T> = Dictionary<T, number>;

/**
 * A read-only object containing elements of type T, keyed by numbers.
 */
export type ReadonlyNumberMap<T> = ReadonlyDictionary<T, number>;
