import React from "react"

export default function Login(){
    return (
        <>
        <div class="flex relative">
<div class="lg:w-1/2 w-[80%] px-10 py-5 lg:px-32 my-10 lg:my-auto absolute top-10 lg:static bg-white mx-[10%] lg:mx-0 rounded-md">
  <img src="./src/images/logo.png" class="mx-auto mt-5 lg:mx-0 lg:mt-0 w-40 lg:w-60" alt="" />
  <p class="font-bold text-3xl mt-10 lg:mt-16">Welcome back</p>
  <p class="text-sm text-gray-500 mt-3">Welcome back! Please enter your details</p>

  <form id="loginForm" class="flex flex-col mt-10 text-gray-500 font-medium">
    <label for="">E-mail:</label>
    <input type="email" class="my-3 border border-gray-400 lg:w-3/4 py-1 px-4 rounded-md" id="email" />
    <label for="">Password:</label>
    <input type="password" class="my-3 border border-gray-400 lg:w-3/4 py-1 px-4 rounded-md" id="password" />
    <button class="my-3  bg-customBlue border-2 mb-5 lg:mb-0  lg:w-3/4 py-1 rounded-md">Log in</button>
  </form>
</div>
<div class="w-full lg:w-1/2">
  <img src="./assets/login.jpg" class="h-full w-full" alt=""/>
</div>
  </div>
  </>
    )
}