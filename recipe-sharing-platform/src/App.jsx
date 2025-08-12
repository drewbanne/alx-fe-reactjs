// src/App.jsx

import React from 'react';
// Import BrowserRouter, Routes, and Route for client-side routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the HomePage component.
import HomePage from './components/HomePage';
// Import the RecipeDetail component (which we'll create next).
import RecipeDetail from './components/RecipeDetail';

import './App.css'; // Keep this for any global styles, though Tailwind is primary.

function App() {
  return (
    // BrowserRouter enables client-side routing for your application.
    <BrowserRouter>
      {/* The main container for the application. */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
        {/* Routes define the different URL paths and which component to render for each. */}
        <Routes>
          {/* Route for the Home Page. It matches the root URL ("/"). */}
          <Route path="/" element={<HomePage />} />
          {/* Route for the Recipe Detail Page.
              :id is a URL parameter that will capture the recipe's ID.
              This ID can then be accessed within the RecipeDetail component using useParams. */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
