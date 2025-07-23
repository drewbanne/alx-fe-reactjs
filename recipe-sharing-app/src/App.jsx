// src/App.jsx

import React from 'react';
// Import the components we just created.
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

// Import global CSS (if any, though we're using inline styles).
import './App.css';

function App() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f7f6',
      minHeight: '100vh',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px', fontSize: '2.8em' }}>
        Recipe Sharing Application
      </h1>

      {/* Render the AddRecipeForm component */}
      <AddRecipeForm />

      {/* Render the RecipeList component */}
      <RecipeList />

      {/* You can remove the default Vite + React content from here if you wish,
          or keep it if it's not interfering. For a clean app, I'll remove it. */}
      {/*
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => console.log('Default button clicked')}>
          Default button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </div>
  );
}

export default App;
