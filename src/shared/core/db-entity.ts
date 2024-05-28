import { type AggregateRoot } from '../domain/aggregate-root'

export interface DbEntity {
  aggregate: AggregateRoot<any>
}
