// src/App.jsx

import React, { useState } from 'react';
import './App.css';

// Import the new components and the API service.
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { searchUsers } from './services/githubService';

function App() {
  // State for search results, loading status, and any errors.
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle the search when the SearchForm is submitted.
  const handleSearch = async (query, location, minRepos) => {
    setLoading(true);
    setError(null);
    setUsers([]); // Clear previous results

    try {
      const results = await searchUsers(query, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">
            GitHub User Search
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Find GitHub profiles with advanced search criteria.
          </p>
        </header>

        {/* SearchForm component */}
        <SearchForm onSearch={handleSearch} />

        {/* Conditional rendering for loading, error, and results */}
        <div className="mt-8">
          {loading && (
            <p className="text-center text-blue-600 text-lg font-semibold">
              Searching for users...
            </p>
          )}

          {error && (
            <p className="text-center text-red-600 text-lg font-semibold">
              {error}
            </p>
          )}

          {!loading && !error && users.length > 0 && (
            <SearchResults users={users} />
          )}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GitHub User Search App. Built with React and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
