import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

const {speciality} = useParams()

const [filterDoc, setFilterDoc] = useState([])

const navigate = useNavigate()
const {doctors} = useContext(AppContext)

const applyFilter = () => {
  if(speciality){
    setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
  } else{
    setFilterDoc(doctors)
  }
}

useEffect(()=> {
  applyFilter()
},[doctors,speciality])

  return (
    <div>
      <p>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row mt-6 gap-5 items-start'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p className='gap-3 border border-gray-300 pl-3 pr-16 transition-all cursor-pointer py-2 text-start rounded-md '>General physician</p>
          <p className='gap-3 border border-gray-300 pl-3 pr-16 transition-all cursor-pointer py-2 text-start rounded-md '>Gynecologist</p>
          <p className='gap-3 border border-gray-300 pl-3 pr-16 transition-all cursor-pointer py-2 text-start rounded-md '>Dermatologist</p>
          <p className='gap-3 border border-gray-300 pl-3 pr-16 transition-all cursor-pointer py-2 text-start rounded-md '>Pediatricians</p>
          <p className='gap-3 border border-gray-300 pl-3 pr-16 transition-all cursor-pointer py-2 text-start rounded-md '>Neurologist</p>
          <p className='gap-3 border border-gray-300 pl-3 pr-16 transition-all cursor-pointer py-2 text-start rounded-md '>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
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
          ))
          }

        </div>
      </div>
    </div>
  )
}

export default Doctors