import { useLoaderData } from 'react-router';
import Slider from '../../Components/Slider/Slider';
import Service from '../../Components/Service/Service';
import BikeCareTips from '../../Components/BikeCare/BikeCareTips';
import MeetExpertise from '../../Components/Expertise/MeetExpertise';

const Home = () => {
    const servicesData = useLoaderData();  //service
    
    return (
        <div>
            <Slider></Slider>
            <Service servicesData={servicesData}></Service>
            <BikeCareTips ></BikeCareTips>
            <MeetExpertise></MeetExpertise>
        </div>
    );
};

export default Home;