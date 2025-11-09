// Simple Routing Example
// This component is rendered at path "/contact"
// Learn: Another simple route - just like Home but different URL

function Contact() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-blue-700">Contact Information</h2>
        <p className="text-gray-700 mb-2">Email: contact@example.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-blue-700">Send a Message</h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 font-medium rounded-md hover:bg-blue-500 transition-colors shadow-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;