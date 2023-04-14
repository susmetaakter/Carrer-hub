import React from 'react';

const Appliedjobdetails = (props) => {
    const singlejob = props.singlejob;
    console.log(singlejob);

    const {companyLogo, jobTitle, companyName, Jobtype, fulltimeOrPartTime, location, salary} = props.singlejob
    return (
        <div>
        <div className='card bg-slate-100 w-[500px] mx-auto mb-4 mt-4 py-4 px-4 lg:px-8 xl:px-16'>
       <div className='overflow-hidden mb-2'>
              <img src={companyLogo} alt="" srcset="" className=' object-cover' />
         </div>    
              <p className='font-bold text-gray-600 mb-2'>{jobTitle}</p>
              <p className='mb-2'>{companyName}</p>
              <div className='flex gap-4 mb-2'>
                <p className='border rounded border-blue-400 px-2 text-blue-500'>{Jobtype}</p>
                <p className='border rounded px-2 border-blue-400 text-blue-500'>{fulltimeOrPartTime}</p>
              </div>
              <div className='flex gap-4 mb-2'>
              <div className='flex'>
              <img className='h-4 w-4 mt-1' src="./assets/Icons/Frame-4.png" alt="" srcset="" />
               <p className='text-gray-600'>{location}</p>
              </div>
                <p className='text-gray-600'>{salary}</p>
                </div>
                </div>
    </div>
    );
};

export default Appliedjobdetails;