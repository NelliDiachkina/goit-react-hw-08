import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function AppBar() {
  const isLoddedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {isLoddedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
