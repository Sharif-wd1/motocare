import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const ServiceDetail = () => {
  const service = useLoaderData();

  // ✅ form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // ✅ handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // ✅ booking handler
  const handleBook = (e) => {
    e.preventDefault(); // stop form reload

    const { name, email } = formData;

    // Validation checks
    if (name.trim() === "") {
      toast.error("Please enter your name!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // ✅ Success
    toast.success(`${service.title} booking successful! ✅`);

    // Reset form
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="py-10 md:py-20 px-5 md:px-16 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Right Details Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#001931] mb-3">
            Service: {service.title}
          </h1>

          <div className="space-y-2 text-[#333] text-sm sm:text-base mb-6">
            <h3>
              <span className="font-semibold">Duration:</span> {service.duration}
            </h3>
            <h3>
              <span className="font-semibold">Description:</span>{" "}
              {service.description}
            </h3>
            <h3>
              <span className="font-semibold">Rating:</span> {service.ratingAvg}
            </h3>
            <h3>
              <span className="font-semibold">Reviews:</span> {service.reviews}
            </h3>
            <h3 className="text-[#00A86B] font-bold text-lg mt-2">
              Price: ${service.price}
            </h3>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleBook}
            className="bg-white p-5 rounded-xl shadow-md border"
          >
            <label className="block text-left text-[#001931] font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-[#FF8811]"
              placeholder="Enter your name"
            />

            <label className="block text-left text-[#001931] font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-[#FF8811]"
              placeholder="Enter your email"
            />

            <button
              type="submit"
              className="bg-[#FF8811] hover:bg-[#ff9a3c] text-white font-semibold py-2 w-full rounded-md transition-all duration-300"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
