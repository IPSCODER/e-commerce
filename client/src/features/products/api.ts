import api from '../../lib/axios'
import type { Product } from './types'

interface ProductListParams {
  limit?: number
  offset?: number
}

export const getProducts = async (
  params: ProductListParams
): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products', {
    params
  })
  return response.data
}

export const getProductById = async (
  id: string
): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`)
  return response.data
}
