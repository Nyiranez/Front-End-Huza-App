import React, { Fragment, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdOutlineModeNight, MdLightMode } from 'react-icons/md';
import Logo from './assets/images/logo.jpeg'
import Huza from './assets/images/huzaa.jpeg'
import { useContext } from 'react'
import { AppContext } from './assets/pages/context'

import { Popover, PopoverButton, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';



export const Layout = () => {
    const { mode, setMode } = useContext(AppContext)
   

    return (
        <div>
            <div className={`flex flex-row justify-between items-center fixed z-10 top-0 w-full h-24 pt-5 px-40 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'}`}>
                <Link to={"/"}> {mode ? <img src={Logo} alt="" className='h-24 w-24'></img> : <img src={Huza} alt="" className='h-24 w-24'></img>} </Link>
                <div className=' flex gap-10'>
                    <NavLink to="/home" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Home</NavLink>
                    <NavLink to="layout/aboutus" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>AboutUs</NavLink>
                    <NavLink to="layout/contact" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Contact</NavLink>
                    <Popover className='relative'>
                        {({ open }) => (
                           <div>
                                <Popover.Button
                                className={`
                                    ${open ? 'text-white' : 'text-white/90'}
                                    group inline-flex items-center rounded-md   px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                >
                                <p className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Services</p>
                                <IoIosArrowDown className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600 mt-1"} `}/>
                                </Popover.Button>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                >
                                <Popover.Panel className="absolute left-0 z-10 mt-3 w-[20rem] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 h-[10rem] bg-white flex justify-center gap-5 flex-col">
                                        <Link to={"/Internship"}>Internship</Link>
                                        <Link to={"/MakeupDesign"}>MakeupDesign</Link>
                                        <Link to={"/Plainters"}>Plainters</Link>
                                    </div>
                                </Popover.Panel>
                                </Transition>
                          </div>
                        )}
                   </Popover>
                </div>
                <div className='space-x-8 flex flex-row items-center'>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-4 text-white font-bold rounded-md'>
                        <NavLink to='/Signin'>Sign In</NavLink>
                    </button>
                    <button className={` px-6 py-4 rounded-md ${!mode ? "bg-gradient-to-r from-slate-400 to-slate-500" : "bg-black"} text-white font-bold`}>
                        <NavLink to="/Signup">Sign Up</NavLink>
                    </button>
                    {mode ? <MdOutlineModeNight onClick={() => setMode(!mode)} /> : <MdLightMode onClick={() => setMode(!mode)} className='bg-white' />}

                </div>
            </div>
            <Outlet />
        </div>
    );
};
