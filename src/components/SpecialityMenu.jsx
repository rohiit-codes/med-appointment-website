import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className=' text-sm text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center text-center gap-6 w-full pt-3 overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex-shrink-0' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-24 mt-2' src={item.image} alt="" />
                    <p className='mt-2'>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu