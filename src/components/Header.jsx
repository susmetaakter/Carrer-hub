import React, { useEffect, useState } from 'react';
import Category from './Category';
import Feature from './Feature';

const Header = () => {

  const [categories, setCategories] = useState([]);
  const [features, setFeatures] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState('See All Jobs');


    useEffect(() => {
        fetch('data1.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    useEffect(() => {
      fetch('data2.json')
      .then(res => res.json())
      
      .then(data => 
          // const sliced = data.slice(0, 4);
          setFeatures(data)
      )
  },[])

  const handleClick = () => {
      setShowMore(true);
      setButtonText('Show Less');
    };
  
    const handleReset = () => {
      setShowMore(false);
      setButtonText('See All Jobs');
    };


    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between py-4 px-4 lg:px-8 xl:px-16  bg-indigo-50">
      <div>
        <h1 className="text-4xl font-bold mt-4">One Step <br /> Closer To Your <br />
        <span className=' text-blue-400'> Dream Job</span></h1>
        <p className='mt-4 text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 lg:py-2 lg:px-4 rounded mt-4">
        Get Started
        </button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src="./assets/All Images/P3OLGJ1 copy 1.png" alt="Image" className="h-full w-full" />
      </div>
      </div>
      <div>
        <p className=' font-semibold text-4xl text-center mt-6 mb-2'>Job Category List</p>
        <p className='text-sm text-gray-500 text-center mb-12'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 py-4 px-4 lg:px-8 xl:px-16'> 
          {
            categories.map(category => <Category 
             category={category}
            />)
          }
        </div>
      </div>
      <div className='mb-8'>
      <p className=' font-semibold text-4xl text-center mt-6 mb-2'>Featured Jobs</p>
        <p className='text-sm text-gray-500 text-center mb-12'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className='my-container'>
            <div className='grid gap-6 -mb-1 lg:grid-cols-2 sm:grid-cols-1 py-4 px-4 lg:px-8 xl:px-16'>
              {
                features.slice(0, showMore ? features.length : 4).map(feature => <Feature 
                key = {feature.id}  
                feature = {feature}
                />)
                } 
            </div>
          </div>
          {features.length > 4 && (
        <button onClick={showMore ? handleReset : handleClick} className="btn bg-indigo-400 text-white text-xl rounded mt-4 border-none lg:ms-[620px] mb-12">
        {buttonText} 
        </button>
            )}
          </div>

        </div>
    );
};

export default Header;

