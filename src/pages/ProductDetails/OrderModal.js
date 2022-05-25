import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const OrderModal = ({ product, productQty, refetch }) => {
    const { _id, name, minimumOrder, availableQuantity, price } = product;

    const [user, loading] = useAuthState(auth);
    const [msg, Setmsg] = useState('')

    // const order = {
    //     productId: _id,
    //     orderQty: productQty,
    //     productName: name,
    //     orderEmail: user.email,
    //     productPrice: price
    // }

    const handleOrder = (event) => {
        event.preventDefault();

        const phnNo = event.target.phone.value;
        const address = event.target.address.value;

        const order = {
            productId: _id,
            orderQty: productQty,
            productName: name,
            orderEmail: user.email,
            productPrice: price,
            phonrNo: phnNo,
            Address: address
        }
        if (productQty < minimumOrder && productQty > availableQuantity) {
            alert('please order more then ' + minimumOrder + 'less then ' + availableQuantity)
        }
        else {

        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.success)

                if (data.success) {
                    Setmsg(`Your Oder has been placed`)
                }
                else {
                    Setmsg(`You have already ordered this product`)
                }
                refetch()
                console.log(data)
            });

    }

    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Order Now</h3>
                    {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <label htmlFor="productName">Product Name  </label>
                        <input type="text" name="name" disabled value={name || ''} className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="productPrice">Product Price </label>
                        <input type="text" name="price" disabled value={price || ''} className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="productQty">Product Quantity </label>
                        <input type="text" name="productQty" disabled value={productQty || ''} className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="email">Email Address : </label>
                        <input type="email" name="email" disabled value={user.email || ''} className="input input-bordered w-full max-w-xs" />

                        <label htmlFor="address"> Address  </label>
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" required />

                        <label htmlFor="phoneNo">Phone No  </label>
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />


                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs mt-2" />
                    </form>
                    <p className='text-violet-500'>{msg}</p>
                    <div class="modal-action">
                        <label for="order-modal" class="btn">Close Order</label>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OrderModal;