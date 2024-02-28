import { MikroOrmModule } from '@mikro-orm/nestjs'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { Module } from '@nestjs/common'
import { UserEntity } from '@/modules/user/infra/repository/user-mikro-orm.entity'
import { UserModule } from '@/modules/user/user.module'

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [UserEntity],
      dbName: 'nest',
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      driver: PostgreSqlDriver
    }),
    UserModule
  ]
})
export class AppModule {}
