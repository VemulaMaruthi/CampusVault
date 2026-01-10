import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Update from "./Components/Update";
import Upload from "./Components/Upload";
import Resources from "./Components/Resources";
import About from "./Components/About";
import "./index.css";
const HomeRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="updates" element={<Update />} />
      <Route path="upload" element={<Upload />} />
      <Route path="resources" element={<Resources />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default HomeRoutes;
