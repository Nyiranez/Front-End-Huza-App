import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AppContext } from '../../src/assets/pages/context';

const AllProfileofSkilled = () => {
  const { mode } = useContext(AppContext);
  const [content, setContent] = useState([]);
  const [filterContent, setFilterContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileByStatus",
      });
      setContent(response.data.profile);
      setFilterContent(response.data.profile);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    if (value === "" || value === undefined) {
      setFilterContent(content);
    } else {
      const filtered = content.filter((user) => user.category.includes(value));
      setFilterContent(filtered);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className={`${!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'} min-h-screen py-10 `}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center lg:justify-end mb-8 mt-28'>
          <div className='flex items-center bg-blue-950 rounded-full p-2'>
            <GoSearch className="text-white mr-2" />
            <select className='px-4 py-2 rounded-full bg-blue-950 text-white' onChange={handleFilter}>
              <option value="">Find By Category</option>
              <option value="Culinary Art">Culinary Art</option>
              <option value="Braiding">Braiding</option>
              <option value="Paint">Paint</option>
              <option value="Makeup Design">MakeUp Design</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center items-center">
              <p className="text-gray-200">Loading...</p>
            </div>
          ) : (
            filterContent.map((item) => (
              <div key={item._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img src={item.photo} className="w-32 h-32 object-cover rounded-full mb-4" alt={`${item.firstName} ${item.lastName}`} />
                <p className="text-lg font-semibold">{item.firstName} {item.lastName}</p>
                <p className="text-gray-500">{item.category}</p>
                <div className="mt-4">
                  <Link to={`/DetailsForSkilled/${item.user}`} className="text-blue-500 hover:underline">
                    More Information
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProfileofSkilled;
