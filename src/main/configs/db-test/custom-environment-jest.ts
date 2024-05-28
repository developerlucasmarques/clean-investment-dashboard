import type { EnvironmentContext, JestEnvironmentConfig } from '@jest/environment'
import NodeEnvironment from 'jest-environment-node'
import { Client } from 'pg'
import { createSchema } from '../../mikro-orm/create-schema'
import env from '../env'

const baseUrl = env.dbTestUrl

class CustomEnvironment extends NodeEnvironment {
  private readonly schema: string | null = null
  private readonly connectionString: string | undefined = undefined

  constructor (config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context)
    const randomString = Math.random().toString().substring(2, 10)

    this.schema = `code_schema_${randomString}`
    this.connectionString = `${baseUrl}${this.schema}`
  }

  async setup (): Promise<void> {
    process.env.DB_URL = this.connectionString
    this.global.process.env.DB_URL = this.connectionString
    await createSchema(this.connectionString as string)
  }

  async teardown (): Promise<void> {
    const client = new Client({
      connectionString: this.connectionString
    })

    await client.connect()
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`)
    await client.end()
  }
}

export default CustomEnvironment
