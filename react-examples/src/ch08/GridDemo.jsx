import './grid.css';

const products = [
  'Mouse',
  'Keyboard',
  'Monitor',
  'Webcam',
  'Headset',
  'Speaker',
  'Hub',
];

export default function GridDemo() {
  return (
    <div className="product-grid">
      {products.map((name) => (
        <div key={name} className="product-grid__item">
          {name}
        </div>
      ))}
    </div>
  );
}
