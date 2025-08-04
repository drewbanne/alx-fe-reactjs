// src/components/SearchForm.jsx

import React, { useState } from 'react';

// SearchForm component handles the input and submission for advanced user searches.
const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  // Handle form submission to trigger the search in the parent component.
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, location, minRepos);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-lg space-y-4">
      {/* Search Input Field */}
      <div className="space-y-2">
        <label htmlFor="query" className="block text-sm font-medium text-gray-700">
          Username or Keyword
        </label>
        <input
          id="query"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., react developer"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Location Input Field */}
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Nigeria"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Min Repositories Input Field */}
      <div className="space-y-2">
        <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
          Minimum Repositories
        </label>
        <input
          id="minRepos"
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="e.g., 10"
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        Search GitHub Users
      </button>
    </form>
  );
};

export default SearchForm;
