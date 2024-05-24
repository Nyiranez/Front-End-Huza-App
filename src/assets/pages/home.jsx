import React, { useContext } from 'react';
import { AppContext } from './context';
import { NavLink } from 'react-router-dom';
import { IoArrowForward, IoPlayOutline } from "react-icons/io5";

export const Home = () => {
  const { mode } = useContext(AppContext);
  return (
    <div className={`flex flex-col md:flex-row flex-wrap justify-between py-24 px-6 md:px-32 ${!mode ? 'bg-gradient-to-r from-slate-950 to-slate-700' : 'bg-gray-50'} h-full`}>
      <div className='space-y-10 pt-20 md:pt-52 md:w-1/2'>
        <div className={`${!mode ? "bg-gradient-to-r from-slate-800 to-slate-700" : "bg-slate-100"} px-4 py-2 rounded-full text-blue-500 flex flex-row space-x-2 items-center w-full md:w-72 justify-center`}>
          <div className='bg-blue-400 rounded-full w-2 h-2'></div>
          <p className={`text-xl ${!mode ? "text-white" : "text-blue-700"}`}>Get your opportunities</p>
        </div>
        <div>
          <h1 className={`text-4xl font-bold ${!mode ? "text-white" : "text-black"}`} id="animated-text">Huza, Digital Solutions for</h1>
          <h1 className={`text-4xl font-bold ${!mode ? "text-white" : "text-black"}`} id="animated">your job</h1>
        </div>
        <div>
          <p className={!mode ? "text-white" : "text-black"}>Huza Website turns your dream to true.</p>
          <p className={!mode ? "text-white" : "text-black"}>Come and meet with us with confidence</p>
          <p className={!mode ? "text-white" : "text-black"}>and we will help you direct to</p>
          <p className={!mode ? "text-white" : "text-black"}>meet with your needs</p>
        </div>
        <div className='space-y-4 flex flex-col md:flex-row items-center'>
          <div className='bg-blue-500 rounded-md w-48 h-12 text-white font-bold flex flex-row justify-center items-center space-x-4'>
            <NavLink to='#'>Get Started</NavLink>
            <span><IoArrowForward /></span>
          </div>
          <div className='rounded-md w-48 h-12 text-white font-bold flex flex-row justify-center items-center space-x-4'>
            <IoPlayOutline className={!mode ? "text-white" : "text-black"} />
            <NavLink to='#' className={!mode ? "text-white" : "text-black"}>How it Works</NavLink>
          </div>
        </div>
      </div>
      <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center items-center'>
        <div className='relative'>
          <img src='https://go-tailwind.preview.uideck.com/src/images/hero/image-2.jpg' alt="" className='ml-8' />
          <img src="https://go-tailwind.preview.uideck.com/src/images/hero/image-1.jpg" alt="" className='relative -mt-32 md:-mt-96 shadow-[25px_-25px_0px_rgba(255,255,255,0.5)]' />
        </div>
      </div>
    </div>
  );
};
