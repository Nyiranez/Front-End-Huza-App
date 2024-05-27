import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { GoSearch } from "react-icons/go";
=======
import { AppContext } from '../../src/assets/pages/context';
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1

const AllProfileofSkilled = () => {
  const { mode } = useContext(AppContext);
  const [content, setContent] = useState([]);
<<<<<<< HEAD
  const [filterContent, setFilterContent] = useState([])
=======
  const [loading, setLoading] = useState(true);
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1

  const handleFetch = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileByStatus",
      });
      console.log(response.data.profile);
      setContent(response.data.profile);
<<<<<<< HEAD
      setFilterContent(response.data.profile);
=======
      setLoading(false);
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1
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
      // setPage(0); // Reset to first page when filter is applied
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
<<<<<<< HEAD
    <div className="mt-32">
      <div className='flex flex-col justify-center items-end'>
        <div className='flex flex-row pr-2 mb-4  rounded-full pl-2 justify-center items-center bg-blue-950 mr-32'>
          <GoSearch className="text-white" />
          <select className='space-y-4 px-6 py-4 rounded-full bg-blue-950 text-white' onChange={handleFilter}>
            <option value="">Find By Category</option>
            <option value="Culinary Art">Culinary Art</option>
            <option value="Braiding">Braiding</option>
            <option value="Paint">Paint</option>
            <option value="Makeup Design">MakeUp Design</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center mt-8 px-32">

        {filterContent.map((item) => (
          <Link to={`/DetailsForSkilled/${item._id}`}>
            <div
              key={item._id}
=======
    <div className={`${!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'} grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center px-32 py-28`}>
      {loading ? (
        <div className="col-span-5 flex justify-center items-center">
          <p className=" text-gray-200">Loading...</p>
        </div>
      ) : (
        content.map((item) => (
          <Link key={item._id} to={`/DetailsForSkilled/${item._id}`}>
            <div
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1
              style={{
                backgroundColor: "white",
                margin: "10px",
                padding: "10px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                color: "black",
              }}
            >
              <img
                src={item.photo}
                alt="muhumuza pic "
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
<<<<<<< HEAD
                  borderRadius: "5px",
                }}
              />
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
           
            </div>
          </Link>
        ))}
      </div>
=======
                  borderRadius: "100%",
                }}
              />
              <p className=" flex justify-center py-2">{item.firstName}</p>
              <p className=" flex justify-center py-2">{item.lastName}</p>
              <p className=" flex justify-center py-2 font-bold">{item.category}</p>
              <div className=" flex justify-center">
              <button className=" text-blue-500 "><Link to={"/DetailsForSkilled/:Id"}>More Information</Link></button>
              </div>
              
            </div>
          </Link>
        ))
      )}
>>>>>>> 97af3cf7d3fc06dc698cec99d4a000b0ab1361e1
    </div>
  );
};

export default AllProfileofSkilled;
