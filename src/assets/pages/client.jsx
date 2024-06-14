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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Client() {
    const [booking, setBooking] = useState([]);
    const [deleteId, setDeleteId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

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

    const handleDelete = () => {
        if (deleteId) {
            axios.delete(`https://huza-backend-app-api-1.onrender.com/api/booking/delete/${deleteId}`)
                .then((res) => {
                    console.log(res.data);
                    handleBooking();
                    setOpenDialog(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        handleBooking();
    }, []);

    const handleOpenDialog = (id) => {
        setDeleteId(id);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
        <TableContainer component={Paper} className=' py-64 px-32 h-full'>
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

                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phoneNumber}</TableCell>
                            <TableCell align="left">{row.details}</TableCell>
                            <TableCell align="center" className=' bg-blue-900  rounded-lg '>
                                <TbHttpDelete className=' text-white text-2xl' onClick={() => handleOpenDialog(row._id)} />
                            </TableCell>

                         
                           

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this booking?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </button>
                    <button onClick={handleDelete} color="primary" autoFocus>
                        Confirm
                    </button>
                </DialogActions>
            </Dialog>
        </TableContainer>
        </div>
    );
}
