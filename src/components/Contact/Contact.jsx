import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';
import {
  deleteContact,
  updateContact,
} from '../../redux/contacts/operations.js';

import css from './Contact.module.css';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal.jsx';
import EditContactModal from '../EditContactModal/EditContactModal.jsx';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  useEffect(() => {
    isModalOpen
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen]);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setEditOpen(true);
  };
  const handleEditSave = newValues => {
    dispatch(updateContact(newValues));
    setEditOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditOpen(false);
  };

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
      <div className={css.wrapperBtn}>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </div>

      <DeleteContactModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onClose={handleCloseModal}
      />
      <EditContactModal
        isOpen={isEditOpen}
        currentValues={{ name, number, id }}
        onSave={handleEditSave}
        onClose={handleCloseEditModal}
      />
    </li>
  );
}
