import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="search-input"
          disabled={loading}
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={loading || !username.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && (
        <div className="status-message loading">
          <p>Loading user data...</p>
        </div>
      )}

      {error && (
        <div className="status-message error">
          <p>{error.includes('not found') ? 'Looks like we cant find the user' : 'Error fetching data'}</p>
        </div>
      )}

      {user && (
        <div className="user-profile">
          <div className="profile-header">
            <img 
              src={user.avatar_url} 
              alt={`${user.login}'s avatar`}
              className="avatar"
            />
            <div className="profile-info">
              <h2>{user.name || user.login}</h2>
              {user.bio && <p className="bio">{user.bio}</p>}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;