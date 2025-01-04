import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${encodeURIComponent(location)}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    query += `&page=${page}`;

    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    const users = response.data.items;

    if (users && users.length > 0) {
      return users;
    } else {
      throw new Error('No users found');
    }
  } catch (error) {
    console.error(error);  
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
};

export default fetchUserData;
