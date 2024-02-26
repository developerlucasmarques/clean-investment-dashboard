import { type IUseCase } from '@/shared/core/usecase'
import { type Result } from '@/shared/core'
import { type EmailInUseError } from './errors/create-user-errors'
import type { CreateUserEntityErrors, DataCreateUser } from '../../entity/user-types'
import { type UserAccessToken } from '../../entity/value-objects'

export type CreateUserIn = Omit<DataCreateUser, 'id'>

export type CreateUserOut = Result<CreateUserEntityErrors | EmailInUseError, UserAccessToken>

export interface ICreateUser extends IUseCase<CreateUserIn, CreateUserOut> {}
