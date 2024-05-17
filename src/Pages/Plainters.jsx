import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const Plainters = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-950 to-slate-900' : 'bg-gray-50'}>
      <div className=' flex flex-wrap py-40 gap-10 px-32 text-gray-500'>
          <div>
          <img src='./bed.jfif'className='h-[15rem]'/>
          <p>Best Makeup Design</p>
          </div>
          <div>
          <img src='./room.jfif'className='h-[15rem]'/>
          <p>Stunning Shimmer Eye</p>
          </div>
          <div>
          <img src='./wall.jfif' className='h-[15rem]'/>
          <p>Creative Eye Makeup</p>
          </div>
          <div>
          <img src='./walls.jfif' className='h-[15rem]'/>
          <p> Makeup Design Images</p>
          </div>
          <div>
          <img src='./elegant.jfif' className='h-[15rem] w-[19rem]'/>
          <p>Imane - Makeup Artist</p>
          </div>
          <div>
          <img src='./paint.jfif' className='h-[15rem] w-[20rem]'/>
          <p>How do makeup artists do their makeup </p>
          </div>
          <div>
          <img src='./grey.jfif' className='h-[15rem]'/>
          <p>Gorgeous eyeshadow</p>
          </div>
          <div>
          <img src='./trending.jfif'className='h-[15rem]'/>
          <p>Euphoria makeup a</p>
          </div>
          <div>
          <img src='./bed.jfif' className='h-[15rem]'/>
          <p>Mana Mumin Black B</p>
          </div>
         
          </div>
    </div>
  )
}

export default Plainters
