import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Quotes", path: "/quotes" },
    { name: "Write", path: "/quote" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 md:px-16 flex justify-between items-center bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/5">
      {/* Brand Identity */}
      <Link to="/" className="text-sm font-bold tracking-[0.3em] uppercase">
        PORTFOLIO<span className="text-gray-500">.</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-white"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Auth Action Button */}
      <Link
        to="/auth"
        className="px-5 py-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-gray-200 transition-all transform active:scale-95"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default Navbar;