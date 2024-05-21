import React, { useState } from 'react'
import { useContext } from "react";
import { AppContext } from "../../../src/assets/pages/context";
import axios from 'axios';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const { mode } = useContext(AppContext);
    const[firstName,setFirstName]=useState(' ');
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
    const [didyoufinished, setDidyoufinished] = useState("");
    const [didyoufinishedError, setDidyoufinishedError] = useState("");
    const [timeofstudy, setTimeofstudy] = useState("");
    const [timeofstudyError, setTimeofstudyError] = useState("");
    const [resume, setResume] = useState("");
    const [resumeError, setRwsumeError] = useState("");
    const [nationalID, setNationalID] = useState("");
    const [nationalIDError, setNationalIDError] = useState("");
    const [certificate,setCertificate] =useState("");
    const [certificateError,setCertificateError]=useState("");
    const [photo, setPhoto] = useState("");
    const [photoError, setPhotoError] = useState("");
    const [category, setCategory] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
     const handleProfile = async (e) =>{
        e.preventDefault();
        if(!validateForm()){
            return;
        }
        setLoading(true);
        await axios({
            url:"https://huza-backend-app-api.onrender.com/api/profile/createProfile",
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            data:{
                firstName:firstName,
                lastName:lastName,
                email:email,
                Address:{
                country:country,
                province:province,
                district:district,
                sector:sector
                },
                education:{
                school:school,
                major:major,
                didyoufinished:didyoufinished,
                timeofstudy:timeofstudy
                },
                documents:{
                resume:resume,
                nationalID:nationalID,
                certificate:certificate,
                photo:photo
            },
                category:category,
            },
        }) .then((response)=> {
            setSuccessMessage("you have created your profile successfully");
            setErrorMessage("");
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage("Created profile is FAIL");
          });
        }
        const validateForm = () => {
            return (
              firstName.trim() !== '' &&
              lastName.trim() !== '' &&
              email.trim() !== '' &&
              country.trim() !== '' &&
              province.trim() !== '' &&
              district.trim() !== '' &&
                sector.trim() !== '' &&
                school.trim() !== '' &&
                major.trim() !== '' &&
                didyoufinished.trim() !== '' &&
                timeofstudy.trim() !== '' &&
                resume.trim() !== '' &&
                nationalID.trim() !== '' &&
                certificate.trim() !== '' &&
                photo.trim() !== '' &&
                category.trim() !== '' 
            );
          };


  return (
    <div className={`${!mode ? "bg-gradient-to-r from-slate-950 to-slate-900" : "bg-gray-50"
      } py-28 px-32 flex flex-col gap-6`}>
        <div>
        <h2 className={`${!mode ? " text-gray-300":" text-black"} flex justify-center items-center text-4xl font-bold`}>Your Profile</h2>
        <div className={`${!mode ? " text-gray-300":" text-black"} font-serif text-xl py-6`}>
        <p>Please enter updated information about yourself</p>
        <p>please be sure sure to fill out all required fields</p>
        <p>indicates as required field</p>
        </div>
        </div>
        
        <div>
            <h2 className={`${!mode ? " text-gray-300":" text-black"} text-2xl font-serif font-bold  mb-3 flex justify-center`}>ENTER YOUR INFORMATION (please enter full legal name or names )</h2>
            <form onSubmit={handleProfile} className='mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 font-serif'>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Personal Information</p>
                <div className=' grid grid-cols-3 bg-white py-5 px-5 rounded-lg'>
                <div className=' flex flex-col  w-[20rem]'>
                <label>First/Given Name(S)</label>
                <input type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your FirstName'/> 
                </div>
                 <div className=' flex flex-col  w-[20rem]'>
                    <label>Last/Family/Surname(S)</label>
                    <input type='text' name='lastName' value={lastName} onChange={(b) => setLastName(b.target.value)} className='border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder='Enter Your LastName'/>
                </div>
                <div className=' flex flex-col  w-[20rem]'>
                <label>Email</label>
                <input type='email' name='email' value={email} onChange={(c) => setEmail(c.target.value)} className='border border-gray-500 rounded-lg py-3 px-5 mt-4 'placeholder=' Enter Your Email'/>
                </div>
                {/* <div className=' flex flex-col w-[20rem]'>
                <label>PhoneNumber</label>
                    <input type='tel' name='phoneNumber'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder=' Enter Your PhoneNumber'/> */}
                    {/* <a className=' text-blue-500 underline'>ADD more phone number</a> */}
                {/* </div> */}
                </div>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Address</p>
               <div className=' bg-white h-[15rem] rounded-lg'>
                
                <div className=' grid grid-cols-3 px-5 py-5 '>
                    <div className=' flex flex-col w-[20rem]'>
                    <label>Country:</label>
                    <input type='text' name='country'value={country} onChange={(e)=> setCountry(e.target.value)} className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your Address[Country]'/>
                    </div>
                    <div className=' flex flex-col w-[20rem]'>
                    <label>District:</label>
                    <input type='text' name='district'value={district} onChange={(e)=> setDistrict(e.target.value)} className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your Address[District]'/>
                    </div>
                    <div className=' flex flex-col w-[20rem]'>
                    <label>Sector:</label>
                    <input type='text' name='sector'value={sector} onChange={(e)=> setSector(e.target.value)} className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your Address[Sector'/>
                    </div>
                 </div>
                    
                </div>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Education</p>
                <div className='bg-white h-[15rem] rounded-lg'>
                    <div className='grid grid-cols-3 px-5 py-5'>
                        <div className=' flex flex-col w-[20rem]'>
                        <label>School:</label>
                        <input type='text' name='school'value={school} onChange={(e)=> setSchool(e.target.value)} className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder=' Enter Your Education[School]'/>
                        </div>
                        <div className=' flex flex-col w-[20rem]'>
                        <label>Major:</label>
                        <input type='text' name='school'value={major} onChange={(e)=> setMajor(e.target.value)} className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder=' Enter Your Education[Major]'/>
                        </div>
                  <div className='flex flex-col w-[20rem]'>
                    <p>Did you finish study .</p>
                    <select className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' value={didyoufinished} onChange={(e)=> setDidyoufinished(e.target.value)}>
                        <option value="yes">yes</option>
                        <option value="no" >no</option>
                    </select>
                </div>
                    </div>
                </div>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Document</p>
                <div className=' bg-white grid grid-cols-2 h-[15rem] px-5 py-5 rounded-lg'>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">Resume file:</label>
                <input type="file" id="files" name="file" value={resume} onChange={(e)=> setResume(e.target.value)} multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">National ID file:</label>
                <input type="file" id="files" name="file" value={nationalID} onChange={(e)=>setNationalID(e.target.value)} multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">Certificate file:</label>
                <input type="file" id="files" name="file" value={certificate} onChange={(e) =>setCertificate(e.target.value)} multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">Photo file:</label>
                <input type="file" id="files" name="file" value={photo} onChange={(e) =>setPhoto(e.target.value)} multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                </div>
                <div className=' flex flex-colw-[20rem]'>
               
                <select className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' value={category} onChange={(e) =>setCategory(e.target.value)}>
                    <option value="CurnaryArt"> CurnaryArt</option>
                    <option value="branding">branding</option>
                    <option value="Makeup Design">Makeup Design</option>
                    <option value="plaint">plaint</option>
                </select>
                </div>
                <div>
                    <button type='submit' onClick={handleProfile} className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`} disabled={loading || !validateForm()}> {loading ? "SEND YOUR INFORMATION is loading..." :"SEND YOUR INFORMATION"}</button>
                </div>
                {successMessage && <p className="text-red-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </form>
        </div>
       
    </div>
  )
}

export default Profile