import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const Brainding = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}>
       <div className=' flex flex-wrap py-40 gap-10 px-32 text-gray-500'>
          <div>
          <img src='./africa.jfif' className=''/>
          <p>Best Makeup Design</p>
          </div>
          <div>
          <img src='./beaut.jfif' className=' h-[14rem]'/>
          <p>Stunning Shimmer Eye</p>
          </div>
          <div>
          <img src='./cute.jfif'/>
          <p>Creative Eye Makeup</p>
          </div>
          <div>
          <img src='./braid.jfif'/>
          <p> Makeup Design Images</p>
          </div>
          <div>
          <img src='./easy.jfif'/>
          <p>Imane - Makeup Artist</p>
          </div>
          <div>
          <img src='./weeding.jfif'  className=' h-[14rem]'
          />
          <p>How do makeup artists do their makeup </p>
          </div>
          <div>
          <img src='./kids.jfif'  className=' h-[14rem] w-[17rem]'/>
          <p>Gorgeous eyeshadow</p>
          </div>
          <div>
          <img src='./natural.jfif'  className=' h-[14rem] w-[15rem]'/>
          <p>Euphoria makeup a</p>
          </div>
          <div>
          <img src='./twist.jfif'  className=' h-[14rem]'/>
          <p>Mana Mumin Black B</p>
          </div>
          <div>
          <img src='./cutest.jfif'/>
          <p>Makeup Design by Dee updated </p>
          </div>
          <div>
          <img src='./hair.jpg' className='h-[14rem] w-[15rem]'/>
          <p>Makeup Design by Dee  </p>
          </div>
          <div>
          <img src='./beaut.jfif' className=' h-[14rem]'/>
          <p>Stunning Shimmer Eye</p>
          </div>
      </div>
    </div>
  )
}

export default Brainding
