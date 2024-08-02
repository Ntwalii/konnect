import {React,useState} from "react";
import ClientNavbar from "./ClientNavbar";
import PortalFooter from "./portalFooter";
// import TutorDetails from "./TutorDetails";
import Details from "./details";
import UserPortal from "./UserPortal";
import emailjs from 'emailjs-com';
import { USER_ID, SERVICE_ID, TEMPLATE_ID } from '../EmailConfig';
export default function BookingForm({setMounted}){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const handleSendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      to_name: 'Recipient Name',
      message: message,
      user_email: email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        setMounted(<UserPortal setMounted={setMounted}/>)
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Error sending email: ' + err.text);
      });
  };
    return(<>
    <ClientNavbar setMounted={setMounted}/>
        <div className="w-3/5 mx-auto border border-gray-200 rounded-md p-10 flex flex-col gap-3 text-customGreen my-10">
            <p className="text-xl font-medium ">Reach out to Aubin</p>
            <form action="" onSubmit={handleSendEmail} className="flex flex-col gap-3 my-3">
                <div className="flex flex-row gap-2"> 
                <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="First Name">First Name</label>
                <input type="text" name="firstName" className="p-2 rounded-md border border-gray-400" />
                </div>

                <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" name="lastName"           value={name} 
          onChange={(e) => setName(e.target.value)}  className="p-2 rounded-md border border-gray-400" />
                </div>
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="p-2 rounded-md border border-gray-400"           value={email} 
          onChange={(e) => setEmail(e.target.value)} /> </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Description">Message</label>
                <textarea name="Description" className="p-2 rounded-md border border-gray-400" id=""           value={message} 
          onChange={(e) => setMessage(e.target.value)} ></textarea>
                </div>
                 <button type="submit" className="p-2  w-full rounded-md border border-customGreen hover:bg-customGreen hover:text-white">Send Message</button>
                 <button onClick={()=>setMounted(<Details setMounted={setMounted}/>)} className="p-2  w-full rounded-md border border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white">Cancel</button>
                
            </form>
        </div>
        <PortalFooter/>
        </>
    )
}