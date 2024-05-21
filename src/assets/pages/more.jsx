import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Profile from '../../../public/master.jfif';
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(categories, description,) {
  return { categories, description, };
}

const rows = [
  createData("CurnaryArt", " Culinary arts is the practice of preparing and cooking food."),
  createData("Braiding", "   Braiding is a technique of weaving together three or more strands of hair"),
  createData("MakeUp", " Makeup design  involves the application of cosmetics to enhance or alter a person's  appearance. "),
  createData("Plainters", " Planters are containers used for growing plants, flowers, herbs, or vegetables."),

];

export default function CustomizedTables() {
  return (
    <div className='h-full'>

      <TableContainer component={Paper} className='mt-[10rem] px-16 py-6'>
        <div className='flex flex-col justify-center items-end mb-4'>
          <div> <button className='bg-slate-100 border border-gray-400 rounded-full px-4 py-2'>Add new services</button></div>
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
            {rows.map((row, index) => (
              <StyledTableRow key={index} >
                <StyledTableCell component="th" scope="row">
                  <img src={Profile} alt='' className='w-24 h-24'></img>
                </StyledTableCell>
                <StyledTableCell align="right">{row.categories}</StyledTableCell>
                <StyledTableCell align="" ><div className='w-full flex flex-col justify-end items-center  '><div className=' w-52'>{row.description}</div></div></StyledTableCell>
                <div className=' flex flex-col pr-4 items-end justify-center'>
                  <div className=' mt-4 space-x-2  '>
                    <button className='text-white bg-blue-900 px-2 py-1  mt-6 ml-6 rounded-lg'>Update</button>
                    <button className='text-white bg-slate-950 px-2 py-1 rounded-lg '>Delete</button>

                  </div>
                </div>




              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>

    </div>
  );
}