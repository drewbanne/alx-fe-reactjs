// src/App.jsx

import React from 'react';
// Import the new HomePage component.
import HomePage from './components/HomePage';

import './App.css'; // Keep this for any global styles, though Tailwind is primary.

function App() {
  return (
    // The main container for the application.
    // Using a simple flexbox layout to push content up and allow background color to fill.
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      {/* Render the HomePage component */}
      <HomePage />
    </div>
  );
}

export default App;
