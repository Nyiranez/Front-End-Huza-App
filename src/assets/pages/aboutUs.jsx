import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-blue-950 text-white px-32 pt-40 pb-20'>
        <div className='flex justify-around gap-10 pt-5'>
            <Link to={""}>
            <a className=' hover:underline decoration-blue-500 underline-offset-[1.7vh] '>About Us</a> 
            </Link>
            <Link to={""}>
            <a className=' hover:underline decoration-blue-500 underline-offset-[1.7vh] '>Our Mission</a>
            </Link>
            <Link to={""}>
            <a className=' hover:underline decoration-blue-500 underline-offset-[1.7vh]'>Our Vision</a>
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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
                   Quis veniam ullam, harum dolorem voluptates minima et modi <br></br>
                   ut ipsum impedit! Quisquam nisi dolorum nemo animi quaerat?<br></br>
                  Exercitationem recusandae dignissimos mollitia.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
                   Quis veniam ullam, harum dolorem voluptates minima et modi <br></br>
                   ut ipsum impedit! Quisquam nisi dolorum nemo animi quaerat?<br></br>
                  Exercitationem recusandae dignissimos mollitia.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs