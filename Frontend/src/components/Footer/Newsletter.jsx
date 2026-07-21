import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">
        Newsletter
      </h3>

      <p className="text-slate-400 mb-6">
        Subscribe to receive updates about courses,
        software launches, AI tutorials, and internships.
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Enter email"
          className="flex-1 rounded-l-xl p-4 text-black outline-none"
        />

        <button
          className="
          bg-blue-600
          px-6
          rounded-r-xl
          hover:bg-blue-700
          duration-300
        "
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;