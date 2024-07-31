import React from 'react'

export default function Documents(){
    return (
        
        <div className='flex flex-col gap-5'>
        <p className='text-lg text-customGreen font-medium mt-5'>Certificates</p>
        <div>
        <button className='w-20'><i class="fa-regular fa-file text-8xl text-customGreen"></i></button>
        <p className='text-customGreen w-60'>Coursera Certificate - Business Analytics</p>
        </div>
        <div>
        <button className='w-20'><i class="fa-regular fa-file text-8xl text-customGreen"></i></button>
        <p className='text-customGreen w-60'>Coursera Certificate - Business Analytics</p>
        </div>
        <div>
        <button className='w-20'><i class="fa-regular fa-file text-8xl text-customGreen"></i></button>
        <p className='text-customGreen w-60'>Coursera Certificate - Business Analytics</p>
        </div>
        </div>
    )
}