import React from 'react';

const SingleJob = (props) => {
    const {jobDescription, jobResponsibility, educationalRequirements, salary, jobTitle, experiences, phone, email, location} = props.singleJob;
    const handleAppliedJob = props.handleAppliedJob;
    return (
        <div>
            {/* <p>{props.handleappliedjob}</p> */}
            <p className='text-center text-2xl font bold'>Job Details</p>
            <div className='grid gap-6 -mb-1 lg:grid-cols-2 sm:grid-cols-1 py-4 px-4 lg:px-8 xl:px-16'>
            <div>
              <p><span className='font-bold text-xl mb-2'>Job Description:</span> {jobDescription}</p>
              <p><span className='font-bold text-xl mb-2'>Job Description:</span> {jobDescription}</p>
              <p><span className='font-bold text-xl mb-2' >Job Responsibility:</span> {jobResponsibility}</p>
              <p><span className='font-bold text-xl mb-2'>Educational Requirement:</span> {educationalRequirements}</p>
              <p><span className='font-bold text-xl mb-2'>Experiences:</span> {experiences}</p>
            </div>

            <div className=''>
                <p  className='mb-2 text-xl font-bold'>Job Details</p>
                <hr />
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
                        <p className='font-bold text-xl mb-2'>Contact Information</p>
                        <hr />
                        <div className='flex'>
                            <div>
                            <img className='h-4 w-4 mt-3' src="../assets/Icons/Frame-2.png" alt="" srcset="" />
                            </div>
                            <div>
                            <p className='font-bold'>{phone}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                            <img className='h-4 w-4 mt-3' src="../assets/Icons/Frame-3.png" alt="" srcset="" />
                            </div>
                            <div>
                            <p><span className='font-bold'>:</span> {email}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                            <img className='h-4 w-4 mt-3' src="../assets/Icons/Frame-4.png" alt="" srcset="" />
                            </div>
                            <div>
                            <p><span className='font-bold'>Location:</span> {location}</p>
                            </div>
                        </div>
                        
                    </div>
                    <button onClick={() => handleAppliedJob (props.singleJob)} className='border text-white bg-blue-500 rounded p-2'>Applied Jobs</button>
            </div>
        </div>
        </div>
    );
};

export default SingleJob;