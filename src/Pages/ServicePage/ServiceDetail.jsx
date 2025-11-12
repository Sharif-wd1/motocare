
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ServiceDetail = () => {
    const service = useLoaderData();
    
      const handleBook = () => {
        toast(`${service.title} booking successfull!`);
      };
    return (
        <div className="flex justify-between gap-6 my-20 lg:px-20">
          <div className="w-1/2">
            <img src={service.image} alt={service.title} className="w-full h-100 rounded-2xl object-cover"/>
          </div>
          <div className="w-1/2">
            <h1 className="text-[28px] font-bold">Service : {service.title}</h1>
            <h3><span className="font-semibold">Duration</span> : {service.duration}</h3>
            <h3><span className="font-semibold">Description</span> : {service.description}</h3>
            <h3><span className="font-semibold">Rating</span> : {service.ratingAvg}</h3>
            <h3><span className="font-semibold">Reviews</span> : {service.reviews}</h3>
            <h3><span className="font-semibold">Price</span> : ${service.price}</h3>
            <fieldset className="">
              <label>Name</label><br />
              <input type="text" className="input w-full" placeholder="Name" /><br />
              <label>Email</label><br />
              <input type="email" className="input w-full" placeholder="Email" /><br />
              <button onClick={handleBook} className="btn bg-[#FF8811] text-white mt-4 w-full">Book Now</button><br />
            </fieldset>
          </div>
        </div>
    );
};

export default ServiceDetail;