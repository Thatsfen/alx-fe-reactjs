import React, { useState } from 'react';
import fetchUserData from '../services/githubService'; // Correct import path

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
      setLoading(true); // Set loading state to true
      setError(null); // Reset any previous errors
      setUserData(null); // Clear previous user data
      try {
        const data = await fetchUserData(username);
        setUserData(data); // Set the user data on success
        setLoading(false); // Set loading to false
      } catch (err) {
        setError('Looks like we can\'t find the user'); // Set error message
        setLoading(false); // Set loading to false even on error
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

      {loading && <p>Loading...</p>} {/* Display Loading message while fetching */}
      
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      
      {userData && !loading && !error && (
        <div>
          <h2>{userData.login}</h2> {/* Display GitHub username (login) */}
          <p>{userData.bio || 'No bio available'}</p> {/* Display user bio if available */}
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
