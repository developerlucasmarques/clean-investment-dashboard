import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import env from 'main/configs/env'
import { AuthService } from './auth.service'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: env.jwtSecretKey,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
