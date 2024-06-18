import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be longer').required('Required!'),
  email: Yup.string().email('Invalid email address!').required('Required!'),
  password: Yup.string().min(7, 'Too Short!').required('Required!'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={usernameFieldId}>Username</label>
          <Field
            type="text"
            autoComplete="username"
            className={css.input}
            name="name"
            id={usernameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            type="email"
            autoComplete="email"
            className={css.input}
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            type="password"
            autoComplete="new-password"
            className={css.input}
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
