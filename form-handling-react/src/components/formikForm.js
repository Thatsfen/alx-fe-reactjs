import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationFormFormik = () => {
  // Define validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm(); // Reset form after submission
  };

  return (
    <div>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationFormFormik;
