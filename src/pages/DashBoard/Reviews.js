import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings/build/star-ratings';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [msg, Setmsg] = useState('')

    if (loading) {
        return <Loading></Loading>
    }


    const onSubmit = data => {


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.success)

                if (data.success) {
                    Setmsg(`Your review is added`)
                }
                else {
                    Setmsg(`there is a problem adding your review! try again`)
                }

                console.log(data)
            });
    }


    return (
        <div>
            <div class="card w-2/4 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Give a Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="email"> Email : </label>
                        <input className="input input-bordered w-full max-w-xs m-2" defaultValue={user.email} {...register("email")} readOnly />
                        <br />
                        <label htmlFor="ratings">Ratings: </label>

                        <select className="input input-bordered w-full max-w-xs" {...register("ratings")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <label htmlFor="descreption"> Description :</label>
                        <input className="input input-bordered w-full max-w-xs m-2 h-32 p-4" {...register("descreption")} />
                        <br />
                        <p className='m-2'>{msg}</p>
                        <input class="btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Reviews;