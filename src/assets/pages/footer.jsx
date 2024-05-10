import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { RiSendPlane2Line } from "react-icons/ri";
import Huza from '../images/huzaa.jpeg'
import Logo from '../images/logo.jpeg'
import { useContext } from 'react'
import { AppContext } from './context'
export const Footer = () => {
    const { mode } = useContext(AppContext)
    return (
        <div>
            <div className={`flex flex-row justify-between h-64 border-1 border-t border-gray-700  px-40 ${!mode ?  'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'} bg-slate-900 pt-8 pb-8`}>
                <div className='space-y-4'>

                    <div className='flex flex-row space-x-4'>

                       
            {mode ? <img src={Logo} alt="" className='h-24 w-24'></img> : <img src={Huza} alt="" className='h-24 w-24'></img>}
                        <p className={` font-bold ${!mode ? "text-white" : "text-black"} text-4xl` }>GO STARTUP</p>

                    </div>
                    <div>
                        <p className='text-slate-500'>Lorem ipsum dolor sit amet, </p>
                        <p className='text-slate-500'>consectetur adipiscing elit.</p>
                    </div>



                </div>
                <div className='space-y-6'>
                    <p className={` font-bold ${!mode ? "text-white" : "text-black"}`}>HUZA</p>
                    <div>
                        <p className='text-slate-500'>Home</p>
                        <p className='text-slate-500'>Internship</p>
                        <p className='text-slate-500'>Plainters</p>
                        <p className='text-slate-500'>Makeup Design</p>
                    </div>


                    
                <div className='space-y-6'>
                    <p className={` font-bold ${!mode ? "text-white" : "text-black"}`}>SUPPORT</p>
                    <div>
                        <p className='text-slate-500'>Our Blogs</p>
                        <p className='text-slate-500'>Contact Us</p>

                    </div>
                    <p className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Email Address</p>
                        {/* <button className=' w-14 h-12 border-l-2 border-gray-500 pl-4' ><RiSendPlane2Line /></button> */}
                    

                </div>
                <div>
                    <p className={` font-bold ${!mode ? "text-white" : "text-black"}`}>Get in Touch</p>
                    <p className='text-slate-500'>Toll Free Customer care</p>
                    <p className={` font-bold ${mode ? "text-blue-400" : "text-white"}`}>+250786170670</p>
                    <p className="text-slate-500">Connect With Us WIth confidence</p>
                    <p1 className='text-slate-500'>copyright &copy; {new Date().getFullYear()} All rights reserved</p1>
                </div>
            </div>
        </div>
    )
}
