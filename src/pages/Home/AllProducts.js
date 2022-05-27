import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://stark-badlands-49587.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='my-28'>
                <div className='text-center'>
                    <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;