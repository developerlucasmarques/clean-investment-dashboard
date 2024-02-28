import { type Either } from '@/shared/core'
import { type IUseCase } from '@/shared/core/usecase'
import type { CreateUserEntityErrors, DataCreateUser } from '@/modules/user/domain/entity/user-types'
import { type AccessToken } from '../cryptography/access-token'
import { type EmailInUseError } from './errors/create-user-errors'

export type CreateUserInput = Omit<DataCreateUser, 'id'>

export type CreateUserOutput = Either<CreateUserEntityErrors | EmailInUseError, AccessToken>

export interface ICreateUserUseCase extends IUseCase<CreateUserInput, CreateUserOutput> {}
