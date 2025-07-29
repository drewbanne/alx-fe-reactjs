import React from 'react';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">GitHub User Search</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <AdvancedSearch />
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">GitHub User Search App</p>
        </div>
      </footer>
    </div>
  );
}

export default App;