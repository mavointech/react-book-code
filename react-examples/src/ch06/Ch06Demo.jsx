import Clock from './Clock.jsx';
import TitleEffect from './TitleEffect.jsx';
import UsersCards from './UsersCards.jsx';
import UsersExplorer from './UsersExplorer.jsx';
import Posts from './Posts.jsx';

export default function Ch06Demo() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Clock />
      <TitleEffect />
      <h2>Users as cards (useEffect)</h2>
      <UsersCards />
      <h2>Search, sort, cards and table (custom hook)</h2>
      <UsersExplorer />
      <h2>Reload when something changes</h2>
      <Posts />
    </div>
  );
}
