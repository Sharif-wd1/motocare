import React from "react";
import errorI from "../../assets/error-404.png";
import { useNavigate } from "react-router-dom"; 

const ErrorPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen bg-[#F9FAFB] px-4">
      <img
        src={errorI}
        alt="404 Error"
        className="max-w-xs md:max-w-sm lg:max-w-md mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-3">
        Oops! Page Not Found
      </h1>
      <p className="text-[#627382] text-lg mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
