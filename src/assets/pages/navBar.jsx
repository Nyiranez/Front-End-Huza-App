import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FcBarChart } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";

import axios from "axios";
import Huza from '../images/black.jpeg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const [logoutMessage, setLogoutMessage] = useState('');
    let navigate = useNavigate();

    const handleLogOut = () => {
        axios.get("https://huza-backend-app-api-1.onrender.com/api/allUsers/logout")
        .then((resp) => {
            localStorage.clear()
            console.log(resp.data);
            setLogoutMessage('Successfully logged out.');
            setTimeout(() => {
                navigate("/");
            }, 2000); // Delay navigation by 2 seconds
        }).catch((error) => {
            console.log(error);
            alert("Failed to log out");
        });
    };
    
    return (
        <div className='' >
            <div className='h-screen bg-blue-950 w-2/12 fixed  top-0 left-0 pt-8 px-14'>
                <div className='flex flex-row py-14'>
                    <img src={Huza} alt="" className='w-8 h-8'></img>
                </div>

                <div>
                    <div className='flex flex-col space-y-4 py-4'>
                        
                        <div className='flex flex-row hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className=' py-1'><FcBarChart className='text-white' /></div>
                                <NavLink to="team" className='text-white'>Analytics</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row  hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className=' py-1'><CgProfile className='text-white' /></div>
                                <NavLink to="enhancedTable" className='text-white'>Profiles</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row hover:bg-gray-800 py-4'>
                            <div className='flex flex-row  space-x-4'>
                                <div className=' py-1'><CgProfile className='text-white' /></div>
                                <NavLink to="client" className='text-white'>Bookings</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row  hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className=' py-1'><GrServices className='text-white' /></div>
                                <NavLink to="services" className='text-white'>Services</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row  hover:bg-gray-800 py-4 mt-24'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className=' py-1'><RiLockPasswordFill className='text-white' /></div>
                                <button className='text-white bg-blue-900 px-2 py-1 hover:bg-blue-500 rounded-xl' onClick={handleLogOut}>LogOut</button>
                            </div>
                        </div>
                        {logoutMessage && (
                            <div className='flex flex-row justify-center items-center py-4 mt-4'>
                                <p className='text-green-500'>{logoutMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}