// src/components/SearchResults.jsx

import React from 'react';

// SearchResults component displays a list of user profiles.
const SearchResults = ({ users }) => {
  return (
    <div className="mt-8">
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found. Try a different search!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <div
              key={user.id}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{user.login}</h3>
              {/* Note: The search API doesn't return all details like location/repos directly.
                  We'd need to make a separate API call for each user to get those.
                  For this assignment, we'll just display what the search API gives. */}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
