import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth)
    }

    return (
        <div class="navbar bg-base-300 bg-neutral text-neutral-content">
            <div class="flex-1 mx-5">

                <Link className='normal-case text-xl mx-5' to="/">SpareParts.com</Link>
                <Link className='normal-case text-xl' to="/blogs">Blogs</Link>
                {/* <a class="btn btn-ghost normal-case text-xl">Blogs</a> */}

            </div>
            <div class="flex-none mx-5">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li>
                        {user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/login">LOG IN</Link>}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;