import React, { useState, useEffect, useMemo } from "react";
import { FaRegFileAlt, FaStar, FaPaperPlane, FaTrash, FaShieldAlt, FaChevronRight, FaPlus, FaInbox } from "react-icons/fa";
import { MdWork, MdOutlineAccountBalance, MdWorkOutline, MdMarkEmailRead, MdMessage } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import profilePic from "../pictures/joriel.jpg";

// Sidebar component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(() => JSON.parse(localStorage.getItem("sidebarOpen")) ?? true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update localStorage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
    };
  }, [isOpen]);

  // Debounce resize event handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const debounceResize = () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  // Memoize sidebar items
  const sidebarItems = useMemo(() => [
    { icon: FaInbox, text: "Inbox", badge: "99" },
    { icon: FaRegFileAlt, text: "Draft" },
    { icon: FaStar, text: "Starred" },
    { icon: FaPaperPlane, text: "Sent" },
    { icon: FaTrash, text: "Trash" },
    { icon: FaShieldAlt, text: "Spam" },
    { icon: MdWork, text: "My Works", badge: "9" },
    { icon: MdOutlineAccountBalance, text: "Accountant", badge: "43" },
    { icon: MdWorkOutline, text: "Works", badge: "78" },
    { icon: MdMarkEmailRead, text: "Marketing", badge: "253" },
    { icon: FaPlus, text: "Start New Chat" },
    { icon: BsChatDots, text: "Kierra Gouse", status: "online" },
    { icon: BsChatDots, text: "Jordyn Vaccaro", badge: "3" },
  ], []);

  return (
    <>
      {isMobile && (
        <button
          className={`fixed top-4 p-3 bg-blue-700 text-white rounded-full transition-all duration-300 z-50 shadow-md
          ${isOpen ? "left-[16rem]" : "left-4"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaChevronRight className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      )}

      <div
        className={`fixed md:sticky top-0 left-0 h-screen bg-white text-gray-900 shadow-lg overflow-y-auto custom-scrollbar transition-all duration-300 z-40 
        ${isMobile ? (isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64") : (isOpen ? "w-64" : "w-16")}`}
      >
        {!isMobile && (
          <div className="flex justify-end p-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-xl">
              <FaChevronRight className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        <div className="flex items-center space-x-3 p-3">
          <img src={profilePic} alt="Profile" className="rounded-full w-10 h-10" />
          {isOpen && <span className="font-semibold">Admin Admin</span>}
        </div>

        <button className="flex items-center justify-center bg-blue-700 text-white rounded-lg w-full p-2 my-4">
          <MdMessage className="text-lg mr-2" />
          {isOpen && <span className="text-sm">New Message</span>}
        </button>

        <nav className="space-y-3">
          {sidebarItems.slice(0, 6).map((item, index) => (
            <SidebarItem key={index} {...item} isOpen={isOpen} />
          ))}
        </nav>

        <h2 className={`text-gray-500 text-sm mt-6 px-2 ${isOpen ? "block" : "hidden"}`}>MESSAGE CATEGORIES</h2>
        <nav className="space-y-3">
          {sidebarItems.slice(6, 10).map((item, index) => (
            <SidebarItem key={index} {...item} isOpen={isOpen} />
          ))}
        </nav>

        <h2 className={`text-gray-500 text-sm mt-6 px-2 ${isOpen ? "block" : "hidden"}`}>RECENT CHATS</h2>
        <nav className="space-y-3">
          {sidebarItems.slice(10).map((item, index) => (
            <SidebarItem key={index} {...item} isOpen={isOpen} />
          ))}
        </nav>
      </div>
    </>
  );
};

// Sidebar Item component
const SidebarItem = ({ icon: Icon, text, badge, status, isOpen }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-300 cursor-pointer rounded-lg transition-all">
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
