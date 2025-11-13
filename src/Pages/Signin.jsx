import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from =
    location.state?.from?.pathname && location.state.from.pathname !== "/signin"
      ? location.state.from.pathname
      : "/";

  const handleSignin = (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, emailVal, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful!");
        navigate(from, { replace: true });
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful!");
        navigate(from, { replace: true });
      })
      .catch((e) => toast.error(e.message));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-[#F1F5E8] relative overflow-hidden px-5 sm:px-10">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#A0C4FF]/30 rounded-full blur-3xl top-10 left-5 animate-pulse"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#BDB2FF]/30 rounded-full blur-3xl bottom-10 right-5 animate-pulse"></div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
        {/* Left Side */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#001931]">
            Welcome Back to <span className="text-[#FF8811]">MotoCare</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#627382] leading-relaxed">
            Sign in to manage bookings, track updates, and enjoy personalized
            service recommendations — all from one place.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-[#001931]/10 shadow-xl rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#001931]">
            {user ? "Your Profile" : "Sign In"}
          </h2>

          {!user ? (
            <form onSubmit={handleSignin} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#001931]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1 text-[#001931]">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-9 cursor-pointer text-gray-600"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password", { state: { email } })}
                  className="text-sm text-[#001931] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#001931] hover:bg-[#23354A] text-white font-semibold py-2 rounded-md transition"
              >
                Sign In
              </button>

              {/* Google Sign In */}
              <div className="flex items-center justify-center gap-2 my-3">
                <div className="h-px w-16 bg-gray-400"></div>
                <span className="text-sm text-gray-600">or</span>
                <div className="h-px w-16 bg-gray-400"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold border border-gray-400 hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              {/* Link to Signup */}
              <p className="text-center text-sm text-[#627382] mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#001931] font-semibold hover:underline"
                >
                  Create one
                </Link>
              </p>
            </form>
          ) : (
            <div className="text-center">
              <img
                src={user?.photoURL || "https://via.placeholder.com/100"}
                alt="User"
                className="h-20 w-20 rounded-full mx-auto"
              />
              <h2 className="text-xl mt-3 font-semibold">
                {user?.displayName || "No Name"}
              </h2>
              <p>{user?.email}</p>
              <button
                onClick={handleSignOut}
                className="w-full bg-[#001931] hover:bg-[#23354A] text-white py-2 rounded-md mt-4"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;










