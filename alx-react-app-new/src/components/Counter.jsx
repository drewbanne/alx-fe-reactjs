// src/components/Counter.jsx

// Import the useState hook from React.
// useState is a Hook that lets you add React state to function components.
import { useState } from 'react';

// Define the Counter functional component.
// Functional components are JavaScript functions that return JSX.
function Counter() {
  // Initialize state using the useState hook.
  // 'count' is the current state value.
  // 'setCount' is the function that allows you to update the 'count' state.
  // The initial value of 'count' is set to 0.
  const [count, setCount] = useState(0);

  // Define the function to handle incrementing the count.
  const handleIncrement = () => {
    setCount(count + 1); // Updates the 'count' state by adding 1.
  };

  // Define the function to handle decrementing the count.
  const handleDecrement = () => {
    setCount(count - 1); // Updates the 'count' state by subtracting 1.
  };

  // Define the function to handle resetting the count.
  const handleReset = () => {
    setCount(0); // Resets the 'count' state back to 0.
  };

  return (
    // The main container for the counter component.
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#e0f7fa'
    }}>
      {/* Display the current count */}
      <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#00796b' }}>
        Current Count: {count}
      </p>
      {/* Buttons to interact with the counter */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={handleIncrement} // Attach the increment function to the button's click event
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#4CAF50', // Green
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease'
          }}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement} // Attach the decrement function
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#f44336', // Red
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease'
          }}
        >
          Decrement
        </button>
        <button
          onClick={handleReset} // Attach the reset function
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#2196F3', // Blue
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// Export the Counter component as the default export.
export default Counter;
