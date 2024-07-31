import {React,useState} from 'react'
import ClientNavbar from './ClientNavbar'
import TutorDetails from './TutorDetails'
import PortalFooter from './portalFooter'
import Documents from './Documents'
export default function Details({setMounted}){
    const [content,setContent]=useState(<TutorDetails/>)
    const buttonStyle='p-2 bg-gray-200 border rounded-md text-customGreen'
    return (
        <div>
            <ClientNavbar setMounted={setMounted}/>
            <div className='px-20 py-10 flex flex-col gap-5'>

    <p className='text-customGreen font-semibold text-2xl'>Tutor details</p>
    <div className='flex flex-row gap-5 text-lg text-gray-600 '>
    <button onClick={()=>setContent(<TutorDetails setMounted={setMounted}/>)}  className={`my-auto ${buttonStyle}`}>Tutor details</button>
    <button onClick={()=>setContent(<Documents setMounted={setMounted}/>)} className={`my-auto ${buttonStyle}`}>Documents</button>
    </div>
            {content}

    </div>
        <PortalFooter/>
        </div>
    )
}