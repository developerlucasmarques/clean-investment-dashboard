import { type AggregateRoot } from '../aggregate-root'
import { type UniqueEntityID } from '../unique-entity-id'

export interface IDomainEventManager<T extends { id: UniqueEntityID }> {
  registerDomainEvent: (eventName: string, handler: () => any) => void
  publishDomainEvent: (aggregateRoot: AggregateRoot<T>) => Promise<void>
}
