import { useAppDispatch, useAppSelector } from '../../store/hook'
import { clearCart, removeFromCart } from '../../store/slices/cartSlice'
import { startPayment } from '../payment/useRazorpay'

const CartPage = () => {
  const { items } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>

      {items.map(item => (
        <div key={item.product.id} className="border p-4 mb-2">
          <h2>{item.product.name}</h2>
          <p>Qty: {item.quantity}</p>
          <button
            onClick={() => dispatch(removeFromCart(item.product.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
      <button onClick={() => {startPayment(1500)}} className='bg-green-600 text-white px-6 py-2'  >
        Pay RS.1500
      </button>
    </div>
  )
}

export default CartPage
