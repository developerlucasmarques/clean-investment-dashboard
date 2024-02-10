import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<T> {
  public constructor (
    private readonly props: T,
    protected readonly id: UniqueEntityID
  ) {
    this.id = id ?? new UniqueEntityID()
  }
}
