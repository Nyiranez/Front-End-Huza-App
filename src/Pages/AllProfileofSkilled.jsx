import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const AllProfileofSkilled = () => {
  const [content, setContent] = useState([]);
  const [filterContent, setFilterContent] = useState([])

  const handleFetch = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://huza-backend-app-api-1.onrender.com/api/profile/viewProfileByStatus",
      });
      console.log(response.data.profile);
      setContent(response.data.profile);
      setFilterContent(response.data.profile);
    } catch (error) {
      console.log(error);
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
                  borderRadius: "5px",
                }}
              />
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
           
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProfileofSkilled;
