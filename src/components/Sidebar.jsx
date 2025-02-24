import React, { useState, useEffect } from "react";
import { FaRegFileAlt, FaStar, FaPaperPlane, FaTrash, FaShieldAlt, FaChevronRight, FaPlus, FaInbox } from "react-icons/fa";
import { MdWork, MdOutlineAccountBalance, MdWorkOutline, MdMarkEmailRead, MdMessage } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("sidebarOpen")) ?? true;
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div className={`h-screen bg-white text-gray-900 shadow-md ${isOpen ? "w-64" : "w-16"} transition-all duration-300 p-2 relative overflow-y-auto max-h-screen custom-scrollbar`}> 
      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-xl">
          <FaChevronRight className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      
      {/* User Info */}
      <div className="flex items-center space-x-3 p-3">
        <img src="" alt="Profile" className="rounded-full w-10 h-10" />
        {isOpen && <span className="font-semibold">Admin Admin</span>}
      </div>
      
      {/* New Message Button */}
      <button className="flex items-center justify-center bg-blue-700 text-white rounded-lg w-full p-2 my-4">
        <MdMessage className="text-lg mr-2" />
        {isOpen && <span className="text-sm">New Message</span>}
      </button>

      {/* Navigation Menu */}
      <nav className="space-y-3">
        <SidebarItem icon={FaInbox} text="Inbox" badge="99" isOpen={isOpen} />
        <SidebarItem icon={FaRegFileAlt} text="Draft" isOpen={isOpen} />
        <SidebarItem icon={FaStar} text="Starred" isOpen={isOpen} />
        <SidebarItem icon={FaPaperPlane} text="Sent" isOpen={isOpen} />
        <SidebarItem icon={FaTrash} text="Trash" isOpen={isOpen} />
        <SidebarItem icon={FaShieldAlt} text="Spam" isOpen={isOpen} />
      </nav>
      
      {/* Message Categories */}
      <h2 className={`text-gray-500 text-sm mt-6 px-2 ${isOpen ? "block" : "hidden"}`}>MESSAGE CATEGORIES</h2>
      <nav className="space-y-3">
        <SidebarItem icon={MdWork} text="My Works" badge="9" isOpen={isOpen} />
        <SidebarItem icon={MdOutlineAccountBalance} text="Accountant" badge="43" isOpen={isOpen} />
        <SidebarItem icon={MdWorkOutline} text="Works" badge="78" isOpen={isOpen} />
        <SidebarItem icon={MdMarkEmailRead} text="Marketing" badge="253" isOpen={isOpen} />
      </nav>
      
      {/* Recent Chats */}
      <h2 className={`text-gray-500 text-sm mt-6 px-2 ${isOpen ? "block" : "hidden"}`}>RECENT CHATS</h2>
      <nav className="space-y-3">
        <SidebarItem icon={FaPlus} text="Start New Chat" isOpen={isOpen} />
        <SidebarItem icon={BsChatDots} text="Kierra Gouse" status="online" isOpen={isOpen} />
        <SidebarItem icon={BsChatDots} text="Jordyn Vaccaro" badge="3" isOpen={isOpen} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, text, badge, status, isOpen }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
      <div className="flex items-center space-x-3">
        <Icon className="text-lg text-gray-600" />
        {isOpen && <span className="text-sm font-medium">{text}</span>}
      </div>
      {badge && isOpen && <span className="text-xs bg-blue-700 text-white px-2 py-1 rounded-full">{badge}</span>}
      {status === "online" && isOpen && <span className="w-2 h-2 bg-green-700 rounded-full"></span>}
    </div>
  );
};

export default Sidebar;