import ChartBar from '@/components/icons/ChartBar';
import Gear from '@/components/icons/Gear';
import Income from '@/components/icons/Income';
import Outcome from '@/components/icons/Outcome';
import Sparkles from '@/components/icons/Sparkles';
import Squares from '@/components/icons/Squares';
import NavItem from '@/components/NavItem';
import { Paths } from '@/routes/paths';

const SideBar = () => {
  return (
    <nav className="order-first sm:w-48 p-2 border-r border-slate-700/50 ">
      <ul>
        <NavItem to={Paths.DASHBOARD}>
          <Squares /> Dashboard
        </NavItem>
        <NavItem to={Paths.EXPENSES}>
          <Outcome /> Expenses
        </NavItem>
        <NavItem to={Paths.INCOMES}>
          <Income /> Incomes
        </NavItem>
        <NavItem to={Paths.STATS}>
          <ChartBar /> Statistics
        </NavItem>
        <NavItem to={Paths.GOALS}>
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
