import { type AggregateRoot } from '../domain/aggregate-root'

export interface IDbEntity {
  aggregate: AggregateRoot<any>
}
