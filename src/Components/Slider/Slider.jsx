import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import rcImg from "../../assets/ride-c.jpg";
import smsImg from "../../assets/KPI-Helmets-Banner-2-Affordable-Helmets-in-Nepal.png";
import maImg from "../../assets/269c883b226f2e2a.webp";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: rcImg,
      title: "Ride with Confidence",
      description:
        "Discover premium motorbikes and unmatched service with MotoCare — your trusted ride partner.",
    },
    {
      id: 2,
      image: smsImg,
      title: "Safety Meets Style",
      description:
        "Top-quality helmets and safety gear designed for comfort and protection on every ride.",
    },
    {
      id: 3,
      image: maImg,
      title: "MotoCare Accessories",
      description:
        "Upgrade your biking experience with genuine MotoCare accessories and maintenance kits.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh] flex justify-center items-center bg-black overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 transition-transform duration-[3000ms] ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-10 text-white"
              >
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-wide drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl opacity-95 leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
