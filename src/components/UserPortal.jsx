import React from "react"
import ClientNavbar from "./ClientNavbar"
import Details from "./details"
export default function UserPortal(props){
    return(
        <div>
        <ClientNavbar setMounted={props.setMounted}/>
        <div className="px-20 py-5">
        <p className="my-5 text-customGreen font-bold text-3xl">Available Tutors</p>
        <p className="my-5 text-customGreen font-medium text-md">Choose a tutor to book</p>
        <div className="grid grid-cols-3 gap-10">
        <div className={`rounded-md border border-customGreen shadow-md p-4 flex flex-col gap-2 w-80`}>
            <p className="text-xl font-medium text-customGreen  ">Aubin Ntwali</p>
            <p><i class="fa-solid fa-building mr-3 text-customGreen"></i>King David Academy</p>
            <p><i class="fa-solid fa-graduation-cap mr-1 text-customGreen"></i>Bachelor's</p>
            <p><i className="fa-solid fa-location-dot text-customGreen mr-2"></i> Kicukiro</p>
            <div className="flex flex-row gap-2">
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            </div>
            <p className="bg-white w-28 text-center rounded-full p-1 text-customGreen font-semibold border border-gray-400">20$/hour</p>
            <div>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg "></i>
            </div>
            <button onClick={()=>props.setMounted(<Details setMounted={props.setMounted}/>)} className="p-2 bg-customGreen text-white my-3 rounded-lg">View documents</button>
        </div><div className="rounded-md border border-customGreen shadow-md p-4 flex flex-col gap-2 w-80">
            <p className="text-xl font-medium text-customGreen  ">Aubin Ntwali</p>
            <p><i class="fa-solid fa-building mr-3 text-customGreen"></i>King David Academy</p>
            <p><i class="fa-solid fa-graduation-cap mr-1 text-customGreen"></i>Bachelor's</p>
            <p><i className="fa-solid fa-location-dot text-customGreen mr-2"></i> Kicukiro</p>
            <div className="flex flex-row gap-2">
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            </div>
            <p className="bg-white w-28 text-center rounded-full p-1 text-customGreen font-semibold border border-gray-400">20$/hour</p>
            <div>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg "></i>
            </div>
            <button className="p-2 bg-customGreen text-white my-3 rounded-lg">View documents</button>
        </div><div className="rounded-md border border-customGreen shadow-md p-4 flex flex-col gap-2 w-80">
            <p className="text-xl font-medium text-customGreen  ">Aubin Ntwali</p>
            <p><i class="fa-solid fa-building mr-3 text-customGreen"></i>King David Academy</p>
            <p><i class="fa-solid fa-graduation-cap mr-1 text-customGreen"></i>Bachelor's</p>
            <p><i className="fa-solid fa-location-dot text-customGreen mr-2"></i> Kicukiro</p>
            <div className="flex flex-row gap-2">
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            </div>
            <p className="bg-white w-28 text-center rounded-full p-1 text-customGreen font-semibold border border-gray-400">20$/hour</p>
            <div>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg "></i>
            </div>
            <button className="p-2 bg-customGreen text-white my-3 rounded-lg">View documents</button>
        </div><div className="rounded-md border border-customGreen shadow-md p-4 flex flex-col gap-2 w-80">
            <p className="text-xl font-medium text-customGreen  ">Aubin Ntwali</p>
            <p><i class="fa-solid fa-building mr-3 text-customGreen"></i>King David Academy</p>
            <p><i class="fa-solid fa-graduation-cap mr-1 text-customGreen"></i>Bachelor's</p>
            <p><i className="fa-solid fa-location-dot text-customGreen mr-2"></i> Kicukiro</p>
            <div className="flex flex-row gap-2">
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            </div>
            <p className="bg-white w-28 text-center rounded-full p-1 text-customGreen font-semibold border border-gray-400">20$/hour</p>
            <div>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg "></i>
            </div>
            <button className="p-2 bg-customGreen text-white my-3 rounded-lg">View documents</button>
        </div>
        <div className="rounded-md border border-customGreen shadow-md p-4 flex flex-col gap-2 w-80">
            <p className="text-xl font-medium text-customGreen  ">Aubin Ntwali</p>
            <p><i class="fa-solid fa-building mr-3 text-customGreen"></i>King David Academy</p>
            <p><i class="fa-solid fa-graduation-cap mr-1 text-customGreen"></i>Bachelor's</p>
            <p><i className="fa-solid fa-location-dot text-customGreen mr-2"></i> Kicukiro</p>
            <div className="flex flex-row gap-2">
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            <p className="border border-black rounded-xl p-2">Mathematics</p>
            </div>
            <p className="bg-white w-28 text-center rounded-full p-1 text-customGreen font-semibold border border-gray-400">20$/hour</p>
            <div>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg"></i>
            <i class="fa-solid text-[#FFD700] fa-star text-lg "></i>
            </div>
            <button className="p-2 bg-customGreen text-white my-3 rounded-lg">View documents</button>
        </div>
        </div>
        </div>
        </div>
    )
}