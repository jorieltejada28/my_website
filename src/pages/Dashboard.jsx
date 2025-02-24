import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import LoadingScreen from "../components/LoadingScreen";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

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
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-700 mt-2">Welcome to your admin panel.</p>
        {/* Add your dashboard components here */}
      </div>
    </div>
  );
};

export default Dashboard;
