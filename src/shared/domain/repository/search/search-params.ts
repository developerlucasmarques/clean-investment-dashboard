import { type SortDirection } from './sort-direction'

export type SearchProps<Filter = string> = Partial<{
  page: number
  recordsPerPage: number
  sort: string
  sortDir: SortDirection
  filter: Filter
}>

export class SearchParams<Filter = string> {
  readonly page: number
  readonly recordsPerPage: number
  readonly sort: string | null
  readonly sortDir: SortDirection | null
  readonly filter: Filter | string | null

  constructor (props: SearchProps = {}) {
    this.page = props.page ?? 1
    this.recordsPerPage = props.recordsPerPage ?? 10
    this.sort = props.sort ?? null
    this.sortDir = props.sortDir ?? null
    this.filter = props.filter ?? null
  }
}
