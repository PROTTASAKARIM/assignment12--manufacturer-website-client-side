import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/carBaner.jpg'

const Carousel = () => {
    return (

        <div class="hero min-h-screen bg-base-500">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Car Parts Manufacturer</h1>
                    <p class="py-6">SpareParts.com recommends a Market Weight rating for the global auto parts
                        and equipment manufacturing industry. While this industry provides valuable
                        products and services to the ever-important auto industry, recent industry
                        trends and changes in consumer preferences are likely to favor certain
                        suppliers over others. The automobile parts and equipment industry is driven by a
                        number of factors, the largest being global automobile
                        production. Other important macroeconomic factors
                        include growth in real GDP per capita, interest rates,
                        income growth, employment growth, oil prices, and
                        consumer confidence. </p>
                    <Link to='allproducts'><button class="btn">Get Started</button></Link>
                    {/* <button class="btn">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Carousel;