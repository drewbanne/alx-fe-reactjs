// src/components/RecipeDetails.jsx

import React, { useState } => 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

// RecipeDetails component: displays detailed information for a single recipe.
const RecipeDetails = () => {
  const { recipeId } = useParams();
  const id = parseInt(recipeId, 10);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const favorites = useRecipeStore((state) => state.favorites); // Get favorites state
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Function to toggle favorite status
  const toggleFavorite = () => {
    if (favorites.includes(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#dc3545' }}>
        <h2>Recipe not found!</h2>
        <button onClick={() => navigate('/')} style={{
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Go to Recipe List
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: '30px',
      maxWidth: '800px',
      margin: '20px auto',
      border: '1px solid #b3e5fc',
      borderRadius: '12px',
      backgroundColor: '#e3f2fd',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
    }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} />
      ) : (
        <>
          <h1 style={{ color: '#0288d1', marginBottom: '15px', fontSize: '2.5em' }}>{recipe.title}</h1>
          <p style={{ color: '#444', fontSize: '1.1em', lineHeight: '1.6' }}>{recipe.description}</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: '10px 20px',
                fontSize: '1em',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease'
              }}
            >
              Edit Recipe
            </button>
            <DeleteRecipeButton recipeId={recipe.id} />
            {/* Favorite/Unfavorite Button */}
            <button
              onClick={toggleFavorite}
              style={{
                padding: '10px 20px',
                fontSize: '1em',
                backgroundColor: favorites.includes(recipe.id) ? '#ffeb3b' : '#f0f0f0', // Yellow if favorited
                color: favorites.includes(recipe.id) ? '#333' : '#666',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
            >
              {favorites.includes(recipe.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
          </div>
        </>
      )}
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease',
          marginTop: '20px'
        }}
      >
        Back to All Recipes
      </button>
    </div>
  );
};

export default RecipeDetails;
