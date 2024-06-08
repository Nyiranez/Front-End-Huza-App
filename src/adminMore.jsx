import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";

export const AdminMore = () => {
  const [profile, setProfile] = useState()

  let { Id } = useParams();

  const handleMore = (id) => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById/" + id)
      .then((resp) => {
        setProfile(resp.data.profile);
        console.log(resp.data.profile);
      }).catch((error) => {
        console.log(error);
        // alert("Failed to fetch contact");
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

    <div className='mt-32  px-4 py-2 border-2 bg-slate-50  border-gray-200'>
      {/* <button><NavLink to="enhancedTable">Back</NavLink></button> */}
      {/* <div className='font-bold text-2xl bg-white w-1/3 shadow-inner '>Full Profile</div> */}

      <div className='px-4 py-2 border-2 bg-slate-50  border-gray-200 w-[70rem]'>
        {/* <button><NavLink to="enhancedTable">Back</NavLink></button> */}
        <div className='font-bold text-2xl bg-white w-full flex justify-center shadow-inner '>Full Profile</div>


        <div className=' flex justify-center'><img src={profile ? profile.photo : "not found"} className='h-16 w-16 mt-10 rounded-full'></img></div>
          <div>
            <div className='mt-4  p-4 flex justify-center'><p className='text-black font-bold'>FirstName : <span className='text-gray-400 ml-4'>{profile ? profile.firstName : "Not available"}</span></p></div>
            <div className='mt-4  p-4 flex justify-center'><p className='text-black font-bold'>LastName : <span className='text-gray-400 ml-4'>{profile ? profile.lastName : "Not available"}</span></p> </div>
            <div className='mt-4  p-4 flex justify-center'><p className='text-black font-bold'>E-mail :<span className='text-gray-400 ml-4'>{profile ? profile.email : "Not available"}</span></p> </div>
            <div className='mt-4   p-4 flex justify-center'><p className='text-black font-bold'>Category :<span className='text-gray-400 ml-4'>{profile ? profile.category : "Not available"}</span></p> </div>
            <div className='mt-4   p-4 flex justify-center'><p className='text-black font-bold'>Address :<span className='text-gray-400 ml-4'>{profile ? profile.district : "Not available"}</span></p> </div>
            {/* <div className='mt-4   p-4 flex flex-row'><p className='text-white font-bold '>National ID :</p> <img className=' ml-4 h-16 w-16' src={profile ? profile.nationalID : "Not available"} alt=''></img></div>
            <div className='mt-4   p-4 flex flex-row'><p className='text-white font-bold'>RESUME :</p> <img className=' ml-4 h-16 w-16' src={profile ? profile.resume : "Not available"} alt=''></img> </div>

          </div>
          <div>
            <div className='mt-4   p-4 flex flex-row'><p className='text-white font-bold'>Certificate :</p><img className=' ml-4 h-16 w-16 ' src={profile ? profile.certificate : "Not available"} alt=''></img> </div> */}
            
            <div className='mt-4  p-4 flex justify-center'><p className='text-black font-bold'>Status :<span className='text-gray-400 ml-4'>{profile ? profile.status : "Not available"}</span></p> </div>
            <div className='mt-4   p-4 flex justify-center'><p className='text-black font-bold'>Created on :<span className='text-gray-400 ml-4'>{profile ? profile.createdAt : "Not available"}</span></p> </div>
            <div className='mt-4   p-4 flex justify-center '><p className='text-black font-bold'>updated on :<span className='text-gray-400 ml-4'>{profile ? profile.updatedAt : "Not available"}</span></p> </div>
            <div className='mt-16 space-x-4 ml-8 flex justify-center'>
              <button className='bg-green-900 text-white px-4 py-2 hover:bg-blue-600 rounded-full' onClick={() => handleApprove(profile.email)}>Approve</button>
              <button className='hover:bg-red-950 hover:text-white px-4 py-2 bg-black text-white rounded-full' onClick={() => handleReject(profile.email)}>Reject</button>
            </div>
        </div>
      </div>



    </div>
  )
}
