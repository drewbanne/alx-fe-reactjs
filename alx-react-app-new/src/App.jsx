// src/App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import the WelcomeMessage component.
import WelcomeMessage from './components/WelcomeMessage'

// Import the Header, MainContent, and Footer components.
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Import the new UserProfile component.
import UserProfile from './components/UserProfile';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Render the WelcomeMessage component */}
      <WelcomeMessage name="ALX Student" />

      {/* Render the Header, MainContent, and Footer components. */}
      <Header />
      <MainContent />
      <Footer />

      {/* Render the new UserProfile component and pass it data via props. */}
      {/* You can change the values for name, age, and bio as you like! */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      {/* You can even add another UserProfile with different data! */}
      <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys coding and gaming"
      />

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
