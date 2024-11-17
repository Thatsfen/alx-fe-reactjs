import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyles = {
    backgroundColor: '#282c34',
    padding: '10px 0',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const linkStyles = {
    color: '#61dafb',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px'
  };

  return (
    <nav style={navbarStyles}>
      <Link to="/" style={linkStyles}>Home</Link>
      <Link to="/about" style={linkStyles}>About</Link>
      <Link to="/services" style={linkStyles}>Services</Link>
      <Link to="/contact" style={linkStyles}>Contact</Link>
    </nav>
  );
}

export default Navbar;
