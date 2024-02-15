import { type UniqueEntityID } from './unique-entity-id'

export abstract class Entity<T extends { id?: UniqueEntityID }> {
  public constructor (
    private readonly props: T
  ) {}

  public getProp<K extends keyof T>(key: K): T[K] {
    return this.props[key]
  }
}
