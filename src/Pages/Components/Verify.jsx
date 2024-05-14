import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../assets/pages/context'


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
  return (
    < div className={`mx-auto items-center justify-center flex pt-60 pb-52 ${!mode ? 'bg-gradient-to-r from-slate-900 to-blue-950' : 'bg-white'}`}>
    <div className={` bg-gray-50  w-[30rem] h-[20rem] pt-20 px-14 rounded-sm flex flex-col gap-10 ${!mode ? "bg-gray-800" : "bg-slate-50"} `}>
      <h2>Verify your account</h2>
      <p>ENTER 6 DIGIT </p>
      <div>
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className='w-[50px] h-[50px] m-[5px] text-center text-xl border-2 border-gray-500'
          />
        ))}
    
      </div>
       <div>
       <button
              type="submit"
              className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-700`}><Link to ="/Signin">Verify</Link></button>
       </div>
    </div>
   </div>
  );
};
export default Verify;