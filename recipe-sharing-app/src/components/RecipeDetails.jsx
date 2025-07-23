// src/components/RecipeDetails.jsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams to get ID from URL, useNavigate for navigation
import useRecipeStore from './recipeStore'; // Import the store
import EditRecipeForm from './EditRecipeForm'; // Import the EditRecipeForm
import DeleteRecipeButton from './DeleteRecipeButton'; // Import the DeleteRecipeButton

// RecipeDetails component: displays detailed information for a single recipe.
const RecipeDetails = () => {
  // Get the 'recipeId' from the URL parameters.
  const { recipeId } = useParams();
  // Convert recipeId to a number, as IDs from Date.now() are numbers.
  const id = parseInt(recipeId, 10);

  // Get the recipe from the store based on the ID.
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  // State to toggle between viewing details and editing the recipe.
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate(); // For navigating back if recipe not found.

  // If recipe is not found (e.g., direct URL access for a non-existent ID), redirect.
  if (!recipe) {
    // You could also render a "Recipe Not Found" message.
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
        // If in editing mode, render the EditRecipeForm.
        <EditRecipeForm recipe={recipe} />
      ) : (
        // Otherwise, display recipe details.
        <>
          <h1 style={{ color: '#0288d1', marginBottom: '15px', fontSize: '2.5em' }}>{recipe.title}</h1>
          <p style={{ color: '#444', fontSize: '1.1em', lineHeight: '1.6' }}>{recipe.description}</p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <button
              onClick={() => setIsEditing(true)} // Toggle to editing mode.
              style={{
                padding: '10px 20px',
                fontSize: '1em',
                backgroundColor: '#007bff', // Blue for edit
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
            {/* Render the DeleteRecipeButton, passing the recipe ID. */}
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </>
      )}
      <button
        onClick={() => navigate('/')} // Button to go back to the recipe list.
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#6c757d', // Grey for back button
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
