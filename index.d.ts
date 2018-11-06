/**
 * An object containing elements of type T, keyed by strings.
 */
export interface Dictionary<T> {
    [key: string]: T;
}

/**
 * A read-only object containing elements of type T, keyed by strings.
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
