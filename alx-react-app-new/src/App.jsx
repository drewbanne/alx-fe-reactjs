// src/App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import existing components
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

// Import the new Counter component.
import Counter from './components/Counter';

import './App.css'

function App() {
  const [count, setCount] = useState(0) // This useState is from the default Vite template, not directly related to the new Counter component.

  return (
    <>
      {/* Render existing components */}
      <WelcomeMessage name="ALX Student" />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys coding and gaming"
      />

      {/* Render the new Counter component here. */}
      {/* This will display your interactive counter. */}
      <Counter />

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

