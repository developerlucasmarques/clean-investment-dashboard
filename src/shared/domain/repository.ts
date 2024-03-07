import { type AggregateRoot } from './aggregate-root'

export interface AddRepository<T extends AggregateRoot<any>> {
  add: (aggregate: T) => Promise<void>
}
