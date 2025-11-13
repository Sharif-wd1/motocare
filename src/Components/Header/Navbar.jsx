import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `m-2 font-semibold transition-colors ${
            isActive
              ? "text-[#FF6600]"
              : "text-[#627382] hover:text-[#FF6600]"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/service"
        className={({ isActive }) =>
          `m-2 font-semibold transition-colors ${
            isActive
              ? "text-[#FF6600]"
              : "text-[#627382] hover:text-[#FF6600]"
          }`
        }
      >
        Service
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `m-2 font-semibold transition-colors ${
            isActive
              ? "text-[#FF6600]"
              : "text-[#627382] hover:text-[#FF6600]"
          }`
        }
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar bg-[#F9FBF5] dark:bg-[#0F172A] shadow-sm lg:px-20 fixed top-0 left-0 w-full z-[999] transition-colors duration-500"
    >
      
      <div className="navbar-start">
      
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#001931] dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-[#1E293B] rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        
        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center gap-1 cursor-pointer"
        >
          <a className="text-xl font-bold text-[#001931] dark:text-white">
            <span className="text-[#FF6600] text-3xl">Moto</span>Care
          </a>
        </div>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

    
      <div className="navbar-end flex items-center gap-3">


        {user ? (
          <>
            <div className="relative group">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-[#FF6600] cursor-pointer object-cover"
              />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#001931] dark:bg-white dark:text-[#001931] text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user.displayName || "User"}
              </span>
            </div>

            <button
              onClick={logOut}
              className="btn text-white px-5 border-none bg-[#FF6600] hover:opacity-80 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/signin"
            state={{ from: location }}
            className="btn text-white px-10 border-none bg-[#FF6600] hover:opacity-80 transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
