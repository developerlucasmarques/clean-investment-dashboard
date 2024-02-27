import { type CoreError } from './core-error'

export type Either<E extends CoreError, H> = Left<E, H> | Right<E, H>

interface Eithers<E extends CoreError, H> {
  isLeft: () => this is Left<E, H>
  isRight: () => this is Right<E, H>
}

class Left<E extends CoreError, H> implements Eithers<E, H> {
  constructor (readonly value: E) {}

  isLeft (): this is Left<E, H> { return true }

  isRight (): this is Right<E, H> { return false }
}

class Right<E extends CoreError, H> implements Eithers<E, H> {
  constructor (readonly value: H) {}

  isLeft (): this is Left<E, H> { return false }

  isRight (): this is Right<E, H> { return true }
}

export const left = <const E extends CoreError, const H> (error: E): Left<E, H> => {
  return new Left<E, H>(error)
}

export function right<const E extends CoreError, const H extends void> (result?: H): Right<E, H>
export function right<const E extends CoreError, const H> (result: H): Right<E, H>
export function right<const E extends CoreError, const H> (result: H): Right<E, H> {
  return new Right<E, H>(result)
}
