

import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'

export const Contact = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={` ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'} h-screen pt-32 pb-10 `}>
      
      <div className=' flex flex-col items-center justify-center  '>
        <h1 className={`text-2xl font-bold ${!mode ? "text-white" : "text-blue-900"}`}>Contact Information</h1>
        <p className=" text-gray-400">Address: Kigali, Rwanda.
          Phone:<span className={`${!mode ? "text-white" : "text-blue-900"} font-bold ml-2 mr-2`}>+250786170670 .</span>
          Email:<span className={`${!mode ? "text-white" : "text-blue-900"} font-bold ml-2`}>huza2024@gmail.com</span></p>
      </div>
      <div className="flex md:flex-row md:mt-12 flex-col space-y-6  mt-4 mb-4  md:justify-center">
       
        <div className={`w-[45rem] h-[30rem]  ml-4 ${mode ? "bg-slate-200" : "bg-blue-950"}  px-8 py-6 space-y-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}>
          <input type="text" placeholder="Enter your full Name" required className='w-full h-14 border-2 pl-4'></input><br></br>
          <input type="text" placeholder="Enter your Email" required className='mt-8 w-full h-14 border-2 pl-4'></input><br></br>
          <textarea placeholder='Message' required className=' w-full h-32 border-2 pl-4'></textarea>
          <div className='flex justify-center '><button className='px-4 py-2 bg-blue-400 rounded-full mt-6'>SEND MESSAGE</button></div>
        </div>
      </div>
    </div>
  )
}
