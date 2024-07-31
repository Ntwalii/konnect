import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import SignIn from './auth/Signin'
import Join from './Join'
export default function Homepage({setMounted,setAuthUser}){
  return (<>
    <Navbar />
    <div className='flex flex-row my-10'>
        <img src="/assets/tutors.png" className='w-full' alt="" />
        {/* <img src="./assets/connect.png" className='' alt="" /> */}
    </div>
    <div className='px-20'>
        <div className='flex flex-row my-24'>
            <p className='font-bold text-3xl w-1/2'>ABOUT <span className='text-customGreen'>KONNECT</span></p>
            <p className='w-1/2 text-right font-normal'> <span className='text-customGreen'>Konnect</span> believes that every student deserves the opportunity to excel, and our platform is designed to provide tailored tutoring solutions that cater to individual learning styles and needs. By connecting students with knowledgeable tutors, we aim to create a supportive and dynamic learning environment that fosters growth and success.</p>
        </div>
        <div className='flex flex-row my-24'>
            <div className='w-1/2'>
            <img className='' src="./assets/students.png" alt="" />
            </div>
            <div className='w-1/2 flex flex-col relative'>
            <p className='text-right font-normal'> At <span className='text-customGreen'>Konnect</span>, we believe that students are the future workforce of our nation. They deserve digitized, impeccable education to ensure their success and growth.</p>
            <button className='border-2 border-customGreen w-32 py-2 absolute bottom-0 right-0 rounded-md hover:bg-customGreen hover:border-white hover:text-white' onClick={()=>setMounted(<Join setAuthUser={setAuthUser} setMounted={setMounted}/>)}>Join Us</button>
            </div>
        </div>
    </div>
    <div className='bg-customGreen flex flex-row py-20 justify-between px-20'>
    <div>
    <div className='w-64 h-64 bg-white rounded-md'>
        card 1
    </div>
    <p>Happy birthday</p>
    </div>
    <div>
    <div className='w-64 h-64 bg-white rounded-md'>
        card 1
    </div>
    <p>Happy birthday</p>
    </div>
    <div>
    <div className='w-64 h-64 bg-white rounded-md'>
        card 1
    </div>
    <p>Happy birthday</p>
    </div>
    </div>

    <div className='flex flex-row py-20 px-20'>
        <div className='w-1/2'>
            <img src="./assets/component.png" alt="" />
        </div>
        <div className='w-1/2 px-10'>
            <p className='text-customGreen font-semibold'>HIRING TUTORS FROM AROUND THE GLOBE!!</p>
            <p className='text-3xl py-5 font-semibold text-customGreen'> <span className='text-[#1B3C74]'>Online</span> tutoring</p>
                <p className='text-[#77829D] mr-10 py-5 text-sm'>Our goal is to deliver quality education in a courteous, respectful, and compassionate manner. We hope you will allow us to support your learning journey and strive to be your first and best choice for tutoring services.</p>
        <div className='flex flex-col gap-5 mt-7'>
        <p className='flex flex-row gap-3'><img src="./assets/outline.png" alt="" />Stay Updated with Your Learning Progress</p>
        <p className='flex flex-row gap-3'><img src="./assets/outline.png" alt="" />Track Your Achievements Online</p>
        <p className='flex flex-row gap-3'><img src="./assets/outline.png" alt="" />Manage Your Tutoring Sessions</p>
        </div>
        </div>
    </div>
    <Footer />
    </>
)
}