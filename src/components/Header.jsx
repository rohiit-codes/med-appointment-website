import React from 'react'
import {assets} from "../assets/assets"

const Header = () => {
  return (
    <div className='bg-primary sm:h-[620px] flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 '>
        {/* --------Left Side */}
        <div className='md:w-1/2 flex flex-col md:items-start items-center justify-center gap-4 py-10 m-auto sm:m-0 md:py-[10vw] md:mb-[-30px]'>
             <p className='text-2xl text-center md:text-start md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment<br/>With Trusted Doctors</p>
             <div className='flex flex-col md:flex-row items-center gap-3 text-sm sm:text-xs'>
                <img className='w-26' src={assets.group_profiles} alt="" />
                <p className='text-white text-center md:text-start'>Simply browse through our extensive list of trusted doctors,<br className='hidden md:block'/>schedule your appointment hassle-free.</p>
             </div>
             <a className='bg-white py-3.5 px-8 text-gray-600 rounded-full text-xs gap-2.5 flex flex-row items-center hover:scale-105 transition-all duration-300 m-auto md:m-0' 
             href="#speciality">Book appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
        </div>

        {/* ---------Right Side */}
        <div className='md:w-1/2 relative'>
             <img className= 'w-full md:absolute bottom-0  h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header