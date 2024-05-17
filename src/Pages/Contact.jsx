import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../src/assets/pages/context'
const contact = () => {
  const { mode } = useContext(AppContext)
  return (
    
<section className= {!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'}>
  <div className="mx-auto py-36 lg:w-[50rem]">
    <div class="  justify-center">
      
      <div class={`rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12 ${!mode ? "bg-gray-800" : "bg-white"}`}>
        <form action="#" class="space-y-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className=' flex flex-col gap-10'>
            <label className=' text-gray-200'>First Name:</label>
            <input
              class={`w-full rounded-lg  border-gray-200 p-3 text-sm ${!mode ? "bg-gray-700" : "bg-slate-50"} `}
              type="text"
              name="name"
            />
          </div>
          <div className=' flex flex-col gap-10'>
            <label className=' text-gray-200'>Last Name:</label>
            <input
              class={`w-full rounded-lg  border-gray-200 p-3 text-sm ${!mode ? "bg-gray-700" : "bg-slate-50"} `}
              type="text"
              name="name"
            />
          </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className='flex flex-col gap-10'>
              <label className=' text-gray-200'>Email:</label>
              <input
                class={`w-full rounded-lg  border-gray-200 p-3 text-sm ${!mode ? "bg-gray-700" : "bg-slate-50"} `}
                type="email"
                name="email"
              />
            </div>

            <div className=' flex flex-col gap-10'>
              <label className=' text-gray-200'>Phone Number:</label>
              <input
                class={`w-full rounded-lg  border-gray-200 p-3 text-sm ${!mode ? "bg-gray-700" : "bg-slate-50"} `}
                type="tel"
                name="phoneNumber"
              />
            </div>
          </div>

          {/* <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          </div> */}

          <div className=' flex flex-col gap-10'>
            <label className=' text-gray-200'>Message:</label>

            <textarea
              class={`w-full rounded-lg  border-gray-200 p-3 text-sm ${!mode ? "bg-gray-700" : "bg-slate-50"} `}
              rows="8"
              name="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default contact
