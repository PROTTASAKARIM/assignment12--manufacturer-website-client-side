import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data)
        fetch(`https://stark-badlands-49587.herokuapp.com/user`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

            }, [user])
    }



    if (loading) {
        <Loading></Loading>
    }
    // console.log(user.displayName)

    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-primary text-2xl font-bold">My Info</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    {...register("name")}
                                />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={user.email}
                                    readOnly
                                    {...register("email")}
                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Education</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Education"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education")}
                                />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address")}
                                />


                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Phone Number</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Phone Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phoneNo")}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">LinkedIn</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your LinkedIn profile link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedIn")}
                                />
                            </div>

                            <input className='btn mt-5 w-full bg-primary max-w-xs text-white' type="submit" value="Add your Info" />
                        </form>

                    </div>
                </div>
            </div >

        </div>
    );
};

export default MyProfile;