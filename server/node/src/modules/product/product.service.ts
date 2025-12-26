import * as repo from './product.repository'

export const getProducts = async (query: any) => {
  const limit = query.limit ? Number(query.limit) : 10
  const offset = query.offset ? Number(query.offset) : 0

  return repo.getAllProducts(limit, offset)
}
export const getProductById = async (id: string) => {
  if (!id) {
    throw new Error('Product ID is required')
  }

  const product = await repo.getProductById(id)

  if (!product) {
    throw new Error('Product not found')
  }

  return product
}
