import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <div>
            <div className="navbar py-4 px-4 lg:px-8 xl:px-16  bg-indigo-50">
  <div className="navbar-start">
    
    <a className=" font-bold text-2xl">JobLanding</a>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="lg:flex gap-6 px-1">
              <li>
                <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-400' : '' )} >Home</NavLink>
            </li>
            <li>
                <NavLink to='/Statistics' className={({isActive}) => (isActive ? 'text-blue-400' : '' )} >Statistics</NavLink>
            </li>
            <li> <NavLink to='/appliedjobs' className={({isActive}) => (isActive ? 'text-blue-400' : '' )} >Applied Job</NavLink></li>
            <li> <NavLink to='/blog' className={({isActive}) => (isActive ? 'text-blue-400' : '' )} >Blog</NavLink></li>
        
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" text-white bg-violet-700 text-xl p-2 rounded">Start Applying</a>
  </div>
</div>
</div>
        </div>
    );
};

export default Navbar;