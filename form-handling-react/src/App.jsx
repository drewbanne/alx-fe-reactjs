// src/App.jsx

import React from 'react';
import FormikForm from './components/FormikForm.js'; // Import the FormikForm component

import './App.css'; // You might want to remove this if not using specific global styles beyond Tailwind

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <FormikForm /> {/* Render the FormikForm component */}
    </div>
  );
}

export default App;
