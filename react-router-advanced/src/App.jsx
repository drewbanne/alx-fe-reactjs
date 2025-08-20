// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import './App.css'; // Global styles (if any)

// Import AuthProvider and useAuth for authentication
import { AuthProvider, useAuth } from './AuthContext';

// Import components for routing
// IMPORTANT: Profile is now imported from 'src/components/Profile'
import Profile from './components/Profile'; // Profile component (handles its own nested routes)
import BlogPost from './components/BlogPost'; // Dynamic Blog Post component
import ProtectedRoute from './components/ProtectedRoute'; // Protected route component

// Simple Home and About placeholders
const Home = () => {
    const { isAuthenticated, login, logout } = useAuth(); // Access auth state and functions
    return (
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em', backgroundColor: '#f8f8f8', borderRadius: '8px', margin: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h2>Welcome Home!</h2>
            <p>Explore different sections of the app using the navigation bar.</p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                {isAuthenticated ? (
                    <button
                        onClick={logout}
                        style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={login}
                        style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                    >
                        Login
                    </button>
                )}
            </div>
            <p style={{ marginTop: '10px', fontSize: '0.9em', color: isAuthenticated ? 'green' : 'red' }}>
                Status: {isAuthenticated ? 'Logged In' : 'Logged Out'}
            </p>
        </div>
    );
};

const About = () => (
    <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em', backgroundColor: '#f8f8f8', borderRadius: '8px', margin: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h2>About Our Advanced Routing Demo</h2>
        <p>This application demonstrates nested, dynamic, and protected routes using React Router.</p>
    </div>
);

const NotFound = () => (
    <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em', color: 'red', backgroundColor: '#ffebee', borderRadius: '8px', margin: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'blue', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>Go to Home</Link>
    </div>
);


function App() {
  return (
    // Wrap the entire application with AuthProvider to make auth state available globally.
    <AuthProvider>
      <BrowserRouter>
        {/* Navigation Bar */}
        <nav style={{ padding: '20px', backgroundColor: '#2c3e50', color: 'white', display: 'flex', justifyContent: 'center', gap: '20px', borderRadius: '0 0 10px 10px', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', padding: '8px 12px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', padding: '8px 12px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>About</Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', padding: '8px 12px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Profile (Protected)</Link>
          {/* Example of a dynamic link */}
          <Link to="/blog/123" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', padding: '8px 12px', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Blog Post 123</Link>
        </nav>

        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: 'calc(100vh - 80px)', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Protected Route: Profile component is wrapped by ProtectedRoute.
                Only accessible if isAuthenticated is true. */}
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            {/* Dynamic Route: :id is a URL parameter that gets passed to BlogPost */}
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
