import css from './DeleteContactModal.module.css';

export default function DeleteContactModal({ isOpen, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <p>Are you sure? Are you want to delete this contact?</p>
        <div className={css.wrapperBtn}>
          <button onClick={onConfirm} className={css.deleteBtn}>
            DELETE
          </button>
          <button onClick={onClose} className={css.cancelBtn}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
