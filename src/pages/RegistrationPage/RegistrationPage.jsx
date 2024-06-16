import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <main className={css.main}>
      <RegistrationForm />
    </main>
  );
}
