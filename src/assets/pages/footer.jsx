import React, { useContext } from 'react';
import Huza from '../images/black.jpeg';
import Logo from '../images/white.jpeg';
import { AppContext } from './context';

export const Footer = () => {
    const { mode } = useContext(AppContext);
    return (
        <div className={`relative shadow-lg ${!mode ? 'bg-gradient-to-r from-slate-950 to-gray-900' : 'bg-white'} pt-8 pb-8`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 lg:px-32">
                <div className="space-y-5">
                    <div className="flex flex-col gap-3">
                        <p className={`font-bold ${!mode ? "text-white" : "text-black"}`}>HUZA APP</p>
                        <p className="text-slate-500">To connect unemployment</p>
                        <p className="text-slate-500">Who are skilled</p>
                        <p className="text-slate-500">And the clients</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <p className={`font-bold ${!mode ? "text-white" : "text-black"}`}>HUZA</p>
                    <div className="flex flex-col gap-3">
                        <p className="text-slate-500">Home</p>
                        <p className="text-slate-500">Culinary Art</p>
                        <p className="text-slate-500">Painting</p>
                        <p className="text-slate-500">Makeup Design</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <p className={`font-bold ${!mode ? "text-white" : "text-black"}`}>SUPPORT</p>
                    <div className="flex flex-col gap-3">
                        <p className="text-slate-500">Our Blogs</p>
                        <p className="text-slate-500">Contact Us</p>
                        <p className={`text-gray-500 ${!mode ? "hover:text-white" : "hover:text-blue-600"}`}>Email Address</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className={`font-bold ${!mode ? "text-white" : "text-black"}`}>Get in Touch</p>
                    <p className="text-slate-500">Toll Free Customer Care</p>
                    <p className={`font-bold ${mode ? "text-blue-400" : "text-white"}`}>+250786170670</p>
                    <p className="text-slate-500">Connect with us with confidence</p>
                    <p className="text-slate-500">Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
                    <p className="text-slate-500">Developed by Sylvie and Louise</p>
                    <p className="text-slate-500">Developed by reine and yvonne</p>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-800 via-transparent to-transparent"></div>
        </div>
    );
};
