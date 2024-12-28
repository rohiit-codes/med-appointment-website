import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointments = () => {

const {docId} = useParams()

const {doctors, currencySymbol} = useContext(AppContext)

const [docInfo, setDocInfo] = useState(null);
const [docSlots, setDocSlots] = useState([]);
const [slotIndex, setSlotIndex] = useState(0);
const [slotTime, setSlotTime] = useState('');

const fetchDocInfo = async () => {
  const docInfo = doctors.find(doc => doc._id === docId)
  setDocInfo(docInfo);
}




// This is the function for setting the time slots

const getAvailableSlots = async () => {
  setDocSlots([])

  // Getting current date 
  
  let today = new Date()

  for(let i = 0 ; i < 7 ; i++){
    //getting date with index
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

  //Setting end time of the date with index
  let endTime = new Date()
  endTime.setDate(today.getDate() + i)
  endTime.setHours(21,0,0,0)


  // Setting Hours
  if(today.getDate() === currentDate.getDate()){
    currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
    currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
  } else {
    currentDate.setHours(10);
    currentDate.setMinutes(0);
  }

  let timeSlots = []


  while(currentDate < endTime) {
    let formattedTime = currentDate.toLocaleTimeString([], { hour : '2-digit', minute : '2-digit' })

    // Add slots to array
    timeSlots.push({
      datetime : new Date(currentDate),
      time : formattedTime
    })


    // Increment current time by 30 minutes
    currentDate.setMinutes(currentDate.getMinutes() + 30)
  }

  setDocSlots(prev => ([...prev, timeSlots]))

  }
}






useEffect(() => {
  fetchDocInfo()
},[doctors, docId])

useEffect(() => {
  getAvailableSlots()
}, [docInfo])

useEffect(() => {
  console.log(docSlots)
}, [docSlots])





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
          <p className='text-sm mt-3 text-gray-600 font-medium'>Appointment Fee : <span className='text-black'>{currencySymbol}{docInfo.fees}</span></p>
        </div>

      </div>
    </div>
  )
}

export default Appointments