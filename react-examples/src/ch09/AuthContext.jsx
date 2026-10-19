// AuthContext.jsx - shares "who is logged in" with the whole app.
// DEMO ONLY: real passwords must be checked on a server, never in the browser.
import { createContext, useContext, useState } from 'react';

const USERS = [
  {
    email: 'ada@example.com',
    password: 'secret123',
    name: 'Ada',
    role: 'admin',
  },
  {
    email: 'bo@example.com',
    password: 'hello1234',
    name: 'Bo',
    role: 'customer',
  },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null means logged out

  function login(email, password) {
    const found = USERS.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password,
    );
    if (!found) return { ok: false, error: 'Wrong email or password' };
    // Never keep the password in state
    setUser({ name: found.name, email: found.email, role: found.role });
    return { ok: true };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside <AuthProvider>');
  return value;
}
