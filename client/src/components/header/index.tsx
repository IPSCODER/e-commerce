import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white px-4">
      <div className="w-full flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          MyStore
        </Link>

        <nav className="flex gap-4">
          <Link to="/products" className="text-gray-600 hover:text-indigo-600">
            Products
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-indigo-600">
            Cart
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
