import { ThemeProvider, useTheme } from './ThemeContext.jsx';

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      Switch to {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}

// This component is deep inside the tree, and still reads the theme
// directly, without any props being passed down through the parents.
function DeepBox() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  return (
    <div
      className="card"
      style={{
        background: dark ? '#1f2430' : '#fff',
        color: dark ? '#fff' : '#1f2430',
      }}
    >
      The current theme is <strong>{theme}</strong>
    </div>
  );
}

function Middle() {
  return <DeepBox />; // no props needed!
}

export default function ThemeDemo() {
  return (
    <ThemeProvider>
      <div style={{ display: 'grid', gap: 12 }}>
        <ThemeToggle />
        <Middle />
      </div>
    </ThemeProvider>
  );
}
