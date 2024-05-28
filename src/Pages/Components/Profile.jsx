// import React, { useState, useContext } from "react";
// import { AppContext } from "../../../src/assets/pages/context";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Profile = () => {
//   const { mode } = useContext(AppContext);
//   const [firstName, setFirstName] = useState("");
//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [country, setCountry] = useState("");
//   const [countryError, setCountryError] = useState("");
//   const [province, setProvince] = useState("");
//   const [provinceError, setProvinceError] = useState("");
//   const [district, setDistrict] = useState("");
//   const [districtError, setDistrictError] = useState("");
//   const [sector, setSector] = useState("");
//   const [sectorError, setSectorError] = useState("");
//   const [school, setSchool] = useState("");
//   const [schoolError, setSchoolError] = useState("");
//   const [major, setMajor] = useState("");
//   const [majorError, setMajorError] = useState("");
//   const [didYouFinish, setDidYouFinish] = useState("");
//   const [didYouFinishError, setDidYouFinishError] = useState("");
//   const [timeOfStudy, setTimeOfStudy] = useState("");
//   const [timeOfStudyError, setTimeOfStudyError] = useState("");
//   const [resume, setResume] = useState(null);
//   const [resumeError, setResumeError] = useState("");
//   const [nationalID, setNationalID] = useState(null);
//   const [nationalIDError, setNationalIDError] = useState("");
//   const [certificate, setCertificate] = useState(null);
//   const [certificateError, setCertificateError] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [photoError, setPhotoError] = useState("");
//   const [category, setCategory] = useState("");
//   const [categoryError, setCategoryError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleProfile = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("email", email);
//     formData.append("country", country);
//     formData.append("province", province);
//     formData.append("district", district);
//     formData.append("sector", sector);
//     formData.append("school", school);
//     formData.append("major", major);
//     formData.append("didYouFinish", didYouFinish);
//     formData.append("timeOfStudy", timeOfStudy);
//     formData.append("resume", resume);
//     formData.append("nationalID", nationalID);
//     formData.append("certificate", certificate);
//     formData.append("photo", photo);
//     formData.append("category", category);

//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     try {
//       const response = await axios.post(
//         "https://huza-backend-app-api-1.onrender.com/api/profile/createProfile",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setSuccessMessage("Profile submitted successfully!");
//     } catch (error) {
//       setErrorMessage("An error occurred while submitting your profile.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;

//     if (firstName.trim() === "") {
//       setFirstNameError("First name is required.");
//       isValid = false;
//     } else {
//       setFirstNameError("");
//     }

//     if (lastName.trim() === "") {
//       setLastNameError("Last name is required.");
//       isValid = false;
//     } else {
//       setLastNameError("");
//     }

//     if (email.trim() === "") {
//       setEmailError("Email is required.");
//       isValid = false;
//     } else {
//       setEmailError("");
//     }

//     if (country.trim() === "") {
//       setCountryError("Country is required.");
//       isValid = false;
//     } else {
//       setCountryError("");
//     }

//     if (province.trim() === "") {
//       setProvinceError("Province is required.");
//       isValid = false;
//     } else {
//       setProvinceError("");
//     }

//     if (district.trim() === "") {
//       setDistrictError("District is required.");
//       isValid = false;
//     } else {
//       setDistrictError("");
//     }

//     if (sector.trim() === "") {
//       setSectorError("Sector is required.");
//       isValid = false;
//     } else {
//       setSectorError("");
//     }

//     if (school.trim() === "") {
//       setSchoolError("School is required.");
//       isValid = false;
//     } else {
//       setSchoolError("");
//     }

//     if (major.trim() === "") {
//       setMajorError("Major is required.");
//       isValid = false;
//     } else {
//       setMajorError("");
//     }

//     if (didYouFinish.trim() === "") {
//       setDidYouFinishError("Completion status is required.");
//       isValid = false;
//     } else {
//       setDidYouFinishError("");
//     }

//     if (timeOfStudy.trim() === "") {
//       setTimeOfStudyError("Time of study is required.");
//       isValid = false;
//     } else {
//       setTimeOfStudyError("");
//     }

//     if (!resume) {
//       setResumeError("Resume is required.");
//       isValid = false;
//     } else {
//       setResumeError("");
//     }

//     if (!nationalID) {
//       setNationalIDError("National ID is required.");
//       isValid = false;
//     } else {
//       setNationalIDError("");
//     }

//     if (!certificate) {
//       setCertificateError("Certificate is required.");
//       isValid = false;
//     } else {
//       setCertificateError("");
//     }

//     if (!photo) {
//       setPhotoError("Photo is required.");
//       isValid = false;
//     } else {
//       setPhotoError("");
//     }

//     if (category.trim() === "") {
//       setCategoryError("Category is required.");
//       isValid = false;
//     } else {
//       setCategoryError("");
//     }

//     return isValid;
//   };

//   return (
//     <div className={`${!mode ? "bg-gradient-to-r from-slate-950 to-slate-900" : "bg-gray-50"} py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6`}>
//       <div>
//         <h2 className={`${!mode ? " text-gray-300" : " text-black"} flex justify-center items-center text-3xl sm:text-4xl font-bold`}>
//           Your Profile
//         </h2>
//         <div className={`${!mode ? " text-gray-300" : " text-black"} font-serif text-lg sm:text-xl py-6`}>
//           <p>Please enter updated information about yourself</p>
//           <p>Please be sure to fill out all required fields</p>
//           <p>Indicates as required field</p>
//         </div>
//       </div>

//       <div>
//         <h2 className={`${!mode ? " text-gray-300" : " text-black"} text-xl sm:text-2xl font-serif font-bold mb-3 flex justify-center`}>
//           ENTER YOUR INFORMATION (please enter full legal name or names)
//         </h2>
//         <form onSubmit={handleProfile} className="mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
//           <p className={`${!mode ? " text-gray-300" : " text-black"} text-xl`}>Personal Information</p>
//           <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-5 px-5 rounded-lg">
//             <div className="flex flex-col">
//               <label>First/Given Name(S)</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your First Name"
//               />
//               {firstNameError && <p className="text-red-500">{firstNameError}</p>}
//             </div>
//             <div className="flex flex-col">
//               <label>Last/Family/Surname(S)</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your Last Name"
//               />
//               {lastNameError && <p className="text-red-500">{lastNameError}</p>}
//             </div>
//             <div className="flex flex-col">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your Email"
//               />
//               {emailError && <p className="text-red-500">{emailError}</p>}
//             </div>
//             <div className="flex flex-col">
//               <label>Country</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your Country"
//               />
//               {countryError && <p className="text-red-500">{countryError}</p>}
//             </div>
//             <div className="flex flex-col">
//               <label>Province</label>
//               <input
//                 type="text"
//                 name="province"
//                 value={province}
//                 onChange={(e) => setProvince(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your Province"
//               />
//               {provinceError && <p className="text-red-500">{provinceError}</p>}
//             </div>
//             <div className="flex flex-col">
//               <label>District</label>
//               <input
//                 type="text"
//                 name="district"
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your District"
//               />
//               {districtError && <p className="text-red-500">{districtError}</p>}
//             </div>
//             <div className="flex flex-col">
//               <label>Sector</label>
//               <input
//                 type="text"
//                 name="sector"
//                 value={sector}
//                 onChange={(e) => setSector(e.target.value)}
//                 className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 placeholder="Enter Your Sector"
//               />
//               {sectorError && <p className="text-red-500">{sectorError}</p>}
//             </div>
//           </div>
//           <div>
//             <h2 className={`${!mode ? " text-gray-300" : " text-black"} text-xl sm:text-2xl font-serif font-bold mb-3 flex justify-center`}>
//               EDUCATIONAL INFORMATION
//             </h2>
//             <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-5 px-5 rounded-lg">
//               <div className="flex flex-col">
//                 <label>Name of the school you attend or graduated from</label>
//                 <input
//                   type="text"
//                   name="school"
//                   value={school}
//                   onChange={(e) => setSchool(e.target.value)}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                   placeholder="Enter Your School"
//                 />
//                 {schoolError && <p className="text-red-500">{schoolError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>What is/was your major area of study</label>
//                 <input
//                   type="text"
//                   name="major"
//                   value={major}
//                   onChange={(e) => setMajor(e.target.value)}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                   placeholder="Enter Your Major"
//                 />
//                 {majorError && <p className="text-red-500">{majorError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>Did you finish the above Program?</label>
//                 <select
//                   name="didYouFinish"
//                   value={didYouFinish}
//                   onChange={(e) => setDidYouFinish(e.target.value)}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 >
//                   <option value="">Select an option</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//                 {didYouFinishError && <p className="text-red-500">{didYouFinishError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>Time period of study</label>
//                 <input
//                   type="text"
//                   name="timeOfStudy"
//                   value={timeOfStudy}
//                   onChange={(e) => setTimeOfStudy(e.target.value)}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                   placeholder="Enter Time Period of Study"
//                 />
//                 {timeOfStudyError && <p className="text-red-500">{timeOfStudyError}</p>}
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className={`${!mode ? " text-gray-300" : " text-black"} text-xl sm:text-2xl font-serif font-bold mb-3 flex justify-center`}>
//               ADDITIONAL INFORMATION
//             </h2>
//             <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-5 px-5 rounded-lg">
//               <div className="flex flex-col">
//                 <label>Resume</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={(e) => setResume(e.target.files[0])}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 />
//                 {resumeError && <p className="text-red-500">{resumeError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>National ID</label>
//                 <input
//                   type="file"
//                   name="nationalID"
//                   onChange={(e) => setNationalID(e.target.files[0])}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 />
//                 {nationalIDError && <p className="text-red-500">{nationalIDError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>Certificate</label>
//                 <input
//                   type="file"
//                   name="certificate"
//                   onChange={(e) => setCertificate(e.target.files[0])}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 />
//                 {certificateError && <p className="text-red-500">{certificateError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>Photo</label>
//                 <input
//                   type="file"
//                   name="photo"
//                   onChange={(e) => setPhoto(e.target.files[0])}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                 />
//                 {photoError && <p className="text-red-500">{photoError}</p>}
//               </div>
//               <div className="flex flex-col">
//                 <label>Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
//                   placeholder="Enter Category"
//                 />
//                 {categoryError && <p className="text-red-500">{categoryError}</p>}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white rounded-lg py-3 px-6 mt-4 hover:bg-blue-600 transition duration-300"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//         {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
//         {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from 'react'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile
