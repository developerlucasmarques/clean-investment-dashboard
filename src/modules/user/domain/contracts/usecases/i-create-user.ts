import { type IUseCase } from '@/shared/core/i-usecase'
import { type Result } from '@/shared/core'
import { type EmailInUseError } from './errors/create-user-errors'
import type { CreateUserEntityErrors, DataCreateUser } from '../../entity/user-types'

export type CreateUserIn = Omit<DataCreateUser, 'id'>

export type CreateUserOut = Result<CreateUserEntityErrors | EmailInUseError, string>

export interface ICreateUser extends IUseCase<CreateUserIn, CreateUserOut> {}
