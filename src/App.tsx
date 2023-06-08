import Layout from '@/Layout';
import Routing from '@/routes/Routing';
import { useUserQuery } from '@/services/users.service';

function App() {
  const { isLoading, isSuccess, data: user } = useUserQuery();
  const isLoggedIn = isSuccess && !!user;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Routing user={user} />
    </Layout>
  );
}

export default App;
