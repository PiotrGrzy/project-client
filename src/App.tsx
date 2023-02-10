import { isError } from '@tanstack/react-query';
import { Navigate, redirect } from 'react-router-dom';

import Layout from '@/Layout';
import Routing from '@/routes/Routing';
import { useUserQuery } from '@/services/users.service';

import { Paths } from './routes/paths';

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
