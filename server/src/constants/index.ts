import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.API_PORT ?? 4000
