import { Module } from '@nestjs/common'
import { CreateUserController } from './presentation/controllers/create-user.controller'
import { UserUseCasesModule } from './usecases/user-usecases.module'

@Module({
  imports: [UserUseCasesModule],
  controllers: [CreateUserController]
})
export class UserModule {}
