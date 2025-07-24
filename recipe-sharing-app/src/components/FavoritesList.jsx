// src/components/FavoritesList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore'; // Import the store

// FavoritesList component displays a list of the user's favorite recipes.
const FavoritesList = () => {
  // Get the 'favorites' array (containing IDs) and the 'recipes' array from the store.
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Map favorite IDs to actual recipe objects.
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // Filter out any undefined recipes (if an ID doesn't match).

  return (
    <div style={{
      marginTop: '40px',
      padding: '20px',
      border: '1px solid #ffccbc', // Light orange border
      borderRadius: '8px',
      backgroundColor: '#fff3e0', // Light orange background
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ color: '#e65100', borderBottom: '2px solid #ff9800', paddingBottom: '10px', marginBottom: '20px' }}>
        ❤️ My Favorite Recipes
      </h2>
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>You haven't favorited any recipes yet!</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} style={{
              border: '1px solid #ffab91',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#ffe0b2',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#f4511e', marginBottom: '10px', fontSize: '1.4em' }}>{recipe.title}</h3>
              <p style={{ color: '#555', fontSize: '0.95em', lineHeight: '1.5' }}>{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 15px',
                backgroundColor: '#ff5722', // Orange for details
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '0.9em',
                transition: 'background-color 0.3s ease'
              }}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
