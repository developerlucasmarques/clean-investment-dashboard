import { UserCreatedDomainEvent } from './events'
import { User } from './user'
import { type CreateUserEntityInput } from './user-types'
import MockDate from 'mockdate'

jest.mock('crypto', () => ({
  randomUUID: jest.fn().mockReturnValue('any_mock_id')
}))

const makeFakeCreateUserEntityInput = (): CreateUserEntityInput => ({
  email: 'any_email@mail.com',
  name: 'any_name'
})

const makeSut = (id?: { id: string }): User => {
  return User.create({
    ...id && { ...id },
    ...makeFakeCreateUserEntityInput()
  }).value as User
}

describe('User Entity', () => {
  beforeAll(() => { MockDate.set(new Date()) })

  afterAll(() => { MockDate.reset() })

  it('Should return an User on success', () => {
    const sut = makeSut()

    expect(sut.id.value).toBe('any_mock_id')
    expect(sut.email.value).toEqual('any_email@mail.com')
    expect(sut.name.value).toEqual('any_name')
  })

  it('Should return an User with the same id informed', () => {
    const sut = makeSut({ id: 'another_id' })

    expect(sut.id.value).toBe('another_id')
    expect(sut.email.value).toEqual('any_email@mail.com')
    expect(sut.name.value).toEqual('any_name')
  })

  it('Should add to domainEvents a UserCreatedDomainEvent if is new User', () => {
    const sut = makeSut()
    const domainEvents = sut.domainEvents

    expect(domainEvents.length).toBe(1)
    expect(domainEvents[0]).toBeInstanceOf(UserCreatedDomainEvent)
    expect(domainEvents[0].name).toBe('UserCreatedDomainEvent')
    expect(domainEvents[0].occurredOn).toEqual(new Date())
    expect(domainEvents[0].payload.id).toEqual({ id: 'any_mock_id' })
  })

  it('Should not add to domainEvents a UserCreatedDomainEvent if already exists the same User', () => {
    const sut = makeSut({ id: 'user_id' })
    const domainEvents = sut.domainEvents

    expect(domainEvents.length).toBe(0)
  })
})
