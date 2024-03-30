'use client';

import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext<AuthContextValue | null>(null); // Allow for null context

// Define the AuthContext value type
interface AuthContextValue {
  authUser: {
    username: string;
    password: string;
  };
  setAuthUser: React.Dispatch<React.SetStateAction<{ username: string; password: string }>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useAuth(): AuthContextValue | null {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [authUser, setAuthUser] = useState<{ username: string; password: string }>({
    username: 'admin',
    password: 'admin',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value: AuthContextValue = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}
