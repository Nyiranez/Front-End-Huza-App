
import { NavLink, Outlet } from 'react-router-dom';
import { NavBar } from './navBar';
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import Profile from '../images/IMG_8112.png'
import { useContext } from 'react'
import { AppContext } from './context'

export const Dashboard = () => {
    const { mode, setMode } = useContext(AppContext)
    return (
        <div className='' >
            <div className='flex flex-col  justify-end items-end   '>
                <div className={` flex flex-col w-10/12  pl-[3rem] h-24 fixed top-0 z-9  justify-center  pr-[3rem] items-end shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${!mode ? "bg-blue-950" : "bg-white "} `}  >
                   {/* <div className='flex flex-row space-y-4 bg-slate-100 px-2 py-4'>
                    
                    <p className='text-blue-400 text-2xl'>Admin Dashboard</p>
                   </div> */}
                    <div className='flex flex-row space-x-4 '>
                        <div className='bg-gray-200 w-16 rounded-full p-2'>
                            {!mode?<MdOutlineLightMode className='text-xl' onClick={() => setMode(!mode)} /> : <MdModeNight className='ml-8 text-xl'  onClick={() => setMode(!mode)}/> }
                            
                        </div>
                      
                        <NavLink to="message" className='bg-gray-200 rounded-full p-2'><BiMessageRoundedDots />
                            <div className='w-2 h-2 bg-red-600 rounded-full -mt-7 ml-3 animate-ping opacity-75'></div>
                            <span className={`${!mode? "text-white": "text-black"} absolute   transform -translate-x-1/2 px-2 py-1  text-sm rounded mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                          Message
                        </span>
                        </NavLink>
                        <div><img src={Profile} alt="" className='h-8 w-8 rounded-full'></img>
                        <span className={`${!mode? "text-white": "text-black"} absolute   transform -translate-x-1/2 px-2 py-1 text-sm rounded ml-6  opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                          Profile
                        </span>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
            <div className=''>
                <div className=''>
                    <NavBar />
                </div>
                <div className={`${!mode ? "bg-blue-950":"bg-white"} w-10/12 h-fit ml-64  flex flex-col justify-center items-center z-10`}>
                    <Outlet />

                </div>
            </div>

        </div>

    )
}

