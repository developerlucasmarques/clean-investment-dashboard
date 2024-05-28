import { type CoreError } from './core-error'

export type Either<L extends CoreError, R> = Left<L, R> | Right<L, R>

class Left<L extends CoreError, R> {
  constructor (readonly value: L) {}

  isLeft (): this is Left<L, R> { return true }

  isRight (): this is Right<L, R> { return false }
}

class Right<L extends CoreError, R> {
  constructor (readonly value: R) {}

  isLeft (): this is Left<L, R> { return false }

  isRight (): this is Right<L, R> { return true }
}

export const left = <const L extends CoreError, const R> (error: L): Left<L, R> => {
  return new Left<L, R>(error)
}

export function right<const L extends CoreError, const R extends void> (result?: R): Right<L, R>
export function right<const L extends CoreError, const R> (result: R): Right<L, R>
export function right<const L extends CoreError, const R> (result: R): Right<L, R> {
  return new Right<L, R>(result)
}
