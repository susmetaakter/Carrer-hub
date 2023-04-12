import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Appliedjobdetails from './Appliedjobdetails';


const AppliedJobs = () => {
const saveCart = useLoaderData();
console.log(saveCart);

    return (
        <div>

            {
                saveCart.map(singlejob =>
                    <Appliedjobdetails
                    singlejob = {singlejob}></Appliedjobdetails>
                    )
            }
            
        </div>
    );
};

export default AppliedJobs;