import { type CoreError } from './core-error'

export type Result<E extends CoreError, H> = Bad<E, H> | Hit<E, H>

interface Results<E extends CoreError, H> {
  isBad: () => this is Bad<E, H>
  isHit: () => this is Hit<E, H>
}

class Bad<E extends CoreError, H> implements Results<E, H> {
  public constructor (public readonly value: E) {}

  public isBad (): this is Bad<E, H> { return true }

  public isHit (): this is Hit<E, H> { return false }
}

class Hit<E extends CoreError, H> implements Results<E, H> {
  public constructor (public readonly value: H) {}

  public isBad (): this is Bad<E, H> { return false }

  public isHit (): this is Hit<E, H> { return true }
}

export const bad = <const E extends CoreError, const H> (error: E): Bad<E, H> => {
  return new Bad<E, H>(error)
}

export function hit<const E extends CoreError, const H extends void> (result?: H): Hit<E, H>
export function hit<const E extends CoreError, const H> (result: H): Hit<E, H>
export function hit<const E extends CoreError, const H> (result: H): Hit<E, H> {
  return new Hit<E, H>(result)
}
