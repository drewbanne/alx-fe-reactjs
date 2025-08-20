// src/components/RegistrationForm.jsx

import React, { useState } from 'react';

// RegistrationForm component using controlled components for form handling.
function RegistrationForm() {
  // State for each input field.
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for form validation errors.
  const [errors, setErrors] = useState({});
  // State to show a success message after submission.
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Basic validation function.
  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    return newErrors;
  };

  // Handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission.
    setSubmissionMessage(''); // Clear any previous messages.

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors.
    }

    setErrors({}); // Clear errors if validation passes.

    // Simulate API call for registration.
    try {
      // Mock API endpoint. In a real app, this would be your backend endpoint.
      const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // For a mock API, we'll just simulate success/failure.
      // In a real scenario, you'd check response.ok and parse the JSON.
      if (response.ok || response.status === 200) { // Assuming 200 for mock success
        setSubmissionMessage('Registration successful! ✅');
        // Clear form fields on success.
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        // Handle mock API errors
        setSubmissionMessage('Registration failed. Please try again. ❌');
      }
    } catch (error) {
      console.error('API call failed:', error);
      setSubmissionMessage('Network error or server issue. 🚧');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
            placeholder="Enter your username"
          />
          {errors.username && <p className="text-red-500 text-xs italic mt-1">{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Register
        </button>
      </form>
      {submissionMessage && (
        <p className={`mt-4 text-center font-semibold ${submissionMessage.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
          {submissionMessage}
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;
