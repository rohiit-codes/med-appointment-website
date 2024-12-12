import React from 'react'
import {assets} from "../assets/assets"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 mb-5 text-sm border-b border-gray-400 justify-between'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium '>
            <NavLink>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto'/>
            </NavLink>
            <NavLink>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto'/>
            </NavLink>
            <NavLink>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto'/>
            </NavLink>
            <NavLink>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto'/>
            </NavLink>
        </ul>
        <button>Create account</button>
    </div>
  )
}

export default Navbar