import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MeetExpertise = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <section className="bg-[#F1F5E8] py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-[#001931]"
        >
          Meet Our Experts
        </motion.h2>
        <p className="text-[#627382] text-lg max-w-2xl mx-auto mt-4">
          Our skilled professionals are ready to deliver premium bike care with
          years of experience and passion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#001931] mb-3 text-center">
                {expert.name}
              </h3>
              <ul className="text-[#627382] text-base list-disc list-inside space-y-1 text-left">
                {expert.expertise.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetExpertise;
