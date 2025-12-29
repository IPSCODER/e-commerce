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
import ProtectedRoute from './ProtectedRoutes'
import { isAdmin, isAunthenticated } from '../../utils/auth'
import AdminProductsPage from '../../features/admin/AdminProductPage'
import AdminAddProductPage from '../../features/admin/AdminAddProductPage'
import AdminEditProductPage from '../../features/admin/AdminEditProductPage'




export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {path:'/products' ,element:<ProductListPage/> },
      {path:'/products/:id' ,element:<ProductDetailsPage/> },
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> }
    ]
  },
 {
  element :<ProtectedRoute isAllowed={isAunthenticated()} />,
  children:[{
    element: <MainLayout />,
    children: [
      {path:'/cart' ,element:<CartPage/> }
    ]
  }]
 },
 {
  element: (
    <ProtectedRoute
      isAllowed={isAunthenticated() && isAdmin() }
    />
  ),
  children: [
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { index: true, element: <AdminDashboard /> },
        { path:'/admin/products', element: <AdminProductsPage /> },
        {path:"/admin/products/add", element:<AdminAddProductPage />} ,
        {path:"/admin/products/:id/edit", element:<AdminEditProductPage />}
      ],
    },
  ],
},
])
