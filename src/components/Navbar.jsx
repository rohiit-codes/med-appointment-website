import React from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

const navigate = useNavigate()

const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)

  return (
    <div className='flex items-center py-4 mb-5 text-sm border-b border-gray-400 justify-between'>
        <img onClick={()=>{navigate('/'); scrollTo(0,0)}} className='w-40 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium '>
            <NavLink to= '/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-4/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-4/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-4/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-4/5 bg-primary m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>

            {
                token
                ?<div className='flex items-center cursor-pointer gap-2 group relative'>
                    <img className = 'w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className = 'w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 font-normal bg-stone-100 p-4 rounded flex flex-col gap-4'>
                            <p onClick = {()=> navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick = {()=> navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick = {()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick = {() => navigate('/login')} className='border-primary border-2 rounded-lg py-2 px-1.5'>Create account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar