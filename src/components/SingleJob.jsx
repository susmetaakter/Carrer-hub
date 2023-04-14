import React from 'react';

const SingleJob = (props) => {
    const {jobDescription, jobResponsibility, educationalRequirements, salary, jobTitle, experiences, phone, email, location} = props.singleJob;
    const handleAppliedJob = props.handleAppliedJob;
    return (
        <div>
            {/* <p>{props.handleappliedjob}</p> */}
            <p className='text-center text-2xl font-bold p-12 bg-indigo-50'>Job Details</p>
            <div className='grid gap-6 -mb-1 lg:grid-cols-2 sm:grid-cols-1 py-4 px-4 mx-16 lg:px-8 xl:px-16 mt-5'>
            <div>
              <p className=' text-gray-700 text-sm'><span className='font-bold text-lg'>Job Description:</span> {jobDescription}</p>
              <p className='mt-2 mb-2  text-gray-700 text-sm'><span className='font-bold text-lg' >Job Responsibility:</span> {jobResponsibility}</p>
              <p className=' text-gray-700 text-sm'><span className='font-bold text-lg'>Educational Requirement: <br /> </span> {educationalRequirements}</p>
              <p className=' text-gray-700 text-sm'><span className='font-bold text-lg'>Experiences: <br /> </span> {experiences}</p>
            </div>
            <div>
            <div className=' bg-purple-50 w-80 p-5 mb-4'>
                <p  className='mb-2 text-xl font-bold'>Job Details</p>
                <hr className='w-72' />
                <div>
                    <div className='mb-2'>
                                <div className='flex'>
                                    <div>
                                     <img className='h-4 w-4 mt-3' src="../assets/Icons/Frame.png" alt="" srcset="" />
                                    </div>
                                    <div>
                                    <p className='mt-2 mb-2'><span className='font-bold'>Salary : </span>{salary} (per month)</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                    <img className='h-4 w-4 mt-3' src="../assets/Icons/Frame-1.png" alt="" srcset="" />
                                    </div>
                                    <div>
                                    <p><span className='font-bold'>Title:</span> {jobTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                        <p className='font-bold text-xl mb-3'>Contact Information</p>
                        <hr className=' w-72'/>
                        <div className='flex mt-4 mb-2'>
                            <div>
                            <img className='h-4 w-4 mt-1' src="../assets/Icons/Frame-2.png" alt="" srcset="" />
                            </div>
                            <div>
                            <p><span className='font-bold'>Phone:</span> {phone}</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div>
                            <img className='h-4 w-4 mt-1' src="../assets/Icons/Frame-3.png" alt="" srcset="" />
                            </div>
                            <div>
                            <p><span className='font-bold'>Email:</span> {email}</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div>
                            <img className='h-4 w-4 mt-1' src="../assets/Icons/Frame-4.png" alt="" srcset="" />
                            </div>
                            <div>
                            <p><span className='font-bold'>Location:</span> {location}</p>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <div>
            <button onClick={() => handleAppliedJob (props.singleJob)} className='border text-white bg-blue-500 rounded p-2 w-80 text-center'>Apply Now</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SingleJob;