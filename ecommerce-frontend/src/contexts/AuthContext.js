import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Optionally, you can add methods to sign in and sign out
  const signIn = (userData) => {
    setIsSignedIn(true);
    setUser(userData);
  }
  
  const signOut = () => {
    setIsSignedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
