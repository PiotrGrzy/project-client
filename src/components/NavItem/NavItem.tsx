import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const NavItem = ({ children, to, ...props }: NavLinkProps) => {
  return (
    <li className="p-2 hover:bg-orange-400/10 transition rounded-md cursor-pointer">
      <NavLink {...props} to={to} className={({ isActive }) => (isActive ? 'text-white' : '')}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
