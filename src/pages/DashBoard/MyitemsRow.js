import React from 'react';

const MyitemsRow = ({ order, setDeleteing }) => {
    const { productName, _id } = order
    return (
        <div>
            <tr>
                <th></th>
                <td>{order.productName}</td>
                <td>{order.orderQty}</td>
                <td>{order.productPrice}</td>
                <td>{order.Address}</td>
                <td>{order.phonrNo}</td>
            </tr>
        </div>
    );
};

export default MyitemsRow;