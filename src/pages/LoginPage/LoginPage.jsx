import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={css.main}>
      <h2>Log in</h2>
      <LoginForm />
    </main>
  );
}
