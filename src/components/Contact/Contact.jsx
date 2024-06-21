import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';
import {
  deleteContact,
  updateContact,
} from '../../redux/contacts/operations.js';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal.jsx';
import EditContactModal from '../EditContactModal/EditContactModal.jsx';
import { GrEdit } from 'react-icons/gr';
import css from './Contact.module.css';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    isDeleteOpen || isEditOpen
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isDeleteOpen, isEditOpen]);

  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setIsDeleteOpen(false);
  };

  const handleCloseModal = () => {
    setIsDeleteOpen(false);
  };

  const handleEditClick = () => {
    setIsEditOpen(true);
  };
  const handleEditSave = newValues => {
    dispatch(updateContact(newValues));
    setIsEditOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditOpen(false);
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <FaUserLarge size="20px" />
          {name}
        </p>
        <p className={css.text}>
          <a href={`tel:${number}`} className={css.link}>
            <FaPhone size="20px" />
            {number}
          </a>
        </p>
      </div>
      <div className={css.wrapperBtn}>
        <button onClick={handleEditClick}>
          <GrEdit size="18px" />
        </button>
        <button onClick={handleDeleteClick}>DELETE</button>
      </div>
      {isDeleteOpen && (
        <DeleteContactModal
          isOpen={isDeleteOpen}
          onConfirm={handleConfirmDelete}
          onClose={handleCloseModal}
        />
      )}
      {isEditOpen && (
        <EditContactModal
          isOpen={isEditOpen}
          currentValues={{ name, number, id }}
          onSave={handleEditSave}
          onClose={handleCloseEditModal}
        />
      )}
    </li>
  );
}
