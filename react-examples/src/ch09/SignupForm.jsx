import { useState } from 'react';
import { validateSignup } from './validation.js';

const empty = { name: '', email: '', password: '', confirm: '' };

export default function SignupForm({ onSubmit = () => {} }) {
  const [values, setValues] = useState(empty);
  const [touched, setTouched] = useState({}); // which fields were visited
  const [done, setDone] = useState(false);

  const errors = validateSignup(values); // derived, never stored
  const isValid = Object.keys(errors).length === 0;

  // One handler for every input: the input's name picks the field.
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(event) {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      // Show every error, even for fields the user skipped
      setTouched({ name: true, email: true, password: true, confirm: true });
      return;
    }
    onSubmit({ name: values.name, email: values.email });
    setDone(true);
    setValues(empty);
    setTouched({});
  }

  // Small helper: one labelled field with its error message
  function field(name, label, type = 'text') {
    const showError = touched[name] && errors[name];
    return (
      <div style={{ marginBottom: 12 }}>
        <label htmlFor={name}>{label}</label>
        <br />
        <input
          id={name}
          name={name}
          type={type}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError)}
        />
        {showError && (
          <div role="alert" style={{ color: 'crimson' }}>
            {errors[name]}
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3>Sign up</h3>
      {field('name', 'Name')}
      {field('email', 'Email', 'email')}
      {field('password', 'Password', 'password')}
      {field('confirm', 'Confirm password', 'password')}
      <button type="submit">Create account</button>
      {done && <p>Account created. Welcome!</p>}
    </form>
  );
}
