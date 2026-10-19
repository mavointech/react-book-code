import FocusInput from './FocusInput.jsx';
import ThemeDemo from './ThemeDemo.jsx';
import CartReducerDemo from './CartReducerDemo.jsx';
import NotesDemo from './NotesDemo.jsx';
import MemoDemo from './MemoDemo.jsx';

export default function Ch07Demo() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <FocusInput />
      <ThemeDemo />
      <CartReducerDemo />
      <NotesDemo />
      <MemoDemo />
    </div>
  );
}
