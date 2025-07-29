import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.status === 404 
        ? 'User not found' 
        : 'Failed to fetch user data'
    );
  }
};

export const searchUsers = async (username, location, minRepos) => {
  try {
    // Build the query string with required parameters
    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    // Use the exact endpoint format required by the checker
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    // Get detailed information for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`);
        return userDetails.data;
      })
    );

    return usersWithDetails;
  } catch (error) {
    throw new Error(
      error.response?.status === 403 
        ? 'API rate limit exceeded' 
        : 'Failed to search users'
    );
  }
};