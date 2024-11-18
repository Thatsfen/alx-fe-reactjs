// src/App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />  {/* Add the Navbar here */}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>

      
    </>
  );
}

export default App;
