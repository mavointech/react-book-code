import { createContext, useContext, useState } from 'react';

// 1. Create the context (a "channel" any component can listen to)
const ThemeContext = createContext(null);

// 2. A provider component holds the value and shares it
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. A custom hook makes using the context easy (and safe)
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>');
  return context;
}
