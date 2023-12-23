import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Navbar = () => {
    const {users,Logout}=useContext(AuthContext)
    console.log(users);
    console.log(Logout);
    const NavMenu=<>
   
      
      
      <li><Link to="/explore">Explore</Link></li>
      {users&&<li><Link to="dashboard/mycart">Dashboard</Link></li> }
      {users? <li><button onClick={Logout} >logout <span>{users?.name}</span></button></li> :  <li><Link to="/login">Login</Link></li>}
  {
        users&&  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={users?.image}/>
        </div>
      </label>
      }
    
    
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
    <Link to="/" className="btn btn-ghost text-xl">JFH</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavMenu}
    </ul>
  </div>
  <div className="navbar-end">
  <label htmlFor="my-drawer-2" className="btn btn-ghost  lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  </div>
</div>
        </div>
    );
};

export default Navbar;