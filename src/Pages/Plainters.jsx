import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const Plainters = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={`w-full ${!mode ? 'bg-gradient-to-r from-slate-950 to-slate-900' : 'bg-gray-50'}`}>

      <div className=' flex flex-col w-full justify-center items-center'>

        <div className={`${!mode ? "bg-slate-900" : "bg-white"} border-2 ${!mode ? "border-gray-800" : "border-gray-100"}   rounded-lg mt-32 w-11/12 flex flex-wrap py-8  pl-14 gap-4 justify-center items-center text-gray-500`}>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./bed.jfif' className='h-[15rem]' />
            <p>Best Makeup Design</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./room.jfif' className='h-[15rem]' />
            <p>Stunning Shimmer Eye</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./wall.jfif' className='h-[15rem]' />
            <p>Creative Eye Makeup</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./walls.jfif' className='h-[15rem]' />
            <p> Makeup Design Images</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./elegant.jfif' className='h-[15rem] w-[19rem]' />
            <p>Imane - Makeup Artist</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./paint.jfif' className='h-[14rem] w-[10rem]' />
            <p>How do makeup artists do their makeup </p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./grey.jfif' className='h-[15rem]' />
            <p>Gorgeous eyeshadow</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./trending.jfif' className='h-[15rem]' />
            <p>Euphoria makeup a</p>
          </div>
        </div>
        <div className='mt-12 pb-8 space-x-8'>
          <button className='bg-black text-slate-500 px-4 py-2 rounded-xl'><NavLink to="/Services">Back</NavLink></button>
          <button className='bg-slate-500 text-black px-4 py-2 rounded-lg'><NavLink to="/Signin">Book Now</NavLink></button>
        </div>

      </div>



    </div>
  )
}

export default Plainters
