import React from 'react';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Find any GitHub user by their username</p>
      </header>

      <main className="app-main">
        <Search />
      </main>

      <footer className="app-footer">
        <p>Search GitHub users with React</p>
      </footer>
    </div>
  );
}

export default App;