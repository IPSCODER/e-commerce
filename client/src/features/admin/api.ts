import api from "../../lib/axios";
import type { Product } from "../products/types";
import type { CreateProductPayload } from "./types";


export const getAllProductsAdmin = async () => {
    const res = await api.get<Product[]>('/products')
    return res.data
}

export const createProduct = async (payload:CreateProductPayload) => {
    const res = await api.post('/products',payload)
    return res.data
}

export const getProductById = async (id: string): Promise<Product> => {
    const res = await api.get<Product>(`/products/${id}`)
    return res.data
  }

export const updateProduct = async (id:string,payload:any) =>{
    const res = await api.put(`/products/${id}`,payload)
    return res.data
}

export const deleteProduct = async (id:string) => {
    const res = await api.delete(`'/products/${id}`)
    return res.data
}
