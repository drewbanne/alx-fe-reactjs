// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection
import { useAuth } from '../AuthContext'; // Import the useAuth hook from AuthContext

// ProtectedRoute component checks if the user is authenticated.
// If authenticated, it renders the child element (the protected page).
// If not, it redirects the user to the login/home page.
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Get authentication status from context.

  if (!isAuthenticated) {
    // If not authenticated, redirect to the home page.
    // In a real app, you might redirect to a specific login page.
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children (the protected content).
  return children;
};

export default ProtectedRoute;
