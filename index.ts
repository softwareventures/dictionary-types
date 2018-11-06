export interface Dictionary<T> {
    [key: string]: T;
}

export interface ReadonlyDictionary<T> {
    readonly [key: string]: T;
}
