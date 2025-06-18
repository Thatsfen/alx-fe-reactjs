import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import fetchUserData from './services/githubService';
import Search from './components/Search';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import './index.css';

const AppContent = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (username, locationInput, minRepos) => {
    try {
      const data = await fetchUserData(username, locationInput, minRepos);
      setUsers(data);
      setError(null);
    } catch (err) {
      setUsers([]);
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <Header />
      {location.pathname !== '/results' && (
        <div className="search-container">
          <Search onSearch={handleSearch} />
        </div>
      )}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/results" element={<ResultsPage users={users} error={error} />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
