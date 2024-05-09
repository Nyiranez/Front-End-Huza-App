import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">
            REGISTRATION FORM
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif"
          >
            <div>
              <label htmlFor="FullName" className="sr-only">
                Full Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-300">{errors.email}</p>
                )}
              </div>
            </div>

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
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Confirm Password"
                />
                {errors.cpassword && (
                  <p className="text-red-300">{errors.cpassword}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-900"
            >
              Create an account
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to={'/'}>
                <a className="hover:text-blue-600">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
