import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { MdLogout } from 'react-icons/md';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>👋 Welcome, {user.name}!</p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logout())}
      >
        Log Out <MdLogout size="21px" />
      </button>
    </div>
  );
}
