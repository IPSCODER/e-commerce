import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
