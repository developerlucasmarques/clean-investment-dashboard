import { type AggregateRoot } from '../aggregate-root'

export abstract class DomainEventManager {
  abstract registerDomainEvent: (eventName: string, handler: () => any) => void
  abstract publishDomainEvent: (aggregateRoot: AggregateRoot<any>) => Promise<void>
}
