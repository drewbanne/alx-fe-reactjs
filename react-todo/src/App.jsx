// src/App.jsx

import React from 'react';
import TodoList from './components/TodoList'; // Import the TodoList component

import './App.css'; // Keep this for any global styles, though we're using inline styles.

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f2f7', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '50px' }}>
      {/* Render the TodoList component */}
      <TodoList />
    </div>
  );
}

export default App;
