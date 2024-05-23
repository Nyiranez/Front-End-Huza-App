import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProfileofSkilled = () => {
  const [content, setContent] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://huza-backend-app-api-1.onrender.com/api/profile/allProfile",
      });
      console.log(response.data.profile);
      setContent(response.data.profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center mt-32 px-32">
      {content.map((item) => (
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
            {/* <p>{item.email}</p>
                        <p>{item.country}</p>
                        <p>{item.province}</p>
                        <p>{item.district}</p>
                        <p>{item.sector}</p>
                        <p>{item.school}</p>
                        <p>{item.major}</p>
                        <p>{item.timeofstudy}</p>
                        <p>{item.didyoufinished}</p>
                        <p>{item.certificate}</p>
                        <p>{item.nationalID}</p>
                        <p>{item.resume}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllProfileofSkilled;
