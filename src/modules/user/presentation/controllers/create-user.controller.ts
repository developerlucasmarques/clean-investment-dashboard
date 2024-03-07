import { Application } from '@/shared/core'
import { badRequest } from '@/shared/helpers'
import { Body, Controller, Post } from '@nestjs/common'
import { type AccessToken } from '@/modules/user/domain/contracts/cryptography/access-token'
import { CreateUserUseCase } from '@/modules/user/usecases/create-user.usecase'
import { CreateUserDto } from './dtos/create-use.dto'

@Controller('/user')
export class CreateUserController {
  constructor (
    private readonly createUser: CreateUserUseCase,
    private readonly application: Application
  ) { }

  @Post('/')
  async perform (@Body() body: CreateUserDto): Promise<AccessToken> {
    return await this.application.run(async () => {
      const createUserResult = await this.createUser.execute(body)

      if (createUserResult.isLeft()) {
        throw badRequest(createUserResult.value)
      }
      return createUserResult.value
    })
  }
}
