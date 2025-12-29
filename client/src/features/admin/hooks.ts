import { useMutation,useQuery,useQueryClient } from "@tanstack/react-query";
import { createProduct, getProductById, updateProduct } from "./api";


export const useCreateProduct = () => {
    const qc = useQueryClient()

    return useMutation({
        mutationFn:createProduct,
        onSuccess:() =>{
            qc.invalidateQueries({queryKey:['admin-products']})
        }
    })
}

export const useAdminProduct = (id: string) => {
    return useQuery({
      queryKey: ['admin-product', id],
      queryFn: () => getProductById(id),
      enabled: !!id
    })
  }
  
  export const useUpdateProduct = () => {
    const qc = useQueryClient()
  
    return useMutation({
      mutationFn: ({ id, payload }: { id: string; payload: any }) =>
        updateProduct(id, payload),
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['admin-products'] })
      }
    })
  }
  