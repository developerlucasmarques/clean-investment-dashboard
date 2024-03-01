import { ApplicationService } from '@/main/application'
import { Application } from '@/shared/core'
import { Module } from '@nestjs/common'
import { Encrypter } from '../domain/cryptography/encryper'
import { AddUserRepository } from '../domain/repository/user-repository'
import { JwtAdapter } from '../infra/cryptography/jwt/jwt-adapter'
import { JwtAdapterModule } from '../infra/cryptography/jwt/jwt-adapter.module'
import { UserModuleMO } from '../infra/repository/user-mikro-orm.module'
import { UserMikroOrmRepository } from '../infra/repository/user-mikro-orm.repository'
import { CreateUserUseCase } from './create-user.usecase'

@Module({
  imports: [JwtAdapterModule, UserModuleMO],
  providers: [
    CreateUserUseCase,
    {
      provide: AddUserRepository,
      useClass: UserMikroOrmRepository
    },
    {
      provide: Encrypter,
      useClass: JwtAdapter
    },
    {
      provide: Application,
      useClass: ApplicationService
    }
  ],
  exports: [CreateUserUseCase]
})
export class UserUseCasesModule {}
