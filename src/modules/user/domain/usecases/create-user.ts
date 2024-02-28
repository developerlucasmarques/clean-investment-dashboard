import { type Either } from '@/shared/core'
import { type IUseCase } from '@/shared/core/usecase'
import type { CreateUserEntityErrors, CreateUserEntityInput } from '@/modules/user/domain/entity/user-types'
import { type AccessToken } from '../cryptography/access-token'
import { type EmailInUseError } from './errors/create-user-errors'

export type CreateUserUseCaseInput = Omit<CreateUserEntityInput, 'id'>

export type CreateUserUseCaseOutput = Either<CreateUserEntityErrors | EmailInUseError, AccessToken>

export interface ICreateUserUseCase extends IUseCase<CreateUserUseCaseInput, CreateUserUseCaseOutput> {}
