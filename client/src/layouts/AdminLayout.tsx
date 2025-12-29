import { Navigate, Outlet } from 'react-router-dom'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminHeader from '../components/admin/AdminHeader'
import { jwtDecode } from 'jwt-decode'

const AdminLayout = () => {

  const token = localStorage.getItem('token')
  if (!token) return <Navigate to="/login" />

  const user: any = jwtDecode(token)
  if (user.role !== 'ADMIN') return <Navigate to="/" />
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
