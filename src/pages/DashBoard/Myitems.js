import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myitems = () => {
    const [orders, SetOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?orderEmail=${user.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                SetOrders(data);
            });
    }, [])

    return (
        <div>
            <h1>{orders.length}</h1>
            {/* {
                orders.map(order => <h1>{order.productName}</h1>)
            } */}

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Qty</th>
                            <th>Product Price</th>
                            <th>Address</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.orderQty}</td>
                                <td>{order.productPrice}</td>
                                <td>{order.Address}</td>
                                <td>{order.phonrNo}</td>
                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myitems;