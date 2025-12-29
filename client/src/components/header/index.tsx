import { Link, useNavigate } from 'react-router-dom'
import { isAdmin, isAunthenticated, logout } from '../../utils/auth'
import { useAppSelector } from '../../store/hook'

const Header = () => {
    const { items } = useAppSelector(state => state.cart)
   const navigate =  useNavigate()

  const authenticationHandler = () => {
   return isAunthenticated() ? logout() : navigate('login')
  }

  return (
    <header className="bg-white px-4">
      <div className="w-full flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          MyStore
        </Link>

        { !isAdmin() ? <nav className="flex gap-4">
          <Link to="/products" className="text-gray-600 hover:text-indigo-600">
            Products
          </Link>
          <Link to={'/cart'} className="text-gray-600 hover:text-indigo-600 relative z-10">
            Cart {items.length > 0 && <span className='flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white absolute -top-2 -right-2 -z-10' >{ items.length}</span>}
          </Link>
          <p onClick={authenticationHandler} className="text-gray-600 cursor-pointer hover:text-indigo-600">
           {isAunthenticated() ? 'Logout' :' Login' }
          </p>
        </nav> : <Link to={'/admin'} >Admin</Link> }
      </div>
    </header>
  )
}

export default Header
