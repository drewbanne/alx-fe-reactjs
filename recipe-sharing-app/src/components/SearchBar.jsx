// src/components/SearchBar.jsx

import React from 'react';
import useRecipeStore from './recipeStore'; // Import the store

// SearchBar component allows users to input a search term.
const SearchBar = () => {
  // Get the setSearchTerm action from the Zustand store.
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  // Get the current searchTerm from the store to make the input controlled.
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Handle input change and update the search term in the store.
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      value={searchTerm} // Make the input a controlled component
      onChange={handleChange}
      style={{
        width: 'calc(100% - 40px)', // Adjust width for padding
        padding: '12px 20px',
        margin: '20px auto', // Center the input
        display: 'block',
        border: '1px solid #ccc',
        borderRadius: '25px', // Rounded corners for a modern look
        fontSize: '1em',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
    />
  );
};

export default SearchBar;
