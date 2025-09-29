import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white mb-4">404 Error</h1>
        <p className="text-2xl text-gray-300 mb-8">Page Not Found</p>
        <Link to={"/"}>
          <button className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-xl shadow-md hover:bg-gray-200 transition">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
