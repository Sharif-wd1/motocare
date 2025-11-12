import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../../Components/Service/ServiceCard';

const Service = () => {
    const servicesData = useLoaderData();
    return (
        <div className="text-center bg-[#F1F5E8] md:py-20 lg:px-20">
      <h1 className="text-5xl font-bold text-[#001931]">Our Bike Care Service</h1>
      <p className="text-[20px] text-[#627382] mt-4 mb-10">
        Keep your bike in top shape with MotoCare! From engine cleaning and brake tuning to full polishing, our expert team ensures your bike runs smooth, looks sharp, and stays ready for every ride.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((serviceData) => (
        <ServiceCard key={serviceData.id} serviceData={serviceData}></ServiceCard>
        ))}
      </div>
    </div>
    );
};

export default Service;