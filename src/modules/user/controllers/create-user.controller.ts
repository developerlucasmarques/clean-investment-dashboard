import { badRequest } from '@/shared/helpers'
import { Body, Controller, Post } from '@nestjs/common'
import { type AccessToken } from '../domain/cryptography/access-token'
import { CreateUserUseCase } from '../usecases/create-user.usecase'
import { CreateUserDto } from './dtos/create-use.dto'

@Controller('/user')
export class CreateUserController {
  constructor (private readonly createUser: CreateUserUseCase) {}

  @Post('/')
  async perform (@Body() body: CreateUserDto): Promise<AccessToken> {
    const createUserResult = await this.createUser.execute(body)

    if (createUserResult.isLeft()) {
      throw badRequest(createUserResult.value)
    }
    return createUserResult.value
  }
}
