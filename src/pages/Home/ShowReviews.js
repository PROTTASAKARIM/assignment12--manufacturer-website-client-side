import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data);
            });
    }, [])

    return (
        <div className='mx-auto'>
            <h1 className='text-3xl text-primary'>Reviews About Our Website</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>
                {
                    reviews.map(review =>
                        <ShowReview
                            key={review._id}
                            review={review}
                        ></ShowReview>
                    ).reverse()
                }
            </div>
        </div>
    );
};

export default ShowReviews;