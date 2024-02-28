import { NonUniqueFieldNameException } from '@mikro-orm/core'
import { Catch, HttpException, type ArgumentsHost, type ExceptionFilter } from '@nestjs/common'
import type { Response } from 'express'
import { serverError } from '@/shared/helpers'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch (exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    let statusCode = 500
    let bodyException = serverError() as string | object

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus()
      bodyException = exception.getResponse()
    }
    if (statusCode === 500) {
      const error = new NonUniqueFieldNameException(exception)

      if (error.code === '23505') {
        statusCode = 400
        bodyException = {
          statusCode: 400,
          error: 'Unique data already exists',
          name: 'UniqueConstraintViolated'
        }
      }
    }
    response.status(statusCode).json(bodyException)
  }
}
