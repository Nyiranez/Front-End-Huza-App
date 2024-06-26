import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams, NavLink } from 'react-router-dom';
import { AppContext } from '../../src/assets/pages/context';
import { FaArrowDown } from "react-icons/fa6";

const DetailsForSkilled = () => {
  const { mode } = useContext(AppContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { Id } = useParams();

  const handleMore = async (id) => {
    try {
      const resp = await axios.get(`https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileById/${id}`);
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
    <div className={`${!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'} py-28 px-2 sm:px-6 lg:px-8`}>
      <div className=' flex justify-center gap-20'>
        <h2 className="text-2xl font-bold mb-4  text-gray-400">Full Profile</h2>
        <button className=' bg-blue-900 border rounded-lg text-white py-1 px-5 mb-4'>
          <Link  to={"https://buy.stripe.com/test_5kA5ni8oc2cD7cY4gg"} className='flex items-center gap-3'>
            <p>HIRING</p>
        <FaArrowDown />
        </Link></button>
      </div>


      <div className="overflow-x-auto px-28">
        <table className="w-full bg-slate-50 border border-gray-200">
          <tbody>
            <tr>
              <th className="py-3 px-4 sm:px-6 lg:px-8 bg-white font-bold text-left">Field</th>
              <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold text-left">Value</th>

            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Profile Photo :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">
                <img src={profile.photo || "not found"} alt="Profile" className="h-[7rem] w-[7rem] sm:h-[10rem] sm:w-[10rem] lg:h-[12rem] lg:w-[12rem] rounded-full " />
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">First Name :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{profile.firstName || "Not available"}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Last Name :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{profile.lastName || "Not available"}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">E-mail :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{profile.email || "Not available"}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Category :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{profile.category || "Not available"}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Address :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{profile.district || "Not available"}</td>
            </tr>
           
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Status :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8">{profile.status || "Not available"}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Created on :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8 ">{new Date(profile.createdAt).toLocaleDateString() || "Not available"}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Updated on :</td>
              <td className="py-3 px-4 sm:px-6 lg:px-8 ">{new Date(profile.updatedAt).toLocaleDateString() || "Not available"}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DetailsForSkilled;
