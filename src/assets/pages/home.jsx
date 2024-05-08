import React from 'react'

export const Home = () => {
  return (
    <div>

      <div className='flex flex-row justify-around items-center pt-8 bg-gradient-to-r from-white to-blue-100 h-screen'>
        <div className='space-y-8'>
          <div className='bg-slate-100 px-6 py-4 rounded-full text-blue-500 flex flex-col justify-center items-center'>
            <p className='text-2xl'>Get your opportunities</p>
          </div>
          <div>
          <h1 className='text-4xl font-bold'>Digital Solutions for</h1>
          <h1 className='text-4xl font-bold'>your job  </h1>
          </div>
       
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit .</p>
            <p>Officia voluptates, ea beatae obcaecati unde sint soluta. </p>
            <p>Corporis perspiciatis obcaecati magni quam,</p>
            <p> quos in distinctio dicta, excepturi eius unde, mollitia voluptatum.</p>
          </div>

        </div>
        <div>
          <img src='https://go-tailwind.preview.uideck.com/src/images/hero/image-2.jpg' alt="" className='relative'></img>
          <img src="https://go-tailwind.preview.uideck.com/src/images/hero/image-1.jpg" alt="" className='absolute top-96 right-96'></img>
        </div>
      </div>


    </div>
  )
}
