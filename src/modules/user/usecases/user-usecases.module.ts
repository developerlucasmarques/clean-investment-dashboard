import { ApplicationService } from '@/main/application'
import { Application } from '@/shared/core'
import { Module } from '@nestjs/common'
import { AbstEncrypter } from '../domain/cryptography/encryper'
import { AbstAddUserRepository } from '../domain/repository/user-repository'
import { JwtAdapter } from '../infra/cryptography/jwt/jwt-adapter'
import { JwtAdapterModule } from '../infra/cryptography/jwt/jwt-adapter.module'
import { UserModuleMO } from '../infra/repository/user-mikro-orm.module'
import { UserRepositoryMO } from '../infra/repository/user-mikro-orm.repository'
import { CreateUserUseCase } from './create-user.usecase'
import { DomainEventManager } from '@/shared/domain/events'
import { DomainEventManagerEventEmmiter } from '@/main/application/event-manager'

@Module({
  imports: [JwtAdapterModule, UserModuleMO],
  providers: [
    CreateUserUseCase,
    {
      provide: AbstAddUserRepository,
      useClass: UserRepositoryMO
    },
    {
      provide: AbstEncrypter,
      useClass: JwtAdapter
    },
    {
      provide: Application,
      useClass: ApplicationService
    },
    {
      provide: DomainEventManager,
      useClass: DomainEventManagerEventEmmiter
    }
  ],
  exports: [CreateUserUseCase]
})
export class UserUseCasesModule {}
