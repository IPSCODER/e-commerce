import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllProductsAdmin, deleteProduct } from './api'
import { Link } from 'react-router-dom'

const AdminProductsPage = () => {
    const qc = useQueryClient()

    const { data } = useQuery({
        queryKey: ['admin-products'],
        queryFn: getAllProductsAdmin
    })

    const deleteMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-products'] })
    })

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Admin Products</h1>

            {data?.map(p => (
                <div key={p.id} className="border p-3 flex justify-between">
                    <span>{p.name}</span>

                  <div>  <Link
                        to={`/admin/products/${p.id}/edit`}
                        className="text-blue-600 mr-3"
                    >
                        Edit
                    </Link>

                    <button
                        onClick={() => deleteMutation.mutate(p.id)}
                        className="text-red-600"
                    >
                        Delete
                    </button></div>
                </div>
            ))}
        </div>
    )
}

export default AdminProductsPage
