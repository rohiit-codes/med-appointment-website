import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div>
                <img className='w-1/4' src={assets.logo} alt="" />
                <p className='mt-6 w-full md:w-2/3 text-gray-800 leading-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* center section */}
            <div className='flex flex-col items-start'>
                <p className='text-lg font-semibold'>COMPANY</p>
                <div className='flex flex-col gap-2 mt-2 text-gray-700'>
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Delivery</a>
                    <a href="">Privacy policy</a>
                </div>
            </div>

            {/* right section */}
            <div className='flex flex-col items-start'>
                <p className='text-lg font-semibold'>GET IN TOUCH</p>
                  <div className='flex flex-col gap-2 mt-2 text-gray-700'>
                     <p>+0-000-000-000</p>
                     <p>greatstackdev@gmail.com</p>
                  </div>
            </div>

        </div>

        <div>
            <hr/>
            <p className='text-center mt-2 py-5 text-sm font-semibold text-gray-800'>Copyright 2024 @rohiitcodes - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer