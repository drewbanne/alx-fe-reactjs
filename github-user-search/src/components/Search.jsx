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
    
    try {
      // First try exact username match
      try {
        const userData = await fetchUserData(searchTerm);
        setUsers([userData]);
      } catch {
        // If exact match fails, do a broader search
        const searchResults = await searchUsers({ username: searchTerm });
        setUsers(searchResults);
      }
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GitHub users..."
            className="flex-grow p-2 border border-gray-300 rounded-l"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !searchTerm.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-r disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center py-4">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error.includes('not found') ? 'Looks like we cant find the user' : error}</p>
        </div>
      )}

      {users.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="bg-gray-100 px-6 py-3 font-semibold">Search Results</h2>
          <ul className="divide-y divide-gray-200">
            {users.map(user => (
              <li key={user.id} className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.avatar_url} 
                    alt={`${user.login}'s avatar`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-lg">
                      <a 
                        href={user.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.login}
                      </a>
                    </h3>
                    {user.name && <p className="text-gray-600">{user.name}</p>}
                    {user.location && <p className="text-gray-500 text-sm">📍 {user.location}</p>}
                    <div className="flex space-x-4 mt-1 text-sm">
                      <span>Repos: {user.public_repos || 'N/A'}</span>
                      <span>Followers: {user.followers || 'N/A'}</span>
                    </div>
                  </div>
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