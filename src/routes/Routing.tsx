import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@/routes/ProtectedRoute';
import { ROLE, User } from '@/services/users.service';
import AccountVerifyView from '@/views/AccountVerifyView';
import DashboardView from '@/views/DashoardView/DashboardView';
import ExpensesView from '@/views/ExpensesView';
import HomeView from '@/views/HomeView';
import IncomesView from '@/views/IncomesView';
import MissingView from '@/views/MissingView';
import SignInView from '@/views/SignInView';
import SignUpView from '@/views/SignUpView';

import { Paths } from './paths';

const Routing = ({ user }: { user: User | undefined }) => {
  return (
    <Routes>
      <Route path={Paths.SIGN_IN} element={!user ? <SignInView /> : <Navigate to={Paths.DASHBOARD} />} />
      <Route path={Paths.SIGN_UP} element={<SignUpView />} />
      <Route path={Paths.HOME} element={<HomeView />} />
      <Route path={Paths.VERIFY} element={<AccountVerifyView />} />

      <Route element={<ProtectedRoute isAllowed={user?.role === ROLE.USER} />}>
        <Route path={Paths.DASHBOARD} element={<DashboardView />} />
        <Route path={Paths.EXPENSES} element={<ExpensesView />} />
        <Route path={Paths.INCOMES} element={<IncomesView />} />
        <Route path={Paths.MISSING} element={<MissingView />} />
      </Route>

      <Route path={Paths.MISSING} element={<MissingView />} />
    </Routes>
  );
};

export default Routing;
