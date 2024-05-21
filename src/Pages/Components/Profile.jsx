import React, { useState } from 'react'
import { useContext } from "react";
import { AppContext } from "../../../src/assets/pages/context";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const { mode } = useContext(AppContext);
    // const[firstName,setFirstName]=useState(' ');
    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    // const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [country, setCountry] = useState("");
    // const [countryError, setCountryError] = useState("");
    // const [province, setProvince] = useState("");
    // const [provinceError, setProvinceError] = useState("");
    // const [district, setDistrict] = useState("");
    // const [districtError, setDistrictError] = useState("");
    // const [sector, setSector] = useState("");
    // const [sectorError, setSectorError] = useState("");
    // const [school, setSchool] = useState("");
    // const [schoolError, setSchoolError] = useState("");
    // const [major, setMajor] = useState("");
    // const [majorError, setMajorError] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [phoneNumberError, setPhoneNumberError] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [successMessage, setSuccessMessage] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
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
            <form className='mb-0 mt-6 space-y-4 rounded-xl p-4 shadow-lg sm:p-6 lg:p-8 font-serif'>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Personal Information</p>
                <div className=' grid grid-cols-2 bg-white py-5 px-5 rounded-lg'>
                <div className=' flex flex-col  w-[20rem]'>
                <label>First/Given Name(S)</label>
                <input type='text' name='firstName' className='border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your FirstName'/> 
                </div>
                 <div className=' flex flex-col  w-[20rem]'>
                    <label>Last/Family/Surname(S)</label>
                    <input type='text' name='lastName'className='border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder='Enter Your LastName'/>
                </div>
                <div className=' flex flex-col  w-[20rem]'>
                <label>Email</label>
                <input type='email' name='email'className='border border-gray-500 rounded-lg py-3 px-5 mt-4 'placeholder=' Enter Your Email'/>
                </div>
                <div className=' flex flex-col w-[20rem]'>
                <label>PhoneNumber</label>
                    <input type='tel' name='phoneNumber'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder=' Enter Your PhoneNumber'/>
                    {/* <a className=' text-blue-500 underline'>ADD more phone number</a> */}
                </div>
                </div>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Address</p>
               <div className=' bg-white h-[15rem] rounded-lg'>
                
                <div className=' grid grid-cols-3 px-5 py-5 '>
                    <div className=' flex flex-col w-[20rem]'>
                    <label>Country:</label>
                    <input type='text' name='country'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your Address[Country]'/>
                    </div>
                    <div className=' flex flex-col w-[20rem]'>
                    <label>District:</label>
                    <input type='text' name='district'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your Address[District]'/>
                    </div>
                    <div className=' flex flex-col w-[20rem]'>
                    <label>Sector:</label>
                    <input type='text' name='sector'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4' placeholder=' Enter Your Address[Sector'/>
                    </div>
                 </div>
                    
                </div>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Education</p>
                <div className='bg-white h-[15rem] rounded-lg'>
                    <div className='grid grid-cols-3 px-5 py-5'>
                        <div className=' flex flex-col w-[20rem]'>
                        <label>School:</label>
                        <input type='text' name='school'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder=' Enter Your Education[School]'/>
                        </div>
                        <div className=' flex flex-col w-[20rem]'>
                        <label>Major:</label>
                        <input type='text' name='school'className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'placeholder=' Enter Your Education[Major]'/>
                        </div>
                  <div className='flex flex-col w-[20rem]'>
                    <p>Did you finish study .</p>
                    <select className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'>
                        <option value=""> None</option>
                        <option value="">yes</option>
                        <option value="">no</option>
                    </select>
                </div>
                    </div>
                </div>
                <p className={`${!mode ? " text-gray-300":" text-black"} text-2xl`}>Document</p>
                <div className=' bg-white grid grid-cols-2 h-[15rem] px-5 py-5 rounded-lg'>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">Resume file:</label>
                <input type="file" id="files" name="file" multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">National ID file:</label>
                <input type="file" id="files" name="file" multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">Certificate file:</label>
                <input type="file" id="files" name="file" multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                <div className='flex flex-col w-[20rem]'>
                <label for="files">Photo file:</label>
                <input type="file" id="files" name="file" multiple className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'/>
                </div>
                </div>
                <div className=' flex flex-colw-[20rem]'>
               
                <select className=' border border-gray-500 rounded-lg py-3 px-5 mt-4'>
                    <option value=""> CurnaryArt</option>
                    <option value="">branding</option>
                    <option value="">Makeup Design</option>
                    <option value="">plaint</option>
                </select>
                </div>
                <div>
                    <button type='submit' className={`block w-full rounded-lg ${!mode ? "bg-blue-900" : "bg-indigo-600"}  px-5 py-3 text-sm font-medium text-white hover:bg-slate-900`}>SEND YOUR INFORMATION</button>
                </div>
            </form>
        </div>
       
    </div>
  )
}

export default Profile