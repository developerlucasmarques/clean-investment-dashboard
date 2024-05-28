import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT ?? 3030,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  dbUrl: process.env.DB_URL,
  dbTestUrl: process.env.DB_TEST_URL
}
