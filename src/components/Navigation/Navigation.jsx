import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { GoHomeFill } from 'react-icons/go';
import { MdContacts } from 'react-icons/md';
import clsx from 'clsx';
import css from './Navigation.module.css';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.activeLink);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkClass}>
        <GoHomeFill size="21px" />
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={makeLinkClass}>
          <MdContacts size="21px" />
        </NavLink>
      )}
    </nav>
  );
}
