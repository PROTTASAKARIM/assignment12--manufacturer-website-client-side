import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteModal = ({ order, deleteing, setDeleteing }) => {

    const { _id, productName, orderEmail } = order;
    const navigate = useNavigate();

    const [msg, setMgs] = useState('')

    const handleDelete = () => {
        // console.log('delete clicked')
        // console.log(_id)
        // setDeleteing(_id)
        // // // navigate(`orders/${_id}`);
        // const url = `http://localhost:5000/orders/${deleteing}`
        // console.log(url)

        // fetch(url, {
        //     method: 'DELETE',
        //     body: JSON.stringify(deleteing)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.deletedCount) {
        //             setMgs(`order is deleted.`)
        //         } else {
        //             setMgs(`order is not deleted`)
        //         }
        //     })


    }

    return (
        <div>
            <input type="checkbox" id="deleteConfirm" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="deleteConfirm" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;