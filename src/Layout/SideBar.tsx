import NavItem from '@/components/NavItem';
import { Paths } from '@/routes/paths';

const SideBar = () => {
  return (
    <nav className="order-first sm:w-48 p-2 border-r border-slate-700/50 ">
      <ul>
        <NavItem to={Paths.VERIFY}>Verify</NavItem>
        <NavItem to={Paths.DASHBOARD}>Dashboard</NavItem>
      </ul>
    </nav>
  );
};

export default SideBar;
