import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUserData } from './services/githubService';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedUsername, setSearchedUsername] = useState('');

  const handleSearch = async (username) => {
    setSearchedUsername(username);
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
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Find any GitHub user by their username</p>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} loading={loading} />
        
        {loading && (
          <div className="status-message loading">
            <p>Loading {searchedUsername}'s profile...</p>
          </div>
        )}
        
        {error && (
          <div className="status-message error">
            <p>{error}</p>
            {error === 'User not found' && (
              <p>Please check the username and try again</p>
            )}
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
                
                <div className="profile-stats">
                  <div className="stat">
                    <strong>Followers</strong>
                    <span>{user.followers}</span>
                  </div>
                  <div className="stat">
                    <strong>Following</strong>
                    <span>{user.following}</span>
                  </div>
                  <div className="stat">
                    <strong>Repos</strong>
                    <span>{user.public_repos}</span>
                  </div>
                </div>
                
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  View Full Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Search GitHub users with React</p>
      </footer>
    </div>
  );
}

export default App;