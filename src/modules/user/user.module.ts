import { Module } from '@nestjs/common'
import { CreateUserController } from './controllers/create-user.controller'
import { UserRepository } from './infra/repository/user-repository'
import { CreateUserUseCase } from './usecases/create-user-usecase'
import { IAddUserRepository } from './domain/repository/user-repository'
import { IEncrypter } from './domain/cryptography/encryper'
import { AuthService } from './infra/cryptography/auth/auth.service'
import { AuthModule } from './infra/cryptography/auth/auth.module'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { UserEntity } from './infra/repository/user-entity'

@Module({
  imports: [
    MikroOrmModule.forFeature([UserEntity]),
    AuthModule
  ],
  providers: [
    CreateUserUseCase,
    {
      provide: IAddUserRepository,
      useClass: UserRepository
    },
    {
      provide: IEncrypter,
      useClass: AuthService
    }
  ],
  controllers: [CreateUserController]
})
export class UserModule {}
