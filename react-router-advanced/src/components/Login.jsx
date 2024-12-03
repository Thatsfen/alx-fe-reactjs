// src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Authenticate the user
    navigate('/'); // Redirect to home after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
