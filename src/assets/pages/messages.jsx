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

export default function Message() {
    const [contacts, setContacts] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const handleContact = () => {
        axios.get("https://huza-backend-app-api-1.onrender.com/api/contact/listContact")
            .then((res) => {
                console.log(res.data.contacts);
                setContacts(res.data.contacts);
            })
            .catch((err) => {
                console.error("Error fetching contacts:", err);
            });
    };

    useEffect(() => {
        handleContact();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://huza-backend-app-api-1.onrender.com/api/contact/deleteContactById?id=${id}`)
            .then((res) => {
                console.log(res.data);
                setSuccessMessage("Successfully deleted the contact.");
                handleContact();
                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000); // Clear the message after 3 seconds
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <TableContainer component={Paper} className='mt-44 h-screen pt-24 pl-16 pr-16 '>
            <div className='bg-gray-50 w-fit mb-8 ml-8 p-4 rounded-xl'>
                <p className='font-bold text-4xl'>All Messages</p>
            </div>
            {successMessage && (
                <div className='w-fit mb-8 ml-8 p-4 rounded-xl'>
                    <p className='text-green-600'>{successMessage}</p>
                </div>
            )}
            <Table sx={{ minWidth: 500  }} size="small" aria-label="a dense table" className='bg-slate-100 rounded-xl'>
                <TableHead>
                    <TableRow >
                        <TableCell align="left" ><p className='text-black font-bold'>FirstName</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>LastName</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>Email</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>PhoneNumber</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>Message</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>Actions</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((row) => (
                        <TableRow
                            key={row.id} // Ensure each row has a unique key
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstName}
                            </TableCell>
                            <TableCell align="left">{row.lastName}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phoneNumber}</TableCell>
                            <TableCell align="left">{row.message}</TableCell>
                            <TableCell align="left">
                                <button className='bg-black text-white px-4 py-2 rounded-xl' onClick={() => handleDelete(row.id)}>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
