import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={css.main}>
      <DocumentTitle>Login</DocumentTitle>
      <h2 className={css.title}>Log in to your account</h2>
      <LoginForm />
      <p className={css.wrapper}>
        or
        <Link to="/register" className={css.link}>
          Sign Up
        </Link>
      </p>
    </main>
  );
}
