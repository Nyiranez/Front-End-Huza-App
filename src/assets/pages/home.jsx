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

      <div className={`flex flex-row justify-around items-center pt-8 mt-24 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'} h-screen`}>
        <div className='space-y-8'>
          <div className='bg-slate-100 px-6 py-4 rounded-full text-blue-500 flex flex-col justify-center items-center'>
            <p className='text-2xl'>Get your opportunities</p>
          </div>
          <div>
            
            <h1 className={`text-4xl font-bold  ${!mode ? "text-white" : "text-black"}`} id="animated-text">Huza, Digital Solutions for</h1>
            <h1 className={`text-4xl font-bold  ${!mode ? "text-white" : "text-black"}`} id="animated">your job  </h1>
          </div>

          <div>
            <p className={!mode ? "text-white" : "text-black"}>Lorem ipsum dolor sit amet consectetur adipisicing elit .</p>
            <p className={!mode ? "text-white" : "text-black"}>Officia voluptates, ea beatae obcaecati unde sint soluta. </p>
            <p className={!mode ? "text-white" : "text-black"}>Corporis perspiciatis obcaecati magni quam,</p>
            <p className={!mode ? "text-white" : "text-black"}> quos in distinctio dicta, excepturi eius unde, mollitia voluptatum.</p>
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
          <img src='https://go-tailwind.preview.uideck.com/src/images/hero/image-2.jpg' alt="" className='mr-32 ml-8  '></img> 
          <img src="https://go-tailwind.preview.uideck.com/src/images/hero/image-1.jpg" alt="" className='relative -mt-96 shadow-[25px_-25px_0px_rgba(255,255,255,0.5)]'></img>
          <div className=' '>
           
          </div>

        </div>
      </div>


    </div>
  )
}
