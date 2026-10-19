import { createContext, useContext, useState } from 'react';
import * as authService from './authService.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getSession());

  async function login(credentials) {
    const session = await authService.login(credentials);
    setUser(session);
  }

  function logout() {
    authService.logout();
    setUser(null);
  }

  const value = {
    user,
    isLoggedIn: user !== null,
    login,
    logout,
    register: authService.register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
