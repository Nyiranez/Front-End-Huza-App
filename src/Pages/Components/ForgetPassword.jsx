import React, { useState } from 'react'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../assets/pages/context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgetPassword = () => {
    const { mode } = useContext(AppContext)
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();
    const isValid = () => {
      let valid = true;
      if (!email.trim()) {
        setEmailError("LastName is required");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    const handleForgot= async(e) =>{
      e.preventDefault();
      await axios ({
        url:"https://huza-backend-app-api.onrender.com/api/allUsers/forgotPassword",
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
        },
      }).then ((Response)=>{
        console.log("Response.data",Response.data);
        navigate("/resetPassword");
      }).catch ((error)=>{
        console.log(error)
      });
    }
      return (
        <div className={!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[50rem] mt-20">
      <div className={`mx-auto mt-16 pt-20 max-w-lg ${!mode ? "bg-gray-800" : "bg-white"} `}>
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl font-serif">FORGOT PASSWORD</h1>
    
        <form onSubmit={handleForgot}  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
          <div>
            <label for="Email" class="sr-only">Email</label>
    
            <div className="relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-slate-100"} p-4  text-sm shadow-sm`}
                placeholder="Enter Email"
                
              />
             
            </div>
          </div>
          <button
            type="submit"
            class={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`}
          >
            SEND
          </button>
          <div className=' flex text-gray-400 justify-center hover:text-blue-600'>
          <MdKeyboardDoubleArrowLeft className=' mt-1'/>
          <Link to={"/Signin"}><a className={`${!mode ? "hover:text-white" : " hover:text-blue-900"} text-blue-600 ml-2`}>Back To Login</a></Link>
          </div>
          
        </form>
      </div>
    </div>
    </div>
      )
    }

export default ForgetPassword