import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link to = '/' className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-indigo-400 text-white text-xl rounded mt-4 border-none lg:ms-[520px]'>4004!! Back to Home Page
            </Link>
        </div>
    );
};

export default ErrorPage;