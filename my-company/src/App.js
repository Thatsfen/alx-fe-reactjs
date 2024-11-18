// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About'; 
import Services from './components/Services'; 
import Contact from './components/Contact';
import './App.css'; 

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Routes for each page */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
