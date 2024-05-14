import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'

export const Contact = () => {
  const { mode } = useContext(AppContext)
  return (
    <div className={` ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'}  pt-40 pb-2 `}>
     
      <div className=' flex flex-col items-center justify-center gap-10  '>
        <h1 className={`text-2xl font-bold ${!mode ? "text-white" : "text-blue-900"}`}>Contact Information</h1>
        <p className=" text-gray-400">Address: Kigali, Rwanda.
          Phone:<span className={`${!mode ? "text-white" : "text-blue-900"} font-bold ml-2 mr-2`}>+250786170670 .</span>
          Email:<span className={`${!mode ? "text-white" : "text-blue-900"} font-bold ml-2`}>huza2024@gmail.com</span></p>
     
        <div className={`w-[37rem] h-[32rem]  ${mode ? "bg-slate-100" : "bg-blue-950"}  px-5  `}>
          <div class="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">Name</label>
                  <input
                    class="w-[30rem] rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                      class="w-[30rem] rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                  />
                </div>
                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                      class="w-[30rem] rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                  />
                  </div>
                  <div>
                    <label class="sr-only" for="message">Message</label>
                    <textarea
                      class="w-[30rem] rounded-lg border-gray-200 p-2 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>
                  <div class="mt-4">
                    <div className=' flex justify-center'>
                    <button
                      type="submit"
                      class={`inline-block w-full rounded-lg bg-blue-900 hover:bg-blue-950 px-5 pb-3 pt-3 font-medium text-white sm:w-auto`}>
                      SEND MESSAGE
                    </button>
                    </div>
                  </div>
              </form>
           </div>
        </div>
        </div>
     {/* </div> */}
    </div>
   
  )
}
