import { Module } from '@nestjs/common'
import { UserRepositoryMO } from './user-mikro-orm.repository'
import { UserEntityMO } from './user-mikro-orm.entity'
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  imports: [
    MikroOrmModule.forFeature([
      UserEntityMO
    ])
  ],
  providers: [UserRepositoryMO]
})
export class UserModuleMO {}
