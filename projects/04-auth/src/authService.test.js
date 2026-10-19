import { getSession, login, logout, register } from './authService.js';

beforeEach(() => localStorage.clear());

describe('authService', () => {
  it('registers and logs in a user', async () => {
    await register({ name: 'Aino', email: 'a@b.fi', password: 'secret1' });
    const session = await login({ email: 'a@b.fi', password: 'secret1' });
    expect(session.name).toBe('Aino');
    expect(getSession().email).toBe('a@b.fi');
    logout();
    expect(getSession()).toBeNull();
  });

  it('rejects wrong passwords', async () => {
    await register({ name: 'Aino', email: 'a@b.fi', password: 'secret1' });
    await expect(login({ email: 'a@b.fi', password: 'wrong' })).rejects.toThrow(
      'Wrong email or password',
    );
  });

  it('does not allow duplicate emails', async () => {
    const user = { name: 'Aino', email: 'a@b.fi', password: 'secret1' };
    await register(user);
    await expect(register(user)).rejects.toThrow('already exists');
  });
});
