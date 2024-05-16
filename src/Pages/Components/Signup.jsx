  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { useContext } from "react";
  import { AppContext } from "../../../src/assets/pages/context";
  import axios from "axios";

  const Signup = () => {
    const { mode } = useContext(AppContext);

    // const [userInfo, setUserInfo] = useState({
    //   firstName: ""
    // });

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // const isValidEmail = (email) => {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   return emailRegex.test(email);
    // };

    const isValid = () => {
      let valid = true;
      if (!firstName.trim()) {
        setFirstNameError("FirstName is required");
        valid = false;
      } else {
        setFirstNameError("");
      }

      if (!lastName.trim()) {
        setLastNameError("LastName is required");
        valid = false;
      } else {
        setLastNameError("");
      }

      if (!email.trim()) {
        setEmailError("LastName is required");
        valid = false;
      }
      // else if (isValidEmail(email)) {
      //   setEmailError("Email provided is invalid");
      //   valid = false;
      // }
      else {
        setEmailError("");
      }

      if (!phone.trim()) {
        setPhoneError("LastName is required");
        valid = false;
      } else {
        setPhoneError("");
      }

      if (!password.trim()) {
        setPasswordError("LastName is required");
        valid = false;
      } else {
        setPasswordError("");
      }

      if (!confirmpassword.trim()) {
        setConfirmPasswordError("LastName is required");
        valid = false;
      } else {
        setConfirmPasswordError("");
      }
      return valid;
    };
    // const [formData, setFormData] = useState({
    //   firstName: '',
    //   lastName:'',
    //   email: '',
    //   phone:'',
    //   password: '',
    //   confirmpassword: '',
    // });

    // const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const newErrors = {};

    //   if (formData.firstName === "") {
    //     newErrors.firstName = "Please enter your First Name";
    //   }
    //   if (formData.lastName === "") {
    //     newErrors.lastName = "Please enter your Last Name";
    //   }
    //   if (formData.email === "") {
    //     newErrors.email = "Please enter your Email";
    //   }
    //   if (formData.phone === "") {
    //     newErrors.phone = "Please enter your Number";
    //   }
    //   if (formData.password === "") {
    //     newErrors.password = "Please enter your Password";
    //   }
    //   if (formData.password !== formData.confirmpassword) {
    //     newErrors.confirmpassword = "password not match";
    //   } else {
    //     newErrors.confirmpassword = " please confirm your password";
    //   }

    //   setErrors(newErrors);
    // };

    const handleSignUp = async (e) => {
      e.preventDefault();
      
      // if(isValid()){
      //   return;
      // }

      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password,
        confirmpassword: confirmpassword,
      }

      

      const config = {
        headers: {
          "Content-Type": "application/json",
       
        }
      }

      // if (isValid() === true) {
        await axios.post("https://huza-backend-app-api.onrender.com/api/skilled/createSkilled", data, config)
          .then((response) => {
            console.log("response.data", response.data);
          })
          .catch((Error) => {
            console.log(Error);
          });
      // }
    };

    return (
      <div
        className={
          !mode ? "bg-gradient-to-r from-slate-950 to-slate-950" : "bg-gray-50"
        }
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-[65rem]">
          <div
            className={`mx-auto mt-24 pt-16 max-w-lg ${
              !mode ? "bg-gray-800" : "bg-white"
            } `}
          >
            <h1
              className={`text-center text-2xl font-bold  sm:text-3xl font-serif ${
                !mode ? "text-white" : "text-indigo-600"
              }`}
            >
              REGISTRATION FORM
            </h1>

            <form
              onSubmit={handleSignUp}
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 font-serif"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className={`w-full rounded-lg border-gray-200 ${
                      !mode ? "bg-gray-700" : "bg-gray-100"
                    } p-4  text-sm shadow-sm`}
                    placeholder="Enter First Name"
                  />
                  {firstNameError?(<p className="text-red-300">{firstNameError}</p>):null}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full rounded-lg border-gray-200 ${
                      !mode ? "bg-gray-700" : "bg-gray-100"
                    } p-4  text-sm shadow-sm`}
                    placeholder="Enter Last Name"
                  />
                  {/* {errors.lastName && (
                    <p className="text-red-300">{errors.lastName}</p>
                  )} */}
                  {lastNameError ? (
                    <p className="text-red-300">{lastNameError}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-lg border-gray-200 ${
                      !mode ? "bg-gray-700" : "bg-gray-100"
                    } p-4  text-sm shadow-sm`}
                    placeholder="Enter Your Email"
                  />
                  {/* {errors.email && <p className="text-red-300">{errors.email}</p>} */}
                  {emailError ? (
                    <p className="text-red-300">{emailError}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full rounded-lg border-gray-200 ${
                      !mode ? "bg-gray-700" : "bg-gray-100"
                    } p-4  text-sm shadow-sm`}
                    placeholder="Phone Number"
                  />
                  {/* {errors.phone && (
                    <p className="text-red-300"> {errors.phone}</p>
                  )} */}
                  {phoneError ? (
                    <p className="text-red-300">{phoneError}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(v) => setPassword(v.target.value)}
                    className={`w-full rounded-lg border-gray-200 ${
                      !mode ? "bg-gray-700" : "bg-gray-100"
                    } p-4  text-sm shadow-sm`}
                    placeholder="Enter Password"
                  />
                  {/* {errors.password && (
                    <p className="text-red-300">{errors.password}</p>
                  )} */}
                  {passwordError ? (
                    <p className="text-red-500">{passwordError}</p>
                  ) : null}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmpassword"
                      value={confirmpassword}
                      onChange={(n) => setConfirmPassword(n.target.value)}
                      className={`w-full rounded-lg ${
                        !mode ? "bg-gray-700" : "bg-gray-100"
                      } border-gray-200   p-4  text-sm shadow-sm`}
                      placeholder="Confirm Password"
                    />
                    {/* {errors.confirmpassword && (
                      <p className="text-red-300">{errors.confirmpassword}</p>
                    )} */}
                    {confirmPasswordError ? (
                      <p className="text-red-300">{confirmPasswordError}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* <Link to={"/verify"}> */}
              <button
                type="submit"
                // onClick={handleSignUp}
                className={`block w-full rounded-lg ${
                  !mode ? "bg-blue-900" : "bg-indigo-600"
                }  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900 mt-5`}
              >
                Create an account
              </button>
              {/* </Link> */}
              <div className=" flex justify-center mt-5">
                <button
                  className={` flex justify-center rounded-lg gap-5 px-5 w-full border-gray-200 ${
                    !mode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <img src="/gogle.png" className=" w-10" />
                  <p className="mt-2 text-gray-400">Sign up with Google</p>
                </button>
              </div>
              <div className="col-span-6">
                <label className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-500">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className={`${
                    !mode ? "hover:text-white" : " hover:text-blue-900"
                  } text-blue-600`}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Signup;
