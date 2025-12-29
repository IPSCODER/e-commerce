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

export const createProduct = async (data:any) => {
  const {name,description,price,stock,image_url} = data

  const {rows} = await pool.query(
    `INSERT INTO products (name, description, price, stock, image_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [name,description,price,stock,image_url]
  )
  return rows[0]
}

export const updateProduct = async (id:string,data:any) => {
  const {name,description,price,stock,image_url} = data

  const {rows} = await pool.query(
    `UPDATE products
    SET name=$1, description=$2, price=$3, stock=$4, image_url=$5
    WHERE id=$6
    RETURNING *`,
    [name,description,price,stock,image_url,id]
  )
  return rows[0]
}

export const deleteProduct = async (id:string) => {
  await pool.query(
    `UPDATE products SET is_active=false WHERE id=$1`,[id]
  )
}

