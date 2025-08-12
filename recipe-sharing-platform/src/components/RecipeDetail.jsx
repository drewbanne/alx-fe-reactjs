// src/components/RecipeDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

// RecipeDetail component displays comprehensive information for a single recipe.
function RecipeDetail() {
  // useParams hook extracts parameters from the URL. Here, we get the 'id'.
  const { id } = useParams();
  // useNavigate hook allows programmatic navigation.
  const navigate = useNavigate();

  // State for the specific recipe.
  const [recipe, setRecipe] = useState(null);
  // State for loading status.
  const [loading, setLoading] = useState(true);
  // State for any errors during data fetching.
  const [error, setError] = useState(null);

  // useEffect hook to fetch the recipe data when the component mounts or ID changes.
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        // Fetch all recipes from data.json.
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allRecipes = await response.json();

        // Find the specific recipe by matching the ID from the URL (which is a string)
        // with the recipe.id (which is a number). Convert 'id' to a number for comparison.
        const foundRecipe = allRecipes.find(r => r.id === parseInt(id));

        if (foundRecipe) {
          setRecipe(foundRecipe); // Set the found recipe to state.
        } else {
          setError("Recipe not found. Please check the URL."); // Set error if recipe not found.
        }
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError("Failed to load recipe details. Please try again later."); // Set error message.
      } finally {
        setLoading(false); // Set loading to false once fetching is complete.
      }
    };

    fetchRecipe(); // Call the fetch function.
  }, [id]); // Dependency array includes 'id' so data refetches if ID in URL changes.

  // Conditional rendering for loading state.
  if (loading) {
    return (
      <div className="text-center p-8 text-xl text-gray-700">
        Loading recipe details... ⏳
      </div>
    );
  }

  // Conditional rendering for error or recipe not found.
  if (error) {
    return (
      <div className="text-center p-8 text-xl text-red-600">
        Error: {error} 😔
        <button
          onClick={() => navigate('/')} // Button to navigate back to Home Page.
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  // If recipe is not found after loading and no explicit error, redirect to home.
  // This handles cases where ID might be invalid but no fetch error occurred.
  if (!recipe) {
    navigate('/');
    return null; // Don't render anything while navigating.
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
          // Fallback image in case of error
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
          <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl space-y-2">
            {/* Example: Replace with actual ingredients if your data.json supported it */}
            <li>200g spaghetti</li>
            <li>100g guanciale (or pancetta)</li>
            <li>2 large eggs</li>
            <li>50g Pecorino Romano cheese, grated</li>
            <li>Freshly ground black pepper</li>
            <li>A pinch of salt (for pasta water)</li>
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Instructions 👩‍🍳
          </h2>
          <ol className="list-decimal list-inside text-gray-700 text-lg md:text-xl space-y-3">
            {/* Example: Replace with actual instructions if your data.json supported it */}
            <li>Bring a large pot of salted water to a boil. Add spaghetti and cook according to package directions until al dente.</li>
            <li>While pasta cooks, finely chop the guanciale. In a separate pan, cook guanciale over medium heat until crisp. Remove from heat and set aside, reserving a tablespoon of rendered fat.</li>
            <li>In a bowl, whisk eggs, grated Pecorino Romano, and a generous amount of black pepper until well combined.</li>
            <li>Drain the spaghetti, reserving about a cup of pasta water. Immediately add the hot spaghetti to the pan with the guanciale and reserved fat. Toss quickly.</li>
            <li>Pour the egg mixture over the pasta, stirring vigorously to coat the pasta. Add a little pasta water if needed to create a creamy sauce. Continue stirring until the sauce emulsifies and coats the pasta.</li>
            <li>Serve immediately, garnished with extra Pecorino Romano and black pepper. Enjoy!</li>
          </ol>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/')} // Navigate back to the home page.
          className="mt-10 px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200 block mx-auto"
        >
          Back to All Recipes
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
