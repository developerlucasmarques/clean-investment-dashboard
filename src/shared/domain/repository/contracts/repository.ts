import { type AggregateRoot } from '@/shared/domain/aggregate-root'
import type { SearchParams, SearchResult } from '../search'

export interface AddRepository<T extends AggregateRoot<any>> {
  add: (aggregate: T) => Promise<void>
}

export interface SearchableRepository<
  T extends AggregateRoot<any>,
  Filter = string,
  in SearchInput = SearchParams,
  out SearchOutput = SearchResult<T, Filter>
> {
  search: (input: SearchInput) => Promise<SearchOutput>
}
