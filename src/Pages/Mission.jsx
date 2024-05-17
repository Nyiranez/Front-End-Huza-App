import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const Mission = () => {
    const { mode } = useContext(AppContext)
  return (
    <div>
    <div className={`${!mode ? "bg-gradient-to-r from-slate-950 to-gray-900" : "bg-white"}  px-32 pb-20`}>
       {/* <div className='flex justify-around gap-10 pt-36 text-2xl'>
           <Link to={""}>
           <a className={`${!mode ? "text-white" : "text-black"} hover:underline decoration-blue-500 underline-offset-[1.7vh] `}>About Us</a> 
           </Link>
           <Link to={""}>
           <a className={` ${!mode ? "text-white" : "text-black"} hover:underline decoration-blue-500 underline-offset-[1.7vh] `}>Our Mission</a>
           </Link>
           <Link to={""}>
           <a className={` ${!mode ? "text-white" : "text-black"} hover:underline decoration-blue-500 underline-offset-[1.7vh]`}>Our Vision</a>
           </Link>  
       </div>
       <hr className='mt-6'></hr>    */}
       <div className=' grid lg:grid-cols-2 grid-cols-1 justify-between mt-10'>
             <div className='relative'>
                 <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-2.jpg' className=' absolute top-10 left-36 shadow-[-25px_-25px_0px_rgba(255,255,255,0.5)]'/>
                 <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-1.jpg'/>
             </div>
              <div className=' mt-14 flex flex-col gap-10' >
                 <h2 className={`${!mode ? "text-white" : "text-slate-500"} text-4xl font-bold animate-pulse`}> We Develop Huza Based on Unemployement</h2>
                 <p className={`${!mode ? "text-slate-500" : "text-slate-500"} text-xl`}>
                    
                 Connecting employ young skilled people who completed short courses with employer
                 in need of their skills or service they offer by providing this website and other
                 additional support they are in need to grow their career
                 </p>
                 
              </div>
           </div>
            
   </div>
</div>
  )
}

export default Mission