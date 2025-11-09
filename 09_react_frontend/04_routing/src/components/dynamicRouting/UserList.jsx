import { Link } from "react-router";

// Dynamic Routing Example - List Page
// Path: /users
// Learn: Link creates dynamic URLs with parameters like /users/1, /users/2

function UserList() {
  // Sample data
  const users = [
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Mike Johnson", role: "Manager" },
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Users</h1>
      <p className="text-gray-700 mb-6">
        Click any user to see their profile with dynamic routing
      </p>

      <div className="space-y-4">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="block border border-blue-200 p-4 rounded-md bg-white hover:bg-blue-50 transition-colors shadow-sm"
          >
            <h2 className="font-bold text-lg text-blue-800">{user.name}</h2>
            <p className="text-gray-700">{user.role}</p>
            <span className="text-sm text-blue-600 font-medium">ID: {user.id}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserList;