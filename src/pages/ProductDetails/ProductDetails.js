import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { queryAllByAttribute } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Errormsg from '../Shared/Errormsg';
import Loading from '../Shared/Loading';
import OrderModal from './OrderModal';

const ProductDetails = () => {
    const { id } = useParams();
    const orderQty = useRef();
    const user = useAuthState(auth);


    const [productDetails, setProductDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    let [productQty, setProductQty] = useState(0);
    let [productPrice, setProductPrice] = useState(0);


    const url = `http://localhost:5000/products/${id}`;

    // useEffect(() => {
    //     const url = `http://localhost:5000/products/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProductDetails(data))
    // }, [id])

    const { data: product, isLoading, refetch } = useQuery(['products'], () => fetch(url)
        .then(res => res.json()));




    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(product)


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
        // console.log(productQty)
    }

    const handleOrder = () => {
        if (productQty < product[0].minimumOrder) {
            alert('please order at least ' + product[0].minimumOrder)
            setOpenModal(false)
        }
        else if (productQty > product[0].availableQuantity) {
            alert('please order less then ' + product[0].availableQuantity)
            setOpenModal(false)
        }
        else {
            setOpenModal(true)
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
                <label onClick={() => { handleOrder() }} for="order-modal" class="btn modal-button">Order Now</label>
                {
                    openModal && <OrderModal
                        id={product[0]._id}
                        product={product[0]}
                        productQty={productQty}
                        refetch={refetch}

                    ></OrderModal>
                }
                {/* <button  className='btn'>Order Now</button> */}
            </div>

        </div>
    );
};

export default ProductDetails;