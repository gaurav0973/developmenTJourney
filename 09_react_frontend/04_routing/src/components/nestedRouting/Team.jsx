// Nested Route Child Component
// This renders INSIDE the About component's <Outlet />
// Path: /about/team

function Team() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Team</h2>
      <ul className="space-y-3">
        <li className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-blue-800">John Doe</strong> - <span className="text-gray-700">Developer</span>
        </li>
        <li className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-blue-800">Jane Smith</strong> - <span className="text-gray-700">Designer</span>
        </li>
        <li className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-blue-800">Mike Johnson</strong> - <span className="text-gray-700">Manager</span>
        </li>
      </ul>
    </div>
  );
}

export default Team;