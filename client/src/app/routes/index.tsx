import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import HomePage from '../../features/home/HomePage'
import AuthLayout from '../../layouts/AuthLayout'
import LoginPage from '../../features/auth/LoginPage'
import AdminLayout from '../../layouts/AdminLayout'
import AdminDashboard from '../../features/admin/AdminDashboard'
import ProductDetailsPage from '../../features/products/ProductDetailsPage'
import ProductListPage from '../../features/products/ProductListPage'
import CartPage from '../../features/cart/CartPage'


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {path:'/products' ,element:<ProductListPage/> },
      {path:'/products/:id' ,element:<ProductDetailsPage/> },
      {path:'/cart' ,element:<CartPage/> }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> }
    ]
  }
])
