import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <>
        <div class="flex relative">
        {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
<div class="lg:w-1/2 w-[80%] px-10 py-5 lg:px-32 my-10 lg:my-auto absolute top-10 lg:static mx-[10%] lg:mx-0 rounded-md">
  <img src="./src/images/logo.png" class="mx-auto mt-5 lg:mx-0 lg:mt-0 w-40 lg:w-60" alt="" />
  <p class="font-bold text-3xl mt-10 lg:mt-16">Welcome back</p>
  <p class="text-sm text-gray-500 mt-3">Welcome back! Please enter your details</p>

  <form id="loginForm" onSubmit={onSubmit} class="flex flex-col mt-10 text-gray-500 font-medium">
    <label for="">E-mail:</label>
    <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                class="my-3 border text-md border-gray-400 lg:w-3/4 py-1 px-4 rounded-md"
                            />
    <label for="">Password:</label>
    <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="my-3 border text-md border-gray-400 lg:w-3/4 py-1 px-4 rounded-md"
                            />
    <button  type="submit"
      disabled={isSigningIn}
      className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
      >
      {isSigningIn ? 'Signing In...' : 'Sign In'}
      </button>
  </form>
</div>
<div class="w-full lg:w-1/2">
  <img src="./assets/login.jpg" class="h-full w-full" alt=""/>
</div>
  </div>
  </>
    )
}
export default Login