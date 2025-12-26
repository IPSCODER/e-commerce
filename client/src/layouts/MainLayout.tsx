import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
