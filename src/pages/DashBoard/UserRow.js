import React from 'react';
import useAdmin from '../../hooks/useAdmin';

const UserRow = ({ user }) => {
    const { email, role } = user;
    console.log(role);
    const [admin, adminLoading] = useAdmin(email);

    const makeAdmin = () => {
        if (admin) {
            fetch(`http://localhost:5000/user/admin/${email}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                })
        }
        else {

        }

    }
    return (
        <div>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
        </div>
    );
};

export default UserRow;