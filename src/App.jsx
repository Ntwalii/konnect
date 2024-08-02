import { useEffect, useState } from 'react'
import SignIn from './components/auth/Signin'
import Signup from './components/auth/Signup'
import AuthDetails from './components/AuthDetails'
import { onSnapshot,addDoc,doc,deleteDoc,setDoc } from "firebase/firestore"
import { db } from "./firebase"
import Login from './components/Login'
import UserPortal from './components/UserPortal'
import Details from './components/details'
import BookingForm from './components/bookingForm'
import Homepage from './components/Homepage'
import Middle from './components/Middle'
import TutorPortal from './components/TutorPortal'
function App() {
  const [authUser,setAuthUser]=useState(null)
  const [count, setCount] = useState(0)
  const [isSignedIn, setIsSignedIn]=useState(false)
  const [mounted,setMounted]=useState(null)
  return mounted? (
mounted 
  ):
  (<Homepage
    setMounted={setMounted}
    setAuthUser={setAuthUser}
    />)



}

export default App
