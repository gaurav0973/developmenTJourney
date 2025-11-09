import { Link, useNavigate } from "react-router";

// 404 Not Found Page
// Shows when user visits a route that doesn't exist
// Uses * as catch-all route

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h1 className="text-6xl font-bold mb-4 text-blue-600">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>

      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>

      <div className="flex gap-4 justify-center">
        {/* Using Link - declarative */}
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-2 font-medium rounded-md hover:bg-blue-500 transition-colors shadow-sm"
        >
          Home (Link)
        </Link>

        {/* Using useNavigate - imperative */}
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-gray-800 px-6 py-2 font-medium rounded-md hover:bg-gray-300 transition-colors shadow-sm"
        >
          Go Back (useNavigate)
        </button>
      </div>
    </div>
  );
}

export default NotFound;