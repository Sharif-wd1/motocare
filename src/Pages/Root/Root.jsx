import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => setShowLoader(false), 700);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  return (
    <div>
      <Navbar />

      {showLoader ? (
        <div className="flex flex-col justify-center items-center h-[80vh] transition-all duration-300">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-amber-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-tr from-amber-400 to-purple-500"></div>
          </div>
          <p className="mt-4 text-[#627382] text-lg font-medium tracking-wide animate-pulse">
            Loading, please wait...
          </p>
        </div>
      ) : (
        <div className="pt-[30px]">
    <Outlet />
  </div>
      )}

      <Footer />
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default Root;
