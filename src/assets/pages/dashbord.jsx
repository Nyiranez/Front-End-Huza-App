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
                <div className=" flex flex-row w-10/12  pl-[3rem] h-24 fixed top-0 z-9  justify-between pr-[3rem] items-center  bg-white"   >
                    <div className='flex flex-row space-x-4 justify-center items-center'>
                        <GoSearch />
                        <select className=' space-y-4 px-8 py-4' >
                            <option value="">Find By Categoty</option>
                            <option value="CarnaryArt">CarnaryArt</option>
                            <option value="Brainding">Brainding</option>
                            <option value="Prainters">Painters</option>
                            <option value="MakeUp">MakeUp</option>
                        </select>
                    </div>
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

