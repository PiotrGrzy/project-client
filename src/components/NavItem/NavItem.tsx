import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';

const NavItem = ({ children, to, ...props }: NavLinkProps) => {
  return (
    <li className={'flex-1'}>
      <NavLink
        {...props}
        to={to}
        className={({ isActive }) =>
          classNames(
            'flex gap-2 p-3 hover:bg-orange-400/10 transition rounded-md cursor-pointer',
            isActive ? 'bg-secondary text-secondary-content' : '',
          )
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
