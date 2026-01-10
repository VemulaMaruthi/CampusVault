import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";

const AppLayout = () => {
  return (
    <div className="bg-[#181818] min-h-screen text-white pt-20">
      <Navbar />
      <HomeRoutes />
      <Outlet />
    </div>
  );
};

export default AppLayout;
