import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationPage.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')

    .min(8, 'Password must be at least 8 characters long'),
});

const RegistrationPage = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={css.form}>
        <h2>Registration Form</h2>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.err} name="name" component="span" />
        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.field}
          type="email"
          name="email"
          id={emailFieldId}
        />
        <ErrorMessage className={css.err} name="email" component="span" />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={css.field}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <ErrorMessage className={css.err} name="password" component="span" />
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationPage;
