import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
import { NavLink } from 'react-router-dom'
const Brainding = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}>
      <div className=' flex flex-col w-full justify-center items-center'>
     

        <div className={`${!mode ? "bg-slate-900" : "bg-white"} border-2 ${!mode ? "border-gray-800" : "border-gray-100"}   rounded-lg mt-32 w-11/12 flex flex-wrap py-8  pl-14 gap-4 justify-center items-center text-gray-500`}>

          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./africa.jfif' className='' />
            <p>Best Makeup Design</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./beaut.jfif' className=' h-[14rem]' />
            <p>Stunning Shimmer Eye</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./cute.jfif' />
            <p>Creative Eye Makeup</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./braid.jfif' />
            <p> Makeup Design Images</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./easy.jfif' />
            <p>Imane - Makeup Artist</p>
          </div>

          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./kids.jfif' className=' h-[14rem] w-[17rem]' />
            <p>Gorgeous eyeshadow</p>
          </div>
          <div className='bg-slate-100 px-6 py-6'>
            <img src='./natural.jfif' className=' h-[14rem] w-[15rem]' />
            <p>Euphoria makeup a</p>
          </div>
          <div className='bg-slate-100 px-6 py-6 w-[16rem]'>
            <img src='./twist.jfif' className=' h-[14rem]' />
            <p>Mana Mumin Black B</p>
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

export default Brainding
