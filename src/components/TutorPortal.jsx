import React from 'react'
import ClientNavbar from './ClientNavbar'
export default function TutorPortal({setMounted}){
    const [isHidden,setIsHidden]=React.useState(false)
return(
    <div>
    <ClientNavbar setMounted={setMounted}/>
    <div className="px-20 flex flex-row ">
        <div className=' text-customGreen py-10 text-sm flex flex-col gap-4 w-1/2'>
    <p className='text-2xl font-semibold'>My Information</p>
    <div className='flex flex-col gap-2'>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Names : </p><p>Aubin Ntwali</p>    
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Email : </p><p>ntwaliaubin@gmail.com</p>    
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Phone Number : </p><p>+250789434004</p>    
    </div>
    </div>
    <p className='text-xl font-medium'>Education</p>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Bachelor of Science</p><p>African Leadership University</p>
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Bachelor of Science</p><p>African Leadership University</p>
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Bachelor of Science</p><p>African Leadership University</p>
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Bachelor of Science</p><p>African Leadership University</p>
    </div>
    <p className='text-xl font-medium'>Experience</p>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Mathematics |</p><p>African Leadership University</p>
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Biology |</p><p>African Leadership University</p>
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Mathematics |</p><p>African Leadership University</p>
    </div>
    <div className='flex flex-row gap-3'>
    <p className='text-gray-500'>Physics |</p><p>African Leadership University</p>
    </div>
    <p className='text-xl font-medium'>Pay rate /hour</p>
    <div className='flex flex-row gap-3'>
    <p>20$</p>
    </div>
    <button className='w-1/2 bg-customGreen text-white py-2 rounded-md' onClick={()=>setIsHidden(true)}>Update Information</button>
    </div>
   { isHidden && <div className='w-1/2 my-10 mx-10 '>
        <p className='text-customGreen mb-5 text-xl font-semibold'>Update Information</p>
        <form action="" className='flex flex-col gap-3'>
            <input type="text" placeholder='Aubin Ntwali' className="p-2 rounded-md border border-gray-400 w-full" />
            <input type="email" placeholder='ntwaliaubin@gmail.com' className="p-2 rounded-md border border-gray-400 w-full"/>
            <input type="number" placeholder='+250789434004' className="p-2 rounded-md border border-gray-400 w-full"/>
            <p className='text-customGreen text-xl font-medium'>Education</p>
            <div className='flex flex-row gap-3'>
            <input  type='text' placeholder='Bachelor of Science' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input type='text' placeholder='African Leadership University' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>
            <div className='flex flex-row gap-3'>
            <input  type='text' placeholder='Bachelor of Science' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input type='text' placeholder='African Leadership University' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>
            <div className='flex flex-row gap-3'>
            <input  type='text' placeholder='Add new degree' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input type='text' placeholder='Add new School' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>
            <p className='text-customGreen text-xl font-medium'>Experience</p>
            <div className='flex flex-row gap-3'>
            <input  type='text' placeholder='Mathematics' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input type='text' placeholder='African Leadership University' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>
            <div className='flex flex-row gap-3'>
            <input  type='text' placeholder='Mathematics' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input type='text' placeholder='African Leadership University' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>
            <div className='flex flex-row gap-3'>
            <input  type='text' placeholder='Mathematics' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input type='text' placeholder='African Leadership University' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>

            <p className='text-customGreen text-xl font-medium'>Lessons</p>
            <div className='flex flex-row gap-3 '>
            <input  type='text' placeholder='Mathematics' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input  type='text' placeholder='Mathematics' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            <input  type='text' placeholder='Mathematics' className="p-2 rounded-md border border-gray-400 w-1/2"/>
            </div>
            <button className='bg-customGreen my-5 py-2 rounded-md text-white' onClick={()=>setIsHidden(false)}>Update</button>
        </form>
    </div>}
    </div>
    </div>
)
}