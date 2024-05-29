import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context';
import iren from '../../../public/iren.jpeg'
import louise from '../../../public/louise.jpeg'

const AboutUs= () => {
  const { mode } = useContext(AppContext);
  return (
    <div className={`${!mode ? "bg-gradient-to-r from-slate-950 to-gray-900" : "bg-white"} px-6 md:px-32 pb-20`}>
      <div className='flex flex-col md:flex-row justify-around gap-10 pt-20 md:pt-36 text-xl md:text-2xl'>
        <Link to="">
          <a href="#about" className={`${!mode ? "text-white" : "text-black"} hover:underline decoration-blue-500 underline-offset-[1.7vh]`}>About Us</a>
        </Link>
        <Link to="">
          <a href="#mission" className={`${!mode ? "text-white" : "text-black"} hover:underline decoration-blue-500 underline-offset-[1.7vh]`}>Our Mission</a>
        </Link>
        <Link to="">
          <a href="#vision" className={`${!mode ? "text-white" : "text-black"} hover:underline decoration-blue-500 underline-offset-[1.7vh]`}>Our Vision</a>
        </Link>
      </div>
      <hr className='mt-6' />
      <div className='grid lg:grid-cols-2 grid-cols-1 justify-between mt-10' id='about'>
        <div className='relative'>
          <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-2.jpg' className='absolute top-10 left-1/2 transform -translate-x-1/2 md:left-36 shadow-[-20px_-25px_0px_rgba(255,255,255,0.5)]' />
          <img src='https://go-tailwind.preview.uideck.com/src/images/about/image-1.jpg' className='relative' />
        </div>
        <div className='mt-14 flex flex-col gap-10'>
          <h2 className={`${!mode ? "text-white" : "text-slate-500"} text-4xl font-bold animate-pulse`}>We Develop Huza Based on Unemployement</h2>
          <p className={`${!mode ? "text-slate-500" : "text-slate-500"} text-xl`}>
            Developing the Huza app with these features and functionalities,
            you can create a vibrant and dynamic marketplace that connects
            skilled professionals with individuals or businesses seeking
            their services, ultimately empowering individuals to leverage
            their skills and expertise to earn income and pursue their passions.
          </p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 justify-between py-20 gap-20' id='mission'>
        <div className='flex flex-col gap-10 mt-20'>
          <h2 className={`${!mode ? "text-white" : "text-slate-500"} text-4xl font-bold animate-pulse`}>OUR MISSION</h2>
          <p className={`${!mode ? "text-slate-500" : "text-slate-500"} text-xl`}>
            Connecting employ young skilled people who completed short courses with employers
            in need of their skills or services they offer by providing this website and other
            additional support they need to grow their career.
          </p>
        </div>
        <div>
          <img src={louise} className='h-[35rem] w-full md:w-[30rem] top-10 shadow-[20px_-25px_0px_rgba(255,255,255,0.5)]' />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 justify-between mt-10' id='vision'>
        <div>
          <img src={iren} className='h-[30rem] w-full md:w-[25rem] top-10 shadow-[-25px_-25px_0px_rgba(255,255,255,0.5)]' />
        </div>
        <div className='mt-14 flex flex-col gap-10'>
          <h2 className={`${!mode ? "text-white" : "text-slate-500"} text-4xl font-bold animate-pulse`}>OUR VISION</h2>
          <p className={`${!mode ? "text-slate-500" : "text-slate-500"} text-xl`}>
            To create a thriving global network where young professionals who have completed
            short courses seamlessly connect with employers, leading to a future where every
            young person has the opportunity to grow, succeed, and contribute to the workforce
            with their specialized skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
