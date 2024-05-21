import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dish/ReactToastify.css";
export const Users = () => {


    // const [loading, setLoading]= useState(false)
    const [user, setUser] = useState([
        { _id: 1, email: "nyiranezalouise93@GiMailShirt.com", fullName: " Marie louise", role: "Admin" },
        { _id: 2, email: "nyiranezalouise93@GiMailShirt.com", fullName: " Marie louise", role: "Admin" },
        { _id: 3, email: "nyiranezalouise93@GiMailShirt.com", fullName: " Marie louise", role: "Admin" },
        { _id: 4, email: "nyiranezalouise93@GiMailShirt.com", fullName: " Marie louise", role: "Admin" },
        { _id: 5, email: "nyiranezalouise93@GiMailShirt.com", fullName: " Marie louise", role: "Admin" },
        { _id: 6, email: "nyiranezalouise93@GiMailShirt.com", fullName: " Marie louise", role: "Admin" }
    ])
    const handledelete = (id) => {
        if (window.confirm("do you really want to delete?")) {
            setUser(user.filter((item) => item._id !== id));
            // toast.success(" successfully deleted")
        }
    };
    const userDisplay = 
        user.map((item) => (
            <tr key={item._id}>
                <td>{item.email}</td>
                <td>{item.fullName}</td>
                <td>{item.role}</td>
                <td>
                    <span className='space-x-4 ml-16'>
                    <NavLink  to="/dashboard/updatedash"> <button onClick ={() =>handleEdit (item._id)} className='bg-green-400 px-4 py-2' >Edit </button></NavLink>
                        <button onClick={() =>handledelete(item._id)} className='bg-red-400 px-4 py-2'>Delete</button>
                    </span>
                </td>
            </tr>

        ));
    
    return (
        <div className=' mt-24'>
            {/* <ToastContainer/> */}
           
            <table className='border-2 border-gray-500 p-8 space-x-8'>
<thead>
    <tr className='space-x-16'>
        <th >Email</th>
        <th>Names</th>
        <th>Role</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>{userDisplay}</tbody>
            </table>
        </div>
    )
}
