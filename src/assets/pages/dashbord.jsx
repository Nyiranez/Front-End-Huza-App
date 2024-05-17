import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { NavBar } from './navBar';
import { GoSearch } from "react-icons/go";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import Profile from '../images/IMG_8112.png'


export const Dashboard = () => {

    return (
        <div className='' >
            <div className='flex flex-col  justify-end items-end   '>
                <div className=" flex flex-row w-10/12  pl-[3rem] h-24 fixed top-0 z-9  justify-end pr-[3rem] items-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white"   >
                   
                    <div className='flex flex-row space-x-4 '>
                        <div className='bg-gray-200 w-16 rounded-full p-2'><MdOutlineLightMode /></div>
                        <div className='bg-gray-200 rounded-full p-2'> <IoIosNotificationsOutline />
                            <div className='w-2 h-2 bg-red-600 rounded-full animate-ping -mt-7 ml-3'></div>
                        </div>
                        <div className='bg-gray-200 rounded-full p-2'><BiMessageRoundedDots />
                            <div className='w-2 h-2 bg-red-600 rounded-full -mt-7 ml-3 animate-ping opacity-75'></div>
                        </div>
                        <div><img src={Profile} alt="" className='h-8 w-8 rounded-full'></img></div>
                    </div>

                </div>
            </div>
            <div className=''>
                <div className=''>
                    <NavBar />
                </div>
                <div className='w-10/12  flex flex-col justify-center items-center z-10'>
                    <Outlet />

                </div>
            </div>

        </div>

    )
}

