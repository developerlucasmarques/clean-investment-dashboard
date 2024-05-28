import { Module } from '@nestjs/common'
import { Encryptor } from '../domain/contracts/cryptography/encryptor'
import { UserRepository } from '../domain/contracts/repository/user-repository'
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
      provide: UserRepository.AddUser,
      useClass: UserMikroOrmRepository
    },
    {
      provide: Encryptor,
      useClass: JwtAdapter
    }
  ],
  exports: [CreateUserUseCase]
})
export class UserUseCasesModule {}
