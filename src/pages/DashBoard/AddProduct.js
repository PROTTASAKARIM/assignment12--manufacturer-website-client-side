import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [msg, setMsg] = useState('')


    const onSubmit = data => {
        console.log(data)
        const product = {
            img: data.img,
            name: data.productName,
            price: data.productPrice,
            minimumOrder: data.minimumOrder,
            availableQuantity: data.productQty,
            shortDescription: data.description,
            warranty: data.warranty,
            email: data.email
        }

        fetch('https://stark-badlands-49587.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.success)

                if (data.success) {
                    setMsg(`Your product is added`)
                }
                else {
                    setMsg(`there is a problem adding your product! try again`)
                }

                console.log(data)
            });

    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-primary text-2xl font-bold">My Info</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                                    <span className="label-text text-primary font-semibold">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("productName")}
                                />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Product Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Product Price"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("productPrice")}
                                />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Product Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Product Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("productQty")}
                                />


                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Product Descreption</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Descreption"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("description")}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Image Link</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Image Link"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("img")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("minimumOrder")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Warranty</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Warranty"
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                    {...register("warranty")}
                                />
                            </div>

                            <input className='btn mt-5 w-full bg-primary max-w-xs text-white' type="submit" value="Add Product" />
                        </form>
                        <p>{msg}</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddProduct;