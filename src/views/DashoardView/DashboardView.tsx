import { useNavigate } from 'react-router-dom';

import { Paths } from '@/routes/paths';
import { useUserQuery } from '@/services/users.service';

const DashboardView = () => {
  const navigate = useNavigate();
  const user = useUserQuery();

  if (user.error) {
    console.log(user.error);
    navigate(Paths.SIGN_IN);
  }

  if (user.isLoading) {
    return <p>Loading...</p>;
  }
  console.log(user.data);
  return (
    <div>
      <h1>{user.data?.firstName}</h1>
    </div>
  );
};

export default DashboardView;
