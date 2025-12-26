import { useQuery } from '@tanstack/react-query'
import { getProducts, getProductById } from './api'

export const useProducts = (limit = 10, offset = 0) => {
  return useQuery({
    queryKey: ['products', limit, offset],
    queryFn: () => getProducts({ limit, offset })
  })
}

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id
  })
}
