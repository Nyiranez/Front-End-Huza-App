import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const CurnaryArt = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-800 to-blue-950' : 'bg-gray-50'}>
      <div className=' flex flex-wrap py-40 gap-10 px-32  text-gray-400'>
          <div>
          <img src='./download.jfif' className='h-[12rem]'/>
          <p>Home cooking</p>
          </div>
          <div>
          <img src='./cook.jfif' className='h-[12rem]'/>
          <p>Ways to cook</p>
          </div>
          <div>
          <img src='./nine.jfif' className='w-[17rem] h-[12rem]'/>
          <p>Nine Time-Saving Cooking</p>
          </div>
          <div>
          <img src='./latest.jfif' className='w-[17rem] h-[12rem]'/>
          <p> The Latest Modernist Cooking</p>
          </div>
          <div>
          <img src='./cooking.jfif' className='w-[18rem]'/>
          <p>Cooking with Olive Oil</p>
          </div> 
          <div>
          <img src='./better.jfif' className='w-[18rem] h-[12rem]'/>
          <p>Because a better cook by avoiding these</p>
          </div>
          <div>
          <img src='./therapy.jfif' className='w-[17rem] h-[12rem]'/>
          <p>HWhat is cooking Theraphy</p>
          </div>
          <div>
          <img src='./spruce.jfif' className='h-[12rem] w-[17rem]'/>
          <p>Essential Cooking Skills</p>
          </div>
          <div>
          <img src='./cancer.jfif' className='w-[18rem] h-[12rem]'/>
          <p>What is the healthiest way</p>
          </div>
          <div>
          <img src='./smart.jfif' className='h-[12rem]'/>
          <p>Essential Rules Of Cooking</p>
          </div>
          <div>
          <img src='./cook.jfif' className='h-[12rem]'/>
          <p>Ways to cook</p>
          </div>
          <div>
          <img src='./nine.jfif' className='w-[17rem] h-[12rem]'/>
          <p>Nine Time-Saving Cooking</p>
          </div>
      </div>
    </div>
  )
}

export default CurnaryArt
