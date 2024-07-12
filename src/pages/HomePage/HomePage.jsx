import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import TypewriterEffect from '../../components/TypewriterEffect/TypewriterEffect';
import css from './HomePage.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { GrCatalog } from 'react-icons/gr';
const text =
  'Manage your contacts with our app! Keep all your contacts in one place. Create, edit, and delete contacts anytime, anywhere';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main className={css.main}>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1 className={css.title}>
        <GrCatalog size="50px" color="#eb8108" />
        Welcome to the Phonebook App
      </h1>
      <div className={css.wrapper}>
        <TypewriterEffect text={text} />
      </div>
      {!isLoggedIn && (
        <div className={css.wrapperContent}>
          <p className={css.text}>
            Please log in to your account or sign up if you are a new user
          </p>
          <div className={css.wrapperLinks}>
            <Link className={css.link} to="/login">
              LOG IN
            </Link>
            <Link className={css.link} to="/register">
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
