import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<T> {
  public constructor (
    private readonly props: T,
    private readonly id?: UniqueEntityID
  ) {
    this.id = id ?? new UniqueEntityID()
  }

  public getProp<K extends keyof T>(key: K): T[K] {
    return this.props[key]
  }

  public getId (): UniqueEntityID {
    return this.id as UniqueEntityID
  }
}
