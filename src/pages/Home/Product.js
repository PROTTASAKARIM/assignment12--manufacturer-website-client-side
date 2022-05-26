import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id } = product;

    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/products/${id}`);
    }

    return (
        <div className='mx-10'>
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
                    <button onClick={() => { navigateToProductDetails(_id) }} className='btn'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;