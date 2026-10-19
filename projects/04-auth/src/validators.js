export function validateLogin({ email, password }) {
  const errors = {};
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email';
  if (password.length < 6) errors.password = 'At least 6 characters';
  return errors;
}

export function validateRegister({ name, email, password, confirm }) {
  const errors = validateLogin({ email, password });
  if (name.trim().length < 2) errors.name = 'Enter your name';
  if (confirm !== password) errors.confirm = 'Passwords do not match';
  return errors;
}
