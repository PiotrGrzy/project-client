import ChartBar from '@/components/icons/ChartBar';
import Gear from '@/components/icons/Gear';
import Sparkles from '@/components/icons/Sparkles';
import Squares from '@/components/icons/Squares';
import NavItem from '@/components/NavItem';
import { Paths } from '@/routes/paths';

const SideBar = () => {
  return (
    <nav className="order-first sm:w-48 p-2 border-r border-slate-700/50 ">
      <ul>
        <NavItem to={Paths.VERIFY}>Verify</NavItem>
        <NavItem to={Paths.DASHBOARD}>
          <Squares /> Dashboard
        </NavItem>
        <NavItem to={Paths.EXPENSES}>
          <Gear /> Expenses
        </NavItem>
        <NavItem to={Paths.INCOMES}>
          <Gear /> Incomes
        </NavItem>
        <NavItem to={'/'}>
          <ChartBar /> Statistics
        </NavItem>
        <NavItem to={'/'}>
          <Sparkles /> Goals
        </NavItem>
        <NavItem to={'/'}>
          <Gear /> Settings
        </NavItem>
      </ul>
    </nav>
  );
};

export default SideBar;
