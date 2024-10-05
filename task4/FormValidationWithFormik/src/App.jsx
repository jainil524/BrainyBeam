import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from "./components/Input";

import '/public/css/Form.css';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required')?.email('Email is invalid'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  isagreementAccpeted: Yup.boolean().oneOf([true], 'You must accept the terms').required(),
  country: Yup.string().required('Country is required'),
});

function App() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    isagreementAccpeted: false,
    country: '',
  };

  const handleSubmit = (values) => {
    alert('Form Submitted');

    console.log('Form Submitted', values);
  };

  React.useEffect(() => {
    console.log('Country changed', initialValues.country);

  }, [initialValues.country]);

  return (
    <>
      <h1>Form Validation with Formik</h1>
      <div className='app-container'>
        <div className='form-wrapper'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleSubmit, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  id="name"
                  label="Name"
                  error={touched.name && errors.name ? <ErrorMessage name="name" /> : null}
                  value={values.name}
                  placeholder="Enter name"
                  onChange={handleChange}
                  name="name"
                />
                <Input
                  type="email"
                  id="email"
                  label="Email"
                  error={touched.email && errors.email ? <ErrorMessage name="email" /> : null}
                  value={values.description}
                  placeholder="Enter email"
                  onChange={handleChange}
                  name="email"
                />
                <Input
                  type="dropdown"
                  id="dropdown"
                  label="Select Country"
                  options={[
                    { value: '', label: 'Select Country' },
                    { value: 'india', label: 'India' },
                    { value: 'usa', label: 'USA' },
                    { value: 'uk', label: 'UK' },
                  ]}
                  value={values.country}
                  error={touched.country && errors.country ? <ErrorMessage name="country" /> : null}
                  onChange={handleChange}
                  name="country"
                />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  error={touched.password && errors.password ? <ErrorMessage name="password" /> : null}
                  value={values.password}
                  placeholder="Enter password"
                  onChange={handleChange}
                />
                <Input
                  type="checkbox"
                  id="isagreementAccpeted"
                  name="isagreementAccpeted"
                  label="Accept Terms"
                  error={touched.isagreementAccpeted && errors.isagreementAccpeted ? <ErrorMessage name="isagreementAccpeted" /> : null}
                  checked={values.isagreementAccpeted}
                  onChange={() => {
                    handleChange({
                      target: {
                        name: 'isagreementAccpeted',
                        value: !values.isagreementAccpeted,
                      },
                    });
                  }}
                />



                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

    </>
  );
}

export default App;
