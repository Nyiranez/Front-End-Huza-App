import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'
import { NavLink } from 'react-router-dom'
import { IoArrowForward } from "react-icons/io5";
import { IoPlayOutline } from "react-icons/io5";
export const Home = () => {
  const { mode } = useContext(AppContext)
  return (
    <div>

      <div className={`flex flex-row justify-around items-center pt-8 mt-24 px-40 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'} h-screen`}>
        <div className='space-y-8'>
          <div className={`${!mode ? "bg-gradient-to-r from-slate-800 to-slate-700" : " bg-slate-100"}  px-4 py-2 rounded-full text-blue-500 flex flex-row space-x-2 items-center w-72 justify-center`}>
            <div className='bg-blue-400  rounded-full w-2 h-2 ' ></div>
            <p className={`text-xl ${!mode ? "text-white" : "text-blue-700"}`}>Get your opportunities</p>
          </div>
          <div>
            
            <h1 className={`text-4xl font-bold  ${!mode ? "text-white" : "text-black"}`} id="animated-text">Huza, Digital Solutions for</h1>
            <h1 className={`text-4xl font-bold  ${!mode ? "text-white" : "text-black"}`} id="animated">your job  </h1>
          </div>

          <div>
            <p className={!mode ? "text-white" : "text-black"}>Huza Website turns your dream to true .</p>
            <p className={!mode ? "text-white" : "text-black"}>Come and meet with us with confidence </p>
            <p className={!mode ? "text-white" : "text-black"}>and we will help you direct to  </p>
            <p className={!mode ? "text-white" : "text-black"}>  meet with your needs</p>
          </div>
          <div className='space-y-4 flex flex-row  items-center'>
            <div className='bg-blue-500 rounded-md w-48 h-12 text-white font-bold flex flex-row justify-center items-center space-x-4'>
              <NavLink to='#'>Get Started </NavLink>
              <span><IoArrowForward /></span>
            </div>
            <div className=' rounded-md w-48 h-12 text-white font-bold flex flex-row justify-center items-center space-x-4'>
              <IoPlayOutline className={!mode ? "text-white" : "text-black"} />
              <NavLink to='#' className={!mode ? "text-white" : "text-black"}>How it Work</NavLink>
            </div>
          </div>

        </div>
        <div className=''>
          <img src='https://go-tailwind.preview.uideck.com/src/images/hero/image-2.jpg' alt="" className=' ml-8  '></img> 
          <img src="https://go-tailwind.preview.uideck.com/src/images/hero/image-1.jpg" alt="" className='relative -mt-96 shadow-[25px_-25px_0px_rgba(255,255,255,0.5)]'></img>
          <div className=' '> 
        </div>
     </div>
   </div>
    </div>
  )
}
