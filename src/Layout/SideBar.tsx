import { NavLink } from 'react-router-dom';

import { Paths } from '@/routes/paths';

export const sideBarWidth = 240;

const SideBar = () => {
  return (
    <nav className="order-first sm:w-48 p-2 border-r border-slate-700/50 ">
      <ul>
        <li>
          <NavLink to={Paths.VERIFY}>Verify</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
