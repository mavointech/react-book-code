export default function UserTable({ users, sortKey, onSort }) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('name')}>
            Name {sortKey === 'name' ? '▲' : ''}
          </th>
          <th onClick={() => onSort('email')}>
            Email {sortKey === 'email' ? '▲' : ''}
          </th>
          <th>Company</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.company.name}</td>
            <td>{u.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
