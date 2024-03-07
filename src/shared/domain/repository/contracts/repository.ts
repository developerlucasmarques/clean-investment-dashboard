import { type AggregateRoot } from '../../aggregate-root'

export interface AddRepository<T extends AggregateRoot<any>> {
  add: (aggregate: T) => Promise<void>
}

export interface SearchableRepository<in SearchInput, out SearchOutput> {
  search: (input: SearchInput) => Promise<SearchOutput>
}
