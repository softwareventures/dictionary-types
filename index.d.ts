/**
 * An object containing elements of type T, keyed by strings.
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
export type Dictionary<TElement> = Record<string, TElement>;

/**
 * A read-only object containing elements of type T, keyed by strings.
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
export type ReadonlyDictionary<TElement> = Readonly<Record<string, TElement>>;

/**
 * An object containing elements of type T, keyed by numbers.
 */
export type NumberMap<T> = Record<number, T>;

/**
 * A read-only object containing elements of type T, keyed by numbers.
 */
export type ReadonlyNumberMap<T> = Readonly<Record<number, T>>;
