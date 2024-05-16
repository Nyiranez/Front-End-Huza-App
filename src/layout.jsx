// import React, {  useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdOutlineModeNight, MdLightMode } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import Logo from './assets/images/logo.jpeg'
import Huza from './assets/images/huzaa.jpeg'
import { useContext, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from './assets/pages/context'
import { Footer } from './assets/pages/footer';

// import './App.css'

// import { Popover, PopoverButton, Transition } from '@headlessui/react';
// import { IoIosArrowDown } from 'react-icons/io';

export const Layout = () => {
    const { mode, setMode } = useContext(AppContext)
    const [menu, setMenu] = useState(false)
    function handlemenu() {
        setMenu(!menu)
    }
    return (
        <div>
          
                <div className={`flex flex-row justify-between items-center fixed z-10 top-0 w-full h-24 pt-5 px-40 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'}`} >
                    <Link to={"/"}>
                        {mode ? <img src={Logo} alt="" className='h-24 w-24'></img> : <img src={Huza} alt="" className='h-24 w-24'></img>}
                    </Link>

                    <div className='flex flex-row space-x-8' >

                        <NavLink to="/" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Home</NavLink>
                        <NavLink to="/layout/aboutus" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>AboutUs</NavLink>
                        <NavLink to="/layout/contact" className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `}>Contact</NavLink>
                        <div>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <p className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `} onClick={handlemenu}>Sercices</p>
                                {!menu ? <IoIosArrowDown onClick={handlemenu} className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `} /> : <IoIosArrowUp onClick={handlemenu} className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"} `} />}

                            </div>

                        </div>


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

                 
                </div >
                <Outlet />
                {menu && <div className=' h-52 w-44   bg-slate-800 absolute top-24 left-[50rem]  flex flex-col space-y-4 pl-6 pt-4'>
                    <NavLink to="/Brainding" className="text-white hover:underline hover:text-blue-700">Brainding</NavLink>
                    <NavLink to="/CurnaryArt" className="text-white hover:underline hover:text-blue-700">CurnaryArt</NavLink>
                  
                    <NavLink to="/MakeupDesign" className="text-white hover:underline hover:text-blue-700">MakeupDesign</NavLink>
                    <NavLink to="/Plainters" className="text-white hover:underline hover:text-blue-700">Plainters</NavLink>
                </div>}
               
                <div>
                    <Footer/>
                </div>


        </div >
    );
};
