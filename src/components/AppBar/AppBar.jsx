import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
