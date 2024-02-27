import { Catch, HttpException, type ArgumentsHost, type ExceptionFilter } from '@nestjs/common'
import type { Response } from 'express'
import { serverError } from 'shared/helpers'

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
      const ex = exception as any

      console.log('EXCEPTIONNNNNNN', ex.code)
    }
    response.status(statusCode).json(bodyException)
  }
}
