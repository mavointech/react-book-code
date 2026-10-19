import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import { validateRegister } from './validators.js';

const empty = { name: '', email: '', password: '', confirm: '' };

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const fields = [
    ['name', 'Name', 'text'],
    ['email', 'Email', 'text'],
    ['password', 'Password', 'password'],
    ['confirm', 'Confirm password', 'password'],
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validateRegister(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    try {
      await register(form);
      navigate('/login');
    } catch (err) {
      setServerError(err.message);
    }
  }

  return (
    <div className="page">
      <h1>Create account</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        {serverError && <div className="error-box">{serverError}</div>}
        {fields.map(([name, label, type]) => (
          <div className="field" key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              value={form[name]}
              onChange={(e) => setForm({ ...form, [name]: e.target.value })}
            />
            <small>{errors[name]}</small>
          </div>
        ))}
        <button type="submit">Register</button>
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
