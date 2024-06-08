import Logo from './assets/images/white.jpeg';
import Huza from './assets/images/black.jpeg';
import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './assets/pages/context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
export const Pages = () => {
    const { mode, setMode } = useContext(AppContext);
    const Navigate= useNavigate();
    const BookingLogout =()=>{
        axios.get("https://huza-backend-app-api-1.onrender.com/api/allUsers/logout")
        .then((resp)=>{
         console.log(resp.data);
         setTimeout(()=>{
           Navigate("/")
         },2000);
        }).catch((error)=>{
         console.log(error);
         alert("failed to logout");
        })
     };
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
     };
 
     const closeMenu = () => {
         setIsMenuOpen(false);
     };
    return (

        <div>
            <div className={`flex flex-row justify-between items-center fixed w-full z-10 top-0 pt-3 px-6 md:px-32 shadow-sm ${!mode ? 'bg-gradient-to-r from-slate-950 to-slate-700' : 'bg-white'}`}>
                <Link to="/">
                    {mode ? <img src={Logo} alt="Logo" className="h-16 w-20" /> : <img src={Huza} alt="Huza" className="h-20 pt-4 pb-5" />}
                </Link>
                <div className="hidden md:flex gap-10">
                    <NavLink to="/home" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Home</NavLink>
                    <NavLink to="/layout/aboutus" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`}>About Us</NavLink>
                    <NavLink to="/Contact" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Contact</NavLink>
                    <NavLink to="/Services" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Services</NavLink>
                </div>
                <div className="hidden md:flex gap-5 pb-5 pt-5">
                    <div className=" bg-blue-900  rounded-lg w-[5rem] py-2 px-3 text-white">
                
                        <button onClick={BookingLogout} className=" ">Logout</button>
                    </div> 
                    {mode ? (
                        <MdOutlineModeNight onClick={() => setMode(!mode)} className="text-2xl mt-4" />
                    ) : (
                        <FiSun onClick={() => setMode(!mode)} className="text-white text-2xl mt-4" />
                    )}
                </div>
                <div className="md:hidden flex">
                    <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                        {isMenuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </div>
            <div className={`fixed inset-0 z-20 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 ease-in-out md:hidden`}>
                <div className="flex flex-col gap-10 p-6">
                    <NavLink to="/home" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`} onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/layout/aboutus" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`} onClick={closeMenu}>About Us</NavLink>
                    <NavLink to="/Contact" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`} onClick={closeMenu}>Contact</NavLink>
                    <NavLink to="/Services" className={`text-gray-500 ${!mode ? 'hover:text-white' : 'hover:text-blue-600'}`} onClick={closeMenu}>Services</NavLink>
                    <div className=" bg-blue-900  rounded-lg w-[5rem] py-2 px-3 text-white">
                
                <button onClick={BookingLogout} className="   ">Logout</button>
            </div> 
                </div>
            </div>
            <Outlet />
            
        </div>
      
    )
}