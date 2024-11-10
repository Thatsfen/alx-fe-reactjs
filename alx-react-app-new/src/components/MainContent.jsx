// src/components/MainContent.jsx
function MainContent() {
  return (
      <main style={{
          padding: '20px', 
          backgroundColor: '#f4f4f9', 
          borderRadius: '8px', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          marginBottom: '20px'
      }}>
          <p style={{
              fontSize: '18px', 
              lineHeight: '1.6', 
              color: '#333',
              marginBottom: '15px'
          }}>
              I love to visit New York, Paris, and Tokyo. Each city has its unique charm and vibrant culture.
          </p>
          <p style={{
              fontSize: '16px', 
              color: '#555',
              marginTop: '10px'
          }}>
              Traveling broadens the mind and helps me discover new experiences. I always look forward to the next adventure!
          </p>
      </main>
  );
}

export default MainContent;
