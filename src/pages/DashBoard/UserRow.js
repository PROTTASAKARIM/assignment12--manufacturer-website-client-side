import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const UserRow = ({ evevryUser }) => {
    const { email, role } = evevryUser;
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user.email);
    console.log(user.email)

    console.log(evevryUser)
    console.log(admin)
    console.log(adminLoading)


    const makeAdmin = (email) => {
        // console.log(admin)
        // console.log(adminLoading)
        // console.log(email);

        if (!admin) {
            fetch(`https://stark-badlands-49587.herokuapp.com/user/admin/${email}`, {
                method: 'PUT'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                }, [admin])
        }

    }
    return (
        <div>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={() => { makeAdmin(email) }} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
        </div>
    );
};

export default UserRow;