import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { GoHomeFill } from 'react-icons/go';
import { RiContactsFill } from 'react-icons/ri';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <GoHomeFill size="22px" />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <RiContactsFill size="22px" />
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
