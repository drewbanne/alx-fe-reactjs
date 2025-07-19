// src/UserDetails.jsx

import React, { useContext } from 'react'; // Import useContext hook
import UserContext from './UserContext'; // Import the UserContext

// UserDetails now consumes userData directly from UserContext
// using the useContext hook, instead of receiving it as a prop.
function UserDetails() {
  // Use useContext to get the value from the nearest UserContext.Provider above it in the tree.
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
      <p>Name: <strong>{userData.name}</strong></p>
      <p>Email: <strong>{userData.email}</strong></p>
    </div>
  );
}

export default UserDetails;
