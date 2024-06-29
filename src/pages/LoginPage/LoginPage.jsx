import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={css.main}>
      <DocumentTitle>Login</DocumentTitle>
      <h2>Log in to your account</h2>
      <LoginForm />
    </main>
  );
}
