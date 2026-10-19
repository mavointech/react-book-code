// validation.js - small pure functions that check form values.
// Each one returns an error message (text) or '' when the value is fine.

export function validateName(name) {
  if (name.trim().length < 2) return 'Name must have at least 2 letters';
  return '';
}

export function validateEmail(email) {
  // Simple pattern: something@something.something
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email) ? '' : 'Please enter a valid email';
}

export function validatePassword(password) {
  if (password.length < 8) return 'Password needs at least 8 characters';
  if (!/\d/.test(password)) return 'Password needs at least one number';
  return '';
}

// Check a whole form at once. Returns an object of errors by field name.
export function validateSignup(values) {
  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
  if (values.confirm !== values.password) {
    errors.confirm = 'Passwords do not match';
  }
  // Keep only the fields that really have an error
  return Object.fromEntries(Object.entries(errors).filter(([, msg]) => msg));
}
