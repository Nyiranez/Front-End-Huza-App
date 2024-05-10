import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../../src/assets/pages/context'
const Signup = () => {
  const { mode } = useContext(AppContext)
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
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

    if (formData.fullname === '') {
      newErrors.fullname = 'Please enter your Full Name';
    }
    if (formData.email === '') {
      newErrors.email = 'Please enter your Email';
    }
    if (formData.password === '') {
      newErrors.password = 'Please enter your Password';
    }
    if (formData.password !== formData.cpassword) {
      newErrors.cpassword = 'Passwords do not match';
    }
    else{
      newErrors.cpassword ="Confirm your password"
    }

    setErrors(newErrors);
  };

  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[48rem]">
        <div className={`mx-auto mt-16 pt-16 max-w-lg ${!mode ? "bg-gray-800" : "bg-slate-50"} `}>
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">
            REGISTRATION FORM
          </h1>
          <div className=' flex justify-center mt-5'>
          <button className=' bg-gray-700 flex justify-center rounded-lg gap-5 px-5'>
            <img src='/gogle.png' className=' w-10'/>
            <p className='mt-2 text-gray-300'>Sign up with Google</p>
          </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif"
          >
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label htmlFor="FullName" className="sr-only">
                Full Name
              </label>

              <div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-slate-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter Full Name"
                />
                {errors.fullname && (
                  <p className="text-red-300">{errors.fullname}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="Email" className="sr-only">
                Email
              </label>

              <div className="">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-slate-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-300">{errors.email}</p>
                )}
              </div>
            </div>
           </div>
           <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-slate-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <p className="text-red-300">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="cpassword" className="sr-only">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleChange}
                  className={`w-full rounded-lg ${!mode ? "bg-gray-700" : "bg-slate-100"} border-gray-200   p-4  text-sm shadow-sm`}
                  placeholder="Confirm Password"
                />
                {errors.cpassword && (
                  <p className="text-red-300">{errors.cpassword}</p>
                )}
              </div>
            </div>
            </div>
            <button
              type="submit"
              className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`}
            >
              Create an account
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to={'/'}>
                <a className={`${!mode ? "hover:text-white" : " hover:text-blue-900"} text-blue-600`}>Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
