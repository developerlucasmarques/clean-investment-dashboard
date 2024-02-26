import { MikroOrmModule } from '@mikro-orm/nestjs'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { Module } from '@nestjs/common'
import { UserEntity } from 'modules/user/infra/repository/user-entity'

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [UserEntity],
      dbName: 'nest',
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      driver: PostgreSqlDriver
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
