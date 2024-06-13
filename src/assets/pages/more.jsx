import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#003566',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CustomizedTables() {
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleServices = () => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/service/viewService").then((res) => {
      setServices(res.data.allServices);
      console.log('Fetched services:', res.data.allServices); // Ensure `category` is present in the data
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleDelete = (id) => {
    setOpenModal(true);
    setDeleteId(id);
  };

  const handleDeleteConfirmed = () => {
    axios.delete(`https://huza-backend-app-api-1.onrender.com/api/service/deleteService?id=${deleteId}`).then((res) => {
      console.log(res);
      handleServices();
      setMessage("Service successfully deleted");
      setIsSuccess(true);
      setOpenModal(false);
    }).catch((err) => {
      console.log(err);
      setMessage("Error deleting service");
      setIsSuccess(false);
      setOpenModal(false);
    });
  };

  const handleDeleteCancelled = () => {
    setOpenModal(false);
  };

  const moveToUpdate = (details) => {
    navigate(`/dashboard/services/updateservice/${details._id}`, { state: details });
  };

  useEffect(() => {
    handleServices();
  }, []);

  return (
    <div className='h-full'>
      <TableContainer component={Paper} className='px-16 py-40'>
        <div className='flex flex-col justify-center items-end mb-4'>
          <div>
            <button className='bg-slate-100 border border-gray-400 rounded-full px-4 py-2'>
              <NavLink to="/dashboard/services/addservice">Add new services</NavLink>
            </button>
          </div>
        </div>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Pictures</StyledTableCell>
              <StyledTableCell align="right">Categories</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="right">Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <img src={row.photo} alt='' className='w-24 h-24' />
                </StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="">
                  <div className='w-full flex flex-col justify-end items-center'>
                    <div className='w-52'>{row.description}</div>
                  </div>
                </StyledTableCell>
                <div className='flex flex-col pr-4 items-end justify-center'>
                  <div className='mt-4 space-x-2'>
                    <button className='text-white bg-blue-900 px-2 py-1 mt-6 ml-6 rounded-lg'
                      onClick={() => moveToUpdate(row)}>Update
                    </button>
                    <button className='text-white bg-slate-950 px-2 py-1 rounded-lg' onClick={() => handleDelete(row._id)}>Delete</button>
                  </div>
                </div>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {message && (
          <p className={`mt-4 ${isSuccess ? 'text-blue-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </TableContainer>
      <Modal
        open={openModal}
        onClose={handleDeleteCancelled}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="modal-modal-title">Confirm Deletion</h2>
          <p id="modal-modal-description">Are you sure you want to delete this service?</p>
          <Button onClick={handleDeleteConfirmed}>Confirm</Button>
          <Button onClick={handleDeleteCancelled}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
