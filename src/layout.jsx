import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineModeNight, MdLightMode } from 'react-icons/md';
import Logo from './assets/images/logo.jpeg'
import Huza from './assets/images/huzaa.jpeg'
import { useContext } from 'react'
import { AppContext } from './assets/pages/context'
export const Layout = () => {
    const {mode,setMode}= useContext(AppContext)

    return (
        <div>
            <div className={`flex flex-row justify-around items-center fixed z-10 top-0 w-full h-24 pt-4  ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'}`}>
              {mode ? <img src={Logo} alt="" className='h-24 w-24'></img> : <img src={Huza} alt="" className='h-24 w-24'></img>} 
                <div className='space-x-8'>
                    <NavLink to="/" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Home</NavLink>
                    <NavLink to="layout/contact" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Contact</NavLink>
                    <NavLink to="layout/services" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Services</NavLink>
                    <NavLink to="layout/aboutus" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>AboutUs</NavLink>
                </div>
                <div className='space-x-8 flex flex-row items-center'>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-4 text-white font-bold rounded-md'>
                        <NavLink to='Signin'>Sign In</NavLink>
                    </button>
                    <button className={` px-6 py-4 rounded-md ${!mode ? "bg-gradient-to-r from-slate-400 to-slate-500" : "bg-black"} text-white font-bold`}>
                        <NavLink to="/Signup">Sign Up</NavLink>
                    </button>
                    {mode ? <MdOutlineModeNight onClick={() => setMode(!mode)} /> : <MdLightMode onClick={() => setMode(!mode)}  className='bg-white'/>}
                   
                </div>
            </div>
            <Outlet />
        </div>
    );
};
