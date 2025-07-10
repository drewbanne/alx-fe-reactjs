// src/App.jsx

// Import the useState hook from React. This is used for managing component state.
// Although not directly used in this specific modification, it's often present in Vite's default App.jsx.
import { useState } from 'react'

// Import the React logo SVG. This is also part of Vite's default setup.
import reactLogo from './assets/react.svg'
// Import the Vite logo SVG.
import viteLogo from '/vite.svg'

// Import the new WelcomeMessage component.
// The path './WelcomeMessage' refers to the WelcomeMessage.jsx file in the same directory.
import WelcomeMessage from './WelcomeMessage'

// Import the CSS file for styling the App component.
import './App.css'

// Define the main App functional component.
function App() {
  // useState hook for managing a counter.
  // The first element `count` is the current state value.
  // The second element `setCount` is a function to update the state.
  const [count, setCount] = useState(0)

  // The return statement contains the JSX that defines the UI of the App component.
  return (
    <>
      {/* Render the WelcomeMessage component here. */}
      {/* This is how you use a custom React component within another component's JSX. */}
      <WelcomeMessage />

      {/* The rest of the content is from the default Vite + React template. */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// Export the App component as the default export, making it the main component of your application.
export default App
