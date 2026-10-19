import { MemoryRouter } from 'react-router-dom';
import SignupForm from './SignupForm.jsx';
import { AuthProvider } from './AuthContext.jsx';
import AppRoutes from './AppRoutes.jsx';

export default function Ch09Demo() {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <SignupForm />
      {/* MemoryRouter keeps the address inside the demo, not the browser */}
      <MemoryRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MemoryRouter>
    </div>
  );
}
