import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Verify = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
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
    < div>
    <div className='mx-auto items-center justify-center flex pt-40 border border-gray-50'>
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
      <div>
      </div>
      <div>
        <button type="submit" className='border-2 text-white w-50  bg-blue-500 hover:bg-blue-950
                px-[100px] mx-auto mt-5  p-2 rounded-xl'><Link to ="/Signin">Verify</Link></button>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Verify;