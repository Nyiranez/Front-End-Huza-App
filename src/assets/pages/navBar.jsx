import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FcBarChart } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import axios from "axios";
import Logo from '../images/logo.jpeg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const [logoutMessage, setLogoutMessage] = useState('');
    let navigate = useNavigate();

    const handleLogOut = () => {
        axios.get("https://huza-backend-app-api-1.onrender.com/api/allUsers/logout")
        .then((resp) => {
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
            <div className='h-screen bg-blue-950 w-2/12 fixed  top-0 left-0 pt-8 px-4'>
                <div className='flex flex-row justify-center items-center space-x-2'>
                    <img src={Logo} alt="" className='w-8 h-8'></img>
                </div>

                <div>
                    <div className='flex flex-col space-y-4 pt-32 mt-4'>
                        <div className='flex flex-row justify-center items-center bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1 bg-gray-800'>
                                    <FaArrowTrendUp className='text-white' />
                                    <GiNetworkBars className='text-white' />
                                </div>
                                <p className='text-white'>Dashboard</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1'><FcBarChart className='text-white' /></div>
                                <NavLink to="team" className='text-white'>Analytics</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1'><CgProfile className='text-white' /></div>
                                <NavLink to="enhancedTable" className='text-white'>Profile</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1'><CgProfile className='text-white' /></div>
                                <NavLink to="client" className='text-white'>Client</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center hover:bg-gray-800 py-4'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1'><GrServices className='text-white' /></div>
                                <NavLink to="services" className='text-white'>Services</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center hover:bg-gray-800 py-4 mt-24'>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1'><RiLockPasswordFill className='text-white' /></div>
                                <button className='text-red-500 bg-black px-2 py-1 hover:bg-white rounded-xl' onClick={handleLogOut}>LogOut</button>
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