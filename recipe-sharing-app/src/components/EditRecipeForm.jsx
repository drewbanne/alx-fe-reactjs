// src/components/EditRecipeForm.jsx

import React, { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore'; // Import the store
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// EditRecipeForm component: allows editing an existing recipe.
const EditRecipeForm = ({ recipe }) => {
  // Get the updateRecipe action from the Zustand store.
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  // Get the navigate function for redirection after editing.
  const navigate = useNavigate();

  // Local state for form inputs, initialized with the current recipe data.
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Use useEffect to update local state if the 'recipe' prop changes (e.g., if navigating between recipes).
  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission.

    // Basic validation.
    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description.');
      return;
    }

    // Create the updated recipe object.
    const updatedRecipe = {
      ...recipe, // Keep the existing ID and any other properties.
      title,
      description,
    };

    updateRecipe(updatedRecipe); // Call the update action.
    navigate(`/recipes/${recipe.id}`); // Redirect back to the recipe details page.
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '500px',
      margin: '20px auto',
      padding: '25px',
      border: '1px solid #c8e6c9',
      borderRadius: '10px',
      backgroundColor: '#e8f5e9',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#388e3c', marginBottom: '10px', textAlign: 'center' }}>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{
          padding: '12px',
          border: '1px solid #a5d6a7',
          borderRadius: '5px',
          fontSize: '1em'
        }}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        rows="5"
        style={{
          padding: '12px',
          border: '1px solid #a5d6a7',
          borderRadius: '5px',
          fontSize: '1em',
          resize: 'vertical'
        }}
        required
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          fontSize: '1.1em',
          backgroundColor: '#4CAF50', // Green
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease'
        }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
