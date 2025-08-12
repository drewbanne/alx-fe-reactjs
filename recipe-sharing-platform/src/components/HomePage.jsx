// src/components/HomePage.jsx

import React from 'react'; // Removed useState and useEffect as recipes come from props
import { Link } from 'react-router-dom'; // Import Link for navigation

// HomePage component displays a list of recipes passed via props.
function HomePage({ recipes }) { // Accept recipes as a prop
  // Conditional rendering based on the recipes prop.
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center p-8 text-xl text-gray-700">
        No recipes available. Add some using the form above! 🤷‍♀️
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 md:mb-12">
        Delicious Recipes to Explore 😋
      </h1>

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
              onError={(e) => {
                e.target.onerror = null;
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
              {/* View Details Link: Uses React Router Link */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block self-start px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
