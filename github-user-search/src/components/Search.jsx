import React, { useState } from 'react';
import fetchUserData from '../services/githubService'; // Adjust path as needed

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);
      setError(null);
      setUserData(null);
      try {
        const data = await fetchUserData(username);
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError("Looks like we can't find the user");
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

      {/* Show Loading State */}
      {loading && <p>Loading...</p>}

      {/* Show Error State (explicit message) */}
      {error && error === "Looks like we can't find the user" && (
        <p style={{ color: 'red' }}>Looks like we can't find the user</p>
      )}

      {/* Show User Data */}
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
