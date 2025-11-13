import { useEffect, useState } from "react";

const MeetExpertise = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/experts.json")
      .then(res => res.json())
      .then(data => setExperts(data))
      .catch(err => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <section className="bg-[#F1F5E8] py-12 md:py-20 px-5 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#001931] mb-3">
          Meet Our Experts
        </h2>
        <p className="text-[#627382] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Our team of skilled professionals are ready to provide top-notch bike care services. Get to know their expertise and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map(expert => (
          <div key={expert.id} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden">
            <img src={expert.image} alt={expert.name} className="w-full h-52 sm:h-60 object-cover" />
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-[#001931] mb-2 text-center sm:text-left">{expert.name}</h3>
              <ul className="text-[#627382] text-sm md:text-base list-disc list-inside space-y-1">
                {expert.expertise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetExpertise;
