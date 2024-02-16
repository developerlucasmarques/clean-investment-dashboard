import { type DomainEvent } from '@/shared/domain/events'
import { type User } from '../user'

export class UserCreated implements DomainEvent {
  public readonly dateTimeOccurred: Date
  private readonly _user: string

  public constructor (user: User) {
    this.dateTimeOccurred = new Date()
    this._user = JSON.stringify(user)
  }

  public get user (): User {
    return JSON.parse(this._user)
  }
}
