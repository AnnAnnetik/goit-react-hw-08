import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
