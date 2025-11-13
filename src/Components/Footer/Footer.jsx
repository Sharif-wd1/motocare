import React from "react";
// import logoImg from "../../assets/logo.png";

// 🔹 Font Awesome React Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-gray-300 py-14 px-6 md:px-20 relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-[#FF6600]/10 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-[#FF6600]/10 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    
        <div>
          <div className="flex items-center gap-2 mb-4">
            <a className="text-2xl font-bold text-white">
              <span className="text-[#FF6600]">Moto</span>Care
            </a>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium bike care and service center dedicated to keeping your ride safe and smooth.  
            Let’s keep your bike performing at its best!
          </p>

       
          <div className="flex space-x-5 mt-5 text-xl">
            <a href="#" className="hover:text-[#FF6600] transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-[#FF6600] transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-[#FF6600] transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-[#FF6600] transition-all duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

   
        <div>
          <h6 className="text-lg font-semibold text-white mb-4 border-l-4 border-[#FF6600] pl-2">
            Services
          </h6>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#FF6600] transition">Bike Maintenance</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Helmet & Accessories</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Engine Tuning</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Brake & Tire Service</a></li>
          </ul>
        </div>


        <div>
          <h6 className="text-lg font-semibold text-white mb-4 border-l-4 border-[#FF6600] pl-2">
            Company
          </h6>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#FF6600] transition">About MotoCare</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Careers</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Our Locations</a></li>
          </ul>
        </div>

   
        <div>
          <h6 className="text-lg font-semibold text-white mb-4 border-l-4 border-[#FF6600] pl-2">
            Legal
          </h6>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#FF6600] transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF6600] transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

    
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-white">
          <span className="text-[#FF6600]">Moto</span>Care
        </span>{" "}
        — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
