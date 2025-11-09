import { useParams, useNavigate } from "react-router";

// Dynamic Routing Example - Detail Page
// Path: /users/:userId
// Learn: useParams extracts URL parameters
// Learn: useNavigate for programmatic navigation

function UserProfile() {
  // Extract parameter from URL using useParams
  // If URL is /users/2, then userId = "2"
  const { userId } = useParams();
  const navigate = useNavigate();

  // Sample user data
  const users = {
    1: { name: "John Doe", role: "Developer", email: "john@example.com" },
    2: { name: "Jane Smith", role: "Designer", email: "jane@example.com" },
    3: { name: "Mike Johnson", role: "Manager", email: "mike@example.com" },
  };

  const user = users[userId];

  if (!user) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">User Not Found</h2>
        <p className="text-gray-700 mb-4">No user with ID: {userId}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-6 py-2 font-medium rounded-md hover:bg-blue-500 transition-colors shadow-sm"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:text-blue-500 font-medium mb-6 transition-colors flex items-center gap-2"
      >
        <span>←</span>
        Back to Users
      </button>

      <div className="max-w-md border border-blue-200 p-6 rounded-lg bg-blue-50">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">{user.name}</h1>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-blue-700 font-medium">User ID</label>
            <p className="text-lg text-gray-800">{userId}</p>
          </div>

          <div>
            <label className="text-sm text-blue-700 font-medium">Role</label>
            <p className="text-lg text-gray-800">{user.role}</p>
          </div>

          <div>
            <label className="text-sm text-blue-700 font-medium">Email</label>
            <p className="text-lg text-gray-800">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;