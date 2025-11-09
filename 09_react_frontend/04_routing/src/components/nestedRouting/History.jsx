// Nested Route Child Component
// This renders INSIDE the About component's <Outlet />
// Path: /about/history

function History() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Our History</h2>
      <p className="text-gray-700 mb-6">
        Founded in 2020, we've been growing ever since...
      </p>

      <div className="space-y-4">
        <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-lg text-blue-800">2020</strong>
          <p className="text-gray-600">Company founded</p>
        </div>

        <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-lg text-blue-800">2021</strong>
          <p className="text-gray-600">First major project</p>
        </div>

        <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-lg text-blue-800">2022</strong>
          <p className="text-gray-600">Team expansion</p>
        </div>

        <div className="border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 rounded-r-md">
          <strong className="text-lg text-blue-800">2023</strong>
          <p className="text-gray-600">International launch</p>
        </div>
      </div>
    </div>
  );
}

export default History;