import type { EnvironmentContext, JestEnvironmentConfig } from '@jest/environment'
import { execSync } from 'child_process'
import NodeEnvironment from 'jest-environment-node'
import { Client } from 'pg'
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
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString
    execSync('npm run create:schema')
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
