import React from 'react';
import rumaisa from '../../images/Rumaisa.jpg';
import sajed from '../../images/shajed.jpg';
import ahsan from '../../images/Ahsan.jpg';

const AboutUs = () => {
    return (
        <div className='my-5'>
            <h1 className='text-3xl font-bold'>Our Leaders</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={rumaisa} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Ms. Rumaisa Rahman
                                <div class="badge badge-secondary">MD</div>
                            </h2>
                            <p>Our company is leading under very careful supervision of Ms. Rumaisa Rahman</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ahsan} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Md.Ahsan Rahman
                                <div class="badge badge-secondary">CEO</div>
                            </h2>
                            <p>Our company is leading under very careful supervision of Md.Ahsan Rahman</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={sajed} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Md. Sajedur Rahman
                                <div class="badge badge-secondary">HR</div>
                            </h2>
                            <p> Md.Sajedur Rahman manages company environment </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;