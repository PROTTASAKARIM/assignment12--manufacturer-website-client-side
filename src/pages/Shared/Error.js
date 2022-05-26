import React from 'react';
import errPic from '../../images/error.png'

const Error = () => {
    return (
        <div>
            <img className='w-full' src={errPic} alt="" />
        </div>
    );
};

export default Error;