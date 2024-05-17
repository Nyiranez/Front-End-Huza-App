import React from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../assets/pages/context";
const componet = () => {
  const { mode } = useContext(AppContext);
  return (
    <div>
      <div
        className={`${
          !mode ? "bg-gradient-to-r from-slate-950 to-gray-900" : "bg-white"
        }  px-32 pb-20`}
      >
        <div className="flex justify-around gap-10 pt-36 text-2xl">
          <Link to={"/"}>
            <a
              className={`${
                !mode ? "text-white" : "text-black"
              } hover:underline decoration-blue-500 underline-offset-[1.7vh] `}
            >
              About Us
            </a>
          </Link>
          <Link to={"/Mission"}>
            <a
              className={` ${
                !mode ? "text-white" : "text-black"
              } hover:underline decoration-blue-500 underline-offset-[1.7vh] `}
            >
              Our Mission
            </a>
          </Link>
          <Link to={""}>
            <a
              className={` ${
                !mode ? "text-white" : "text-black"
              } hover:underline decoration-blue-500 underline-offset-[1.7vh]`}
            >
              Our Vision
            </a>
          </Link>
        </div>
        <hr className="mt-6"></hr>
        <Outlet/>
      </div>
    </div>
  );
};

export default componet;
