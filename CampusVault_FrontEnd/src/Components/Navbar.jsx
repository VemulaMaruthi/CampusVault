import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50 h-16">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold">Campus Vault</h1>

        <ul className="flex space-x-6 text-lg">
          <li>
            <NavLink to="/home" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/home/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/home/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/home/upload">Upload</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
