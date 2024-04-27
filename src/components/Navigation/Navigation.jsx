import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import { useSelector } from 'react-redux';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>

      <NavLink className={getNavLinkClassName} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
