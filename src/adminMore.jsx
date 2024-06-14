import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const AdminMore = () => {
  const [profile, setProfile] = useState()
  let { Id } = useParams();

  const handleMore = (id) => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById/" + id)
      .then((resp) => {
        setProfile(resp.data.profile);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleApprove = (email) => {
    axios.get(`https://huza-backend-app-api-1.onrender.com/api/profile/approveProfile?email=${email}`).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleReject = (email) => {
    axios.get(`https://huza-backend-app-api-1.onrender.com/api/profile/reject?email=${email}`).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    handleMore(Id);
  }, [Id]);

  return (
    <div className='mt-8 px-4 py-2 sm:mt-16 md:mt-24 lg:mt-32 border-2 bg-slate-50 border-gray-200'>
      <div className='font-bold text-2xl bg-white w-full flex justify-center shadow-inner'>Full Profile</div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-6 md:px-10'>
        <div className='py-10'>
          <img src={profile ? profile.photo : "not found"} className='h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem] lg:h-[14rem] lg:w-[14rem] mt-10 rounded-full' alt="Profile"></img>
        </div>
        <div className='py-5'>
          <div className='mt-4 p-4'><p className='text-black font-bold'>FirstName : <span className='text-gray-400 ml-4'>{profile ? profile.firstName : "Not available"}</span></p></div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>LastName : <span className='text-gray-400 ml-4'>{profile ? profile.lastName : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>E-mail :<span className='text-gray-400 ml-4'>{profile ? profile.email : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>Category :<span className='text-gray-400 ml-4'>{profile ? profile.category : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>Address :<span className='text-gray-400 ml-4'>{profile ? profile.district : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>Status :<span className='text-gray-400 ml-4'>{profile ? profile.status : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>Created on :<span className='text-gray-400 ml-4'>{profile ? profile.createdAt : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>Updated on :<span className='text-gray-400 ml-4'>{profile ? profile.updatedAt : "Not available"}</span></p> </div>
          <div className='mt-16 md:mt-20 lg:mt-24 space-x-4 '>
          <button className='bg-green-900 text-white px-4 py-2 hover:bg-blue-600 rounded-full' onClick={() => handleApprove(profile.email)}>Approve</button>
          <button className='hover:bg-red-950 hover:text-white px-4 py-2 bg-black text-white rounded-full' onClick={() => handleReject(profile.email)}>Reject</button>
        </div>
        </div>
       
      </div>
    </div>
  )
}
