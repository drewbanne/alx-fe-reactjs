// src/App.jsx

import React from 'react';
// Import BrowserRouter, Routes, and Route for routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the components we've created.
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // Import the new SearchBar component

// Import global CSS (if any, though we're using inline styles).
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f4f7f6',
        minHeight: '100vh',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px', fontSize: '2.8em' }}>
          Recipe Sharing Application
        </h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar /> {/* Render the SearchBar here */}
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
