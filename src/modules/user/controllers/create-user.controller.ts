import { Body, Controller, Post } from '@nestjs/common'
import { badRequest } from '@/shared/helpers'
import { CreateUserUseCase } from '../usecases/create-user.usecase'
import { CreateUserDto } from './dtos/create-use.dto'
import { type AccessToken } from '../domain/cryptography/access-token'
import { type IController } from '@/shared/domain'

@Controller('/user')
export class CreateUserController implements IController {
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
