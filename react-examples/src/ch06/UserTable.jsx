export default function UserTable({ users, sortKey, onSort }) {
  const arrow = (key) => (sortKey === key ? ' ▲' : '');

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('name')} style={{ cursor: 'pointer' }}>
            Name{arrow('name')}
          </th>
          <th onClick={() => onSort('email')} style={{ cursor: 'pointer' }}>
            Email{arrow('email')}
          </th>
          <th>Company</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
