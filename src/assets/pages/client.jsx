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
        <TableContainer component={Paper} className='mt-44  pt-24 pl-16 pr-16'>
            <div className='bg-slate-100 text-4xl font-bold  flex flex-col items-center justify-center mb-8'><p>All Booking</p></div>
            <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" className=''>
                <TableHead>
                    <TableRow>
                        <TableCell align="left"><p className='font-bold'>FullName</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>Email</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>PhoneNumber</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>Message</p></TableCell>
                        <TableCell align="left"><p className='font-bold'>Action</p></TableCell>
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
                            <TableCell align="center">
                                <TbHttpDelete className=' text-red-900 text-4xl' onClick={() => handleOpenDialog(row._id)} />
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
    );
}
