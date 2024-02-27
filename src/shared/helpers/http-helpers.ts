import { BadRequestException } from '@nestjs/common'
import { type CoreError } from 'shared/core'

export const badRequest = ({ name, message }: CoreError): void => {
  throw new BadRequestException({
    statusCode: 400,
    error: message,
    name
  })
}
