import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    setUsers([]);
    
    try {
      // First try exact match using fetchUserData
      try {
        const userData = await fetchUserData(searchTerm);
        setUsers([userData]);
      } catch (exactMatchError) {
        // If exact match fails, fall back to searchUsers
        const results = await searchUsers(searchTerm);
        setUsers(results);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub users..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !searchTerm.trim()}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <div className="loading">Loading...</div>}

      {error && (
        <div className="error">
          {error.includes('not found') 
            ? 'Looks like we cant find the user' 
            : 'Error searching users'}
        </div>
      )}

      {users.length > 0 && (
        <div className="results">
          <h2>Search Results</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                <div>
                  <h3>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                      {user.login}
                    </a>
                  </h3>
                  {user.name && <p>{user.name}</p>}
                  {user.location && <p>📍 {user.location}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;