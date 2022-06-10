import React from 'react';
import notFound from '../../assets/image/notFound.png'

const NotFound = () => {
    return (
        <div className="h-screen flex items-center">
            <img className='w-100  lg:w-2/4 mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;