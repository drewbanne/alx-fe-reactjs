import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUser, fetchUserRepos } from './services/githubService';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await fetchUser(username);
      const reposData = await fetchUserRepos(username);
      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and view their profiles</p>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        
        {loading && <p className="loading-message">Loading...</p>}
        
        {error && (
          <p className="error-message">{error}</p>
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
                <p>{user.bio || 'No bio available'}</p>
                <div className="stats">
                  <span>Followers: {user.followers}</span>
                  <span>Following: {user.following}</span>
                  <span>Repos: {user.public_repos}</span>
                </div>
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

            <div className="repositories">
              <h3>Top Repositories</h3>
              {repos.slice(0, 5).map(repo => (
                <div key={repo.id} className="repo-card">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                  <p>{repo.description || 'No description'}</p>
                  <div className="repo-stats">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Created by drewbanne</p>
      </footer>
    </div>
  );
}

export default App;