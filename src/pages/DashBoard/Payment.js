import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3feZHt2vzQWeLoJK55hO3iurNUk8uSW9g0QlIyfm89mYtCwwQI2jMuD0rF2JyD59KfsWWELijby7zWXqhle9U700EvzPCFIc');

const Payment = () => {
    const { id } = useParams();


    const url = `http://localhost:5000/orders/${id}`;

    const { data: orderdetails, isLoading } = useQuery('order', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(orderdetails)

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {orderdetails.orderEmail}</p>
                    <h2 class="card-title">Please Pay for {orderdetails.productName}</h2>
                    <p>Please pay: ${orderdetails.productPrice * orderdetails.orderQty}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderdetails={orderdetails} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;