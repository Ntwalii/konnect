import React from 'react'
import BookingForm from './bookingForm'

export default function TutorDetails({setMounted}){
    return(

        <div className='text-sm flex flex-col gap-5'>
        <p className='text-lg text-customGreen font-medium mt-5'>Personal Information</p>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Tutor name</p>
            <p>Aubin Ntwali</p>
            </div>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Email address</p>
            <p>someone@example.com</p>
            </div>
            <div className='flex flex-row gap-5'>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Status</p>
            <p>Employed</p>
            </div>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Rate</p>
            <p>20$/hour</p>
            </div>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Phone Number</p>
            <p>+250789434004</p>
            </div>
            </div>
            <div className='flex flex-col gap-5'>
            <p className='text-lg text-customGreen font-medium mt-5'>Education</p>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Bachelor of Science</p>
            <p>Bsc Education - University of Rwanda</p>
            </div>
            <div className='flex flex-col gap-1'>
            <p className='text-gray-400'>Masters of Science</p>
            <p>Msc Business Analytics - University of Kigali</p>
            </div>
            </div>
            <button onClick={()=>setMounted(<BookingForm setMounted={setMounted}/>)} className="py-2 px-7x bg-customGreen text-white my-3 rounded-lg w-80">Book</button>
        </div>

    )
}