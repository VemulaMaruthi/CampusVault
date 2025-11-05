import React, { useState } from "react";

const Upload = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const id = e.target.adminId.value;
    const pass = e.target.adminPassword.value;
    if (id === "admin" && pass === "1234") setIsAdmin(true);
  };

  const handleLogout = () => setIsAdmin(false);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Uploading file...");
  };

  return (
    <div id="Upload" className="max-w-lg mx-auto mt-10 bg-[#232323] p-6 rounded-lg">
      {!isAdmin ? (
        <div>
          <h3 className="text-2xl font-bold mb-4">Admin Login</h3>
          <form onSubmit={handleLogin} className="space-y-3">
            <input type="text" name="adminId" placeholder="Admin ID" className="w-full p-2 rounded bg-gray-700" required />
            <input type="password" name="adminPassword" placeholder="Password" className="w-full p-2 rounded bg-gray-700" required />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white w-full">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Upload Resources</h3>
            <button onClick={handleLogout} className="text-sm bg-gray-700 px-3 py-1 rounded">Logout</button>
          </div>
          <form onSubmit={handleUpload} className="space-y-3">
            <select className="w-full p-2 rounded bg-gray-700">
              <option>Select Resource Type</option>
              <option>Question Papers</option>
              <option>Notes</option>
            </select>
            <select className="w-full p-2 rounded bg-gray-700">
              <option>Select Domain</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
            </select>
            <select className="w-full p-2 rounded bg-gray-700">
              <option>Select Branch</option>
              <option>CSE</option>
              <option>ECE</option>
            </select>
            <input type="file" className="w-full p-2 rounded bg-gray-700" />
            <button className="bg-blue-600 px-4 py-2 rounded text-white w-full">Upload</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Upload;
