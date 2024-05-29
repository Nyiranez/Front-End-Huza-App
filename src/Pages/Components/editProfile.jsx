import React, { useState, useContext } from "react";
import { AppContext } from "../../../src/assets/pages/context";
import axios from "axios";
import { Link } from "react-router-dom";

const EditProfile = () => {
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

  const handleEditProfile = async (e) => {
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
      setSuccessMessage("Profile edited successfully!");
    } catch (error) {
      setErrorMessage("An error occurred while editting your profile.");
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
      nationalID !== null &&
      certificate !== null &&
      photo !== null &&
      category.trim() !== ""
    );
  };

  return (
    <div
      className={`${
        !mode ? "bg-gradient-to-r from-slate-950 to-slate-900" : "bg-gray-50"
      } py-28 px-32 flex flex-col gap-6`}
    >
      <div>
        <h2
          className={`${
            !mode ? " text-gray-300" : " text-black"
          } flex justify-center items-center text-4xl font-bold`}
        >
          Your Profile
        </h2>
        <div
          className={`${
            !mode ? " text-gray-300" : " text-black"
          } font-serif text-xl py-6`}
        >
          <p>Please enter updated information about yourself</p>
          <p>Please be sure to fill out all required fields</p>
          <p>Indicates as required field</p>
        </div>
      </div>

      <div>
        <h2
          className={`${
            !mode ? " text-gray-300" : " text-black"
          } text-2xl font-serif font-bold  mb-3 flex justify-center`}
        >
          ENTER YOUR INFORMATION (please enter full legal name or names)
        </h2>
        <form
          onSubmit={handleEditProfile}
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
          <div className=" bg-white h-[25rem] rounded-lg">
            <div className=" grid  lg:grid-cols-2  grid-cols-1 px-5 py-5 ">
              <div className=" flex flex-col w-[20rem]">
                <label>Country:</label>
                <input
                  type="text"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Address[Country]"
                />
              </div>
              <div className=" flex flex-col w-[20rem]">
                <label>Province:</label>
                <input
                  type="text"
                  name="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Address[Province]"
                />
              </div>
              <div className=" flex flex-col w-[20rem]">
                <label>District:</label>
                <input
                  type="text"
                  name="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Address[District]"
                />
              </div>
              <div className=" flex flex-col w-[20rem]">
                <label>Sector:</label>
                <input
                  type="text"
                  name="sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Address[Sector]"
                />
              </div>
            </div>
          </div>
          <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
            Education
          </p>
          <div className="bg-white h-[25rem] rounded-lg">
            <div className="grid lg:grid-cols-2 grid-cols-1 px-5 py-5">
              <div className=" flex flex-col w-[20rem]">
                <label>School:</label>
                <input
                  type="text"
                  name="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Education[School]"
                />
              </div>
              <div className=" flex flex-col w-[20rem]">
                <label>Major:</label>
                <input
                  type="text"
                  name="major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter Your Education[Major]"
                />
              </div>
              <div className="flex flex-col w-[20rem]">
                <p>Did you finish study</p>
                <select
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  value={didYouFinish}
                  onChange={(e) => setDidYouFinish(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className=" flex flex-col w-[20rem]">
                <label>Time of finished study:</label>
                <input
                  type="text"
                  name="timeOfStudy"
                  value={timeOfStudy}
                  onChange={(e) => setTimeOfStudy(e.target.value)}
                  className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
                  placeholder="Enter time you finished study"
                />
              </div>
            </div>
          </div>
          <p className={`${!mode ? " text-gray-300" : " text-black"} text-2xl`}>
            Document
          </p>
          <div className=" bg-white grid lg:grid-cols-2 grid-cols-1 h-[25rem] px-5 py-5 rounded-lg">
            <div className="flex flex-col w-[20rem]">
              <label>Resume file:</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={(e) => setResume(e.target.files[0])}
                className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
              />
            </div>
            <div className="flex flex-col w-[20rem]">
              <label>National ID file:</label>
              <input
                type="file"
                id="nationalID"
                name="nationalID"
                onChange={(e) => setNationalID(e.target.files[0])}
                className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
              />
            </div>
            <div className="flex flex-col w-[20rem]">
              <label>Certificate file:</label>
              <input
                type="file"
                id="certificate"
                name="certificate"
                onChange={(e) => setCertificate(e.target.files[0])}
                className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
              />
            </div>
            <div className="flex flex-col w-[20rem]">
              <label>Photo file:</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
                className=" border border-gray-500 rounded-lg py-3 px-5 mt-4"
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10 ">
            <select
              className=" border border-gray-500 rounded-lg py-3 px-5 mt-4 w-[20rem]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Culinary Art">Culinary Art</option>
              <option value="Braiding">Braiding</option>
              <option value="Makeup Design">Makeup Design</option>
              <option value="Paint">Paint</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value={
                loading
                  ? "UPDATE is loading..."
                  : "UPDATE"
              }
              disabled={loading || !validateForm()}
              className={`block w-full rounded-lg ${
                !mode ? "bg-blue-900" : "bg-indigo-600"
              } px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`}
            />
          </div>
          
          
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      
          
      </div>
    </div>
  );
};

export default EditProfile;