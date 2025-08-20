// src/App.jsx

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider

import PostsComponent from './components/PostsComponent'; // Import the PostsComponent

import './App.css'; // Keep this for any global styles, though we are using minimal inline styles for this demo.

// Create a client for React Query.
// This client holds the cache and configuration for all your queries.
const queryClient = new QueryClient();

function App() {
  return (
    // QueryClientProvider makes the queryClient available to all components
    // within its tree. Any component nested inside can now use React Query hooks.
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '3em', marginBottom: '30px' }}>
          React Query Demo
        </h1>
        {/* Render the PostsComponent, which will use React Query to fetch data. */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
