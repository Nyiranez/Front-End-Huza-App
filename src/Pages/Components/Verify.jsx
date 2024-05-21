
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../assets/pages/context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Verify = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const { mode } = useContext(AppContext)
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };
  const [op,setOp]= useState(" ");
  const [error,setError]=useState(" ");
  const navigate = useNavigate();
  const handleOtp =async(e)=>{
    e.preventDefault();
    try{
      const response= await axios.post('https://huza-backend-app-api.onrender.com/api/allUsers/verify',{op}

      );
      console.log('response.data',response.data);
      navigate('/Sigin');
    } catch(error){
      console.log(error)
      setError("invalid OTP")
    }
  };

  return (
    < div className={`mx-auto items-center justify-center flex pt-60 pb-52 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-gray-50'}`}>
    <div className={` bg-gray-100  w-[35rem] h-[27rem] pt-10 px-14 rounded-sm flex flex-col gap-10 ${!mode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg`}>
      <div className=' flex flex-col justify-center text-gray-500 gap-2 items-center'>
        <h2 className=' font-bold text-2xl'>Verify Your Account</h2>
        <p>Enter 6 digit code sent to the registered email id. </p>
      </div>
      <form onSubmit={handleOtp}>
      <div>
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type="text"
            value={op}
            onChange={(e) =>setOp(handleChange(index, e))  }
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className='w-[55px] h-[50px] m-[7px] text-center text-xl border-2 border-gray-500'
          />
        ))}
     {error &&<p>{error}</p>}
      </div>
      <p className='text-gray-500'>Did not receive a code ? <Link to={"/signin"} className=' text-blue-600'>Resend</Link></p>
       <div>
       <button
              type="submit"
              className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-700`}><Link to ="/Signin">Verify</Link></button>
       </div>
       <p className='text-red-400'>Don't share the verification code with anyone!</p>
       </form>
    </div>
   
   </div>
  );
};

export default Verify;