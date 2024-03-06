import { left, right, type Either } from '@/shared/core'
import { ValueObject } from '@/shared/domain'
import { UserNameError } from './errors/value-objects-errors'

export class UserName extends ValueObject<string> {
  private constructor (name: string) {
    super(name)
  }

  static create (name: string): Either<UserNameError, UserName> {
    if (name.length < 5) {
      return left(new UserNameError(name))
    }
    return right(new UserName(name))
  }
}
