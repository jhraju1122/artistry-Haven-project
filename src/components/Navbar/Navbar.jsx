import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
 
 const Navbar = () => {

     const navigate = useNavigate();
     const handleBuy = () =>{
      navigate('/buy') 
      
     }
     
        const navLinks = 
    <div id='nav-button' className='flex btn gap-4'>
     <NavLink to ='/' className="hover:bg-blue-400 hover:text-white">Home</NavLink> 

     <NavLink to ='/buy' className="hover:bg-blue-400 hover:text-white">Buy</NavLink> 

     <NavLink to ='/sell' className="hover:bg-blue-400 hover:text-white">Sell</NavLink> 

     <NavLink to ='/editorial' className="hover:bg-blue-400 hover:text-white">Editorial</NavLink> 

     <NavLink to ='/paintings' className="hover:bg-blue-400 hover:text-white">Paintings</NavLink> 

     <NavLink to ='/login' className="hover:bg-blue-400 hover:text-white bg-white p-2 rounded-lg text-black">Log In</NavLink> 

     <NavLink to ='/signup' className="hover:bg-blue-400 hover:text-white bg-black rounded-lg">Sign Up</NavLink> 

    </div>
    return (
      <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Artistry Haven</a>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-[600px]" />
        </div>
        
      </div>
      
      <div className="flex-none gap-2">

      {navLinks}
        <div className="dropdown dropdown-end">
           
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
           tabIndex={0}
           className="menu menu-sm dropdown-content bg-base-100rounded-box z-[1] mt-3  w-52 p-2 shadow">
          <li className='bg-black text-white'>
          <Link to="/addCraftItems">Add Items</Link>  
          <Link to="/updateItems">Update Items</Link>  
          </li>          
          </ul>
        </div>
      </div>
    </div>
    );
 };
 
 export default Navbar;