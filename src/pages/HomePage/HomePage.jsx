import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={css.main}>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1>👋 Phone book welcome page </h1>
    </main>
  );
}
