import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../assets/pages/context';

const Signin = () => {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

  // await axios({
  //   url: "https://huza-backend-app-api.onrender.com/api/allUsers/login",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: {
      
  //     email: email,
      
  //     password: password,
      
  //   },
  // })
  //   .then((response) => {
  //     console.log(response.data);
  //     navigate ("/CurnaryArt");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
  try {
    const response = await axios.post("https://huza-backend-app-api.onrender.com/api/allUsers/login", {
      email,
      password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setSuccessMessage("You have login into your account is successfully");
    setErrorMessage("");
    console.log(response.data);
    setTimeout(()=>{
      if(response.data.user.role === "skilled"){
        localStorage.setItem('userId', response.data.user.id)
        localStorage.setItem("token", response.data.token);
        navigate ('/Profile');
      }
      else if(response.data.user.role === "user"){
        navigate("/AllProfile");
      }
      else if(response.data.user.role === "admin"){
        navigate("/dashboard");
      }
    }, 3000)
   
  } catch (err) {
    setErrorMessage("Something went wrong, please try again");
    console.log(err);
  } finally {
    setLoading(false);
  }
};
  // const validateForm = () => {
  //   return (
      
  //     email.trim() !== '' &&
  //     password.trim() !== ''
  //   );

  // };

  return (
    <div className={!mode ? 'bg-gradient-to-r from-slate-950 to-gray-950' : 'bg-gray-50'}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[65rem]">
        <div className={`mx-auto mt-32 pt-16 max-w-lg ${!mode ? "bg-gradient-to-r from-gray-800 to-gray-800" : "bg-white"}`}>
          <h1 className={`text-center text-2xl font-bold sm:text-3xl font-serif ${!mode ? "text-white" : "text-indigo-600"}`}>SIGN IN </h1>
          <form onSubmit={handleSignUp} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4 text-sm shadow-sm`}
                placeholder="Enter Email"
              />
              {emailError && <p className="text-red-400">{emailError}</p>}
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full rounded-lg border-gray-200 ${!mode ? "bg-gray-700" : "bg-gray-100"} p-4 text-sm shadow-sm`}
                placeholder="Enter Password"
              />
              {passwordError && <p className="text-red-400">{passwordError}</p>}
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            <button
              type="submit"
              className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"} px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`}
              disabled={loading}
            >
              {loading ? "Sign in loading..." : "Sign in"}
            </button>
            <div className='flex justify-between'>
              <p className="text-center text-sm text-gray-500">
                No account?
                <Link to={"/Signup"}>
                  <span className={`${!mode ? "hover:text-white" : "hover:text-blue-900"} text-blue-600 ml-2`}>Sign up</span>
                </Link>
              </p>
              <Link to={'/ForgetPassword'}>
                <span className='hover:text-blue-600 text-gray-500'>Forgot Password</span>
              </Link>
            </div>
            {successMessage && <p className="text-blue-700">{successMessage}</p>}
            {errorMessage && <p className="text-red-700">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
