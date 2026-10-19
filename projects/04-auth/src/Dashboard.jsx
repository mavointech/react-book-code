import { useAuth } from './AuthContext.jsx';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>.
      </p>
      <p>Signed in as {user.email}</p>
    </div>
  );
}
