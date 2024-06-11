import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols!')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
  number: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.thumb}>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
            placeholder="Name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.thumb}>
          <label className={css.label} htmlFor={`${fieldId}-number`}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
            placeholder="Phone number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
