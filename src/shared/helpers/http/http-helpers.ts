import { BadRequestException, type HttpException } from '@nestjs/common'
import { type CoreError } from '@/shared/core'
import { type HttpResponseError } from './http-types'

export const badRequest = ({ name, message }: CoreError): HttpException => {
  return new BadRequestException({
    statusCode: 400,
    error: message,
    name
  })
}

export const serverError = (): HttpResponseError => ({
  statusCode: 500,
  error: 'Internal server error',
  name: 'InternalServerError'
})
