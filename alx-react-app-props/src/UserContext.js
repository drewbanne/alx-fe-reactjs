// src/UserContext.js

import React from 'react';

// Create a Context object.
// This object comes with a Provider and a Consumer.
// We'll use the Provider to make data available to components,
// and useContext hook (which replaces Consumer in modern React) to access it.
const UserContext = React.createContext();

// Export the UserContext so it can be imported and used by other components.
export default UserContext;
