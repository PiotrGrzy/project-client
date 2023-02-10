import { useUserQuery } from '@/services/users.service';

const DashboardView = () => {
  const user = useUserQuery();

  return (
    <div>
      <h1>{user.data?.firstName}</h1>
    </div>
  );
};

export default DashboardView;
