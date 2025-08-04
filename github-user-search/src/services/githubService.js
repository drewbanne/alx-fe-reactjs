// src/services/githubService.js

// Import axios for making HTTP requests.
import axios from 'axios';

// Get the base URL from the environment variables.
const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_BASE_URL || 'https://api.github.com';
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN; // Optional token for higher rate limits.

// Set up default headers with the token if available.
const api = axios.create({
  baseURL: BASE_URL,
  headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {},
});

/**
 * Searches for GitHub users with advanced filtering.
 * @param {string} query The main search query (e.g., username).
 * @param {string} location The location to filter by.
 * @param {number} minRepos The minimum number of public repositories.
 * @returns {Promise<object>} A promise that resolves to the search results.
 */
export const searchUsers = async (query, location, minRepos) => {
  try {
    // Construct the advanced query string.
    let fullQuery = query;
    if (location) {
      fullQuery += ` location:${location}`;
    }
    if (minRepos) {
      fullQuery += ` repos:>=${minRepos}`;
    }
    
    // Make the API call to the search endpoint.
    const response = await api.get('/search/users', {
      params: {
        q: fullQuery,
      },
    });

    // Return the items from the response data.
    return response.data.items;
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    // Throw an error with a more user-friendly message.
    throw new Error('Failed to fetch users from GitHub. Please try again.');
  }
};
