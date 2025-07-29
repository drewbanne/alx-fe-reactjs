import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.status === 404 
        ? 'User not found' 
        : 'Failed to fetch user data'
    );
  }
};

export const searchUsers = async (params, page = 1) => {
  try {
    // Build query string from parameters
    let query = '';
    if (params.username) query += `${params.username} in:login`;
    if (params.location) query += ` location:${params.location}`;
    if (params.reposMin) query += ` repos:>${params.reposMin}`;
    if (params.language) query += ` language:${params.language}`;
    if (params.followersMin) query += ` followers:>${params.followersMin}`;

    const response = await axios.get(`${API_URL}/search/users`, {
      params: {
        q: query,
        page,
        per_page: 10
      }
    });

    // Fetch additional details for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(`${API_URL}/users/${user.login}`);
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