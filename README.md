# Dictionary Types

Convenient type definitions for commonly used dictionary/map style objects
in TypeScript.


## Installation and usage

```bash
npm install --save dictionary-types
```

```typescript
import {
    Dictionary,
    ReadonlyDictionary,
    NumberMap,
    ReadonlyNumberMap
} from "dictionary-types";
```


## Dictionary\<T>

An object containing elements of type `T`, keyed by `string`.

```typescript
const scores: Dictionary<number> = {
    "Amelia": 4,
    "Riley": 7,
    "April": 5
};

scores["Xander"] = 3;
```


## Dictionary\<TValue, TKey>

An object containing elements of type `TValue`, keyed by `TKey`.

```typescript
const amelia = Symbol();
const riley = Symbol();
const april = Symbol();
const xander = Symbol();

type Participant = typeof amelia | typeof riley | typeof april | typeof xander;

const scores: Dictionary<number, Participant> = {
    [amelia]: 4,
    [riley]: 7,
    [april]: 5
};

scores[xander] = 3;
```


## ReadonlyDictionary\<T>

A read-only object containing elements of type `T`, keyed by `string`.

```typescript
function winner(scores: ReadonlyDictionary<number>): string {
    let winner = "";
    let highScore = 0;

    for (const name of Object.keys(scores)) {
        if (scores[name] > highScore) {
            highScore = scores[name];
            winner = name;
        }
    }

    return name;
}
```


## ReadonlyDictionary\<TValue, TKey>

A read-only object containing elements of type `TValue`, keyed by `TKey`.

```typescript
const amelia = Symbol();
const riley = Symbol();
const april = Symbol();
const xander = Symbol();

type Participant = typeof amelia | typeof riley | typeof april | typeof xander;

function winner(scores: ReadonlyDictionary<number, Participant>): Participant | null {
    let winner: Participant | null = null;
    let highScore = 0;
    
    for (const participant of [amelia, riley, april, xander]) {
        if (scores[participant] > highScore) {
            highScore = scores[participant];
            winner = participant;
        }
    }
    
    return winner;
}
```


## NumberMap\<T>

An object containing elements of type `T`, keyed by `number`.


## ReadonlyNumberMap\<T>

A read-only object containing elements of type `T`, keyed by `number`.


## Copyright

See [LICENSE.md](LICENSE.md).
