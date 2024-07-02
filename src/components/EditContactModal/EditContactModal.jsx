import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import css from './EditContactModal.module.css';

export default function EditContactModal({
  isOpen,
  currentValues,
  onClose,
  onSave,
}) {
  if (!isOpen) return null;

  const initialValues = currentValues;

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required!'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Invalid phone number! Please enter the number in the format XXX-XXX-XXXX'
      )
      .required('Required!'),
  });

  const handleSubmit = (values, actions) => {
    onSave(values);
    actions.resetForm();
  };

  return (
    <div className={css.modalOverlay}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <div className={css.formItem}>
            <label className={css.label}>
              Name
              <Field className={css.input} name="name" />
            </label>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formItem}>
            <label className={css.label}>
              Number
              <Field
                className={css.input}
                name="number"
                placeholder="000-000-0000"
              />
            </label>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <div className={css.wrapperBtn}>
            <button type="submit" className={css.saveBtn}>
              SAVE
            </button>
            <button onClick={onClose} className={css.cancelBtn}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
