import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ConfirmDeletePage from './ConfirmDeletePage';
import DeleteModal from './DeleteModal';

const Myitems = () => {
    const [orders, setOrders] = useState([]);

    const [deleteing, setDeleteing] = useState(null);
    const [user] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const sendToken = localStorage.getItem('accessToken')



    useEffect(() => {
        fetch(`http://localhost:5000/orders?orderEmail=${user.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data);
            });
    }, [])

    const handleConfirmDelete = () => {
        setOpenModal(true)
    }

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
                            <th>Payment status</th>
                            <th>Delete Order</th>
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
                                <td>
                                    {/* {
                                        (order.productPrice && !order.paid) && <>
                                            <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>
                                        </>
                                    } */}
                                    {
                                        (order.productPrice && order.paid) && <button className='btn btn-xs btn-success'>paid</button>
                                    }
                                </td>
                                <td>
                                    {
                                        (order.productPrice && !order.paid) && <> <label onClick={() => { handleConfirmDelete() }} for="deleteConfirm" class="btn modal-button btn-xs btn-error">Delete</label>
                                            {
                                                openModal && <DeleteModal
                                                    key={order._id}
                                                    order={order}
                                                    deleteing={deleteing}
                                                    setDeleteing={setDeleteing}
                                                ></DeleteModal>
                                            }
                                        </>
                                    }

                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
                {/* {
                    deleteing && <ConfirmDeletePage
                        key={deleteing}
                        deleteing={deleteing}
                    ></ConfirmDeletePage>
                } */}
            </div>

        </div>
    );
};

export default Myitems;