import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <main className={css.main}>
      <DocumentTitle>Registration</DocumentTitle>
      <h2 className={css.title}>Registration</h2>
      <RegistrationForm />
      <p className={css.wrapper}>
        or
        <Link to="/login" className={css.link}>
          LOG IN
        </Link>
      </p>
    </main>
  );
}
