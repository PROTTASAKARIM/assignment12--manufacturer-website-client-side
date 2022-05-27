import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const ShowReview = ({ review }) => {
    const { email, ratings, descreption } = review;
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body mx-auto">
                    <h2 class="card-title">{email}</h2>
                    <p>Ratings : {ratings}</p>

                    <p>{descreption}</p>
                </div>
            </div>
        </div >
    );
};

export default ShowReview;