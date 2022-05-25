import React, { useEffect, useState } from 'react';

const Reviews = () => {
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
        <div>
            <h1>{reviews.length}</h1>
        </div>
    );
};

export default Reviews;