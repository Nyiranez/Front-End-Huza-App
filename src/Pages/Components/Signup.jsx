
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../src/assets/pages/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { mode } = useContext(AppContext);
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const isValid = () => {
  //   let valid = true;
  //   if (!firstName.trim()) {
  //     setFirstNameError("FirstName is required");
  //     valid = false;
  //   } else {
  //     setFirstNameError("");
  //   }

  //   if (!lastName.trim()) {
  //     setLastNameError("LastName is required");
  //     valid = false;
  //   } else {
  //     setLastNameError("");
  //   }

  //   if (!email.trim()) {
  //     setEmailError("LastName is required");
  //     valid = false;
  //   } else {
  //     setEmailError("");
  //   }

  //   if (!phoneNumber.trim()) {
  //     setPhoneNumberError("LastName is required");
  //     valid = false;
  //   } else {
  //     setPhoneNumberError("");
  //   }

  //   if (!password.trim()) {
  //     setPasswordError("LastName is required");
  //     valid = false;
  //   } else {
  //     setPasswordError("");
  //   }

  //   if (!confirmpassword.trim()) {
  //     setConfirmPasswordError("LastName is required");
  //     valid = false;
  //   } else {
  //     setConfirmPasswordError("");
  //   }
  //   return valid;
  // };
      // if(!isValid()){
    //   return;
    // }

    // const data = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   phoneNumber: phoneNumber,
    //   password: password,
    //   confirmpassword: confirmpassword,
    // };

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // if (isValid() === true) {
    // await axios.post("https://huza-backend-app-api.onrender.com/api/allUsers/create", data, config)
    //   .then((response) => {
    //     console.log("response.data", response.data);
    //    navigate ("/verify");
    //   })
    //   .catch((Error) => {
    //     console.log(Error);
      //   });
    // }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(!validateForm()){
      return;
    }
    setLoading(true);


    await axios({
      url: "https://huza-backend-app-api.onrender.com/api/allUsers/create",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        role: role,
        password: password,
        confirmpassword: confirmpassword,
      },
    })
      .then((response) => {
        setSuccessMessage("CREATED ACCOUNT SUCCESSFULLY");
        setErrorMessage("");
        console.log(response.data);
        navigate ("/verify");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("CREATED ACCOUNT FAIL");
      });
  
  }
  const validateForm = () => {
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== ''&&
      password.trim() !== ''&&
      confirmpassword.trim() !== ''
    );
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
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`w-full rounded-lg border-gray-200 ${
                !mode ? "bg-gray-700" : "bg-gray-100"
              } p-4  text-sm shadow-sm text-gray-500`}
            >
              <option value=""> Category</option>
              <option value="user">Employer</option>
              <option value="skilled">Skilled</option>
            </select>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full rounded-lg border-gray-200 ${
                    !mode ? "bg-gray-700" : "bg-gray-100"
                  } p-4  text-sm shadow-sm`}
                  placeholder="Enter First Name"
                />
                {firstNameError ? (
                  <p className="text-red-300">{firstNameError}</p>
                ) : null}
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

                {emailError ? (
                  <p className="text-red-300">{emailError}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`w-full rounded-lg border-gray-200 ${
                    !mode ? "bg-gray-700" : "bg-gray-100"
                  } p-4  text-sm shadow-sm`}
                  placeholder="Phone Number"
                />

                {phoneNumberError ? (
                  <p className="text-red-300">{phoneNumberError}</p>
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

                  {confirmPasswordError ? (
                    <p className="text-red-300">{confirmPasswordError}</p>
                  ) : null}
                </div>
              </div>
            </div>
            {/* <Link to={"/verify"}> */}
            <button
              type="submit"
              onClick={handleSignUp}
              className={`block w-full rounded-lg ${
                !mode ? "bg-blue-900" : "bg-indigo-600"
              }  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900 mt-5`}
              disabled={loading || !validateForm()}
            >
              {loading ? "create account is loading..." :"Create an account"}
            </button>
            
            {/* </Link> */}
            {/* <div className=" flex justify-center mt-5">
              <button
                className={` flex justify-center rounded-lg gap-5 px-5 w-full border-gray-200 ${
                  !mode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <img src="/gogle.png" className=" w-10" />
                <p className="mt-2 text-gray-400">Sign up with Google</p>
              </button>
            </div> */}
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
        {successMessage && <p className="text-red-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

