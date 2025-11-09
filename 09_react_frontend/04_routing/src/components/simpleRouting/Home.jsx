// Simple Routing Example
// This is a basic component rendered at path "/"
// Learn: Basic routes just map URLs to components

function Home() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Welcome to React Router Learning
      </h1>

      <p className="mb-6 text-gray-700">
        This project demonstrates React Router concepts. Explore the navigation
        above to see how routing works.
      </p>

      <div className="bg-blue-50 border border-blue-200 p-4 mb-6 rounded-md">
        <h2 className="font-bold mb-2 text-blue-800">What you'll learn:</h2>
        <ul className="list-disc list-inside space-y-1 text-blue-900">
          <li>Simple Routing - Navigation between basic pages</li>
          <li>Nested Routing - Routes with child routes and Outlet</li>
          <li>Dynamic Routing - URL parameters with useParams</li>
          <li>Link vs useNavigate - Declarative vs Imperative navigation</li>
        </ul>
      </div>

      <p className="text-sm text-gray-600">
        Read LEARNING.md for detailed explanations of each concept.
      </p>
    </div>
  );
}

export default Home;