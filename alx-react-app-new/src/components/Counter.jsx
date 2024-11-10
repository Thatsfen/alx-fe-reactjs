// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  // Initialize state with useState
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
