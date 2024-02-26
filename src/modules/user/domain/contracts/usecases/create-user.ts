import { type Result } from 'shared/core'
import { type IUseCase } from 'shared/core/usecase'
import type { CreateUserEntityErrors, DataCreateUser } from 'modules/user/domain/entity/user-types'
import { type AccessToken } from '../cryptography/access-token'
import { type EmailInUseError } from './errors/create-user-errors'

export type CreateUserIn = Omit<DataCreateUser, 'id'>

export type CreateUserOut = Result<CreateUserEntityErrors | EmailInUseError, AccessToken>

export interface ICreateUser extends IUseCase<CreateUserIn, CreateUserOut> {}
