// src/components/RecipeDetail.jsx

import React, { useState, useEffect } from 'react'; // Keep useState and useEffect for local component logic
import { useParams, useNavigate } from 'react-router-dom';

// RecipeDetail component displays comprehensive information for a single recipe.
// It now accepts the full 'recipes' array as a prop.
function RecipeDetail({ recipes }) { // Accept recipes as a prop
  const { id } = useParams();
  const navigate = useNavigate();

  // State for the specific recipe found.
  const [recipe, setRecipe] = useState(null);
  // No separate loading state needed here as 'recipes' are passed down.
  const [error, setError] = useState(null);

  // useEffect hook to find the recipe from the 'recipes' prop when it changes or ID changes.
  useEffect(() => {
    // Ensure recipes array is available before trying to find.
    if (recipes && recipes.length > 0) {
      const foundRecipe = recipes.find(r => r.id === parseInt(id));

      if (foundRecipe) {
        setRecipe(foundRecipe);
        setError(null); // Clear any previous errors
      } else {
        setRecipe(null);
        setError("Recipe not found. Please check the URL.");
      }
    } else {
        // If recipes array is empty or null, it means no recipes are loaded yet or exist.
        setRecipe(null);
        setError("No recipes available or recipe not found.");
    }
  }, [id, recipes]); // Dependencies: 'id' from URL and the 'recipes' array prop.

  // Conditional rendering for error or recipe not found.
  if (error) {
    return (
      <div className="text-center p-8 text-xl text-red-600">
        Error: {error} 😔
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  // If no recipe found after effect, return a loading message or null (if navigating away).
  // If recipe is null but no explicit error, implies not found yet or navigating.
  if (!recipe) {
    // Optionally, navigate back if not found or display a loading spinner for a moment if data is still processing.
    // For now, if no recipe is found and no error, assume it's still loading or an invalid ID will be caught by the error message.
    return (
        <div className="text-center p-8 text-xl text-gray-700">
            Fetching recipe details...
        </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
        {/* Recipe Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          {recipe.title}
        </h1>
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover object-center rounded-lg mb-6 shadow-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/800x600/A0A0A0/FFFFFF?text=No+Image`;
          }}
        />

        {/* Recipe Summary */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center">
          {recipe.summary}
        </p>

        {/* Ingredients Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Ingredients 📝
          </h2>
          {/* Display ingredients from the recipe object */}
          <p className="text-gray-700 text-lg md:text-xl space-y-2 whitespace-pre-line">
            {recipe.ingredients}
          </p>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Instructions 👩‍🍳
          </h2>
          {/* Display instructions from the recipe object */}
          <p className="text-gray-700 text-lg md:text-xl space-y-3 whitespace-pre-line">
            {recipe.instructions}
          </p>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mt-10 px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200 block mx-auto"
        >
          Back to All Recipes
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
