import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from './SignupForm.jsx';
import AppRoutes from './AppRoutes.jsx';
import { AuthProvider } from './AuthContext.jsx';
import { validateSignup, validateEmail } from './validation.js';

function renderApp(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MemoryRouter>,
  );
}

describe('validation', () => {
  it('checks emails and whole forms', () => {
    expect(validateEmail('a@b.fi')).toBe('');
    expect(validateEmail('nope')).not.toBe('');
    const errors = validateSignup({
      name: 'A',
      email: 'x',
      password: 'abc',
      confirm: 'abd',
    });
    expect(Object.keys(errors)).toEqual([
      'name',
      'email',
      'password',
      'confirm',
    ]);
  });
});

describe('SignupForm', () => {
  it('shows errors only after blur and submits valid data', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<SignupForm onSubmit={onSubmit} />);
    await user.type(screen.getByLabelText('Email'), 'bad');
    expect(screen.queryByText('Please enter a valid email')).toBeNull();
    await user.tab();
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    await user.clear(screen.getByLabelText('Email'));
    await user.type(screen.getByLabelText('Name'), 'Aino');
    await user.type(screen.getByLabelText('Email'), 'aino@x.fi');
    await user.type(screen.getByLabelText('Password'), 'abcdefg1');
    await user.type(screen.getByLabelText('Confirm password'), 'abcdefg1');
    await user.click(screen.getByRole('button', { name: 'Create account' }));
    expect(onSubmit).toHaveBeenCalledWith({ name: 'Aino', email: 'aino@x.fi' });
    expect(screen.getByText('Account created. Welcome!')).toBeInTheDocument();
  });

  it('blocks an invalid submit and shows all errors', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<SignupForm onSubmit={onSubmit} />);
    await user.click(screen.getByRole('button', { name: 'Create account' }));
    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getAllByRole('alert')).toHaveLength(3);
  });
});

describe('routing and authentication', () => {
  it('shows product details from the address', () => {
    renderApp('/products/2');
    expect(screen.getByRole('heading', { name: 'Mouse' })).toBeInTheDocument();
  });

  it('shows a 404 page', () => {
    renderApp('/nowhere');
    expect(screen.getByText('404 - page not found')).toBeInTheDocument();
  });

  it('redirects to login, then returns to the wanted page', async () => {
    const user = userEvent.setup();
    renderApp('/account');
    expect(screen.getByRole('heading', { name: 'Log in' })).toBeInTheDocument();
    await user.type(screen.getByLabelText('Email'), 'bo@example.com');
    await user.type(screen.getByLabelText('Password'), 'wrong');
    await user.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByText('Wrong email or password')).toBeInTheDocument();
    await user.clear(screen.getByLabelText('Password'));
    await user.type(screen.getByLabelText('Password'), 'hello1234');
    await user.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByText('Hello Bo')).toBeInTheDocument();
  });

  it('blocks customers from the admin page', async () => {
    const user = userEvent.setup();
    renderApp('/admin');
    await user.type(screen.getByLabelText('Email'), 'bo@example.com');
    await user.type(screen.getByLabelText('Password'), 'hello1234');
    await user.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByRole('alert')).toHaveTextContent('admins only');
  });

  it('lets an admin in and logs out', async () => {
    const user = userEvent.setup();
    renderApp('/admin');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Password'), 'secret123');
    await user.click(screen.getByRole('button', { name: 'Log in' }));
    expect(screen.getByText('Admin panel')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Log out' }));
    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument();
  });
});
