import type { CreateUserEntityErrors, CreateUserEntityInput } from '@/modules/user/domain/entity/user-types'
import { type Either } from '@/shared/core'
import { type UseCase } from '@/shared/core/usecase'
import { type AccessToken } from '../cryptography/access-token'
import { type EmailInUseError } from './errors/create-user-errors'

export type CreateUserInput = Omit<CreateUserEntityInput, 'id'>

export type CreateUserOutput = Either<CreateUserEntityErrors | EmailInUseError, AccessToken>

export interface CreateUser extends UseCase<CreateUserInput, CreateUserOutput> {}
