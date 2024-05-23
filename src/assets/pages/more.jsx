import axios from 'axios';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

export default function CustomizedTables() {
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleServices = () => {
    axios.get("https://huza-backend-app-api-1.onrender.com/api/service/viewService").then((res) => {
      setServices(res.data.allServices);
      console.log('Fetched services:', res.data.allServices); // Ensure `category` is present in the data
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`https://huza-backend-app-api-1.onrender.com/api/service/deleteService?id=${id}`).then((res) => {
      console.log(res);
      setMessage("Service successfully deleted");
      setIsSuccess(true);
      handleServices(); // Refresh the list of services after deletion
    }).catch((err) => {
      console.log(err);
      setMessage("Error deleting service");
      setIsSuccess(false);
    });
  };

  useEffect(() => {
    handleServices();
  }, []);

  return (
    <div className='h-full'>
      <TableContainer component={Paper} className='mt-[10rem] px-16 py-6'>
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
                    <button className='text-white bg-blue-900 px-2 py-1 mt-6 ml-6 rounded-lg'>Update</button>
                    <button className='text-white bg-slate-950 px-2 py-1 rounded-lg' onClick={() => handleDelete(row._id)}>Delete</button>
                  </div>
                </div>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {message && (
          <p className={`mt-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </TableContainer>
    </div>
  );
}