import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const NavMenu=<>
    <li><Link to="login">Login</Link></li>
      
      <li><Link to="signup">Register</Link></li>
      <li><Link to="explore">Explore</Link></li>
    
    
    </>
    
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
        {NavMenu}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavMenu}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;