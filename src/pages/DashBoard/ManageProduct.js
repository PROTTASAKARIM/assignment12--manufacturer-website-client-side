import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const ManageProduct = ({ product }) => {

    const { _id } = product;
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading) {
        return <Loading></Loading>
    }

    const deleteProduct = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed && admin) {
            const url = `http://localhost:5000/products/${id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <h4 className='font-semibold'>Price: ${product.price}<small>/per piece</small></h4>
                    <h4 className='font-semibold'>Minimum Order Quantity: {product.minimumOrder}</h4>
                    <h4 className='font-semibold'>Available Products: {product.availableQuantity}</h4>
                    <p>{product.shortDescription}</p>
                    <button onClick={() => { deleteProduct(_id) }} className='btn'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default ManageProduct;