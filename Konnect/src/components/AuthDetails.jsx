import {React,useEffect,useState} from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthDetails(){
const [authUser,setAuthUser]=useState(null)
useEffect(()=>{
    const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
            setAuthUser(user)
        }else{
            setAuthUser(null)
        }
    })
    return listen
},[])
const logOut=()=>{
signOut(auth)
.then(()=>{
    console.log('Signed out')
})
.catch((err)=> console.error(err))
}

return(
    <>
    {/* <div>{authUser?<><p>{`Signed In as ${authUser.email}`}</p>
    <button onClick={logOut}>Sign Out</button></>
    :<p>Signed out</p>}</div> */}
    </>
)
}