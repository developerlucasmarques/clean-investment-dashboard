import { Module } from '@nestjs/common'
import { UserMikroOrmRepository } from './user-mikro-orm.repository'
import { UserDbEntity } from './user-mikro-orm.db-entity'
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  imports: [
    MikroOrmModule.forFeature([
      UserDbEntity
    ])
  ],
  providers: [UserMikroOrmRepository]
})
export class UserModuleMO {}
