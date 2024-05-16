import React from 'react'

export const Cards = (props) => {
  return (
    <div>
      <div>
        <img src={props.img}  alt='image Poster' className='w-40 h-40 rounded-full'/>
        <p className='black'>Name :{props.name}</p>
        <p className='text-black'>Title:{props.title}</p>
       
      </div>
    </div>
  )
}
