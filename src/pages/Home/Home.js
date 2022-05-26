import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import ShowReviews from './ShowReviews';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <ShowReviews></ShowReviews>

        </div>
    );
};

export default Home;