import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='bg-gray-50'>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">REGISTRATION FORM</h1>
    
        <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
          <div>
                <label for="UserName" class="sr-only">UserName</label>
        
                <div class="relative">
                <input
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter UserName"
                    required
                />
                </div>
          </div>

          <div>
                <label for="Email" class="sr-only">Email</label>
        
                <div class="relative">
                <input
                    type="email"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Your Email"
                    required
                />
                </div>
          </div>
    
          <div>
            <label for="password" class="sr-only">Password</label>
    
            <div class="relative">
              <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                required
              />
    
              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            
          </div>
          <div>
            <label for=" Confirm password" class="sr-only">Confirm Password</label>
    
            <div class="relative">
              <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Confirm password"
                required
              />
    
              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            
          </div>
    
          <button
            type="submit"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-900"
          >
            Create an account
          </button>
    
          <p class="text-center text-sm text-gray-500">
            Already your have an account?
            <Link to={"/"}><a className=' hover:text-blue-600'>Login in</a></Link>
          </p>
        </form>
      </div>
    </div>
    </div>
      )
    }

export default Signup