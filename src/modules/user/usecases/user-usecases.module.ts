import { Module } from '@nestjs/common'
import { UserMikroOrmModule } from '../infra/repository/user-mikro-orm.module'
import { CreateUserUseCase } from './create-user.usecase'
import { IAddUserRepository } from '../domain/repository/user-repository'
import { UserMikroOrmRepository } from '../infra/repository/user-mikro-orm.repository'
import { IEncrypter } from '../domain/cryptography/encryper'
import { JwtAdapter } from '../infra/cryptography/jwt/jwt-adapter'
import { JwtAdapterModule } from '../infra/cryptography/jwt/jwt-adapter.module'

@Module({
  imports: [JwtAdapterModule, UserMikroOrmModule],
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
  exports: [CreateUserUseCase]
})
export class UserUseCasesModule {}
