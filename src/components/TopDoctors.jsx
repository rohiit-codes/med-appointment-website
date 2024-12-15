import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

const navigate = useNavigate()
const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className=' text-sm text-center'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-auto cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-center text-sm text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-md font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-xs'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button className='mt-10 px-10 py-2 text-sm bg-blue-50 rounded-full'>See more</button>
    </div>
  )
}

export default TopDoctors