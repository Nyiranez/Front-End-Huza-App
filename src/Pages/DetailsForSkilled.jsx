import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailsForSkilled = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { Id } = useParams();

  const handleMore = async (id) => {
    try {
      const resp = await axios.get(`https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById?id=${id}`);
      setProfile(resp.data.profile);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleMore(Id);
  }, [Id]);

  if (loading) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-32 text-center text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div className="mt-32 text-center">Profile not found</div>;
  }

  return (
    <div className='mt-32  py-2 border-2 bg-slate-50 border-gray-200 px-32'>
      <div className='font-bold text-2xl bg-white w-1/3 shadow-inner'>Full Profile</div>
      <div><img src={profile.photo || "not found"} alt="Profile" className='h-16 w-16 mt-10 rounded-full' /></div>
      <div className='space-y-4'>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>First Name: <span className='text-gray-400 ml-4'>{profile.firstName || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Last Name: <span className='text-gray-400 ml-4'>{profile.lastName || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>E-mail: <span className='text-gray-400 ml-4'>{profile.email || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Category: <span className='text-gray-400 ml-4'>{profile.category || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Address: <span className='text-gray-400 ml-4'>{profile.district || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>National ID:<img src={profile.nationalID || "Not available"}/></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Resume: <img src={profile.resume || "Not available"}/></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Certificate: <img src={profile.certificate || "Not available"}/></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Did you finish?: <span className='text-gray-400 ml-4'>{profile.didyoufinished ? "Yes" : "No"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Time of Study: <span className='text-gray-400 ml-4'>{profile.timeofstudy || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Status: <span className='text-gray-400 ml-4'>{profile.status || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Created on: <span className='text-gray-400 ml-4'>{new Date(profile.createdAt).toLocaleDateString() || "Not available"}</span></p></div>
        <div className='mt-4 bg-blue-950 p-4'><p className='text-white font-bold'>Updated on: <span className='text-gray-400 ml-4'>{new Date(profile.updatedAt).toLocaleDateString() || "Not available"}</span></p></div>
      </div>
    </div>
  );
};

export default DetailsForSkilled;