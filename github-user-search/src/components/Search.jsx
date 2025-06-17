import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    await onSearch(username, location, Number(minRepos));
    navigate("/results"); 
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="searchform__group">
        <label htmlFor="username">GitHub Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="search-form__group">
        <label htmlFor="location">Location (Optional)</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="search-form__group">
        <label htmlFor="minRepos">Min Repositories</label>
        <input
          id="minRepos"
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
