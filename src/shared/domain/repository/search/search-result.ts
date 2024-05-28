import { type AggregateRoot } from '../../aggregate-root'
import { type SortDirection } from './sort-direction'

export type SearchResultProps<T extends AggregateRoot<any>, Filter> = {
  items: T[]
  itemsTotal: number
  currentPage: number
  recordsPerPage: number
  sort: string | null
  sortDir: SortDirection | null
  filter: Filter | null
}

export class SearchResult<T extends AggregateRoot<any>, Filter = string > {
  readonly items: T[]
  readonly itemsTotal: number
  readonly currentPage: number
  readonly recordsPerPage: number
  readonly lastPage: number
  readonly sort: string | null
  readonly sortDir: SortDirection | null
  readonly filter: Filter | string | null

  constructor (props: SearchResultProps<T, Filter>) {
    this.items = props.items
    this.itemsTotal = props.itemsTotal
    this.currentPage = props.currentPage
    this.recordsPerPage = props.recordsPerPage
    this.lastPage = Math.ceil(this.itemsTotal / this.recordsPerPage)
    this.sort = props.sort
    this.sortDir = props.sortDir
    this.filter = props.filter
  }
}
