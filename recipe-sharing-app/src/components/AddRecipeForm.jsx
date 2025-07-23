// src/components/AddRecipeForm.jsx

import React, { useState } from 'react';
// Import the useRecipeStore hook to access the addRecipe action.
import useRecipeStore from '../recipeStore'; // Note: path is relative to src/components

// AddRecipeForm component allows users to add new recipes.
const AddRecipeForm = () => {
  // Select the 'addRecipe' action from the Zustand store.
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // Local state for form inputs.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser form submission (page reload).

    // Basic validation: ensure title and description are not empty.
    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description for the recipe.');
      return;
    }

    // Call the addRecipe action from the Zustand store.
    // Assign a unique ID using Date.now() for simplicity.
    addRecipe({ id: Date.now(), title, description });

    // Clear the form fields after submission.
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      maxWidth: '500px',
      margin: '20px auto',
      padding: '25px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px', textAlign: 'center' }}>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{
          padding: '12px',
          border: '1px solid #ccc',
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
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '1em',
          resize: 'vertical' // Allow vertical resizing
        }}
        required
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          fontSize: '1.1em',
          backgroundColor: '#007bff', // Blue
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease'
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
