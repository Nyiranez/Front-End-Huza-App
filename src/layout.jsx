import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdOutlineModeNight } from 'react-icons/md';
import Logo from './assets/images/white.jpeg';
import Huza from './assets/images/black.jpeg';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './assets/pages/context';
import { FiSun } from 'react-icons/fi';
import { Footer } from './assets/pages/footer';
import { IoMenu, IoClose } from "react-icons/io5";

export const Layout = () => {
    const { mode, setMode } = useContext(AppContext);
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
                    <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-white font-bold rounded-md">
                        <NavLink to="/Signin">Sign In</NavLink>
                    </button>
                    <button className={`px-6 py-3 rounded-md ${!mode ? 'bg-gradient-to-r from-slate-700 to-slate-800' : 'bg-black'} text-white font-bold`}>
                        <NavLink to="/Signup">Sign Up</NavLink>
                    </button>
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
                    <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-white font-bold rounded-md" onClick={closeMenu}>
                        <NavLink to="/Signin">Sign In</NavLink>
                    </button>
                    <button className={`px-6 py-3 rounded-md ${!mode ? 'bg-gradient-to-r from-slate-700 to-slate-800' : 'bg-black'} text-white font-bold`} onClick={closeMenu}>
                        <NavLink to="/Signup">Sign Up</NavLink>
                    </button>
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};
