import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';
const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.activeLink);
};

export default function AuthNav() {
  return (
    <ul className={css.list}>
      <li>
        <NavLink to="/register" className={makeLinkClass}>
          SIGN UP
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={makeLinkClass}>
          LOG IN
        </NavLink>
      </li>
    </ul>
  );
}
