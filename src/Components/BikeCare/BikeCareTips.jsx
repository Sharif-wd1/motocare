import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BikeCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/bikeCareTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <section className="bg-[#F9FBF5] py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-[#001931]"
        >
          Bike Care Tips
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#627382] max-w-2xl mx-auto text-lg leading-relaxed mt-4"
        >
          Keep your bike running at its best with these essential maintenance
          tips.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#001931] mb-2">
                {tip.title}
              </h3>
              <p className="text-[#627382] text-base leading-relaxed">
                {tip.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BikeCareTips;
