import React from 'react';
import { Link } from "react-router-dom";
import sI from "../../assets/icon-ratings.png";

const ServiceCard = ({serviceData}) => {
    return (
    <Link to={`/service/${serviceData.id}`}>
      <div className="
        group 
        flex flex-col justify-between items-center 
        bg-white rounded-2xl shadow-lg 
        overflow-hidden relative 
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
        h-[420px] w-full
      ">
        
        
        <div className="relative w-full h-[230px] overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={serviceData.image}
            alt={serviceData.title}
          />

          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          
          <div className="absolute bottom-3 left-0 right-0 opacity-0 group-hover:opacity-100 text-center transition-all duration-500">
            <h3 className="text-white text-[18px] font-semibold drop-shadow-lg">
              {serviceData.title}
            </h3>
          </div>
        </div>

        
        <div className="flex flex-col justify-between items-center flex-grow w-full p-5">
          <h3 className="text-[18px] font-semibold text-[#001931] text-center line-clamp-2 min-h-[48px]">
            {serviceData.title}
          </h3>

          <p className="text-[#627382] text-[14px] mt-2 text-center line-clamp-2 leading-relaxed">
            {serviceData.shortDesc || "Get premium service & care for your bike with MotoCare experts."}
          </p>

          <div className="flex justify-between items-center w-full mt-4 border-t border-gray-200 pt-3">
            <p className="text-[#00D390] text-[16px] font-bold">
              ${serviceData.price}
            </p>

            <div className="flex items-center gap-2">
              <img className="h-4 w-4" src={sI} alt="star icon" />
              <p className="text-[#FF8811] text-[15px] font-semibold">
                {serviceData.ratingAvg}
              </p>
            </div>
          </div>

          
          <button className="
            mt-4 w-full py-2.5 
            bg-gradient-to-r from-[#FF6600] to-[#FF8811] 
            text-white rounded-full font-semibold 
            hover:from-[#ff7b1c] hover:to-[#ffa43c] 
            transition-all duration-300 
            shadow-md hover:shadow-lg hover:scale-[1.02]
          ">
            View Details
          </button>
        </div>
      </div>
    </Link>
    );
};

export default ServiceCard;