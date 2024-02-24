import { bad, hit, type Result } from '@/shared/core'
import { ValueObject } from '@/shared/domain'
import { UserNameError } from './errors/value-objects-erros'

export class UserName extends ValueObject<{ name: string }> {
  private constructor (name: string) {
    super({ name })
  }

  public static create (name: string): Result<UserNameError, UserName> {
    if (name.length < 5) {
      return bad(new UserNameError(name))
    }
    return hit(new UserName(name))
  }
}
