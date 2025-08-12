// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components.
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // Import the new AddRecipeForm

import './App.css';

function App() {
  // State to store all recipes. This will be the single source of truth.
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial recipes from data.json when the component mounts.
  useEffect(() => {
    const fetchInitialRecipes = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data); // Set initial recipes.
      } catch (err) {
        console.error("Error fetching initial recipes:", err);
        setError("Failed to load initial recipes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialRecipes();
  }, []); // Runs only once on mount.

  // Function to add a new recipe to the state.
  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  // If loading or error, display a simple message at the app level.
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
        <p className="text-xl text-gray-700">Loading application... ⏳</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
        <p className="text-xl text-red-600">Error: {error} 😔</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
        {/* Routes define the different URL paths and which component to render for each. */}
        <Routes>
          {/* Main Home Page route */}
          <Route
            path="/"
            element={
              <>
                {/* AddRecipeForm rendered on the home page, passing the handleAddRecipe function */}
                <AddRecipeForm onAddRecipe={handleAddRecipe} />
                {/* HomePage receives the current recipes state */}
                <HomePage recipes={recipes} />
              </>
            }
          />
          {/* Recipe Detail Page route */}
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
