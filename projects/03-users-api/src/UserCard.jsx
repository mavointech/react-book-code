export default function UserCard({ user }) {
  return (
    <article className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
      <p>{user.address.city}</p>
    </article>
  );
}
