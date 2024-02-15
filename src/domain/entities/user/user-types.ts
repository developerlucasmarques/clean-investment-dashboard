import type { UniqueEntityID } from '@/shared/domain'
import type { UserEmail, UserName } from './value-objects'

export type UserProps = {
  id: UniqueEntityID
  name: UserName
  email: UserEmail
}

export type DataCreateUser = {
  id?: string
  name: string
  email: string
}
