import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/SharedPage/Navbar';

const DashBoard = () => {
    return (
        <div>
            <Navbar/>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content container mx-auto mt-20">
    <Outlet/>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-cyan-200 text-base-content ">
      {/* Sidebar content here */}
      <li><Link to="mycart">MyCart</Link></li>
     
    </ul>

  
  </div>
</div>
        </div>
    );
};

export default DashBoard;