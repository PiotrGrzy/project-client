import { useUserQuery } from '@/services/users.service';

const DashboardView = () => {
  const user = useUserQuery();

  console.log(user.data);
  return (
    <div>
      <h1>{user.data?.firstName}</h1>
    </div>
  );
};

export default DashboardView;
