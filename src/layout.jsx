import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineModeNight, MdLightMode } from 'react-icons/md';
import Logo from './assets/images/huza.jpeg'
export const Layout = () => {
    const [mode, setMode] = useState(false);

    return (
        <div>
            <div className={`flex flex-row justify-around items-center border-b-2 border-gray-200 pt-4 pb-4 ${mode ? 'bg-green-400' : 'bg-white'}`}>
               <img src={Logo} alt="" className='h-40 w-40'></img>
                <div className='space-x-8'>
                    <NavLink to="/" className="text-gray-500">Home</NavLink>
                    <NavLink to="layout/contact" className="text-gray-500">Contact</NavLink>
                    <NavLink to="layout/services" className="text-gray-500">Services</NavLink>
                    <NavLink to="layout/aboutus" className="text-gray-500">AboutUs</NavLink>
                </div>
                <div className='space-x-8 flex flex-row items-center'>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-4 text-white font-bold'>
                        <NavLink to='#'>Sign In</NavLink>
                    </button>
                    <button className='bg-gradient-to-r from-slate-400 to-slate-500 px-6 py-4 text-white font-bold'>
                        <NavLink to="#">Sign Up</NavLink>
                    </button>
                    {mode ? <MdOutlineModeNight onClick={() => setMode(!mode)} /> : <MdLightMode onClick={() => setMode(!mode)} />}
                   
                </div>
            </div>
            <Outlet />
        </div>
    );
};
