import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-sm sm:max-w-md ml-4 sm:ml-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Right Section - Notifications & Profile */}
      <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-12">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-blue-600">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="hidden sm:inline text-gray-800 font-medium">
            Admin
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;