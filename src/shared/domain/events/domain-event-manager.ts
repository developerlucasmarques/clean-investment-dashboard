import { type AggregateRoot } from '../aggregate-root'

export interface IDomainEventManager {
  registerDomainEvent: (eventName: string, handler: () => any) => void
  publishDomainEvent: (aggregateRoot: AggregateRoot<any>) => Promise<void>
}
