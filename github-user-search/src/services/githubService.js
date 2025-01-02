
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    
    
    if (response.status === 404) {
      throw new Error('User not found');
    }

    return response.data; 
  } catch (error) {
    if (error.response) {
      
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      
      throw new Error('No response from server');
    } else {
      
      throw new Error(error.message || 'Unable to fetch user data');
    }
  }
};

export default fetchUserData;
