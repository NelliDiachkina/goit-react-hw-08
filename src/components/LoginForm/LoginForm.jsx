import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './LoginForm.module.css';

const contactSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address!').required('Required!'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required!'),
});

export default function LoginForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            type="email"
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
