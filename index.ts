export interface Dictionary<T> {
    [key: string]: T;
}

export interface ReadonlyDictionary<T> {
    readonly [key: string]: T;
}

export interface NumberMap<T> {
    [key: number]: T;
}

export interface ReadonlyNumberMap<T> {
    readonly [key: number]: T;
}
