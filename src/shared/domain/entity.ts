import { type UniqueEntityID } from './unique-entity-id'

export abstract class Entity<T extends { id: UniqueEntityID }> {
  protected constructor (protected readonly props: T) {}
}
