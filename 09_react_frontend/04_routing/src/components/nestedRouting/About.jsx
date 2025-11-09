import { Link, Outlet } from "react-router";

// Nested Routing Example - Parent Route
// This component is rendered at path "/about"
// Learn: This route has CHILD routes (team, history)
// The <Outlet /> is where child components appear

function About() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">About Us</h1>

      {/* Sub-navigation - Links to nested routes */}
      <nav className="flex gap-6 mb-8 border-b border-blue-200 pb-4">
        <Link 
          to="/about/team" 
          className={({ isActive }) =>
            `font-medium px-3 py-2 rounded-md transition-colors ${
              isActive 
                ? "bg-blue-100 text-blue-700 font-bold" 
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          Team
        </Link>
        <Link 
          to="/about/history" 
          className={({ isActive }) =>
            `font-medium px-3 py-2 rounded-md transition-colors ${
              isActive 
                ? "bg-blue-100 text-blue-700 font-bold" 
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`
          }
        >
          History
        </Link>
      </nav>

      {/* OUTLET - This is where child components render */}
      {/* When you visit /about/team → Team component shows here */}
      {/* When you visit /about/history → History component shows here */}
      <div className="pl-4 border-l-2 border-blue-300">
        <Outlet />
      </div>
    </div>
  );
}

export default About;