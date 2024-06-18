import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return <p className={css.error}>Oops! 🤒 Something went wrong! Reload!</p>;
}
