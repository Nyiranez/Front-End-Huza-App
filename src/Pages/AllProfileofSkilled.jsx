import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from '../../src/assets/pages/context';

const AllProfileofSkilled = () => {
  const { mode } = useContext(AppContext);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://huza-backend-app-api-1.onrender.com/api/profile/allProfile",
      });
      console.log(response.data.profile);
      setContent(response.data.profile);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className={`${!mode ? 'bg-gradient-to-r from-slate-900 to-slate-950' : 'bg-gray-100'} grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center px-32 py-28`}>
      {loading ? (
        <div className="col-span-5 flex justify-center items-center">
          <p className=" text-gray-200">Loading...</p>
        </div>
      ) : (
        content.map((item) => (
          <Link key={item._id} to={`/DetailsForSkilled/${item.user}`}>
            <div
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
    </div>
  );
};

export default AllProfileofSkilled;
