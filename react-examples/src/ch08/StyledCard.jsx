import './styled-card.css';

export default function StyledCard({ title, text, highlighted = false }) {
  // Build the class list: always "product",
  // plus "product--highlight" when needed
  const className = highlighted ? 'product product--highlight' : 'product';

  return (
    <article className={className}>
      <h3 className="product__title">{title}</h3>
      <p className="product__text">{text}</p>
      <button className="product__button">Buy</button>
    </article>
  );
}
