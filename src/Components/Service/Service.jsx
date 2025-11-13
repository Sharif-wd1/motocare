import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import ServiceCard from "../../Components/Service/ServiceCard";

const Service = () => {
  const servicesData = useLoaderData();

  return (
    <section className="bg-[#F9FBF5] py-14 md:py-24 px-5 md:px-16 lg:px-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-[#001931]"
      >
        Our Bike Care Service
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base md:text-lg lg:text-xl text-[#627382] mt-5 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Keep your bike in top shape with MotoCare! From engine cleaning to full
        polishing, our experts make sure your ride looks sharp and runs smooth.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((serviceData, index) => (
          <motion.div
            key={serviceData.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <ServiceCard serviceData={serviceData} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
