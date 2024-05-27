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

    const handleContact = () => {
        axios.get("https://huza-backend-app-api-1.onrender.com/api/contact/listContact")
            .then((res) => {
                console.log(res.data);
                setContacts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching contacts:", err);
            });
    };

    useEffect(() => {
        handleContact();
    }, []);

    return (
        <TableContainer component={Paper} className='mt-44 h-screen pt-24'>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">FirstName</TableCell>
                        <TableCell align="left">LastName</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">PhoneNumber</TableCell>
                        <TableCell align="left">Message</TableCell>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
