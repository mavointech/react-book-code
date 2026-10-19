import Welcome from './Welcome.jsx';
import ProfileCardDemo from './ProfileCardDemo.jsx';
import PanelDemo from './PanelDemo.jsx';
import Conditional from './Conditional.jsx';
import ProductList from './ProductList.jsx';

export default function Ch04Demo() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Welcome />
      <ProfileCardDemo />
      <PanelDemo />
      <Conditional user={{ name: 'Aino' }} stock={2} messages={['a', 'b']} />
      <ProductList />
    </div>
  );
}
