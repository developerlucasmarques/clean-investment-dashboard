import { DomainEvent } from '@/shared/domain/events'
import { type User } from '../user'

export class UserCreatedDomainEvent extends DomainEvent<User> {
  public constructor (user: User) {
    super(user)
  }
}
