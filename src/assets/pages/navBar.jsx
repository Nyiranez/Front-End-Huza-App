

import { CgProfile } from "react-icons/cg";
import { FcBarChart } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";

import Logo from '../images/logo.jpeg'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {


    return (
        <div className='' >


            <div className='h-screen bg-blue-950 w-2/12 fixed  top-0 left-0 pt-8 px-4'>
                <div className='flex flex-row justify-center items-center space-x-2'>
                    <img src={Logo} alt="" className='w-8 h-8'></img>

                </div>

                <div >
                   
                    <div className=' flex flex-col space-y-4  pt-32  mt-4 '>
                        <div className='flex flex-row justify-center items-center  bg-gray-800 py-4  '>
                            <div className='flex flex-row justify-center items-center space-x-4 '>
                                <div className='px-2 py-1 bg-gray-800'>
                                <FaArrowTrendUp  className=' text-white '/>
                                <GiNetworkBars  className=' text-white'/>
                                </div>
                          
                                <p className='text-white'>Dashboard</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center  hover:bg-gray-800 py-4  '>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1 bg-gray-800'> <FcBarChart  className=' text-white '/></div>
                               
                                <NavLink to="team" className='text-white'>Analytics</NavLink>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center  hover:bg-gray-800 py-4  '>
                            <div className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1 bg-gray-800'><CgProfile  className=' text-white'/></div>
                                
                                <NavLink to="enhancedTable" className='text-white'>Users</NavLink>
                            </div>

                        </div>
                      
                        <div className='flex flex-row justify-center items-center  hover:bg-gray-800 py-4'>
                            <div  className='flex flex-row justify-center items-center space-x-4'>
                                <div className='px-2 py-1 bg-gray-800'>  <GrServices  className=' text-white' /></div>
                              
                               
                                <NavLink to="services" className='text-white'>Services</NavLink>
                            </div>

                        </div>
                        <div className='flex flex-row justify-center items-center  hover:bg-gray-800 py-4 mt-24'>
                            <div className='flex flex-row justify-center items-center space-x-4 '>
                                <div className='px-2 py-1 bg-gray-800'><RiLockPasswordFill className=' text-white' /></div>
                                
                                <NavLink to="" className='text-red-500'>LogOut</NavLink>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

