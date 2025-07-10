import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">MyPortfolio</Link>
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-600"}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-600"}>Projects</NavLink>
        <NavLink to="/cyber-lab" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-600"}>Cyber Lab</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-600"}>Blog</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-600"}>About</NavLink>
      </div>
    </nav>
  );
}
