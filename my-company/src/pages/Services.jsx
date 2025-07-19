// src/pages/Services.jsx

import React from 'react';

// Services page component with inline styling.
function Services() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '15px' }}>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#e65100', fontSize: '1.5em', marginBottom: '5px' }}>Technology Consulting</h2>
          <p style={{ color: '#424242' }}>Providing expert advice and solutions for your IT infrastructure and software needs.</p>
        </li>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#e65100', fontSize: '1.5em', marginBottom: '5px' }}>Market Analysis</h2>
          <p style={{ color: '#424242' }}>In-depth research and analysis to identify market trends and opportunities.</p>
        </li>
        <li style={{ backgroundColor: '#ffe0b2', margin: '10px 0', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#e65100', fontSize: '1.5em', marginBottom: '5px' }}>Product Development</h2>
          <p style={{ color: '#424242' }}>From concept to launch, we help bring your innovative products to life.</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
