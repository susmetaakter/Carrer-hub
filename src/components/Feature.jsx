import React from 'react';
import { Link } from 'react-router-dom';

const Feature = (props) => {
    const {companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary, button} = props.feature;
    return (
        <Link to = 'feature/button/id' ><div>
        <div className='card bg-slate-50 py-4 px-4 lg:px-8 xl:px-16'>
       <div className='overflow-hidden'>
              <img src={companyLogo} alt="" srcset="" className=' object-cover' />
         </div>    
              <p>{jobTitle}</p>
              <p>{companyName}</p>
              <div className='flex gap-4'>
                <p className='border border-blue-400 px-2'>{remoteOrOnsite}</p>
                <p className='border px-2 border-blue-400'>{fulltimeOrPartTime}</p>
              </div>
              <div className='flex gap-4'>
              <div className='flex'>
              <img className='h-4 w-4 mt-1' src="./assets/Icons/Frame-4.png" alt="" srcset="" />
               <p className=''>{location}</p>
              </div>
                <p className=''>{salary}</p>
              </div>
              <button className=' mr-80 border text-white bg-blue-500 rounded p-2'>{button}</button>
            </div>      
    </div></Link>
    );
};

export default Feature;