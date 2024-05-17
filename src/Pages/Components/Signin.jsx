import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../assets/pages/context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
  const { mode } = useContext(AppContext)
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = {};

  //   if (formData.email === '') {
  //     newErrors.email = 'Please enter your UserName';
  //   }
  //   if (formData.password === '') {
  //     newErrors.password = 'Please enter your Password';
  //   }
  //   setErrors(newErrors);
  // }
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const isValid = () => {
    let valid = true;
    if (!email.trim()) {
      setEmailError("LastName is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password.trim()) {
      setPasswordError("LastName is required");
      valid = false;
    } else {
      setPasswordError("");
    }
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
  await axios({
    url: "https://huza-backend-app-api.onrender.com/api/allUsers/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      
      email: email,
      
      password: password,
      
    },
  })
    .then((response) => {
      console.log(response.data);
      navigate ("/CurnaryArt");
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-950 to-gray-950' : 'bg-gray-50'}>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[65rem] ">
  <div class={`mx-auto mt-32 pt-16 max-w-lg ${!mode ? "bg-gradient-to-r from-gray-800 to-gray-800" : "bg-white"} `}>
    <h1 class={`text-center text-2xl font-bold  sm:text-3xl font-serif ${!mode ? "text-white" : "text-indigo-600"}`}>WELCOME TO MY PAGE</h1>
    
    <form onSubmit={handleSignUp} class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif">


        <div >
          <input
            type="email"
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
            placeholder="Enter UserName"
            
          />
          {emailError ? (
                  <p className="text-red-300">{emailError}</p>
                ) : null}
        </div>
      

      

        <div class="relative">
          <input
            type="password"
            name="password"
            value={password}
                  onChange={(v) => setPassword(v.target.value)}
            className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4  text-sm shadow-sm`}
            placeholder="Enter Password"
          />
          {passwordError ? (
                  <p className="text-red-500">{passwordError}</p>
                ) : null}

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
      

      <button
        type="submit"
        onClick={handleSignUp}
        className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`}
      >
        Sign in
      </button>
      <div className=' flex justify-center mt-5'>
          <button className={` flex justify-center rounded-lg gap-5 px-5 w-full border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"}`}>
            <img src='/gogle.png' className=' w-10'/>
            <p className='mt-2 text-gray-400'>Sign in with Google</p>
          </button>
     </div>
     
      <div className=' flex justify-between'>
      <p class="text-center text-sm text-gray-500">
        No account?
        <Link to={"/Signup"}><a className={`${!mode ? "hover:text-white" : " hover:text-blue-900"} text-blue-600 ml-2`}>Sign up</a></Link>
      </p>
      <Link to={'/ForgetPassword'}><a className=' hover:text-blue-600 text-gray-500'>Forgot Password</a></Link>
      </div>
      
      
    </form>
  </div>
</div>
</div>
  )
}

export default Signin