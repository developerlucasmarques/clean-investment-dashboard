import { Module } from '@nestjs/common'
import { UserMikroOrmRepository } from './user-mikro-orm.repository'
import { UserEntity } from './user-mikro-orm.entity'
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  imports: [
    MikroOrmModule.forFeature([
      UserEntity
    ])
  ],
  providers: [UserMikroOrmRepository]
})
export class UserMikroOrmModule {}
