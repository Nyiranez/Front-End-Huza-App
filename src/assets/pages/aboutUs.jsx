import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './context'
const AboutUs = () => {
  const { mode } = useContext(AppContext)
  return (
     <div>
         <div className={`${!mode ? "bg-gradient-to-r from-slate-900 to-blue-950" : "bg-white"}  px-40 pt-40 pb-20`}>
            <div className='flex justify-around gap-10 pt-5 text-2xl'>
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
            <hr className='mt-6'></hr>   
            <div className=' grid lg:grid-cols-2 grid-cols-1 mt-14 justify-between'>
                  <div className='relative'>
                      <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-2.jpg' className=' absolute top-10 left-40 shadow-[-25px_-25px_0px_rgba(255,255,255,0.5)]'/>
                      <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-1.jpg'/>
                  </div>
                   <div className=' mt-14 flex flex-col gap-10' >
                      <h2 className={`${!mode ? "text-white" : "text-slate-500"} text-4xl font-bold animate-pulse`}> We Develop Huza Based on Unemployement</h2>
                      <p className={`${!mode ? "text-slate-500" : "text-slate-500"} text-xl`}>developing the Huza app with these features and functionalities,<br></br>
                        you can create a vibrant and dynamic marketplace that connects
                        skilled professionals with individuals or businesses seeking 
                        their services, ultimately empowering individuals to leverage 
                        their skills and expertise to earn income and pursue their passions
                      </p>
                      <p className={`${!mode ? "text-slate-500" : "text-slate-500"} text-xl `}>Create a resource hub with articles, guides, and tutorials on job searching, 
                        resume writing, interview tips, and career development.
                        Offer support services such as career counseling, mentorship programs,
                        and networking events to help users enhance their skills and advance their careers.

                      </p>
                   </div>
                </div>
                 
        </div>
    </div>
  )
}

export default AboutUs