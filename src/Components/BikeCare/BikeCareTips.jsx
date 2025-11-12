import React, { useEffect, useState } from "react";

const BikeCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/bikeCareTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <section className="bg-[#F9FBF5] py-16 px-5 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#001931] mb-4">
          Bike Care Tips
        </h2>
        <p className="text-[#627382] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Keep your bike running at its best with these essential maintenance tips.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={tip.image}  
              alt={tip.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#001931] mb-2">
                {tip.title}
              </h3>
              <p className="text-[#627382] text-[15px] leading-relaxed">
                {tip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BikeCareTips;
