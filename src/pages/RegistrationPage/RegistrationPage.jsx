import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectErrorAuth, selectLoadingAuth } from '../../redux/auth/selectors';
import css from './RegistrationPage.module.css';
import { useSelector } from 'react-redux';

export default function RegistrationPage() {
  const loading = useSelector(selectLoadingAuth);
  const error = useSelector(selectErrorAuth);
  return (
    <main className={css.main}>
      <h2>Registration </h2>
      {loading && <Loader />}
      <RegistrationForm />
      {error && <ErrorMessage />}
    </main>
  );
}
