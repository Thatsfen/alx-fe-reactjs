// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#282c34" }}>
     
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
