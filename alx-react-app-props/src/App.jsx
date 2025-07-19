// src/App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import the ProfilePage component
import ProfilePage from './ProfilePage';
// Import the newly created UserContext
import UserContext from './UserContext';

import './App.css'

function App() {
  // Define user data at the top-level App component
  const userData = { name: "Jane Doe (Context API)", email: "jane.doe.context@example.com" };

  return (
    // Wrap the components that need access to userData with UserContext.Provider.
    // The 'value' prop of the Provider is the data that will be made available
    // to all consuming components down the tree.
    <UserContext.Provider value={userData}>
      <div style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
        <h1>Context API Example</h1>
      </div>

      {/* ProfilePage no longer needs to receive userData as a prop,
          as it will be accessed via Context by its descendants. */}
      <ProfilePage />

      {/* You can keep or remove the default Vite + React content below. */}
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
        <button onClick={() => console.log('Button clicked')}>
          Default Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </UserContext.Provider>
  )
}

export default App;
