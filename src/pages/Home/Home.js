import React from 'react';
import AboutUs from './AboutUs';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import OurClients from './OurClients';
import Products from './Products';
import ShowReviews from './ShowReviews';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <AboutUs></AboutUs>
            <OurClients></OurClients>
            <ShowReviews></ShowReviews>

        </div>
    );
};

export default Home;