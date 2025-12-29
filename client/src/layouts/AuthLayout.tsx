import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AuthLayout = () => {
  return (
<>
<Header/>
<div className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <Outlet />
      </div>
    </div>
</>
  )
}

export default AuthLayout
