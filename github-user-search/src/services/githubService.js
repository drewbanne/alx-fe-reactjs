import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.status === 404 
        ? 'not found' // Changed to partial match for includes() check
        : 'Failed to fetch user data'
    );
  }
};