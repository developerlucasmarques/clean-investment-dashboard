import { type UniqueEntityId } from './unique-entity-id'

export abstract class Entity<T extends { id: UniqueEntityId }> {
  protected constructor (protected readonly props: T) {}
}
