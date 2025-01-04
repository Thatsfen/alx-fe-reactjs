import React, { useState } from 'react';
import fetchUserData from '../services/githubService'; // Adjust path as needed

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // Use boolean for simplicity

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);
      setError(false);
      setUserData(null);
      try {
        const data = await fetchUserData(username);
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(true); // Set error state to true
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Explicit hardcoding of error message */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Looks like we cant find the user</p>} {/* Hardcoded error */}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
        </div>
      )}
    </div>
  );
};

export default Search;
