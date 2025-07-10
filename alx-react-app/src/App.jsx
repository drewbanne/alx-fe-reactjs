// src/App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import the WelcomeMessage component (from the previous assignment).
import WelcomeMessage from './components/WelcomeMessage'

// Import the new Header component.
import Header from './components/Header';
// Import the new MainContent component.
import MainContent from './components/MainContent';
// Import the new Footer component.
import Footer from './components/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Render the WelcomeMessage component from the previous assignment. */}
      {/* You can remove this or keep it, depending on if the assignment implies replacing or adding.
          For this assignment, we'll keep it as it doesn't explicitly say to remove it. */}
      <WelcomeMessage name="ALX Student" />

      {/* Render the new components in the specified order: Header, MainContent, Footer. */}
      <Header />
      <MainContent />
      <Footer />

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

export default App
