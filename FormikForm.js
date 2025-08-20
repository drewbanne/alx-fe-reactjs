// src/components/FormikForm.js

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import * as Yup from 'yup'; // Import Yup for schema validation

// Define the validation schema using Yup.
// This schema will define the rules for each form field.
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  email: Yup.string().email('Invalid email address.').required('Email is required.'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Password is required.'),
});

// FormikForm component for user registration using Formik.
function FormikForm() {
  // State to show a submission message.
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Initial form values.
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Handle form submission using Formik's onSubmit.
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmissionMessage(''); // Clear previous messages.
    setSubmitting(true); // Set submitting state to true.

    // Simulate API call for registration.
    try {
      const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application',
        },
        body: JSON.stringify(values), // Formik 'values' directly contains form data.
      });

      if (response.ok || response.status === 200) {
        setSubmissionMessage('Registration successful! ✅');
        resetForm(); // Reset form fields on success.
      } else {
        setSubmissionMessage('Registration failed. Please try again. ❌');
      }
    } catch (error) {
      console.error('API call failed:', error);
      setSubmissionMessage('Network error or server issue. 🚧');
    } finally {
      setSubmitting(false); // Set submitting state back to false.
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => ( // Formik provides props like isSubmitting.
          <Form className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <Field
                type="text"
                id="username"
                name="username" // Name prop links Field to Formik state.
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
              />
              {/* ErrorMessage displays validation errors for a specific field. */}
              <ErrorMessage name="username" component="p" className="text-red-500 text-xs italic mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-xs italic mt-1" />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-xs italic mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting} // Disable button during submission.
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
      {submissionMessage && (
        <p className={`mt-4 text-center font-semibold ${submissionMessage.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
          {submissionMessage}
        </p>
      )}
    </div>
  );
}

export default FormikForm;
