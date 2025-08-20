// src/components/ProfileDetails.jsx

import React from 'react';

function ProfileDetails() {
  return (
    <div style={{ border: '1px dashed #007bff', padding: '15px', marginTop: '15px', borderRadius: '8px', backgroundColor: '#e0f7fa' }}>
      <h3 style={{ color: '#007bff' }}>User Details</h3>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Occupation: Software Engineer</p>
    </div>
  );
}

export default ProfileDetails;
