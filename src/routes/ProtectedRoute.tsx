import { Navigate, Outlet } from 'react-router-dom';

import { Paths } from './paths';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: Paths;
}

const ProtectedRoute = ({ isAllowed, redirectPath = Paths.SIGN_IN }: ProtectedRouteProps) => {
  console.log('isAllowed', isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
