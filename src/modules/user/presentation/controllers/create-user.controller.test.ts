/**
 * @jest-environment ./src/main/configs/db-test/custom-environment-jest.ts
*/

import { AppModule } from '@/main/app.module'
import { HttpExceptionFilter } from '@/main/filters/http-exception.filter'
import { type INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

let app: INestApplication

describe('CreateUserController', () => {
  beforeAll(
    async () => {
      const module = await Test.createTestingModule({
        imports: [AppModule]
      }).compile()

      app = module.createNestApplication()
      app.useGlobalFilters(new HttpExceptionFilter())
      await app.init()
    }
  )

  afterAll(
    async () => {
      await app.close()
    }
  )

  describe('POST /user', () => {
    it('Should create a User on success', async () => {
      await request(app.getHttpServer())
        .post('/user')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com'
        })
        .expect(201)
    })
  })
})
