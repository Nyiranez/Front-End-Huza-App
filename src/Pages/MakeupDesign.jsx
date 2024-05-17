import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const MakeupDesign = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-950 to-blue-950' : 'bg-gray-50'}>
      <div className=' flex flex-wrap py-40 gap-12 px-32 text-gray-500'>
          <div>
          <img src='./best.jfif' className='h-[15rem]'/>
          <p>Best Makeup Design</p>
          </div>
          <div>
          <img src='./shimmer.jfif'className='h-[14rem]'/>
          <p>Stunning Shimmer Eye</p>
          </div>
          <div>
          <img src='./imane.jfif'/>
          <p>Creative Eye Makeup</p>
          </div>
          <div>
          <img src='./art.jfif'className='h-[14rem]'/>
          <p> Makeup Design Images</p>
          </div>
          <div>
          <img src='./rich.jfif'className='h-[15rem]'/>
          <p>Imane - Makeup Artist</p>
          </div>
          <div>
          <img src='./weeding.jfif'className='h-[15rem]'/>
          <p>How do makeup artists do their makeup </p>
          </div>
          <div>
          <img src='./Makeup.jfif'className='h-[15rem]'/>
          <p>Gorgeous eyeshadow</p>
          </div>
          <div>
          <img src='./eye.jfif'/>
          <p>Euphoria makeup a</p>
          </div>
          <div>
          <img src='./magazine.jfif'className='h-[15rem]'/>
          <p>Mana Mumin Black B</p>
          </div>
          <div>
          <img src='./africa.jfif'className='h-[15rem]'/>
          <p>Makeup Design by Dee updated th</p>
          </div>
      </div>
    </div>
  )
}

export default MakeupDesign
