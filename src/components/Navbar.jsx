import React from 'react'

export default function Navbar(){
  return (<div>
    <img src="./assets/logo.png" className='my-5 mx-auto' alt="" />
    <div className='flex flex-row mx-auto justify-center gap-20 font-medium text-sm text-customGreen'>
    <a className='cursot-pointer'>Home</a>
    <a className='cursot-pointer'>About Konnect</a>
    <a className='cursot-pointer'>Contact</a>
    </div>
    </div>
)
}