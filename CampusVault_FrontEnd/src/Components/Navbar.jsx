import React from "react";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold">Campus Vault</h1>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActiveSection("Home")}>Home</li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActiveSection("Resources")}>Resources</li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActiveSection("About")}>About</li>
          <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActiveSection("Upload")}>Upload</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
