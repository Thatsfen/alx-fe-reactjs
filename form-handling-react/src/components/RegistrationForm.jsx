import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors('Username is required.');
      return;
    }

    if (!email) {
      setErrors('Email is required.');
      return;
    }

    if (!password) {
      setErrors('Password is required.');
      return;
    }

    setErrors('');
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
