import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";

export const AdminMore = () => {
  const [profile, setProfile] = useState()

  let { Id } = useParams();

  const handleMore = (id) => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById?id=" + id)
      .then((resp) => {
        setProfile(resp.data.profile);
      }).catch((error) => {
        console.log(error);
        alert("Failed to fetch contact");
      });
  };

  const handleApprove=(email)=>{
    axios.get("https://huza-backend-app-api-1.onrender.com/api/profile/approveProfile?email=" + email).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  const handleReject=(email)=>{
    axios.get("https://huza-backend-app-api-1.onrender.com/api/profile/reject?email=" + email).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }



  useEffect(() => {
    handleMore(Id);
  }, [Id]);

  return (
<<<<<<< HEAD
    <div className='mt-32  px-4 py-2 border-2 bg-slate-50  border-gray-200'>
      {/* <button><NavLink to="enhancedTable">Back</NavLink></button> */}
      <div className='font-bold text-2xl bg-white w-1/3 shadow-inner '>Full Profile</div>
=======
    <div className='mt-32  px-4 py-2 border-2 bg-slate-50  border-gray-200 w-[70rem]'>
{/* <button><NavLink to="enhancedTable">Back</NavLink></button> */}
      <div className='font-bold text-2xl bg-white w-full flex justify-center shadow-inner '>Full Profile</div>
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1

      <div className=' flex justify-center'><img src={profile ? profile.photo : "not found"} className='h-16 w-16 mt-10 rounded-full'></img></div>
      <div className='space-x-4 flex flex-row justify-center'>
        <div>
<<<<<<< HEAD
          <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>FirstName : <span className='text-gray-400 ml-4'>{profile ? profile.firstName : "Not available"}</span></p></div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>LastName : <span className='text-gray-400 ml-4'>{profile ? profile.lastName : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>E-mail :<span className='text-gray-400 ml-4'>{profile ? profile.email : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>Category :<span className='text-gray-400 ml-4'>{profile ? profile.category : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>Address :<span className='text-gray-400 ml-4'>{profile ? profile.district : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4 flex flex-row'><p className='text-white font-bold '>National ID :</p> <img className=' ml-4 h-16 w-16' src={profile ? profile.nationalID : "Not available"} alt=''></img></div>
          <div className='mt-4 bg-blue-950  p-4 flex flex-row'><p className='text-white font-bold'>RESUME :</p> <img className=' ml-4 h-16 w-16' src={profile ? profile.resume : "Not available"} alt=''></img> </div>

        </div>
        <div>
          <div className='mt-4 bg-blue-950  p-4 flex flex-row'><p className='text-white font-bold'>Certificate :</p><img className=' ml-4 h-16 w-16 ' src={profile ? profile.certificate : "Not available"} alt=''></img> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>Did you finished ? :<span className='text-gray-400 ml-4'>{profile ? (profile.didyoufinished) ? "Yes" : "No" : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>TimeofStudy :<span className='text-gray-400 ml-4'>{profile ? profile.timeofstudy : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>Status :<span className='text-gray-400 ml-4'>{profile ? profile.status : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4'><p className='text-white font-bold'>Created on :<span className='text-gray-400 ml-4'>{profile ? profile.createdAt : "Not available"}</span></p> </div>
          <div className='mt-4 bg-blue-950  p-4 '><p className='text-white font-bold'>updated on :<span className='text-gray-400 ml-4'>{profile ? profile.updatedAt : "Not available"}</span></p> </div>
          <div className='mt-16 space-x-4 ml-8'>
            <button className='bg-green-900 text-white px-4 py-2 hover:bg-blue-600 rounded-full' onClick={()=>handleApprove(profile._id)}>Approve</button>
            <button className='hover:bg-red-950 hover:text-white px-4 py-2 bg-white text-black rounded-full' onClick={()=>handleReject(profile.email)}>Reject</button>
          </div>
=======
          <div className='mt-4  p-4'><p className='text-black font-bold mt-8'>FirstName : <span className='text-gray-400 ml-4'>{profile ? profile.firstName : "Not available"}</span></p></div>
          <div className='mt-4   p-4'><p className='text-black font-bold mt-3'>LastName : <span className='text-gray-400 ml-4'>{profile ? profile.lastName : "Not available"}</span></p> </div>
          <div className='mt-4   p-4'><p className='text-black font-bold'>E-mail :<span className='text-gray-400 ml-4'>{profile ? profile.email : "Not available"}</span></p> </div>
          <div className='mt-4   p-4'><p className='text-black font-bold'>Category :<span className='text-gray-400 ml-4'>{profile ? profile.category : "Not available"}</span></p> </div>
          <div className='mt-4   p-4'><p className='text-black font-bold'>Address :<span className='text-gray-400 ml-4'>{profile ? profile.district : "Not available"}</span></p> </div>
          <div className='mt-4   p-4 flex flex-row'><p className='text-black font-bold py-5 '>National ID :</p> <img className=' ml-4 h-16 w-16' src={profile ? profile.nationalID : "Not available"} alt=''></img></div>
          <div className='mt-4   p-4 flex flex-row'><p className='text-black font-bold py-5'>RESUME :</p> <img className=' ml-4 h-16 w-16' src={profile ? profile.resume : "Not available"} alt=''></img> </div>
          
        </div>
        <div>
        <div className='mt-4   p-4 flex flex-row'><p className='text-black font-bold py-5'>Certificate :</p><img className=' ml-4 h-16 w-16 ' src={profile ? profile.certificate : "Not available"} alt=''></img> </div>
          <div className='mt-4   p-4'><p className='text-black font-bold'>Did you finished ? :<span className='text-gray-400 ml-4'>{profile ? (profile.didyoufinished) ? "Yes" : "No" : "Not available"}</span></p> </div>
          {/* <div className='mt-4   p-4'><p className='text-black font-bold'>TimeofStudy :<span className='text-gray-400 ml-4'>{profile ? profile.timeofstudy : "Not available"}</span></p> </div> */}
          <div className='mt-4  p-4'><p className='text-black font-bold'>Status :<span className='text-gray-400 ml-4'>{profile ? profile.status : "Not available"}</span></p> </div>
          <div className='mt-4 p-4'><p className='text-black font-bold'>Created on :<span className='text-gray-400 ml-4'>{profile ? profile.createdAt : "Not available"}</span></p> </div>
          <div className='mt-4   p-4 '><p className='text-black font-bold'>updated on :<span className='text-gray-400 ml-4'>{profile ? profile.updatedAt : "Not available"}</span></p> </div>
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1
        </div>

      </div>





    </div>
  )
}
