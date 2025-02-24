import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import { FaUsers, FaChartBar, FaMoneyBillWave, FaTasks } from "react-icons/fa";

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
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg border-t-4 border-blue-500 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-200">
            <div className="p-3 bg-gray-200 rounded-full">
              <FaUsers className="text-xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-gray-700 text-xl font-bold">1,250</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg border-t-4 border-green-500 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-200">
            <div className="p-3 bg-gray-200 rounded-full">
              <FaMoneyBillWave className="text-xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-gray-700 text-xl font-bold">₱52,340</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg border-t-4 border-yellow-500 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-200">
            <div className="p-3 bg-gray-200 rounded-full">
              <FaTasks className="text-xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Tasks Completed</h2>
              <p className="text-gray-700 text-xl font-bold">320</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg border-t-4 border-red-500 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-200">
            <div className="p-3 bg-gray-200 rounded-full">
              <FaChartBar className="text-xl text-gray-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Analytics</h2>
              <p className="text-gray-700 text-xl font-bold">87%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;