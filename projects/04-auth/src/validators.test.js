import { validateLogin, validateRegister } from './validators.js';

describe('validators', () => {
  it('accepts a valid login', () => {
    expect(validateLogin({ email: 'a@b.fi', password: 'secret1' })).toEqual({});
  });

  it('rejects a bad email and a short password', () => {
    const errors = validateLogin({ email: 'nope', password: '123' });
    expect(errors.email).toBeDefined();
    expect(errors.password).toBeDefined();
  });

  it('checks that the passwords match on register', () => {
    const errors = validateRegister({
      name: 'Aino',
      email: 'a@b.fi',
      password: 'secret1',
      confirm: 'other',
    });
    expect(errors.confirm).toBe('Passwords do not match');
  });
});
