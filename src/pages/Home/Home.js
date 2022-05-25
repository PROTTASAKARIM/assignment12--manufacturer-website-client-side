import React from 'react';
import Carousel from './Carousel';
import Products from './Products';
import ShowReviews from './ShowReviews';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <ShowReviews></ShowReviews>
        </div>
    );
};

export default Home;