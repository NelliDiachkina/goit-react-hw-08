import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={css.main}>
      <LoginForm />
    </main>
  );
}
