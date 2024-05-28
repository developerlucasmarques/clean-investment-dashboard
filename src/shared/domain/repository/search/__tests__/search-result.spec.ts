import { AggregateRoot } from '@/shared/domain'
import { SearchResult, type SearchResultProps } from '../search-result'

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('any_mock_id'),
  validate: jest.fn().mockReturnValue(true)
}))

const makeAggregateRoot = <T>(props: T): AggregateRoot<any> => {
  class EntityStub extends AggregateRoot<T> {
    constructor (props: T) {
      super(props)
    }
  }

  return new EntityStub(props)
}

const makeSut = <T extends AggregateRoot<any>, Filter>
  (props: SearchResultProps<T, Filter>): SearchResult<T, Filter> => {
  return new SearchResult<T, Filter>(props)
}

describe('SearchResult', () => {
  it('Should create SearchResult instance with correct values', () => {
    const sut = makeSut({
      items: [
        makeAggregateRoot<{ value: string }>({ value: 'any_value' }),
        makeAggregateRoot<{ other: string }>({ other: 'other_value' })
      ],
      itemsTotal: 100,
      currentPage: 1,
      recordsPerPage: 10,
      sort: 'name',
      sortDir: 'asc',
      filter: 'any_filter'
    })

    expect(JSON.stringify(sut)).toBe(
      JSON.stringify({
        items: [
          { id: 'any_mock_id', value: 'any_value' },
          { id: 'any_mock_id', other: 'other_value' }
        ],
        itemsTotal: 100,
        currentPage: 1,
        recordsPerPage: 10,
        lastPage: 10,
        sort: 'name',
        sortDir: 'asc',
        filter: 'any_filter'
      })
    )
  })

  it('Should create SearchResult instance with correct last page', () => {
    const sut = makeSut({
      items: [
        makeAggregateRoot<{ value: string }>({ value: 'any_value' }),
        makeAggregateRoot<{ other: string }>({ other: 'other_value' })
      ],
      itemsTotal: 101,
      currentPage: 15,
      recordsPerPage: 10,
      sort: 'name',
      sortDir: 'asc',
      filter: 'any_filter'
    })

    expect(sut.lastPage).toBe(11)
  })
})
