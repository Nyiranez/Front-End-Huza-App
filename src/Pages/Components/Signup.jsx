import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../../src/assets/pages/context'
const Signup = () => {
  const { mode } = useContext(AppContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phone:'',
    password: '',
    // cpassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.firstName === '') {
      newErrors.firstName = 'Please enter your First Name';
    }
    if (formData.lastName === '') {
      newErrors.lastName = 'Please enter your Last Name';
    }
    if (formData.email === '') {
      newErrors.email = 'Please enter your Email';
    }
    if (formData.phone === '') {
      newErrors.phone = 'Please enter your Number';
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
  const handleFetch = async () => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://huza-backend-app-api-9.onrender.com/api/user/create',
            
        });
        console.log(response.data.results)
        setFormData(response.data.results);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    handleFetch();
}, []);


  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[48rem]">
        <div className={`mx-auto mt-24 pt-16 max-w-lg ${!mode ? "bg-gray-800" : "bg-white"} `}>
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">
            REGISTRATION FORM
          </h1>
          <div className=' flex justify-center mt-5'>
          <button className={` flex justify-center rounded-lg gap-5 px-5 border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"}`}>
            <img src='/gogle.png' className=' w-10'/>
            <p className='mt-2 text-gray-400'>Sign up with Google</p>
          </button>
          </div>
          <form
            onSubmit={handleSubmit}
            class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif"
          >
            <div class='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label htmlFor="firstName" class="sr-only">
                Full Name
              </label>

              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  class={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter First Name"
                />
                {errors.firstName && (
                  <p class="text-red-300">{errors.firstName}</p>
                )}
              </div>
              
            </div>
            <div>
              <label htmlFor="lastName" class="sr-only">
                last Name
              </label>

              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  class={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter Last Name"
                />
                {errors.lastName && (
                  <p class="text-red-300">{errors.lastName}</p>
                )}
              </div>
              
            </div>
            <div>
              <label htmlFor="Email" class="sr-only">
                Email
              </label>

              <div class="">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  class={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-300">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                name="phone"
                className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone &&(
                <p class="text-red-300"> {errors.phone}</p>
              )}
            </div>
           </div>
          
           <div class='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label htmlFor="password" class="sr-only">
                Password
              </label>

              <div class="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <p class="text-red-300">{errors.password}</p>
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
                  className={`w-full rounded-lg ${!mode ? "bg-gray-700" : "bg-gray-100"} border-gray-200   p-4  text-sm shadow-sm`}
                  placeholder="Confirm Password"
                />
                {errors.cpassword && (
                  <p className="text-red-300">{errors.cpassword}</p>
                )}
              </div>
            </div> 
            </div>
            {/* <Link to={"/verify"}> */}
            <button
              type="submit"
              class={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900 mt-5`}
            >
              Create an account
            </button>
            {/* </Link> */}
            <p class="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to={'/signin'}>
                <a class={`${!mode ? "hover:text-white" : " hover:text-blue-900"} text-blue-600`}>Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
