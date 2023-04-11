import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between py-4 px-4 lg:px-8 xl:px-16">
      <div>
        <h1 className="text-4xl font-bold">One Step <br /> Closer To Your <br /> Dream Job</h1>
        <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 lg:py-2 lg:px-4 rounded">
          Button
        </button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src="./assets/All Images/P3OLGJ1 copy 1.png" alt="Image" className="h-full w-full" />
      </div>
      </div>
        </div>
    );
};

export default Header;

