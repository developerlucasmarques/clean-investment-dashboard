import { Entity } from './entity'
import { type DomainEvent } from './events'
import { type UniqueEntityID } from './unique-entity-id'

export abstract class AgregateRoot<T extends { id: UniqueEntityID }> extends Entity<T> {
  private readonly _domainEvents: DomainEvent[] = []

  public get domainEvents (): DomainEvent[] {
    return this._domainEvents
  }

  protected addDomainEvent (domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent)
  }
}
