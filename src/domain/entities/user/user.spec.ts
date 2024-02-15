import { hit } from '@/shared/core'
import { User } from './user'

jest.mock('@/shared/domain/unique-entity-id', () => ({
  UniqueEntityID: jest.fn().mockImplementation((id?: string) => ({
    id: id ?? 'any_id'
  }))
}))

jest.mock('@/domain/entities/user/value-objects/user-name', () => ({
  UserName: {
    create: jest.fn(() => {
      return hit({ props: 'any_name' })
    })
  }
}))

jest.mock('@/domain/entities/user/value-objects/user-email', () => ({
  UserEmail: {
    create: jest.fn(() => {
      return hit({ props: 'any_email@mail.com' })
    })
  }
}))

describe('User Entity', () => {
  it('Should return an User on success', async () => {
    const sut = User.create({
      name: 'any_name',
      email: 'any_email@mail.com'
    })

    expect(sut.value).toEqual({
      props: {
        id: { id: 'any_id' },
        email: { props: 'any_email@mail.com' },
        name: { props: 'any_name' }
      }
    })
  })

  it('Should return an User the same id informed', async () => {
    const sut = User.create({
      id: 'another_id',
      name: 'any_name',
      email: 'any_email@mail.com'
    })

    expect(sut.value).toEqual({
      props: {
        id: { id: 'another_id' },
        email: { props: 'any_email@mail.com' },
        name: { props: 'any_name' }
      }
    })
  })
})
