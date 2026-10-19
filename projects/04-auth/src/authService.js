// A FAKE auth service for learning. It stores users in localStorage.
// Never do this in production: the browser is not a safe place for passwords.
const USERS_KEY = 'book-users';
const SESSION_KEY = 'book-session';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) ?? [];
  } catch {
    return [];
  }
}

export async function register({ name, email, password }) {
  await wait(400);
  const users = readUsers();
  if (users.some((u) => u.email === email)) {
    throw new Error('An account with this email already exists');
  }
  users.push({ name, email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { name, email };
}

export async function login({ email, password }) {
  await wait(400);
  const user = readUsers().find(
    (u) => u.email === email && u.password === password,
  );
  if (!user) throw new Error('Wrong email or password');
  const session = { name: user.name, email: user.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}
