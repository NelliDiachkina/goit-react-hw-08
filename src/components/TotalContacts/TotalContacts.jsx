import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { MdContacts } from 'react-icons/md';
import css from './TotalContacts.module.css';

export default function TotalContacts() {
  const totalContacts = useSelector(selectContacts);
  const counter = totalContacts.length;
  return (
    <div className={css.wrapper}>
      <p className={css.counterWrapper}>
        <MdContacts size="25px" /> Now you have saved contacts:
        <span className={css.counter}>{counter}</span>
      </p>
    </div>
  );
}
