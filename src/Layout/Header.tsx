import { Link } from 'react-router-dom';

import { Paths } from '@/routes/paths';
const Header = () => {
  return (
    <header className="bg-base-300 p-4 border-b border-slate-700/50 shadow-2xl">
      <div className="max-w-screen-2xl mx-auto flex justify-between">
        <Link className="text-primary" to={Paths.HOME}>
          LOGO
        </Link>
        <Link to={Paths.SIGN_IN}>Sign In</Link>
        <Link to={Paths.SIGN_UP}>Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
