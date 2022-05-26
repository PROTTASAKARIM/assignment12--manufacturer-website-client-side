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
            <ShowReviews></ShowReviews>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;