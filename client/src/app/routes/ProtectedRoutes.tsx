import { Navigate, Outlet } from 'react-router-dom'
import { isAunthenticated } from '../../utils/auth'

interface Props {
  isAllowed?: boolean
  redirectPath?: string
}

const ProtectedRoute = ({
  isAllowed = isAunthenticated(),
  redirectPath = '/login',
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
