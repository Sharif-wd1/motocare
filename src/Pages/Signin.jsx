import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  
 const from =
  location.state?.from?.pathname &&
  location.state.from.pathname !== "/signin"
    ? location.state.from.pathname
    : "/";



  // Sign In (Email & Password)
  const handleSignin = (e) => {
    e.preventDefault();
    const emailVal = e.target.email?.value;
    const password = e.target.password?.value;
    setEmail(emailVal);

    signInWithEmailAndPassword(auth, emailVal, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from, { replace: true }); // 🔹 redirect to original page
      })
      .catch((e) => toast.error(e.message));
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from, { replace: true }); // 🔹 redirect to original page
      })
      .catch((e) => toast.error(e.message));
  };

  //  Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout Successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  //  Forgot Password Redirect
  const handleForgotPass = () => {
    navigate("/forgot-password", { state: { email } });
  };

  //  Save Updated Profile
  const handleProfileUpdate = async () => {
    if (!auth.currentUser) return toast.error("No user logged in");

    try {
      await updateProfile(auth.currentUser, {
        displayName: newName || auth.currentUser.displayName,
        photoURL: newPhoto || auth.currentUser.photoURL,
      });

      setUser({
        ...auth.currentUser,
        displayName: newName || auth.currentUser.displayName,
        photoURL: newPhoto || auth.currentUser.photoURL,
      });

      toast.success("Profile updated successfully");
      setEditMode(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#F1F5E8] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-64 h-64 bg-[#A0C4FF]/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-[#BDB2FF]/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-[#001931]">
        {/* Left Side */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-[#001931]">
            Welcome Back to MotoCare
          </h1>
          <p className="mt-4 text-lg text-[#627382] leading-relaxed">
            Sign in to manage your bookings, check bike care updates, and enjoy personalized service recommendations.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-md backdrop-blur-xl bg-white/70 border border-[#001931]/10 shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#001931]">
            {user ? "Your Profile" : "Sign In"}
          </h2>

          {!user ? (
            //  Sign In Form
            <form onSubmit={handleSignin} className="space-y-4">
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
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1 text-[#001931]">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-[#627382]">
                <button
                  type="button"
                  onClick={handleForgotPass}
                  className="hover:underline text-[#001931]"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#001931] hover:bg-[#23354A] text-white font-semibold py-2 rounded-md transition"
              >
                Sign In
              </button>

              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-16 bg-black"></div>
                <span className="text-sm text-black">or</span>
                <div className="h-px w-16 bg-black"></div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold border-2 border-black hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-[#627382]">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-[#001931] font-semibold hover:underline"
                  >
                    Create one
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            //  Profile Section (optional)
            <div className="text-center">
              <img src={user?.photoURL || "https://via.placeholder.com/100"} className="h-20 w-20 rounded-full mx-auto" alt="" />
              <h2 className="text-xl mt-3">{user?.displayName || "No Name"}</h2>
              <p>{user?.email}</p>
              <button onClick={handleSignOut} className="btn w-full bg-[#001931] text-white mt-4">
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












