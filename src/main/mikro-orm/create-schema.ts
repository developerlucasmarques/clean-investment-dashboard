import { MikroORM } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { UserDbEntity } from '../../modules/user/infra/repository/user-mikro-orm.db-entity'

export const createSchema = async (clientUrl: string): Promise<void> => {
  const orm = await MikroORM.init({
    entities: [UserDbEntity],
    clientUrl,
    driver: PostgreSqlDriver,
    allowGlobalContext: true
  })
  const generator = orm.schema

  // const dropDump = await generator.getDropSchemaSQL()

  // console.log(dropDump)

  await generator.getCreateSchemaSQL()

  // console.log(createDump)

  // const updateDump = await generator.getUpdateSchemaSQL()

  // console.log(updateDump)

  // there is also `generate()` method that returns drop + create queries
  // const dropAndCreateDump = await generator.generate()

  // console.log(dropAndCreateDump)

  // or you can run those queries directly, but be sure to check them first!
  // await generator.dropSchema()
  await generator.createSchema()
  // await generator.updateSchema()

  // in tests it can be handy to use those:
  await generator.refreshDatabase() // ensure db exists and is fresh
  // await generator.clearDatabase() // removes all data

  await orm.close(true)
}
