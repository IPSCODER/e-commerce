import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <aside className="w-64 border-r bg-white">
      <nav className="flex flex-col gap-2 p-4">
        <NavLink to="/admin" className="rounded px-3 py-2 hover:bg-indigo-50">
          Dashboard
        </NavLink>
        <NavLink to="/admin/products" className="rounded px-3 py-2 hover:bg-indigo-50">
          Products
        </NavLink>
        <NavLink to="/admin/orders" className="rounded px-3 py-2 hover:bg-indigo-50">
          Orders
        </NavLink>
      </nav>
    </aside>
  )
}

export default AdminSidebar
