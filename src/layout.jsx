import React, { Fragment, useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdOutlineModeNight} from 'react-icons/md';
import Logo from './assets/images/white.jpeg'
import Huza from './assets/images/black.jpeg'
import { useContext } from 'react'
import { AppContext } from './assets/pages/context'
import { Popover, Transition } from '@headlessui/react';
import { FiSun } from 'react-icons/fi';

export const Layout = () => {
    const { mode, setMode } = useContext(AppContext)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1024); 
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className={`flex flex-row justify-between items-center fixed w-full z-10 top-0   pt-3 px-32 shadow-sm  ${!mode ? 'bg-gradient-to-r from-slate-950 to-slate-700' : 'bg-white'}`}>
                <Link to={"/"}>
                    {mode ? <img src={Logo} alt="" className='h-[4rem] w-20 '></img> : <img src={Huza} alt="" className='h-[5rem]  pt-4 pb-5 '></img>}
                </Link>
                {isSmallScreen ? (
                    <div>
                        <Popover>
                            {({ open }) => (
                                <div>
                                    <Popover.Button
                                        className={`
                                        ${open ? 'text-white' : 'text-white/90'}
                                        group inline-flex items-center rounded-md text-base font-medium hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
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
                                        <Popover.Panel className=" mt-3 w-[20rem]  transform px-4 sm:px-0 lg:max-w-3xl">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 h-[40rem] bg-gray-50 text-black flex justify-center gap-5 flex-col">
                                                <NavLink to="/home" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Home</NavLink>
                                                <NavLink to="/layout/aboutus" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>AboutUs</NavLink>
                                                <NavLink to="/Contact" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Contact</NavLink>
                                                <NavLink to="/Services" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Services</NavLink>
                                                <div className=' flex flex-col'>
                                                    <div className='space-x-8 flex flex-row items-center'>
                                                        <button className='bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-4 text-white font-bold rounded-md'>
                                                            <NavLink to='/Signin'>Sign In</NavLink>
                                                        </button>
                                                        <button className={` px-6 py-4 rounded-md ${!mode ? "bg-gradient-to-r from-slate-400 to-slate-500" : "bg-black"} text-white font-bold`}>
                                                            <NavLink to="/Signup">Sign Up</NavLink>
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </div>
                            )}
                        </Popover>
                    </div>
                ) : (
                    <div className=' flex gap-10'>
                        <NavLink to="/home" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Home</NavLink>
                        <NavLink to="/layout/aboutus" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>AboutUs</NavLink>
                        <NavLink to="/Contact" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Contact</NavLink>
                        <NavLink to="/Services" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Services</NavLink>
                        
                    </div>
                
                )}
                  <div className='flex gap-5 pb-5 pt-5 '>
                       <button className='bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-white font-bold rounded-md'>
                             <NavLink to='/Signin'>Sign In</NavLink>
                        </button>
                        <button className={` px-6 py-3 rounded-md ${!mode ? "bg-gradient-to-r from-slate-700  to-slate-800" : "bg-black"} text-white font-bold`}>
                             <NavLink to="/Signup">Sign Up</NavLink>
                        </button>
                        {mode ? <MdOutlineModeNight onClick={() => setMode(!mode)} className=' text-2xl mt-4' /> : <FiSun onClick={() => setMode(!mode)} className=' text-white text-2xl mt-4' />}
                 </div>
               
            </div>
            <Outlet />
        </div>
    );
};
