// src/App.jsx

import React from 'react';
import './App.css'; // Keep default CSS or remove if not needed

function App() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        paddingBottom: '15px',
        borderBottom: '2px solid #e0e0e0'
      }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '10px' }}>
          GitHub User Search
        </h1>
        <p style={{ color: '#6c757d', fontSize: '1.1em' }}>
          Find GitHub profiles quickly and easily.
        </p>
      </header>

      <main>
        {/* This is where your SearchBar and UserProfile components will go */}
        <p style={{ textAlign: 'center', color: '#34495e', marginTop: '50px' }}>
          Application setup complete. Ready for search functionality!
        </p>
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '50px',
        paddingTop: '20px',
        borderTop: '1px solid #e0e0e0',
        color: '#6c757d',
        fontSize: '0.9em'
      }}>
        <p>&copy; {new Date().getFullYear()} GitHub User Search App</p>
      </footer>
    </div>
  );
}

export default App;