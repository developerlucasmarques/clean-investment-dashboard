import { bad, hit, type Result } from '@/shared/core'
import { ValueObject } from '@/shared/domain'
import { UserNameError } from './errors'

export type UserNameProps = {
  name: string
}

export class UserName extends ValueObject<UserNameProps> {
  private constructor (name: string) {
    super({ name })
  }

  public create ({ name }: UserNameProps): Result<UserNameError, UserName> {
    if (name.length < 5) {
      return bad(new UserNameError(name))
    }
    return hit(new UserName(name))
  }
}
