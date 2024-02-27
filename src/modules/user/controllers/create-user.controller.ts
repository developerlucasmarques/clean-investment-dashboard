import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { CreateUserUseCase } from '../usecases/create-user-usecase'
import { CreateUserDto } from './dtos/create-use.dto'

@Controller('/user')
export class CreateUserController {
  constructor (private readonly createUser: CreateUserUseCase) {}

  @Post('/')
  async perform (@Body() body: CreateUserDto): Promise<any> {
    const createUserResult = await this.createUser.execute(body)

    if (createUserResult.isLeft()) {
      throw new BadRequestException(createUserResult.value)
    }
    return createUserResult.value
  }
}
