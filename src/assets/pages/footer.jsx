// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { RiSendPlane2Line } from "react-icons/ri";
import Huza from '../images/black.jpeg'
import Logo from '../images/white.jpeg'
import { useContext } from 'react'
import { AppContext } from './context'
export const Footer = () => {
    const { mode } = useContext(AppContext)
    return (
        <div>



         

            <div className={`relative shadow-lg ${!mode ?  'bg-gradient-to-r from-slate-950 to-gray-900' : 'bg-white'} bg-slate-900 pt-8 pb-8`}>
                <div className=' grid lg:grid-cols-4 grid-cols-2 justify-between   gap-12  px-32'>                <div className='space-y-5'>
                    {/* <div className='flex flex-row space-x-5'>

                        {mode ? <img src={Logo} alt="" className='h-24 w-24'></img> : <img src={Huza} alt="" className='h-24 w-24'></img>}
                        

                    </div> */}
                    <div className=' flex flex-col gap-3'>
                        <p className={` font-bold ${!mode ? "text-white" : "text-black"}`}>HUZA APP </p>
                        <p className='text-slate-500'> to connect Unemployement</p>
                        <p className='text-slate-500'> Who are Skilled</p>
                        <p className='text-slate-500'> And the clients</p>
                    </div>
                </div>
                <div className='space-y-6'>
                    <p className={` font-bold ${!mode ? "text-white" : "text-black"}`}>HUZA</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-slate-500'>Home</p>
                        <p className='text-slate-500'>Curnary Art</p>
                        <p className='text-slate-500'>Painting</p>
                        <p className='text-slate-500'>Makeup Design</p>
                    </div>
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
                <div className=' flex flex-col gap-3'>
                    <p className={` font-bold ${!mode ? "text-white" : "text-black"}`}>Get in Touch</p>
                    <p className='text-slate-500'>Toll Free Customer care</p>

                    <p className={` font-bold ${mode ? "text-blue-400" : "text-white"}`}>+250786170670</p>
                    <p className="text-slate-500">Connect With Us WIth confidence</p>
                    <p className='text-slate-500'>copyright &copy; {new Date().getFullYear()} All rights reserved</p>
                    <p className="text-slate-500">Developed by Sylvie and Louise</p>
                </div>
                </div>
                <div  className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-800 via-transparent to-transparent"></div>
            </div>
        </div>
    )
}

