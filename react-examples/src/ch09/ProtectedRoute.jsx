import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

// Wrap a page in <ProtectedRoute> to require login (and optionally a role).
export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Remember where the visitor wanted to go, so we can return after login
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  if (adminOnly && user.role !== 'admin') {
    return <p role="alert">Sorry, this page is for admins only.</p>;
  }
  return children;
}
