// src/components/ProfileSettings.jsx

import React from 'react';

function ProfileSettings() {
  return (
    <div style={{ border: '1px dashed #ff9800', padding: '15px', marginTop: '15px', borderRadius: '8px', backgroundColor: '#fff3e0' }}>
      <h3 style={{ color: '#ff9800' }}>Profile Settings</h3>
      <p>Manage your account settings here.</p>
      <ul>
        <li>Change Password</li>
        <li>Update Email Preferences</li>
        <li>Privacy Settings</li>
      </ul>
    </div>
  );
}

export default ProfileSettings;
