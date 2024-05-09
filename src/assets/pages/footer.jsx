import React from 'react'
import { RiSendPlane2Line } from "react-icons/ri";
import Logo from '../images/huzaa.jpeg'
import { useContext } from 'react'
import { AppContext } from './context'
export const Footer = () => {
    const { mode } = useContext(AppContext)
    return (
        <div>
            <div className={`flex flex-row justify-around h-64 border-1 border-t border-gray-700 ${!mode ?  'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'} bg-slate-900 pt-8 pb-8`}>
                <div className='space-y-4'>

                    <div className='flex flex-row space-x-4'>
                        <img src={Logo} alt="" className='h-20 w-20'></img>
                        <p className='text-white font-bold'>GO STARTUP</p>
                    </div>
                    <div>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet, </p>
                        <p className='text-slate-400'>consectetur adipiscing elit.</p>
                    </div>



                </div>
                <div className='space-y-6'>
                    <p className='text-white font-bold'>SUPPORT</p>
                    <div>
                        <p className='text-slate-400'>Our Blogs</p>
                        <p className='text-slate-400'>Contact Us</p>
                    </div>

                    <div className='flex flex-row justify-center'>
                        <input type="text" placeholder='Email Address' className='px-6 py-4 h-12 bg-slate-600'></input>
                        <button className='bg-slate-600 w-14 h-12 border-l-2 border-gray-500 pl-4' ><RiSendPlane2Line /></button>
                    </div>

                </div>
                <div>
                    <p className='text-white font-bold'>Get in Touch</p>
                    <p1 className='text-slate-400'>copyright &copy; {new Date().getFullYear()} All rights reserved</p1>
                </div>
            </div>
        </div>
    )
}
