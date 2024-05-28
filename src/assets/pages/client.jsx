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
        axios.delete("https://huza-backend-app-api-1.onrender.com/api/booking/delete?id=/" +id)
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
        <TableContainer component={Paper} className='mt-44  pt-24 pl-16 pr-16'>
            <div className='bg-slate-100 text-4xl font-bold  flex flex-col items-center justify-center mb-8'><p>All Booking</p></div>
            <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" className=''>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"><p className='font-bold'>FullName</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>Email</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>PhoneNumber</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>Message</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booking.map((row) => (
                        <TableRow
                            key={row.id} // Ensure each row has a unique key
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                         
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phoneNumber}</TableCell>
                            <TableCell align="left">{row.details}</TableCell>
                            <TableCell align="center" className='bg-gray-500'><TbHttpDelete className=' text-red-900 text-4xl' onClick={()=> handleDelete(row._id)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
