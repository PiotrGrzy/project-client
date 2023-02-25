import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Paths } from '@/routes/paths';
import { logoutUser } from '@/services/users.service';

const Header = () => {
  const queryClient = useQueryClient();
  const logout = useMutation({
    mutationFn: logoutUser,
    onMutate: () => {
      queryClient.setQueriesData(['user'], null);
    },
  });

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <header className="bg-base-300 p-4 border-b border-slate-700/50 shadow-2xl">
      <div className="max-w-screen-2xl mx-auto flex justify-between">
        <Link className="text-primary" to={Paths.HOME}>
          LOGO
        </Link>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
