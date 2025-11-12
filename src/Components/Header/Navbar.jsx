import React, { useContext } from "react";
// import logoImg from "../../assets/logo.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `m-2 font-semibold text-[#627382] ${isActive ? "text-[#FF6600]" : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/service"
        className={({ isActive }) =>
          `m-2 font-semibold text-[#627382] ${isActive ? "text-[#FF6600]" : ""}`
        }
      >
        Service
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `m-2 font-semibold text-[#627382] ${isActive ? "text-[#FF6600]" : ""}`
        }
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-[#F9FBF5] shadow-sm lg:px-20 fixed top-0 left-0 w-full z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/*  Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center gap-1 cursor-pointer"
        >
          <a className="text-xl text-black font-bold ">
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
            {/*  Tooltip wrapper */}
            <div className="relative group">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-[#FF6600] cursor-pointer"
              />

              {/*  Tooltip */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#001931] text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user.displayName || "User"}
              </span>
            </div>

            {/*  Sign Out Button */}
            <button
              onClick={logOut}
              className="btn text-white px-5 border-none bg-[#FF6600] hover:opacity-70"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/signin"
            state={{ from: location }}
            className="btn text-white px-10 border-none bg-[#FF6600] hover:opacity-70"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

