import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './context'
const AboutUs = () => {
  const { mode } = useContext(AppContext)
  return (

    <div className='bg-gradient-to-r from-slate-900 to-blue-950 text-white px-40 pt-40 pb-20'>
    <div className={`${!mode ? "bg-gradient-to-r from-slate-900 to-blue-950" : "bg-white"}  px-32 pt-40 pb-20`}>

        <div className='flex justify-around gap-10 pt-5'>
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
        <hr className='mt-2'></hr>   
        
        <div className=' flex mt-10 justify-between'>
            <div className='relative'>
                <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-2.jpg' className=' absolute top-10 left-52 shadow-[-25px_-25px_0px_rgba(255,255,255,0.5)]'/>
                <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-1.jpg'/>
            </div>
            <div className=' mt-14 flex flex-col gap-10' >

                <h2 className=' text-3xl font-bold animate-pulse'> We Develop Huza Based on Unemployement</h2>
                <p>developing the Huza app with these features and functionalities,<br></br>
                   you can create a vibrant and dynamic marketplace that connects <br></br>
                   skilled professionals with individuals or businesses seeking <br></br>
                   their services, ultimately empowering individuals to leverage<br></br> 
                   their skills and expertise to earn income and pursue their passions.<br></br>
                </p>
                <p>Create a resource hub with articles, guides, and tutorials on job searching, <br></br>
                  resume writing, interview tips, and career development.<br></br>
                  Offer support services such as career counseling, mentorship programs,<br></br>
                   and networking events to help users enhance their skills and advance their careers.<br></br>

                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs