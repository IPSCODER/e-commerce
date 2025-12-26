import { pool } from '../../config/db'

export const getAllProducts = async (
  limit: number,
  offset: number
) => {
  const query = `
    SELECT *
    FROM products
    WHERE is_active = true
    ORDER BY created_at DESC
    LIMIT $1 OFFSET $2
  `

  const { rows } = await pool.query(query, [limit, offset])
  return rows
}
export const getProductById = async (id: string) => {
  const query = `
    SELECT *
    FROM products
    WHERE id = $1 AND is_active = true
  `

  const { rows } = await pool.query(query, [id])
  return rows[0] || null
}
