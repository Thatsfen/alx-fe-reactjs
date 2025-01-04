import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the query string for the advanced search
    let query = `q=${username}`;
    if (location) query += `+location:${encodeURIComponent(location)}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?${query}`);

    // GitHub's Search API returns an array of users; we pick the first result (if available)
    const users = response.data.items;

    if (users && users.length > 0) {
      const userDetails = await axios.get(users[0].url); // Fetch detailed user data
      return userDetails.data;
    } else {
      throw new Error('No users found');
    }
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
};

export default fetchUserData;
