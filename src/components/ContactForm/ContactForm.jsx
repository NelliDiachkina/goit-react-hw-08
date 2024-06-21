import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { IoMdPersonAdd } from 'react-icons/io';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

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

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.input}
            name="number"
            id={numberFieldId}
            placeholder="000-000-0000"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.button}>
          Add contact <IoMdPersonAdd size="21px" />
        </button>
      </Form>
    </Formik>
  );
}
