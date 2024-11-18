// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 20px', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '20px' }}>
        <li>
          <Link to="/" style={{ color: '#fff', fontSize: '1.2em', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#fff', fontSize: '1.2em', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/services" style={{ color: '#fff', fontSize: '1.2em', textDecoration: 'none' }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: '#fff', fontSize: '1.2em', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
