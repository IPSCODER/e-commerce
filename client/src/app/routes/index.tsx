import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import HomePage from '../../features/home/HomePage'
import AuthLayout from '../../layouts/AuthLayout'
import LoginPage from '../../features/auth/LoginPage'
import AdminLayout from '../../layouts/AdminLayout'
import AdminDashboard from '../../features/admin/AdminDashboard'


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> }
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
