import { useLoaderData } from 'react-router';
import Slider from '../../Components/Slider/Slider';
import Service from '../../Components/Service/Service';
import BikeCareTips from '../../Components/BikeCare/BikeCareTips';
import MeetExpertise from '../../Components/Expertise/MeetExpertise';

const Home = () => {
  const servicesData = useLoaderData();

  return (
    <div className="overflow-hidden">
      <Slider />
      <Service servicesData={servicesData} />
      <BikeCareTips />
      <MeetExpertise />
    </div>
  );
};

export default Home;
