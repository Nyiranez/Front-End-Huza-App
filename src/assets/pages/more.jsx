import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'
import { Link } from 'react-router-dom'
const Services = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}>
      {/* <h2 className='text-gray-500 flex justify-center text-4xl  pt-20'>SERVICES</h2> */}
      <div className=' flex flex-wrap justify-between px-32 py-40 gap-2'>
       
          <article class={`overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-[17rem]`}>
              <div class="sm:p-6 ">
                  <img
                    alt=""
                    src="../../../public/master.jfif"
                    className="h-56 w-full object-cover"
                  />
                  <h3 class="text-lg font-medium text-gray-900">
                    CALINARY ART.
                  </h3>
                  <p class="mt-2 line-clamp-4 text-sm/relaxed text-gray-500 ">
                  Culinary arts is the practice of preparing and cooking food.
                  It's a multifaceted field that encompasses various skills,
                  techniques, and knowledge related to food preparation, 
                  presentation, and culinary creativity Culinary arts involve
                   mastering a wide range of cooking methods such as grilling, 
                   sautéing, baking, frying, braising, steaming, roasting,
                  and more. Each technique requires understanding temperature 
                  control, timing, and ingredient manipulation to achieve desired
                   flavors, textures, and appearances.
                  
                  </p>
                 
                </div>
          </article>
          <article class={`overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm  w-[17rem]`}>
              <div class="p-4 sm:p-6">
                  <img
                    alt=""
                    src="../../../public/hair.jfif"
                    className="h-56 w-full object-cover"
                  />
                  <h3 class="text-lg font-medium text-gray-900">
                    BRAIDING.
                  </h3>
                  <p class="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                    Braiding is a technique of weaving together three or more strands of hair,
                     yarn, fabric, or other materials to create a structured pattern or design.
                      It's a versatile and popular method used in hairstyling, crafting, and 
                      textiles around the world
                  </p>
                  <div className='flex justify-between'>
                 
                   {/* <Link to={"/Signin"} class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">Hiring
                    <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                      &rarr;
                    </span>
                   </Link>  */}
                  </div>
                
              </div>
          </article>
          <article class={`overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm  w-[17rem]`}>
              <div class="p-4 sm:p-6">
                 <img
                    alt=""
                    src="../../../public/Makeup.jfif"
                    className="h-56 w-full object-cover"
                  />
                  <h3 class="text-lg font-medium text-gray-900">
                    MAKEUP DESIGN.
                  </h3>
                  <p class="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  Makeup design, often referred to as makeup artistry or makeup design, 
                    involves the application of cosmetics to enhance or alter a person's 
                    appearance. It is a form of visual art that can be used for various purposes,
                     including theatrical productions, film and television, fashion shows, photography 
                     shoots, special events, and personal grooming
                  </p>
                 
               </div>
          </article>
          <article class={`overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm  w-[17rem]`}>
              <div class="p-4 sm:p-6">
                 <img
                    alt=""
                    src="../../../public/bed.jfif"
                    className="h-56 w-full object-cover"
                  />
                  <h3 class="text-lg font-medium text-gray-900">
                    PLAINTING.
                  </h3>
                  <p class="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  Planters are containers used for growing plants, flowers, herbs,
                   or vegetables. They come in various materials such as plastic, 
                   ceramic, clay, wood, metal, or stone. Planters serve both functional
                    and decorative purposes, allowing people to grow plants in limited 
                    spaces like balconies, patios, or indoors.
                  </p>
               
                </div>
          </article>
        </div>
    </div>
  )
}

export default Services

