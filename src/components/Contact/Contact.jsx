import { useDispatch } from 'react-redux';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations.js';

import css from './Contact.module.css';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <FaUserLarge size={20} />
          {name}
        </p>
        <p className={css.text}>
          <a href={`tel:${number}`} className={css.link}>
            <FaPhone size={20} />
            {number}
          </a>
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
