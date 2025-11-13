import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, number & special char (min 8)"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, { displayName, photoURL })
          .then(() => toast.success("Signup successful"))
          .catch((e) => toast.error(e.message));
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-[#F1F5E8] relative overflow-hidden px-5 sm:px-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#A0C4FF]/30 rounded-full blur-3xl top-10 left-5 animate-pulse"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#BDB2FF]/30 rounded-full blur-3xl bottom-10 right-5 animate-pulse"></div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
        {/* Left Text */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#001931]">
            Create Your <span className="text-[#FF8811]">MotoCare</span> Account
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#627382] leading-relaxed">
            Join MotoCare to enjoy exclusive bike care services, reminders, and
            special offers tailored just for you.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-[#001931]/10 shadow-xl rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#001931]">
            Sign Up
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#001931]">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#001931]">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL"
                className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-[#001931]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
                required
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
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-9 cursor-pointer text-gray-600"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#001931] hover:bg-[#23354A] text-white font-semibold py-2 rounded-md transition"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-[#627382] mt-3">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#001931] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
