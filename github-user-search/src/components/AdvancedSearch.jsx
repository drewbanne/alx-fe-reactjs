import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    reposMin: '',
    language: '',
    followersMin: ''
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const users = await searchUsers(searchParams, page);
      setResults(users);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const newUsers = await searchUsers(searchParams, page + 1);
      setResults(prev => [...prev, ...newUsers]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Advanced GitHub Search</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={searchParams.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. octocat"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. San Francisco"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Min Repositories</label>
            <input
              type="number"
              name="reposMin"
              value={searchParams.reposMin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. 10"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Language</label>
            <input
              type="text"
              name="language"
              value={searchParams.language}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. JavaScript"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Search Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map(user => (
              <div key={user.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.avatar_url} 
                    alt={`${user.login}'s avatar`}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-lg">
                      <a 
                        href={user.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.login}
                      </a>
                    </h4>
                    {user.location && (
                      <p className="text-gray-600">
                        <span className="font-medium">Location:</span> {user.location}
                      </p>
                    )}
                    <p className="text-gray-600">
                      <span className="font-medium">Repositories:</span> {user.public_repos || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={loadMore}
            disabled={loading}
            className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;