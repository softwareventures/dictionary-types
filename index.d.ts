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
export interface Dictionary<T> {
    [key: string]: T;
}

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
export interface ReadonlyDictionary<T> {
    readonly [key: string]: T;
}

/**
 * An object containing elements of type T, keyed by numbers.
 */
export interface NumberMap<T> {
    [key: number]: T;
}

/**
 * A read-only object containing elements of type T, keyed by numbers.
 */
export interface ReadonlyNumberMap<T> {
    readonly [key: number]: T;
}
