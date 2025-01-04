import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setCurrentPage(1); 
    try {
      const data = await fetchUserData(username, location, minRepos, 1); page
      setUsers(data.items); 
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreResults = async () => {
    const nextPage = currentPage + 1;
    setLoading(true);
    try {
      const data = await fetchUserData(username, location, minRepos, nextPage);
      setUsers((prevUsers) => [...prevUsers, ...data.items]); // Append new results to existing ones
      setCurrentPage(nextPage);
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
          Looks like we cant find any users
        </p>
      )}

    
      {users.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 shadow-md rounded p-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold">{user.login}</h2>
                  <p>Location: {user.location || 'No location available'}</p>
                  <p>Repositories: {user.public_repos || 'Unknown'}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
            </div>
          ))}

         
          <button
            onClick={loadMoreResults}
            className="w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
