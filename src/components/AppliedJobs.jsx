import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Appliedjobdetails from './Appliedjobdetails';


const AppliedJobs = () => {
    const saveCart = useLoaderData();
    console.log(saveCart);
    const [alljobs, setAlljobs] = useState(saveCart);

    const filterhandler = (Jobtype) => {
        const filterjob = saveCart.filter(job => job.Jobtype == Jobtype || job.Jobtype == Jobtype);
        console.log(filterjob);
        setAlljobs(filterjob);
    }

    return (
        <div>
            <div>
                <div>
                    <p className='font-bold text-2xl text-center  pb-6'>Applied Jobs</p>
                </div>
                <div className="dropdown dropdown-hover mt-6 lg:ms-[1075px] text-center  rounded object-cover">
                    <label tabIndex={0} className="bg-slate-400 rounded p-4 px-4 m-1">Filter</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => filterhandler('Onsite')}>Onsite</a></li>
                        <li><a onClick={() => filterhandler('Remote')}>Remote</a></li>
                    </ul>
                </div>
            </div>

            {
                alljobs.map(singlejob =>
                    <Appliedjobdetails
                        singlejob={singlejob}></Appliedjobdetails>
                )
            }

        </div>
    );
};

export default AppliedJobs;