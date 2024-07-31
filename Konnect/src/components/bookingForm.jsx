import React from "react";
import ClientNavbar from "./ClientNavbar";
import PortalFooter from "./portalFooter";
// import TutorDetails from "./TutorDetails";
import Details from "./details";
import UserPortal from "./UserPortal";
export default function BookingForm({setMounted}){
    return(<>
    <ClientNavbar setMounted={setMounted}/>
        <div className="w-3/5 mx-auto border border-gray-200 rounded-md p-10 flex flex-col gap-3 text-customGreen my-10">
            <p className="text-xl font-medium ">Reach out to Aubin</p>
            <form action="" className="flex flex-col gap-3 my-3">
                <div className="flex flex-row gap-2"> 
                <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="First Name">First Name</label>
                <input type="text" name="firstName" className="p-2 rounded-md border border-gray-400" />
                </div>

                <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" name="lastName" className="p-2 rounded-md border border-gray-400" />
                </div>
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="p-2 rounded-md border border-gray-400"/> </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Description">Message</label>
                <textarea name="Description" className="p-2 rounded-md border border-gray-400" id=""></textarea>
                </div>
                 <button onClick={()=>setMounted(<UserPortal setMounted={setMounted}/>)} className="p-2  w-full rounded-md border border-customGreen hover:bg-customGreen hover:text-white">Send Message</button>
                 <button onClick={()=>setMounted(<Details setMounted={setMounted}/>)} className="p-2  w-full rounded-md border border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white">Cancel</button>
                
            </form>
        </div>
        <PortalFooter/>
        </>
    )
}