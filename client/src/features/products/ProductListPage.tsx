import { Link } from 'react-router-dom';
import { useProducts } from './hooks'
import { addToCart } from '../../store/slices/cartSlice';
import { useAppDispatch } from '../../store/hook';

const ProductListPage = () => {

  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useProducts(10, 0)


  if (isLoading) return <p>Loading products...</p>
  if (error) return <p>Failed to load products</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {data?.map(product => (
        <div
          key={product.id}
          className="border rounded p-4 shadow"
        >
          <h2 className="font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">
            ₹{product.price}
          </p>
          <p className="text-sm">Stock: {product.stock}</p>
         <div className='flex items-center justify-between gap-2' >
         <Link to={`/products/${product.id}`} ><button>View</button></Link>
          <button
  onClick={() => dispatch(addToCart(product))}
  className="mt-2 bg-indigo-600 text-white px-4 py-1 rounded"
>
  Add to Cart
</button>
         </div>
        </div>
      ))}
    </div>
  )
}

export default ProductListPage
