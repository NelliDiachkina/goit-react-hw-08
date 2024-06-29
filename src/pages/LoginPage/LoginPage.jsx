import Loader from '../../components/Loader/Loader';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectLoadingAuth } from '../../redux/auth/selectors';
import css from './LoginPage.module.css';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const loading = useSelector(selectLoadingAuth);

  return (
    <main className={css.main}>
      <h2>Log in</h2>
      {loading && <Loader />}
      <LoginForm />
    </main>
  );
}
