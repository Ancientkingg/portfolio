import seedrandom from 'seedrandom'
import { getContext, setContext } from 'svelte'

export const seeded = (seed: string) => seedrandom(seed);

export const usingMath = () => Math.random;


const key = Symbol()

export const nextRandom = () => (getContext(key) ?? usingMath())()
export const setGenerator = (generator: () => number) => setContext(key, generator)