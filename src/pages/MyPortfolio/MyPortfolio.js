import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mt-5 flex justify-center items-center'>
            <div class="card w-1/2 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">I am Prottasa Karim</h2>
                    <h4 className='text-lg text-left'>My email address is <strong>prottasakarim99@gmail.com</strong></h4>
                    <h4 className='text-lg text-left font-bold'>Educational Background</h4>
                    <p className='text-left'>
                        <ul>
                            <li>SSC from Uttara High School and College in 2012</li>
                            <li>HSC from Holy Cross College in 2014</li>
                            <li>B.Sc completed in CSE from Ahsanullah University of Science and Technology in 2019 </li>
                        </ul>
                    </p>
                    <h4 className='text-lg text-left font-bold'>Skills</h4>
                    <p className='text-left'>Basic knowledge in HTML/CSS</p>
                    <p className='text-left'>Basic knowledge in ReactJS</p>
                    <p className='text-left'>Basic knowledge in testing and debugging in code</p>
                    <p className='text-left'>Basic knowledge in Responsive design</p>
                    <p className='text-left'>Basic knowledge in Database</p>
                    <p className='text-left'>Basic knowledge in mongoDB</p>
                    <p className='text-left'>Basic knowledge in JavaScript</p>

                    <p className='text-left mt-5'><strong>Project Links</strong></p>
                    <p className='text-left'> Assignment 11 : https://smartphn-warehouse.web.app/</p>
                    <p className='text-left'> Assignment 10 : https://dreamy-photographer.web.app/</p>
                    <p className='text-left'> Assignment 9 : https://bookreviewassignmentnine.netlify.app/</p>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;