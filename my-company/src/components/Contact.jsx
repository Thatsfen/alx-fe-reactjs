// src/components/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#fff', marginBottom: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <h1 style={{ color: '#333' }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
