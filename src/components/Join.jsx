import React from 'react'
import Navbar from './Navbar'
import SignIn from './auth/Signin'
import Signup from './auth/Signup'
export default function Join({setMounted}){
    return(
        <>
        <Navbar/>
        <div class="my-10 py-10 border border-customGreen w-[80%] mr-[10%] ml-[10%] lg:h-[80vh] pb-10 lg:pb-0 rounded-md">
        <p class="text-center mx-2 lg:mx-32 pt-10 text-[#494949] font-medium text-2xl">Welcome to <span class="text-customGreen">Konnect</span>, choose your next step closer to impeccable <span class="text-customGreen">education</span></p>

        <div class="flex flex-col lg:flex-row gap-12 justify-center mt-10">
              <button onClick={()=>{
                return setMounted(<Signup role={"Tutor"} setMounted={setMounted}/>)
              }} class="border border-customGreen w-72 h-72 mx-auto lg:mx-0 rounded-md hover:border-2 hover:border-[#2DAE49]">
                <a>
                    <img src="./assets/register.png" class="mx-auto mt-10" alt=""/>
                    <p class="text-center mx-auto pt-10 text-[#494949] font-medium text-xl">Tutor</p>
                </a>
                </button>
                <button onClick={()=>{
                return setMounted(<Signup role={"Student"} setMounted={setMounted}/>)
              }} class="border border-customGreen w-72 h-72 mx-auto lg:mx-0 rounded-md hover:border-2 hover:border-[#2DAE49]">
                    <a>
                        <img src="./assets/avatar.png" class="mx-auto mt-10" alt=""/>
                    <p class="text-center mx-5 pt-10 text-[#494949] font-medium text-xl">Student</p>
                    </a>
                </button>
        </div>
    </div>
    </>
    )
}