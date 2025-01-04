import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username, location, minRepos); 
      if (location && data.location?.toLowerCase() !== location.toLowerCase()) {
        throw new Error('Location mismatch');
      }
      if (minRepos && data.public_repos < parseInt(minRepos, 10)) {
        throw new Error('Minimum repositories not met');
      }
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded p-6 space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-700 font-semibold">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-gray-700 font-semibold">
            Location (Optional)
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="minRepos" className="text-gray-700 font-semibold">
            Minimum Repositories (Optional)
          </label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">
          Looks like we can't find the user or they don't meet the criteria.
        </p>
      )}
      {userData && (
        <div className="mt-6 w-full max-w-md bg-gray-100 shadow-md rounded p-4">
          <h2 className="text-lg font-bold">{userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <p>
            Location: {userData.location || 'No location available'}
          </p>
          <p>Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Profile
          </a>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="mt-4 w-24 h-24 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Search;
