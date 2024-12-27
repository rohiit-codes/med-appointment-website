import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointments = () => {

const {docId} = useParams()

const {doctors} = useContext(AppContext)

const [docInfo, setDocInfo] = useState(null)

const fetchDocInfo = async () => {
  const docInfo = doctors.find(doc => doc._id === docId)
  setDocInfo(docInfo);
  console.log(docInfo)
}

useEffect(() => {
  fetchDocInfo()
},[doctors, docId])

  return docInfo && (
    <div>
      {/* ------Doctor Details-------- */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 p-8 rounded-lg py-8 bg-white mx-2'>
          {/* --------Doc Info : name, degree, experience */}
          <p className='flex items-center gap-2 text-2xl text-gray-900'>{docInfo.name} 
          <img className='w-4' src={assets.verified_icon} alt="" />
          </p>

          <div className='flex gap-3'>
            <p className='text-gray-600 text-sm mt-1'>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='border border-gray-600 px-2 py-0.5 mt-0.5 rounded-full text-gray-600 text-xs'>{docInfo.experience}</button>
          </div>

          {/* -------Doctor About-------- */}
          <div>
            <p className='flex gap-2 text-gray-800 mt-5 font-medium'>About <img src={assets.info_icon} alt="" /></p>
            <p className='mt-2 text-gray-600 text-sm max-w-[700px]'>{docInfo.about}</p>
          </div>
          <p className='text-sm mt-3 text-gray-600 font-medium'>Appointment Fee : <span className='text-black'> {docInfo.fees}</span></p>
        </div>

      </div>
    </div>
  )
}

export default Appointments