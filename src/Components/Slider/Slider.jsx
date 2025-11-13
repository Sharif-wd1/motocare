import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import rcImg from "../../assets/ride-c.jpg";
import smsImg from "../../assets/KPI-Helmets-Banner-2-Affordable-Helmets-in-Nepal.png";
import maImg from "../../assets/269c883b226f2e2a.webp";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: rcImg,
      title: 'Ride with Confidence',
      description: 'Discover premium motorbikes and unmatched service with MotoCare — your trusted ride partner.',
    },
    {
      id: 2,
      image: smsImg,
      title: 'Safety Meets Style',
      description: 'Top-quality helmets and safety gear designed for comfort and protection on every ride.',
    },
    {
      id: 3,
      image: maImg,
      title: 'MotoCare Accessories',
      description: 'Upgrade your biking experience with genuine MotoCare accessories and maintenance kits.',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[55vh] sm:h-[70vh] md:h-[100vh] flex justify-center items-center bg-black">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-[3000ms] ease-in-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 text-white">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
