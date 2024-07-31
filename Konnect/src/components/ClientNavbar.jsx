import React from 'react'
import { auth } from "../firebase";
import SignIn from './auth/Signin';
import { onAuthStateChanged, signOut } from "firebase/auth";
export default function ClientNavbar({setMounted}){
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('Signed out')
            setMounted(<SignIn/>)
        })
        .catch((err)=> console.error(err))
        }
    return (
        <div className="bg-customGreen py-5 px-12 flex flex-row justify-between">
        <img src="./assets/logo-white.png" alt="" />
        <input type="text" className='p-2 h-10 my-auto px-5 w-80 rounded-xl text-gray-600' placeholder='Search course'/>
        <button onClick={()=>logOut()} className='flex flex-row gap-4'>
        <i class="fa-solid fa-right-from-bracket my-auto text-white"></i>
        <p className='text-white my-auto'>Log out</p>
        </button>
    </div>
    )
}