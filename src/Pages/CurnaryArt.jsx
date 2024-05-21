import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const CurnaryArt = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-800 to-blue-950' : 'bg-gray-50'}>
      <div className=' flex flex-col w-full justify-center items-center'>
      
        <div className={`${!mode ? "bg-slate-900" : "bg-white"} border-2 ${!mode ? "border-gray-800" : "border-gray-100"}   rounded-lg mt-32 w-11/12 flex flex-wrap py-8  pl-14 gap-4 justify-center items-center text-gray-500`}>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./download.jfif' className='h-[12rem]' />
            <p>Home cooking</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./cook.jfif' className='h-[12rem]' />
            <p>Ways to cook</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./nine.jfif' className='w-[17rem] h-[12rem]' />
            <p>Nine Time-Saving Cooking</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./latest.jfif' className='w-[17rem] h-[12rem]' />
            <p> The Latest Modernist Cooking</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./cooking.jfif' className='w-[18rem]' />
            <p>Cooking with Olive Oil</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./better.jfif' className='w-[18rem] h-[12rem]' />
            <p>Because a better cook by avoiding these</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./therapy.jfif' className='w-[17rem] h-[12rem]' />
            <p>HWhat is cooking Theraphy</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./spruce.jfif' className='h-[12rem] w-[17rem]' />
            <p>Essential Cooking Skills</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./cancer.jfif' className='w-[18rem] h-[12rem]' />
            <p>What is the healthiest way</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./smart.jfif' className='h-[12rem]' />
            <p>Essential Rules Of Cooking</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./cook.jfif' className='h-[12rem]' />
            <p>Ways to cook</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./nine.jfif' className='w-[17rem] h-[12rem]' />
            <p>Nine Time-Saving Cooking</p>
          </div>
        </div>
        <div className='mt-12 mb-8 space-x-8'>
          <button className='bg-black text-slate-500 px-4 py-2 rounded-xl'><NavLink to="/Services">Back</NavLink></button>
          <button className='bg-slate-500 text-black px-4 py-2 rounded-lg'><NavLink to="/Signin">Book Now</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default CurnaryArt
