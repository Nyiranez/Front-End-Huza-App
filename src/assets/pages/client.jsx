import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TbHttpDelete } from "react-icons/tb";

export default function Client() {
    const [booking, setBooking] = useState([]);

    const handleBooking = () => {
        axios.get("https://huza-backend-app-api-1.onrender.com/api/booking/allbooking")
            .then((res) => {
                console.log(res.data.booking);
                setBooking(res.data.booking);
            })
            .catch((err) => {
                console.error("Error fetching contacts:", err);
            });
    };
    const handleDelete = (id) => {
        axios.delete("https://huza-backend-app-api-1.onrender.com/api/booking/delete/" +id)
            .then((res) => {
                console.log(res.data);
                handleBooking();
               
                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        handleBooking();
    }, []);

    return (
        <div>
        <TableContainer component={Paper} className=' py-44 px-32'>
            <div className=' text-4xl font-bold  flex flex-col items-center justify-center py-5'><p>All Booking</p></div>
            <Table  aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left"><p className='font-bold text-2xl'>FullName</p></TableCell>
                        <TableCell align="left"><p className='font-bold text-2xl'>Email</p></TableCell>
                        <TableCell align="left"><p className='font-bold text-2xl'>PhoneNumber</p></TableCell>
                        <TableCell align="left"><p className='font-bold text-2xl'>Message</p></TableCell>
                        <TableCell align="left"><p className='font-bold text-2xl'>Action</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booking.map((row) => (
                        <TableRow
                            key={row.id} // Ensure each row has a unique key
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                         
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell >{row.phoneNumber}</TableCell>
                            <TableCell >{row.details}</TableCell>
                            <TableCell className=' bg-blue-900  rounded-lg'><TbHttpDelete className=' text-white text-4xl' onClick={()=> handleDelete(row._id)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
