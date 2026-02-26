import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import YourCart from '../pages/MyOrders';


const Navbar = () => {
  
  return (
    <nav className='bg-white '>
        <div className='container mx-auto py-4 flex justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold logofont text-[#FF7A18]'>Chuck's Kitchen</h1>
            </div>
            
            <div className='hidden lg:block'>
                <ul className='gap-40 items-center flex'>
                    <li>
                        <NavLink to="/" className='text-[#FF7A18] text-xl'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Explore" className='text-[#1F2937] text-xl hover:text-[#FF7A18]'>Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/MyOrders" className='text-[#1F2937] text-xl hover:text-[#FF7A18]'>My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Account" className='text-[#1F2937] text-xl hover:text-[#FF7A18]'>Account</NavLink>
                    </li>
                    <li className=''>
                        <div>
                            <button className='rounded-md bg-[#FF7A18] py-3 text-[#FFFFFF] px-9'>Log in</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='lg:hidden'>
                <IoMdMenu  className='text-4xl'/>
            </div>
            
        </div>
 
    </nav>
  )
}

export default Navbar
