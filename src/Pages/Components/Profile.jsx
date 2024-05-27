import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../src/assets/pages/context";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { mode } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [province, setProvince] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [district, setDistrict] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [sector, setSector] = useState("");
  const [sectorError, setSectorError] = useState("");
  const [school, setSchool] = useState("");
  const [schoolError, setSchoolError] = useState("");
  const [major, setMajor] = useState("");
  const [majorError, setMajorError] = useState("");
  const [didYouFinish, setDidYouFinish] = useState("");
  const [didYouFinishError, setDidYouFinishError] = useState("");
  const [timeOfStudy, setTimeOfStudy] = useState("");
  const [timeOfStudyError, setTimeOfStudyError] = useState("");
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [nationalID, setNationalID] = useState(null);
  const [nationalIDError, setNationalIDError] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [certificateError, setCertificateError] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [verifyProfil, setVerifyProfil] = useState(null);
  const navigate = useNavigate()
  // Initialize as null

  const getId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const handleProfile = async (e) => {
    e.preventDefault();

    // let userId = localStorage.getItem("userId");

    if (!validateForm()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("province", province);
    formData.append("district", district);
    formData.append("sector", sector);
    formData.append("school", school);
    formData.append("major", major);
    formData.append("didYouFinish", didYouFinish);
    formData.append("timeOfStudy", timeOfStudy);
    formData.append("resume", resume);
    formData.append("nationalID", nationalID);
    formData.append("certificate", certificate);
    formData.append("photo", photo);
    formData.append("category", category);
    formData.append("user", getId);
    formData.append("user", token);

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://huza-backend-app-api-1.onrender.com/api/profile/createProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage("Profile submitted successfully!");
      // Fetch profile again to update the view
      verifyProfile(getId);
    } catch (error) {
      setErrorMessage("An error occurred while submitting your profile.");
    } finally {
      setLoading(false);
    }
  };



  const handleEditProfile = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("province", province);
    formData.append("district", district);
    formData.append("sector", sector);
    formData.append("school", school);
    formData.append("major", major);
    formData.append("didYouFinish", didYouFinish);
    formData.append("timeOfStudy", timeOfStudy);
    formData.append("resume", resume);
    formData.append("nationalID", nationalID);
    formData.append("certificate", certificate);
    formData.append("photo", photo);
    formData.append("category", category);
    formData.append("user", getId);

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.put(
        `https://huza-backend-app-api-1.onrender.com/api/profile/updateProfile/${getId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage("Profile updated successfully!");
      // Fetch profile again to update the view
      verifyProfile(getId);
    } catch (error) {
      setErrorMessage("An error occurred while updating your profile.");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {

    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      country.trim() !== "" &&
      province.trim() !== "" &&
      district.trim() !== "" &&
      sector.trim() !== "" &&
      school.trim() !== "" &&
      major.trim() !== "" &&
      didYouFinish.trim() !== "" &&
      timeOfStudy.trim() !== "" &&
      resume !== null &&
      resume !== undefined &&
      nationalID !== null &&
      nationalID !== undefined &&
      certificate !== null &&
      certificate !== undefined &&
      photo !== null &&
      photo !== undefined &&
      category.trim() !== ""
    );

    let isValid = true;

    if (firstName.trim() === "") {
      setFirstNameError("First name is required.");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName.trim() === "") {
      setLastNameError("Last name is required.");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (country.trim() === "") {
      setCountryError("Country is required.");
      isValid = false;
    } else {
      setCountryError("");
    }

    if (province.trim() === "") {
      setProvinceError("Province is required.");
      isValid = false;
    } else {
      setProvinceError("");
    }

    if (district.trim() === "") {
      setDistrictError("District is required.");
      isValid = false;
    } else {
      setDistrictError("");
    }

    if (sector.trim() === "") {
      setSectorError("Sector is required.");
      isValid = false;
    } else {
      setSectorError("");
    }

    if (school.trim() === "") {
      setSchoolError("School is required.");
      isValid = false;
    } else {
      setSchoolError("");
    }

    if (major.trim() === "") {
      setMajorError("Major is required.");
      isValid = false;
    } else {
      setMajorError("");
    }

    if (didYouFinish.trim() === "") {
      setDidYouFinishError("Completion status is required.");
      isValid = false;
    } else {
      setDidYouFinishError("");
    }

    if (timeOfStudy.trim() === "") {
      setTimeOfStudyError("Time of study is required.");
      isValid = false;
    } else {
      setTimeOfStudyError("");
    }

    if (!resume) {
      setResumeError("Resume is required.");
      isValid = false;
    } else {
      setResumeError("");
    }

    if (!nationalID) {
      setNationalIDError("National ID is required.");
      isValid = false;
    } else {
      setNationalIDError("");
    }

    if (!certificate) {
      setCertificateError("Certificate is required.");
      isValid = false;
    } else {
      setCertificateError("");
    }

    if (!photo) {
      setPhotoError("Photo is required.");
      isValid = false;
    } else {
      setPhotoError("");
    }

    if (category.trim() === "") {
      setCategoryError("Category is required.");
      isValid = false;
    } else {
      setCategoryError("");
    }

    return isValid;

  };

  const verifyProfile = async (userId) => {
    // let userId = localStorage.getItem("userId");
    try {
      const response = await axios.get(`https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById/${userId}`);
      setVerifyProfil(response.data.profile); // Access the profile data
      if (response.data.profile) {
        // Pre-fill the form with the existing profile data
        setFirstName(response.data.profile.firstName);
        setLastName(response.data.profile.lastName);
        setEmail(response.data.profile.email);
        setCountry(response.data.profile.country);
        setProvince(response.data.profile.province);
        setDistrict(response.data.profile.district);
        setSector(response.data.profile.sector);
        setSchool(response.data.profile.school);
        setMajor(response.data.profile.major);
        setDidYouFinish(response.data.profile.didYouFinish);
        setTimeOfStudy(response.data.profile.timeOfStudy);
        setCategory(response.data.profile.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/allUsers/logout")
      .then((resp) => {
        localStorage.removeItem("userId")
        console.log(resp.data);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }).catch((error) => {
        console.log(error);
        alert("Failed to log out");
      });
  }

  useEffect(() => {
    if (getId) {
      verifyProfile(getId);
    }
  }, [getId]);

  return (

    <div
      className={`${!mode ? "bg-gradient-to-r from-slate-950 to-slate-900" : "bg-gray-50"
        } py-28 px-32 flex flex-col gap-6`}
    >
      {!verifyProfil ? (
        <div>
          <h2
            className={`${!mode ? " text-gray-300" : " text-black"
              } text-2xl font-serif font-bold  mb-3 flex justify-center`}
          >
            ENTER YOUR INFORMATION (please enter full legal name or names)
          </h2>
          <form
            onSubmit={handleProfile}
            className="mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 font-serif"
          >
            <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
              Personal Information
            </p>
            <div className=" grid lg:grid-cols-3 grid-cols-1 bg-white py-5 px-5 rounded-lg">
              <div className=" flex flex-col  w-[20rem]">
                <label>First/Given Name(S)</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your FirstName"
                />
              </div>
              <div className=" flex flex-col  w-[20rem]">
                <label>Last/Family/Surname(S)</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your LastName"
                />
              </div>
              <div className=" flex flex-col  w-[20rem]">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
              Address
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 bg-white py-5 px-5 rounded-lg">
              <div className=" flex flex-col  w-[20rem]">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Country"
                />
              </div>
              <div className=" flex flex-col  w-[20rem]">
                <label>Province/State</label>
                <input
                  type="text"
                  name="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Province"
                />
              </div>
              <div className=" flex flex-col  w-[20rem]">
                <label>District</label>
                <input
                  type="text"
                  name="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your District"
                />
              </div>
              <div className=" flex flex-col  w-[20rem]">
                <label>Sector</label>
                <input
                  type="text"
                  name="sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Sector"
                />
              </div>
            </div>
            <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
              Education Information
            </p>
            <div className=" grid lg:grid-cols-3 grid-cols-1 bg-white py-5 px-5 rounded-lg">
              <div className=" flex flex-col  w-[20rem]">
                <label>School/University/College</label>

                <div className={`${!mode ? "bg-gradient-to-r from-slate-950 to-slate-900" : "bg-gray-50"} py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6`}>
                  <div>
                    <h2 className={`${!mode ? " text-gray-300" : " text-black"} flex justify-center items-center text-3xl sm:text-4xl font-bold`}>
                      Your Profile
                    </h2>
                    <div className={`${!mode ? " text-gray-300" : " text-black"} font-serif text-lg sm:text-xl py-6`}>
                      <p>Please enter updated information about yourself</p>
                      <p>Please be sure to fill out all required fields</p>
                      <p>Indicates as required field</p>
                    </div>
                  </div>

                  <div>
                    <h2 className={`${!mode ? " text-gray-300" : " text-black"} text-xl sm:text-2xl font-serif font-bold mb-3 flex justify-center`}>
                      ENTER YOUR INFORMATION (please enter full legal name or names)
                    </h2>
                    <form onSubmit={handleProfile} className="mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 font-serif">
                      <p className={`${!mode ? " text-gray-300" : " text-black"} text-xl`}>Personal Information</p>
                      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-5 px-5 rounded-lg">
                        <div className="flex flex-col">
                          <label>First/Given Name(S)</label>
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your First Name"
                          />
                          {firstNameError && <p className="text-red-500">{firstNameError}</p>}
                        </div>
                        <div className="flex flex-col">
                          <label>Last/Family/Surname(S)</label>
                          <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your Last Name"
                          />
                          {lastNameError && <p className="text-red-500">{lastNameError}</p>}
                        </div>
                        <div className="flex flex-col">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your Email"
                          />
                          {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>
                        <div className="flex flex-col">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your Country"
                          />
                          {countryError && <p className="text-red-500">{countryError}</p>}
                        </div>
                        <div className="flex flex-col">
                          <label>Province</label>
                          <input
                            type="text"
                            name="province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your Province"
                          />
                          {provinceError && <p className="text-red-500">{provinceError}</p>}
                        </div>
                        <div className="flex flex-col">
                          <label>District</label>
                          <input
                            type="text"
                            name="district"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your District"
                          />
                          {districtError && <p className="text-red-500">{districtError}</p>}
                        </div>
                        <div className="flex flex-col">
                          <label>Sector</label>
                          <input
                            type="text"
                            name="sector"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                            placeholder="Enter Your Sector"
                          />
                          {sectorError && <p className="text-red-500">{sectorError}</p>}
                        </div>
                      </div>
                      <div>
                        <h2 className={`${!mode ? " text-gray-300" : " text-black"} text-xl sm:text-2xl font-serif font-bold mb-3 flex justify-center`}>
                          EDUCATIONAL INFORMATION
                        </h2>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-5 px-5 rounded-lg">
                          <div className="flex flex-col">
                            <label>Name of the school you attend or graduated from</label>

                            <input
                              type="text"
                              name="school"
                              value={school}
                              onChange={(e) => setSchool(e.target.value)}

                              className="border border-gray-500 rounded-lg py-3 px-5 mt-4"

                              className="border border-gray-500 rounded-lg py-3 px-5 mt-2"

                              placeholder="Enter Your School"
                            />
                            {schoolError && <p className="text-red-500">{schoolError}</p>}
                          </div>

                          <div className=" flex flex-col  w-[20rem]">
                            <label>Major</label>

                            <div className="flex flex-col">
                              <label>What is/was your major area of study</label>

                              <input
                                type="text"
                                name="major"
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}

                                className="border border-gray-500 rounded-lg py-3 px-5 mt-4"

                                className="border border-gray-500 rounded-lg py-3 px-5 mt-2"

                                placeholder="Enter Your Major"
                              />
                              {majorError && <p className="text-red-500">{majorError}</p>}
                            </div>

                            <div className=" flex flex-col  w-[20rem]">
                              <label>Did you finish your studies?</label>
                              <input
                                type="text"
                                name="didYouFinish"
                                value={didYouFinish}
                                onChange={(e) => setDidYouFinish(e.target.value)}
                                className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                placeholder="Yes/No"
                              />
                            </div>
                            <div className=" flex flex-col  w-[20rem]">
                              <label>Time of Study (e.g., 2015-2019)</label>

                              <div className="flex flex-col">
                                <label>Did you finish the above Program?</label>
                                <select
                                  name="didYouFinish"
                                  value={didYouFinish}
                                  onChange={(e) => setDidYouFinish(e.target.value)}
                                  className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                >
                                  <option value="">Select an option</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                                {didYouFinishError && <p className="text-red-500">{didYouFinishError}</p>}
                              </div>
                              <div className="flex flex-col">
                                <label>Time period of study</label>

                                <input
                                  type="text"
                                  name="timeOfStudy"
                                  value={timeOfStudy}
                                  onChange={(e) => setTimeOfStudy(e.target.value)}

                                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                  placeholder="Enter Time of Study"
                                />
                              </div>
                              <div className=" flex flex-col  w-[20rem]">
                                <label>Category</label>
                                <input
                                  type="text"
                                  name="category"
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
                                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                  placeholder="Enter Your Category"

                                  className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                  placeholder="Enter Time Period of Study"

                                />
                                {timeOfStudyError && <p className="text-red-500">{timeOfStudyError}</p>}
                              </div>
                            </div>

                            <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
                              Documents Upload
                            </p>
                            <div className="grid lg:grid-cols-2 grid-cols-1 bg-white py-5 px-5 rounded-lg">
                              <div className=" flex flex-col  w-[20rem]">

                              </div>
                              <div>
                                <h2 className={`${!mode ? " text-gray-300" : " text-black"} text-xl sm:text-2xl font-serif font-bold mb-3 flex justify-center`}>
                                  ADDITIONAL INFORMATION
                                </h2>
                                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white py-5 px-5 rounded-lg">
                                  <div className="flex flex-col">

                                    <label>Resume</label>
                                    <input
                                      type="file"
                                      name="resume"
                                      onChange={(e) => setResume(e.target.files[0])}

                                      className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                    />
                                  </div>
                                  <div className=" flex flex-col  w-[20rem]">

                                    <p className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                    />
                                    {resumeError && <p className="text-red-500">{resumeError}</p>}
                                  </div>
                                  <div className="flex flex-col">

                                    <label>National ID</label>
                                    <input
                                      type="file"
                                      name="nationalID"
                                      onChange={(e) => setNationalID(e.target.files[0])}

                                      className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                    />
                                  </div>
                                  <div className=" flex flex-col  w-[20rem]">

                                    <p className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                    />
                                    {nationalIDError && <p className="text-red-500">{nationalIDError}</p>}
                                  </div>
                                  <div className="flex flex-col">

                                    <label>Certificate</label>
                                    <input
                                      type="file"
                                      name="certificate"
                                      onChange={(e) => setCertificate(e.target.files[0])}

                                      className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                    />
                                  </div>
                                  <div className=" flex flex-col  w-[20rem]">

                                    <p className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                    />
                                    {certificateError && <p className="text-red-500">{certificateError}</p>}
                                  </div>
                                  <div className="flex flex-col">

                                    <label>Photo</label>
                                    <input
                                      type="file"
                                      name="photo"
                                      onChange={(e) => setPhoto(e.target.files[0])}

                                      className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                                    />
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"

                                  className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                />
                                {photoError && <p className="text-red-500">{photoError}</p>}
                              </div>
                              <div className="flex flex-col">
                                <label>Category</label>
                                <input
                                  type="text"
                                  name="category"
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
                                  className="border border-gray-500 rounded-lg py-3 px-5 mt-2"
                                  placeholder="Enter Category"
                                />
                                {categoryError && <p className="text-red-500">{categoryError}</p>}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="bg-blue-500 text-white rounded-lg py-3 px-6 mt-4 hover:bg-blue-600 transition duration-300"

                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </button>
                          </div>
                        </form>
                      </div>
                  </div>
                  ) : (
                  <div>
                    <h2
                      className={`${!mode ? " text-gray-300" : " text-black"
                        } text-2xl font-serif font-bold  mb-3 flex justify-center`}
                    >
                      UPDATE YOUR PROFILE INFORMATION
                    </h2>
                    <form

                      className="mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 font-serif"
                    >
                      <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
                        Personal Information
                      </p>
                      <div className=" grid lg:grid-cols-3 grid-cols-1 bg-white py-5 px-5 rounded-lg">
                        <div className=" flex flex-col  w-[20rem]">
                          <label>First/Given Name(S)</label>
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your FirstName"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Last/Family/Surname(S)</label>
                          <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your LastName"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>
                      <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
                        Address
                      </p>
                      <div className="grid lg:grid-cols-2 grid-cols-1 bg-white py-5 px-5 rounded-lg">
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your Country"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Province/State</label>
                          <input
                            type="text"
                            name="province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your Province"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>District</label>
                          <input
                            type="text"
                            name="district"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your District"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Sector</label>
                          <input
                            type="text"
                            name="sector"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your Sector"
                          />
                        </div>
                      </div>
                      <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
                        Education Information
                      </p>
                      <div className=" grid lg:grid-cols-3 grid-cols-1 bg-white py-5 px-5 rounded-lg">
                        <div className=" flex flex-col  w-[20rem]">
                          <label>School/University/College</label>
                          <input
                            type="text"
                            name="school"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your School"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Major</label>
                          <input
                            type="text"
                            name="major"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your Major"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Did you finish your studies?</label>
                          <input
                            type="text"
                            name="didYouFinish"
                            value={didYouFinish}
                            onChange={(e) => setDidYouFinish(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Yes/No"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Time of Study (e.g., 2015-2019)</label>
                          <input
                            type="text"
                            name="timeOfStudy"
                            value={timeOfStudy}
                            onChange={(e) => setTimeOfStudy(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Time of Study"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Category</label>
                          <input
                            type="text"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                            placeholder="Enter Your Category"
                          />
                        </div>
                      </div>
                      <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
                        Documents Upload
                      </p>
                      <div className="grid lg:grid-cols-2 grid-cols-1 bg-white py-5 px-5 rounded-lg">
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Resume</label>
                          <input
                            type="file"
                            name="resume"
                            onChange={(e) => setResume(e.target.files[0])}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>National ID</label>
                          <input
                            type="file"
                            name="nationalID"
                            onChange={(e) => setNationalID(e.target.files[0])}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Certificate</label>
                          <input
                            type="file"
                            name="certificate"
                            onChange={(e) => setCertificate(e.target.files[0])}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                          />
                        </div>
                        <div className=" flex flex-col  w-[20rem]">
                          <label>Photo</label>
                          <input
                            type="file"
                            name="photo"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleEditProfile}
                        className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        disabled={loading}
                      >
                        {loading ? "Updating..." : "Update"}
                      </button>
                      <div>
                        <button className="bg-blue-400 rounded-full text-red-600 px-2 py-1" type="button" onClick={handleLogout}>LogOut</button>

                      </div>
                    </form>
                  </div>
      )}

                </div>
              </form>
              {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
              {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
            </div>

        </div>
      );
};





