import axios from 'axios';

const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${encodeURIComponent(location)}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    query += `&page=${page}`;

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
