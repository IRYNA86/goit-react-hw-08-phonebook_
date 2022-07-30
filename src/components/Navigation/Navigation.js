import { NavLink } from 'react-router-dom';

import s from '../Navigation/Navigation.module.css';

function Navigation() {
  return (
    <>
      <nav className={s.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.home)}
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.activeLink : s.login)}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.activeLink : s.register)}
        >
          Register
        </NavLink>
      </nav>
    </>
  );
}
export default Navigation;
