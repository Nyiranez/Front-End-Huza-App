import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'
import { NavLink } from 'react-router-dom'
export const Home = () => {
  const { mode } = useContext(AppContext)
  return (
    <div>

      <div className={`flex flex-row justify-around items-center pt-8 ${!mode ? 'bg-gradient-to-r from-blue-900 to-slate-900' : 'bg-white'} h-screen`}>
        <div className='space-y-8'>
          <div className='bg-slate-100 px-6 py-4 rounded-full text-blue-500 flex flex-col justify-center items-center'>
            <p className='text-2xl'>Get your opportunities</p>
          </div>
          <div>
            <h1 className={`text-4xl font-bold  ${!mode ? "text-white" : "text-black"}`} id="animated-text">Digital Solutions for</h1>
            <h1 className={`text-4xl font-bold  ${!mode ? "text-white" : "text-black"}`} id="animated">your job  </h1>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit .</p>
            <p>Officia voluptates, ea beatae obcaecati unde sint soluta. </p>
            <p>Corporis perspiciatis obcaecati magni quam,</p>
            <p> quos in distinctio dicta, excepturi eius unde, mollitia voluptatum.</p>
          </div>
          <button className='bg-blue-500 rounded-md px-6 py-4 text-white font-bold'>
            <NavLink to='#'>Get Started</NavLink>
          </button>
          <button className='bg-blue-500 rounded-md px-6 py-4 text-white font-bold'>
            <NavLink to='#'>How it Work</NavLink>
          </button>
        </div>
        <div>
          <img src='https://go-tailwind.preview.uideck.com/src/images/hero/image-2.jpg' alt="" className='relative'></img>
          <img src="https://go-tailwind.preview.uideck.com/src/images/hero/image-1.jpg" alt="" className='absolute top-96 right-96'></img>
        </div>
      </div>


    </div>
  )
}
