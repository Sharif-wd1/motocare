import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const service = useLoaderData();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBook = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (!name.trim()) return toast.error("Please enter your name!");
    if (!validateEmail(email)) return toast.error("Enter a valid email!");
    toast.success(`${service.title} booked successfully ✅`);
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto rounded-3xl object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#001931] mb-4">
            {service.title}
          </h1>

          <div className="space-y-2 text-[#333] text-base mb-6">
            <p><span className="font-semibold">Duration:</span> {service.duration}</p>
            <p><span className="font-semibold">Description:</span> {service.description}</p>
            <p><span className="font-semibold">Rating:</span> {service.ratingAvg}</p>
            <p><span className="font-semibold">Reviews:</span> {service.reviews}</p>
            <p className="text-[#00A86B] font-bold text-lg mt-3">Price: ${service.price}</p>
          </div>

          <form
            onSubmit={handleBook}
            className="bg-white p-6 rounded-xl shadow-xl border border-gray-100"
          >
            <label className="block text-left font-semibold text-[#001931]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mt-1 mb-4 focus:ring-2 focus:ring-[#FF8811]"
            />

            <label className="block text-left font-semibold text-[#001931]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full mt-1 mb-5 focus:ring-2 focus:ring-[#FF8811]"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#FF8811] hover:bg-[#ff9a3c] text-white font-semibold py-2 w-full rounded-md transition-all"
            >
              Book Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
