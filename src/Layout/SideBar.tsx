import { NavLink } from 'react-router-dom';

import { Paths } from '@/routes/paths';

export const sideBarWidth = 240;

const SideBar = () => {
  return (
    <nav className="order-first sm:w-48 p-2 bg-sky-900/75">
      <ul>
        <li>
          <NavLink to={Paths.VERIFY}>Verify</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
