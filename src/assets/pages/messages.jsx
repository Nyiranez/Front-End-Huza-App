import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

export default function Message() {
    const [contacts, setContacts] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [deleteId, setDeleteId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

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

    const handleDelete = () => {
        axios.delete(`https://huza-backend-app-api-1.onrender.com/api/contact/deleteContactById?id=${deleteId}`)
            .then((res) => {
                console.log(res.data);
                setSuccessMessage("Successfully deleted the contact.");
                handleContact();
                setDeleteId(null);
                setModalOpen(false);
                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000); // Clear the message after 3 seconds
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setDeleteId(null);
    };

    const handleOpenModal = (id) => {
        setDeleteId(id);
        setModalOpen(true);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return (
        <TableContainer component={Paper} className=' py-24 h-screen pl-16 pr-16 overflow-y-auto'>
            <div className=' w-fit mb-8 ml-8 p-4 rounded-xl'>
                <p className='font-bold text-4xl'>All Messages</p>
            </div>
            {successMessage && (
                <div className='w-fit mb-8 ml-8 p-4 rounded-xl'>
                    <p className='text-green-600'>{successMessage}</p>
                </div>
            )}
            <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table" className='bg-slate-100 rounded-xl'>
                <TableHead>
                    <TableRow >
                        <TableCell align="left"><p className='text-black font-bold'>FirstName</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>LastName</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>Email</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>PhoneNumber</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>Message</p></TableCell>
                        <TableCell align="left"><p className='text-black font-bold'>Actions</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.slice(startIndex, endIndex).map((row, index) => (
                        <TableRow
                            key={row.id} // Ensure each row has a unique key
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className={`table-row ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstName}
                            </TableCell>
                            <TableCell align="left">{row.lastName}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phoneNumber}</TableCell>
                            <TableCell align="left">{row.message}</TableCell>
                            <TableCell align="left">
                                <Button
                                    variant="contained"
                                    
                                    onClick={() => handleOpenModal(row.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination
                className='mt-4 ml-8'
                count={Math.ceil(contacts.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='bg-white p-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <p>Are you sure you want to delete this contact?</p>
                    <div className='mt-4 flex justify-between'>
                        <Button variant="contained" onClick={handleCloseModal}>Cancel</Button>
                        <Button variant="contained" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
            </Modal>
        </TableContainer>
    );
}
