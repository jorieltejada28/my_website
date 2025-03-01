import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import { FaUsers, FaChartBar, FaMoneyBillWave, FaTasks } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const leadsData = [
    { name: "Jan", leads: 50000 },
    { name: "Feb", leads: 60000 },
    { name: "Mar", leads: 55000 },
    { name: "Apr", leads: 70000 },
    { name: "May", leads: 65000 },
    { name: "Jun", leads: 80000 },
  ];

  const salesFunnel = [
    { stage: "Visitors", count: 256200 },
    { stage: "Product Views", count: 198400 },
    { stage: "Add to Cart", count: 139200 },
    { stage: "Checkout", count: 9400 },
    { stage: "Complete Order", count: 5900 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              title: "Total Users",
              value: "1,250",
              icon: <FaUsers className="text-4xl text-blue-700" />,
              color: "border-blue-700"
            }, {
              title: "Revenue",
              value: "₱52,340",
              icon: <FaMoneyBillWave className="text-4xl text-blue-700" />,
              color: "border-blue-700"
            }, {
              title: "Tasks Completed",
              value: "320",
              icon: <FaTasks className="text-4xl text-blue-700" />,
              color: "border-blue-700"
            }, {
              title: "Analytics",
              value: "87%",
              icon: <FaChartBar className="text-4xl text-blue-700" />,
              color: "border-blue-700"
            }].map((card, index) => (
              <div key={index} className={`flex flex-col items-center p-6 bg-white shadow-lg rounded-lg border-t-4 ${card.color} cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl`}>
                <div className="mb-4">{card.icon}</div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-2xl font-bold text-gray-700">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Leads Overview</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={leadsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="leads" stroke="#1E40AF" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Sales Funnel</h2>
              <div className="space-y-3">
                {salesFunnel.map((step, index) => (
                  <div key={index}>
                    <p className="text-sm font-medium">{step.stage}</p>
                    <div className="w-full bg-gray-200 h-4 rounded-md overflow-hidden">
                      <div className="h-full bg-blue-700" style={{ width: `${(step.count / 256200) * 100}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500">{step.count.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;