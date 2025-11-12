import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com", "_blank"); // redirect to Gmail
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#F1F5E8]">
      <div className="w-full max-w-md bg-white/80 p-8 rounded-2xl shadow-xl border border-[#001931]/10">
        <h1 className="text-3xl font-bold text-center text-[#001931] mb-4">
          Reset Your Password
        </h1>
        <p className="text-center text-[#627382] mb-6">
          Enter your email address to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-[#C7D0D9] focus:outline-none focus:ring-2 focus:ring-[#627382]"
          />
          <button
            type="submit"
            className="w-full bg-[#001931] hover:bg-[#23354A] text-white font-semibold py-2 rounded-md transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
