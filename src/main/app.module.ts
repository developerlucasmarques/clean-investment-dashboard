import { MikroOrmModule } from '@mikro-orm/nestjs'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { Module } from '@nestjs/common'
import { UserEntityMO } from '@/modules/user/infra/repository/user-mikro-orm.entity'
import { UserModule } from '@/modules/user/user.module'
import { ApplicationModule } from '@/main/application'
import { DomainEventManagerModule } from './application/event-manager/domain-event-manager-event-emmiter.module'
import env from '@/main/configs/env'
@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [UserEntityMO],
      clientUrl: env.dbUrl,
      driver: PostgreSqlDriver,
      allowGlobalContext: true
    }),
    UserModule,
    ApplicationModule,
    DomainEventManagerModule
  ]
})
export class AppModule {}
