import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../src/assets/pages/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { mode } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [didYouFinish, setDidYouFinish] = useState("");
  const [timeOfStudy, setTimeOfStudy] = useState("");
  const [resume, setResume] = useState(null);
  const [nationalID, setNationalID] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [verifyProfil, setVerifyProfil] = useState(null);
  const navigate = useNavigate()
  // Initialize as null
  const validateForm = () => {
    return (
      firstName?.trim() !== "" &&
      lastName?.trim() !== "" &&
      email?.trim() !== "" &&
      country?.trim() !== "" &&
      province?.trim() !== "" &&
      district?.trim() !== "" &&
      sector?.trim() !== "" &&
      school?.trim() !== "" &&
      major?.trim() !== "" &&
      didYouFinish?.trim() !== "" &&
      timeOfStudy?.trim() !== "" &&
      resume !== null &&
      nationalID !== null &&
      certificate !== null &&
      photo !== null &&
      category?.trim() !== ""
    );
  };

  const getId = localStorage.getItem("userId");

  const handleProfile = async (e) => {
    e.preventDefault();

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
      console.log(response.data)
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
    console.log("Form submission started");
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

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.put(
        `https://huza-backend-app-api-1.onrender.com/api/profile/update/${getId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage("Profile updated successfully!");
      // Fetch profile again to update the view
      console.log(response.data)
      verifyProfile(getId);
    } catch (error) {
      setErrorMessage("An error occurred while updating your profile.");
    } finally {
      setLoading(false);
    }
  };



  const verifyProfile = async (idf) => {
    try {
      const response = await axios.get(`https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById/${idf}`);
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

  // const handleLogout = () => {
  //   axios.get("https://huza-backend-app-api-1.onrender.com/api/allUsers/logout")
  //     .then((resp) => {
  //       console.log(resp.data);
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 2000);
  //     }).catch((error) => {
  //       console.log(error);
  //       alert("Failed to log out");
  //     });
  // }

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
      {verifyProfil == null ? (
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
                <select
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Category"
                >
                  <option value="CulnaryArt">CulinaryArt</option>
                  <option value="MakeupDesign">MakeupDesign</option>
                  <option value="Braiding">Braiding</option>
                  <option value="Painting">Painting</option>
                </select>
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
              type="submit"
              className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2
            className={`${!mode ? " text-gray-300" : " text-black"
              } text-2xl font-serif font-bold  mb-3 flex justify-center`}
          >
            UPDATE YOUR PROFILE INFORMATION
          </h2>
          <form onSubmit={handleEditProfile}

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
                <select
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Category"
                >
                  <option value="CulnaryArt">CulinaryArt</option>
                  <option value="MakeupDesign">MakeupDesign</option>
                  <option value="Braiding">Braiding</option>
                  <option value="Painting">Painting</option>
                </select>
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
              type="submit"
              className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
            {/* <div>
              <button className="bg-black text-red-600 px-2 py-1" type="button" onClick={handleLogout}>LogOut</button>

            </div> */}
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;

