// src/components/DeleteRecipeButton.jsx

import React from 'react';
import useRecipeStore from './recipeStore'; // Import the store
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// DeleteRecipeButton component: a button to delete a specific recipe.
const DeleteRecipeButton = ({ recipeId }) => {
  // Get the deleteRecipe action from the Zustand store.
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  // Get the navigate function from react-router-dom to redirect after deletion.
  const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm with the user before deleting.
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId); // Call the delete action.
      navigate('/'); // Redirect to the home page (RecipeList) after deletion.
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        fontSize: '1em',
        backgroundColor: '#dc3545', // Red color for delete
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transition: 'background-color 0.3s ease',
        marginTop: '10px'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
