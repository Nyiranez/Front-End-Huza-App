import React, { useState } from 'react'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        if (formData.email === '') {
          newErrors.email = 'Please enter your Email';
        }
        setErrors(newErrors);
      }
      return (
        <div className='bg-gray-50'>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg mt-40">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">FORGOT PASSWORD</h1>
    
        <form onSubmit={handleSubmit} class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
          <div>
            <label for="Email" class="sr-only">Email</label>
    
            <div class="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Email"
                
              />
              {errors.email && (
               <p className="text-red-300">{errors.email}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-900"
          >
            SEND
          </button>
          <div className=' flex text-gray-400 justify-center hover:text-blue-600'>
          <MdKeyboardDoubleArrowLeft className=' mt-1'/>
          <Link to={"/"}><a className=' hover:text-blue-600'>Back To Login</a></Link>
          </div>
          
        </form>
      </div>
    </div>
    </div>
      )
    }

export default ForgetPassword