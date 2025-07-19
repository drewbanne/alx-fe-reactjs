// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Navbar component with links to different pages and inline styling.
function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50', // Dark blue/grey
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'center', // Center the links
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      borderRadius: '0 0 8px 8px' // Rounded bottom corners
    }}>
      <ul style={{
        listStyle: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
        gap: '30px' // Space between links
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold', transition: 'color 0.3s ease' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold', transition: 'color 0.3s ease' }}>About</Link>
        </li>
        <li>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold', transition: 'color 0.3s ease' }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold', transition: 'color 0.3s ease' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
