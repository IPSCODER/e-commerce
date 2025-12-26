import { Pool } from 'pg'

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is not defined')
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export const connectDB = async () => {
  try {
    await pool.query('SELECT 1')
    console.log('✅ Database connected')
  } catch (error) {
    console.error('❌ Database connection failed', error)
    process.exit(1)
  }
}
