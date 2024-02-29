import EventEmitter2 from 'eventemitter2'
import type { AggregateRoot, UniqueEntityID } from '../domain'
import { type IDomainEventManager } from '../domain/events'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DomainEventManagerEventEmmiter<T extends { id: UniqueEntityID }> implements IDomainEventManager<T> {
  private readonly domainEventSubscriber: EventEmitter2

  constructor () {
    this.domainEventSubscriber = new EventEmitter2({
      wildcard: true
    })
  }

  registerDomainEvent (eventName: string, handler: () => any): void {
    this.domainEventSubscriber.on(eventName, handler)
  }

  async publishDomainEvent (aggregateRoot: AggregateRoot<T>): Promise<void> {
    console.log('aggregateRootttttttt', aggregateRoot)
    for (const event of aggregateRoot.uncommittedEvents) {
      aggregateRoot.markEventsAsDispatched(event)
      console.log('EVENT 222', event)
      await this.domainEventSubscriber.emitAsync(event.name, event)
    }
  }
}
