import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import LoginPage from './LoginPage.jsx';

const PRODUCTS = [
  { id: '1', name: 'Keyboard' },
  { id: '2', name: 'Mouse' },
];

function Home() {
  return <h3>Home</h3>;
}

function Products() {
  return (
    <ul>
      {PRODUCTS.map((p) => (
        <li key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function ProductDetail() {
  const { id } = useParams(); // the :id part of the address
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return <p>Product not found</p>;
  return <h3>{product.name}</h3>;
}

function Account() {
  const { user } = useAuth();
  return <h3>Hello {user.name}</h3>;
}

function Admin() {
  return <h3>Admin panel</h3>;
}

function NotFound() {
  return <h3>404 - page not found</h3>;
}

export default function AppRoutes() {
  const { user, logout } = useAuth();
  return (
    <>
      <nav style={{ display: 'flex', gap: 12 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        {user ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
