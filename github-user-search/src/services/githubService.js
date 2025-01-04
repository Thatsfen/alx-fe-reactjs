import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${encodeURIComponent(location)}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    query += `&page=${page}`;

    // Direct reference to the GitHub search users API
    const response = await axios.get('https://api.github.com/search/users?' + query);
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
