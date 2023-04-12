import React from 'react';

const Category = (props) => {
    const {logo, name, jobsAvailable} = props.category;
    return (
        <div>
            <div className='card bg-slate-100 p-7 mb-6'>
                <img className=' h-10 w-10 mb-4' src={logo} alt="" srcset="" />
                <p className='text-xl font-bold mb-2'>{name}</p>
                <p className='text-sm text-gray-400'>{jobsAvailable}</p>
            </div>
        </div>
    );
};

export default Category;