// A component is a function that returns JSX.
// Its name MUST start with a capital letter.
export default function Welcome() {
  const name = 'Aino';
  const year = new Date().getFullYear();
  const items = ['Learn JavaScript', 'Learn React', 'Build a shop'];

  return (
    <div className="card">
      <h1>Hello, {name}!</h1>
      <p>
        It is {year}, and 2 + 3 = {2 + 3}.
      </p>
      <img src="/logo.svg" alt="Logo" width="48" height="48" />
      <p className="muted" style={{ fontSize: '14px', marginTop: 8 }}>
        Your plan: {items.join(', ')}
      </p>
    </div>
  );
}
