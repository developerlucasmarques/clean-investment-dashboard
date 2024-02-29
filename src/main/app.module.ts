import { MikroOrmModule } from '@mikro-orm/nestjs'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { Module } from '@nestjs/common'
import { UserEntityMO } from '@/modules/user/infra/repository/user-mikro-orm.entity'
import { UserModule } from '@/modules/user/user.module'
import { ApplicationModule } from '@/shared/application'

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [UserEntityMO],
      dbName: 'nest',
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      driver: PostgreSqlDriver
    }),
    UserModule,
    ApplicationModule
  ]
})
export class AppModule {}
