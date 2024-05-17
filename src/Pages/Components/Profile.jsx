import React from 'react'

const Profile = () => {
  return (
    <div>
        <div>
        <h2>Your Profile</h2>
        <p>Please enter updated information about yourself</p>
        <p>please be sure sure to fill out all required fields</p>
        <p>indicates as required field</p>
        </div>
        
        <div className=' flex gap-2'>
            <p>Connect with </p>
            <img src='./gogle.png'className=' w-[4rem]'/>
        </div>
        <div>
        <a className=' text-blue-600 underline'> Disconnect</a>
        <h2>Resume</h2>
        <p>please upload your resume (max size :5MB) your details will be parsed in fields below .please correct where necessary</p>
        <button className=' border border-black'>Replace Resume</button>
        </div>
        <div>
            <h2>ENTER YOUR INFORMATION (please enter full legal name or names )</h2>
            <form>
                <label>First/Given Name(S)</label>
                <input type='text' name='firstName'/>
                <label>Preferred Name</label>
                <input type='text' name='firstName'/>
                <div>
                    <label>Middle Name</label>
                    <input type='text' name=''/>
                    <label>Last/Family/Surname(S)</label>
                    <input type='text' name='lastName'/>
                </div>
                <label>Full Name</label>
                <input type='text' name='fullName'/>
                <label>Email</label>
                <input type='email' name='email'/>
                <p>Phone Number</p>
                <div className='flex '>
                    <label>Type</label>
                    <input type='text' name='type'/>
                    <label>Country Code(+XX)</label>
                    <input type='country' name='counrty'/>
                    <label>Number</label>
                    <input type='tel' name='phoneNumber'/>
                    <a className=' text-blue-500 underline'>ADD more phone number</a>
                </div>
                <p>Are you willing to receive text/SMS message? Standard texting charges apply.</p>
                <select>
                    <option value="">yes</option>
                    <option value="">no</option>
                </select>
                <p>Are you willing to receive text/SMS message? Standard texting charges apply.</p>
                <select>
                    <option value="">yes</option>
                    <option value="">no</option>
                </select>
                <p>Are you willing to receive text/SMS message? Standard texting charges apply.</p>
                <select>
                    <option value="">yes</option>
                    <option value="">no</option>
                </select>7
            </form>
        </div>
       
    </div>
  )
}

export default Profile