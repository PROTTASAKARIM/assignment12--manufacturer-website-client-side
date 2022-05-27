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
            <h1 className='text-3xl text-primary'>Reviews About Our Product</h1>
            <div className='grid grid-cols-1 gap-5 mx-2'>
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