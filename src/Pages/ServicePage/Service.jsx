import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../../Components/Service/ServiceCard';

const Service = () => {
  const servicesData = useLoaderData();

  return (
    <section className="bg-[#F1F5E8] py-10 md:py-20 px-5 md:px-16 lg:px-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001931]">
        Our Bike Care Service
      </h1>

      <p className="text-sm sm:text-base md:text-[18px] lg:text-[20px] text-[#627382] mt-4 mb-10 max-w-3xl mx-auto leading-relaxed">
        Keep your bike in top shape with MotoCare! From engine cleaning and brake tuning to full polishing, our expert team ensures your bike runs smooth, looks sharp, and stays ready for every ride.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((serviceData) => (
          <ServiceCard key={serviceData.id} serviceData={serviceData} />
        ))}
      </div>
    </section>
  );
};

export default Service;
