import React from 'react';
import banner from '../../images/12V-100A-Car-Parts-Alternator-for-Chrysler-300c-2004-OEM-27060-28300-.jpg'

const Carousel = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Every products you need</h1>
                    <h1 className="text-3xl mt-2 font-bold">We will provide</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda vitae doloribus sunt eligendi ducimus, fugit exercitationem rem quibusdam cum odit in culpa. Dolorum, libero aliquam? Aliquid atque eius, aliquam debitis eum qui reiciendis cum id similique enim iste inventore? Expedita ut quos, optio illum ad tempore at error ex saepe maxime officia excepturi quas omnis, ipsam, voluptatum illo quasi dolores voluptas fuga? Ut nulla minus libero, a rerum quos ratione, totam nobis aliquid unde tempore dolores. Sequi, obcaecati error, ex dolore, dignissimos aspernatur delectus quaerat eum hic eius corrupti ea amet aliquam reiciendis neque voluptates facere nostrum temporibus adipisci!</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;