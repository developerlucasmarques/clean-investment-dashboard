import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import env from '@/main/configs/env'
import { JwtAdapter } from './jwt-adapter'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: env.jwtSecretKey,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [JwtAdapter]
})
export class JwtAdapterModule {}
