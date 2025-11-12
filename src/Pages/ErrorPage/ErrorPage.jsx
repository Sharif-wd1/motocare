import React from "react";
import errorI from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={errorI} alt="" />
      <h1 className="text-5xl font-semibold text-[#001931] mt-4">
        Oops, page not found!
      </h1>
      <p className="text-[20px] text-[#627382] mt-[8px] mb-4">
        The page you are looking for is not available.
      </p>
      <a
        onClick={() => navigate("/")}
        className="btn text-white border-none bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90"
        href=""
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
