export default function Conditional({ user = null, stock = 3, messages = [] }) {
  // 1. if / else before the return
  let banner;
  if (stock === 0) banner = <span className="error">Sold out</span>;
  else if (stock <= 5)
    banner = <span className="badge">Only {stock} left</span>;
  else banner = <span>In stock</span>;

  return (
    <div className="card">
      {/* 2. ternary: choose between two things */}
      <p>{user ? `Welcome back, ${user.name}` : 'Please log in'}</p>

      {/* 3. &&: show something only when a condition is true */}
      {messages.length > 0 && <p>You have {messages.length} new messages</p>}

      {banner}
    </div>
  );
}
