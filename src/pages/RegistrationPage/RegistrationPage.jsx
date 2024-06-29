import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <main className={css.main}>
      <DocumentTitle>Registration</DocumentTitle>
      <h2>Registration</h2>
      <RegistrationForm />
    </main>
  );
}
