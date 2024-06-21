import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <main className={css.main}>
      <h2>Registration </h2>
      <RegistrationForm />
    </main>
  );
}
