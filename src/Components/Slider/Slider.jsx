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
      description:
        'Discover premium motorbikes and unmatched service with MotoCare — your trusted ride partner.',
      button: 'Explore Bikes',
    },
    {
      id: 2,
      image: smsImg,
      title: 'Safety Meets Style',
      description:
        'Top-quality helmets and safety gear designed for comfort and protection on every ride.',
      button: 'Shop Helmets',
    },
    {
      id: 3,
      image: maImg,
      title: 'MotoCare Accessories',
      description:
        'Upgrade your biking experience with genuine MotoCare accessories and maintenance kits.',
      button: 'View Accessories',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            
            <div className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden flex justify-center items-center bg-black">

              
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain md:object-cover object-center transition-transform duration-[3000ms] ease-in-out scale-100 hover:scale-105"
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
                <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-4">
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-sm md:text-lg opacity-95 mb-6 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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

