// src/Profile.jsx

import React from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom'; // Import Outlet, Link, Routes, Route
import ProfileDetails from './components/ProfileDetails'; // Import nested components
import ProfileSettings from './components/ProfileSettings';

function Profile() {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '30px', border: '2px solid #673ab7', borderRadius: '15px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)', backgroundColor: '#ede7f6' }}>
      <h2 style={{ textAlign: 'center', color: '#673ab7', fontSize: '2.2em', marginBottom: '20px' }}>
        User Profile
      </h2>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '30px', borderBottom: '1px solid #9575cd', paddingBottom: '15px' }}>
        {/* Relative links for nested routes */}
        <Link to="details" style={{ color: '#4527a0', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1em', transition: 'color 0.3s ease' }}>
          Details
        </Link>
        <Link to="settings" style={{ color: '#4527a0', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1em', transition: 'color 0.3s ease' }}>
          Settings
        </Link>
      </nav>

      {/* Outlet renders the matched nested route component */}
      {/* If no nested route matches, you could display a default here */}
      <Routes>
        <Route index element={<ProfileDetails />} /> {/* Default child route for /profile */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      {/* Alternatively, you can use <Outlet /> directly for simpler nested structures
          and define routes in App.jsx (see App.jsx for an example).
          We'll use <Routes> here to demonstrate nested route definition within the parent component. */}
    </div>
  );
}

export default Profile;
