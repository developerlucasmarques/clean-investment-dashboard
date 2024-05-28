import { SearchParams, type SearchProps } from '../search-params'

const makeSut = <Filter = string> (props?: SearchProps<Filter>): SearchParams<Filter> => {
  return new SearchParams<Filter>(props)
}

describe('SearchParams', () => {
  it('Should create SearchParams instance with valid properties if no values are received', () => {
    const sut = makeSut()

    expect(sut).toEqual({
      page: 1,
      recordsPerPage: 10,
      sort: null,
      sortDir: null,
      filter: null
    })
  })

  it('Should create SearchParams instance with correct values', () => {
    const sut = makeSut({
      page: 3,
      recordsPerPage: 5,
      sort: 'name',
      sortDir: 'asc'
    })

    expect(sut).toEqual({
      page: 3,
      recordsPerPage: 5,
      sort: 'name',
      sortDir: 'asc',
      filter: null
    })
  })

  it('Should create SearchParams instance with correct filter', () => {
    const sut = makeSut({
      filter: {
        name: 'any_name_filter',
        age: 20
      }
    })

    expect(sut).toEqual({
      page: 1,
      recordsPerPage: 10,
      sort: null,
      sortDir: null,
      filter: {
        name: 'any_name_filter',
        age: 20
      }
    })
  })

  it('Should create SearchParams instance with correct filter', () => {
    const sut = makeSut({
      filter: {
        name: 'any_name_filter',
        age: 20
      }
    })

    expect(sut).toEqual({
      page: 1,
      recordsPerPage: 10,
      sort: null,
      sortDir: null,
      filter: {
        name: 'any_name_filter',
        age: 20
      }
    })
  })
})
