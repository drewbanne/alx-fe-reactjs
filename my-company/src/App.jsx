// src/App.jsx

import React from 'react';
// Import BrowserRouter, Routes, and Route for routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Navbar component.
import Navbar from './components/Navbar';

// Import the page components from their new or correct locations.
// Home, About, Services are still in 'pages'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
// Contact is now imported from 'components'
import Contact from './components/Contact';

// Import the global CSS (if any, though we're using inline for this assignment).
import './App.css'; // Keep this if you have any global styles, otherwise you can remove it.

function App() {
  return (
    // BrowserRouter enables client-side routing.
    <BrowserRouter>
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Routes define the different paths and their corresponding components. */}
      <Routes>
        {/* Route for the Home page. 'path="/"' means the root URL. */}
        <Route path="/" element={<Home />} />
        {/* Route for the About page. */}
        <Route path="/about" element={<About />} />
        {/* Route for the Services page. */}
        <Route path="/services" element={<Services />} />
        {/* Route for the Contact page. */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Optional: Add a simple footer that appears on all pages */}
      <footer style={{
        backgroundColor: '#34495e', // Darker blue/grey
        color: 'white',
        textAlign: 'center',
        padding: '15px 0',
        marginTop: 'auto', // Pushes footer to the bottom if content is short
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        borderRadius: '8px 8px 0 0' // Rounded top corners
      }}>
        <p style={{ margin: '0', fontSize: '0.9em' }}>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}