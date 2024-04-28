import style from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      validationSchema={ContactFormSchema}
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={style.formContainer}>
        <div className={style.inputContainer}>
          <label htmlFor={nameFieldId}> Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={numberFieldId}> Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
