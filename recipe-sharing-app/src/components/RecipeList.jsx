// src/components/RecipeList.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore'; // Import the store

// RecipeList component displays the list of recipes from the Zustand store.
const RecipeList = () => {
  // Select filtered recipes, filter action, and favorite actions from the store.
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const favorites = useRecipeStore((state) => state.favorites); // Get favorites state
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);


  // Use useEffect to trigger filtering whenever recipes or searchTerm change.
  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);


  // Function to toggle favorite status
  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '20px' }}>
        Available Recipes
      </h2>
      {filteredRecipes.length === 0 && recipes.length > 0 && searchTerm ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No recipes found matching your search term.</p>
      ) : filteredRecipes.length === 0 && recipes.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No recipes added yet. Add some!</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {filteredRecipes.map((recipe) => ( // Use filteredRecipes here
            <div key={recipe.id} style={{
              border: '1px solid #c8e6c9',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#e8f5e9',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#388e3c', marginBottom: '10px', fontSize: '1.4em' }}>{recipe.title}</h3>
              <p style={{ color: '#555', fontSize: '0.95em', lineHeight: '1.5' }}>{recipe.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <Link to={`/recipes/${recipe.id}`} style={{
                  display: 'inline-block',
                  padding: '8px 15px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '0.9em',
                  transition: 'background-color 0.3s ease'
                }}>
                  View Details
                </Link>
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  style={{
                    padding: '8px 15px',
                    backgroundColor: favorites.includes(recipe.id) ? '#ffeb3b' : '#f0f0f0', // Yellow if favorited
                    color: favorites.includes(recipe.id) ? '#333' : '#666',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9em',
                    transition: 'background-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  {favorites.includes(recipe.id) ? '❤️ Favorited' : '🤍 Favorite'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
