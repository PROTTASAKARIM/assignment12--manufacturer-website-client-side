import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const DashBoard = () => {

    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <> <li><Link to='/dashboard/myitems'>My Items</Link></li>
                                <li><Link to='/dashboard/reviews'>Add a Review</Link></li></>
                        }


                        {admin && <>
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li><Link to="/dashboard/manageallproducts">Manage All Products</Link></li>
                            <li><Link to="/dashboard/manageallorders">Manage All orders</Link></li>
                        </>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;