import React, { useState } from "react";
import { FaSearch, FaBell, FaEllipsisV } from "react-icons/fa";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4 relative">
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

      {/* Right Section - Notifications & Profile Menu */}
      <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-12">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-blue-600">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile Menu (Three Dots) */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 cursor-pointer focus:outline-none text-gray-600 hover:text-blue-600"
          >
            <FaEllipsisV className="text-xl" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                Profile
              </button>
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                Settings
              </button>
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-red-600 hover:text-white">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;