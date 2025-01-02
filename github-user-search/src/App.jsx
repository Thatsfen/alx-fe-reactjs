import React, { useState } from 'react';
import fetchUserData from './services/githubService'; // Import default function
import Search from './components/Search';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username); // Use the fetchUserData function
      setUserData(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setUserData(null);
      setError(err.message); // Set error message if the API request fails
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
        </div>
      )}
    </div>
  );
};

export default App;
