import { useNavigate } from 'react-router-dom'
import React from 'react'

interface ProtectedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  requiredRole?: 'admin' | 'user'
  className?: string
}

const ProtectedButton = ({
  children,
  onClick,
  requiredRole,
  className = '',
}: ProtectedButtonProps) => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  const handleClick = () => {
    // 🔐 Not logged in
    if (!token) {
      navigate('/login')
      return
    }

    // 🛑 Role check
    if (requiredRole && role !== requiredRole) {
      alert('You are not authorized to perform this action')
      return
    }

    // ✅ Allowed
    onClick?.()
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  )
}

export default ProtectedButton
