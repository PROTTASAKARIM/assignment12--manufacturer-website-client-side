import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { queryAllByAttribute } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Errormsg from '../Shared/Errormsg';
import Loading from '../Shared/Loading';

const ProductDetails = () => {
    const { id } = useParams();
    const orderQty = useRef();


    const [productDetails, setProductDetails] = useState([]);
    let [productQty, setProductQty] = useState(0);
    let [productPrice, setProductPrice] = useState(0);

    const url = `http://localhost:5000/products/${id}`;

    // useEffect(() => {
    //     const url = `http://localhost:5000/products/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProductDetails(data))
    // }, [id])

    const { data: product, isLoading } = useQuery(['products'], () => fetch(url)
        .then(res => res.json()));




    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(product)


    // const productPrice = parseInt(product[0].price);

    const productplus = () => {
        productQty = productQty + 1;
        setProductQty(productQty);
        const totalPrice = productQty * product[0].price;
        setProductPrice(totalPrice)

        console.log(productQty)
    }
    const productminus = () => {
        if (productQty > 0) {
            productQty = productQty - 1;
            setProductQty(productQty);
            const totalPrice = productQty * product[0].price;
            setProductPrice(totalPrice)
        }
        else {
        }
        console.log(productQty)
    }

    const handleOrder = () => {
        if (productQty < product[0].minimumOrder) {
            alert('please order at least ' + product[0].minimumOrder)
        }
    }

    return (
        <div className='m-5 flex justify-center items-center'>
            <div className="card w-2/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product[0].img} alt="" className="rounded-xl w-2/4" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {product[0].name}</h2>
                    <p>{product[0].shortDescription}</p>
                    <p>Price : {product[0].price}</p>
                    <div className="card-actions">
                        <div className="form-control">
                            <label className="input-group">
                                <button onClick={() => { productplus() }} className='btn'>+</button>
                                <input type="text" ref={orderQty} placeholder={product[0].minimumOrder} className="input input-bordered" value={productQty} disabled />
                                <button onClick={() => { productminus() }} className='btn'>-</button>
                            </label>
                        </div>
                        <p>Total Price : {productPrice}</p>
                    </div>
                </div>
                <button onClick={() => { handleOrder() }} className='btn'>Order Now</button>
            </div>

        </div>
    );
};

export default ProductDetails;