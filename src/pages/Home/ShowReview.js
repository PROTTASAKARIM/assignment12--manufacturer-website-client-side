import React from 'react';

const ShowReview = ({ review }) => {
    const { email, ratings, descreption } = review;
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body mx-auto">
                    <h2 class="card-title">{email}</h2>
                    <p>Ratings : {ratings} out of 5</p>
                    <p>Comments : {descreption}</p>
                </div>
            </div>
        </div >
    );
};

export default ShowReview;