import React from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import Signup from './Signup'
import AuthDetails from '../AuthDetails'
import { onSnapshot,addDoc,doc,deleteDoc,setDoc } from "firebase/firestore"
import { db } from "../../firebase"
import Login from '../Login'
import UserPortal from '../UserPortal'
import Details from '../details'
import BookingForm from '../bookingForm'
import Homepage from "../Homepage";
import TutorPortal from "../TutorPortal";
const SignIn=(props)=>{
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const signIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((useCredential)=>{   
            props.setMounted(props.role==="Student"?<UserPortal setMounted={props.setMounted}/>:<TutorPortal setMounted={props.setMounted}/>)
        })
        .catch((error)=>{
            console.log(error)
        })
    }   
    return (
         <div class="flex relative">
 <div class="lg:w-1/2 w-[80%] px-10 py-5 lg:px-32 my-10 lg:my-auto absolute top-10 lg:static mx-[10%] lg:mx-0 rounded-md">
   <img src="./assets/logo.png" class="mx-auto lg:mx-0 lg:mt-0 " alt="" />
   <p class="font-bold text-3xl mt-10 lg:mt-16">Welcome back</p>
   <p class="text-sm text-gray-500 mt-3">Welcome back! Please enter your details</p>
   <p class="text-md text-gray-500 mt-3">New to Konnect? <button onClick={()=>props.setMounted(<Signup setMounted={props.setMounted}/>)} className="text-customGreen">Create account</button></p>
 
   <form id="loginForm" onSubmit={signIn} class="flex flex-col mt-10 text-gray-500 font-medium">
     <label for="">E-mail:</label>
     <input type="email" class="my-3 border text-md border-gray-400 lg:w-3/4 py-1 px-4 rounded-md" id="email" 
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     />
     <label for="">Password:</label>
     <input type="password" class="my-3 border text-md border-gray-400 lg:w-3/4 py-1 px-4 rounded-md" id="password" 
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     />
     <button class="my-3 text-white border-2 mb-5 lg:mb-0  lg:w-3/4 py-1 rounded-md bg-customGreen">Log in</button>
   </form>
 </div>
 <div class="w-full lg:w-1/2">
   <img src="./assets/login.jpg" class="h-full w-full" alt=""/>
 </div>

   </div>
   
    )
}
export default SignIn