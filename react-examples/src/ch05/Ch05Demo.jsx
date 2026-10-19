import Counter from './Counter.jsx';
import StaleState from './StaleState.jsx';
import Events from './Events.jsx';
import LivePreview from './LivePreview.jsx';
import Temperature from './Temperature.jsx';
import ShoppingList from './ShoppingList.jsx';

export default function Ch05Demo() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Counter />
      <StaleState />
      <Events />
      <LivePreview />
      <Temperature />
      <ShoppingList />
    </div>
  );
}
