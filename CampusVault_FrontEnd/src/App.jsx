import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Update from "./Components/Update";
import Upload from "./Components/Upload";
import Resources from "./Components/Resources";
import About from "./Components/About";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="bg-[#181818] min-h-screen text-white text-center pt-20">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "Home" && <Home />}
      {activeSection === "Updates" && <Update />}
      {activeSection === "Upload" && <Upload />}
      {activeSection === "Resources" && <Resources />}
      {activeSection === "About" && <About />}
    </div>
  );
}

export default App;
