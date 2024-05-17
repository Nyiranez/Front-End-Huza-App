import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../assets/pages/context'

const ResetPassword = () => {
    const { mode } = useContext(AppContext)
    const [formData, setFormData] = useState({
      password: '',
      cpassword: '',
    });
    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.password === '') {
      newErrors.password = 'Please enter your Password';
    }
    if (formData.cpassword === '') {
      newErrors.cpassword= 'Please confirm your Password';
    }
    setErrors(newErrors);
  }
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[50rem] ">
  <div class={`mx-auto mt-32 pt-16 max-w-lg ${!mode ? "bg-gray-800" : "bg-white"} `}>
    <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">RESET PASSWORD</h1>
    
    <form onSubmit={handleSubmit} class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
    
        
        <div >
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-slate-100"} p-4  text-sm shadow-sm`}
            placeholder="New Password"  
          />
          {errors.password && (
           <p className="text-red-300">{errors.password}</p>
          )}
        </div>
     

     

        <div class="relative">
          <input
            type="password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-slate-100"} p-4  text-sm shadow-sm`}
            placeholder="Confirm Your Password"
          />
          {errors.cpassword && (
                  <p className="text-red-300">{errors.cpassword}</p>
                )}

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
      
      <Link to={"/signin"}>
      <button
        type="submit"
        className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900 mt-5`}
      >
        RESET
      </button>
      
      </Link>
      
    </form>
  </div>
</div>
</div>
  )
}

export default ResetPassword
