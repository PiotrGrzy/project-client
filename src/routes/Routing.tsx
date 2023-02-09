import { Route, Routes } from 'react-router-dom';

// import RequireAuth from '@/components/RequireAuth';
import AccountVerifyView from '@/views/AccountVerifyView';
import DashboardView from '@/views/DashoardView/DashboardView';
import HomeView from '@/views/HomeView';
// import MissingView from '@/views/MissingView';
import SignInView from '@/views/SignInView';
import SignUpView from '@/views/SignUpView';

import { Paths } from './paths';

const Routing = () => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<HomeView />} />
      <Route path={Paths.SIGN_IN} element={<SignInView />} />
      <Route path={Paths.SIGN_UP} element={<SignUpView />} />
      <Route path={Paths.VERIFY} element={<AccountVerifyView />} />
      <Route path={Paths.DASHBOARD} element={<DashboardView />} />
      {/*
      <Route path={Paths.MISSING} element={<MissingView />} />
      <Route element={<RequireAuth />}>
      </Route> */}
    </Routes>
  );
};

export default Routing;
