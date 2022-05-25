import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigateAllProducts = () => {
        navigate('/allproducts')
    }

    return (
        <div>
            <div className='my-28'>
                <div className='text-center'>
                    <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.slice(0, 3).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <button onClick={() => { navigateAllProducts() }} className='btn btn-ghost mt-2'>See All</button>
            </div>
        </div>
    );
};

export default Products;