import { Module } from '@nestjs/common'
import { CreateUserController } from './controllers/create-user.controller'
import { UserMikroOrmRepository } from './infra/repository/user-mikro-orm.repository'
import { CreateUserUseCase } from './usecases/create-user.usecase'
import { IAddUserRepository } from './domain/repository/user-repository'
import { IEncrypter } from './domain/cryptography/encryper'
import { JwtAdapter } from './infra/cryptography/auth/jwt-adapter'
import { AuthModule } from './infra/cryptography/auth/jwt-adapter.module'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { UserEntity } from './infra/repository/user-mikro-orm.entity'

@Module({
  imports: [
    MikroOrmModule.forFeature([UserEntity]),
    AuthModule
  ],
  providers: [
    CreateUserUseCase,
    {
      provide: IAddUserRepository,
      useClass: UserMikroOrmRepository
    },
    {
      provide: IEncrypter,
      useClass: JwtAdapter
    }
  ],
  controllers: [CreateUserController]
})
export class UserModule {}
