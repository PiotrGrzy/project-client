import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useUser } from '@/context/userContext';
import { Paths } from '@/routes/paths';

const RequireAuth = () => {
  const user = useUser();
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to={Paths.SIGN_IN} state={{ from: location }} replace />;
};

export default RequireAuth;
