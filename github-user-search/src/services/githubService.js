const BASE_URL = 'https://api.github.com';

export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};