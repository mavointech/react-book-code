import './flex.css';

export default function FlexDemo() {
  return (
    <div className="flex-demo">
      {/* 1. A navigation bar: logo left, links right */}
      <nav className="navbar">
        <strong>NordTech</strong>
        <div className="navbar__links">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#cart">Cart</a>
        </div>
      </nav>

      {/* 2. Perfect centering, the famous flexbox trick */}
      <div className="centered">I am in the exact centre</div>

      {/* 3. A row of cards that wrap onto the next line */}
      <div className="cards">
        {['One', 'Two', 'Three', 'Four', 'Five'].map((n) => (
          <div key={n} className="cards__item">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
