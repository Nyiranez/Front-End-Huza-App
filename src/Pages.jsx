import Logo from './assets/images/white.jpeg';
import Huza from './assets/images/black.jpeg';
import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './assets/pages/context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Pages = () => {
    const { mode, setMode } = useContext(AppContext);
    const Navigate= useNavigate();
    const BookingLogout =()=>{
        axios.get("https://huza-backend-app-api-1.onrender.com/api/allUsers/logout")
        .then((resp)=>{
         console.log(resp.data);
         setTimeout(()=>{
           Navigate("/")
         },2000);
        }).catch((error)=>{
         console.log(error);
         alert("failed to logout");
        })
     };
    return (

        <div > 
        <div className={`flex flex-row justify-between items-center fixed w-full z-10 top-0 pt-3 px-6 md:px-32 shadow-sm ${!mode ? 'bg-gradient-to-r from-slate-950 to-slate-700' : 'bg-white'}`}>

        
            <Link to="/">
              {mode ? <img src={Logo} alt="Logo" className="h-16 w-20" /> : <img src={Huza} alt="Huza" className="h-20 pt-4 pb-5" />}
           </Link>

            <div className=" bg-blue-900  rounded-lg w-[5rem] py-2 px-3 text-white">
                
                <button onClick={BookingLogout} className="   ">Logout</button>
            </div>
            </div>
            <Outlet/>

        </div>
      
    )
}