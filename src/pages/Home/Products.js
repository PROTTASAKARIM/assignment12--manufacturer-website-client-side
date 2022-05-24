import React, { useEffect, useState } from 'react';

const Products = () => {

    const [products, useProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Products;