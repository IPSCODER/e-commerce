import { useParams } from 'react-router-dom'
import { useProduct } from './hooks'

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useProduct(id!)

  if (isLoading) return <p>Loading product...</p>
  if (error) return <p>Failed to load product</p>

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <p className="mt-2 text-gray-600">{data?.description}</p>
      <p className="mt-4 font-semibold">₹{data?.price}</p>
      <p className="text-sm">Stock: {data?.stock}</p>
    </div>
  )
}

export default ProductDetailsPage
