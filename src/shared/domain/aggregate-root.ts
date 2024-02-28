import { Entity } from './entity'
import { type DomainEvent } from './events'
import { type UniqueEntityID } from './unique-entity-id'

export abstract class AggregateRoot<T extends { id: UniqueEntityID }> extends Entity<T> {
  private readonly _domainEvents: Set<DomainEvent<T>> = new Set<DomainEvent<T>>()
  private readonly _dispatchedEvents: Set<DomainEvent<T>> = new Set<DomainEvent<T>>()

  get domainEvents (): Array<DomainEvent<T>> {
    return Array.from(this._domainEvents)
  }

  get uncommittedEvents (): Array<DomainEvent<T>> {
    return this.domainEvents.filter((event) => {
      return !this._dispatchedEvents.has(event)
    })
  }

  protected markEventsAsDispatched (domainEvent: DomainEvent<T>): void {
    this._dispatchedEvents.add(domainEvent)
  }

  protected addDomainEvent (domainEvent: DomainEvent<T>): void {
    this._domainEvents.add(domainEvent)
  }
}
