import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const AllUser = () => {
    const [users, setUser] = useState([]);

    // const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/user').then(res => res.json()));

    useEffect(() => {
        fetch(`http://localhost:5000/user`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data);
            });
    }, [])


    return (
        <div>
            <h1>{users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}

                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;