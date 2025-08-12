// src/components/HomePage.jsx

import React, { useState, useEffect } from 'react';

// HomePage component displays a list of recipes from mock data.
function HomePage() {
  // State to store the fetched recipes.
  const [recipes, setRecipes] = useState([]);
  // State to manage loading status.
  const [loading, setLoading] = useState(true);
  // State to manage any errors during data fetching.
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Dynamically import the data.json file.
        // Vite handles this import correctly for static assets.
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data); // Set the fetched data to state.
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes. Please try again later."); // Set error message.
      } finally {
        setLoading(false); // Set loading to false once fetching is complete.
      }
    };

    fetchRecipes(); // Call the fetch function.
  }, []); // Empty dependency array means this effect runs only once after the initial render.

  // Conditional rendering based on loading and error states.
  if (loading) {
    return (
      <div className="text-center p-8 text-xl text-gray-700">
        Loading recipes... ⏳
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-xl text-red-600">
        Error: {error} 😔
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 md:mb-12">
        Delicious Recipes to Explore 😋
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No recipes found. Check back later!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex flex-col"
            >
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover object-center rounded-t-lg"
                // Fallback image in case the main image fails to load
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = `https://placehold.co/300x200/A0A0A0/FFFFFF?text=No+Image`;
                }}
              />
              <div className="p-4 flex flex-col flex-grow">
                {/* Recipe Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {recipe.title}
                </h2>
                {/* Recipe Summary */}
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {recipe.summary}
                </p>
                {/* View Details Link */}
                {/* For this assignment, we use a simple placeholder link.
                    In future assignments, this would navigate to a detailed recipe page. */}
                <a
                  href={`#recipe-${recipe.id}`} // Placeholder for a real route
                  className="inline-block self-start px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
