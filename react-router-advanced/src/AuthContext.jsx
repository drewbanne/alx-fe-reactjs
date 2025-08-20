// src/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext.
// This context will provide authentication status and login/logout functions.
const AuthContext = createContext(null);

// AuthProvider component wraps part of the application and provides auth state.
export const AuthProvider = ({ children }) => {
  // Simple state to simulate authentication status.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate user login.
  const login = () => {
    setIsAuthenticated(true);
    alert('You are now logged in!'); // Using alert for simplicity, replace with UI feedback.
  };

  // Function to simulate user logout.
  const logout = () => {
    setIsAuthenticated(false);
    alert('You have been logged out.'); // Using alert for simplicity, replace with UI feedback.
  };

  // The value provided by the context.
  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children} {/* Render children components */}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the AuthContext.
export const useAuth = () => {
  return useContext(AuthContext);
};
