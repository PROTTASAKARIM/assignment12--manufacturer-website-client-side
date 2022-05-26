import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='m-10'>
            <h1 className='text-3xl text-primary m-5'>Business Summary</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="flex flex-col items-center stat">
                    <div className="stat-title">Countrys We Served</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    <div className="stat-value">72+</div>
                </div>

                <div className="flex flex-col items-center stat mx-2">
                    <div className="stat-title">Completed Projects</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="stat-value">500+</div>
                </div>

                <div className="flex flex-col items-center stat mx-2">
                    <div className="stat-title">Happy Clients</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="stat-value">300+</div>
                </div>

                <div className="flex flex-col items-center stat">
                    <div className="stat-title">Feedbacks</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div className="stat-value">400+</div>
                </div>

            </div>
            <div>
                <div class="card w-full bg-base-100 shadow-xl mt-5">
                    <div class="card-body">
                        <h2 class="card-title">Do you have any Qustions?</h2>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Ask now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;