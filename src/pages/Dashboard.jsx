import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import LoadingScreen from "../components/LoadingScreen";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate loading delay (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="flex items-center justify-between bg-white shadow-md p-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-md ml-8">
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
          <div className="flex items-center space-x-6 px-12">
            {/* Notifications */}
            <button className="relative text-gray-600 hover:text-blue-600">
              <FaBell className="text-xl" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaUserCircle className="text-2xl text-gray-600" />
              <span className="hidden md:inline text-gray-800 font-medium">Admin</span>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-700 mt-2">Welcome to your admin panel.</p>
          {/* Add more dashboard components here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
