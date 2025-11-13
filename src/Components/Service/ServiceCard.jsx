import { Link } from "react-router-dom";
import sI from "../../assets/icon-ratings.png";

const ServiceCard = ({ serviceData }) => {
  return (
    <Link to={`/service/${serviceData.id}`}>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] flex flex-col h-full">
        <div className="relative w-full h-48 sm:h-56 md:h-60 overflow-hidden">
          <img
            src={serviceData.image}
            alt={serviceData.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="flex flex-col justify-between flex-grow p-5 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-[#001931] line-clamp-2">
            {serviceData.title}
          </h3>
          <p className="text-[#627382] text-sm mt-2 line-clamp-2 leading-relaxed">
            {serviceData.shortDesc || "Get premium service & care for your bike with MotoCare experts."}
          </p>

          <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-3">
            <p className="text-[#00D390] text-base font-bold">${serviceData.price}</p>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4" src={sI} alt="rating" />
              <p className="text-[#FF8811] text-sm font-semibold">{serviceData.ratingAvg}</p>
            </div>
          </div>

          <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#FF6600] to-[#FF8811] text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
