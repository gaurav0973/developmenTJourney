import { Route, Routes, Link } from "react-router";

// Simple Routing Components
import Home from "./components/simpleRouting/Home";
import Contact from "./components/simpleRouting/Contact";

// Nested Routing Components
import About from "./components/nestedRouting/About";
import Team from "./components/nestedRouting/Team";
import History from "./components/nestedRouting/History";

// Dynamic Routing Components
import UserList from "./components/dynamicRouting/UserList";
import UserProfile from "./components/dynamicRouting/UserProfile";

// Other Components
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex gap-8 justify-center">
          <Link
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-blue-500 font-bold shadow-inner" 
                  : "hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            Home
          </Link>
          <Link
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-blue-500 font-bold shadow-inner" 
                  : "hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            About
          </Link>
          <Link
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-blue-500 font-bold shadow-inner" 
                  : "hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            Contact
          </Link>
          <Link
            to="/users"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-blue-500 font-bold shadow-inner" 
                  : "hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            Users
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        <Routes>

          {/* Simple Routing */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />


          {/* Nested Routing */}
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="history" element={<History />} />
          </Route>


          {/* Dynamic Routing */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserProfile />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;